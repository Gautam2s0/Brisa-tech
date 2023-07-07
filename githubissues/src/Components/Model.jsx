import React from 'react'
import { TbBorderBottom, TbCircleDot } from "react-icons/tb";


export const Model = ({title,date,body,number}) => {
  return (
    <div>
        <p>{date}</p>
         <TbCircleDot className="circle" />
    </div>
  )
}
