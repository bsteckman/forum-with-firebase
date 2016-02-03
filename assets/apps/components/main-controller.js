app.controller('MainController', function(){
    this.test = 'hello';
    
    this.disc = {
        question: "What is love",
        tags: "noFilter",
        date: Date.now(),
        ans: [{
            resp: false,
            com: "are you high?",
            up: 0,
            down: 0,
            date: Date.now(),
        }]
    }
    
})