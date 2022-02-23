module.exports = function(sequelize, DataTypes) {
    let alias = "Actor";
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING
        },
        last_name: {
            type: DataTypes.STRING
        }
    }
    let config= {
        tableName: "actors",
        timestamps: false
    }
    let Actor = sequelize.define(alias, cols, config);
    
    Actor.associate = function(models){
        Actor.belongsToMany(models.Movies,{
            as: "movies",
            through: "actor_movie",
            foreignKey: "actor_id",
            otherKey: "movie_id",
            timestamps: false
        });
    }
    return Actor;
}