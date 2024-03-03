import React, { useState } from 'react'
import Loading from "../Loading";


export default function Event() {
    const [load, setLoad] = useState(true);
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  
    return load ? (
      <Loading />
    ) : (
    <div>Event</div>
  )
}
