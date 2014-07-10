// 'use strict';

/* Controllers */

var akControllers = angular.module('akControllers', []);


var familiaName = [];
familiaName[0] = "Todos";
familiaName[1] = "Generales";
familiaName[2] = "Servicios asistencia";
familiaName[3] = "Recogida de aceite";
familiaName[4] = "Filtros";
familiaName[5] = "Analíticas";
familiaName[6] = "Limpieza conductos extracción";
familiaName[7] = "Hostelería";
familiaName[8] = "DDD";
familiaName[9] = "Aguas";

var subfamiliaName = [];
subfamiliaName[0] = [];
subfamiliaName[0][0] = "Todos";
subfamiliaName[0][1] = "Documentación";

subfamiliaName[1] = [];
subfamiliaName[1][0] = "Todos";
subfamiliaName[1][1] = "Tratamiento";

subfamiliaName[2] = [];
subfamiliaName[2][0] = "Todos";
subfamiliaName[2][1] = "Documentación";
subfamiliaName[2][2] = "Tratamiento";

subfamiliaName[3] = [];
subfamiliaName[3][0] = "Todos";
subfamiliaName[3][1] = "Tratamiento";

subfamiliaName[4] = [];
subfamiliaName[4][0] = "Todos";
subfamiliaName[4][1] = "Analítica";

subfamiliaName[5] = [];
subfamiliaName[5][0] = "Todos";
subfamiliaName[5][1] = "Equipos";
subfamiliaName[5][2] = "Material";
subfamiliaName[5][3] = "Documentación";
subfamiliaName[5][4] = "Tratamiento";

subfamiliaName[6] = [];
subfamiliaName[6][0] = "Todos";
subfamiliaName[6][1] = "Material";
subfamiliaName[6][2] = "Documentación";
subfamiliaName[6][3] = "Tratamiento";
subfamiliaName[6][4] = "Equipos";
subfamiliaName[6][5] = "Analítica";

subfamiliaName[7] = [];
subfamiliaName[7][0] = "Todos";
subfamiliaName[7][1] = "Productos";
subfamiliaName[7][2] = "Tratamiento";
subfamiliaName[7][3] = "Documentación";

subfamiliaName[8] = [];
subfamiliaName[8][0] = "Todos";
subfamiliaName[8][1] = "Material";
subfamiliaName[8][2] = "Documentación";
subfamiliaName[8][3] = "Muestras";
subfamiliaName[8][4] = "Equipos";
subfamiliaName[8][5] = "Tratamiento";


articuloName = [];
articuloName[0] = [];
// articuloName[0] = "Desplazamiento";
articuloName[0][0] = "Certificados";

articuloName[1] = [];
articuloName[1][0] = "Mantenimiento detersanis";
articuloName[1][1] = "Bacteriostáticos urinario";
articuloName[1][2] = "Bacteriostáticos taza";
articuloName[1][3] = "Ambientador";
articuloName[1][4] = "Ambientador TCELL";
articuloName[1][5] = "Ambientador MICROBURST";


akControllers.controller('ProductDetailOldCtrl', ['$scope', '$window', '$stateParams', 'Phone', function($scope, $window, $stateParams, Phone){ 
        $scope.factoryTest = "adf";    
        $scope.phone = Phone.get({phoneId: $stateParams.phoneId}, function(phone){
            $scope.mainImageUrl = phone.images[0];
        });

        $scope.setImage = function(imageUrl) {
          $scope.mainImageUrl = imageUrl;
        };        
}]);

akControllers.controller('CustomerCtrl', 
                         ['$scope', '$window', 'EntityRest', 
                         function($scope, $window, EntityRest){

    angular.element("#headerHomeLink").removeClass("active");
    angular.element("#headerClientsLink").addClass("active");
    angular.element("#headerProductsLink").removeClass("active");
    angular.element("#headerOffersLink").removeClass("active");    
    $scope.title = 'Clientes';

    $scope.columns =  [
        { title:'#', name: 'id', type: 'text'},
        { title:'Nombre', name: 'nombre', type: 'link',entity:'customer'},
        { title:'Provincia', name: 'provincia', type: 'text'},
        { title:'Status', name: 'estado', type: 'text'},
        { title:'Actualizado', name: 'cambiado', type: 'text'}
    ];

    EntityRest.busca('customers',function(object) {
            $scope.tabLines = object;
    });

}]);

