import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import GallerySelector from './GallerySelector';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { images, CustomImage } from "./images";

const slides = images.map(({ original, width, height }) => ({
  src: original,
  width,
  height,
}));

export default function App() {
  const [index, setIndex] = useState(-1);

  const handleClick = (index, item) => setIndex(index);
  const [selectedGallery, setSelectedGallery] = useState("1");

const handleGalleryClick = () => {
    console.log("parent click");
    console.log(selectedGallery);
  };

  const galleries = [{
    id: '72157677539266623',
    name: 'Animals'
  }, {
    id: '72157675104433185',
    name: 'Autumn'
  }];
  return (
    <div>
        <GallerySelector
          galleries={galleries}
          onGalleryClick={handleGalleryClick}
          selectedGallery={selectedGallery} />

      <Gallery
        images={images}
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
