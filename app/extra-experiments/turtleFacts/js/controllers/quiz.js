/*global angular*/

(function() {
    
    angular
        .module("turtleFacts")
        .controller("quizCtrl", QuizController);
        
        QuizController.$inject = ["quizMetrics", "DataServices"];
        
        function QuizController(quizMetrics, DataServices) {
            var vm = this;
            
            vm.quizMetrics = quizMetrics;
            vm.dataService = DataServices;
            vm.questionAnswered = questionAnswered;
            vm.setActiveQuestion = setActiveQuestion;
            vm.selectedAnswer = selectedAnswer;
            vm.finaliseAnswers = finaliseAnswers;
            vm.activeQuestion = 0;
            vm.error = false;
            vm.finalise = false;
            
            var numQuestionsAnswered = 0; 
            
            function finaliseAnswers(){
                vm.finalise = false;
                numQuestionsAnswered = 0;
                vm.activeQuestion = 0;
                quizMetrics.markQuiz();
                quizMetrics.changeState("quiz", false);
                quizMetrics.changeState("results", true);
            }
            
            function selectedAnswer(index) {
                DataServices.quizQuestions[vm.activeQuestion].selected = index;
            }
            
            function setActiveQuestion(index) {
                if(index === undefined){
                    var breakOut = false;
                    var quizLength = DataServices.quizQuestions.length - 1;
                    
                    
                    while(!breakOut){
                        vm.activeQuestion = vm.activeQuestion < quizLength?++vm.activeQuestion:0;
                        
                        if(vm.activeQuestion === 0){
                            vm.error = true;
                        }
                        
                        if(DataServices.quizQuestions[vm.activeQuestion].selected === null){
                            breakOut = true;
                        }
                    }
                }else{
                    vm.activeQuestion = index;
                }
            }
            
            function questionAnswered() {
                
                var quizLength = DataServices.quizQuestions.length;
                
                if(DataServices.quizQuestions[vm.activeQuestion].selected !== null){
                    numQuestionsAnswered++;
                    if(numQuestionsAnswered >= quizLength){
                        //finalise quiz
                        for(var i=0; i < quizLength; i++){
                            if(DataServices.quizQuestions[i].selected === null){
                                setActiveQuestion(i);
                                return;
                            }
                        }
                        vm.error = false;
                        vm.finalise = true;
                        return;
                    }
                }
                
                vm.setActiveQuestion();
            }
        }
})();