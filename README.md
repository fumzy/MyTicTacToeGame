# Tic-Tac-Toe 🎮

A modern, responsive Tic-Tac-Toe game built with React.

This project started as part of my hands-on React learning through Maximilian Schwarzmüller's React course and was further customized and extended with my own UI design, responsive layout, player experience improvements, and visual styling.

The finished application uses the same design language as my React portfolio, featuring a dark plum interface, champagne-gold accents, responsive game layout, editable player names, and a live game history panel.

## ✨ Features

- Two-player Tic-Tac-Toe gameplay
- Editable player names
- Active player highlighting
- Automatic winner detection
- Draw detection
- Game-over screen
- Rematch functionality
- Live game history
- Player names displayed in the game log
- Human-friendly row and column numbering
- Responsive desktop and mobile layouts
- Animated player states and game interactions
- Custom portfolio-inspired UI

## 🎨 Custom Design

I redesigned the original course styling to create a visual identity consistent with my React portfolio.

The interface uses:

- Deep plum and burgundy backgrounds
- Champagne-gold accent colors
- Muted rose highlights
- Playfair Display for prominent headings
- DM Sans for application text
- Custom hover and active states
- Soft shadows and card-based layouts
- Responsive styling for desktop, tablet, and mobile

On larger screens, the game board and live game log are displayed side-by-side so players can follow each move without scrolling.

On smaller screens, the layout automatically adapts by placing the game log beneath the board.

## 🧠 React Concepts Practiced

This project provided hands-on experience with several important React concepts:

- Component-based architecture
- State management with `useState`
- Props and component communication
- Lifting state up
- Derived state
- Event handling
- Conditional rendering
- Rendering dynamic lists
- Immutable state updates
- Reusable components
- Dynamic CSS classes

## ⚙️ Game Logic

The application maintains a history of player turns rather than directly storing the current game board.

Each turn records:

```js
{
  square: {
    row: rowIndex,
    col: colIndex
  },
  player: currentPlayer
}
```

The current board is then derived from the turn history.

This approach allows the application to determine:

- The current state of the board
- Which player's turn is next
- Whether a player has won
- Whether the game ended in a draw
- The complete history of moves

## 📝 Live Game Log

Each move is recorded and displayed in the game log.

Instead of displaying only the internal `X` and `O` symbols, the log uses the players' actual names.

For example:

```text
Player 1 selected square at row 1, column 2
Player 2 selected square at row 2, column 2
```

If a player changes their name, the updated name is reflected in the interface.

On desktop, the log is displayed beside the game board for easier visibility while the game is being played.

## 🏆 Winner Detection

Winning combinations are defined separately from the main application logic.

The game evaluates the current board against those combinations after each move to determine whether:

- Player 1 wins
- Player 2 wins
- The game ends in a draw
- The game should continue

When the game ends, an animated Game Over screen displays the result and provides the option to start a rematch.

## 🛠️ Technologies Used

- React
- JavaScript (ES6+)
- JSX
- CSS3
- Vite
- Git
- GitHub

## 📂 Project Structure

```text
src/
├── assets/
├── components/
│   ├── GameBoard.jsx
│   ├── GameOver.jsx
│   ├── Log.jsx
│   └── Player.jsx
├── App.jsx
├── index.css
├── main.jsx
└── winning-combinations.js
```

The application is separated into focused React components, with the main game state and derived game logic coordinated through `App.jsx`.

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/fumzy/MyTicTacToeGame.git
```

### 2. Navigate to the project

```bash
cd MyTicTacToeGame
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will display the local development URL in the terminal.

## 📸 Application Preview

https://my-tic-tac-toe-game-steel.vercel.app/


## 💡 What I Learned

This project helped strengthen my understanding of how React applications can derive multiple pieces of UI state from a smaller source of truth.

Rather than independently managing the board, current player, winner, and move history, the application uses the game turns to derive much of this information.

I also used the project as an opportunity to go beyond the course implementation by customizing the visual design, improving the game history experience, making player names more meaningful throughout the interface, and creating a responsive layout that works across different screen sizes.

## 🔮 Possible Future Improvements

Some enhancements I may explore include:

- Persistent score tracking across multiple rounds
- Single-player mode against the computer
- Difficulty levels
- Game statistics
- Sound effects
- Additional animations
- Saving game history
- Online multiplayer support

## 👩🏽‍💻 Author

**Fumnanya Loveth Adeyanju**

Senior Software Engineer  
.NET | React | Angular | TypeScript | Azure

Built as part of my continued hands-on development with React and modern front-end application design.
