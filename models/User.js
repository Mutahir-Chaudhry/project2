module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the Author model a name of type STRING
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  User.associate = models => {
    User.hasMany(models.TimeSheet, {
      onDelete: "cascade"
    });
  };

  return User;
};
