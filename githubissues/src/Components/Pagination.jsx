import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import style from "./Styles/Pagination.css"
import axios from 'axios';
import { ListCard } from './ListCard';
import BASE_URL from './URL';

// maping All isssues items
function Items({ currentItems }) {
  return (
    <div> 
      {currentItems &&
        currentItems.map((item,i) => (
          <div key={item.id}>
            <ListCard key={item.number} {...item} i={i} />
          </div>
        ))}
    </div>
  );
}

function PaginatedItems({issues,setIssues, itemsPerPage }) {
  const pageCount = issues.length||Math.ceil(issues.length / itemsPerPage);
 
  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    axios.get(`${BASE_URL}?page=${event.selected+1}`).then((res)=>{
      setIssues(res.data)
    }).catch((err)=>{
      console.log(err) 
    })
  };
  

  return (
    <>
      <Items currentItems={issues} /> 
      <ReactPaginate 
        pageLinkClassName="pageLinkClassName"
        activeClassName="active"
        className="Paginate"
        pageClassName="pageClassName"
       
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
export default PaginatedItems
