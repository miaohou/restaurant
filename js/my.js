$(document).ready(function() {
	   $('.showmenu').on('click',  function(){
     		event.preventDefault();
      $('.topbar').toggleClass('menu_show');
  });
});