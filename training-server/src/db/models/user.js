
export default (sequelize, DataTypes) => {
    const User = sequelize.define('user',
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            firstName: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            lastName: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            password: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            email: {
                type: DataTypes.STRING(100),
                allowNull: false
            }
        },
        {
            freezeTableName: true,
            tableName: 'user',
            indexes: [
                {
                    unique: false,
                    fields: ['email']
                }
            ]
        }
    );
    return User;
};