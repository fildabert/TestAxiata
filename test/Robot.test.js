const chai = require("chai");
const Robot = require("../models/Robot")

const expect = chai.expect;

const newRobot = new Robot()

describe("Robot Testing", function (){
    describe('Place Robot', function () {
        it("should not place a Robot on the table if the command is invalid", function() {
            const coordinates = "ASDASDADS"
            newRobot.place(coordinates);
            
            expect(newRobot.position).to.be.undefined;
            expect(newRobot.direction).to.be.undefined;
        })
        it("should not place a Robot on the table if the coordinates are off the chart", function() {
            const coordinates = "0,5,NORTH"
            newRobot.place(coordinates);
            
            expect(newRobot.position).to.be.undefined;
            expect(newRobot.direction).to.be.undefined;
        })
        it("should place a Robot on the table", function() {
             const coordinates = "0,0,NORTH"
             const location = coordinates.split(",");
             const position = [+location[0], +location[1]];
             const direction = location[2];

             newRobot.place(coordinates);
             expect(newRobot).to.be.an("object");
             expect(newRobot.position).to.deep.equal(position);
             expect(newRobot.direction).to.equal(direction);
        }) 
    })

    
    
    
})

