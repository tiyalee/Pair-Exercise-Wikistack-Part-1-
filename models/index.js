const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {logging: false});


const ourSlug = (title) => {
  return title.replace(/\s+/g, '_').replace(/\W/g, '');
}


const Page = db.define('page',{
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    slug: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    status: {
      type: Sequelize.ENUM('open', 'closed'),
      // allowNull: true,
      // defaultValue: 'closed'
    }
})

Page.beforeValidate((pageInstance, optionsObject) => {
  pageInstance.slug = ourSlug(pageInstance.title)
})

const User = db.define('user',{
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    }
})


module.exports = {
  db,
  Page,
  User
};
