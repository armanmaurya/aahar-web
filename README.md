# Aahar Web

## Project Setup

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later) or yarn (v1.x or later)
- Git
- Docker

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/armanmaurya/aahar-web.git
    cd aahar-web
    ```

2. Install the required dependencies:
    ```sh
    npm install
    ```

### Running the Project

1. Launch the development server:
    ```sh
    npm run dev
    ```

2. Open your web browser and navigate to `http://localhost:3000` to access the application.

### Running the Project with Docker

1. Build the Docker image:
    ```sh
    docker build -t aahar-web .
    ```

2. Execute the Docker container:
    ```sh
    docker run -p 3000:3000 aahar-web
    ```

3. Open your web browser and navigate to `http://localhost:3000` to access the application.

### Building for Production

To generate a production build, execute:
```sh
npm run build
```

The production-ready files will be located in the `build` directory.

### Starting the Production Server

To initiate the production server, execute:
```sh
npm start
```

### Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Implement your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.
