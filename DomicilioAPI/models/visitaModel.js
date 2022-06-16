module.exports = (sequelize, DataTypes) => {

    const Visita = sequelize.define("visita", {
        data: {
            type: DataTypes.DATE
        },
        notas: {
            type: DataTypes.STRING
           // allowNull: false
        },
          utente: {
             type: DataTypes.STRING,
          }
    })

    return Visita

}
