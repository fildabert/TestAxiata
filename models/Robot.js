class Robot {
    constructor(position, direction) {
        this.position = position;
        this.direction = direction;
        this.possibleDirections = ["NORTH", "EAST", "SOUTH", "WEST"];
    }

    turn(direction) {
        console.log(this)
        var currentFacingDirection = this.possibleDirections.indexOf(this.direction);
        if(direction === "RIGHT") {
            currentFacingDirection ++;
        } else if (direction === "LEFT") {
            currentFacingDirection --;
        } else {
            return;
            // throw({
            //     code: 400,
            //     message: "Invalid direction, direction must be either LEFT or RIGHT"
            // })
        }
        if(currentFacingDirection < 0) {
            currentFacingDirection = 3;
        } else if (currentFacingDirection > 3) {
            currentFacingDirection = 0;
        }
        this.direction = this.possibleDirections[currentFacingDirection];
        console.log(this)
    }
}

module.exports = Robot;