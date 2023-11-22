
const router = require('express').Router();
const controller = require('./user.controller');

//@access private --method-POST
//url=http://localhost:5500/{{API_PREFIX}}/{{VERSION}}/user
router.post(`/`, [controller.create]);

//@access private --method-GET
//url=http://localhost:5500/{{API_PREFIX}}/{{VERSION}}/user/:id
router.get(`/`, [controller.findAll]);

//@access private --method-PUT
//url=http://localhost:5500/{{API_PREFIX}}/{{VERSION}}/user
router.put(`/:id`, [controller.updateOne]);

//@access private --method-DELETE
//url=http://localhost:5500/{{API_PREFIX}}/{{VERSION}}/user
router.delete(`/:id`, [controller.deleteOne]);

module.exports = router;