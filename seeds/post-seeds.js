const { Post } = require('../models');

const postData = [
  {
    title: 'Ten ways to make JavaScript easier to learn',
    content: 'JavaScript is hard! Here are ten tips and tricks to have an easier time learning the material.',
    user_id: 1
    
  },
  {
    title: 'Stackoverflow VS w3schools: Which is superior for finding the answers you need?',
    content: 'There are multiple website you can visit to ask questions and search for the coding answers you need, but which is the best?',
    user_id: 2
  },
  {
    title: 'Authentication vs. Authorization',
    content: 'The is a difference where authentication is confirming your own identity whereas authorization means being allowed access to system.',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;