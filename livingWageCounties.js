const express = require('express');
const fs      = require('fs');
const request = require('request');
const cheerio = require('cheerio');
const app     = express();


exports.processStateHTML =  function (instate, incounty, url){
	var state, county, livingWageAmt;
	var countyInfo = { state : "", county : "", livingWageAmt : ""};
	
	 request(url, function(error, response, html){
		if(!error){
			  var $ = cheerio.load(html);
     			  			  
			  var row = $('.expenses_table').find("tr[class='odd results']").find("td:nth-child(8)").text().trim();
			  console.log("livng wage amount is " + row);
			  countyInfo.state = instate;
			  countyInfo.county = incounty;
			  countyInfo.livingWageAmt = row;
		};
  });
  
  return countyInfo;
	
	
	
	
};