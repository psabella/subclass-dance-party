var makeBreakDancer = function (top, left, timeBetweenSteps) {
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.addClass('break');
};
//var oldStep = blinkyDancer.step;

makeBreakDancer.prototype = Object.create(Dancer.prototype);
makeBreakDancer.prototype.constructor = makeBreakDancer;

makeBreakDancer.prototype.step = function () {

  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  //oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
  //$node.toggle(call(this));
  //$node.toggle(.call(this));
};

// var blinkyDancer = new makeBreakDancer (30, 30, 3000);
//return blinkyDancer;
