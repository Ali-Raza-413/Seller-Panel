"use client";
import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import {
  getHeaderStyle,
  getBodyStyle,
} from "@/app/components/Datatablstyle/DatatableStyle";
import { useRouter } from "next/navigation";
import BackButton from "@/app/components/BackButton";

const ProductManagement = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: "/b2.png",
      title: "Product One",
      isActive: true,
      createdDate: "2024-11-28",
    },
    {
      id: 2,
      image: "/b2.png",
      title: "Product Two",
      isActive: false,
      createdDate: "2024-11-27",
    },
    {
      id: 3,
      image: "/b2.png",
      title: "Product Three",
      isActive: true,
      createdDate: "2024-11-26",
    },
    {
      id: 4,
      image: "/b2.png",
      title: "Product One",
      isActive: true,
      createdDate: "2024-11-28",
    },
    {
      id: 5,
      image: "/b2.png",
      title: "Product Two",
      isActive: false,
      createdDate: "2024-11-27",
    },
    {
      id: 6,
      image: "/b2.png",
      title: "Product Three",
      isActive: true,
      createdDate: "2024-11-26",
    },
    {
      id: 7,
      image: "/b2.png",
      title: "Product One",
      isActive: true,
      createdDate: "2024-11-28",
    },
    {
      id: 8,
      image: "/b2.png",
      title: "Product Two",
      isActive: false,
      createdDate: "2024-11-27",
    },
    {
      id: 9,
      image: "/b2.png",
      title: "Product Three",
      isActive: true,
      createdDate: "2024-11-26",
    },
    {
      id: 10,
      image: "/b2.png",
      title: "Product Three",
      isActive: true,
      createdDate: "2024-11-26",
    },
  ]);

  const [editingProduct, setEditingProduct] = useState(null);
  const [deleteProduct, setDeleteProduct] = useState(null);
  const router = useRouter();

  // Update Product Inline
  const updateProduct = (id, updatedFields) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, ...updatedFields } : product
    );
    setProducts(updatedProducts);
  };

  // Toggle Active Status
  const toggleStatus = (rowData) => {
    updateProduct(rowData.id, { isActive: !rowData.isActive });
  };

  // Open Edit Modal
  const openEditModal = (product) => {
    setEditingProduct(product);
  };

  // Close Edit Modal
  const closeEditModal = () => {
    setEditingProduct(null);
  };

  // Delete Product
  const handleDeleteProduct = () => {
    setProducts(products.filter((product) => product.id !== deleteProduct.id));
    setDeleteProduct(null);
  };

  // Cancel Delete
  const cancelDeleteProduct = () => {
    setDeleteProduct(null);
  };

  // Template: Product Image
  const imageTemplate = (rowData) => (
    <img
      src={rowData.image}
      alt={rowData.title}
      className="w-10 h-10 object-cover rounded-lg"
    />
  );

  // Template: Toggle Button
  const toggleTemplate = (rowData) => (
    <button
      onClick={() => toggleStatus(rowData)}
      className={`px-3 py-1 rounded-md font-medium ${
        rowData.isActive
          ? "bg-green-100 text-green-600"
          : "bg-red-100 text-red-600"
      }`}
    >
      {rowData.isActive ? "Active" : "Inactive"}
    </button>
  );

  // Template: Actions
  const actionsTemplate = (rowData) => (
    <div className="flex gap-2">
      <button
        onClick={() => openEditModal(rowData)}
        className="px-3 py-1 bg-yellow-500 text-white rounded-md"
      >
        Edit
      </button>
      <button
        onClick={() => setDeleteProduct(rowData)}
        className="px-3 py-1 bg-red-500 text-white rounded-md"
      >
        Delete
      </button>
    </div>
  );

  return (
    <div className="p-4 space-y-4 bg-gray-100 min-h-screen">
    <div className="flex justify-between">
    <div className="flex gap-2 items-center">
      <BackButton />
      <h1 className="text-2xl font-semibold">Product Management</h1>
      </div>
      <button className="bg-gray-600 text-white px-6 py-2 rounded-lg" onClick={()=>router.push("/pages/products/addproduct")}>Add Product</button>
      </div>
      <DataTable
        value={products}
        responsiveLayout="scroll"
        className="bg-white rounded-lg shadow-md"
      >
        <Column
          field="id"
          header="ID"
          sortable
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        ></Column>
        <Column
          header="Image"
          body={imageTemplate}
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
          field="createdDate"
          header="Date Created"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        ></Column>
        <Column
          header="Status"
          body={toggleTemplate}
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        ></Column>
        <Column
          header="Actions"
          body={actionsTemplate}
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        ></Column>
      </DataTable>

      {/* Edit Modal */}
      {editingProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6">
            <h2 className="text-xl font-bold mb-4">Edit Product</h2>
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Title</label>
              <InputText
                value={editingProduct.title}
                onChange={(e) =>
                  setEditingProduct({
                    ...editingProduct,
                    title: e.target.value,
                  })
                }
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Date Created</label>
              <InputText
                value={editingProduct.createdDate}
                onChange={(e) =>
                  setEditingProduct({
                    ...editingProduct,
                    createdDate: e.target.value,
                  })
                }
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Image URL</label>
              <InputText
                value={editingProduct.image}
                onChange={(e) =>
                  setEditingProduct({
                    ...editingProduct,
                    image: e.target.value,
                  })
                }
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={closeEditModal}
                className="px-4 py-2 bg-gray-500 text-white rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  updateProduct(editingProduct.id, editingProduct);
                  closeEditModal();
                }}
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6">
            <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
            <p className="mb-6">
              Are you sure you want to delete{" "}
              <strong>{deleteProduct.title}</strong>?
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={cancelDeleteProduct}
                className="px-4 py-2 bg-gray-500 text-white rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteProduct}
                className="px-4 py-2 bg-red-500 text-white rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductManagement;
