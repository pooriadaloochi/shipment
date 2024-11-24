# Ship Load Order Registration - Project Repository

Welcome to the GitHub repository for the **Ship Load Order Registration** project. This project is aimed at managing and optimizing ship load orders efficiently using modern web technologies and best practices. Below, you'll find the details on how to use, develop, and contribute to this project.

## Overview

The **Ship Load Order Registration** application provides a robust interface for managing ship load orders, allowing easy tracking, editing, and updating of shipping-related data. The application is built using **React.js** with **Ant Design** as the UI framework, offering a clean and user-friendly interface.

## Features

- **Order Management**: Add, edit, delete, and view ship load orders.
- **Persian Calendar Integration**: Utilizes **Ant Design Jalali** for Jalali date management, making it suitable for Iranian users.
- **State Management**: Uses **Redux** and **Redux Thunk** for efficient state management.
- **Responsive Design**: The UI is responsive, ensuring optimal use on various devices, from desktops to mobile.

## Technologies Used

- **Frontend**:
  - [React.js](https://reactjs.org/): JavaScript library for building user interfaces.
  - [Ant Design](https://ant.design/): UI framework used to create a sleek and responsive interface.
  - **Ant Design Jalali**: For Jalali date management, enhancing usability for Persian-speaking users.
  - **Redux & Redux Thunk**: For state management, enabling predictable and scalable state changes.
  - **Craco**: Create React App Configuration Override to add custom configurations without ejecting.
  - **Axios**: To handle HTTP requests for backend communication.
  - **Day.js** and **Moment.js**: For date manipulation and formatting.
  - **Lodash**: JavaScript utility library for performance optimization.

- **Styling**:
  - **Less** & **Sass**: Preprocessors used for more organized and maintainable CSS.
  - **rc-color-picker**: For providing interactive color selection within the app.

- **Testing**:
  - **React Testing Library**: For unit and integration tests.
  - **Jest**: Testing framework used to ensure code quality and reliability.

## Getting Started

To get a local copy of the project up and running, follow these simple steps.

### Prerequisites

- **Node.js** (v14 or above) and **npm** or **yarn** should be installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/pooriadaloochi/ship-load-order-registration.git
   ```
2. Navigate to the project folder:
   ```bash
   cd ship-load-order-registration
   ```
3. Install the dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Project

To run the development server:
```bash
npm start
# or
yarn start
```
The application should be available at `http://localhost:3000`.

### Building for Production

To create an optimized production build:
```bash
npm run build
# or
yarn build
```

## Folder Structure

- **/src/components**: Reusable UI components used throughout the application.
- **/src/pages**: Pages that define different routes within the application.
- **/src/store**: Redux store configuration and slices for state management.
- **/public**: Static assets like images and icons.
- **/styles**: Less and Sass files for styling.

## Contributing

Contributions are welcome! If you have any suggestions for improvements or new features, feel free to open an issue or submit a pull request.

## Scripts

- **Start**: Runs the application in development mode.
  ```bash
  npm start
  # or
  yarn start
  ```
- **Build**: Creates an optimized production build.
  ```bash
  npm run build
  # or
  yarn build
  ```
- **Test**: Runs tests using Jest.
  ```bash
  npm run test
  # or
  yarn test
  ```

## Contact

If you have any questions or need further information, feel free to reach out:
- **LinkedIn**: [linkedin.com/in/pooriadaloochi](https://linkedin.com/in/pooriadaloochi)
- **Email**: pooriadaloochi@gmail.com

## License

This project is open source and available under the [MIT License](./LICENSE).

---

Thank you for checking out the Ship Load Order Registration project! Your feedback and contributions are highly appreciated.
