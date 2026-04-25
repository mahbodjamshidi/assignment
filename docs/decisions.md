# Technical Decisions

## FastAPI
Chosen due to its high performance, asynchronous design, and minimal overhead.  
It integrates well with containerized environments and allows rapid development of lightweight services, which fits the simplicity of this assignment.

## Redis
Selected as a fast, in‑memory key‑value store that perfectly matches the application’s requirement to store and retrieve simple key-value pairs with minimal latency.

## Docker
Used to provide consistent and reproducible runtime environments across development, testing, and deployment.  
Docker ensures the application behaves the same regardless of the host machine.

## Docker Compose
Chosen for orchestrating multiple services in a simple local setup.  
It allows the API, Redis, and the logging stack (Loki, Promtail, Grafana) to be started and managed together without the complexity of Kubernetes, which is unnecessary for the scale of this project.

## Loki + Promtail
Loki is significantly more lightweight than traditional ELK stacks, consumes fewer resources, and integrates naturally with Docker logs.  
Promtail provides seamless log scraping by automatically detecting container logs.

## Grafana
Used to visualize logs and provide insight into system behavior.  
Grafana integrates natively with Loki, making it a natural choice for dashboarding and monitoring.

## k6
Chosen for performance testing due to its simplicity, modern CLI interface, and ability to write tests in JavaScript.  
It is lightweight, easy to automate in CI/CD pipelines, and ideal for testing REST APIs under concurrent load.
