function toggleMenu() {
    var menu = document.querySelector('.my_menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    menu.style.width="100px";
    menu.style.position= 'fixed';
    // document.getElementById(".my_menu")
  }

  document.querySelector('.menu-toggle').addEventListener('click', function() {
    this.classList.toggle('open');
  });
  