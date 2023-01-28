import React from 'react'
import Content from '../Content/content'
import Sidebar from '../Sidebar/Sidebar'

const DefaultLayout = () => {
  return (
    <div>
      <Sidebar/>
      <div>
        <Content/>
      </div>
    </div>
  )
}

export default DefaultLayout
