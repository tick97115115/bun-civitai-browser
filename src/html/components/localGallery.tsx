import {
  Affix,
  Button,
  Card,
  List,
  FloatButton,
  Pagination,
  type PaginationProps,
  Space,
} from "antd";
import { SyncOutlined, SearchOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { edenTreaty, getFileType } from "../utils";
import { type ModelsRequestOpts } from "../../modules/civitai/models/models_endpoint";
import { type ModelWithAllRelations } from "../../modules/civitai/service/crud/modelId";

const FloatingButtons: React.FC = () => (
  <>
    <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24 }}>
      <FloatButton icon={<SearchOutlined />} />
      <FloatButton icon={<SyncOutlined />} />
      <FloatButton.BackTop visibilityHeight={0} />
    </FloatButton.Group>
  </>
);

function localPagination({
  total,
  searchOpt,
  setSearchOpt,
}: {
  total: number;
  searchOpt: ModelsRequestOpts;
  setSearchOpt: React.Dispatch<React.SetStateAction<ModelsRequestOpts>>;
}) {
  const onChange: PaginationProps["onChange"] = (page, pageSize) => {
    setSearchOpt({ ...searchOpt, page, limit: pageSize });
  };
  return (
    <Pagination
      pageSize={searchOpt.limit}
      current={searchOpt.page}
      total={total}
      onChange={onChange}
      showSizeChanger
      showQuickJumper
      showTotal={(total) => `Total ${total} items`}
    />
  );
}

function mediaElement(fileName: string) {
  const fileType = getFileType(fileName);
  const srcPath = `${location.origin}/civitai/local/media/preview?previewFile=${fileName}`;
  if (fileType === "video") {
    return <video src={srcPath} autoPlay loop></video>;
  } else if (fileType === "image") {
    return <img src={srcPath}></img>;
  } else {
    return <p>unknown file type: {fileName}</p>;
  }
}

function paginationGallery() {
  const [searchOpt, setSearchOpt] = useState<ModelsRequestOpts>({
    page: 1,
    limit: 20,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [models, setModels] = useState<Array<ModelWithAllRelations>>();
  const [totalCount, setTotalCount] = useState<number>(0);
  async function fetchModels(opts: ModelsRequestOpts) {
    try {
      const { data, error, headers, response, status } =
        await edenTreaty.civitai.local.models.pagination.post(opts);
      setModels(data?.records);
      setTotalCount(data?.totalCount ?? 0);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchModels(searchOpt);
  }, [searchOpt]); // [] 表示组件挂载时只执行一次

  return (
    <>
      {loading ? (
        <div>loading</div>
      ) : (
        <>
          <Space align="center" direction="vertical" className="w-full px-2">
            {localPagination({
              total: totalCount,
              searchOpt: searchOpt,
              setSearchOpt,
            })}
            <List
              grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 6,
                xxl: 3,
              }}
              dataSource={models}
              renderItem={(item) => (
                <List.Item>
                  <Card
                    hoverable
                    cover={
                      item.previewFile ? (
                        mediaElement(item.previewFile)
                      ) : (
                        <img title="Have no preview" />
                      )
                    }
                  >
                    <Card.Meta description={item.name} />
                  </Card>
                </List.Item>
              )}
            />
            {localPagination({
              total: totalCount,
              searchOpt: searchOpt,
              setSearchOpt,
            })}
          </Space>
          <FloatingButtons />
        </>
      )}
    </>
  );
}

export default paginationGallery;
