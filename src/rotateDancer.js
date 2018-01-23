var makeRotateDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="pikachuDancer"></span>');
  this.oldStep = makeRotateDancer.prototype.step;
  this.$node.html('<img src=src/Pikachu.gif style= width:100px;height:100px;>');
};

makeRotateDancer.prototype = Object.create(makeDancer.prototype);
makeRotateDancer.prototype.constructor = makeRotateDancer;

makeRotateDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this, this.timeBetweenSteps);
  this.$node.toggleClass('pikachuDancer');
  // this.$node.css('transform', 'rotate('
  // + Math.random() * 180 + 'deg)');
  
};