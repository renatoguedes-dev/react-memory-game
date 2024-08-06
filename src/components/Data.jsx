import { useEffect } from "react";
import axios from "axios";

export const imagesInformation = [
  { id: 33045, description: "Brown Lion" },
  { id: 1438130, description: "Cockatiel" },
  { id: 5840760, description: "White Lioness" },
  { id: 302304, description: "Tiger in the snow" },
  { id: 133408, description: "White Tiger" },
  { id: 2317904, description: "Colorful Parrot" },
  { id: 55814, description: "Sleepy Lioness" },
  { id: 164186, description: "Corgi" },
  { id: 1198802, description: "Samoyed" },
  { id: 1427447, description: "Red Blue Parrot" },
  { id: 133356, description: "Bald Eagle" },
  { id: 1629989, description: "Brown Hawk" },
];

const Data = ({ setImages, setLoading }) => {
  const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

  useEffect(() => {
    const fetchImages = async () => {
      const fetchedImages = [];
      for (const image of imagesInformation) {
        try {
          const response = await axios.get(
            `https://api.pexels.com/v1/photos/${image.id}`,
            {
              headers: {
                Authorization: API_KEY,
              },
            }
          );
          fetchedImages.push(response.data);
        } catch (error) {
          console.error("Error fetching data from Pexels API", error);
        }
      }
      setImages(fetchedImages);
      setLoading(false);
    };

    fetchImages();
  }, []);

  return null;
};

export default Data;
