module.exports = function(sequelize, DataTypes) {
  var WorkOrder = sequelize.define("WorkOrder", {
    // Giving the Author model a name of type STRING
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });

  WorkOrder.associate = models => {
    WorkOrder.hasMany(models.TimeSheet, {
      onDelete: "cascade"
    });
  };

  return WorkOrder;
};
