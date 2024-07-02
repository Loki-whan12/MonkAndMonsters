# Monks and Monsters Game

This project is a Monks and Monsters game developed in two versions: a Command Line Interface (CLI) version in Java and a graphical version in TypeScript using Vite and the Phaser library.

## Features

### CLI Version

The Command Line Interface (CLI) version is fully functional and includes:

- **Game Logic**: Manage the movement of monks and monsters across the river.
- **Validation**: Ensure game rules are followed, such as not leaving more monsters than monks on either side of the river.

### Graphical Version

The graphical version is developed using TypeScript, Vite, and the Phaser library and includes:

- **Interactive Gameplay**: Click to move monks and monsters between the river banks and the boat.
- **Visual Feedback**: See the characters move in real-time with animations.
- **Game Rules**: Enforce the same rules as the CLI version within the graphical interface.

## Technologies Used

### CLI Version

- **Java**: Core language for implementing the CLI game logic.

### Graphical Version

- **TypeScript**: Core language for the graphical version.
- **Vite**: Build tool for fast development.
- **Phaser**: Library for creating 2D games.

## Getting Started

### Prerequisites

- Java Development Kit (JDK) 8 or higher (for CLI version)
- Node.js and npm (for graphical version)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Loki-whan12/monks-and-monsters
    ```
2. Navigate to the project directory:
    ```sh
    cd monks-and-monsters
    ```
    

### Running the CLI Version

1. Navigate to the CLI directory:
    ```sh
    cd cli
    ```
2. Compile the CLI code:
    ```sh
    javac MonksAndMonstersCLI.java
    ```
3. Run the CLI application:
    ```sh
    java MonksAndMonstersCLI
    ```

### Running the Graphical Version

1. Navigate to the graphical version directory:
    ```sh
    cd graphical
    ```
2. Install the dependencies:
    ```sh
    npm install
    ```
3. Start the development server:
    ```sh
    npm run dev
    ```
4. Open your browser and navigate to the provided local server URL to play the game.

## Contribution

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.
