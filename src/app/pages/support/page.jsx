"use client";
import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useRouter } from "next/navigation";
import { FaEye, FaTrash } from "react-icons/fa";
import BackButton from "@/app/components/BackButton";
import {
  getHeaderStyle,
  getBodyStyle,
} from "@/app/components/Datatablstyle/DatatableStyle";

const HelpandSupport = () => {
  const [data, setData] = useState([
    {
      id: 1,
      subject: "Login Issue",
      email: "user1@example.com",
      description: "Unable to login to account",
      attachment: "file1.pdf",
      status: "Pending",
    },
    {
      id: 2,
      subject: "Payment Failed",
      email: "user2@example.com",
      description: "Payment not processed",
      attachment: "file2.pdf",
      status: "Resolved",
    },
    {
      id: 3,
      subject: "Account Hacked",
      email: "user3@example.com",
      description: "Suspicious activity detected",
      attachment: "file3.pdf",
      status: "Pending",
    },
    {
      id: 4,
      subject: "Error 404 on Help Page",
      email: "user4@example.com",
      description: "Help page not found",
      attachment: "file4.pdf",
      status: "Resolved",
    },
    {
      id: 5,
      subject: "Cannot Reset Password",
      email: "user5@example.com",
      description: "Password reset link not working",
      attachment: "file5.pdf",
      status: "Pending",
    },
  ]);
  const [selectedRows, setSelectedRows] = useState([]);
  const router = useRouter();

  const handleDelete = (rowId) => {
    const updatedData = data.filter((item) => item.id !== rowId);
    setData(updatedData);
  };

  const statusBodyTemplate = (rowData) => {
    const statusStyles = {
      Pending: "text-yellow-500",
      Resolved: "text-green-500",
    };

    return (
      <span className={statusStyles[rowData.status]}>{rowData.status}</span>
    );
  };

  const attachmentBodyTemplate = (rowData) => (
    <button
      className="text-black "
      onClick={() => alert(`Opening file: ${rowData.attachment}`)}
      title="View Attachment"
    >
      <FaEye className="w-5 h-5" />
    </button>
  );

  const chatBodyTemplate = () => (
    <div className="flex gap-2">
      <img src="/wh.png" className="w-10 h-10" alt="whatsapp" />
      <img src="/gmail.png" className="w-10 h-10" alt="gmail" />
    </div>
  );

  const actionBodyTemplate = (rowData) => (
    <button
      className="text-red-500 hover:text-red-700"
      onClick={() => handleDelete(rowData.id)}
      title="Delete"
    >
      <FaTrash />
    </button>
  );

  const onSelectAll = (e) => {
    setSelectedRows(e.checked ? [...data] : []);
  };

  const customCheckbox = (options) => (
    <input
      type="checkbox"
      className="w-5 h-5 bg-black border-none rounded-sm text-white focus:ring-0 focus:ring-offset-0"
      checked={options.checked}
      onChange={(e) => options.onChange(e.checked)}
    />
  );

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <div className="flex items-center gap-2 mb-6">
          <BackButton />
          <h2 className="text-xl font-bold text-left">Help and Support</h2>
        </div>
        <div>
          <button
            className="bg-gray-600 text-white rounded-lg px-4 py-2"
            onClick={() => router.push("/pages/support/addticket")}
          >
            Add Ticket
          </button>
        </div>
      </div>
      <DataTable
        value={data}
        paginator
        rows={5}
        selection={selectedRows}
        onSelectionChange={(e) => setSelectedRows(e.value)}
        dataKey="id"
        className="custom-paginator"
      >
        <Column
          selectionMode="multiple"
          bodyStyle={getBodyStyle()}
          headerStyle={getHeaderStyle()}
        />
        <Column
          field="id"
          header="ID"
          bodyStyle={getBodyStyle()}
          headerStyle={getHeaderStyle()}
        ></Column>
        <Column
          field="subject"
          header="Subject"
          bodyStyle={getBodyStyle()}
          headerStyle={getHeaderStyle()}
        ></Column>
        <Column
          field="email"
          header="Email"
          bodyStyle={getBodyStyle()}
          headerStyle={getHeaderStyle()}
        ></Column>
        <Column
          field="description"
          header="Description"
          bodyStyle={getBodyStyle()}
          headerStyle={getHeaderStyle()}
        ></Column>
        <Column
          field="attachment"
          header="Attachment"
          body={attachmentBodyTemplate}
          bodyStyle={getBodyStyle()}
          headerStyle={getHeaderStyle()}
        ></Column>
        <Column
          field="chat"
          header="Chat"
          body={chatBodyTemplate}
          bodyStyle={getBodyStyle()}
          headerStyle={getHeaderStyle()}
        ></Column>
        <Column
          field="status"
          header="Status"
          body={statusBodyTemplate}
          bodyStyle={getBodyStyle()}
          headerStyle={getHeaderStyle()}
        ></Column>
        <Column
          field="action"
          header="Action"
          body={actionBodyTemplate}
          bodyStyle={getBodyStyle()}
          headerStyle={getHeaderStyle()}
        ></Column>
      </DataTable>
    </div>
  );
};

export default HelpandSupport;
