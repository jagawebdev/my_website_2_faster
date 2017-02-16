/*global angular*/
(function() {
    
    angular
        .module("turtleFacts")
        .controller("resultsCtrl", ResultsController);
        
        ResultsController.$inject = ["quizMetrics", "DataServices"];
        
        function ResultsController(quizMetrics, DataServices) {
            var vm = this;
            vm.quizMetrics = quizMetrics;
            vm.dataService = DataServices;
            vm.getAnswerClass = getAnswerClass;
            vm.setActiveQuestion = setActiveQuestion;
            vm.calculatePerc = calculatePerc;
            vm.reset = reset;
            vm.activeQuestion = 0;
            
            function getAnswerClass(index){
                if(index === quizMetrics.correctAnswers[vm.activeQuestion]){
                    return "bg-success";
                }else if(index === DataServices.quizQuestions[vm.activeQuestion].selected){
                    return "bg-danger";
                }
            }
            
            function setActiveQuestion(index){
                vm.activeQuestion = index;
            }
            
            function calculatePerc() {
                return quizMetrics.numCorrect / DataServices.quizQuestions.length *100;
            }
            
            function reset() {
                quizMetrics.changeState("results", false);
                quizMetrics.numCorrect = 0;
                
                for(var i=0; i< DataServices.quizQuestions.length; i++){
                    var data = DataServices.quizQuestions[i];
                    
                    data.selected = null;
                    data.correct = null;
                }
            }
        }
})();