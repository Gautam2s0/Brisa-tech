import React, { useEffect, useState } from 'react'
import PaginatedItems from './Pagination'
import { ListCard } from './ListCard'
import axios from "axios"
// import BASE_URL from "./"

export const IssueList = () => {
  const[issues,setIssues]=useState([])

  useEffect(()=>{
    axios.get(`https://api.github.com/repos/octocat/Hello-World/issues`).then((res)=>{
      setIssues(res.data)
      // console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])
  
   
  return (
    <div style={{paddingBottom:"5%"}}>
        <h1>
            Github Issues
        </h1>
      
        <div>
            <PaginatedItems  issues={issues} setIssues={setIssues} itemsPerPage={8} />
        </div>
    </div> 
  )
}
