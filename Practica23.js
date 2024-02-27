function Pro_lengt45() {
  var L1 = parseFloat(document.getElementById("L1").value);
  var L2 = parseFloat(document.getElementById("L2").value);
  var L3 = parseFloat(document.getElementById("L3").value);
  var L4 = parseFloat(document.getElementById("L4").value);
    var prolenT = ((L1 + L2 + L3 + L4) / 4) * 0.45;
    document.getElementById("TRI45L").value = prolenT.toFixed(2);
  }


function Pro_lengtg45() {
  var L5 = parseFloat(document.getElementById("L5").value);
  var L6 = parseFloat(document.getElementById("L6").value);
  var L7 = parseFloat(document.getElementById("L7").value);
  var L8 = parseFloat(document.getElementById("L8").value);
    var prolenTG = ((L5 + L6 + L7 + L8) / 4) * 0.45;
    document.getElementById("TRI45LG").value = prolenTG.toFixed(2);
  
}
  function Prom_leng90(){
      var P1= document.getElementById("TRI45L").value;
      var P2 = document.getElementById("TRI45LG").value;
      var prolen90 =(parseFloat(P1)+parseFloat(P2));
      document.getElementById("TRI90LT").value=prolen90.toFixed(2);
  }
  
  function Expor_leng() {
    var examen = parseFloat(document.getElementById("EXL").value);
    var Promexl = parseFloat(examen * 0.05);
    document.getElementById("EXL5%").value = Promexl.toFixed(2);
}
function Proye_leng() {
  var proyl = parseFloat(document.getElementById("PROL").value);
    var Promyl = parseFloat(proyl * 0.05);
    document.getElementById("PROL5%").value = Promyl.toFixed(2);
  
}
function Tri_leng(){
    var prolen90= document.getElementById("TRI90LT").value;
    var Promexl= document.getElementById("EXL5%").value;
    var Promyl= document.getElementById("PROL5%").value;
    var tri_l = (parseFloat(prolen90) + parseFloat(Promexl) + parseFloat(Promyl));
    document.getElementById("PROLT").value = tri_l.toFixed(2);
}

function eq_leng(){
    var TRI = parseFloat(document.getElementById("PROLT").value);

    if (TRI >= 9) {
        document.getElementById("ECLL").value = "DAR";
    } else if (TRI < 9 && TRI >= 7) {
        document.getElementById("ECLL").value = "AAR";
    } else {
        document.getElementById("ECLL").value = "PAAR";
    }
}



function Pro_matet45() {
  var M1 = parseFloat(document.getElementById("M1").value);
  var M2 = parseFloat(document.getElementById("M2").value);
  var M3 = parseFloat(document.getElementById("M3").value);
  var M4 = parseFloat(document.getElementById("M4").value);
    var prolemateT = ((M1 + M2 + M3 + M4) / 4) * 0.45;
    document.getElementById("TRI45M").value = prolemateT.toFixed(2);
  
}

function Pro_mateg45() {
  var M5 = parseFloat(document.getElementById("M5").value);
  var M6 = parseFloat(document.getElementById("M6").value);
  var M7 = parseFloat(document.getElementById("M7").value);
  var M8 = parseFloat(document.getElementById("M8").value);
    var promateTG = ((M5 + M6 + M7 + M8) / 4) * 0.45;
    document.getElementById("TRI45MG").value = promateTG.toFixed(2);

}
function Prom_mate90(){
    var MP1= document.getElementById("TRI45M").value;
    var MP2 = document.getElementById("TRI45MG").value;
    var promate90 =(parseFloat(MP1)+parseFloat(MP2));
    document.getElementById("TRI90M").value=promate90.toFixed(2);
}

function Expor_mate() {
  var examate = parseFloat(document.getElementById("EXM").value);
    var Promexlmate = parseFloat(examate * 0.05);
    document.getElementById("EXM5%").value = Promexlmate.toFixed(2);
}

function Proye_mate() {
  var proyM = parseFloat(document.getElementById("PROM").value);
    var PromyM = parseFloat(proyM * 0.05);
    document.getElementById("PROM5%").value = PromyM.toFixed(2);
  
}
function Tri_mate(){
  var promate90= document.getElementById("TRI90M").value;
  var Promexlmate= document.getElementById("EXM5%").value;
  var PromyM= document.getElementById("PROM5%").value;
  var tri_M = (parseFloat(promate90) + parseFloat(Promexlmate) + parseFloat(PromyM));
  document.getElementById("PROMT").value = tri_M.toFixed(2);
}

