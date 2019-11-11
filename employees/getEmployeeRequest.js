const request = require('request');

function getEmployees(pageNumber,pageSize,url){
	let promise = new Promise((resolve,reject) => {
		url += '?pageSize=' + pageSize + '&pageNumber=' + pageNumber;
		const options = {
			method:'GET',
			url:url
		};
		request(options,function(error,response,body){
			//console.log(body);
			resolve(body);
		})
	});

	return promise;
}

module.exports = {getEmployees};