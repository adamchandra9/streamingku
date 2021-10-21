import { Button, Form, Layout } from 'antd';

import CIcon from './CIcon';
import Modal from 'react-modal';
import React from 'react';

interface IProps {
  modalIsShow;
  modalstyles?;
  handleCancel;
  headerComponent;
  contentComponent;
  footerComponent;
  isForm?;
  handleSubmit?;
}

const defaultModalstyles = {
  content: {
    position: 'relative',
    background: 'none',
    maxWidth: '95vw',
    width: '800px',
    padding: '0px',
    border: 'none',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '50px',
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.75)',
    zIndex: '99',
  },
};

export default function CModal(props: IProps) {
  const { Header, Footer, Content } = Layout;
  const {
    isForm,
    modalIsShow,
    modalstyles,
    handleCancel,
    headerComponent,
    footerComponent,
    contentComponent,
    handleSubmit,
  } = props;
  const renderContent = () => {
    if (isForm) {
      return (
        <Form onSubmit={handleSubmit} style={{}}>
          <Content className="contentModal">{contentComponent}</Content>
          <Footer className="footerModal">{footerComponent}</Footer>
        </Form>
      );
    } else {
      return (
        <React.Fragment>
          <Content className="contentModal">{contentComponent}</Content>
          <Footer className="footerModal">{footerComponent}</Footer>
        </React.Fragment>
      );
    }
  };
  return (
    <Modal
      isOpen={modalIsShow}
      style={modalstyles ? modalstyles : defaultModalstyles}
      className={
        modalIsShow
          ? 'modalStyleContainer'
          : 'modalStyleContainer modalStyleContainerClose'
      }
    >
      <Layout className="layoutModal">
        <Button
          type="primary"
          className="buttonCloseModal"
          onClick={handleCancel}
        >
          <CIcon type={'CloseOutlined'} />
        </Button>
        <Header className="headerModal">{headerComponent}</Header>
        {renderContent()}
      </Layout>
    </Modal>
  );
}
