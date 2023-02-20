const { User } = require('../models');

const userData = [
  {
    username: 'MyshkaMS516',
    password: 'Password123'
  },
  {
    username: 'sasha_fierce',
    password: 'Ilovebeyonce25'
  },
  {
    username: 'bobatea4life',
    password: 'BobaTeaIsTheBest234'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;