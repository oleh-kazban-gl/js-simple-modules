var TestModule = function () {
  function Grid(x, y){
    this.x = x;
    this.y = y;
  }

  Grid.prototype = {
    plus: function() {
      return this.x + this.y;
    },
    minus: function() {
      return this.x - this.y;
    },
    multiply: function() {
      return this.x * this.y;
    },
    divide: function() {
      return this.x / this.y;
    }
  };

  return {
    Grid: Grid,
  }
}();
