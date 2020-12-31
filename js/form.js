class Form{
    constructor(){

    }
    display (){
        var title=createElement('h2')
        title.html('car racing game')
        title.position(350,100)


        var input=createInput('enter your name')
        input.position(350,200)

        var button=createButton('click to start the game')
        button.position(350,300)
        var greeting=createElement('h4')
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name=input.value()
            playerCount=playerCount+1
            player.update(name)
            player.updateCount(playerCount)
            greeting.html('welcome ' + name + ' to the car racing game')
            greeting.position(350,200)


        })
    }
    
}