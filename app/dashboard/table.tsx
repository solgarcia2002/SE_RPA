"use client";

import { useState, useEffect } from "react";
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
  Spinner
} from "@nextui-org/react";
import { roboto } from "../fonts/fonts";
import ProgressBar from "@/components/progressBar";
import FileDropzone from "@/components/dragAndDrop";
import { Session } from 'next-auth';

const API_URL = "http://localhost:3001/api/procesar-paypal"; // Update with your real API

// Define Types for API Data
interface TableData {
  _id: string;
  usuario: string;
  fechaHora: string;
  estadoOperacion: string;
  archivoProcesado: string;
  archivoResultado?: string;
}

const tableColumns = [
  { id: "usuario", name: "Usuario" },
  { id: "fechaHora", name: "Fecha de proceso" },
  { id: "estadoOperacion", name: "Estado" },
  { id: "archivoProcesado", name: "Archivo" },
  { id: "archivoResultado", name: "Resultado" },
  { id: "acciones", name: "Acciones" },
];



interface TableInfoProps {
  session: Session | null; 
}
export default  function TableInfo({ session}:TableInfoProps) {
  
  const [openDragAndDrop, setOpenDragAndDrop] = useState<boolean>(false);
  const [tableData, setTableData] = useState<TableData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [uploading, setUploading] = useState<boolean>(false);

  const user = { name: session?.user?.name ?? 'system'  , email: session?.user?.email ?? 'system@servientrega.com'}; // Static user

  // 🔹 Fetch Data from API
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const result = await response.json();

      if (!result.data) throw new Error("Invalid API response");

      // Ensure unique key is set
      const processedData: TableData[] = result.data.map((item: TableData) => ({
        ...item,
        _id: item._id || item.archivoProcesado, // Use _id or fallback
      }));

      setTableData(processedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  // 🔹 Load Data on Component Mount
  useEffect(() => {
    fetchData();
  }, []);

  // 🔹 Handle File Upload
  const handleFileUpload = async (file: File) => {
    setOpenDragAndDrop(false);
    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("usuario", user.name);
    formData.append("email", user.email);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Error uploading file");

      console.log("✅ File uploaded successfully");
      fetchData(); // Refresh table data
    } catch (error) {
      console.error("❌ Error uploading file:", error);
    } finally {
      setUploading(false);
    }
  };

  // 🔹 Render Table Cells
  const renderCell = (item: TableData, columnKey: string) => {
    const bucketName = process.env.AWS_BUCKET_NAME || 'se-rpa-paypal';
    const cellValue = item[columnKey as keyof TableData];

    switch (columnKey) {
      case "acciones":
        return (
          <div className="flex items-center gap-2">
            {item.archivoResultado && (
              <a href={`${item.archivoResultado}`} download target="blank">
                <FontAwesomeIcon icon={faDownload} className="text-darkGreen" />
              </a>
            )}
            <button
              className="text-lightGreen"
              aria-label="Copy to clipboard"
              onClick={() => navigator.clipboard.writeText(item.archivoResultado || "")}
            >
              <FontAwesomeIcon icon={faClipboard} />
            </button>
          </div>
        );
      case "estadoOperacion":
        return <ProgressBar currentStep={item.estadoOperacion === "Completado" ? 3 : 1} />;
      default:
        return cellValue;
    }
  };

  return (
    <div>
      <div className="flex gap-5">
        <Button onClick={fetchData}>
          <FontAwesomeIcon icon={faRepeat} className="mr-5" />
          Refresh
        </Button>
        <Button>
          <FontAwesomeIcon icon={faArrowUpFromBracket} className="mr-5" />
          Export
        </Button>
        <Button style="emphasis" onClick={() => setOpenDragAndDrop(true)} ariaLabel="Upload file">
          <FontAwesomeIcon icon={faPlus} className="mr-5" />
          Add File
        </Button>
      </div>

      {openDragAndDrop && (
        <div className="flex items-center justify-center bg-white h-[10rem]">
          <FileDropzone onFileUpload={handleFileUpload} />
        </div>
      )}
      {uploading && (
        <div className="flex flex-col items-center justify-center w-1/2 mx-auto gap-8 my-8">
          <Spinner />
          <h3>Processing uploaded file ...</h3>
        </div>
      )}

      <Table
        aria-label="Process Table"
        className={`${roboto.className} border-none mt-8 pr-8`}
        removeWrapper
        classNames={{ th: "border-b text-lightGreen bg-white" }}
      >
        <TableHeader>
          {tableColumns.map((tab) => (
            <TableColumn key={tab.id} aria-label={tab.name}>{tab.name}</TableColumn>
          ))}
        </TableHeader>
        <TableBody emptyContent={loading ? "Loading data..." : "No data"} items={tableData}>
          {(item) => (
            <TableRow key={item.archivoProcesado}> 
              {(columnKey) => <TableCell>{renderCell(item, columnKey.toString())}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
