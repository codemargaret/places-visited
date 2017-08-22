//business logic
function Place(name, landmarks, time, notes) {
  this.placeName = name;
  this.landmarks = landmarks;
  this.timeOfYear = time;
  this.notes = notes;
}

Place.prototype.placeInfo = function(){
  return this.placeName + ' ' + this.landmarks + ' ' + this.timeOfYear + ' ' +this.notes;
}

//user interface logic
$(document).ready(function(){
  $('form#new-place').submit(function(event){
    event.preventDefault();

    var inputtedPlaceName = $('input#new-place-name').val();
    var inputtedLandmarks = $('input#new-landmarks').val();
    var inputtedTimeOfYear = $('input#new-time').val();
    var inputtedNotes = $('input#new-notes').val();

    var newPlace = new Place(inputtedPlaceName, inputtedLandmarks, inputtedTimeOfYear, inputtedNotes);

    $('ul#places-visited').append("<li><span class='contact'>" + newPlace.placeInfo + '</span></li>');

    $('input#new-place-name').val('');
    $('input#new-landmarks').val('');
    $('input#new-time').val('');
    $('input#new-notes').val('');

    $('.contact').last().click(function(){
      $('#show-place').show();
      $('.place-name').text(newPlace.placeName);
      $('.landmarks').text(newPlace.landmarks);
      $('.time').text(newPlace.timeOfYear);
      $('.notes').text(newPlace.notes);
    });
  });
});
