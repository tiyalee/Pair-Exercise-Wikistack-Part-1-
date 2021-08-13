const express = require("express");
const router = express.Router();
const addPage = require("../views/addPage");
const { db,Page,User } = require("../models");
const wikipage = require("../views/wikipage");
const main= require("../views/main");
const userList = require("../views/userList");

router.get("/", async (req, res) => {
  const pages = await Page.findAll({where:{}});
  res.send(userList(pages));
});
router.get("/index", async (req, res) => {
  const pages = await Page.findAll({where:{}});
  res.send(main(pages));
});
router.post("/", async (req, res, next) => {
  try {
  const page = await Page.create({
    title: req.body.title,
    slug: req.body.slug,
    content: req.body.content,
  });
  res.redirect(`/wiki/${page.slug}`);
  } catch (error) {
    next(error);
  }
});

router.get("/add", async (req, res) => {
  try {
    res.send(addPage());
    
  } catch (error) {
    next(error);
  }
});

router.get("/:slug", async (req, res, next) => {
  try {
    const resultSlug = await Page.findOne({
      where: {
        slug: req.params.slug,
      },
    });
    res.send(wikipage(resultSlug, req.params.name));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