akControllers.controller('CalendarCtrl', 
                         ['$scope', '$window', 'EntityRest', 
                         function($scope, $window, EntityRest){

    $scope.title = 'Calendario';

    $scope.filters = [
        {title:'Inicio',name:'fechaInicio', type: 'date'}
    ];

    $scope.columns =  [
        { title:'Fecha', name: 'instante', type: 'date'},
        { title:'Hora', name: 'instante', type: 'time'},
        { title:'Descripción', name: 'descripcion', type: 'link', entity: 'calendar'},
        { title:'Anotación', name: 'anotacion', type: 'text'}
    ];

    EntityRest.busca('calendar',function(object) {
            $scope.tabLines = object;
    });

}]);
akControllers.controller('CalendarDetailCtrl', ['$scope', 'EntityRest',
  function($scope, EntityRest) {
    $scope.title = "Evento";

    $scope.fields =  [
        { title:'Fecha', name: 'instante', type: 'date'},
        { title:'Hora', name: 'instante', type: 'time'},
        { title:'Estado', name: 'estado', type: 'select', values: ['completado','']},
        { title:'Descripción', name: 'descripcion', type: 'text'},
        { title:'Cliente', name: 'cliente', type: 'link', entity:"customer"},
        { title:'Oferta', name: 'oferta', type: 'link', entity:"offer"},        
        { title:'Usuario', name: 'usuario', type: 'link'},
        { title:'Tipo', name: 'tipo', type: 'text'},
        { title:'Anotación', name: 'anotacion', type: 'text'},
        { title:'Actualizado', name: 'actualizado', type: 'text'}
    ];

    $scope.actions = [
        { title:'Completado', entity: "completado", type:"btn-success"},
        { title:'Cancelado', entity: "cancelado", type:"btn"},
        { title:'Notificar', entity: "notification", type:"btn-danger"},
    ];

    EntityRest.busca('calendar',function(object) {
            $scope.entityData = object["1"];
        });

}]);

akControllers.controller('StatisticsCtrl', 
                         ['$scope', '$window', 'EntityRest', 
                         function($scope, $window, EntityRest){
    $scope.title = 'Estadístics Delegado';


    $scope.columns =  [
        { title:'Fecha', name: 'instante', type: 'date'},
        { title:'Hora', name: 'instante', type: 'time'},
        { title:'Tipo', name: 'tipo', type: 'text'},
        { title:'Descripción', name: 'descripcion', type: 'link', entity:'notification'},
        { title:'Anotación', name: 'anotacion', type: 'text'}
    ];
    
    EntityRest.busca('statistics',function(object) {
        var data = object["1"];

        var mStats = data['ventas'];
        var mTitle = {'text': "Ventas Anuales 2014"};

        EntityRest.renderGraph('statsGeneral','column',mStats,'importe','id','mes',mTitle);
    });

    EntityRest.busca('statisticsProducts',function(object) {
        var data = object["1"];

        var mStats = data['ventas'];
        var mTitle = {'text': "Ventas Por Linea Producto 2014"};

        EntityRest.renderGraph('statsProducts','pie',mStats,'importe','','linea',mTitle);
    });

    EntityRest.busca('statisticsCustomers',function(object) {
        var data = object["1"];

        var mStats = data['ventas'];
        var mTitle = {'text': "Ventas Por Cliente 2014"};

        EntityRest.renderGraph('statsCustomers','pie', mStats,'importe','','cliente',mTitle);
    });

    $scope.$on('$viewContentLoaded', function() {});
}]);


akControllers.controller('NotificationsCtrl', 
                         ['$scope', '$window', 'EntityRest', 
                         function($scope, $window, EntityRest){
    $scope.title = 'Notificaciones';

    $scope.filters = [
        {title:'Inicio',name:'fechaInicio', type: 'date'}
    ];

    $scope.columns =  [
        { title:'Fecha', name: 'instante', type: 'date'},
        { title:'Hora', name: 'instante', type: 'time'},
        { title:'Tipo', name: 'tipo', type: 'text'},
        { title:'Descripción', name: 'descripcion', type: 'link', entity:'notification'},
        { title:'Anotación', name: 'anotacion', type: 'text'}
    ];

    EntityRest.busca('notifications',function(object) {
            $scope.tabLines = object;
    });

    // Nothing selected
    $scope.selectedLine = -1;

}]);
akControllers.controller('NotificationDetailCtrl', ['$scope', 'EntityRest',
  function($scope, EntityRest) {
    $scope.title = "Notificación";

    $scope.fields =  [
        { title:'Para', name: 'usuario', type: 'text'},
        { title:'Fecha', name: 'instante', type: 'date'},
        { title:'Hora', name: 'instante', type: 'time'},
        { title:'Estado', name: 'estado', type: 'select', values: ['completado','']},
        { title:'Tipo', name: 'tipo', type: 'text'},
        { title:'Descripción', name: 'descripcion', type: 'text'},
        { title:'Evento', name: 'cliente', type: 'link', entity:"calendar"},
        { title:'Cliente', name: 'cliente', type: 'link', entity:"customer"},
        { title:'Oferta', name: 'oferta', type: 'link', entity:"offer"},        
        { title:'Origen', name: 'notificacion', type: 'link', entity:"notification"},
        { title:'Anotación', name: 'anotacion', type: 'text'},
        { title:'Actualizado', name: 'actualizado', type: 'text'}
    ];

    $scope.actions = [
        { title:'Responder', entity: "notification", type:"btn"},
    ];

    EntityRest.busca('notifications',function(object) {
            $scope.entityData = object["1"];
        });

}]);

