# FastAPI DevOps Assignment
This project is a DevOps assignment built with FastAPI, Redis, Docker, GitLab CI, Loki, Promtail, Grafana, and k6.

The application provides a simple key-value API backed by Redis. The project demonstrates containerization, logging, CI/CD pipeline setup, and load testing.

# Services
FastAPI application
Redis for key-value storage
Loki for log aggregation
Promtail for log shipping
Grafana for log visualization

# Prerequisites
Docker
Docker Compose

# Run the Project
Start all services using Docker Compose:

docker-compose up --build

# Access Services
FastAPI API

http://localhost:8000

Grafana

http://localhost:3000

Default Grafana credentials:

username: admin

password: admin

# Configure Loki in Grafana
After logging into Grafana:

Go to Connections → Data Sources
Add a new data source
Select Loki
Set the URL to:
http://loki:3100

Save and test

# API Usage
Write a value to Redis:

curl -X POST “http://localhost:8000/write/testkey?value=test”

Read value from Redis:

curl http://localhost:8000/

# Performance Testing
Run the k6 load test:

k6 run tests/k6-load-test.js

# Project Structure
app/  FastAPI application

tests/  k6 load testing scripts

logging/  Loki and Promtail configuration

docs/  architecture and design documentation