
$(document).ready(function(){

  $(".results").hide();
  $('#on').hide();
  
  //hide all divs except #article
  $("#explore").hide();
  $("#discussion").hide();
  
  // Changes the .options elements in the article page

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
  }); // end #listen on click

  //this calls the alert window on click of the save for later icon
  $("#saveLater").click(function(){ 
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
   });//end swal
  }); // end #saveLater on click
  
  //poll simulation
  var pollChecked = false;
  $(".pollOptions").click(function(){
      if($(this).siblings().hasClass('clicked-poll')){
        $(this).toggleClass('clicked-poll');
        $(this).siblings().toggleClass('clicked-poll');
      }else{
        $(this).toggleClass('clicked-poll');
      }
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
    }); //end swal
  }); // end #user on click


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

  /* //trying to fix the scrolling here...

  $('body').scrollTo('#newsUpdate', 800, {offset: function() { return {top:pos}; }});

  });
  */

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
  });

//EXPLORE
$('#GOEXPLORE').on('click', function(bla){
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
  - html() instead of text(), fixed page height instead of window.height()
  - the last word in each page was missing (that has been fixed now)
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
        $('.articleTextPage').css({'min-height':pageHeight+'px'});
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
            if(newPage.height() > pageHeight ) { //page height is 300px (defined above)
              
              //reset the text
                newPage.html(pageText);
                //and insert a copy of the page at the start of the document
                newPage.clone().insertBefore(newPage);
                //start new page content where it stopped (fix for last word missing)
                pageText = words[i];
              
            } else {
                //text still fits
                pageText = betterPageText;
            }
          //newPage.css({'max-height':pageHeight + 'px !important','min-height':pageHeight + 'px !important'});
        }
        //add 'BlockMessagePage' after the first page ( .eq(0) )
        $('.articleTextPage').eq(0).after('<div id="BlockMessagePage" class="articleTextPage" />');
        //define content for #BlockMessagePage
        $('#BlockMessagePage').html('<p><img src="images/interaction-signup.png" class="unlockText" width="315" height="321" /></p>');
        //define a height to this div
        //$('#BlockMessagePage').css('height', pageHeight+'px');
         $('#BlockMessagePage').height(pageHeight  +'px').css('min-height', pageHeight+'px !important');
        
        //add 'MessagePage'  after the last text/content page
        $('.articleTextPage').last().after('<div id="MessagePage" class="articleTextPage" />');
        //define content for #MessagePage
        $('#MessagePage').html('<p>Don\'t want to miss your<br>must-read articles?<br><br>Sign up today to get your PERSONAL NEWS UPDATES!<br><br><span class="link-check-update"><a class="linkUpdate"><i class="fa fa-check-square-o fa-2x" aria-hidden="true"></i></a></span></p>');
        //define a height to this div
        $('#MessagePage').height(pageHeight +'px').css('min-height', pageHeight+'px !important');
        
        $('.articleTextPage').css({'max-height':pageHeight + 'px !important','min-height':pageHeight + 'px !important'});
    }

    //$(window).resize(paginate).resize();
    //not necessary if the page has fixed height and width
    //instead, call the function only once
   paginate();

  } // end if

    /* ////////
    Position all pages in a stack
    ////// */
  var numPages
    
if($('#paginated-content').length){

    //numPages = $('#paginated-content').children().length;
    var leftPos = [];

    function pilePages(){
      numPages = $('#paginated-content').children().length;

      for(var n=0; n < numPages; n++){
        $('.articleTextPage').eq(n).css({
            zIndex: 100 - n , //change 100 by another number if there are too many pages
            top: n * (- 45 - pageHeight),
            left: n  * 3
          });
          leftPos.push(n*4);
          //add page numbers (needs styling)
          if(textUnlocked){
           $('.pageNr').eq(n).html((n+1)+'/<span class="numPages">'+numPages+'</span>');
          }else{
            $('.articleTextPage').eq(n).append('<p class="pageNr">'+(n+1)+'/<span class="numPages">'+numPages+'</span></p>');
          }

      } //end for

       //  $('#paginated-content').css('margin-bottom', - ( numPages * pageHeight) + (pageHeight  * 3/2));
         $('#paginated-content').css('height',pageHeight + 60 + numPages * 4);
         //set top page as current
         $('.articleTextPage').eq(0).addClass('topPage');

    } //end pilePages function

   pilePages();
   //console.log(leftPos);

    /* ////////
    Swipe pages left and right
    ////// */
    
    var textUnlocked = false;
    // We will use this variable to allow/prvent user from swiping through pages.
    // Text will be unlocked when user clicks on icon inside the BlockMessagePage
    // Change, if you want. :)
    $('.unlockText').on('click', function(){
      textUnlocked = true;
      
      $('#BlockMessagePage').animate({
        'background-color': 'white',
        'color':'#666'
        });
      $('#BlockMessagePage').html('Continue reading...');
      
      //remove the message
      //$('#BlockMessagePage').remove();
      //update numPages
      //numPages--;
      //rebuild the pages/pageNr, positions
      //pilePages();
    });
    
    //touch
    //for reference, check http://labs.rampinteractive.co.uk/touchSwipe/demos/index.html
      $("#paginated-content").swipe( {
         swipeLeft:flipPages,
         swipeRight:flipPages,
         allowPageScroll:"auto"
      });

    var tPageIndex = $('.articleTextPage').index($('.topPage'));
    var w = $(window).width();

    function flipPages(event, direction){
      if(textUnlocked == true || tPageIndex < 1){
        
        if(direction == 'left'){
          if(tPageIndex < (numPages - 1)){
            $('.topPage').animate({
              left: '-'+w+'px'
            }, 400, function() {
              // animation is complete.
              // next should be topPage now
              $('.topPage').removeClass('topPage').next().addClass('topPage');
              tPageIndex++;
            });
          }
          
          
        }//end left
        
       } //end check textUnlocked
       
      if(textUnlocked == true || tPageIndex < 2){
        if(direction == 'right'){
          $('.topPage').fadeIn('fast');
          if(tPageIndex >= 1){
             //prev should be topPage now
            tPageIndex--;
            $('.topPage').removeClass('topPage').prev().addClass('topPage');
          }
         
          
          if(tPageIndex < numPages ){
            $('.topPage').animate({
              left: leftPos[tPageIndex]+'px'
            });
          }
        }//end right
        
    } //end check textUnlocked

    }//end flipPages()


    /* ////////
    Position all images from img-gallery in a stack
    ////// */
    var numImages = $('#img-gallery').children().length;
    var imgHeight = 194; //hardcoded value
    // var galHeight = numImages * 210; //check/fix
    var galHeight = imgHeight + 20 + (numImages * 8);

    function pileImages(){

      for(var n=0; n < numImages; n++){
        //imgHeight = $('.article-img').eq(n).height();
        //using hardcoded value (194px) instead
        // imgHeight = 194;

        $('.article-img').eq(n).css({
            zIndex: 100 - n , //change 100 by another number if there are too many pages
            top: n * (- imgHeight - 6 ) ,
            left: n  * 3
          });
          //write nrPhoto
          $('.imgnr').eq(n).html((n+1)+'/'+numImages);

      } //end for

      $('#img-gallery').css({
        //marginBottom: - (galHeight/2) + 50,
        marginTop: 50,
        height: galHeight+'px'
      });



    }// end pileImages function

    //call pileImages function
    pileImages();

}// end if

