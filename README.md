# Tic-Tac-Toe (web client)

An online version of the Tic-Tac-Toe game.

## Description

Play a game of Tic-Tac-Toe against your friend online. Create a new game, send the invite code to your friend and they will use it to join your game session.

## Preview

### Live Deployment
https://tictactoe-web.fly.dev/

### Screenshots

<img width=300 src="https://github.com/user-attachments/assets/cd4e8007-2dc0-40a9-a132-f5d3ce2ae97b"></img>
<img width=300 src="https://github.com/user-attachments/assets/ab001e82-a48f-4896-8bef-13ce195088ac"></img>
<img width=300 src="https://github.com/user-attachments/assets/6924733a-532a-47d1-bc9a-763a00d1cdcd"></img>
<img width=300 src="https://github.com/user-attachments/assets/25194dd4-7909-4a36-8dbb-e6ca0d6b788e"></img>
<img width=300 src="https://github.com/user-attachments/assets/d85c83fa-6365-4b19-a511-ec12ec80ca7f"></img>

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

## Development Goals

- [x] Deploy the application to fly.io.
- [x] Add security via tokens.
- [ ] Improve UI (better overall look, fancy animations, better error notifications).
- [ ] Use Redis cache to save ongoing game sessions, instead of saving them to Node's memory.
- [ ] Add ability to register as a user and track game progress over time. Data saved to MongoDB/PostgreSQL.
