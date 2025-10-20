import { Modal } from "antd";
function PublicMenuModal({
  isModalOpen,
  setIsModalOpen,
  children,
}: {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.JSX.Element;
}) {
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

export default PublicMenuModal;
