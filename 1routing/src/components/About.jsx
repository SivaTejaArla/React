import React from 'react'

import { useParams} from "react-router-dom";

function About() {

const {id,name} = useParams()

/*  Another Mathod :            where       <Link to={`/about?id=${id}&name=${name}`}>

  const [searchParams] = useSearchParams();

  const id = searchParams.get("id");
  const name = searchParams.get("name");


*/
  return (
    <div>
      About Component
<br />

<h3>Id given is {id}</h3> <br />

<h3>Name given is {name}</h3>

    </div>
  )
}

export default About
