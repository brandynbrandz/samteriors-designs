import React, { useState } from "react";
import Lightbox from "./components/CoolLightbox";
import ImageMosaic from "./components/ImageMosaic";
import images from "../../data/Gallery/gallery.json";
import { ThemeProvider } from "styled-components";

const ImageGallery = () => {
  const [isOpen, setOpen] = useState(false);
  const [currentImageIndex, setCurrentIndex] = useState(0);

  return (
    <>
      {" "}
      <ThemeProvider
        theme={{
          pageBackgroundColor: "#101010",
          pageContentFontColor: "#e2e5ec",
          pageContentLinkHoverColor: "#29abe2",
          pageContentSelectionColor: "#29abe2",
          headerNavFontColor: "#e2e5ec",
          accentColor: "#1f1f1f",
        }}
      >
        {/* react-photo-gallery */}
        <ImageMosaic
          images={images}
          handleClick={(e, { images, index }) => {
            setCurrentIndex(index);
            setOpen(true);
          }}
        />
        {/* react-spring-lightbox */}
        <Lightbox
          currentImageIndex={currentImageIndex}
          setCurrentIndex={setCurrentIndex}
          isOpen={isOpen}
          onClose={() => setOpen(false)}
          images={images}
        />
      </ThemeProvider>
    </>
  );
};

export default ImageGallery;
