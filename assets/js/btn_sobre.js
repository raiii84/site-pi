function toggleClasses() {
  var elem1 = document.querySelector('.sobre1');
  var elem2 = document.querySelector('.sobre2');
  if (elem1.style.display === 'none') {
    elem1.style.display = 'flex';
    elem2.style.display = 'none';
  } else {
    elem1.style.display = 'none';
    elem2.style.display = 'flex';
  }

  
}


  