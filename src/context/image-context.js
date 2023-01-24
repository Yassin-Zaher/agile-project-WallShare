import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ImageContext = createContext({
  imagesData: [],
});

export const ImageProvider = ({ children }) => {
  const [imagesData, setImagesData] = useState([]);

  const value = { imagesData, setImagesData };
  return (
    <ImageContext.Provider value={value}>{children}</ImageContext.Provider>
  );
};
