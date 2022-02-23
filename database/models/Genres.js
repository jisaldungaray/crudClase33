module.exports = function(sequelize, DataTypes) {
    let alias = "Genres";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING
        }
    }
    let config = { 
        tableName: "genres",
        timestamps: false
    }
    
    let Genres = sequelize.define(alias, cols, config);
    
    Genres.associate = function(models){
        Genres.hasMany(models.Movies,{
            as: "movies",
            foreignKey: "genre_id"
        });
    }

    return Genres;
}