akControllers.controller('ProjectsCtrl', 
                         ['$scope', '$window', 'EntityRest', 
                         function($scope, $window, EntityRest){
    $scope.title = 'Expedientes';

    $scope.filters = [
        {title:'Inicio',name:'fechaInicio', type: 'date'}
    ];

    $scope.columns =  [
        { title:'Fecha', name: 'instante', type: 'date'},
        { title:'Tipo', name: 'tipo', type: 'text'},
        { title:'Descripción', name: 'descripcion', type: 'link', entity:'project'},
        { title:'Cliente', name: 'cliente', type: 'link', entity:'customer'},        
        { title:'Anotación', name: 'anotacion', type: 'text'}
    ];

    EntityRest.busca('projects',function(object) {
            $scope.tabLines = object;
    });

}]);
akControllers.controller('ProjectDetailCtrl', ['$scope', 'EntityRest',
  function($scope, EntityRest) {
    $scope.title = "Expediente";

    $scope.fields =  [ ];
    $scope.header = [
        { title:'Número', name: 'id', type: 'text'},
        { title:'Nombre', name: 'descripcion', type: 'text'}
    ];


    // Tabs functions
    $scope.tabs = [
        { title:'General'  , template: 'project.general' },
        { title:'Actuaciones'  , template: 'project.actuaciones' },
        { title:'Documentacion'  , template: 'project.files' },
        { title:'Personal'  , template: '' },
        { title:'Horario'  , template: '' },        
        { title:'Notificaciones'  , template: 'project.notifications' },
        { title:'Eventos'  , template: '' },
        { title:'Notas'  , template: '' }
    ];

    EntityRest.busca('projects',function(object) {
            $scope.entityData = object["1"];
        });
}]);
akControllers.controller('ProjectDetailGeneralCtrl', ['$scope', 'EntityRest', function($scope, EntityRest) {
    $scope.type = "form";
    $scope.fields =  [
        { title:'Fecha', name: 'instante', type: 'date'},
        { title:'Hora', name: 'instante', type: 'time'},
        { title:'Estado', name: 'estado', type: 'select', values: ['completado','']},
        { title:'Descripción', name: 'descripcion', type: 'text'},
        { title:'Cliente', name: 'cliente', type: 'link', entity:"customer"},
        { title:'Solicitud', name: 'oferta', type: 'link', entity:"offer"},        
        { title:'Oferta', name: 'oferta', type: 'link', entity:"offer"},        
        { title:'Anotación', name: 'anotacion', type: 'text'},
        { title:'Actualizado', name: 'actualizado', type: 'text'}
    ];

    EntityRest.busca('projects',function(object) {
            $scope.tabLines = object["1"].actuaciones;
        });
    //$scope.tabLines = $scope.entityData.actuaciones;

    // Nothing selected
    $scope.selectedLine = -1;
}]);
akControllers.controller('ProjectDetailActuacionesCtrl', ['$scope', 'EntityRest', function($scope, EntityRest) {
    $scope.columns =  [
        { title:'#', name: 'id', type: 'text'},
        { title:'Nombre', name: 'nombre', type: 'text'},        
        { title:'Descripción', name: 'descripcion', type: 'text'},
        { title:'Tipo', name: 'tipo', type: 'link'},
        { title:'Técnico', name: 'tecnico', type: 'link'},
        { title:'Estado', name: 'estado', type: 'text'}
    ];

    EntityRest.busca('projects',function(object) {
            $scope.tabLines = object["1"].actuaciones;
        });
    //$scope.tabLines = $scope.entityData.actuaciones;

    // Nothing selected
    $scope.selectedLine = -1;
}]);


