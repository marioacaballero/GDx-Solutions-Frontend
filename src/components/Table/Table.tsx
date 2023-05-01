import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  fecha: string;
  ejecutado: string;
  diario: string;
  semanal: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Fecha",
    dataIndex: "fecha",
    key: "fecha",
  },
  {
    title: "Ejecutado",
    dataIndex: "ejecutado",
    key: "ejecutado",
  },
  {
    title: "Prog. Diario",
    dataIndex: "progDiario",
    key: "progDiario",
  },
  {
    title: "Prog. Semanal",
    key: "progSemanla",
    dataIndex: "progSemanla",
  },
];

const DataTable = (data: DataType[]) => (
  <Table columns={columns} dataSource={data} />
);

export default DataTable;
