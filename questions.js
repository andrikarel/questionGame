// Create object-oriented structure of questions

class Question {
    constructor() {

        
    }
    displayQuestion(question,index) {
        $(".text-center").append("<h1>"+question[index].question+"</h1>");
        var options = "";
        for(var i = 0; i < question[index].options.length;i++){
            options += "<h2><li>" + question[index].options[i].key +") "+ question[index].options[i].value + " </li></h2>";
        }
        $(".game-board").append(options);
        //console.log(question[index].question);
    }
    answerQuestion() {
        
        return true;
    }
    
}


class questions extends Question {
    constructor(numQestions) {
        super();
        this.numQ = numQestions;   
        this.qList = window.giveMeAnAnswer.qna;
        this.multipleQ = this.qList.multiple;
        this.trueOrFalseQ = this.qList.trueorfalse;
        this.shortAnsQ = this.qList.shortAnswer;
        console.log(this.multipleQ,this.trueOrFalseQ,this.shortAnsQ);
    }
    startGame() {
        this.createQuestionList();
        super.displayQuestion(this.multipleQ,7);
       
    }
    createQuestionList() {

    }
    
}