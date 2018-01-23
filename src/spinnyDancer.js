var makeSpinnyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.oldStep = makeSpinnyDancer.prototype.step;
  this.$node.html('<img src=src/BreakDancer.gif style= width:150px;height:150px;>>');
};

makeSpinnyDancer.prototype = Object.create(makeDancer.prototype);
makeSpinnyDancer.prototype.constructor = makeSpinnyDancer;

makeSpinnyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this, this.timeBetweenSteps);
  this.$node.toggleClass('breakDancer');
};