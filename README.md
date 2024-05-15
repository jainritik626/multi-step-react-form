# React + TypeScript + Vite

# Multi-Step Form Application

This project is a multi-step form application built with React and TypeScript. The form allows users to input various types of information in a step-by-step manner and persists the data in local storage, so the form state is retained even after a page refresh. The form also handles asynchronous submission and displays loading and success screens accordingly.

## Table of Contents
1. [Features](#features)
2. [Project Structure](#project-structure)
3. [Setup](#setup)
4. [Running the Application](#running-the-application)
5. [Testing](#testing)
6. [System Design and Architecture](#system-design-and-architecture)

## Features
- Multi-step form with individual, business, and bank details steps.
- Form data persistence in local storage.
- Navigation through form steps.
- Loading and success screens for form submission.
- Styled using CSS for a clean user interface.

## Project Structure
```
multi-step-form-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── BankForm.tsx
│   │   ├── BusinessForm.tsx
│   │   ├── IndividualForm.tsx
│   │   ├── SuccessScreen.tsx
│   │   ├── WaitingScreen.tsx
│   │
│   ├── hooks/
│   │   └── useMultiStepForm.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.tsx
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
```

## Setup

### Prerequisites
- Node.js (v14 or later)
- npm (v6 or later) or yarn (v1 or later)

### Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/jainritik626/multi-step-react-form.git
    ```
2. Navigate to the project directory:
    ```sh
    cd MULTI-STEP-LOAN-FORM
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
    or
    ```sh
    yarn install
    ```

## Running the Application
1. Start the development server:
    ```sh
    npm run dev
    ```
2. Open your browser and navigate to `http://localhost:3000` to see the application running.

## Testing
Currently, the project does not include a testing setup. However, you can add testing using frameworks like Jest and React Testing Library. Here's a basic setup guide:

1. Install Jest and React Testing Library:
    ```sh
    npm install --save-dev jest @testing-library/react @testing-library/jest-dom
    ```
    or
    ```sh
    yarn add --dev jest @testing-library/react @testing-library/jest-dom
    ```

2. Add a test script to `package.json`:
    ```json
    "scripts": {
      "test": "jest"
    }
    ```

3. Create a test file, e.g., `App.test.tsx`, and write your tests.

4. Run the tests:
    ```sh
    npm test
    ```
    or
    ```sh
    yarn test
    ```

## System Design and Architecture
The application is designed to be scalable, maintainable, and modular. Here’s an overview of the system design and architecture:

### Components
- **IndividualForm, BusinessForm, BankForm**: Each form step is represented as a separate component to ensure modularity and reusability.
- **SuccessScreen, WaitingScreen**: Components for displaying different states of the form submission process.

### Hooks
- **useMultiStepForm**: A custom hook that manages the multi-step form logic, including navigation between steps and handling form completion.

### Forms
- **Formik**: currently we are using basic Html form for faster development and easily understandable, we can also use Formik for better error handling and to get access to validations libraries like **Yup**

### State Management
- **useState**: The React `useState` hook is used to manage the form data and the state of the application (loading, completed).
- **localStorage**: Used to persist form data and the current step index to handle page refreshes.

### Styling
- **CSS**: The application uses a CSS file (`App.css`) to style the components, ensuring a clean and consistent user interface.
- **Chakra UI**: we can also use UI Libraries like Chakra UI, shadcn UI etc for faster development process.

### Persistence
- **localStorage**: Form data and the current step index are stored in localStorage to ensure that the user can resume their progress even after a page refresh.

### Scalability
- The application is designed to be easily extendable. Adding new steps to the form or modifying existing ones is straightforward.
- The use of custom hooks and modular components makes the system easy to maintain and update.

By following these design principles, the application remains robust, scalable, and easy to maintain.

## Conclusion
This multi-step form application demonstrates how to build a complex form with step-by-step navigation, data persistence, and asynchronous submission handling using React and TypeScript. The project structure, state management, and modular design principles ensure the application is scalable and maintainable.
