import React from 'react'
import { Link } from "react-router-dom";


function Home() {

    const id = 52
    const name = "Shiva"
  return (
    <div>
      Home Component <br /><br />

      <Link to= {`/about/${id}/${name}`}>
      <button>
        About Component 
      </button>
      </Link>
    </div>
  )
}

export default Home
