function startMeeting() {
  var cb1 = document.getElementById("Check1");
  var cb2 = document.getElementById("Check2");
  if (cb1.checked && cb2.checked){
    $('#datenschutz-alert').hide();
	$('#aufzeichnung-alert').hide();
	location.href = "https://zoom.us/j/xxxxxxxxx?pwd=password";	
  }
  else if (!cb1.checked && cb2.checked) {
	$('#datenschutz-alert').fadeTo(3000, 500).slideUp(500, function() {
      $('#datenschutz-alert').slideUp(500);
    });
    $('#aufzeichnung-alert').hide();
    document.getElementById('Check1').focus();
  }
  else if (cb1.checked && !cb2.checked) {
    $('#datenschutz-alert').hide();
	$('#aufzeichnung-alert').fadeTo(3000, 500).slideUp(500, function() {
      $('#aufzeichnung-alert').slideUp(500);
    });
    document.getElementById('Check2').focus();
  }
  else {
	$('#datenschutz-alert').fadeTo(3000, 500).slideUp(500, function() {
      $('#datenschutz-alert').slideUp(500);
    });
	$('#aufzeichnung-alert').fadeTo(3000, 500).slideUp(500, function() {
      $('#aufzeichnung-alert').slideUp(500);
    });
    document.getElementById('Check1').focus();
  }
}
