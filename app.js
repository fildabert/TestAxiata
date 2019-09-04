const Robot = require("./models/Robot");


const args = process.argv.slice(2);
if(args[0] !== "PLACE") {
    console.error(`Expected PLACE, received ${args[0]}`);
    return;
}

const location = args[1].split(",");
if(location.length !== 3) {
    console.error("Invalid place location");
    return;
}
const position = [+location[0], +location[1]];
const direction = location[2];


const newRobot = new Robot(position, direction);

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
        console.error(`Command ${command} is not found, available commands: |MOVE|LEFT|RIGHT|REPORT|`);
    }
}




// newRobot.move()
// newRobot.move()
// newRobot.turn("LEFT")
// newRobot.move()
// newRobot.report()