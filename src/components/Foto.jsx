import { PhotoContext } from "../contexts/PhotoContext";
import { useContext } from "react";

const Foto = ({ photo }) => {
  const { photos, setPhotos } = useContext(PhotoContext);

  const agregarLiked = (id) => {
    const photoLiked = photos.map((photoItem) => {
      if (photoItem.id === id) {
        return {
          ...photoItem,
          liked: !photoItem.liked,
        };
      }
      return photoItem;
    });

    setPhotos(photoLiked);
    console.log(photoLiked);
  };

  return (
    <div className="col-md-3">
      <div className="card position-relative">
        <img src={photo.src.tiny} alt="" className="img-fluid" />
        <img
          onClick={() => agregarLiked(photo.id)}
          src={
            photo.liked
              ? "./src/assets/icons/heart-filled.svg"
              : "./src/assets/icons/heart.svg"
          }
          alt=""
          className="position-absolute top-0 end-0 corazon"
          style={{ opacity: 0.9, zIndex: 1 }}
        />
        <div className="card-img-overlay">
          <h5 className="card-title position-absolute bottom-0 start-1 mb-1 text-light">
            {photo.photographer}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Foto;
