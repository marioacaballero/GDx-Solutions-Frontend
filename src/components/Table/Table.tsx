import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: number;
  hora: string;
  ejecutado: string;
  diario: string;
  semanal: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Hora",
    dataIndex: "hora",
    key: "hora",
  },
  {
    title: "Ejecutado [MW]",
    dataIndex: "ejecutado",
    key: "ejecutado",
  },
  {
    title: "Prog. Diaria [MW]",
    dataIndex: "diario",
    key: "diario",
  },
  {
    title: "Prog. Semanal [MW]",
    dataIndex: "semanal",
    key: "semanal",
  },
];

const DataTable = ({ data, title }: { data: DataType[]; title: string }) => (
  <Table
    columns={columns}
    dataSource={data}
    size="small"
    title={() => title}
    bordered
    tableLayout="auto"
  />
);

export default DataTable;
