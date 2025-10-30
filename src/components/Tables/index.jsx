import { useState } from "react";
import DataTable from "react-data-table-component";
import LayoutsApp from "../../layouts/LayoutsApp";
import { exampleData } from "../../data/exampleData";

const columns = [
  { name: "Name", selector: (row) => row.name, sortable: true },
  { name: "Position", selector: (row) => row.position, sortable: true },
  { name: "Office", selector: (row) => row.office },
  { name: "Age", selector: (row) => row.age, sortable: true },
  { name: "Start date", selector: (row) => row.startDate },
  { name: "Salary", selector: (row) => row.salary },
];

const Tables = () => {
  const [filterText, setFilterText] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredItems = exampleData.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const totalPages = Math.ceil(filteredItems.length / rowsPerPage);

  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const renderPageNumbers = () => {
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`btn btn-sm ${
            i === currentPage ? "btn-primary" : "btn-outline-primary"
          }`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <LayoutsApp>
      <div className="container-fluid">
        <h1 className="h3 mb-2 text-gray-800">Tables</h1>
        <p className="mb-4">
          DataTables is a third party plugin that is used to generate the demo
          table below. For more information about DataTables, please visit the{" "}
          <a
            target="_blank"
            href="https://reactdatatable.com/?path=/docs/getting-started-intro--docs"
          >
            official DataTables documentation
          </a>
          .
        </p>

        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              DataTables Example
            </h6>
          </div>
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <label>
                  Show{" "}
                  <select
                    className="form-control d-inline-block w-auto"
                    value={rowsPerPage}
                    onChange={(e) => {
                      setRowsPerPage(Number(e.target.value));
                      setCurrentPage(1);
                    }}
                  >
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                  </select>{" "}
                  entries
                </label>
              </div>

              <div className="d-flex align-items-center">
                <span className="me-2">Search: </span>
                <input
                  type="text"
                  className="ml-2 form-control"
                  placeholder="Search by name"
                  value={filterText}
                  onChange={(e) => setFilterText(e.target.value)}
                  style={{ width: "200px" }}
                />
              </div>
            </div>

            <div className="table-responsive border p-0">
              <DataTable
                columns={columns}
                data={paginatedItems}
                // pagination
                paginationServer
                paginationTotalRows={filteredItems.length}
                highlightOnHover
                striped
                responsive
                noHeader
              />
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="mt-2 text-center">
                Page {currentPage} of {totalPages}
              </div>

              {/* Custom pagination */}
              <div className="d-flex justify-content-center mt-3">
                <div className="btn-group" role="group">
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>

                  {renderPageNumbers()}

                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutsApp>
  );
};

export default Tables;
