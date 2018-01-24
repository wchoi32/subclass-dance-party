$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineDancersUp').on('click', function(event) {
  // console.log(window.dancers[0].top);
    window.dancers.forEach(function(i) {
      i.lineUp();
    });
  });

  $('.lastElement').on('click', function(event) {
    var distanceDancers = [];
    var lengthWindow = window.dancers.length - 1;
    var lastElementTop = window.dancers[lengthWindow].top;
    var lastElementLeft = window.dancers[lengthWindow].left;
    window.dancers.forEach(function(i) {
      distanceDancers.push(Math.sqrt(Math.pow((lastElementTop - i.top), 2) + Math.pow((lastElementLeft - i.left), 2)));                
    });
    var max = distanceDancers.reduce(function(a, b) {
      return Math.max(a, b);
    });
    
    window.dancers[lengthWindow].setPosition(window.dancers[distanceDancers.indexOf(max)].top, window.dancers[distanceDancers.indexOf(max)].left);
  });
  
});

