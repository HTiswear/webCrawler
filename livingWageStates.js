const express = require('express');
const fs      = require('fs');
const request = require('request');
const cheerio = require('cheerio');
const app     = express();
var states = require('./livingWageCounties');


exports.processStateHTML =  function (state, url){
	var resultsToDisplay = [];
	
	 request(url, function(error, response, html){
		if(!error){
			  var $ = cheerio.load(html);
			  var results =[];
     			  			  
			  $('.counties > div').each(function(i, elm) {			
					$('.col-sm-3 > li').each(function(i, elm) {
						var data = $(this);
						var county = data.text().trim();
						var url = html + data.attr("href");
						console.log(county + " about to go to " + url);
						results = counties.processCountyHTML(state, county, url);
						console.log("results are: " + results);
						resultsToDisplay.push(results);																					
					});
					
				});	   
		}
  })
  
  return resultsToDisplay;
	
	
	
	
};