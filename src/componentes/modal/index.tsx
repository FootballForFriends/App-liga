import { Button, Modal } from 'antd';
import React from 'react'

interface IModalProps {
  buttonTitle: string;
  modalTitle: string;
}

const ModalButton: React.FC<IModalProps> = ({ buttonTitle, modalTitle, children }) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const showModal = () => setIsModalVisible(true);
  const handleOk = () => setIsModalVisible(false);
  const handleCancel = () => setIsModalVisible(false);

  return (<>
    <Button type="primary" onClick={showModal}>
      {buttonTitle}
    </Button>
    <Modal title={modalTitle} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      {children}
    </Modal>
  </>);
}

export default ModalButton;
