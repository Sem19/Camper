import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // Import lightbox styles
import { useState } from "react";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleImageClick = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div>
      <Carousel>
        {images.map((image, index) => (
          <div key={index} onClick={() => handleImageClick(index)}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Carousel>

      {isOpen && (
        <div className={styles.lightbox_container}>
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
          />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
