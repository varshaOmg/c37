var db,form,game,player;
var gamestate = 0;
var playercount;

function setup(){

createCanvas(400,400);
db = firebase.database() 
game = new Game()
game.readState()
game.start()

}

function draw(){

    if (playercount == 4 ){

     game.updateState(1);   
    }

    if (gamestate == 1){

        game.play()
    }







}



























