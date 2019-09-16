module.exports = function(sequelize, DataTypes) {
  var TimeSheet = sequelize.define("TimeSheet", {
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

  TimeSheet.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    TimeSheet.belongsTo(models.WorkOrder, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return TimeSheet;
};
