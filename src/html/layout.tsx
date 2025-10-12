import { Flex, Layout, Menu, type MenuProps, Modal } from "antd";
import { type } from "arktype";
import React, { useState } from "react";
import {
  AppstoreOutlined,
  FileSearchOutlined,
  MailOutlined,
  SearchOutlined,
  SettingFilled,
  SettingOutlined,
} from "@ant-design/icons";
import SearchPanel from "./components/searchPanel";
import SettingsPanel from "./components/settingsPanel";
const { Header, Footer, Sider, Content } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

enum MenuItemKeys {
  Search = "search",
  Settings = "settings",
}

const items: MenuItem[] = [
  {
    label: "Search",
    key: MenuItemKeys.Search,
    icon: <SearchOutlined />,
  },
  {
    label: "Settings",
    key: MenuItemKeys.Settings,
    icon: <SettingFilled />,
  },
  // {
  //   label: "Navigation Two",
  //   key: "app",
  //   icon: <AppstoreOutlined />,
  //   disabled: true,
  // },
  // {
  //   label: "Navigation Three - Submenu",
  //   key: "SubMenu",
  //   icon: <SettingOutlined />,
  //   children: [
  //     {
  //       type: "group",
  //       label: "Item 1",
  //       children: [
  //         { label: "Option 1", key: "setting:1" },
  //         { label: "Option 2", key: "setting:2" },
  //       ],
  //     },
  //     {
  //       type: "group",
  //       label: "Item 2",
  //       children: [
  //         { label: "Option 3", key: "setting:3" },
  //         { label: "Option 4", key: "setting:4" },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   key: "alipay",
  //   label: (
  //     <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
  //       Navigation Four - Link
  //     </a>
  //   ),
  // },
];

function PublicMenuModal(
  { isModalOpen, setIsModalOpen, children }: {
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.JSX.Element;
  },
) {
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      // title="Basic Modal"
      closable={false}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      destroyOnHidden={true} // force refetch data by force destory DOM
    >
      {children}
    </Modal>
  );
}

function app() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(<></>);
  function showMenuModal({ children }: { children: React.JSX.Element }) {
    setModalContent(children);
    setIsModalOpen(true);
  }

  const [current, setCurrent] = useState("search");
  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    switch (e.key) {
      case MenuItemKeys.Search:
        showMenuModal({ children: <SearchPanel /> });
        break;
      case MenuItemKeys.Settings:
        showMenuModal({ children: <SettingsPanel /> });
        break;

      default:
        break;
    }
  };
  return (
    <Layout className="h-dvh">
      <Header>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        >
        </Menu>
        <PublicMenuModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          children={modalContent}
        />
      </Header>
      <Content>Content</Content>
      {/* <Footer>Footer</Footer> */}
    </Layout>
  );
}

export default app;
