import { Row, Col, Button, Input } from 'antd';
import CustomTable from '../../componentes/table';

const Principal: React.FC = () => {
  const { Search } = Input;
  return (<>
    <Row align='middle' justify='center'>
      <Col flex='50%'>
        <Search
          placeholder='Pesquisar...'
          onSearch={(value: any) => console.log('buscando...', value)}
          style={{ width: '100%' }}
        />
      </Col>
      <Col flex='20%'>
        <Button type='default'>
          Adicionar jogador
          </Button>
      </Col>
    </Row>
    <br />
    <Row align='middle' justify='center'>
      <Col flex='90%'>
        <CustomTable />
      </Col>
    </Row>
  </>)
}

export default Principal;
