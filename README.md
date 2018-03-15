# notification.js
JS based notifications that can be assigned to html elements

# INSTALLATION

1. Add notification.css (<link href="notification.css" rel="stylesheet"/>)
2. Add notification.js  (<script src="notification.js"></script>)
3. register a custom message to an element of your choice in your own script file 



# SYNTAX

notification(element, modal, message, corner, type)

element: 
Type: string
Defines the custom element you want the notification assigned to

modal:
Type: boolean
Defines if it's a permanent notification(true) or a timed one(false)

message:
Type: string
Defines the string you want displayed

corner:
Type: string
("topright", "topleft", "bottomright", "bottomleft")
Assigns the notification to the specific corner

type:
Type: string
("Info","Warning","Alert")
Defines the background color of the notification
