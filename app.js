var myGrid = new TestModule.Grid(10, 20);
var myWorld = new WorldModule.World(myGrid);

console.log(myGrid);
console.log(myGrid.plus());
console.log(myGrid.minus());
console.log(myGrid.multiply());
console.log(myGrid.divide());

console.log(myWorld);
console.log(myWorld.get());
console.log(myWorld.set(100, 500));
console.log(myWorld.toString());
console.log(myWorld.get());



