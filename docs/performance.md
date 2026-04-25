# Performance Testing

Performance testing for this project is implemented using k6, a modern and lightweight load-testing tool designed for APIs and microservices.

## Test Scenario

The load test simulates concurrent users interacting with the API to validate how the system behaves under load. Both read and write operations are tested to ensure end-to-end behavior remains reliable.

## Operations Tested

- `POST /write/{key}`: Writes data to Redis through the API.
- `GET /`: Attempts to retrieve a predefined key and returns 404 if missing.

## Test Configuration

- **Virtual Users (VUs):** 50  
- **Duration:** 30 seconds  
- **Load Pattern:** Constant load (all VUs active for the full duration)

This scenario provides a realistic baseline for evaluating throughput and latency without overwhelming the system.

## Purpose of the Test

The performance test is designed to evaluate:

- **API response time:** Ensuring the application handles concurrent requests efficiently.
- **System stability under load:** Detecting potential bottlenecks or service degradation.
- **Redis interaction latency:** Assessing how well the FastAPI-Redis flow performs under stress.
- **Error rate and timeouts:** Validating that no unexpected failures occur during concurrent operations.

## Result Analysis

k6 outputs detailed metrics including:

- Request duration (avg, p95, p99)
- Success rate
- Request throughput (RPS)
- Error distribution

These results can be analyzed directly from the CLI output or exported for further processing. They provide an objective understanding of how the platform performs and whether further optimization is required.
