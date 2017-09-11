angular.module('demoApp')

.controller('MainController', function() {
    var self = this //permet d'avoir le même contenu de "this" dans tout le controleur
    self.message =["Bienvenue dans le chat", "Mathieu:  Wubalubadubdub !"]

    self.sendMessage = function() {
        if(!self.newMessage) return
            self.message.push(self.newMessage)

        self.newMessage =''
    }
})