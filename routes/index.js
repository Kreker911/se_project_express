const router = require("express").Router();
const userRouter = require("./users");
const itemRouter = require("./clothingItems");
const { NOT_FOUND } = require("../utils/errors");

router.use("/users", userRouter);

router.use("/items", itemRouter);

router.use((req, res) => {
  return res.status(NOT_FOUND).send({ message: "Router not found" });
});

module.exports = router;