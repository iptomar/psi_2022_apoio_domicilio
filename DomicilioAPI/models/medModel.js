module.exports = (sequelize, DataTypes) => {

    const Medicamento = sequelize.define("medicamento", {
        nome: {
            type: DataTypes.STRING
        },
        farmaceutica: {
            type: DataTypes.STRING
        },
        principio: {
            type: DataTypes.STRING
        },
        dosagem: {
            type: DataTypes.STRING
        },
        formato: {
            type: DataTypes.STRING
        },
        // stock: {
        //     type: DataTypes.INTEGER
        // }


    })

    return Medicamento

}