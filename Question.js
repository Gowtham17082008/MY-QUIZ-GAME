class Question{
    constructor(){
        this.title = createElement('h1')
        this.input1 = createInput("Enter your Name Here....");
        this.input2 = createInput("Enter correct Option No....");
        this.Buttion = createButtion('submit');
        this.question = createElement("h3");
        this.option1 = createElement("h4");
        this.option2 = createElement("h4");
        this.option3 = createElement("h4");
        this.option4 = createElement("h4");
    }

    hide(){
        this.title.hide();
        this.input1.hide();
        this.Buttion.hide();
        this.input2.hide();
    }

    display(){
        this.title.html("MyQuiz Game");
        this.title.position(350,0);

        this.question.html("Question:- What stars and ends with the 'E', but has only one letter? ")
        this.question.position(150,80);
        this.option1.html("1: Everyone " );
        this.option1.position(150,100);
        this.option2.html("2: Everyope");
        this.option2.position(150,120);
        this.option3.html("3: Estimate");
        this.option3.position(150,140);
        this.option4.html("4: EXample" );
        this.option4.position(150,160);

        this.input1.position(150,230);
        this.input2.position(350,230);
        this.buttion.position(290,300);
      
        this.Buttion.mousePressed(()=>{
        this.title.hide();
        this.input1.hide();
        this.input2.hide();
        this.Buttion.hide();
        Contestant.name = this.input1.value();
        Contestant.answer = this.input2.value();
        ContestantCount+=1;
        Contestant.index = ContestantCount;
        Contestant.update();
        Contestant.updateCount(ContestantCount);
         })
    } 
}