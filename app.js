const Robot = require("./models/Robot")


// PLACE 1,2,EAST
// MOVE
// MOVE
// LEFT
// MOVE
// REPORT

const newRobot = new Robot([1,2], "EAST")
const args = process.argv.slice(2)
newRobot.move()
newRobot.move()
newRobot.turn("LEFT")
newRobot.move()
newRobot.report()