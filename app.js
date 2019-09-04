const Robot = require("./models/Robot");


const args = process.argv.slice(2);
if(args[0] !== "PLACE") {
    console.error(`Robot must be placed first, Expected PLACE, received ${args[0]}`);
    return;
}



const newRobot = new Robot();
newRobot.place(args[1]);

const commands = args.slice(2);
var regex = /LEFT|RIGHT|MOVE|REPORT|PLACE/;

for(var i = 0; i < commands.length; i++) {
    var command = commands[i];
    if (regex.test(command)) {
        switch (command) {
            case "MOVE":
                newRobot.move();
                break;
            case "LEFT":
                
                newRobot.turn("LEFT");
                break;
            case "RIGHT":
                newRobot.turn("RIGHT");
                break;
            case "REPORT":
                newRobot.report();
                break;
            case "PLACE":
                newRobot.place(commands[i+1])
                i++
                break;
            default:
                break;
        }
    } else {
        console.error(`Command ${command} is not found, available commands: |MOVE|LEFT|RIGHT|REPORT|PLACE {coordinates}`);
    }
}

