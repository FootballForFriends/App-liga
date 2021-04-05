import { Row, Col, Layout, Button } from 'antd';
import { UserAddOutlined, ClockCircleOutlined, UnorderedListOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;

const BaseLayout: React.FC = (props) => {
  return (<Layout>
    <Header style={{ background: '#F2F2F2' }}>
      <Row align='middle' justify='space-between'>
        <Col xs={4}>
          <Button type='text' size='large' >
            <UserAddOutlined />
          </Button>
        </Col>
        <Col xs={4}>
          <Button type="text" size='large'>
            <ClockCircleOutlined />
          </Button>
        </Col>
        <Col xs={4}>
          <Button type="text" size='large'>
            <UnorderedListOutlined />
          </Button>
        </Col>
      </Row>
    </Header>
    <Content style={{ background: '#A7A8A2', minHeight: 'calc(100vh - 64px)', padding: '20px 0px' }}>
      {props.children}
    </Content>
  </Layout>)
}

export default BaseLayout;
