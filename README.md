# Weather API Wrapper Service

Solution for the [weather-app challenge](https://roadmap.sh/projects/weather-api-wrapper-service) from roadmap.sh.

This project is a weather API wrapper service that uses Node.js and Express to build a RESTful backend. It retrieves weather data from an external API, caches it in Redis to enhance efficiency, and serves it through a custom API.

## Getting Started

### Prerequisites

1. **Redis**  
   Install Redis on your local system. You can download it [here](https://redis.io/download).

2. **Weather API Key**  
   Obtain a weather API key from your preferred weather service provider. Add it to the `.env` file as described in the **Installation** section below.

### Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/HUMBLEF0OL/weather-app.git
    cd weather-app
    ```

2. **Configure Environment Variables**  
   Rename the `.env.example` file to `.env`:
    ```bash
    mv .env.example .env
    ```
   Then, open the `.env` file and update `API_KEY` with your weather API key.

3. **Install Dependencies**
    ```bash
    npm install
    ```

### Update Package Scripts

Ensure the `start` script in the `package.json` file is set to run with `nodemon`:
```json
"scripts": {
  "start": "nodemon app.js"
}
```

### Usage

After completing the setup, start the server with:
```bash
npm start
```

The service will be running on the specified port, serving weather data with Redis caching.

## Project Structure

- **Node.js** and **Express**: Used for the server and routing setup.
- **Redis**: Caches weather data for improved performance.
  
This project wraps an external weather API, caches requests with a short expiration time, and provides weather data in a reliable, efficient way.
