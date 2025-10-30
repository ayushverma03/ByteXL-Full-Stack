# Fullstack 9.1 - Dockerized React App

This project demonstrates creating a **production-ready Docker image** for a React application using **multi-stage builds**.

## Steps

1. Build the Docker image:
   ```bash
   docker build -t react-app:latest .
2. Run the container:
docker run -p 80:80 react-app:latest

3. Open your browser at http://localhost to see the app.
