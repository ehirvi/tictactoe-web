# Tic-Tac-Toe (web client)

An online version of the Tic-Tac-Toe game.

## Description

Play a game of Tic-Tac-Toe with your friend remotely. Create a new game, send the invite code to your friend and they will use it to join your game session.

## Preview

> UI is a work in progress

<img width=400 src="https://github.com/user-attachments/assets/501c7f4f-1399-4f00-88fa-56d63df7d74f"></img>
<img width=400 src="https://github.com/user-attachments/assets/5041da39-5801-4481-9d19-fc5d7b3a61c3"></img>
<img width=400 src="https://github.com/user-attachments/assets/294480cc-3355-4fa7-a4db-04075d0f8f0e"></img>

## Technologies Used

- TypeScript
- React
- Node.js
- Express.js
- WebSocket

## Setup

### Requirements

- [Node.js](https://nodejs.org/en)

### Installation

1. Follow the instructions to run the [server](https://github.com/ehirvi/tictactoe-server) first
2. Clone this repository and install its dependencies ```npm install```
3. Run in development mode ```npm run dev```

## Feature Roadmap

- [x] A basic user interface and a game board the player can interact with.
- [x] The player can connect to the game server.
- [x] Game server handles the players moves and sends an updated game board back to the player.
- [x] A unique game ID is generated upon the first player starting a game session.
- [x] A second player can join the game session of the first player using the game ID.
- [x] Both players in the same session can set their mark (X or O) on the board with real time updates.
- [x] Game win/lose conditions are checked on the server to determine if a player has won and whether the game should be ended.
- [ ] Improved UI style.
- [ ] Usage of Redis cache (or similar) to save ongoing game sessions, instead of using a map-like object.
- [ ] Security/authorization via tokens.
- [ ] Deployment of the application.
- [ ] Ability to set a temporary nickname / register an account and save game progress to a database.
