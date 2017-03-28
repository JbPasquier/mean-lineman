angular.module('app')
    .service('TodoService', function($http) {
        return {
            getAll: function() {
                return $http.get('/todos');
            },
            getOne: function(id) {
                return $http.get('/todos/' + id);
            },
            create: function(todo) {
              return $http.post('/todos', todo);
            },
            update: function(id, todo) {
              return $http.put('/todos/' + id, todo);
            },
            delete: function(id) {
                return $http.delete('/todos/' + id);
            }
        };
    });
