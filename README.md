# Todo List Application

A simple Todo List application built with React, TypeScript, Redux Toolkit, and Tailwind CSS. The app allows users to add, delete, and mark tasks as complete, with an option to filter tasks based on their status.

## Features

- **Add Todo**: Users can add new tasks to the todo list.
- **Delete Todo**: Users can delete tasks from the todo list.
- **Mark as Complete**: Users can mark tasks as completed or uncompleted.
- **Filter Todos**: Users can filter the list to view all tasks, only active tasks, or only completed tasks.
- **Responsive Design**: Styled with Tailwind CSS for a clean and user-friendly interface.
- **Local Storage Support**: Todos persist across page reloads.

## Project Structure

The project is organized as follows:

- `/components`
  - `TodoItem.tsx`: Component for individual todo items.
  - `TodoList.tsx`: Component to display the list of todo items.
- `/page`
  - `Home.tsx`: Main page of the application.
- `/store`
    `/slices`
  -   `todosSlice.ts`: Redux slice for managing todos.
-   `store.ts`: Redux store configuration.
- `App.tsx`: Main app component.
- `main.tsx`: Entry point of the React application.
- `index.css`: Tailwind CSS configuration.

## Installation and Setup

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/todo-list-app.git
    cd todo-list
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Start the development server**:

    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:3000`.

4. **Build for production**:

    ```bash
    npm run build
    ```

5. **Run the production build**:

    ```bash
    npm run start
    ```
