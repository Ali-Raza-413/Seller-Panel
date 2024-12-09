"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import BackButton from "@/app/components/BackButton";
import { FiEye, FiEdit2, FiTrash2 } from "react-icons/fi";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import {
  getBodyStyle,
  getHeaderStyle,
} from "@/app/components/Datatablstyle/DatatableStyle";

const ProductManagement = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: "/b2.png",
      title: "Product One",
      name: "Red T-Shirt",
      size: "Medium",
      isActive: true,
      createdDate: "2024-11-28",
    },
    {
      id: 2,
      image: "/b2.png",
      title: "Product Two",
      name: "Blue Jeans",
      size: "S,M,L,XL",
      isActive: false,
      createdDate: "2024-11-27",
    },
    {
      id: 3,
      image: "/b2.png",
      title: "Product Three",
      name: "Green Jacket",
      size: "S,M,L,XL",
      isActive: true,
      createdDate: "2024-11-26",
    },
    {
      id: 4,
      image: "/b2.png",
      title: "Product Four",
      name: "Black Shoes",
      size: "S,M,L,XL",
      isActive: true,
      createdDate: "2024-11-28",
    },
    {
      id: 5,
      image: "/b2.png",
      title: "Product Five",
      name: "White Hat",
      size: "S,M,L,XL",
      isActive: false,
      createdDate: "2024-11-27",
    },
    {
      id: 6,
      image: "/b2.png",
      title: "Product Six",
      name: "Grey Scarf",
      size: "S,M,L,XL",
      isActive: true,
      createdDate: "2024-11-26",
    },
    {
      id: 7,
      image: "/b2.png",
      title: "Product Seven",
      name: "Yellow Dress",
      size: "S,M,L,XL",
      isActive: true,
      createdDate: "2024-11-28",
    },
    {
      id: 8,
      image: "/b2.png",
      title: "Product Eight",
      name: "Brown Belt",
      size: "S,M,L,XL",
      isActive: false,
      createdDate: "2024-11-27",
    },
    {
      id: 9,
      image: "/b2.png",
      title: "Product Nine",
      name: "Pink Skirt",
      size: "S,M,L,XL",
      isActive: true,
      createdDate: "2024-11-26",
    },
    {
      id: 10,
      image: "/b2.png",
      title: "Product Ten",
      name: "Purple Gloves",
      size: "Small",
      isActive: true,
      createdDate: "2024-11-26",
    },
  ]);


  const [selectedProducts, setSelectedProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sizeFilter, setSizeFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [modalMode, setModalMode] = useState("view");
  const router = useRouter();

  const categories = ["shirts", "pants", "Suits", "formal"];

  const toggleStatus = (product) => {
    const updatedProducts = products.map((item) =>
      item.id === product.id ? { ...item, isActive: !item.isActive } : item
    );
    setProducts(updatedProducts);
  };

  const openDetails = (product, mode = "view") => {
    setCurrentProduct(product);
    setModalMode(mode);
    setShowDetails(true);
  };

  const closeDetails = () => {
    setShowDetails(false);
    setCurrentProduct(null);
    setModalMode("view");
  };

  const handleDelete = () => {
    // Perform the delete action (e.g., API call)
    console.log("Deleted product:", currentProduct);
    closeDetails();
  };

  // Filter products based on search, size, and date
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.name.toLowerCase().includes(search.toLowerCase());
    const matchesSize = sizeFilter
      ? product.size.toLowerCase().includes(sizeFilter.toLowerCase())
      : true;
    const matchesDate = dateFilter
      ? product.createdDate.includes(dateFilter)
      : true;

    return matchesSearch && matchesSize && matchesDate;
  });

  const toggleTemplate = (rowData) => (
    <div
      className={`relative w-12 h-6 rounded-full cursor-pointer ${
        rowData.isActive ? "bg-black" : "bg-gray-400"
      }`}
      onClick={() => toggleStatus(rowData)}
    >
      <div
        className={`absolute w-4 h-4 rounded-full top-1 transition-all ${
          rowData.isActive ? "right-1 bg-white" : "left-1 bg-gray-500"
        }`}
      ></div>
    </div>
  );

  const actionsTemplate = (rowData) => (
    <div className="flex gap-5">
      <button>
        <FiEye
          className="w-5 h-5 text-black"
          onClick={() => router.push("/pages/products/viewproduct")}
        />
      </button>
      <button onClick={() => openDetails(rowData, "edit")}>
        <FiEdit2 className="w-5 h-5 text-black" />
      </button>
      <button onClick={() => openDetails(rowData, "delete")}>
        <FiTrash2 className="w-5 h-5 text-red-500" />
      </button>
    </div>
  );

  return (
    <div className="p-4 space-y-4 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <BackButton />
          <h1 className="text-2xl font-semibold">Product Management</h1>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex gap-2">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <option value="">All Categories</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-[50%] max-w-sm px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <input
            type="text"
            placeholder="Size"
            value={sizeFilter}
            onChange={(e) => setSizeFilter(e.target.value)}
            className="w-[50%] max-w-sm px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <input
            type="date"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="w-[50%] max-w-sm px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>
        <button
          className="bg-gray-600 text-white px-6 py-2 rounded-lg"
          onClick={() => router.push("/pages/products/addproduct")}
        >
          Add Product
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-auto">
        <DataTable
          value={filteredProducts}
          selection={selectedProducts}
          onSelectionChange={(e) => setSelectedProducts(e.value)}
          dataKey="id"
          paginator
          rows={10}
          className="custom-paginator"
        >
          <Column
            selectionMode="multiple"
            style={{ width: "3em" }}
            bodyStyle={getBodyStyle()}
            headerStyle={getHeaderStyle()}
          ></Column>
          <Column
            field="id"
            header="ID"
            sortable
            bodyStyle={getBodyStyle()}
            headerStyle={getHeaderStyle()}
          ></Column>
          <Column
            field="image"
            header="Image"
            bodyStyle={getBodyStyle()}
            headerStyle={getHeaderStyle()}
            body={(rowData) => (
              <img
                src={rowData.image}
                alt={rowData.title}
                className="w-10 h-10 object-cover rounded-md"
              />
            )}
          ></Column>
          <Column
            field="name"
            header="Name"
            sortable
            bodyStyle={getBodyStyle()}
            headerStyle={getHeaderStyle()}
          ></Column>
          <Column
            field="size"
            header="Size"
            sortable
            bodyStyle={getBodyStyle()}
            headerStyle={getHeaderStyle()}
          ></Column>
          <Column
            field="createdDate"
            header="Date Created"
            sortable
            bodyStyle={getBodyStyle()}
            headerStyle={getHeaderStyle()}
          ></Column>
          <Column
            header="Status"
            body={toggleTemplate}
            bodyStyle={getBodyStyle()}
            headerStyle={getHeaderStyle()}
          ></Column>
          <Column
            header="Actions"
            body={actionsTemplate}
            bodyStyle={getBodyStyle()}
            headerStyle={getHeaderStyle()}
          ></Column>
        </DataTable>
      </div>

      {showDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            {modalMode === "view" && (
              <>
                <h2 className="text-xl font-semibold mb-4">Product Details</h2>
                {currentProduct && (
                  <div>
                    <img
                      src={currentProduct.image}
                      alt={currentProduct.title}
                      className="w-40 h-40 object-cover rounded-md mb-4"
                    />
                    <p><strong>Name:</strong> {currentProduct.name}</p>
                    <p><strong>Size:</strong> {currentProduct.size}</p>
                    <p><strong>Date Created:</strong> {currentProduct.createdDate}</p>
                  </div>
                )}
                <div className="flex justify-end gap-4 mt-4">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                    onClick={() => openDetails(currentProduct, "edit")}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                    onClick={() => openDetails(currentProduct, "delete")}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
            {modalMode === "edit" && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Edit Product</h2>
                {/* Add your edit form here */}
                <div className="flex justify-end gap-4 mt-4">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                    onClick={closeDetails}
                  >
                    Save Changes
                  </button>
                  <button
                    className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                    onClick={closeDetails}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
            {modalMode === "delete" && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Delete Product</h2>
                <p>Are you sure you want to delete this product?</p>
                <div className="flex justify-end gap-4 mt-4">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                    onClick={closeDetails}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductManagement;
