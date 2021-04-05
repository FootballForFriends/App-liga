import { Button, FormInstance, Modal } from 'antd';
import React from 'react'

interface IModalProps {
  buttonTitle: string;
  modalTitle: string;
  form?: FormInstance<any>;
}

const ModalButton: React.FC<IModalProps> = ({ buttonTitle, modalTitle, children, form }) => {

  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const showModal = () => setIsModalVisible(true);
  const handleOk = () => {
    if (form) {
      form.submit()
    }
    setIsModalVisible(false);
  };
  const handleCancel = () => setIsModalVisible(false);

  return (<>
    <Button type="primary" onClick={showModal}>
      {buttonTitle}
    </Button>
    <Modal title={modalTitle} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText='Confirmar' cancelText='Cancelar'>
      {children}
    </Modal>
  </>);
}

export default ModalButton;
