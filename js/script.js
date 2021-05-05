$(function(){

// -----------Menu Toggle--------------------------------//

$('#menu-btn').on('click',function(){
    $('#mainContent').toggleClass('active-cont');
    $('header').toggleClass('active-cont');
    $('#sidebar').toggleClass('active-nav');
    $('#foot').toggleClass('active-cont');
    
   
});

// ------------------Fin Menu Toggle--------------------//

 // -------------Affiche / Cache question Jeffrey--------------//
 $("#jeffrey").on('mouseover',function(){
    $("#search").removeClass('cache');
});
$("#jeffrey").on('mouseout',function(){
    $("#search").addClass('cache');
});

// ------------------Fin Jeffrey-----------------------//

// -----------------------Changement de langue---------//
$('#fr').on('click',function(){
    alert('le site va être traduit en Francais')
});
$('#en').on('click',function(){
    alert('le site va être traduit en Anglais')
});
// -----------------------Changement de langue---------//

// ----------------------Début Chambre------------------------------//
$(".visible").on('click',function(){
    $("#chambreClassique").toggleClass('cache');
});
$(".visible1").on('click',function(){
    $("#chambreConfort").toggleClass('cache');
});
$(".visible2").on('click',function(){
    $("#chambreLuxe").toggleClass('cache');
});
$(".visible3").on('click',function(){
    $("#chambreSuite").toggleClass('cache');
});
// ----------------------Fin Chambre------------------------------//

/// Restaurant

$(".visibler").on('click',function(){
    $("#motChef").toggleClass('cache');
});
$(".visibler1").on('click',function(){
    $("#menuGastro").toggleClass('cache');
});
$(".visibler2").on('click',function(){
    $("#menuBistro").toggleClass('cache');
});

$(".visibler3").on('click',function(){
    $("#caveVin").toggleClass('cache');
});






















});////////////////////////////////////////////////////////////////////////////////////////////////////////