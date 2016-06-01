
$(document).ready(function(){
 
$(".results").hide();
 // Changes the .options elements in the article page
  

      $("#listen").click(function(){ //adds/removes teh class .active to the 'listen' svg when clicked
      $(this).toggleClass('active');
      });


       // $("#User img").hide();

       $("#saveLater").click(function(){ //this calls the aler window on click of the save for later icon
       // $("#User img").toggle();
       swal({
       title: "Login",
       text: "Log in to save this article for reading it later",
       imageUrl: "images/user.png"    
       });


     });    
$(".results").hide();

//poll simulation

  $(".pollOptions").click(function(){
   $(this).toggleClass('clicked-poll'); 
  });

  $("#submit-button").click(function(){
    $(".pollOptions").hide();
    $("#submit-button").hide();
    $(".results").show();


  });

// action for click on the user icon in the top nav bar

  $("#user").click(function(){
  swal({
       title: "Login",
       text: "Log in or register on this website",
       imageUrl: "images/user.png"    
       });


  });



/*
  $( "#sortable" ).sortable({
    axis: "y", //restraints the dragging to the vertical axis
    delay: 1000 //requires one second (1000 miliseconds) before dragging
  });
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
  */

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

  //hides/shows the share button
    if(curContent == "#article"){
      $('#share').show();
      $('#comment').hide();
    }else{
      $('#share').hide();
      if(curContent == "#discussion"){
        $('#comment').show();
      }else{
        $('#comment').hide();
      }
    }
    //shows current content tab
    $(curContent).show();
    //disables page 'scroll' to anchor tag
    blaEvent.preventDefault();
    //alert('clicked on '+bla.target.nodeName);
  });

//EXPLORE
$('#GOEXPLORE').on('click', function(bla){
  //alert('clicked on '+bla.target.nodeName);
    //remove .selected from all li
    $('.pagetabs li').removeClass('selected');
    //add .selected to selected tab
    curTab = $('#exploreTour');
    $(curTab).addClass('selected');
    //defines the current content tab
    curContent = $(this).attr('href');
    //hides all itesm with class .tabContent
    $('.tabContent').hide();

  //hides/shows the share button
    if(curContent == "#article"){
      $('#share').show();
      $('#comment').hide();
    }else{
      $('#share').hide();
      if(curContent == "#discussion"){
        $('#comment').show();
      }else{
        $('#comment').hide();
      }
    }
    //shows current content tab
    $(curContent).show();
    //disables page 'scroll' to anchor tag
    bla.preventDefault();
    
  });

//YEAR IN NEWS ON AND OFF

$('.ranking').hide();

$('.yinOn').on('click', function() {
  $('.yin').toggle();
  
});

$('.yin').on('click', function(){
  $(this).attr('src','images/ranking.png');
});

$('.ranking').on('click', function(){
  $(this).attr('src','images/yin.png');
});


//RANKING ON AND OFF

$('.yin').on('click', function(){
  $('.ranking').show();
  $('.yin').hide();

});