akControllers.controller('ProductCtrl', ['$scope', '$window', 'EntityRest', function($scope, $window, EntityRest){

    angular.element("#headerHomeLink").removeClass("active");
    angular.element("#headerClientsLink").removeClass("active");
    angular.element("#headerProductsLink").addClass("active");
    angular.element("#headerOffersLink").removeClass("active");    

    EntityRest.busca('products',function(object) {
            $scope.products = object;
    });

}]);

akControllers.controller('ProductDetailCtrl', ['$scope', 'EntityRest',
  function($scope, EntityRest) {
    $scope.fields =  [
        { title:'Número', name: 'id', type: 'text'},
        { title:'Descripción', name: 'descripcion', type: 'text'},
        { title:'Tipo', name: 'tipo', type: 'text'},
        { title:'Familia', name: 'familia', type: 'text'},        
        { title:'Estado', name: 'estado', type: 'link'},
        { title:'Impuesto', name: 'descripcionImpuesto', type: 'text'},
        { title:'Periodicidad', name: 'periodicidad', type: 'text'},
        { title:'Actualizado', name: 'actualizado', type: 'text'}
    ];
    // Tabs functions
    $scope.tabs = [
        { title:'Adjuntos'  , template: 'product.files' },
        { title:'Formularios'  , template: 'product.forms' },
        { title:'Notificaciones'  , template: '' }
    ];

    $scope.title = "Producto";

    EntityRest.busca('products',function(object) {
            $scope.entityData = object["1"];
        });

        // Nothing selected
    $scope.selectedLine = -1;

    $scope.switchSelectLine = function(newSelectLine) {
        // Unselect
        console.log("selectedLine:" + $scope.selectedLine);
        if ($scope.selectedLine == newSelectLine) {
            $scope.selectedLine = -1;
        } else {
            $scope.selectedLine = newSelectLine;
        }
    }

}]);

akControllers.controller('ProductDetailFormsCtrl', ['$scope', 'EntityRest', function($scope, EntityRest) {
    $scope.columns =  [
        { title:'#', name: 'id', type: 'link'},
        { title:'Nombre', name: 'nombre', type: 'text', url: 'form'},
        { title:'Obligatorio', name: 'obligatorio', type: 'text'}
    ];
    $scope.tabLines = $scope.entityData.formularios;
}]);
akControllers.controller('ProductDetailFilesCtrl', ['$scope', 'Product', function($scope, Product) {
    $scope.columns =  [
        { title:'#', name: 'id', type: 'text'},
        { title:'Nombre', name: 'nombre', type: 'text'},        
        { title:'Descripción', name: 'descripcion', type: 'text'},
        { title:'Tipo', name: 'tipo', type: 'link'},
        { title:'Categoria', name: 'categoria', type: 'link'},
        { title:'Espacio', name: 'espacio', type: 'text'}
    ];

    Product.get({id: '1'}, function(Product){
        $scope.tabLines = Product["1"].ficheros;
    });
}]);

akControllers.controller('HomeCtrl', ['$scope', '$window', function($scope, $window){
    $scope.pageClass = 'page-home';    

    // $window.alert($window.innerHeight);

    angular.element("#headerHomeLink").addClass("active");
    angular.element("#headerClientsLink").removeClass("active");
    angular.element("#headerProductsLink").removeClass("active");

}]);

akControllers.controller('SearchCtrl', ['$scope', '$window','$stateParams', 'EntityRest', function($scope, $window, $stateParams, EntityRest){
    $scope.pageClass = 'page-home';    

    // $window.alert($window.innerHeight);

    angular.element("#headerHomeLink").addClass("active");
    angular.element("#headerClientsLink").removeClass("active");
    angular.element("#headerProductsLink").removeClass("active");

    $scope.selectedCentre = 'Taller';
    $scope.criteria = [];
    $scope.criteria.centre = {}; 
    $scope.criteria.poblacio = {}; 
    $scope.estudis = [];

    EntityRest.busca('estudis',function(object) {
            $scope.estudis = object;

            if ($stateParams.searchText) {
                console.log('text: %s',$stateParams.searchText);
            }

            //var filtered = $filter('filter')(object,'comu');

            var tagsCount = {};
            var count = object.length;
            var value;

            tagsCount.centre = {};
            for( var i =0 ; i < count;i++){
                value = object[i]['centre'];
                if (!tagsCount.centre[value]) tagsCount.centre[value] = 0;
                tagsCount.centre[value]++;
            }

            tagsCount.poblacio = {};
            for( var i =0 ; i < count;i++){
                value = object[i]['poblacio'];
                if (!tagsCount.poblacio[value]) tagsCount.poblacio[value] = 0;
                tagsCount.poblacio[value]++;
            }

            tagsCount.preu = {};            
            for( var i =0 ; i < count;i++){
                value = object[i]['preu'];
                /*
                if (value < 100) {
                    value = '< 100';
                } else if (value < 1500) {
                    value = '< 1500';
                } else if (value < 3500) {                    
                    value = '< 3500';
                } else if (value > 3500) {                    
                    value = '> 3500';                    
                }*/

                if (!tagsCount.preu[value]) tagsCount.preu[value] = 0;
                tagsCount.preu[value]++;
            }


            $scope.tagsCount = tagsCount;
            console.log('TagsCount'); console.log($scope.tagsCount);
        });

}]);

