const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const User = require("./user");
const Post = require("./post");


class Comment extends Model {

}

Comment.init(
    {
        id: {
            type: DataTypes.INTERGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },


        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id'
            }

        },

        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Post,
                key: 'id'
            }
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false

        },

        date: {
            type: DataTypes.DATE,
            allowNull: false

        },

        comment_content: {
            type: DataTypes.TEXT,
            allowNull: false

        },




    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',

    }
)
module.exports = Comment;