function eq_mate(){
  var TRI = parseFloat(document.getElementById("PROMT").value);

  if (TRI >= 9) {
      document.getElementById("ECLM").value = "DAR";
  } else if (TRI < 9 && TRI >= 7) {
      document.getElementById("ECLM").value = "AAR";
  } else {
      document.getElementById("ECLM").value = "PAAR";
  }
}
  



function Pro_histt45() {
  var H1 = parseFloat(document.getElementById("H1").value);
  var H2 = parseFloat(document.getElementById("H2").value);
  var H3 = parseFloat(document.getElementById("H3").value);
  var H4 = parseFloat(document.getElementById("H4").value);
    var prohistT = ((H1 + H2 + H3 + H4) / 4) * 0.45;
    document.getElementById("TRI45H").value = prohistT.toFixed(2);
}

function Pro_histg45() {
  var H5 = parseFloat(document.getElementById("H5").value);
  var H6 = parseFloat(document.getElementById("H6").value);
  var H7 = parseFloat(document.getElementById("H7").value);
  var H8 = parseFloat(document.getElementById("H8").value);
    var prohistTG = ((H5 + H6 + H7 + H8) / 4) * 0.45;
    document.getElementById("TRI45GH").value = prohistTG.toFixed(2);
}
function Prom_hist90(){
    var HP1= document.getElementById("TRI45H").value;
    var HP2 = document.getElementById("TRI45GH").value;
    var prohist90 =(parseFloat(HP1)+parseFloat(HP2));
    document.getElementById("TRI90H").value=prohist90.toFixed(2);
}

function Expor_hist() {
  var exahist = parseFloat(document.getElementById("EXH").value);
    var Promexlhist = parseFloat(exahist * 0.05);
    document.getElementById("EXH5%").value = Promexlhist.toFixed(2);
  
}

function Proye_hist() {
  var proyH = parseFloat(document.getElementById("PROH").value);
    var PromyH = parseFloat(proyH * 0.05);
    document.getElementById("PROH5%").value = PromyH.toFixed(2);
  
}
function Tri_hist(){
  var prohist90= document.getElementById("TRI90H").value;
  var Promexlhist= document.getElementById("EXH5%").value;
  var PromyH= document.getElementById("PROH5%").value;
  var tri_H = (parseFloat(prohist90) + parseFloat(Promexlhist) + parseFloat(PromyH));
  document.getElementById("PROHT").value = tri_H.toFixed(2);
}

function eq_hist(){
  var TRI = parseFloat(document.getElementById("PROHT").value);

  if (TRI >= 9) {
      document.getElementById("ECLH").value = "DAR";
  } else if (TRI < 9 && TRI >= 7) {
      document.getElementById("ECLH").value = "AAR";
  } else {
      document.getElementById("ECLH").value = "PAAR";
  }
}
 


function Pro_BIOLt45() {
  var B1 = parseFloat(document.getElementById("B1").value);
  var B2 = parseFloat(document.getElementById("B2").value);
  var B3 = parseFloat(document.getElementById("B3").value);
  var B4 = parseFloat(document.getElementById("B4").value);
    var proBIOLtT = ((B1 + B2 + B3 + B4) / 4) * 0.45;
    document.getElementById("TRI45B").value = proBIOLtT.toFixed(2);
}

function Pro_BIOLG45() {
  var B5 = parseFloat(document.getElementById("B5").value);
  var B6 = parseFloat(document.getElementById("B6").value);
  var B7 = parseFloat(document.getElementById("B7").value);
  var B8 = parseFloat(document.getElementById("B8").value);
    var proBIOLTG = ((B5 + B6 + B7 + B8) / 4) * 0.45;
    document.getElementById("TRI45GB").value = proBIOLTG.toFixed(2);
}
function Prom_biol90(){
    var BP1= document.getElementById("TRI45B").value;
    var BP2 = document.getElementById("TRI45GB").value;
    var probiol90 =(parseFloat(BP1)+parseFloat(BP2));
    document.getElementById("TRI90B").value=probiol90.toFixed(2);
}

function Expor_BIOL() {
  var exabiol = parseFloat(document.getElementById("EXB").value);
    var Promexbiol = parseFloat(exabiol * 0.05);
    document.getElementById("EXB5%").value = Promexbiol.toFixed(2);
}

