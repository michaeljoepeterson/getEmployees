const express = require("express");
const router = express.Router();
const {API_URL} = require('../config');
const {getEmployees} = require('../employees/getEmployeeRequest');

router.get('/',(req,res)=>{
	const pageNumber = req.query.pageNumber;
	const pageSize = req.query.pageSize;

	return getEmployees(pageNumber,pageSize,API_URL)

	.then(data => {
		return res.send({
			status:200,
			message:data
		})
	})

	.catch(err => {
		console.log(err);
		return res.send({
			status:500,
			message:'Internal server error'
		})
	});

});

module.exports = {router};