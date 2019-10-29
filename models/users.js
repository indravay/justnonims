'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    email_verified_at: DataTypes.DATE,
    remember_token: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN
  }, {});
  users.associate = function(models) {
    // Users.hasOne(models.login, {
    //   foreignKey: 'user_id',
    //   as: 'loginDetails'
    // });

    // Users.hasMany(models.customer_query, {
    //   foreignKey: 'user_id',
    //   as: 'queryDetails'
    // });
  };
  return users;
};