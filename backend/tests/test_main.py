from fastapi.testclient import TestClient
from main import app
client = TestClient(app)

def test_get():
    response = client.get("/user")
    assert response.status_code == 200

