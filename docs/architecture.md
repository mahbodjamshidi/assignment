# System Architecture

This project implements a containerized platform built around a FastAPI application and a Redis data store. All components are deployed using Docker and orchestrated with Docker Compose to provide a reproducible and consistent development environment.

## Components

- **FastAPI:** The main application service that exposes HTTP endpoints to read and write key-value data.
- **Redis:** An in-memory key-value database used for fast storage and retrieval of application data.
- **Docker:** Used to package the application and services into containers, ensuring consistent runtime environments.
- **Docker Compose:** Used to orchestrate multiple services including the API, Redis, and logging components.
- **Logging Stack:** Application and container logs are collected by Promtail, stored in Loki, and visualized through Grafana dashboards.
- **Performance Testing:** k6 is used to simulate concurrent users and evaluate the performance of the API under load.

## Architecture Flow

Client to FastAPI API to Redis to Container Logs to Promtail to Loki to Grafana
