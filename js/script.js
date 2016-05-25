
$(document).ready(function(){

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

  /* ////////
  Paginated content, retrieved from http://stackoverflow.com/questions/11277529/wrap-text-every-2500-characters-in-a-div-for-pagination-using-php-or-javascrip

  with some slight changes
  (html() instead of text(), fixed page height instead of window.height() )
  ////// */

if($('#paginated-content').length){
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
            // if(newPage.height() > $(window).height()) {
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
    //paginate();

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
            top: n * (- (pageHeight + 16 )) - ( n * 4.5), //TO DO: check these values later
            left: n  * 4
          });

      } //end for

     // $('#paginated-content').css('margin-bottom', - ( numPages * pageHeight) + (pageHeight  * 3/2));
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
        //marginBottom: - (galHeight/2) + 15 ,
        marginTop: 40
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


//TOUR

// Instance the tour
var tour = new Tour({
  steps: [
  {
    //element: "#title",
    placement: "bottom",
    orphan: true,
    title: "Welcome to the Newspaper!",
    content: "First time here? To take a quick tour click on 'Next'."
  },
   {
     element: ".pagetabs",
     placement: "bottom",
     title: "You are now on the Article Section",
     content: "Swipe to read the rest of the article and to see the other pictures."
   },
    {
      element: "#discussionTour",
      placement: "bottom",
      title: "Discussion Section",
      content: "Tap here to discover the 'Trending Voices', the comments from our readers and the poll results."
    },
     {
       element: "#exploreTour",
       placement: "bottom",
       title: "Explore Section",
       content: "Here you can read and listen to all our different stories. Log in to create your Personal Explore section."
     }
],
  storage: false
});
//console.log(tour);

// Initialize the tour
//tour.init();

// Start the tour
//tour.start();

//END TOUR

});//end document.ready
