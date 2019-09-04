const chai = require("chai");
const Robot = require("../models/Robot")

const expect = chai.expect;

const newRobot = new Robot();

describe("Robot Testing", function (){
    describe('Place Robot', function () {
        it("should not place a Robot on the table if the command is invalid", function() {
            const coordinates = "ASDASDADS"
            newRobot.place(coordinates);
            
            expect(newRobot).to.be.an("object");
            expect(newRobot.position).to.be.undefined;
            expect(newRobot.direction).to.be.undefined;
        })
        it("should not place a Robot on the table if the coordinates are off the chart", function() {
            const coordinates = "0,5,NORTH"
            newRobot.place(coordinates);
            
            expect(newRobot).to.be.an("object");
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

    describe("Turn Robot", function() {
        it("should not turn the Robot when direction is invalid", function() {
            newRobot.place("0,0,NORTH");
            newRobot.turn("DOWNFORWAD");
            
            expect(newRobot).to.be.an("object");
            expect(newRobot.direction).to.equal("NORTH");
        })
        it("should turn the Robot 90 degrees to a specified direction", function() {
            newRobot.place("0,0,NORTH");
            newRobot.turn("RIGHT");

            expect(newRobot).to.be.an("object");
            expect(newRobot.direction).to.equal("EAST");
        })
    })

    describe("Move Robot", function() {
        it("should not move the Robot when its about to fall", function() {
            newRobot.place("0,0,SOUTH");
            newRobot.move();

            expect(newRobot).to.be.an("object");
            expect(newRobot.position).to.deep.equal([0,0]);
            expect(newRobot.direction).to.equal("SOUTH");
        })
        it("should not move the Robot when its about to fall", function() {
            newRobot.place("0,4,NORTH");
            newRobot.move();

            expect(newRobot).to.be.an("object");
            expect(newRobot.position).to.deep.equal([0,4]);
            expect(newRobot.direction).to.equal("NORTH");
        })
        it("should move the Robot to a new coordinate based on the direction it is currently facing", function() {
            newRobot.place("0,0,NORTH");
            newRobot.move();

            expect(newRobot.position).to.deep.equal([0,1]);
        })
    })
    
    
})

