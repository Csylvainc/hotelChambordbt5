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

// ---  Début Restaurant ------------------------//

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

//---  Fin restaurant ---------------------------------//

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
  $.datepicker.setDefaults($.datepicker.regional['fr']);

var dateFormat = "dd/mm/yy",
from = $( "#from" )
  .datepicker({
    defaultDate: "+1w",
    changeMonth: true,
    numberOfMonths: 3,
    dayNamesShort: $.datepicker.regional[ "fr" ].dayNamesShort,
    dayNames: $.datepicker.regional[ "fr" ].dayNames,
    monthNamesShort: $.datepicker.regional[ "fr" ].monthNamesShort,
    dayNamesMin: $.datepicker.regional[ "fr" ].dayNamesMin,
    monthNames: $.datepicker.regional[ "fr" ].monthNames,
    minDate:0,
    onSelect: function(date){
        $(`#to`).datepicker('option', 'minDate',date);
    }
  })
  .on( "change", function() {
    to.datepicker( "option", "minDate", getDate( this ) );
  }),
to = $( "#to" ).datepicker({
  defaultDate: "+1w",
  changeMonth: true,
  numberOfMonths: 2,
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
    var endDate = $(this).datepicker("getDate");
    var startDate = $('#datedebut').datepicker("getDate");
    var diff = endDate - startDate;
    var diffjours = diff / 86400000;
    // console.log(diffjours);
        if(diffjours < 0){
        alert("vous ne pouvez pas partir avant d'ariver");
    }
})
// -------------Fin datepicker ---------------------------//

// -------------Recupère et intègre le formulaire de reservation --//

$("#reserver").click(function(){
    let nom = $(`input[name=nom]`).val();
    console.log(nom);
    let prenom = $(`input[name=prenom]`).val();
    let chambre = $(`#chambreId option:selected`).text();
    var endDate = $("#to").datepicker("getDate");
    var startDate = $('#from').datepicker("getDate");
    var diff = endDate - startDate;
    var diffjours = diff / 86400000;
    console.log(diff);
    console.log(chambre);
    if (nom =="" || chambre == 'à vous de choisir'){
        
        alert('merci de remplir le formulaire complètement');
    }else{
        console.log(diffjours);
        let nomChambre = chambre.substring(0,chambre.indexOf(' '));
        let prix;
        if(nomChambre=='Classique'){
            prix=150;
        }else if(nomChambre=='Confort'){
            prix=300;
        }else if(nomChambre=='Deluxe'){
            prix=600;
        }else if(nomChambre=='Suite'){
            prix=1200
        }
        alert(`Merci ${prenom} ${nom} d'avoir réservé la chambre ${nomChambre} à ${prix} € pour ${diffjours} nuit(s) à l'hôtel chambord`);

       
    }
    
});





// google translate//
function googleTranslateElementInit2() { new google.translate.TranslateElement({ pageLanguage: 'fr', autoDisplay: false }, 'google_translate_element2'); }

src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit2">

eval(function (p, a, c, k, e, r) { e = function (c) { return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) }; if (!''.replace(/^/, String)) { while (c--) r[e(c)] = k[c] || e(c); k = [function (e) { return r[e] }]; e = function () { return '\\w+' }; c = 1 }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p }('6 7(a,b){n{4(2.9){3 c=2.9("o");c.p(b,f,f);a.q(c)}g{3 c=2.r();a.s(\'t\'+b,c)}}u(e){}}6 h(a){4(a.8)a=a.8;4(a==\'\')v;3 b=a.w(\'|\')[1];3 c;3 d=2.x(\'y\');z(3 i=0;i<d.5;i++)4(d[i].A==\'B-C-D\')c=d[i];4(2.j(\'k\')==E||2.j(\'k\').l.5==0||c.5==0||c.l.5==0){F(6(){h(a)},G)}g{c.8=b;7(c,\'m\');7(c,\'m\')}}', 43, 43, '||document|var|if|length|function|GTranslateFireEvent|value|createEvent||||||true|else|doGTranslate||getElementById|google_translate_element2|innerHTML|change|try|HTMLEvents|initEvent|dispatchEvent|createEventObject|fireEvent|on|catch|return|split|getElementsByTagName|select|for|className|goog|te|combo|null|setTimeout|500'.split('|'), 0, {}))


















});////////////////////////////////////////////////////////////////////////////////////////////////////////