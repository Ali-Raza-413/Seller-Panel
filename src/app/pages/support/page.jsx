"use client";
import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import {
  getHeaderStyle,
  getBodyStyle,
} from "@/app/components/Datatablstyle/DatatableStyle";
import { useRouter } from "next/navigation";
import BackButton from "@/app/components/BackButton";


const HelpandSupport = () => {
  // Static JSON data with descriptions
  const [data, setData] = useState([
    {
      id: 1,
      title: "Login Issue",
      description: "Unable to login to account",
      status: "Pending",
    },
    {
      id: 2,
      title: "Payment Failed",
      description: "Payment not processed",
      status: "Resolved",
    },
    {
      id: 3,
      title: "Account Hacked",
      description: "Suspicious activity detected",
      status: "Pending",
    },
    {
      id: 4,
      title: "Error 404 on Help Page",
      description: "Help page not found",
      status: "Resolved",
    },
    {
      id: 5,
      title: "Cannot Reset Password",
      description: "Password reset link not working",
      status: "Pending",
    },
  ]);
  const router = useRouter();
  // Function to delete a row by ID
  const handleDelete = (rowId) => {
    const updatedData = data.filter((item) => item.id !== rowId);
    setData(updatedData);
  };

  // Custom styling for the Status column
  const statusBodyTemplate = (rowData) => {
    const statusStyles = {
      Pending: "text-yellow-500",
      Resolved: "text-green-500",
    };

    return (
      <span className={statusStyles[rowData.status]}>{rowData.status}</span>
    );
  };

  // Delete button for the Action column
  const actionBodyTemplate = (rowData) => {
  return (
    <button
      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      onClick={() => handleDelete(rowData.id)}
      title="Delete"
    >
      Delete
    </button>
  );
};  

  return (
    <div className="p-4">
    <div className="flex justify-between">
    <div className="flex items-center gap-2 mb-6">
        <BackButton/>
        <h2 className="text-xl font-bold text-left">Help and Support</h2>
        </div>
        <div>
    <button className="bg-gray-600 text-white 2 rounded-lg px-4 py-2" onClick={()=>router.push("/pages/support/addticket")}>Add Ticket</button>
    </div>
    </div>
      <DataTable
        value={data}
        paginator
        rows={5}
        className="p-datatable-gridlines shadow-lg"
        responsiveLayout="scroll"
      >
        <Column
          field="id"
          header="ID"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        ></Column>
        <Column
          field="title"
          header="Title"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        ></Column>
        <Column
          field="description"
          header="Description"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        ></Column>
        <Column
          field="status"
          header="Status"
          body={statusBodyTemplate}
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        ></Column>
        <Column
          header="Action"
          body={actionBodyTemplate}
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        ></Column>
      </DataTable>
    </div>
  );
};

export default HelpandSupport;
