const service = require("./product.service");
const errors = require("../../utils/customError");

const tag = "PRODUCTS_CONTROLLER";
exports.create = async (req, res) => {
    try {
        const params = req.body;

        const result = await service.create(params);

        res.status(200).json({ status: "success", error: false, ...result })

    } catch (error) {
        errors.handleError(error, tag, req, res);
    }
}

exports.findAll = async (req, res) => {
    try {
        const body = req.query;

        const params = {
            offset: Number(body.page),
            limit: Number(body.limit)
        }

        if (body.hasOwnProperty("getCount")) {
            params['getCount'] = JSON.parse(body.getCount);
        }

        const result = await service.findAll(params);

        res.status(200).json({ status: "success", error: false, ...result })


    } catch (error) {
        errors.handleError(error, tag, req, res);
    }
}

exports.updateOne = async (req, res) => {
    try {

        const params = {
            id: req.params.id,
            data: req.body
        }

        const result = await service.updateOne(params);

        res.status(200).json({ status: "success", error: false, ...result })


    } catch (error) {
        errors.handleError(error, tag, req, res);
    }
}

exports.deleteOne = async (req, res) => {
    try {

        const params = {
            id: req.params.id
        }

        if (!params.id) {
            throw new errors.ValidationError("Id is required")
        }
        const result = await service.deleteOne(params)

        res.status(200).json({ status: "success", error: false, ...result })

    } catch (error) {
        errors.handleError(error, tag, req, res);
    }
}