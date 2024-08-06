# Animals Memory Game

Project: Animals Memory Game

This is a memory game where you can earn points by clicking on images of animals without clicking on any image more than once. The game shuffles the images each time you click, making it challenging to remember which ones you've clicked.

## Technologies Used

- React
- JavaScript
- CSS

## Features

- **Dynamic Image Loading**: The app fetches animal images from the Pexels API dynamically, ensuring a variety of images each time you play.

- **Score Tracking**: The app keeps track of your current score and your best score. The best score updates when you achieve a new high score.

- **Responsive Design**: The interface is responsive, ensuring an optimal experience on both desktop and mobile devices.

- **Interactive Gameplay**: Click on the images to score points, but don't click the same image twice! The game shuffles the images after each click.

## How to Play

1. Click on an image to earn a point.
2. Don't click on the same image more than once, or your score will reset to zero.
3. The game shuffles the images after each click, so pay attention!

## API Used

- **Pexels API**: Used to fetch high-quality images of animals. More information about the API can be found [here](https://www.pexels.com/api/).

## Installation

1. Clone the repository: `git clone https://github.com/your-username/animals-memory-game.git`
2. Navigate to the project directory: `cd animals-memory-game`
3. Install the dependencies: `npm install`
4. Create a '.env' file in the root directory of the project and include 'VITE_PEXELS_API_KEY=your-api-key-here'

## Deployment

The project can be deployed using platforms like Vercel, Netlify, or GitHub Pages. Make sure to update the API key if you're using a different environment.


[Live Demo](https://renatoguedes-dev.github.io/animals-memory-game/)
