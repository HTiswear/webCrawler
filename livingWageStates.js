const express = require('express');
const fs      = require('fs');
const request = require('request');
const cheerio = require('cheerio');
const app     = express();
var counties = require('./livingWageCounties');


exports.processStateHTML = function (inState, url){
	var resultsToDisplay = [];
	var newUrl;
	var results = {};
	
		 request(url, function(error, response, html){
			if(!error){
				  var $ = cheerio.load(html);
				  //var results ={};
								  
				  $('.counties').children('div').children('li').children('a').each(function(i, elm) {			

							var data = $(this);
							var county = data.text().trim();
							var newUrl = 'http://livingwage.mit.edu' + data.attr("href");
							results = JSON.parse(counties.processCountyHTML(inState, county, newUrl));
							console.log("results are: " + results);
							//resultsToDisplay.push(results);																					
					
						
					});	   
			}
	  })

 // return resultsToDisplay;
	
	
	
	
};