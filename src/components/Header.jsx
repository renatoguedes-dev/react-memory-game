const Header = ({ currentScore, currentBestScore }) => {
  return (
    <>
      <div className="header">
        <h1>Animals Memory Game</h1>
        <div className="scores">
          <div className="score">Score: {currentScore}</div>
          <div className="best-score">Best score: {currentBestScore}</div>
        </div>
      </div>
      <h3>
        Get points by clicking on an image but don't click on any more than
        once!
      </h3>
    </>
  );
};

export default Header;