function Proye_biol() {
  var proyB = parseFloat(document.getElementById("PROB").value);
    var PromyB = parseFloat(proyB * 0.05);
    document.getElementById("PROB5%").value = PromyB.toFixed(2);
}
function Tri_biol(){
  var probiol90= document.getElementById("TRI90B").value;
  var Promexbiol= document.getElementById("EXB5%").value;
  var PromyB= document.getElementById("PROB5%").value;
  var tri_B = (parseFloat(probiol90) + parseFloat(Promexbiol) + parseFloat(PromyB));
  document.getElementById("PROBT").value = tri_B.toFixed(2);
}

function eq_biol(){
  var TRI = parseFloat(document.getElementById("PROBT").value);

  if (TRI >= 9) {
      document.getElementById("ECLB").value = "DAR";
  } else if (TRI < 9 && TRI >= 7) {
      document.getElementById("ECLB").value = "AAR";
  } else {
      document.getElementById("ECLB").value = "PAAR";
  }
}


function Pro_ECAt45() {
  var E1 = parseFloat(document.getElementById("E1").value);
  var E2 = parseFloat(document.getElementById("E2").value);
  var E3 = parseFloat(document.getElementById("E3").value);
  var E4 = parseFloat(document.getElementById("E4").value);
     var proECAtT = ((E1 + E2 + E3 + E4) / 4) * 0.45;
    document.getElementById("TRI45E").value = proECAtT.toFixed(2);
}

function Pro_ECAG45() {
  var E5 = parseFloat(document.getElementById("E5").value);
  var E6 = parseFloat(document.getElementById("E6").value);
  var E7 = parseFloat(document.getElementById("E7").value);
  var E8 = parseFloat(document.getElementById("E8").value);
    var proECATG = ((E5 + E6 + E7 + E8) / 4) * 0.45;
    document.getElementById("TRI45GE").value = proECATG.toFixed(2);
}
function Prom_ECA90(){
    var EP1= document.getElementById("TRI45E").value;
    var EP2 = document.getElementById("TRI45GE").value;
    var proECA90 =(parseFloat(EP1)+parseFloat(EP2));
    document.getElementById("TRI90E").value=proECA90.toFixed(2);
}

function Expor_ECA() {
  var exaECA = parseFloat(document.getElementById("EXE").value);
    var PromexECA = parseFloat(exaECA * 0.05);
    document.getElementById("EXE5%").value = PromexECA.toFixed(2);
}

function Proye_ECA() {
  var proyE = parseFloat(document.getElementById("PROE").value);
    var PromyE = parseFloat(proyE * 0.05);
    document.getElementById("PROE5%").value = PromyE.toFixed(2);
}
function Tri_ECA(){
  var proECA90= document.getElementById("TRI90E").value;
  var PromexECA= document.getElementById("EXE5%").value;
  var PromyE= document.getElementById("PROE5%").value;
  var tri_E = (parseFloat(proECA90) + parseFloat(PromexECA) + parseFloat(PromyE));
  document.getElementById("PROET").value = tri_E.toFixed(2);
}

function eq_ECA(){
  var TRI = parseFloat(document.getElementById("PROET").value);

  if (TRI >= 9) {
      document.getElementById("ECLE").value = "DAR";
  } else if (TRI < 9 && TRI >= 7) {
      document.getElementById("ECLE").value = "AAR";
  } else {
      document.getElementById("ECLE").value = "PAAR";
  }
}



function Pro_EDUt45() {
  var F1 = parseFloat(document.getElementById("F1").value);
  var F2 = parseFloat(document.getElementById("F2").value);
  var F3 = parseFloat(document.getElementById("F3").value);
  var F4 = parseFloat(document.getElementById("F4").value);
    var proEDUtT = ((F1 + F2 + F3 + F4) / 4) * 0.45;
    document.getElementById("TRI45F").value = proEDUtT.toFixed(2);
}

function Pro_EDUG45() {
  var F5 = parseFloat(document.getElementById("F5").value);
  var F6 = parseFloat(document.getElementById("F6").value);
  var F7 = parseFloat(document.getElementById("F7").value);
  var F8 = parseFloat(document.getElementById("F8").value);
    var proEDUTG = ((F5 + F6 + F7 + F8) / 4) * 0.45;
    document.getElementById("TRI45GF").value = proEDUTG.toFixed(2);
}
function Prom_EDU90(){
  var FP1= document.getElementById("TRI45F").value;
  var FP2 = document.getElementById("TRI45GF").value;
  var proEDU90 =(parseFloat(FP1)+parseFloat(FP2));
  document.getElementById("TRI90F").value=proEDU90.toFixed(2);
}

