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

// --------------------- Début Restaurant ------------------------//

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

//--------------------- Fin restaurant ---------------------------------//

// ---------------------Reservation---------------------------//


// date picker------------//
$.datepicker.regional['fr'] = {
    closeText: 'Fermer',
    prevText: '&#x3c;Préc',
    nextText: 'Suiv&#x3e;',
    currentText: 'Aujourd\'hui',
    monthNames: ['Janvier','Fevrier','Mars','Avril','Mai','Juin',
    'Juillet','Aout','Septembre','Octobre','Novembre','Decembre'],
    monthNamesShort: ['Jan','Fev','Mar','Avr','Mai','Jun',
    'Jul','Aou','Sep','Oct','Nov','Dec'],
    dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
    dayNamesShort: ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],
    dayNamesMin: ['Di','Lu','Ma','Me','Je','Ve','Sa'],
    weekHeader: 'Sm',
    dateFormat: 'dd-mm-yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: '',
    minDate: 0,
    maxDate: '+12M +0D',
    numberOfMonths: 2,
    showButtonPanel: true
    };
    $( "#datepicker" ).datepicker( "option",
    $.datepicker.regional['fr'] );
//   $.datepicker.setDefaults($.datepicker.regional['fr']);

var dateFormat = "mm/dd/yy",
from = $( "#from" )
  .datepicker({
    defaultDate: "+1w",
    changeMonth: true,
    numberOfMonths: 3,
    dayNamesShort: $.datepicker.regional[ "fr" ].dayNamesShort,
    dayNames: $.datepicker.regional[ "fr" ].dayNames,
    monthNamesShort: $.datepicker.regional[ "fr" ].monthNamesShort,
    dayNamesMin: $.datepicker.regional[ "fr" ].dayNamesMin,
    monthNames: $.datepicker.regional[ "fr" ].monthNames
  })
  .on( "change", function() {
    to.datepicker( "option", "minDate", getDate( this ) );
  }),
to = $( "#to" ).datepicker({
  defaultDate: "+1w",
  changeMonth: true,
  numberOfMonths: 3,
  dayNamesShort: $.datepicker.regional[ "fr" ].dayNamesShort,
  dayNames: $.datepicker.regional[ "fr" ].dayNames,
  monthNamesShort: $.datepicker.regional[ "fr" ].monthNamesShort,
  dayNamesMin: $.datepicker.regional[ "fr" ].dayNamesMin,
  monthNames: $.datepicker.regional[ "fr" ].monthNames
})
.on( "change", function() {
  from.datepicker( "option", "maxDate", getDate( this ) );
});

function getDate( element ) {
var date;
try {
  date = $.datepicker.parseDate( dateFormat, element.value );
} catch( error ) {
  date = null;
}

return date;
}
// $('#datedebut').datepicker( $.datepicker.regional[ "fr" ] );
// --------Test Date fin apres date debut----------------//
$('#datefin').on('change',function(){
    let endDate = $(this).datepicker("getDate");
    let startDate = $('#datedebut').datepicker("getDate");
    let diff = endDate - startDate;
    let diffjours = diff / 86400000;
    console.log(diffjours);
        if(diffjours < 0){
        alert("vous ne pouvez pas partir avant d'ariver");
    }
})
// -------------Fin datepicker ---------------------------//
























});////////////////////////////////////////////////////////////////////////////////////////////////////////