const { User } = require("./Model/User");
const errors = require("../../utils/customError");

exports.create = async (params) => {
    try {

        const isExists = await User.findOne({ where: { email: params.email } });

        if (isExists) {
            throw new errors.ValidationError("User already exists")
        }
        const result = await User.create(params);

        return result;

    } catch (error) {
        throw error;
    }
}

exports.findAll = async (params) => {
    try {

        if (params.offset <= 0 || params.limit <= 0) {
            throw new errors.ValidationError("Page & limit should be greater than zero")
        }

        const { getCount, ...payload } = params;

        const result = await User.findAll(payload);

        let count = undefined;

        if (getCount) {
            count = await User.count();
        }

        return { result, count };

    } catch (error) {
        throw error;
    }
}

exports.updateOne = async (params) => {
    try {

        const isExists = await User.findOne({ where: { id: params.id } });

        if (!isExists) {
            throw new errors.ValidationError("User not exists")
        }

        const result = await User.update(params.data, { where: { id: params.id } });

        return result;

    } catch (error) {
        throw error;
    }
}

exports.deleteOne = async (params) => {
    try {

        const isExists = await User.findOne({ where: { id: params.id } });

        if (!isExists) {
            throw new errors.ValidationError("User not exists")
        }

        const result = await User.destroy({ where: { id: params.id } });

        return result;

    } catch (error) {
        throw error;
    }
}
