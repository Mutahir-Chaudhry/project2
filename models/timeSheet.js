module.exports = function(sequelize, DataTypes) {
  var TimeSheet = sequelize.define("TimeSheet", {
    StartTime: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    EndTime: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  TimeSheet.associate = function(models) {
    TimeSheet.belongsTo(models.WorkOrder, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return TimeSheet;
};
