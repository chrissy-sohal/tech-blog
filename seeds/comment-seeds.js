
const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "Fantastic!",
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: "This is really useful information",
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: "Neat! Thanks for sharing!",
    user_id: 3,
    post_id: 3
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;