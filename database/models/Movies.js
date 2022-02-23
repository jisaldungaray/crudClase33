module.exports = function(sequelize, DataTypes){
    let alias = "Movies";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING
        },
        rating:{
            type: DataTypes.DOUBLE
        },
        awards:{
            type: DataTypes.INTEGER
        },
        release_date: { 
            type: DataTypes.DATE

        },
        length:{
            type: DataTypes.INTEGER
        },
        genre_id:{
            type: DataTypes.INTEGER
        }
    }
    let config = {
        tableName: "movies",
        timestamps: false
    }
    let Movies = sequelize.define(alias, cols, config);
    
    Movies.associate = function(models){
        Movies.belongsTo(models.Genres,{
            as: "genre",
            foreignKey: "genre_id"
        })

            Movies.belongsToMany(models.Actor,{
                as: "actor",
                through: "actor_movie",
                foreignKey: "movie_id",
                otherKey: "actor_id",
                timestamps: false
            });
        
    }
    
    return Movies; 
}