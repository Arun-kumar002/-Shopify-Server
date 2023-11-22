exports.makeModelOptions = (sequelize, tableName) => {
    try {
        sequelize.sync();
        return {
            charset: "utf8",
            collate: "utf8_unicode_ci",
            paranoid: false,
            sequelize,
            tableName,
            timestamps: true
        }
    } catch (error) {
        console.log("Error:[makeModelOptions]", error);
    }
};

