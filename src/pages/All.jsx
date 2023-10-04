import React from 'react'
import {useLoaderData } from 'react-router-dom'

const All = () => {
    const services = useLoaderData()
  return (
    <div>All</div>
  )
}

export default All