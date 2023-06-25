import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  hora: string;
  gdx: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Hora",
    dataIndex: "hora",
    key: "hora",
  },
  {
    title: "GDx [MW]",
    dataIndex: "gdx",
    key: "gdx",
  },
];

const DataTable = ({
  data,
  getRowClassName,
}: {
  data: DataType[];
  getRowClassName: (record: DataType) => string;
}) => (
  <Table
    columns={columns}
    dataSource={data}
    size="small"
    // bordered
    tableLayout="auto"
    pagination={false}
    scroll={{ y: "50vh" }}
    rowClassName={getRowClassName}
    style={{ textAlign: "center" }}
  />
);

export default DataTable;
