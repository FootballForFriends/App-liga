import React from 'react';
import { DatePicker, message, Alert, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import './assets/app.less';
import BaseLayout from './componentes/base-layout';
import Principal from './pages/principal';

function App() {
  const [date, setDate] = React.useState<any>();

  const handleChange = (value: any) => {
    message.info(`Data selecionada: ${value ? value.format('DD-MM-YYYY') : 'None'}`);
    setDate(value);
  };

  return (<BaseLayout>
    <Principal />
  </BaseLayout>
  );
}

export default App;
