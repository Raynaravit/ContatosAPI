module.exports = (sequelize, DataTypes) => {
    const Contact = sequelize.define('Contact', {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING
    }, {});
    Contact.associate = function(models) {
    };
    return Contact;
  };
  