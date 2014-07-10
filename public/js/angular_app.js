
function goBack()
  {
  window.history.back()
  }

var akStoreApp = angular.module('akStoreApp', [
    'ui.router', 
    'ngAnimate',
    'ngSanitize',
    'ui.bootstrap',
    'ngGrid',
    'akAnimations',
    'akServices',  
    'akControllers',    
    'App.filters'           
]);

akStoreApp.run(['$rootScope', '$state', '$stateParams',
      function ($rootScope, $state, $stateParams) {
      // It's very handy to add references to $state and $stateParams to the $rootScope
      // so that you can access them from any scope within your applications.For example,
      // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
      // to active whenever 'contacts.list' or one of its decendents is active.
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
      }]);

akStoreApp.filter('showPriceDiscount', ['$log', function($log){
    return function(inputPrice, discount){
       
        var inputPrice = parseFloat(inputPrice.replace(",","."));
        var discount = parseFloat(discount.replace(",","."));

        if(discount != "0"){
            return '<span class="priceDeal">'+Number((inputPrice - ((inputPrice*discount)/100))).toFixed(2)+'&euro;</span> <span class="priceLineThrough">'+Number(inputPrice).toFixed(2)+'&euro;</span>';           
        }else{
            return "<span class='price'>"+Number(inputPrice).toFixed(2)+"&euro;</span>";
        }  
    };
}]);

akStoreApp.filter('showRemoveItem', ['$log', function($log){
    return function(itemCart){      
        if(itemCart === undefined){
            return;
        }else{
            return "-";
        }
    };
}]);

// akStoreApp.filter('showDiscountPrice', ['$log', function($log){
//     return function(inputPrice, discount){

//         var inputPrice = parseFloat(inputPrice.replace(",","."));
//         var discount = parseFloat(discount.replace(",","."));

//         return "<span class='price'>"+inputPrice+"&euro;</span>";       
//     };
// }]);

akStoreApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html',
            controller: 'HomeCtrl'
        })
        .state('search', {
            url: '/search',
            templateUrl: 'search_test.html',
            controller: 'SearchCtrl'
        })

        
        // nested list with custom controller
        .state('home.list', {
            url: '/list',
            templateUrl: 'partial-home-list.html',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })

        .state('phones', {
            url: '/catalogue',                  
            abstract: true,
            // templateUrl: 'partials/phone-list-header.html',            
            templateUrl: 'partials/service_list_header.html',            
            controller: 'ProductListHeaderController'

        })

        .state('phones.grid', {
            url: '-grid',
            templateUrl: 'partials/phone-list-grid.html',
            controller: 'ProductListGridController'
        })

        .state('phones.grid-lg', {
            url: '-grid-lg',
            templateUrl: 'partials/phone-list-grid-lg.html',
            controller: 'ProductListGridLgController'
        })

        .state('phones.list', {
            url: '',
            // templateUrl: 'partials/phone-list-list.html',
            templateUrl: 'partials/service_list.html',
           
            controller: 'ProductListController'
        })
       
        .state('phonedetail', {
            url: '/phones/:phoneId',            
            templateUrl: 'partials/phone-detail.html',
            controller: 'ProductDetailCtrl',           
        })
        
        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        })

        .state('products', {
            url: '/products/:productId',            
            templateUrl: 'partials/crud-product-list.html',
            controller: 'ProductCtrl'           
        })
        .state('product', {
            url: '/product',            
            templateUrl: 'partials/entity-detail.html',
            controller: 'ProductDetailCtrl'           
        })
        .state('product.forms', {
            url: '/productForms',            
            views: {
                'subView': {
                    templateUrl: 'partials/entity-detail.tab.html',
                    controller: 'ProductDetailFormsCtrl'  
                }
            }
        })
        .state('product.files', {
            url: '/productFiles',            
            views: {
                'subView': {
                    templateUrl: 'partials/entity-detail.tab.html',
                    controller: 'ProductDetailFilesCtrl'  
                }
            }
        })


        .state('forms', {
            url: '/forms/:formId',            
            templateUrl: 'partials/crud-form-list.html',
            controller: 'FormCtrl'           
        })
        .state('form', {
            url: '/form',            
            templateUrl: 'partials/entity-detail.html',
            controller: 'FormDetailCtrl'           
        })
        .state('form.fields', {
            url: '/productFields',            
            views: {
                'subView': {
                    templateUrl: 'partials/entity-detail.tab.html',
                    controller: 'FormDetailFieldsCtrl'  
                }
            }
        })

        .state('customers', {
            url: '/customers/:customerId',            
            templateUrl: 'partials/entity-list.html',
            controller: 'CustomerCtrl'           
        })
        .state('customer', {
            url: '/customer',            
            templateUrl: 'partials/entity-detail.html',
            controller: 'CustomerDetailCtrl'           
        })
        .state('customer.general', {
            url: '/customerGeneral',            
            views: {
                'subView': {
                    templateUrl: 'partials/entity-item.html',
                    controller: 'CustomerDetailGeneralCtrl'  
                }
            }
        })
        .state('customer.contacts', {
            url: '/customerContacts',            
            views: {
                'subView': {
                    templateUrl: 'partials/entity-detail.tab.html',
                    controller: 'CustomerDetailContactsCtrl'  
                }
            }
        })
        .state('customer.address', {
            url: '/customerAddress',            
            views: {
                'subView': {
                    templateUrl: 'partials/entity-detail.tab.html',
                    controller: 'CustomerDetailAddressCtrl'  
                }
            }
        })
        .state('customer.domiciles', {
            url: '/customerDomiciles',            
            views: {
                'subView': {
                    templateUrl: 'partials/entity-detail.tab.html',
                    controller: 'CustomerDetailDomicilesCtrl'  
                }
            }
        })
        .state('customer.files', {
            url: '/customerFiles',
            views: {
                'subView': {
                    templateUrl: 'partials/entity-detail.tab.html',
                    controller: 'CustomerDetailFilesCtrl'  
                }
            }
        })        
        .state('customer.notes', {
            url: '/customerNotes',
            views: {
                'subView': {
                    templateUrl: 'partials/entity-detail.tab.html',
                    controller: 'CustomerDetailNotesCtrl'  
                }
            }
        }) 
        .state('customer.specialprices', {
            url: '/customerSpecialPrices',
            views: {
                'subView': {
                    templateUrl: 'partials/entity-detail.tab.html',
                    controller: 'CustomerDetailSpecialPricesCtrl'  
                }
            }
        }) 

        .state('offers', {
            url: '/offersList/:type',            
            templateUrl: 'partials/entity-list.html',
            controller: 'OffersListCtrl'  
        })
        .state('offer', {
            url: '/offer',            
            templateUrl: 'partials/entity-detail.html',
            controller: 'OfferDetailCtrl'  
        })
        .state('offer.lines', {
            url: '/offerLines',            
            views: {
                'subView': {
                    templateUrl: 'partials/entity-detail.tab.html',
                    controller: 'OfferDetailLinesCtrl'  
                }
            }
        })
        .state('offer.files', {
            url: '/offerFiles',            
            views: {
                'subView': {
                    templateUrl: 'partials/entity-detail.tab.html',
                    controller: 'OfferDetailFilesCtrl'  
                }
            }
        })
        .state('offer.forms', {
            url: '/offerForms',            
            views: {
                'subView': {
                    templateUrl: 'partials/entity-detail.tab.html',
                    controller: 'OfferDetailCtrl'  
                }
            }
        })

        .state('calendars', {
            url: '/calendarsList',
            templateUrl:'partials/entity-list.html',
            controller: 'CalendarCtrl'
        })  
        .state('calendar', {
            url: '/calendar',            
            templateUrl: 'partials/entity-detail.html',
            controller: 'CalendarDetailCtrl'  
        })

        .state('notifications', {
            url: '/notificationsList',
            templateUrl:'partials/entity-list.html' ,
            controller: 'NotificationsCtrl'
        })        
        .state('notification', {
            url: '/notification',
            templateUrl:'partials/entity-detail.html',
            controller: 'NotificationDetailCtrl'  
        })        

        .state('projects', {
            url: '/projectsList',
            templateUrl:'partials/entity-list.html' ,
            controller: 'ProjectsCtrl'
        })        
        .state('project', {
            url: '/project',
            templateUrl:'partials/entity-detail.html',
            controller: 'ProjectDetailCtrl'  
        })        
        .state('project.general', {
            url: '/projectGeneral',            
            views: {
                'subView': {
                    templateUrl: 'partials/entity-item.html',
                    controller: 'ProjectDetailGeneralCtrl'  
                }
            }
        })        
        .state('project.actuaciones', {
            url: '/projectActuaciones',
            views: {
                'subView': {
                    templateUrl: 'partials/entity-detail.tab.html',
                    controller: 'ProjectDetailActuacionesCtrl'  
                }
            }
        })                
        .state('project.files', {
            url: '/projectFiles',
            views: {
                'subView': {
                    templateUrl: 'partials/entity-detail.tab.html',
                    controller: 'ProjectDetailFilesCtrl'  
                }
            }
        })        
        .state('project.notifications', {
            url: '/projectNotifications',
            views: {
                'subView': {
                    templateUrl: 'partials/entity-detail.tab.html',
                    controller: 'NotificationsCtrl'  
                }
            }
        })        

        .state('statistics', {
            url: '/statisticsDelegate',
            templateUrl:'partials/statistics.html',
            controller: 'StatisticsCtrl'
        })  



        .state('multipanel', {
            url: '/multipanel',
            templateUrl:'partials/multipanel.html'  
        })        
        .state('userSettings', {
            url: '/userSettings',
            templateUrl:'partials/userSettings.html'   
        })

        .state('formLegionella', {
            url: '/formLegionella',
            templateUrl:'partials/form-legionella.html'   
        })

        .state('formCondExtraccion', {
            url: '/formCondExtraccion',
            templateUrl:'partials/form-cond-extraccion.html'   
        })

        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            resolve: {
                'myVar': function(){
                    return "5";
                }
            },
            views: {
                '': { templateUrl: 'partial-about.html' },
                'columnOne@about': { template: 'Look I am a column!' },
                'columnTwo@about': { 
                    templateUrl: 'table-data.html',
                    controller: 'scotchController'
                }
            }
            
        });
        
});
