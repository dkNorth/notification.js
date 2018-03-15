# notification.js
JS based notifications that can be assigned to html elements

# INSTALLATION

1. Add notification.css ( link href="notification.css" rel="stylesheet" )
2. Add notification.js  ("<script src="notification.js"></script>")
3. register a custom message to an element of your choice in your own script file 



# SYNTAX

notification(element, modal, message, corner, type)

element: <br>
Type: string<br>
Defines the custom element you want the notification assigned to<br><br>

modal:<br>
Type: boolean<br>
Defines if it's a permanent notification(true) or a timed one(false)<br><br>

message:<br>
Type: string<br>
Defines the string you want displayed<br><br>

corner:<br>
Type: string<br>
("topright", "topleft", "bottomright", "bottomleft")<br>
Assigns the notification to the specific corner<br><br>

type:<br>
Type: string<br>
("Info","Warning","Alert")<br>
Defines the background color of the notification<br><br>
