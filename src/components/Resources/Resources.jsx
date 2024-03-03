import React, { useState } from 'react'
import Loading from "../Loading";


function Resources() {
    const [load, setLoad] = useState(true);
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  
    return load ? (
      <Loading />
    ) : (
    <div>Resources</div>
  )
}

export default Resources