//LOG IN HIDE
$('#logIn').on("click", function(){
  $(this).hide();
});


  var curIntContent;
  var curIntTab;


  $('.intTab a').on('click', function(blaEvent){
    //remove .selected from all li
    $('.intTab li').removeClass('selected');
    //add .selected to selected tab
    curIntTab = $(this).parent();
    $(curIntTab).addClass('selected');
    //defines the current content tab
    curIntContent = $(this).attr('href');
    //hides all itesm with class .tabContent
    $('.tabIntContent').hide();
    //shows current content tab
    $(curIntContent).show();
    //disables page 'scroll' to anchor tag
    blaEvent.preventDefault();
    //alert('clicked on '+bla.target.nodeName);
  });

  var curUpdContent;
  var curUpdTab;


  $('.updateTabs a').on('click', function(blaEvent){
    //remove .selected from all li
    $('.updateTabs li').removeClass('selected');
    //add .selected to selected tab
    curUpdTab = $(this).parent();
    $(curUpdTab).addClass('selected');
    //defines the current content tab
    curUpdContent = $(this).attr('href');
    //hides all itesm with class .tabContent
    $('.tabUpdContent').hide();
    //shows current content tab
    $(curUpdContent).show();
    //disables page 'scroll' to anchor tag
    blaEvent.preventDefault();
    //alert('clicked on '+bla.target.nodeName);
  });

 //action for clicking on the arrow button in the NewsUpdate feature

 var TEST
 var TESTS
 var TESTT
  
 $(".NewsUpdate-check").on('click', function(blaEvent){
 TEST = $(this).parent();
 TESTS = $(TEST).parent();
 $(TESTS).addClass('selected');

});






  /* ////////
  Paginated content, retrieved from http://stackoverflow.com/questions/11277529/wrap-text-every-2500-characters-in-a-div-for-pagination-using-php-or-javascrip

  with some slight changes
  (html() instead of text(), fixed page height instead of window.height() )
  ////// */

if($('#paginated-content').length){ //if the div with the id 'paginated content' has a specific length, than do everything from the next lines
  var contentBox = $('#paginated-content');
  //get the text as an array of word-like things
  var words = contentBox.html().split(' ');

  //define the page height
  var pageHeight = 300;

  function paginate() {
        //create a div to build the pages in

        var newPage = $('<div class="articleTextPage" />');
        contentBox.empty().append(newPage);

        //start off with no page text
        var pageText = null;
        for(var i = 0; i < words.length; i++) {
            //add the next word to the pageText
            var betterPageText = pageText ? pageText + ' ' + words[i]
                                          : words[i];
            newPage.html(betterPageText);

            //Check if the page is too long
          //  if(newPage.height() > $(window).height()) {
            if(newPage.height() > pageHeight) { //page height is 300px (defined above)
                //revert the text
                newPage.html(pageText);

                //and insert a copy of the page at the start of the document
                newPage.clone().insertBefore(newPage);

                //start a new page
                pageText = null;
            } else {
                //this longer text still fits
                pageText = betterPageText;
            }
        }
    }

    //$(window).resize(paginate).resize();
    //not necessary if the page has fixed height and width
    //instead, call the function only once
   paginate();

  } // end if

    /* ////////
    Position all pages in a stack
    ////// */

if($('#paginated-content').length){

    var numPages = $('#paginated-content').children().length;
    function pilePages(){

      for(var n=0; n < numPages; n++){
        $('.articleTextPage').eq(n).css({
            zIndex: 100 - n , //change 100 by another number if there are too many pages
            top: n *  (- pageHeight - 16) - ( n * 4.5), //TO DO: check these values later
            left: n  * 4
          });

      } //end for

       //  $('#paginated-content').css('margin-bottom', - ( numPages * pageHeight) + (pageHeight  * 3/2));
         $('#paginated-content').css('height',pageHeight + 30 + numPages * 4);

    } //end pilePages function

   pilePages();

    /* ////////
    Position all images from img-gallery in a stack
    ////// */
    var numImages = $('#img-gallery').children().length;
    var imgHeight;
    var galHeight = numImages * 210; //check/fix

    function pileImages(){

      for(var n=0; n < numImages; n++){
        imgHeight = $('.article-img').eq(n).height();

        $('.article-img').eq(n).css({
            zIndex: 100 - n , //change 100 by another number if there are too many pages
            top: n * (- imgHeight - 16 ) - ( n * 4.5), //TO DO: check these values later
            left: n  * 4
          });


      } //end for

      $('#img-gallery').css({
        marginBottom: - (galHeight/2) + 50,
        marginTop: 50
      });

    }// end pileImages function

    //call pileImages function
    pileImages();

}// end if

//update tab clicks
$('.tabUpdContent span').on('click', function(){
  $(this).toggleClass('clicked');
});

//hide all divs except #article
$("#when").hide();
$("#where").hide();


});//end document.ready

