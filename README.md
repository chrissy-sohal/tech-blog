
# Tech Blog
  

## Description

A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. Deployed on Heroku. It follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Table of Content
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Testing](#testing)
- [Questions](#questions)


## Installation:

To install the necessary dependencies, run the following command:

 npm i

## Usage:

-To use this app npm init has to be called to create your package.json file.

-The following necessary Npm dependencies must be installed to run the application properly: the needed dependencies will be found on the package.json file.

-To properly install the database you must install MySQL on your computer, create an profile in which you have a root and a password.

-In your command line you must type `mysql -u root -p` and then enter, type your password that you created on MySQL on the following line.

-To finally add the database you must do the following: `source db/schema.sql` then enter.

-Run `"npm run seed"` on command line.

-Run `"npm start"` for the port to start listening.

-If on Heroku, all you have to do is login.

You can find ther deployed Heroku application here: https://tech-blog-chrissy.herokuapp.com/


## License:

https://opensource.org/licenses/MIT
This application is covered by the MIT license.

-----

## Badges:

![Badge](https://img.shields.io/badge/License-MIT-blue.svg)


## Contribution:

Feel free to contribute as desired!


## Testing:

There are currently no tests for this application.


## Questions:

- Github: [chrissy-martin](https://github.com/chrissy-martin)
- Email: cmart131@yahoo.com 