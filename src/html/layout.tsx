import { type MenuProps, Modal, Tabs, type TabsProps } from "antd";
import React, { useState } from "react";
import { SettingFilled } from "@ant-design/icons";
import SettingsPanel from "./components/settingsPanel";
import LocalGallery from "./components/localGallery";

type MenuItem = Required<MenuProps>["items"][number];

enum MenuItemKeys {
  Settings = "settings",
  Local = `Local`,
  CivitAI = `CivitAI`,
}

const items: MenuItem[] = [
  {
    label: "Settings",
    key: MenuItemKeys.Settings,
    icon: <SettingFilled />,
  },
];

function galleryContent() {
  const galleries: TabsProps["items"] = [
    {
      label: `Local`,
      key: MenuItemKeys.Local,
      children: <LocalGallery />,
    },
    {
      label: `CivitAI`,
      key: MenuItemKeys.CivitAI,
      children: `CivitAI`,
    },
    {
      label: `Settings`,
      key: MenuItemKeys.Settings,
      children: <SettingsPanel />,
      destroyOnHidden: true,
    },
  ];
  return <Tabs defaultActiveKey="1" centered items={galleries} />;
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
      // case MenuItemKeys.Search:
      //   showMenuModal({ children: <SearchPanel /> });
      //   break;
      case MenuItemKeys.Settings:
        showMenuModal({ children: <SettingsPanel /> });
        break;

      default:
        break;
    }
  };
  return <div className="h-dvh">{galleryContent()}</div>;
}

export default app;
