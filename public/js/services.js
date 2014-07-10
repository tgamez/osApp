'use strict';

var akServices = angular.module('akServices', ['ngResource','restangular']);
akServices.factory("EntityRest", function(Restangular) {
  return {
    busca: function(entity, response) {
           return Restangular.one('mock_data/'+entity+'.json').get()
          //return Restangular.oneUrl('cliente','http://10.10.10.49:8080/eRuderRest/cliente?delegado=01').get()
                .then(response);
    },
    renderGraph: function(mChartName, mType, mStats, mValueFieldY, mValueFieldX, mValueText, mTitle) {

        var mDataPoint;
        var mData = [];        
        for (var i=0; i<mStats.length;i++){
            mDataPoint = { y: mStats[i][mValueFieldY], legendText: mStats[i][mValueText], indexLabel:  mStats[i][mValueText], label: i };
            mData.push(mDataPoint);
        }

        var chart = new CanvasJS.Chart(mChartName,
        {   
          title: mTitle,
          data: [
            {
                type: mType,
                showInLegend: true,
                dataPoints: mData
            }
         ]
       });
       chart.render();
     }
  }
} );


akServices.factory('Phone', ['$resource', function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);

akServices.factory('Offer', ['$resource', function($resource){
    return $resource('mock_data/offers/1.json', {}, {
      query: {method:'GET', params:{id:'id'}, isArray:false}
    });
  }]);

akServices.factory('OffersList', ['$resource', function($resource){
    return $resource('mock_data/offers.json', {}, {
      query: {method:'GET', params:{id:'id'}, isArray:true}
    });
  }]);

akServices.factory('Products', ['$resource', function($resource){
    return $resource('mock_data/products.json', {}, {
      query: {method:'GET', params:{id:'id'}, isArray:true}
    });
  }]);

akServices.factory('factoryTest', function(){
	
    return "factoryTest";
  });

// routerApp.factory('phone', ['$resource', function($resource){
 
//         // return "asdf";
//         return $resource('phones/:phoneId.json', {}, {
//             query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
//     });
// }]);  

