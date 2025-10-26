import {
  Affix,
  AutoComplete,
  Card,
  Col,
  FloatButton,
  Input,
  List,
  Modal,
  Pagination,
  type PaginationProps,
  Row,
  Select,
  type SelectProps,
  Space,
  Tabs,
} from "antd";
const { Search } = Input;
import { SearchOutlined, SyncOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { edenTreaty, getFileType } from "../utils";
import {
  Model,
  type ModelsRequestOpts,
  ModelVersion,
} from "../../modules/civitai/models/models_endpoint";
import { type ModelTypes } from "../../modules/civitai/models/baseModels/misc";
import { type ModelWithAllRelations } from "../../modules/civitai/service/crud/modelId";
import ModalPanel from "./modalPanel";

// https://ant.design/components/select#select-demo-select-users
function FloatingButtons() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(<></>);

  function SearchPanel(
    searchOpt: ModelsRequestOpts,
    setSearchOpt: React.Dispatch<React.SetStateAction<ModelsRequestOpts>>,
  ) {
    const options: SelectProps["options"] = [];
    const onSearch = (value: string) => {};
    return (
      <>
        <Space direction="vertical">
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
            value={searchOpt.query}
          />
          <Select
            placeholder="Base model"
            value={searchOpt.baseModels}
          >
          </Select>
          <Select placeholder="Model Type" value={searchOpt.types}></Select>
          <Select
            placeholder="Checkpoint Type"
            value={searchOpt.checkpointType}
          >
          </Select>
          <Select placeholder="Period" value={searchOpt.period}></Select>
          <Select placeholder="Sort" value={searchOpt.sort}></Select>
          <Select placeholder="Tag" value={searchOpt.tag}></Select>
        </Space>
      </>
    );
  }

  return (
    <>
      <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24 }}>
        <FloatButton icon={<SearchOutlined />} onClick={() => {}} />
        <FloatButton icon={<SyncOutlined />} />
        <FloatButton.BackTop visibilityHeight={0} />
      </FloatButton.Group>
      <ModalPanel isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        {modalContent}
      </ModalPanel>
    </>
  );
}

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
  const srcPath =
    `${location.origin}/civitai/local/media/preview?previewFile=${fileName}`;
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
      const { data, error, headers, response, status } = await edenTreaty
        .civitai.local.models.pagination.post(opts);
      setModels(data?.records);
      setTotalCount(data?.totalCount ?? 0);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }

  const [cardModalContent, setCardModalContent] = useState(<></>);
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [activeVersionId, setActiveVersionId] = useState(``);
  async function openModelCard(dbModel: ModelWithAllRelations) {
    const { data, error, headers, response, status } = await edenTreaty
      .civitai.local.models.modelId.post({
        modelId: dbModel.id,
        modelVersionIdNumbers: dbModel.modelVersions.map((v) => v.id),
        type: dbModel.type.name as ModelTypes,
      });
    if (error) {
      switch (error.status) {
        case 422:
          setCardModalContent(
            <>
              {JSON.stringify(error.value, null, 2)}
            </>,
          );
        default:
          setCardModalContent(
            <div>Unknown Exception</div>,
          );
      }
    } else {
      setCardModalContent(
        <>
          <Tabs
            defaultActiveKey="1"
            tabPosition="top"
            onChange={(id) => setActiveVersionId(id)}
            items={data?.modelVersions.map((v) => {
              const rightSide = (
                <>
                  <div onClick={() => console.log("yes")}>
                    {dbModel.previewFile
                      ? (
                        mediaElement(dbModel.previewFile)
                      )
                      : <img title="Have no preview" />}
                  </div>
                </>
              );
              return {
                label: v.name,
                key: v.id.toString(),
                children: (
                  <Card>
                    <div>
                      <a
                        className="clickable-title"
                        target="_blank"
                        href={`https://civitai.com/models/${dbModel.id}?modelVersionId=${activeVersionId}`}
                      >
                        {data.name}
                      </a>
                    </div>
                    <Row>
                      <Col sm={8} lg={6}>{rightSide}</Col>
                      <Col sm={16} lg={18}></Col>
                    </Row>
                  </Card>
                ),
              };
            })}
          />
        </>,
      );
    }
    setIsCardModalOpen(true);
  }

  useEffect(() => {
    fetchModels(searchOpt);
  }, [searchOpt]); // [] 表示组件挂载时只执行一次

  return (
    <>
      {loading ? <div>loading</div> : (
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
                    onClick={() => openModelCard(item)}
                    hoverable
                    cover={item.previewFile
                      ? (
                        mediaElement(item.previewFile)
                      )
                      : <img title="Have no preview" />}
                  >
                    <Card.Meta description={item.name} />
                  </Card>
                </List.Item>
              )}
            />
          </Space>
          <Modal
            width={1000}
            onOk={() => setIsCardModalOpen(false)}
            onCancel={() => setIsCardModalOpen(false)}
            closable={false}
            open={isCardModalOpen}
            footer={null}
            centered
            destroyOnHidden={true} // force refetch data by force destory DOM
          >
            {loading ? <div>loading</div> : cardModalContent}
          </Modal>
          <FloatingButtons />
        </>
      )}
    </>
  );
}

export default paginationGallery;
