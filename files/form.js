class Form{

    constructor(){

         this.title = createElement("H2")
         this.input = createInput("name")
         this.button = createButton("play")
         this.greating = createElement("H4")

    }

    display(){
        this.title.html("car race!")
        this.title.position(250,300)
        this.input.position(370,220)
        this.button.position(309,109)

        this.button.mousePressed(function(){
        this.input.hide()
        this.button.hide()

        player.name = this.input.value()
        playercount += 1
        player.index = playercount
        player.updating()
        player.updateCount(playercount)
        this.greating.html("hola"+player.name)
        this.greating.position(243,234)

        })
    }


}