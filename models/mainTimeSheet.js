module.exports = function(sequelize, DataTypes) {
  var MainTS = sequelize.define("MainTS", {
    startTime: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    endTime: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
  MainTS.associate = function(models) {
    MainTS.belongsTo(models.WorkOrder, {
      foreignkey: {
        allowNull: false
      }
    });
  };
};
