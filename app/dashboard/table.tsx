"use client";

import Button from "@/components/button";
import {
  faArrowUpFromBracket,
  faClipboard,
  faDownload,
  faPlus,
  faRepeat,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { roboto } from "../fonts/fonts";
import { tableData, TableRowData } from "@/dataExample";
import ProgressBar from "@/components/progressBar";
import { useState } from "react";
import FileDropzone from "@/components/dragAndDrop";


const tableColumns = [
  { id: "Fecha de comienzo", name: "Fecha de comienzo" },
  { id: "Fecha de fin", name: "Fecha de fin" },
  { id: "Cantidad en proceso", name: "Cantidad en proceso" },
  { id: "Monto facturado", name: "Monto facturado" },
  { id: "Estado", name: "Estado" },
  { id: "Acciones", name: "Acciones" },
];

export default function TableInfo() {
  const [ openDragAndDrop, setOpenDragAndDrop ] = useState<boolean>(false);
  const renderCell = (item: TableRowData, columnKey: string) => {
    const cellValue = item[columnKey as keyof TableRowData];

    switch (columnKey) {
      case "Acciones":
        return (
          <div className="flex items-center gap-2">
            <button className="text-darkGreen" aria-label="Descargar archivo">
              <FontAwesomeIcon icon={faDownload} />
            </button>
            <button className="text-lightGreen" aria-label="Copiar al portapapeles">
              <FontAwesomeIcon icon={faClipboard}/>
            </button>
          </div>
        );
      case "Estado":
        return <ProgressBar currentStep={item.estadoProgreso || 1} />;
      default:
        return cellValue;
    }
  };

  return (
    <div>
      <div className="flex gap-5">
        <Button>
          <FontAwesomeIcon icon={faRepeat} className="mr-5" />
          Actualizar
        </Button>
        <Button>
          <FontAwesomeIcon icon={faArrowUpFromBracket} className="mr-5" />
          Exportar
        </Button>
        <Button style="emphasis" onClick={() => setOpenDragAndDrop(true)} ariaLabel="Descargar archivo" >
          <FontAwesomeIcon icon={faPlus} className="mr-5" />
          Agregar
        </Button>
      </div>

      {openDragAndDrop && 
        <div className=" flex items-center justify-center bg-white h-[10rem]">
        <FileDropzone />
      </div>
      }

      <Table
      aria-label="Información de la tabla"
        className={`${roboto.className} border-none mt-8 pr-8`}
        removeWrapper
        classNames={{ th: "border-b text-lightGreen bg-white" }}
      >
        <TableHeader>
          {tableColumns.map((tab) => (
            <TableColumn key={tab.id} aria-label={tab.name}>{tab.name}</TableColumn>
          ))}
        </TableHeader>
        <TableBody
          emptyContent={"No rows to display."}
          items={tableData}
        >
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                // Convertir columnKey a string para que TypeScript lo acepte
                <TableCell>{renderCell(item, columnKey as string)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
