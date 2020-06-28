import React from 'react';
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const Search: React.FC = () => {
  const [value, setValue] = React.useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }
  return (<>
    <Input className='search' placeholder='Busque por jogador ou time' onChange={onChange} value={value} />
    <Button className='buttonSearch' type="primary" icon={<SearchOutlined />} size='middle' />
  </>);
}

export default Search;