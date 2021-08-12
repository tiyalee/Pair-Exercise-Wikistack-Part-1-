const express = require("express")
const router = express.Router();
const addPage = require("../views/addPage");
const { Page } = require("../models");
const wikipage = require("../views/wikipage")

router.get("/", (req, res) => {
  res.send('Route 1')
})

router.post("/", async (req, res, next) => {
  try {
    const page = await Page.create({
      title: req.body.title,
      content: req.body.content
    });
    res.redirect("/")
  } catch (error) { next(error) }
})

router.get("/add", (req, res) => {
  res.send(addPage())
})

router.get("/:slug", async (req, res, next) => {
  try {
    const resultSlug = await Page.findOne({
    where: {
      slug: req.params.slug
    }
  })
  res.send(wikipage(resultSlug, req.params.name))
  } catch (error) { next(error) }
})

module.exports = router;













