const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

// /api/thoughts - GET: gets all thoughts; POST: creates new thoughts
router.route("/").get(getThoughts).post(createThought);

//  /api/thoughts/:thoughtId - GET: gets single thought; DELETE: deletes single thought and updates user; PUT: updates single thought
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .delete(deleteThought)
  .put(updateThought);

//   /api/thoughts/:thoughtId/reactions - POST: adds new reaction to thought
router.route("/:thoughtId/reactions").post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId - DELETE: deletes reaction by ID
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
