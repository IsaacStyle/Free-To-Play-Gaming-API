import { Router } from "express"
import express from 'express'
import gRoute from "./Game-Route.js"

const router = Router()
router.use(express.json())

router.use("/", gRoute)

export default router