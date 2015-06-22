var WorldModule = function () {
  function World(grid) {
    this.space = grid.x * grid.y;
    this.x = grid.x;
    this.y = grid.y;
  }

  World.prototype = {
    get: function(){
      return World.toString()
    },
    set: function(x, y) {
      this.space = x * y;
      this.x = x;
      this.y = y;
    },
    toString: function() {
      return "Our world is " + this.space + " space, in which x: " + this.x + " and y: " + this.y;
    }
  };

  return {
    World: World
  }
}();
