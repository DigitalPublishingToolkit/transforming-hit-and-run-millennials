
$(document).ready(function(){

  $( "#sortable" ).sortable();
  $( "#sortable" ).disableSelection();

  //this runs everytime the sorting is done
  $( "#sortable" ).on({
      sortupdate: function( event, ui ) {
        console.log('On update -> '+ $(ui.item).attr('id')+ ' at position '+ui.item.index() );
      },
      sortstart: function( event, ui ) {
        console.log('On start -> '+ $(ui.item).attr('id')+ ' at position '+ui.item.index());
      }
  });

  //still not saving the position of the items, just allowing the user to play around with the interface for now.

  //hide all divs except #article
  $("#explore").hide();
  $("#discussion").hide();

  //define variables that we're going to use later
  var curContent;
  var curTab;

  $('.pagetabs a').on('click', function(blaEvent){
    //remove .selected from all li
    $('.pagetabs li').removeClass('selected');
    //add .selected to selected tab
    curTab = $(this).parent();
    $(curTab).addClass('selected');
    //defines the current content tab
    curContent = $(this).attr('href');
    //hides all itesm with class .tabContent
    $('.tabContent').hide();
    //shows current content tab
    $(curContent).show();
    //disables page 'scroll' to anchor tag
    blaEvent.preventDefault();
    //alert('clicked on '+bla.target.nodeName);
  });

});//end document.ready
