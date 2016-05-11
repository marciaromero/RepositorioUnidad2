/**
 * Created by Marcia on 02-05-2016.
 */
//Generar nuestro módulo

var app=angular.module('LoginFormModule',
[]);

//Controller
app.controller('LoginFormController', function($scope, $http) {
    //Modelo, entidad generada para sustentar la vista.
    $scope.formModel = {};

    //Funcion que llama a Submit.
    $scope.onSubmit = function(){
     console.log("llegue, primer submit con AngularJs");
        console.log($scope.formModel);


    };

});
