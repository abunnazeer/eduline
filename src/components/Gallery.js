import ReactImageGallery from "react-image-gallery";
import "./image-gallery.scss";

const Gallery = () => {
  const images = [
    {
      original:
        "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      original:
        "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      //   thumbnail:
    },
    {
      original:
        "https://images.pexels.com/photos/2065490/pexels-photo-2065490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      //   thumbnail:""
    },
  ];
  return (
    <div>
      <ReactImageGallery
        items={images}
        showNav={false}
        showPlayButton={true}
        showBullets={true}
        // slideDuration={500}
        // slideInterval={3500}
        showFullscreenButton={false}
      />
    </div>
  );
};

export default Gallery;
