import React from 'react';
import { uuid } from 'uuidv4';
import { BgColorsOutlined, UserOutlined, VerifiedOutlined } from '@ant-design/icons';
import { Row, Col, Input, Form } from 'antd';
import ModalButton from '../../componentes/modal';
import CustomTable from '../../componentes/table';

interface IFormProps {
  [key: string]: any;
}

const Principal: React.FC = () => {
  const [form] = Form.useForm();
  const [jogadores, setJogadores] = React.useState<IFormProps[]>([{ nome: "asd", time: "teste", corPrimaria: "asd", corSecundaria: "asd", key: "78de41cc-c45d-407f-b981-e41985ec799e" }]);
  const { Search } = Input;

  const onFinish = (values: any) => {
    const jogador: { [key: string]: any } = {};

    for (const value in values) {
      jogador[value] = values[value];
    }

    jogador['key'] = uuid();

    setJogadores([...jogadores, jogador]);
  };

  return (<>
    <Row align='middle' justify='space-around'>
      <Col flex='90%'>
        <Row align='middle' justify='space-around' gutter={{ xs: 4, sm: 8, md: 14, lg: 10 }}>
          <Col flex='auto'>
            <Search
              placeholder='Pesquisar...'
              onSearch={(value: any) => console.log('buscando...', value)}
              style={{ width: '100%' }}
            />
          </Col>
          <Col flex='142px'>
            <ModalButton buttonTitle='Adicionar jogador' modalTitle='Adicione um jogador' form={form}>
              <Form form={form} name="form_in_modal" onFinish={onFinish}>
                <Row align='middle' justify='space-around' gutter={[4, 4]}>
                  <Col flex='auto'>
                    <Form.Item name='nome'>
                      <Input placeholder="Nome" prefix={<UserOutlined />} />
                    </Form.Item>
                  </Col>
                  <Col flex='auto'>
                    <Form.Item name='time'>
                      <Input placeholder="Time" prefix={<VerifiedOutlined />} />
                    </Form.Item>
                  </Col>

                  <Col flex='auto'>
                    <Form.Item name='corPrimaria'>
                      <Input placeholder="Cor primária" prefix={<BgColorsOutlined />} />
                    </Form.Item>
                  </Col>
                  <Col flex='auto'>
                    <Form.Item name='corSecundaria'>
                      <Input placeholder="Cor secundaria" prefix={<BgColorsOutlined />} />
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </ModalButton>
          </Col>
        </Row>
      </Col>
    </Row>
    <br />
    <Row align='middle' justify='center'>
      <Col flex='90%'>
        <CustomTable data={jogadores} setData={setJogadores} />
      </Col>
    </Row>
  </>)
}

export default Principal;
