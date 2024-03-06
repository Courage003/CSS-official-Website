import React from 'react'
import Masonry from 'react-responsive-masonry'


export default function Gallery() {
  return (
    <Masonry columnsCount={3} gutter="10px">
            {images.map((image, i) => (
                <img
                    key={i}
                    src={image}
                    style={{ width: "100%", display: "block" }}
                />
            ))}
        </Masonry>
  )
}