akControllers.controller('FooterCtrl', ['$rootScope', '$scope', '$log', function($rootScope, $scope, $log) {

    $scope.nextPage = function() {
        $rootScope.page++;       
    };

    $scope.previousPage = function(){
        $rootScope.page--;
    };
}]);

akControllers.controller('ProductListHeaderController', ['$rootScope', '$scope', '$log', '$cacheFactory', 'Phone', function($rootScope, $scope, $log, $cacheFactory, Phone) {

    angular.element("#headerHomeLink").removeClass("active");
    angular.element("#headerClientsLink").removeClass("active");
    angular.element("#headerProductsLink").addClass("active");


    $scope.pageClass = 'page-products';
    $scope.productListPageClass = 'page-products-partial';


    $scope.showSubfamilia = false;

    $scope.orderProp = 'age';  
    $scope.orderPropScreen = 'Todos'; 

    $rootScope.n_cart_items = 0;
    $rootScope.cart_price = 0;

    $scope.phones = Phone.query(); 

    if(angular.isUndefined($rootScope.cart)){
        $rootScope.cart = [];        
    }


    $scope.changeOrderProp = function(orderProp) {
        $scope.orderProp = orderProp;
        $scope.orderPropScreen = familiaName[orderProp];
        $scope.subfamilias = subfamiliaName[orderProp-1];
        $scope.subfamiliaScreen = "Todos";

        if(orderProp !== 0){
            $scope.showSubfamilia = 1;
        }else{
            $scope.showSubfamilia = 0;
        }
    };

    $scope.changeSubfamilia = function(subfamilia) {
        $log.log("Scope orderProp: "+$scope.orderProp);
        $log.log("Subfamilia: "+subfamilia);

        $scope.subfamilia = subfamilia;
        $scope.subfamiliaScreen = subfamiliaName[$scope.orderProp-1][subfamilia];
     
    };  

    $scope.addItem = function(phoneId, phoneName, phonePrice){         
        if(angular.isUndefined($rootScope.cart[phoneId])){
            $rootScope.cart[phoneId] = 1;            
        }else{
            $rootScope.cart[phoneId]++;                                    
        }        
        
        // $log.log("cart price: "+phoneId);

        $rootScope.n_cart_items++;
        $rootScope.cart_price = Number(($rootScope.cart_price + parseFloat(phonePrice.replace(",","."))).toFixed(2));


        
    };

    $scope.removeItem = function(phoneId, phoneName, phonePrice){
        if(angular.isUndefined($rootScope.cart[phoneId]) || $rootScope.cart[phoneId] == 1){
            $rootScope.cart[phoneId] = undefined;            
        }else{
            $rootScope.cart[phoneId]--;            
        }    

        $rootScope.n_cart_items--;
        $rootScope.cart_price = Number(($rootScope.cart_price - parseFloat(phonePrice.replace(",", "."))).toFixed(2));
    }; 
    
}]);


akControllers.controller('ProductListController', ['$scope', '$rootScope', 'Phone', '$window', '$log', function($scope, $rootScope, Phone, $window, $log) {
    
    $scope.productListPageClass = "page-products-grid";

    var phones = Phone.query();
    $rootScope.page = 1;
    $scope.phones = Phone.query();  


    
    // if(angular.isUndefined($scope.cart)){
    //     $rootScope.cart = [];
    // }

    
}]);

akControllers.controller('CustomerListController', ['$scope', 'Customer', '$window', '$log'
                                                    , function($scope, Customer, $window, $log) {    
                                                            $scope.customers = Customer.query();  
                                                    }]);

akControllers.controller('ProductListGridLgController', ['$scope', 'Phone', '$window', function($scope, Phone, $window) {
   
    $scope.productListPageClass = "page-products-grid";

    Phone.query().$promise.then(function(response){
        
        $scope.rows = [];
        var maxRows = 8;
        var maxCols = 5;
        var index = 0;

        for( var i =0 ; i < maxRows;i++){
            $scope.rows.push([]);
            for( var j =0 ; j < maxCols;j++){
                $scope.rows[i][j] = response[index];
                index++;
            }
        }
    });   
}]);

