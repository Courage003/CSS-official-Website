import React from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import { images } from "../../data/images";
import {motion} from "framer-motion"

export default function Gallery() {
  const link =
    "https://res.cloudinary.com/dm1tnakkg/image/upload/v1708713681/gallery/";
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350: 2, 750: 3, 900: 3, 1200: 4 }}>
      <Masonry gutter="10px">
        {images.map((image, i) => (
          <motion.img
          initial={{opacity:0, y:-30}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.9,delay:0.3}}
          viewport={{once:true}}
            key={i}
            src={link + image}
            style={{ width: "100%", display: "block" }}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}
