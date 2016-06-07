
$(document).ready(function(){

$(".results").hide();
 // Changes the .options elements in the article page


     $('#on').hide();


    $('#listen').on('click', function() {
    if($('#on').hasClass('listen-switch')){
      $('#off').show();
      $('#on').hide();
      $('#on').removeClass('listen-switch');
      $('#off').addClass('listen-switch');
    } else{
      $('#on').show();
      $('#off').hide();
      $('#off').removeClass('listen-switch');
      $('#on').addClass('listen-switch');
    }


});


       // $("#User img").hide();

       $("#saveLater").click(function(){ //this calls the aler window on click of the save for later icon
       // $("#User img").toggle();
       swal({
       title: "Login",
       html: "true",
       text: "Join us here by entering your e-mail address below or login with Facebook, Google or Twitter <input placeholder=\"e-mail\" type=\"text\"/>",
       showCancelButton: "true",
       imageUrl: "images/social-login.png",
       imageSize:  "200x150",
       showCancelButton:"true",
       confirmButtonColor:"#008080",
       animation:"false",
       confirmButtonText:"Sign in"
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
       html: "true",
       text: "Join us here by entering your e-mail address below or login with Facebook, Google or Twitter  <input placeholder=\"e-mail\" type=\"text\"/>",
       showCancelButton: "true",
       imageUrl: "images/social-login.png",
       imageSize:  "200x150",
       showCancelButton:"true",
       confirmButtonColor:"#008080",
       animation:"false",
       confirmButtonText:"Sign in"

       });


  });


/*<input type=\"text\" name=\"reason\" value=\"e-mail\"></br>*/

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

  //fixed tab stuff
  var t = $(".intTab");
  var pos = 50;
  $(window).scroll(function() {
      var windowpos = $(window).scrollTop();
      if (windowpos >= pos) {
          t.addClass("tabFix");
          //add margin to tab1
          $('#tab1').css('margin-top','50px');
      } else {
          t.removeClass("tabFix");
          //remove margin from tab1
          $('#tab1').css('margin-top','0px');
      }
  });
  //end fixed tab stuff

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
    //add an offset
    var tabOffset = $('.top').outerHeight();
    $(window).scrollTop(- tabOffset);
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


//EXPLORE DUTCH TOPICS TOGGLE

$('.subheaderExDutch').on('click', function() {
  $('.dutchtopics').toggle();
  if($('#caret').hasClass('fa-caret-left')){
    $('#caret').removeClass('fa-caret-left').addClass('fa-caret-down');
  } else{
    $('#caret').removeClass('fa-caret-down').addClass('fa-caret-left');
  }

});


//EXPLORE WORLD TOPICS TOGGLE

$('.subheaderExWorld').on('click', function() {
  $('.worldtopics').toggle();
  if($('#caretWorld').hasClass('fa-caret-left')){
    $('#caretWorld').removeClass('fa-caret-left').addClass('fa-caret-down');
  } else{
    $('#caretWorld').removeClass('fa-caret-down').addClass('fa-caret-left');
  }

});


//YIN TITLE AND SYMBOL ROTATE
//YEAR IN NEWS ON AND OFF


$('.TitleYin').on('click', function() {
  $('.yin').toggle();
  if($('#caretYin').hasClass('fa-caret-left')){
    $('#caretYin').removeClass('fa-caret-left').addClass('fa-caret-down');
  } else{
    $('#caretYin').removeClass('fa-caret-down').addClass('fa-caret-left');
  }

});


//RANKING ON AND OFF

$('.yin').on('click', function(){
 if( $(this).attr('src') == 'images/yin.png'){
   $(this).attr('src','images/ranking.png');
 }else{
   $(this).attr('src','images/yin.png');
 }

});



//LOG IN HIDE
$('li#personal-explore').on("click", function(){
  //$(this).hide();
   swal({
       title: "Login",
       html: "true",
       text: "Join us here by entering your e-mail address below or login with Facebook, Google or Twitter <input placeholder=\"e-mail\" type=\"text\"/>",
       showCancelButton: "true",
       imageUrl: "images/social-login.png",
       imageSize:  "200x150",
       showCancelButton:"true",
       confirmButtonColor:"#008080",
       animation:"false",
       confirmButtonText:"Sign in",

       });
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

  /* ////////
  Paginated content, retrieved from http://stackoverflow.com/questions/11277529/wrap-text-every-2500-characters-in-a-div-for-pagination-using-php-or-javascrip

  with some slight changes
  (html() instead of text(), fixed page height instead of window.height() )
  ////// */

if($('#paginated-content').length){ //if the div with the id 'paginated content' has a specific length, than do everything from the next lines
  var contentBox = $('#paginated-content');
  //first of all, get content of p.lead and remove it from its original place
  var lead = $('p.lead').html();
  //console.log(lead);
  $('p.lead').remove();
  //get the text as an array of word-like things (does not include p.lead content)
  var words = contentBox.html().split(' ');

  //define the page height
  var pageHeight = 300;


  function paginate() {
        //create a div to build the pages in

        var newPage = $('<div class="articleTextPage" />');

        contentBox.empty().append(newPage);
        //this will add blank space to the end of pages so that they all have the same height
        $('.articleTextPage').css('min-height',pageHeight+'px');
        //start off with p.lead content
        var pageText = '<p class="lead">' + lead + '</p>';
        for(var i = 0; i < words.length; i++) {
            //add the next word to the pageText (this will be done word by word)
            //if pageText exists, add a space (' ') to it and the next word (word[i])
            //else just add the next word (words[i])
            //Reference: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
            //equivalent to
            // if(pageText){
            //   betterPageText = pageText + ' ' + words[i];
            // }else{
            //   betterPageText = words[i]
            // }
            var betterPageText = pageText ? pageText + ' ' + words[i]
                                          : words[i];
            //add betterPageText (defined in the line above) as content of newPage
            newPage.html('<p>'+betterPageText+'</p>');

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
        //add 'MessagePage' after the second page ( .eq(1) )
        $('.articleTextPage').eq(1).after('<div id="MessagePage" class="articleTextPage" />');
        //define content for #MessagePage
        $('#MessagePage').html('<p>Don\'t want to miss your must-read articles? Sign up today to get your PERSONAL NEWS UPDATES!<span class="link-check-update"><i class="fa fa-check-square-o fa-2x" aria-hidden="true"></i></span></p>');
        //define a height to this div
        $('#MessagePage').css('height', pageHeight+'px');
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
    var leftPos = [];

    function pilePages(){

      for(var n=0; n < numPages; n++){
        $('.articleTextPage').eq(n).css({
            zIndex: 100 - n , //change 100 by another number if there are too many pages
            top: n *  (- pageHeight - 27),
            left: n  * 4
          });
          leftPos.push(n*4);
          //add page numbers (needs styling)
          $('.articleTextPage').eq(n).append('<p class="pageNr">'+(n+1)+'/<span class="numPages">'+numPages+'</span></p>');

      } //end for

       //  $('#paginated-content').css('margin-bottom', - ( numPages * pageHeight) + (pageHeight  * 3/2));
         $('#paginated-content').css('height',pageHeight + 30 + numPages * 4);
         //set top page as current
         $('.articleTextPage').eq(0).addClass('topPage');

    } //end pilePages function

   pilePages();
   //console.log(leftPos);

    /* ////////
    Swipe pages left and right
    ////// */
    //touch
    //for reference, check http://labs.rampinteractive.co.uk/touchSwipe/demos/index.html
      $("#mainArticlePage").swipe( {
        //Generic swipe handler for all directions
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
          flipPages(direction);
        }
      });

    var tPageIndex = $('.articleTextPage').index($('.topPage'));
    var w = $(window).width();

    function flipPages(d){
      if(d == 'left'){
        if(tPageIndex < (numPages - 1)){
          $('.topPage').animate({
            left: '-'+w+'px'
          }, 400, function() {
            // Animation complete.
            //$('.topPage').fadeOut('fast');
            //next should be topPage now
            $('.topPage').removeClass('topPage').next().addClass('topPage');
            tPageIndex++;
          });
        }
      }//end left

      if(d == 'right'){
        $('.topPage').fadeIn('fast');
        //prev should be topPage now
        tPageIndex--;
        $('.topPage').removeClass('topPage').prev().addClass('topPage');
        if(tPageIndex < numPages ){
          $('.topPage').animate({
            left: leftPos[tPageIndex]+'px'
          });
        }//end if
      }//end right

    }//end flipPages()

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

//next tab
var nextTab, nextTabID;

$(".NewsUpdate-check").on('click', function(){
  // defines the next tab as being the next to the currently selected tab
  nextTab = $('.updateTabs li.selected').next();
  //gets the href of the next tab (which is related to the id of the content to be displayed)
  nextTabID = $(nextTab).find('a').attr('href');

  //remove .selected from all li
  $('.updateTabs li').removeClass('selected');
  //add .selected to selected tab
  curUpdTab = $(nextTab);
  $(curUpdTab).addClass('selected');
  //defines the current content tab
  curUpdContent = nextTabID;
  //hides all itesm with class .tabContent
  $('.tabUpdContent').hide();
  //shows current content tab
  $(curUpdContent).show();

});

//BANNER

$('#banner').on('click', function () {
  var bP = $('#banner');
  var bPPos = bP.position();
  if(bPPos.left == -340){
    $('#banner').animate({
    'left': '-5px'
    }, 800);
  }else{
    $('#banner').animate({
    'left': '-340px'
    }, 250);
  }

});


});//end document.ready
