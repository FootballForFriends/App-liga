import React from 'react'
import { Table, Popconfirm, Form, Input } from 'antd'

const EditableContext = React.createContext<any>({});

const EditableRow = ({ index, ...props }: any) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({ title, editable, children, dataIndex, record, handleSave, ...restProps }: any) => {
  const [editing, setEditing] = React.useState(false);
  const inputRef = React.useRef<any>();
  const form = React.useContext(EditableContext);
  React.useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex]
    });
  };

  const save = async (e: any) => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`
          }
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
        <div
          className="editable-cell-value-wrap"
          style={{
            paddingRight: 24
          }}
          onClick={toggleEdit}
        >
          {children}
        </div>
      );
  }

  return <td {...restProps}>{childNode}</td>;
};

interface IProps {

}

const CustomTable: React.FC<IProps> = () => {
  const [dataSource, setDataSource] = React.useState({
    data: [
      {
        key: "0",
        name: "Jose champs",
        age: "Pereba futebol clube"
      },
      {
        key: "0",
        name: "José não champs",
        age: "Os perna quebrada futebool clube"
      }
    ],
    count: 22
  });

  const handleDelete = (key: any) => {
    const aux = [...dataSource.data];
    setDataSource({
      ...dataSource,
      data: aux.filter((item: any) => item.key !== key)
    });
  };

  const columns = [
    {
      title: "Jogador",
      dataIndex: "name",
      width: "40%",
      editable: true
    },
    {
      title: "Time",
      dataIndex: "age",
      width: "40%"
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (text: any, record: any) =>
        dataSource.data.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.key)}
          >
            <a href='/#' >Delete</a>
          </Popconfirm>
        ) : null
    }
  ];
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell
    }
  };
  return (
    <Table
      components={components}
      rowClassName={() => "editable-row"}
      bordered
      dataSource={dataSource.data}
      columns={columns}
    />
  )
}

export default CustomTable
