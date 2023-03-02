import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import GallerySelector from './GallerySelector';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { images, images2, CustomImage, imagesMap } from "./images";

const slides = images.map(({ original, width, height }) => ({
  src: original,
  width,
  height,
}));

export default function App() {
  const [index, setIndex] = useState(-1);
  const [gallerySelected, setGallerySelected] = useState(images);
  const handleClick = (index, item) => setIndex(index);
  const [selectedGallery, setSelectedGallery] = useState("A");

const handleGalleryClick = (galleryId) => {
    console.log("parent click "+galleryId);
    setSelectedGallery(galleryId);
    if (galleryId == "A") {
      setGallerySelected(images);
    } else if (galleryId == "B") {
      setGallerySelected(images2);
    }
    console.log(galleryId);
    
  };

  const galleries = [{
    id: 'A',
    name: 'Animals'
  }, {
    id: 'B',
    name: 'Autumn'
  }];
  return (
    <div>
        <GallerySelector
          galleries={galleries}
          onGalleryClick={handleGalleryClick}
          selectedGallery={selectedGallery} />

      <Gallery
        images={gallerySelected}
        onClick={handleClick}
        enableImageSelection={false}
      />
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
  );
}
