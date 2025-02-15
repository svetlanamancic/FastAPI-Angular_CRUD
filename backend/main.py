from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from models.User import User

app = FastAPI()

app.add_middleware(CORSMiddleware,
                   allow_origins=["*"],
                   allow_credentials=True,
                   allow_methods=["*"],
                   allow_headers=["*"]
                   )

users = {}

@app.post("/user/add")
async def addUser(user: User):
    if not users.get(user.name):
        users[user.name] = user
    return user

@app.put("/user/update")
async def updateUser(user: User):
    if users.get(user.name):
        users[user.name] = user
    return user

@app.get("/user")
async def get():
    return users

@app.get("/user/{name}")
async def get(name: str):
    if users.get(name):
        return users.get(name)

@app.delete("/user/delete/{name}")
async def deleteUser(name: str):
    if users.get(name):
        users.pop(name)