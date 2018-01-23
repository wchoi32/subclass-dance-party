describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggleClass');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggleClass.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('spinnyDancer', function() {

  var spinnyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    spinnyDancer = new makeSpinnyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(spinnyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(spinnyDancer.$node, 'toggleClass');
    spinnyDancer.step();
    expect(spinnyDancer.$node.toggleClass.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(spinnyDancer, 'step');
      expect(spinnyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(spinnyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(spinnyDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('rotateDancer', function() {

  var rotateDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    rotateDancer = new makeRotateDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(rotateDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(rotateDancer.$node, 'toggleClass');
    rotateDancer.step();
    expect(rotateDancer.$node.toggleClass.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(rotateDancer, 'step');
      expect(rotateDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(rotateDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(rotateDancer.step.callCount).to.be.equal(2);
    });
  });
});
