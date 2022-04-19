module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("user", {
        nome: {
            type: DataTypes.STRING
        },
        username: {
            type: DataTypes.STRING
           // allowNull: false
        },
        password: {
            type: DataTypes.STRING
        },
        tipoUtilizador: {
            type: DataTypes.INTEGER
        },
        dataNascimento: {
            type: DataTypes.DATE
        },
        image: {
            type: DataTypes.STRING
        },
        telemovel: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        }    
    })

    return User

}