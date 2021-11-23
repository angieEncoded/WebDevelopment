const { Sequelize } = require('sequelize')

// This will automatically set up a connection pool
const sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASS, {
    host: process.env.DBHOST,
    dialect: 'mariadb',
    dialectOptions: { autoJsonMap: false },
    logging: false// eventually send this to winston msg => logger.debug(msg), can also put in console.log
})

module.exports = sequelize