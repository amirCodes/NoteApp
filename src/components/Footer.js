import React from 'react'

export default function Footer () {
  const footerCSS = {
    color: '#EADDCA',
    fontSize: '16px',
    padding: '3px',
    textAlign: 'center',
    bottom: '0px'
  }
  return (
    <div className='ui inverted vertical footer segment form-page'>
      <div className='ui container'>
        Amir Code 2020. <span className={{ footerCSS }}>All Rights Reserved</span>
      </div>
    </div>
  )
}
