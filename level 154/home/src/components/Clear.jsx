import React from 'react'
import { GoTrash } from "react-icons/go";

const Clear = (props) => {
  return (
    <GoTrash onClick={() => props.setHistory([])} className=' p-4 cursor-pointer hover:scale-110 duration-300' />
  )
}

export default Clear