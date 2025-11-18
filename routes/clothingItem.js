const router = require("express").Router();

const {
  createItem,
  getItems,
  updateItem,
  deleteItem,
  likeItem,
  dislikeItem,
} = require("../controllers/clothingItem");

router.post("/", createItem);

router.get("/", getItems);

router.put("/:itemId", updateItem);

router.delete("/:itemId", deleteItem);

router.put("/:itemId", likeItem);

router.delete("/:itemId", dislikeItem);

module.exports = router;
