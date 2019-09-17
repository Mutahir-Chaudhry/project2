module.exports = function(sequelize, DataTypes) {
  var WorkOrder = sequelize.define("WorkOrder", {
    // Giving the Author model a name of type STRING
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    completed: {
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