function Expor_EDU() {
  var exaEDU = parseFloat(document.getElementById("EXF").value);
   var PromexEDU = parseFloat(exaEDU * 0.05);
    document.getElementById("EXF5%").value = PromexEDU.toFixed(2);
}

function Proye_EDU() {
  var proyEDU = parseFloat(document.getElementById("PROF").value);
  var PromyEDU = parseFloat(proyEDU * 0.05);
    document.getElementById("PROF5%").value = PromyEDU.toFixed(2);
}
function Tri_EDU(){
var proEDU90= document.getElementById("TRI90F").value;
var PromexEDU= document.getElementById("EXF5%").value;
var PromyEDU= document.getElementById("PROF5%").value;
var tri_F = (parseFloat(proEDU90) + parseFloat(PromexEDU) + parseFloat(PromyEDU));
document.getElementById("PROFT").value = tri_F.toFixed(2);
}

function eq_EDU(){
var TRI = parseFloat(document.getElementById("PROFT").value);

if (TRI >= 9) {
    document.getElementById("ECLF").value = "DAR";
} else if (TRI < 9 && TRI >= 7) {
    document.getElementById("ECLF").value = "AAR";
} else {
    document.getElementById("ECLF").value = "PAAR";
}
}


function Pro_It45() {
  var I1 = parseFloat(document.getElementById("I1").value);
  var I2 = parseFloat(document.getElementById("I2").value);
  var I3 = parseFloat(document.getElementById("I3").value);
  var I4 = parseFloat(document.getElementById("I4").value);
  var proItT = ((I1 + I2 + I3 + I4) / 4) * 0.45;
    document.getElementById("TRI45I").value = proItT.toFixed(2);
}

function Pro_ING45() {
  var I5 = parseFloat(document.getElementById("I5").value);
  var I6 = parseFloat(document.getElementById("I6").value);
  var I7 = parseFloat(document.getElementById("I7").value);
  var I8 = parseFloat(document.getElementById("I8").value);
    var proITG = ((I5 + I6 + I7 + I8) / 4) * 0.45;
     document.getElementById("TRI45GI").value = proITG.toFixed(2);

}
function Prom_IN90(){
  var IP1= document.getElementById("TRI45I").value;
  var IP2 = document.getElementById("TRI45GI").value;
  var proI90 =(parseFloat(IP1)+parseFloat(IP2));
  document.getElementById("TRI90I").value=proI90.toFixed(2);
}

function Expor_IN() {
  var exaI = parseFloat(document.getElementById("EXI").value);
    var PromexI = parseFloat(exaI * 0.05);
    document.getElementById("EXI5%").value = PromexI.toFixed(2);
}

function Proye_IN() {
  var proyI = parseFloat(document.getElementById("PROI").value);
    var PromyI = parseFloat(proyI * 0.05);
    document.getElementById("PROI5%").value = PromyI.toFixed(2);
}
function Tri_IN(){
var proI90= document.getElementById("TRI90I").value;
var PromexI= document.getElementById("EXI5%").value;
var PromyI= document.getElementById("PROI5%").value;
var tri_I = (parseFloat(proI90) + parseFloat(PromexI) + parseFloat(PromyI));
document.getElementById("PROIT").value = tri_I.toFixed(2);
}

function eq_IN(){
var TRI = parseFloat(document.getElementById("PROIT").value);

if (TRI >= 9) {
    document.getElementById("ECLI").value = "DAR";
} else if (TRI < 9 && TRI >= 7) {
    document.getElementById("ECLI").value = "AAR";
} else {
    document.getElementById("ECLI").value = "PAAR";
}
}


