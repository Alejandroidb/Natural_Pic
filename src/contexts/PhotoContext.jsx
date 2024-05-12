import { createContext, useEffect, useState } from "react";
import photoBook from "../assets/json/photos.json";

export const PhotoContext = createContext();

const PhotosProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const { photos = [] } = { ...photoBook };
    setPhotos(photos)
    //console.log(photos)
  }, []);
  const contextValue = {photos, setPhotos};
  return <PhotoContext.Provider value={contextValue}>{children}</PhotoContext.Provider>;
};

export default PhotosProvider;
