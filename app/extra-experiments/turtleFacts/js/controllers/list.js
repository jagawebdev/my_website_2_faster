/*global angular*/

(function() {
    
    angular 
        .module("turtleFacts")
        .controller("listCtrl", ListController);
        
        ListController.$inject = ["quizMetrics", "DataServices"];
        
        function ListController(quizMetrics, DataServices) {
            var vm = this;
            
            vm.quizMetrics = quizMetrics;
            vm.data = DataServices.turtlesData;
            vm.changeActiveTurtle = changeActiveTurtle;
            vm.activateQuiz = activateQuiz;
            vm.activeTurtle = {};
            vm.search = "";
            
            function changeActiveTurtle(index) {
                vm.activeTurtle = index;
        }
        
        function activateQuiz() {
            quizMetrics.changeState("quiz", true);
        }
            
        }
})();