akControllers.controller('ProductListGridController', ['$scope', 'Phone', '$window', function($scope, Phone, $window) {
   
    $scope.productListPageClass = "page-products-grid";

    Phone.query().$promise.then(function(response){
        
        $scope.rows = [];
        var maxRows = response.length/4;
        var maxCols = 4;
        var index = 0;

        for( var i =0 ; i < maxRows;i++){
            $scope.rows.push([]);
            for( var j =0 ; j < maxCols;j++){
                $scope.rows[i][j] = response[index];
                index++;
            }
        }
    });   
}]);


akControllers.controller('scotchController', ['$scope', 'myVar', function($scope, myVar) {
    
    $scope.message = myVar;
   
    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];

}]);

akControllers.controller('FormDetailCtrl', ['$scope', 'Form', function($scope, Form) {
 
    $scope.fields =  [
        { title:'Número', name: 'id', type: 'text'},
        { title:'Descripción', name: 'descripcion', type: 'text'},
        { title:'Actualizado', name: 'actualizado', type: 'text'},
    ];
    // Tabs functions
    $scope.tabs = [
        { title:'Campos', template: 'form.fields' },
    ];

    $scope.title = "Cuestionario";
    Form.get({id: '1'}, function(form){
        $scope.entityData = form["1"];
    });

        // Nothing selected
    $scope.selectedLine = -1;

    $scope.switchSelectLine = function(newSelectLine) {
        // Unselect
        console.log("selectedLine:" + $scope.selectedLine);
        if ($scope.selectedLine == newSelectLine) {
            $scope.selectedLine = -1;
        } else {
            $scope.selectedLine = newSelectLine;
        }
    }

}]);
akControllers.controller('FormDetailFieldsCtrl', ['$scope', 'Form', function($scope, Form) {

    $scope.columns =  [
        { title:'#', name: 'id', type: 'link'},
        { title:'Descripción', name: 'descripcion', type: 'text'},
        { title:'Tipo', name: 'tipo', type: 'link'},
        { title:'Orden', name: 'orden', type: 'link'},
        { title:'Obligatorio', name: 'obligatorio', type: 'text'},        
    ];

    Form.get({id: '1'}, function(form){
        $scope.tabLines = form["1"].campos;
    });
}]);


