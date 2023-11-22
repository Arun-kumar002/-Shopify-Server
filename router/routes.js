const router = require('express').Router()
const { Op } = require('sequelize');
const { User } = require("../api/user/Model/User");

router.post('/user', async (req, res) => {
    try {
        const user = await User.create({
            userName: 'dexter',
            passWord: 'dexter',
            email: 'dexter@gmail.com',
            isAuth: true,
            dob: 16 - 12 - 1999
        })
        res.status(200).json({ success: 'created successfully', user })
    } catch (error) {
        console.log(error);
    }
});


router.get('/user', async (req, res) => {
    try {
        const user = await User.findAll()
        res.status(200).json({ success: 'fetched successfully', user })

    } catch (error) {
        console.log(error);
    }
})

router.get('/user/:id', async (req, res) => {
    try {
        const user = await User.findOne({ where: { id: req.params.id } })
        res.status(200).json({ success: 'fetched successfully', user })

    } catch (error) {
        console.log(error);
    }
})

router.delete('/user/:id', async (req, res) => {
    try {
        const user = await User.destroy({ where: { id: req.params.id } })
        res.status(200).json({ success: 'delteded successfully', user })

    } catch (error) {
        console.log(error);
    }
})
module.exports = router