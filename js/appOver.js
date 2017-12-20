document.getElementById('npsStudent');

function nps() {
  var npsS = data['AQP']['2016-2']['ratings'];
  for (var k = 0; k < nps.length; k++){
    var npsprom = npsS[k]['promoters'];
    var npspassive = npsS[k]['passive'];
    var npsdetrac = npsS[k]['detractors'];

    var boxG = document.getElementById('general');
    var 

  }
   console.log(npsS);
   console.log(npsprom);
   console.log(npspassive);
   console.log(npsdetrac);
}
