class Robot {
    constructor(position, direction) {
        this.position = position;
        this.direction = direction;
        this.possibleDirections = ["NORTH", "EAST", "SOUTH", "WEST"];
    }


    move() {
        if(this.direction === "NORTH") {
            if(this.position[1]+1 > 4) {
                return;
            }
            this.position[1] ++
        } else if(this.direction === "EAST") {
            if(this.position[0]+1 > 4) {
                return;
            }
            this.position[0] ++;
        } else if (this.direction === "SOUTH") {
            if(this.position[1]-1 < 0) {
                return;
            }
            this.position[1] --;
        } else if(this.direction === "WEST") {
            if(this.position[1]-1 < 0) {
                return;
            }
            this.position[1] --;
        }
    }

    turn(direction) {
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
    }

    report() {
        console.log(this);
    }
}

module.exports = Robot;