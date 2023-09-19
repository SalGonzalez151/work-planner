// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  
  //saves user input to local storage when they click the save button
  $('.saveBtn').on('click', function () {
    var blockId = $(this).parent().attr('id');
    var userInput = $(this).siblings('.description').val();
    localStorage.setItem(blockId, userInput);
  })

  // loop through time and change the color based on past, present, future
  var currentHour = dayjs().hour();
  function hours() {
    $('.time-block').each(function () {
      var idArray = $(this).attr('id').split('-')
      var hourNum = parseInt(idArray[1]);
      $(this).removeClass('future past present');
      if (hourNum < currentHour) {
        $(this).addClass('past');
      } else if (hourNum === currentHour) {
        $(this).addClass('present');
      } else {
        $(this).addClass('future');
      }
    });
  }
  hours()

//load saved input and displays them on the page
  $('.time-block').each(function() {
    var timeId = $(this).attr('id');
    var savedInput = localStorage.getItem(timeId);

    $(this).find('textarea').val(savedInput);
  })
  
  // gets the current date
  var currentDate = dayjs().format('MMMM D, YYYY');
  $('#currentDay').text(currentDate);
  
});
