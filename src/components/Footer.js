import React from 'react'

export default function Footer() {
    const noteStyle = {
    backgroundColor: "black",
    color:'white',
    fontSize: "16px",
    padding: "3px",
    textAlign: "center",
    bottom:'0px'
  };
    return (
        <footer style={noteStyle}>
        <p>Author: Amir Danish<br/>
        <a href="mailto:amir@example.com">amir@example.com</a></p>
      </footer>
    )
}
