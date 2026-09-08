# Tic Tac Toe Game

A simple Tic Tac Toe game built with **React** and **TypeScript**, featuring winner detection, turn management, and move history navigation.

## Live Demo

**[Play the Game](https://tic-tac-toe-game-de3rii9gz-reza-babd.vercel.app)**

---

## Features

* 3×3 Tic Tac Toe game board
* Two-player gameplay using `X` and `O`
* Displays the current player's turn
* Automatically detects the winner
* Prevents moves on occupied squares
* Prevents further moves after a winner is detected
* Stores the history of every move
* Displays the complete move history
* Allows navigating back to previous moves
* Allows continuing the game from a previous move

---

## Project Structure

The project is organized using nested React components:

```text
src/
│
├── App.tsx
│
└── components/
    │
    └── Game/
        │
        ├── Game.tsx
        │
        └── Board/
            │
            ├── Board.tsx
            │
            ├── Square/
            │   └── Square.tsx
            │
            └── Winner/
                └── Winner.tsx
```

### Component Hierarchy

```text
App
└── Game
    └── Board
        ├── Square
        └── Winner
```

---

## Component Responsibilities

### App

`App.tsx` is the root component of the application.

It renders the `Game` component.

### Game

`Game.tsx` manages the main game state and game history.

Responsibilities:

* Maintains the history of board states
* Tracks the current move
* Determines whose turn it is
* Handles new moves
* Handles navigation to previous moves
* Renders the move history

The current player is determined from the current move:

```text
Even move → X
Odd move  → O
```

### Board

`Board.tsx` renders the 3×3 game board.

Responsibilities:

* Displays all nine squares
* Handles square clicks
* Displays the current game status
* Determines the next player
* Prevents invalid moves
* Uses the winner calculation function

### Square

`Square.tsx` represents an individual square on the board.

Each square receives:

* `value` — `X`, `O`, or `null`
* `onSquareClick` — click handler for the square

### Winner

`Winner.tsx` contains the `calculateWinnner` function used to determine whether a player has won.

It checks all eight possible winning combinations:

* 3 rows
* 3 columns
* 2 diagonals

If a winning combination is found, it returns the winning player. Otherwise, it returns `null`.

---

## Game Flow

```text
Player clicks a Square
        ↓
Board handles the click
        ↓
New board state is created
        ↓
Game updates the history
        ↓
Current move is updated
        ↓
Board displays the updated state
        ↓
Winner function checks for a winner
```

---

## State Management

The `Game` component uses React's `useState` hook to manage:

### `history`

Stores the board state after each move.

```text
Initial state
     ↓
Move 1
     ↓
Move 2
     ↓
Move 3
     ↓
...
```

### `currentMove`

Keeps track of the currently selected move in the history.

### `xIsNext`

Determines the next player based on `currentMove`.

```text
currentMove % 2 === 0
        ↓
       X

currentMove % 2 !== 0
        ↓
       O
```

---

## Winner Detection

The winner calculation checks these eight possible combinations:

```text
Rows:
[0, 1, 2]
[3, 4, 5]
[6, 7, 8]

Columns:
[0, 3, 6]
[1, 4, 7]
[2, 5, 8]

Diagonals:
[0, 4, 8]
[2, 4, 6]
```

When three matching `X` or `O` values are found, the game displays:

```text
Winner: X
```

or

```text
Winner: O
```

If there is no winner, the game displays the next player:

```text
Next Player X
```

or

```text
Next Player O
```

---

## Move History

Every move creates a new board state and stores it in `history`.

The game displays the available history as buttons:

```text
Go To game start
Go to move # 1
Go to move # 2
Go to move # 3
...
```

Selecting a previous move updates the current board to that point in the game history.
