class Player{

    constructor(){

        this.name = null;
        this.index = 0;
        this.distance = 0;
    }
    
    readCount(){
    var playerCountRef = db.ref("playercount")  
    playerCountRef.on("value",function(data){
        playercount = data.val()
    }) 
        
    }
    
    updateCount(count){
        db.ref("/").update({
            playercount:count
        })
    }
   
    updating(){
        var playerIndex = "players/player"+this.index
        db.ref(playerIndex).set({name:this.name,distance:this.distance})     
    }

    static playerinfo(){
        var playerinforef = db.ref("players")
        playerinforef.on("value",function(data){
           allplayers = data.val()
        })
    }

}