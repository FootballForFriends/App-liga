import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ConfigProvider } from 'antd';
import ptBr from 'antd/es/locale/pt_BR';

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={ptBr}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
