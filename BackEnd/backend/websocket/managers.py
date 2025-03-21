#!/usr/bin/env python 
# -*- coding:utf-8 -*-
# Time:    2022-08-12 18:34
# Author:  rongli
# Email:   abc@xyz.com
# File:    connection.py
# Project: fa-demo
# IDE:     PyCharm
from typing import List

from starlette.websockets import WebSocket


class ConnectionManager:
    def __init__(self):
        self.active_connections: List[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)

    def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)

    @staticmethod
    async def send_personal_message(message: str, websocket: WebSocket):
        await websocket.send_text(message)

    async def broadcast_text(self, message: str):
        for connection in self.active_connections:
            await connection.send_text(message)

    async def broadcast_json(self, message: dict):
        for connection in self.active_connections:
            await connection.send_json(message)
