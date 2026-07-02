import React from 'react'
import "./Name.css"

const Name = ({ fontSize  }) => {
  return (
    <div>
      <div className="customfont name" style={{ fontSize }}>Aman Verma</div>
    </div>
  )
}

export default Name