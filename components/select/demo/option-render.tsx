import React from 'react';
import { Select, Space } from 'antd';

const handleChange = (value: string[]) => {
  console.log(`selected ${value}`);
};

const options = [
  {
    label: '未着手',
    value: '0',
    desc: '未着手',
  },
  {
    label: '作業中',
    value: '1',
    desc: '作業中',
  },
  {
    label: '完了',
    value: '2',
    desc: '完了',
  },
];

const App: React.FC = () => (
  <Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="select one country"
    defaultValue={['china']}
    onChange={handleChange}
    options={options}
    optionRender={(option) => (
      <Space>
        <span role="img" aria-label={option.data.label}>
          {option.data.emoji}
        </span>
        {option.data.desc}
      </Space>
    )}
  />
);

export default App;
