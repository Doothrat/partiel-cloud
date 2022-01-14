const { Sequelize } = require('sequelize')
// database
const sequelize = new Sequelize(
User ID=yskhbdzkaofvnu;Password=80ab79aaf998ab96ab66776ac2fb8c6b552bfd7c0bf08c9d52df21444ed11a8a;Host=ec2-54-229-47-120.eu-west-1.compute.amazonaws.com;Port=5432;Database=d78o9bo0jh7o52;Pooling=true;Min Pool Size=0;Max Pool Size=100;Connection Lifetime=0;,
{
dialectOptions: {
ssl: {
require: true,
rejectUnauthorized: false,
},
},
},
);
// authentication and synchronization
sequelize.authenticate()
.then(() => {
sequelize.sync().catch(() => console.log("Cannot sync the database"));
})
.catch(() => console.log("Cannot connect to database, please check environment credentials"));
module.exports = sequelize;
