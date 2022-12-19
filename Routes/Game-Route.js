import { Router } from "express"
import express from 'express'
import * as controller from "../Controllers/Game-Controller.js"

const router = Router()
router.use(express.json())

router.get("/", controller.getGames)
router.get("/:id", controller.getGameId)
router.post("/", controller.createGame)
router.put("/:id", controller.updateGame)
router.delete("/:id", controller.deleteGame)

export default router;