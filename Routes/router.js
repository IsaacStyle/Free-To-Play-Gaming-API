import { Router } from "express"
import express from 'express'
import gRoute from "./Game-Route.js"

const router = Router()
router.use(express.json())

// router.get("/", (req, res) => {
//   res.redirect('api')
// })

router.use("/", gRoute)

export default router