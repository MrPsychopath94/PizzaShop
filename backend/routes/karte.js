import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    console.log("Ich bekomme ein GET")
    res.json("hello Pizza!")
})

export default router