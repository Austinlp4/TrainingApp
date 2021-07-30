export default (sequelize, DataTypes) => {
    const UserCourse = sequelize.define('usercourse',
        {
            userId: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4
            },
            courseId: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4
            },
            started: {
                type: DataTypes.STRING(100),
                defaultValue: new Date().getDate()
            },
            completed: {
                type: DataTypes.BOOLEAN(),
                defaultValue: false
            },
            message: {
                type: DataTypes.TEXT(),
                defaultValue: ''
            }
        },
        {
            freezeTableName: true,
            tableName: 'usercourse',
        }
    );
    return UserCourse;
};