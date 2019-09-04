const Robot = require("./models/Robot")

const newRobot = new Robot(0, "WEST")
const args = process.argv.slice(2)
newRobot.turn("RIGHT")
