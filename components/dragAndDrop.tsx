"use client"

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const FileDropzone = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log("Accepted files:", acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/vnd.ms-excel": [".xls"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
      "text/csv": [".csv"],
    },
  });

  return (
    <div
      {...getRootProps()}
      className={`flex flex-col items-center justify-center border-2 border-dashed  rounded-md p-6 hover:cursor-pointer ${
        isDragActive ? "border-darkGreen bg-lightGreen" : "border-lightGreen bg-white"
      }`}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="text-darkGreen">¡Suelta los archivos aquí!</p>
      ) : (
        <p className="text-grey">
          Arrastra y suelta archivos aquí, o haz clic para seleccionar archivos (.xls, .xlsx, .csv)
        </p>
      )}
    </div>
  );
};

export default FileDropzone;
