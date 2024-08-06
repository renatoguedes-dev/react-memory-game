export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));

    [array[i], array[random]] = [array[random], array[i]];
  }
}

export function checkBestScore(
  currentScore,
  currentBestScore,
  setCurrentBestScore
) {
  if (currentScore <= currentBestScore) {
    return;
  }

  setCurrentBestScore((prevBestScore) => Math.max(currentScore, prevBestScore));
}

export function isRepeatedCard(clickedCardId, ClickedCards) {
  return ClickedCards.some((card) => card.id === clickedCardId);
}
