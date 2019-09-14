module.exports = function(sequelize, DataTypes) {
  var Examples = sequelize.define("Example", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Examples;
};
