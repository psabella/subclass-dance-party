var makePoleDancer = function (top, left, timeBetweenSteps) {
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  Dancer.call(this, top, left, timeBetweenSteps);
  //this.$node = $('<span class="dancer" class ="pole"></span>');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.addClass('pole');
};
//var oldStep = blinkyDancer.step;

makePoleDancer.prototype = Object.create(Dancer.prototype);
makePoleDancer.prototype.constructor = makePoleDancer;

makePoleDancer.prototype.step = function () {

  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  //oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.toggle();
  //$node.toggle(call(this));
  //$node.toggle(.call(this));
};

// var blinkyDancer = new makePoleDancer (30, 30, 3000);
//return blinkyDancer;
