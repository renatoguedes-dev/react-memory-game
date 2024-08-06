import { useEffect, useState } from "react";
import Data, { imagesInformation } from "./Data";
import Spinner from "./Spinner";
import {
  checkBestScore,
  isRepeatedCard,
  shuffleArray,
} from "../helpers/HelperFunctions";

const Cards = ({
  currentScore,
  currentBestScore,
  setCurrentScore,
  setCurrentBestScore,
}) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [clickedCards, setClickedCards] = useState([]);

  const imageList = imagesInformation;

  useEffect(() => {
    checkBestScore(currentScore, currentBestScore, setCurrentBestScore);
  }, [currentScore, currentBestScore]);

  const handleClick = (event) => {
    event.preventDefault();

    const cardId = event.currentTarget.dataset.id;

    const repeatedCard = isRepeatedCard(cardId, clickedCards);

    if (repeatedCard) {
      setClickedCards([]);
      setCurrentScore(0);
    } else {
      setClickedCards([...clickedCards, { id: cardId }]);
      setCurrentScore((prevScore) => prevScore + 1);
    }

    const shuffledImages = [...images];
    shuffleArray(shuffledImages);
    setImages(shuffledImages);
  };

  return (
    <div className="gallery">
      <Data setImages={setImages} setLoading={setLoading} />
      {loading ? (
        <Spinner /> // Display loading spinner if still loading
      ) : (
        <div className="cards-container">
          {images.map((image) => {
            // Find the description in imageList for the current image
            const item = imageList.find((item) => item.id === image.id);
            return (
              <div
                data-id={image.id}
                className="image-card"
                key={image.id}
                onClick={handleClick}
              >
                <img
                  className="image"
                  src={image.src.medium}
                  alt={image.photographer}
                />
                <div className="card-description">
                  {item ? item.description : image.alt}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Cards;
