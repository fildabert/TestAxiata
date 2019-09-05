class Robot {
    constructor(position, direction) {
        this.position = position;
        this.direction = direction;
        this.possibleDirections = ["NORTH", "EAST", "SOUTH", "WEST"];
    }

    place(coordinates) {
        if(!coordinates) {
            console.error("Invaid coordinates, PLACE X,Y,F (Accepted values of X and Y are within the range of 0-4) example of a valid coordinate: PLACE 0,0,NORTH");
            return;
        }
        const location = coordinates.split(",");
        if(location.length !== 3) {
            console.error("Invalid coordinates, PLACE X,Y,F (Accepted values of X and Y are within the range of 0-4) example of a valid coordinate: PLACE 0,0,NORTH");
            return;
        }
        const position = [+location[0], +location[1]];
        const validDirections = /NORTH|EAST|SOUTH|WEST/;
        const direction = location[2];
        if(!validDirections.test(direction)) {
            console.error(`${direction} is an invalid direction, valid directions: NORTH|EAST|SOUTH|WEST`)
            return;
        }

        if(position[0] > 4 || position[0] < 0) {
            console.error("Invalid coordinates, PLACE X,Y,F (Accepted values of X and Y are within the range of 0-4) example of a valid coordinate: PLACE 0,0,NORTH");
            return;
        }
        if(position[1] > 4 || position[1] < 0) {
            console.error("Invalid coordinates, PLACE X,Y,F (Accepted values of X and Y are within the range of 0-4) example of a valid coordinate: PLACE 0,0,NORTH");
            return;
        }


        this.position = position;
        this.direction = direction;
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
            if(this.position[0]-1 < 0) {
                return;
            }
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