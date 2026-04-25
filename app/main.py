from fastapi import FastAPI, HTTPException
import redis
import os

app = FastAPI()

redis_host = os.getenv("REDIS_HOST", "redis")
redis_client = redis.Redis(host=redis_host, port=6379, decode_responses=True)

@app.get("/")
def read_root():
    value = redis_client.get("testkey")
    if value is None:
        raise HTTPException(status_code=404, detail="Key not found")
    return {"value": value}

@app.post("/write/{key}")
def write_key(key: str, value: str):
    redis_client.set(key, value)
    return {"message": "Key stored successfully"}
