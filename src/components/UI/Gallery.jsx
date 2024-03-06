import React from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import { images } from "../../data/images";

export default function Gallery() {
  const link =
    "https://res.cloudinary.com/dm1tnakkg/image/upload/v1708713681/gallery/";
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}>
      <Masonry gutter="10px">
        {images.map((image, i) => (
          <img
            key={i}
            src={link + image}
            style={{ width: "100%", display: "block" }}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}
