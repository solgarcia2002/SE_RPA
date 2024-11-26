export type TableRowData = {
  id: number;
  "Fecha de comienzo": string;
  "Fecha de fin": string;
  "Cantidad en proceso": number;
  "Monto facturado": string;
  Estado: string;
  Acciones: string;
  estadoProgreso:number
};

// Definir los datos de la tabla
export const tableData: TableRowData[] = [
  {
    id: 1,
    "Fecha de comienzo": "2024-11-20",
    "Fecha de fin": "2024-11-23",
    "Cantidad en proceso": 15,
    "Monto facturado": "$12,500",
    Estado: "En tránsito",
    Acciones: "Editar / Eliminar",
    estadoProgreso: 3, // Paso actual
  },
  {
    id: 2,
    "Fecha de comienzo": "2024-11-15",
    "Fecha de fin": "2024-11-18",
    "Cantidad en proceso": 30,
    "Monto facturado": "$25,000",
    Estado: "Entregado",
    Acciones: "Editar / Eliminar",
    estadoProgreso: 5, // Paso actual
  },
  {
    id: 3,
    "Fecha de comienzo": "2024-11-10",
    "Fecha de fin": "2024-11-12",
    "Cantidad en proceso": 10,
    "Monto facturado": "$8,000",
    Estado: "Pendiente",
    Acciones: "Editar / Eliminar",
    estadoProgreso: 1, // Paso actual
  },
];
