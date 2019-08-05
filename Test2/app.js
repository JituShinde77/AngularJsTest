
var app = angular
.module('myApp', [])
.controller('myCtrl', function($scope){
    $scope.fName = "jit";
    $scope.lName = "shinde111";
    
})
.controller('myCtrl2', function($scope){
    var employees =[
        {firstName: 'Jit', lastName: 'Shinde1dd2fdfdf',gender: 'M'},
        {firstName: 'Ketki', lastName: 'Sarode', gender: 'F'},
        {firstName: 'Siddhanath', lastName: 'Shinde',gender: 'M'},
        {firstName: 'Shubhadha', lastName: 'Shinde',gender: 'F'},
    ]
    $scope.employee = employees;
}).controller('myCtrl3', function($scope){
    var technologies = [
        {name:'C#', likes:0, dilikes:0},
        {name:'Java', likes:0, dilikes:0},
        {name:'Python', likes:0, dilikes:0},
        {name:'Angular', likes:0, dilikes:0}
    ];
    $scope.technologies = technologies;

    $scope.incrementLikes = function(technology)
    {
        technology.likes++;
    
    }
    $scope.incrementDiskes = function(technology)
    {
        technology.dilikes++;
    } 

}).controller("filter1", function($scope){
    var employee= [
        {name:"Ben", dateOfBirth: new Date("November 23, 1980"), gender:"Male", salary:5500.7812},
        {name:"Sara", dateOfBirth: new Date("May 05, 2018"), gender:"Female", salary:5500.7812},
        {name:"Mark", dateOfBirth: new Date("August 02, 1934"), gender:"Male", salary:5500.7812},
        {name:"Pam", dateOfBirth: new Date("Octomber 12, 1964"), gender:"Female", salary:5500.7812},
        {name:"Tom", dateOfBirth: new Date("March 22, 1948"), gender:"Male", salary:5500.7812}

    ];

    $scope.employees = employee;
    $scope.rowLimit = 5;
    //$scope.sortColumn ="name";
    $scope.sortColumn ="gender";

}).controller("customFilter", function($scope){
    var employee =[
            {name: "Ben", gender: 1, salary: 5500},
            {name: "Ben", gender: 2, salary: 5500},
            {name: "Ben", gender: 2, salary: 5500},
            {name: "Ben", gender: 1, salary: 5500},
            {name: "Ben", gender: 3, salary: 5500}

    ]  
    $scope.employees = employee;
}).filter('gender', function($scope){
    return function(gender){
        switch(gender){
            case 1:
                return "Male";
            case 2:
                return "Female";
            case 3:
                return "No defined";
        }
    }
});
;