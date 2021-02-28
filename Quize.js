class Quize{
    constructor(){}

    getState(){
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value",function(data){
     gameState = data.val();     
    })   
    
}

update(state){
    database.ref('/').update({
        gameState: state
    })
    }

    async start(){
        if(gameState === 0){
           Contestant = new Contestant();
           var ContestantCountRef = await database.ref('contestantCount').once("value");
           if(ContestantCountRef.exists()){
               ContestantCount = ContestantCountRef.val();
               Contestant.getCount();
           } 

           Play()
        Question.hide();
        background("Yellow");
        Fill(0);
        textSize(30);
        text("Resut of the Quize", 340,50);
        text("----------------------------",320,65);
        Contestant.getPlayerInfo();
        if(allContestants !== undefined ){
            debugger;
            var display_Answer = 230;
            fill("Blue");
            textSize(20);
            text("NOTE: Contestant who answered correct are highlighted in green color",130,230);

            for(var plr in allContestants){
            debugger;
            var correctAns = "2";
            if(correctAns === allContestants[plr].answer)
            fill("Green")
            else
            fill("red");

            display_Answer+=30;
            textSizwe(20);
            text(allContestants[plr].name + ":" + allContestants[plr].answer,250,display_Answers)
            }
        }
           }
        }
    }
