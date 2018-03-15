var extraY = 0;
var extraX = 0;


function notification(element,modal="false",msg="Default",cor="topright",typ="info"){

document.querySelector(element).addEventListener("click", function(){sendNotification(modal,msg,cor,typ)}); //Add Event listener to your custom button,
                                                                                                            //so that you only need to register a notification 
                                                                                                            //to a button once

function sendNotification(modal,msg,cor,typ){
    if (modal == false){   //Timed Notifications
        if (!document.querySelector(".notification")){ //if there's no notification on screen, return the top and bottom value to default
            extraY = 0;
        }

        var notification = document.createElement('div'); //create notification element
        notification.classList.add("notification");  //add class to the newly created element

        var corner = cor;
        var type = typ;

        notification.innerHTML= msg; //set the message for the notification
        extraY += 100; //add the extra height, if there is more than one notification on screen

        notification.classList.add(corner);
        notification.classList.add(type); //add all required classes for styling

        if (corner == "topright" || corner == "topleft"){ //set the new top or bottom values
            notification.style.top = extraY;    
        }
        if (corner == "bottomright" || corner == "bottomleft"){
            notification.style.bottom = extraY;
        }

        document.body.appendChild(notification); //show the notification 

        setTimeout(function(){ 
            notification.remove(); //remove it after 3 seconds
        }, 3000);
    }

    else{ //non timed notifications 
        var notification = document.createElement('div');   //create all required elements
        var exitdiv = document.createElement('div');    
        var exit = document.createTextNode("X"); 

        exitdiv.classList.add("xbutton");   //add classes for styling
        notification.classList.add("notification");
                            
        var corner = "center"; //set parameters
        var type = typ;


        notification.innerHTML= msg; //set message

        notification.classList.add("show");
        notification.classList.add(corner);
        notification.classList.add(type); //add classes for styling
        


        document.body.appendChild(notification);  //append all created elements
        notification.appendChild(exitdiv);
        exitdiv.appendChild(exit);
        exitdiv.addEventListener("click",function(){notification.remove()});  //create an eventlistener for closing the notification

    }
}
}
