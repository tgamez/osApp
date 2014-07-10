'use strict';

/* Filters */

angular.module('App.filters', [])
	.filter('searchFilter', [function () {
	    return function (data, criteria, fieldname) {
	    	console.log('App.filter'); console.log(criteria);console.log(fieldname); 
	        // Regenerate Stats
	        if (!angular.isUndefined(data) && !angular.isUndefined(criteria)) {
	            var tempData = [];
	            var anyTrue = false;
	            angular.forEach(data, function (item) {
	            	var noFilter = angular.equals(criteria[fieldname],{})
	                if (noFilter || criteria[fieldname][item[fieldname]]) {
	                    tempData.push(item);
	                    anyTrue = true;
	                }
	            });
                if (!anyTrue) {
                	tempData = data;
                }
	        } else {
	            tempData = data;
	        }

	        return tempData;
	    };
	}])
	.filter('countGroups', function() {
        return function(data, aTagsCount,fieldname,categoryFunc) {
				var count = data.length;

	            console.log('countGroups');console.log(aTagsCount);console.log(fieldname);
	        	var tagsCount = {};            
	        	var groups = {};      
				
				if (aTagsCount) {
					var source = aTagsCount[fieldname];
					var copy   = {};
					
					//console.log('source');console.log(source);
					if (source) {
						for (var attr in source) {
		         		   if (source.hasOwnProperty(attr)) copy[attr] = 0;		         		   
		        		}
		        	}
		        	groups = copy;
		        }
		        console.log('source');console.log(source);
		        console.log('copy');console.log(copy);

	            var itemValue;
	            for( var i =0 ; i < count;i++){
	                itemValue = data[i][fieldname];

	                if (categoryFunc) {
	                	itemValue = categoryFunc(itemValue);
	                }

	                if (!groups[itemValue]) groups[itemValue] = 0;
	                groups[itemValue]++;
	            }
	            console.log("result");console.log(groups);

	            return groups;

        	/*
            if (typeof(data) === 'undefined' || typeof(key) === 'undefined') {
                return 0;
            }
 
            var sum = 0;
            for (var i = data.length - 1; i >= 0; i--) {
                sum += parseInt(data[i][key]);
            }
 
            return sum;
            */
        };
	});
