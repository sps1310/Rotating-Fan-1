var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    var imgObj = new Image(); //declare the image object
    imgObj.src = "./images/rotor17.png";
    
    //draws the image on canvas
    function loadImage(){
        context.save();
        context.drawImage(imgObj, -((imgObj.width)/2), -((imgObj.height)/2));
        context.restore();
    }

    //rotates the image at a particular angle
    function frame(angle){
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        
        context.save();
        context.translate(context.canvas.width/2, (context.canvas.height/2)-120);
        context.rotate(angle/180 * Math.PI); 
        loadImage();
        context.restore();
    }    

    frame(0);
    var running = false;
    var hangle = 0;
    
    function fan(){
        document.getElementById('start').disabled=true;
        var rev =  parseInt(document.getElementById('rang').value);// get the speed
        running = true;

        //checks whether to rotate clockwise or anticlockwise
        if (document.getElementById('chkdir').checked) {
            rev = - rev;
        }
        hangle += rev;
        
        if (hangle >=360){
            hangle = hangle % 360;
        }
        
        frame(hangle);
    }