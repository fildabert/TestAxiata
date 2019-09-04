const Robot = require("./models/Robot");


const args = process.argv.slice(2);
const position = args[0].split(",");
if(position.length !==3) {
    console.error(`Invalid position ${position}, examples of valid positions: 0,0 || 2,4 || 3,3`);
}

const position2 = position.map(Number);
if(position2.length !== 2) {
    console.error(`Invalid position ${position}, examples of valid positions: 0,0 || 2,4 || 3,3`);
    return;
}


const direction = args[1];
const availableDirections = /NORTH|EAST|SOUTH|WEST/;
if(!availableDirections.test(direction)) {
    console.error(`Invalid direction ${direction}, available directions: NORTH EAST SOUTH WEST`);
    return;
}

const newRobot = new Robot(position2, direction);

const commands = args.slice(2);
var regex = /LEFT|RIGHT|MOVE|REPORT/;

commands.forEach(command => {
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
            default:
                break;
        }
    } else {
        console.error(`Command ${command} is not found, available commands: |MOVE|LEFT|RIGHT|REPORT|`);
    }
})



// newRobot.move()
// newRobot.move()
// newRobot.turn("LEFT")
// newRobot.move()
// newRobot.report()