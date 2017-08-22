//business logic
function Place(name, landmarks, time, notes) {
  this.placeName = name;
  this.landmarks = landmarks;
  this.timeOfYear = time;
  this.notes = notes;
}

Place.prototype.placeInfo = function(){
  return this.firstName + ' ' + this.lastName;
}

//user interface logic
$(document).ready(function(){
  $('form#new-place').submit(function(event){
    event.preventDefault();

    var inputtedPlaceName = $('input#new-first-name').val();
    var inputtedLastName = $('input#new-last-name').val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $('ul#contacts').append("<li><span class='contact'>" + newContact.fullName + '</span></li>');

    $('input#new-first-name').val('');
    $('input#new-last-name').val('');

    $('.contact').last().click(function(){
      $('#show-contact').show();
      $('#show-contact h2').text(newContact.firstName);
      $('.first-name').text(newContact.firstName);
      $('.last-name').text(newContact.lastName);
    });
  });
});
