const router = require("express").Router();
const { login, createUser } = require("../controllers/users");
const auth = require("../middlewares/auth");
const { getItems } = require("../controllers/clothingItem");
const clothingItem = require("./clothingItem");
const userRouter = require("./users");
const { NOT_FOUND_ERROR } = require("../utils/errors");

router.post("/signin", login);
router.post("/signup", createUser);
router.get("/items", getItems);

router.use("/users", auth, userRouter);
router.use("/items", auth, clothingItem);

router.use((req, res) => {
  res.status(NOT_FOUND_ERROR).send({ message: "Router not found" });
});

module.exports = router;
