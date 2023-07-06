import React from 'react'
import PaginatedItems from './Pagination'
import { ListCard } from './ListCard'

export const IssueList = () => {
  return (
    <div>
        <ListCard/>
        <h1>
            Github Issues
        </h1>
       
        <div>
            {/* <PaginatedItems  itemsPerPage={5} /> */}
        </div>
    </div>
  )
}
