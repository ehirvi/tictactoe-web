# Tic-Tac-Toe (web client)

An online version of the Tic-Tac-Toe game.

## Description

Play a game of Tic-Tac-Toe with your friend remotely. Create a new game, send the invite code to your friend and they will use it to join your game session.

## Preview

### Live Deployment
https://tictactoe-web.fly.dev/

### Screenshots

> Note: Screenshots might be outdated

<img width=400 src="https://github.com/user-attachments/assets/981e3104-3dae-480e-a50d-f44c10ca173c"></img>
<img width=400 src="https://github.com/user-attachments/assets/29df3be6-59d7-48ad-958a-a3beaa9aa3e1"></img>
<img width=400 src="https://github.com/user-attachments/assets/82a4ed08-8dcd-4f31-8d7c-704a9b71cb7c"></img>

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
- [ ] Use Redis cache to save ongoing game sessions, instead of saving them to Node's memory.
- [ ] Improve UI (better overall look, fancy animations, better error notifications).
- [ ] Add security via tokens.
- [ ] Add ability to register as a user and track game progress over time. Data saved to MongoDB/PostgreSQL.
