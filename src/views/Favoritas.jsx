import { useContext } from "react";
import { PhotoContext } from "../contexts/PhotoContext";
import Foto from "../components/Foto";
const Favoritas = () => {
  const { photos } = useContext(PhotoContext);
  return (
    <>
      <h2 className="text-center text-success">Favoritas</h2>

      <div className="row m-1">
        {photos &&
          photos
            .filter((photo) => photo.liked == true)
            .map((photo) => <Foto photo={photo} key={photo.id} />)}
      </div>
    </>
  );
};

export default Favoritas;
