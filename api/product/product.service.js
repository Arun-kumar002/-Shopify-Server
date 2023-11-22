const { Product } = require("./Model/Product");
const errors = require("../../utils/customError");

exports.create = async (params) => {
    try {

        const isExists = await Product.findOne({ where: { email: params.email } });

        if (isExists) {
            throw new errors.ValidationError("Product already exists")
        }
        const result = await Product.create(params);

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

        const result = await Product.findAll(payload);

        let count = undefined;

        if (getCount) {
            count = await Product.count();
        }

        return { result, count };

    } catch (error) {
        throw error;
    }
}

exports.updateOne = async (params) => {
    try {

        const isExists = await Product.findOne({ where: { id: params.id } });

        if (!isExists) {
            throw new errors.ValidationError("Product not exists")
        }

        const result = await Product.update(params.data, { where: { id: params.id } });

        return result;

    } catch (error) {
        throw error;
    }
}

exports.deleteOne = async (params) => {
    try {

        const isExists = await Product.findOne({ where: { id: params.id } });

        if (!isExists) {
            throw new errors.ValidationError("Product not exists")
        }

        const result = await Product.destroy({ where: { id: params.id } });

        return result;

    } catch (error) {
        throw error;
    }
}
