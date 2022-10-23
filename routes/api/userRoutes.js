const router = require("express").Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

// /api/users - GET: gets all users; POST: creates new user
router.route("/").get(getUsers).post(createUser);

//  /api/users/:userId - GET: gets single user; DELETE: deletes single user and associated thoughts; PUT: updates single user
router.route("/:userId").get(getSingleUser).delete(deleteUser).put(updateUser);

// /api/users/:userId/friends/ - POST: adds new friend
router.route("/api/users/:userId/friends/").post(addFriend);

// /api/users/:userId/friends/:friendId - DELETE: deletes friend by ID
router.route("/api/users/:userId/friends/:friendId").delete(removeFriend);

module.exports = router;
