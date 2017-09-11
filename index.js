var monModule = angular.module('ToDo', [])

monModule.controller('mainCtrl', function() {
    var self = this

    self.todoList = [
        {value: 'Reussir une liste', checked: true},
        {value: 'Comprendre Angular', checked: false},
        {value: 'Reussir Angular', checked: false}
    ]

    self.addElement = function(elt) {
        console.log('COUCOU')
        console.log(elt)
        
        self.todoList.push({value: elt, checked: false})
        self.newElement = ''
    }
})