class Robot {
    constructor(position, direction) {
        this.position = position;
        this.direction = direction;
        this.possibleDirections = ["NORTH", "EAST", "SOUTH", "WEST"];
    }


    move() {
        if(this.position[0] <= 0 || this.position[0] >= 4) {
            return;
        }
        if(this.position[1] <= 0 || this.position[1] >= 4) {
            return;
        }

        if(this.direction === "NORTH") {
            this.position[1] ++; 
        } else if(this.direction === "EAST") {
            this.position[0] ++;
        } else if (this.direction === "SOUTH") {
            this.position[1] --;
        } else if(this.direction === "WEST") {
            this.position[0] --;
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