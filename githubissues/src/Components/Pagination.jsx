import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import style from "./Styles/Pagination.css"
import axios from 'axios';
import { ListCard } from './ListCard';


function Items({ currentItems }) {
  return (
    <div> 
      {currentItems &&
        currentItems.map((item,i) => (
          <div>
            <ListCard key={item.id} {...item} i={i} />
          </div>
        ))}
    </div>
  );
}

function PaginatedItems({issues,setIssues, itemsPerPage }) {
  const pageCount = issues.length||Math.ceil(issues.length / itemsPerPage);
 
  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    axios.get(`https://api.github.com/repos/octocat/Hello-World/issues?page=${event.selected+1}`).then((res)=>{
      setIssues(res.data)
      console.log(event.selected+1)
      console.log()
    }).catch((err)=>{
      console.log(err) 
    })
  };
  
    
  
  // console.log(data)

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
