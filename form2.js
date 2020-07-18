class Hospital{
    constructor(){
        this.input=createInput("Enter your area");
        this.button=createButton("Submit");
    }

    hide(){
        this.button.hide();
        this.input.hide();
    }

    display(){
        this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
        this.button.position(displayWidth/2 + 30, displayHeight/2);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
          });
    }
    
    
}