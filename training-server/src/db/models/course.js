
export default (sequelize, DataTypes) => {
    const Course = sequelize.define('course',
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            name: {
                type: DataTypes.STRING(100),
                unique: true,
                allowNull: false
            },
            url: {
                type: DataTypes.STRING(100),
                allowNull: true
            }
        },
        {
            freezeTableName: true,
            tableName: 'course',
            indexes: [
                {
                    unique: false,
                    fields: ['name']
                }
            ]
        }
    );
    return Course;
};