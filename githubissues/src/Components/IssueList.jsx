import React, { useEffect, useState } from 'react'
import PaginatedItems from './Pagination'
import { ListCard } from './ListCard'
import axios from "axios"
import { Spinner } from './Spinner'
import BASE_URL from "./URL";
import { Octokit, } from "octokit";

export const IssueList = () => {
  const[issues,setIssues]=useState([])
  const token = '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';
//   const octokit = new Octokit({ auth: `personal-access-token123` });

// const response = await octokit.request("GET /orgs/{org}/repos", {
//   org: "octokit",
//   type: "private",
// });

  useEffect(()=>{
    axios({
      method: 'get',
      url:BASE_URL, 
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `token ${token}`
    }
      
    }).then((res)=>{
      setIssues(res.data)
    }).catch((err)=>{
      console.log(err)
    });


    // const octokit = new Octokit({
    //   auth: 'YOUR-TOKEN'
    // })
    
    // await octokit.request('GET /orgs/{org}/issues', {
    //   org: 'ORG',
    //   headers: {
    //     'X-GitHub-Api-Version': '2022-11-28'
    //   }
    // })


  },[])
  
  // loding indicator
   if(issues.length===0){
    return <Spinner/>
   }
   
  return (
    <div style={{paddingBottom:"5%"}}>
        <h1 style={{fontStyle:"italic"}}>
            Github Issues
        </h1>
      
        <div>
            <PaginatedItems  issues={issues} setIssues={setIssues} itemsPerPage={8} />
        </div>
    </div> 
  )
}
