# 🧠 React Memory Card Game

This project is part of [The Odin Project](https://www.theodinproject.com/) curriculum.  
The goal is to build a **Memory Card Game** using **React** that fetches card data from an API and allows users to play a matching game.

## 💡 Project Overview

Build a memory card game where:

1. **Card data is fetched from an API**  
   - You’ll retrieve card objects, each containing an image and identifying information.
2. **Cards are displayed in a grid layout**  
   - Players can click on cards to flip them and reveal the image.
3. **Match logic is implemented**  
   - When two flipped cards match, they remain face-up.
   - When they don’t match, they flip back down.
4. **The game continues until all matches are found.**

## 🧩 Project Instructions

1. Create a new **React application** for the Memory Card Game.
2. Fetch card data from the provided **API endpoint** and store it in state.
3. Display the cards in a **responsive grid layout** on screen.
4. Implement **card flipping**:
   - Clicking a card should reveal it.
   - Only two cards can be revealed at a time.
5. Add logic to check for **matches**:
   - If the two revealed cards match → keep them face-up.
   - If not → flip them back after a short delay (e.g., 1 second).
6. Track and display the **number of moves** the player has made.
7. When all cards have been successfully matched, display a **win message**.
8. Add a **reset/restart** button that shuffles the cards and resets the game state.
9. Style the game using **CSS** so it’s engaging and responsive across screen sizes.

## 🎯 Learning Outcomes

- Fetching data using `fetch` or **Axios** in React
- Managing **state** for game logic
- Conditional rendering based on user interaction
- Handling **user events** and timing behavior
- Dynamically rendering components from API data

## 😅 Struggles

One of the biggest challenges for me in this project was **adjusting the image paths and rendering information from the API**. The raw data returned image URLs and card identifiers in a format that didn’t match what I initially expected in my components. It took some experimentation to manipulate the API data so that images and identifying information rendered correctly in the game grid. Once I figured out how to transform and use the data properly in state, the rest of the game logic fell into place more smoothly.

