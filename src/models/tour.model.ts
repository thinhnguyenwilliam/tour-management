import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';

class Tour extends Model {
    public id!: number;
    public title!: string;
    public code!: string;
    public images!: string;
    public price!: number;
    public discount!: number;
    public information!: string; // Matches DataTypes.TEXT('long')
    public schedule!: string;
    public timeStart!: Date;
    public stock!: number;
    public status!: string;
    public position!: number;
    public slug!: string;
    public deleted!: boolean;
    public deletedAt!: Date;
    public createdAt!: Date;
    public updatedAt!: Date;
}

Tour.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        code: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        images: {
            type: DataTypes.TEXT('long'),
            allowNull: true,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        discount: {
            type: DataTypes.DECIMAL(5, 2),
            allowNull: true,
            defaultValue: 0,
        },
        information: {
            type: DataTypes.TEXT('long'),
            allowNull: true,
        },
        schedule: {
            type: DataTypes.TEXT('long'),
            allowNull: true,
        },
        timeStart: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "active",
        },
        position: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: "Tour",
        tableName: "tours",
        timestamps: true, // Enables createdAt and updatedAt automatically
        paranoid: true, // Enables soft delete (deletedAt)
        indexes: [
            {
                fields: ['slug'], // Index for the 'slug' column
                unique: true, // Makes this index unique
            },
            {
                fields: ['status', 'timeStart'], // Compound index
            },
        ],
    }
);

export default Tour;
