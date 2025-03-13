# 🎮 Tic-Tac-Toe Game

This project is a Cypress end-to-end (E2E) testing setup for a Tic-Tac-Toe web application built with React and Vite.

## 📌 Project Overview

-   Tests the Tic-Tac-Toe app using Cypress.
-   Runs automated UI tests for game logic (X/O moves, win/draw conditions, reset functionality).
-   Uses Vite as the development server.
-   Supports interactive Cypress testing (UI mode) and headless testing (CLI mode).

## 📂 Project Structure

| Path                | Description                                      |
| ------------------- | ------------------------------------------------ |
| `/cypress/e2e`      | Cypress test specs (Tic-Tac-Toe tests live here) |
| `/cypress/fixtures` | Sample test data (if needed)                     |
| `/cypress/support`  | Cypress custom commands & setup                  |
| `cypress.config.js` | Cypress configuration file                       |
| `/src/components`   | React components for the Tic-Tac-Toe game        |
| `App.jsx`           | Main React App component                         |
| `main.jsx`          | App entry point                                  |
| `package.json`      | Project scripts and dependencies                 |
| `vite.config.js`    | Vite server configuration                        |

## 🔧 Installation

1️⃣ Prerequisites

```
Node.js
npm
```

2️⃣ Clone the Repository

```
git clone https://github.com/AndriusJawm/ Tic_Tac_Toe-cypress-pipeline-demo.git
```

3️⃣ Install Dependencies

```
npm install
```

4️⃣ Run the Application

```
npm run dev
```

## 🧪 Running Tests

1. Run Cypress in UI Mode (Interactive)

```bash
npm run test:e2e
```

2. Run Cypress in CLI Mode (Headless)

```bash
npm run test:e2eh
```

## 📜 Cypress Test Cases

The following test cases are included in cypress/e2e/spec.cy.js:

✅ TC01: Load the app and verify the title.  
✅ TC02: Check if the board renders with 9 empty squares.  
✅ TC03: Ensure 'X' is placed first, followed by 'O'.  
✅ TC04: Prevent clicking on an already filled square.  
✅ TC05: Detect a winning condition.  
✅ TC06: Detect a draw condition.  
✅ TC07: Reset game.

## 🚀 CI/CD with GitHub Actions

This project uses GitHub Actions to automate testing and ensure code quality before merging changes into the master branch. The GitHub Actions workflow (.github/workflows/node.js.yml) performs the following steps:

1️⃣ Triggers:

-   Runs on push and pull_request events targeting the master branch.

2️⃣ Environment:

-   Executes on Ubuntu (latest version).
-   Uses Node.js 18.x.

3️⃣ Build & Test Steps:

-   Checks out the repository.
-   Installs dependencies using npm ci (ensures a clean install).
-   Starts the React application in the background.
-   Waits for the application to be ready.
-   Runs Cypress tests for end-to-end testing.

## 📝 License

This project is open-source under the MIT License.
