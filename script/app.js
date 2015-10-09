// Write your code here!
$('#signup-form').on('submit', function(event) {
  var password1 = $('input[name=password]').val();
  var password2 = $('input[name=password2]').val();
  
  if (password1 !== password2) {
      alert('passwords dont match')
  }
  else if (password1.length < 10) {
      alert('password is too short');
  }
  else {
      return;
  }
  
  event.preventDefault();
  
  
});