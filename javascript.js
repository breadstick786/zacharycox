function myFunction() {
    document.getElementById("myDropdown").classList.toggle("hidden");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('hidden')) {
          openDropdown.classList.remove('hidden');
        }
      }
    }
  }  