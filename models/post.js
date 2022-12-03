const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const User = require("./user");

class Post extends Model {

}

Post.init(
    {
        id: {
            type: DataTypes.INTERGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        post_title: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        username: {
            type: DataTypes.STRING,
            allowNull: false

        },

        user_id: {
            type: DataTypes.INTEGER,
            references:{
                model: User, 
                key:'id'
            } 
            
        },

        post_content: {
            type: DataTypes.TEXT,
            allowNull: false

        },

        date: {
            type: DataTypes.DATE,
            allowNull: false

        }

    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
    
    }

)

module.exports=Post;