akControllers.controller('CustomerDetailCtrl', ['$scope', 'EntityRest', function($scope, EntityRest) {

    $scope.header = [
        { title:'Número', name: 'id', type: 'text'},
        { title:'Nombre', name: 'nombre', type: 'text'}
    ];

    $scope.fields =  [  ];
    // Tabs functions
    $scope.tabs = [
        { title:'General', template: 'customer.general' },
        { title:'Contactos', template: 'customer.contacts' },
        { title:'Direcciones'  , template: 'customer.address' },
        { title:'Observaciones'  , template: 'customer.notes' },
        { title:'Domiliaciones'  , template: 'customer.domiciles' },
        { title:'Adjuntos'  , template: 'customer.files' },
        { title:'Condiciones Especiales'  , template: 'customer.specialprices' },
        { title:'Notificaciones'  , template: '' },
        { title:'Calendario'  , template: '' }       
    ];

    $scope.title = "Cliente";
    EntityRest.busca('customers',function(object) {
            $scope.entityData = object["1"];
            console.log(object["1"].contactos);
        });

        // Nothing selected
    $scope.selectedLine = -1;

    $scope.switchSelectLine = function(newSelectLine) {
        // Unselect
        console.log("selectedLine:" + $scope.selectedLine);
        if ($scope.selectedLine == newSelectLine) {
            $scope.selectedLine = -1;
        } else {
            $scope.selectedLine = newSelectLine;
        }
    }

}]);
akControllers.controller('CustomerDetailGeneralCtrl', ['$scope', 'EntityRest', function($scope, EntityRest) {

    $scope.type = "form";
    $scope.fields =  [
        { title:'Número', name: 'id', type: 'text'},
        { title:'Nombre', name: 'nombre', type: 'text'},
        { title:'Razón Social', name: 'razonSocial', type: 'text'},
        { title:'NIF', name: 'NIF', type: 'text'},        
        { title:'Delegado Principal', name: 'delegadoPrincipal', type: 'link'},
        { title:'Zona Comercial', name: 'zonaComercial', type: 'text'},
        { title:'Lista de Precios', name: 'listaPrecios', type: 'text'},
        { title:'Actualizado', name: 'actualizado', type: 'text'}
    ];
    //$scope.entityData = $scope.entityData.contactos;
   /*
    EntityRest.busca('customers',function(object) {
            $scope.tabLines = object["1"].contactos;
        });
    */
/*
      // OfferDetail data
    EntityRest.busca('customers',function(object) {
            $scope.entityData = object["1"].contactos;
        });
*/
}]);
akControllers.controller('CustomerDetailContactsCtrl', ['$scope', 'EntityRest', function($scope, EntityRest) {
    $scope.columns =  [
        { title:'#', name: 'id', type: 'link'},
        { title:'Nombre', name: 'nombre', type: 'text'},
        { title:'Descripción', name: 'descripcion', type: 'text'},
        { title:'Dirección', name: 'direccion', type: 'link'},
        { title:'Teléfono', name: 'telefono', type: 'text'},        
        { title:'eMail', name: 'eMail', type: 'text'}
    ];
    $scope.tabLines = $scope.entityData.contactos;
   /*
    EntityRest.busca('customers',function(object) {
            $scope.tabLines = object["1"].contactos;
        });
    */
/*
      // OfferDetail data
    EntityRest.busca('customers',function(object) {
            $scope.entityData = object["1"].contactos;
        });
*/
}]);
akControllers.controller('CustomerDetailAddressCtrl', ['$scope', 'EntityRest', function($scope, EntityRest) {
    $scope.columns =  [
        { title:'#', name: 'id', type: 'link'},
        { title:'Tipo', name: 'tipo', type: 'text'},
    { title:'Clase', name: 'clase', type: 'text'},        
        { title:'Nombre', name: 'nombre', type: 'text'},
        { title:'Dirección', name: 'direccion', type: 'text'},
        { title:'Población', name: 'poblacion', type: 'link'},
        { title:'Provincia', name: 'provincia', type: 'text'},        
        { title:'CP', name: 'codigoPostal', type: 'text'},
        { title:'País', name: 'pais', type: 'text'},
        { title:'Mapa', name: 'pais', type: 'text'},
    ];
    $scope.tabLines = $scope.entityData.direcciones;
}]);
akControllers.controller('CustomerDetailDomicilesCtrl', ['$scope', 'EntityRest', function($scope, EntityRest) {
    $scope.columns =  [
        { title:'#', name: 'id', type: 'link'},
        { title:'Entidad', name: 'entidad', type: 'text'},
        { title:'Oficina', name: 'oficina', type: 'text'},
        { title:'IBAN', name: 'IBAN', type: 'text'},
        { title:'SWIFT', name: 'SWIFT', type: 'text'}
    ];
   $scope.tabLines = $scope.entityData.domiciliaciones;
}]);
akControllers.controller('CustomerDetailFilesCtrl', ['$scope', 'EntityRest', function($scope, EntityRest) {
    $scope.columns =  [
        { title:'#', name: 'id', type: 'text'},
        { title:'Categoria', name: 'categoria', type: 'link'},
        { title:'Nombre', name: 'nombre', type: 'text'},        
        { title:'Descripción', name: 'descripcion', type: 'text'},
        { title:'Tipo', name: 'tipo', type: 'link'},
        { title:'Espacio', name: 'espacio', type: 'text'}
    ];
   $scope.tabLines = $scope.entityData.ficheros;
}]);
akControllers.controller('CustomerDetailNotesCtrl', ['$scope', 'EntityRest', function($scope, EntityRest) {
    $scope.columns =  [
        { title:'#', name: 'id', type: 'link'},
        { title:'Clase', name: 'clase', type: 'link'},
        { title:'Texto', name: 'texto', type: 'texto'},
        { title:'Tipo', name: 'tipo', type: 'link'},
    ];
   $scope.tabLines = $scope.entityData.observaciones;
}]);
akControllers.controller('CustomerDetailSpecialPricesCtrl', ['$scope', 'EntityRest', function($scope, EntityRest) {
    $scope.columns =  [
        { title:'Código', name: 'idArticulo', type: 'link'},
        { title:'Nombre', name: 'nombre', type: 'link'},
        { title:'precio', name: 'precio', type: 'text'},
        { title:'Dto 1', name: 'dto1', type: 'text'},
        { title:'Dto 2', name: 'dto2', type: 'text'},
        { title:'Fecha Inicio', name: 'fechaInicio', type: 'date'},
        { title:'Fecha Fin', name: 'fechaFin', type: 'date'},
    ];
   $scope.tabLines = $scope.entityData.preciosEspeciales;
}]);

