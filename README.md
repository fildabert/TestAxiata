## Robot App

## How to use the app
```
npm install
node app.js PLACE {coordinates} {MOVE|LEFT|RIGHT|REPORT|PLACE {coordinates}} ...
*commands are passed through process.argv
```

## Examples of a valid command: 
```
node app.js PLACE 0,0,NORTH MOVE REPORT
node app.js PLACE 0,0,NORTH MOVE RIGHT MOVE REPORT
node app.js PLACE 0,0,NORTH MOVE PLACE 3,3,SOUTH MOVE REPORT
```

## Invalid commands:
```
node app.js 0,0 NORTH MOVE(Robot must be placed on the table using PLACE command)
node app.js PLACE 0,5,NORTH MOVE
```