function limpiarTodo() {
  // Limpiar casillas de lengua
  document.getElementById("L1").value = "";
  document.getElementById("L2").value = "";
  document.getElementById("L3").value = "";
  document.getElementById("L4").value = "";
  document.getElementById("TRI45L").value = "";
  document.getElementById("L5").value = "";
  document.getElementById("L6").value = "";
  document.getElementById("L7").value = "";
  document.getElementById("L8").value = "";
  document.getElementById("TRI45LG").value = "";
  document.getElementById("TRI90LT").value = "";
  document.getElementById("EXL").value = "";
  document.getElementById("EXL5%").value = "";
  document.getElementById("PROL").value = "";
  document.getElementById("PROL5%").value = "";
  document.getElementById("PROLT").value = "";
  document.getElementById("ECLL").value = "";
  // Limpiar casillas de Matematicas
  document.getElementById("M1").value = "";
  document.getElementById("M2").value = "";
  document.getElementById("M3").value = "";
  document.getElementById("M4").value = "";
  document.getElementById("TRI45M").value = "";
  document.getElementById("M5").value = "";
  document.getElementById("M6").value = "";
  document.getElementById("M7").value = "";
  document.getElementById("M8").value = "";
  document.getElementById("TRI45MG").value = "";
  document.getElementById("TRI90M").value = "";
  document.getElementById("EXM").value = "";
  document.getElementById("EXM5%").value = "";
  document.getElementById("PROM").value = "";
  document.getElementById("PROM5%").value = "";
  document.getElementById("PROMT").value = "";
  document.getElementById("ECLM").value = "";
// Limpiar casillas de Historia
document.getElementById("H1").value = "";
document.getElementById("H2").value = "";
document.getElementById("H3").value = "";
document.getElementById("H4").value = "";
document.getElementById("TRI45H").value = "";
document.getElementById("H5").value = "";
document.getElementById("H6").value = "";
document.getElementById("H7").value = "";
document.getElementById("H8").value = "";
document.getElementById("TRI45GH").value = "";
document.getElementById("TRI90H").value = "";
document.getElementById("EXH").value = "";
document.getElementById("EXH5%").value = "";
document.getElementById("PROH").value = "";
document.getElementById("PROH5%").value = "";
document.getElementById("PROHT").value = "";
document.getElementById("ECLH").value = "";
// Limpiar casillas de Biologia
document.getElementById("B1").value = "";
document.getElementById("B2").value = "";
document.getElementById("B3").value = "";
document.getElementById("B4").value = "";
document.getElementById("TRI45B").value = "";
document.getElementById("B5").value = "";
document.getElementById("B6").value = "";
document.getElementById("B7").value = "";
document.getElementById("B8").value = "";
document.getElementById("TRI45GB").value = "";
document.getElementById("TRI90B").value = "";
document.getElementById("EXB").value = "";
document.getElementById("EXB5%").value = "";
document.getElementById("PROB").value = "";
document.getElementById("PROB5%").value = "";
document.getElementById("PROBT").value = "";
document.getElementById("ECLB").value = "";
// Limpiar casillas de ECA
document.getElementById("E1").value = "";
document.getElementById("E2").value = "";
document.getElementById("E3").value = "";
document.getElementById("E4").value = "";
document.getElementById("TRI45E").value = "";
document.getElementById("E5").value = "";
document.getElementById("E6").value = "";
document.getElementById("E7").value = "";
document.getElementById("E8").value = "";
document.getElementById("TRI45GE").value = "";
document.getElementById("TRI90E").value = "";
document.getElementById("EXE").value = "";
document.getElementById("EXE5%").value = "";
document.getElementById("PROE").value = "";
document.getElementById("PROE5%").value = "";
document.getElementById("PROET").value = "";
document.getElementById("ECLE").value = "";
// Limpiar casillas de EDUCACIO FISICA
document.getElementById("F1").value = "";
document.getElementById("F2").value = "";
document.getElementById("F3").value = "";
document.getElementById("F4").value = "";
document.getElementById("TRI45F").value = "";
document.getElementById("F5").value = "";
document.getElementById("F6").value = "";
document.getElementById("F7").value = "";
document.getElementById("F8").value = "";
document.getElementById("TRI45GF").value = "";
document.getElementById("TRI90F").value = "";
document.getElementById("EXF").value = "";
document.getElementById("EXF5%").value = "";
document.getElementById("PROF").value = "";
document.getElementById("PROF5%").value = "";
document.getElementById("PROFT").value = "";
document.getElementById("ECLF").value = "";
// Limpiar casillas de Ingles
document.getElementById("I1").value = "";
document.getElementById("I2").value = "";
document.getElementById("I3").value = "";
document.getElementById("I4").value = "";
document.getElementById("TRI45I").value = "";
document.getElementById("I5").value = "";
document.getElementById("I6").value = "";
document.getElementById("I7").value = "";
document.getElementById("I8").value = "";
document.getElementById("TRI45GI").value = "";
document.getElementById("TRI90I").value = "";
document.getElementById("EXI").value = "";
document.getElementById("EXI5%").value = "";
document.getElementById("PROI").value = "";
document.getElementById("PROI5%").value = "";
document.getElementById("PROIT").value = "";
document.getElementById("ECLI").value = "";
}
