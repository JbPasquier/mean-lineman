angular.module('app')
    .controller('MainController', function($scope, TodoService) {
        /* Here is your main controller */
        $scope.todos = [];
        $scope.newTodo = {value: ''};

        function load() {
            TodoService.getAll().then(function(res) {
                $scope.todos = res.data;
            });
        }
        $scope.create = function() {
            TodoService.create($scope.newTodo).then(function() {
                $scope.newTodo = {value: ''};
                load();
            });
        };
        $scope.delete = function(id) {
            TodoService.delete(id).then(function() {
                load();
            });
        };
        $scope.update = function(id, todo) {
            TodoService.update(id, todo).then(function() {
                load();
            });
        };

    });