akControllers.controller('OffersListCtrl', ['$scope', '$stateParams', 'EntityRest', function($scope, $stateParams, EntityRest){
    angular.element("#headerHomeLink").removeClass("active");
    angular.element("#headerClientsLink").removeClass("active");
    angular.element("#headerProductsLink").removeClass("active");
    angular.element("#headerOffersLink").addClass("active");    

    $scope.columns =  [
        { title:'#', name: 'id', type: 'text'},
        { title:'Descripcion', name: 'descripcion', type: 'link',entity:'offer'},
    ];

    $scope.title = "Oferta";

    var file = 'offers';
    if ($stateParams.type == 'solicitud') {
        file = 'solicitudes';
        $scope.title = "Solicitud";
    }
    EntityRest.busca(file,function(objects) {
            $scope.tabLines = objects;
        });

}]);

akControllers.controller('OfferDetailCtrl', ['$scope', 'EntityRest', function($scope, EntityRest) {
    //Offer.query().$promise.then(function(response){
    //    $scope.responseOffer = 'Uno';
    //});

    // Tabs functions
    $scope.tabs = [
        { title:'Lineas', template: 'offer.lines' },
        { title:'Adjuntos'  , template: 'offer.files' },
        { title:'Cuestionarios'  , template: 'offer.forms' },
        { title:'Notificaciones'  , template: '' }
    ];

    $scope.fields =  [
        { title:'Número', name: 'id', type: 'link'},
        { title:'Cliente', name: 'cliente', type: 'link'},
        { title:'Descripción', name: 'descripcion', type: 'text'},
        { title:'Fecha Inicio', name: 'fechaInicio', type: 'date'},
        { title:'Fecha Fin', name: 'fechaFin', type: 'date'},        
        { title:'Solicitud', name: 'solicitud', type: 'link'},
        { title:'Dirección Entrega', name: 'direccionEntrega', type: 'link'},
        { title:'Dirección Facturación', name: 'direccionFacturacion', type: 'link'}
    ];

    $scope.title = "Oferta Comercial";

    // OfferDetail data
    EntityRest.busca('offers',function(object) {
            $scope.entityData = object["1"];
        });

    $scope.alertMe = function() {
        setTimeout(function() {
            alert('You\'ve selected the alert tab!');
        });
    };

  // Date Functions
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();

  $scope.datePickers = {};

  $scope.toggleOpenDatePicker = function($event,datePicker) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope[datePicker] = !$scope[datePicker];
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.initDate = new Date('2016-15-20');
  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];    

  //  $scope.gridOptions = { data: 'lineas' };    
    // Nothing selected
    $scope.selectedLine = -1;

    $scope.switchSelectLine = function(newSelectLine) {
        // Unselect
        console.log("selectedLine:" + $scope.selectedLine);
        if ($scope.selectedLine == newSelectLine) {
            $scope.selectedLine = -1;
        } else {
            $scope.selectedLine = newSelectLine;
        }
    }
}]);

akControllers.controller('OfferDetailLinesCtrl', ['$scope', function($scope) {
    $scope.columns =  [
        { title:'#', name: 'id', type: 'link'},
        { title:'Servicio', name: 'codigo', type: 'link'},
        { title:'Descripción', name: 'descripcion', type: 'text'},
        { title:'Precio', name: 'precio', type: 'date'},
        { title:'Dto', name: 'descuento', type: 'date'},        
        { title:'Estado', name: 'estado', type: 'link'}
    ];
    $scope.tabLines = $scope.entityData.lineas;
}]);

akControllers.controller('OfferDetailFilesCtrl', ['$scope', function($scope) {
    $scope.columns =  [
        { title:'#', name: 'id', type: 'text'},
        { title:'Nombre', name: 'nombre', type: 'text'},        
        { title:'Descripción', name: 'descripcion', type: 'text'},
        { title:'Tipo', name: 'tipo', type: 'link'},
        { title:'Categoria', name: 'categoria', type: 'link'},
        { title:'Espacio', name: 'espacio', type: 'text'}
    ];
    $scope.tabLines = $scope.entityData.ficheros;
}]);

akControllers.controller('OfferDetailFormsCtrl', ['$scope', function($scope) {
    $scope.columns =  [
        { title:'#', name: 'id', type: 'link'},
        { title:'Descripción', name: 'descripcion', type: 'text'},
        { title:'Tipo', name: 'precio', type: 'date'},
        { title:'Nombre', name: 'descuento', type: 'date'},        
        { title:'Estado', name: 'estado', type: 'link'}
    ];
    $scope.tabLines = $scope.entityData.formularios;
}]);