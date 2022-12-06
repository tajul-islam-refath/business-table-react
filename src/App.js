import "./App.css";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { getSearchResults } from "./API/api";

function App() {
  const [perPage, setPerPage] = useState(5);
  const [searchParams, setSearchParams] = useState("0");
  const result = useSelector((state) => state.data.result);
  const total = useSelector((state) => state.data.total);

  useEffect(() => {
    getSearchResults(1, perPage, searchParams);
  }, []);

  const onChangeSearchParams = (event) => {
    console.log(event.target.value);
    if (event.target.value) {
      setSearchParams(event.target.value);
      getSearchResults(1, perPage, event.target.value);
    } else {
      setSearchParams("0");
      getSearchResults(1, perPage, "0");
    }
  };

  const onChangePerPage = (event) => {
    setPerPage(parseInt(event.target.value));
    getSearchResults(1, parseInt(event.target.value), searchParams);
  };

  const handlePageClick = (event) => {
    let page = parseInt(event.selected);
    getSearchResults(page + 1, perPage, searchParams);
  };
  return (
    <div className="App">
      <div class="container my-5">
        <div class="card card-frame p-4">
          <div className="row my-3">
            <div className="col-md-6">
              <h2>Custom Data Table</h2>
            </div>
            <div className="col-md-2">
              <select class="form-select" onChange={onChangePerPage}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="80">80</option>
                <option value="100">100</option>
              </select>
            </div>
            <div className="col-md-4">
              <form class="row g-3">
                <div class="col-8">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="search"
                    onKeyDown={onChangeSearchParams}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="table-container">
            <table class="table table-responsive table-hover">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Code</th>
                </tr>
              </thead>
              <tbody>
                {result.map((item, i) => (
                  <tr>
                    <th>{item.title}</th>
                    <td>{item.price}</td>
                    <td>{item.stock}</td>
                    <td>{item.product_code}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-12 my-3">
            <nav>
              <ReactPaginate
                nextLabel=">"
                previousLabel="<"
                breakLabel="..."
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                marginPagesDisplayed={2}
                pageCount={total / perPage}
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                activeClassName="active"
              />
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
