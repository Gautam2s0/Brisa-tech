import React from 'react'
import PaginatedItems from './Pagination'

export const IssueList = () => {
  return (
    <div>
        
        <h1>
            Github Issues
        </h1>
       
        <div>
            <PaginatedItems  itemsPerPage={5} />
        </div>
    </div>
  )
}