/* ////////
Swipe photos left and right
-> this is a copy of the mechanism for swiping pages, with some changes in variable names
-> ideally, we would write a function and pass parameters to accomodate that instead of writing the same functions twice.
////// */
//for reference, check http://labs.rampinteractive.co.uk/touchSwipe/demos/index.html
  $("#img-gallery").swipe( {
     swipeLeft:flipPhotos,
     swipeRight:flipPhotos,
     allowPageScroll:"auto"
  });

var tPhotoIndex = $('.article-img').index($('.topPhoto'));
//var w = $(window).width();

function flipPhotos(event, direction){
  if(direction == 'left'){
    //console.log('swipe left');
    if(tPhotoIndex < (numImages - 1)){
      $('.topPhoto').animate({
        left: '-'+w+'px'
      }, 400, function() {
        // animation is complete.
        // next should be topPage now
        $('.topPhoto').removeClass('topPhoto').next().addClass('topPhoto');
        tPhotoIndex++;
      });
    }
  }//end left

  if(direction == 'right'){
    $('.topPhoto').fadeIn('fast');
    //prev should be topPage now
    tPhotoIndex--;
    //console.log(tPhotoIndex, numImages);
    $('.topPhoto').removeClass('topPhoto').prev().addClass('topPhoto');
    if(tPhotoIndex < numImages ){
      $('.topPhoto').animate({
        left: leftPos[tPhotoIndex]+'px'
      });
    }//end if
  }//end right

}//end flipPhotos()

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
    }, 800, function(){
      $('.close-banner').css('visibility','visible');
    });
  }else{
    $('.close-banner').on('click', function(){
      $('.close-banner').css('visibility','hidden');
      $('#banner').animate({
      'left': '-340px'
      }, 250);
    });
  }

});


// LINK BANNER TO PERSONAL EXPLORE TAB WITH LOG IN

$('.linkPEx').on('click', function(){
  //must select tab explore, subTab Personal #personal-explore
  
  //remove .selected from all li
    $('.pagetabs li').removeClass('selected');
    curTab = $('#exploreTour');
    $(curTab).addClass('selected');
    curContent = '#explore';
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
    $(curContent).show();
  
  //remove .selected from all li
    $('.intTab li').removeClass('selected');
    curIntTab = $('#personal-explore');
    $(curIntTab).addClass('selected');
    curIntContent = '#tab2';
    $('.tabIntContent').hide();
    $(curIntContent).show();
});


//CHECKBOX LINK TO NEWS UPDATES

$('.linkUpdate').on('click', function () {

 var o = -($('.top').height());

 $('body').scrollTo('#newsUpdate', 800, {offset: function() { return {top:o}; }});

});


//img gallery Trending Voices

var galHeight = $('.gallery').find('img').height(); /*+ $('.gallery').find('figcaption').height();*/

$('.gallery').css('height',galHeight);

var curFigure = 0;
var totalPics = $('.gallery').children().length;

$('#tv-left').on("click", function(){
    $('.gallery').find('figure').eq(curFigure).removeClass('active-trend');
     if(curFigure > 0) {
        curFigure = curFigure - 1; 
     }else{
        curFigure = totalPics - 1;
     }

    $('.gallery').find('figure').eq(curFigure).addClass('active-trend');

    });



$('#tv-right').on("click", function(){
    $('.gallery').find('figure').eq(curFigure).removeClass('active-trend');
     if(curFigure < (totalPics - 1) ){
        curFigure = curFigure + 1; 
    }else{

        curFigure = 0; 
    }

    $('.gallery').find('figure').eq(curFigure).addClass('active-trend');

    });






});//end document.ready
