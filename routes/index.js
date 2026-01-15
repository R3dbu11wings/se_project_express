const router = require("express").Router();
const { login, createUser } = require("../controllers/users");
const auth = require("../middlewares/auth");
const { getItems } = require("../controllers/clothingItem");
const clothingItem = require("./clothingItem");
const userRouter = require("./users");
const NotFoundError = require("../errors/NotFoundError");
const {
  validateAuthentication,
  validateUserBody,
} = require("../middlewares/validation");

router.post("/signin", validateAuthentication, login);
router.post("/signup", validateUserBody, createUser);
router.get("/items", getItems);

router.use("/users", auth, userRouter);
router.use("/items", auth, clothingItem);

router.use((req, res, next) => {
  next(new NotFoundError("Router not found"));
});

module.exports = router;
