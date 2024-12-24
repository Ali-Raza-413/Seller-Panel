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
      subject: "Product Upload Issue",
      email: "seller1@example.com",
      name: "John's Electronics",
      description: "Unable to upload new product images",
      attachment: "error_screenshot.pdf",
      status: "Pending",
    },
    {
      id: 2,
      subject: "Payment Not Received",
      email: "seller2@example.com",
      name: "Fashion Hub",
      description: "Order #1234 payment not credited",
      attachment: "payment_proof.pdf",
      status: "Resolved",
    },
    {
      id: 3,
      subject: "Account Access Problem",
      email: "seller3@example.com",
      name: "Home Decor Store",
      description: "Cannot access seller dashboard",
      attachment: "access_error.pdf",
      status: "Pending",
    },
    {
      id: 4,
      subject: "Order Fulfillment Issue",
      email: "seller4@example.com",
      name: "Beauty Box",
      description: "Unable to mark order as shipped",
      attachment: "order_details.pdf",
      status: "Resolved",
    },
    {
      id: 5,
      subject: "Commission Dispute",
      email: "seller5@example.com",
      name: "Tech Gadgets",
      description: "Incorrect commission calculation",
      attachment: "commission_statement.pdf",
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

  const actionBodyTemplate = (rowData) => (
    <button
      className="text-red-500 hover:text-red-700"
      onClick={() => handleDelete(rowData.id)}
      title="Delete"
    >
      <FaTrash />
    </button>
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
        />
        <Column
          field="subject"
          header="Subject"
          bodyStyle={getBodyStyle()}
          headerStyle={getHeaderStyle()}
        />
        <Column
          field="email"
          header="Email"
          bodyStyle={getBodyStyle()}
          headerStyle={getHeaderStyle()}
        />
        <Column
          field="name"
          header="Name"
          bodyStyle={getBodyStyle()}
          headerStyle={getHeaderStyle()}
        />
        <Column
          field="description"
          header="Description"
          bodyStyle={getBodyStyle()}
          headerStyle={getHeaderStyle()}
        />
        <Column
          field="attachment"
          header="Attachment"
          body={attachmentBodyTemplate}
          bodyStyle={getBodyStyle()}
          headerStyle={getHeaderStyle()}
        />
        <Column
          field="status"
          header="Status"
          body={statusBodyTemplate}
          bodyStyle={getBodyStyle()}
          headerStyle={getHeaderStyle()}
        />
        <Column
          field="action"
          header="Action"
          body={actionBodyTemplate}
          bodyStyle={getBodyStyle()}
          headerStyle={getHeaderStyle()}
        />
      </DataTable>
    </div>
  );
};

export default HelpandSupport;