/*
 * sample-5.js
 * 吹き出し（情報ウィンドウ）を出す | Lopan.jp
 */



function initialize() {

  var currentwindow = null;

  var latlng = new google.maps.LatLng(38.678273561664, 141.4537811279297);
  var gmark = [];

  var myOptions = {
    zoom: 12,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);

  var infolist = [
    ["ニュー泊崎荘","r1","141.5614757","38.6992055","0226-36-3315"],
    ["民宿　清観荘","r2","141.5590727","38.7055659","0226-36-2414"],
    ["平成の森　宿泊施設","r3","141.522305","38.7169443","0226-36-3115"],
    ["農漁家民宿　やすらぎ","r4","141.5227051","38.7109226","0226-36-3670"],
    ["校舎の宿　さんさん館","r5","141.4241095","38.7184107","0226-46-5633"],
    ["南三陸まなびの里　いりやど","r6","141.409184","38.7016757","0226-25-9501"],
    ["民宿　下道荘","r7","141.467639","38.6766107","0226-46-6318"],
    ["民宿　なか","r8","141.4685862","38.6763801","0226-46-6309"],
    ["南三陸ホテル観洋","r9","141.4475776","38.659651","0226-46-2442"],
    ["民宿　津の宮荘","r10","141.4815562","38.6424979","0226-46-9354"],
    ["民宿　ながしず荘","r11","141.5089734","38.6373437","0226-46-9248"],
    ["南三陸 竜巳や","b1","141.5304988","38.7190638","0226-25-9377"],
    ["山内鮮魚店　静江館","b2","141.4638915","38.6853097","0226-46-2159"],
    ["創菜旬魚　はしもと","b3","141.437473297119","38.6865817271667","0226-29-6343"],
    ["松原食堂","b4","141.437473297119","38.6865817271667","0226-46-2433"],
    ["季節料理　志のや","b5","141.437473297119","38.6865817271667","0226-47-1688"],
    ["豊楽食堂","b6","141.437473297119","38.6865817271667","0226-46-3512"],
    ["弁慶鮨","b7","141.437473297119","38.6865817271667","0226-46-5141"],
    ["三陸味処　田中前","b8","141.437473297119","38.6865817271667","0226-25-9937"],
    ["南三陸観洋　レストランシーサイド","b9","141.4475776","38.659651","0226-46-2442"],
    ["オーイング菓子工房　Ryo","b10","141.4768621","38.6447586","090-9743-1333"],
    ["（株）三浦石油","gs","141.5164388","38.7142166","0226-36-2018"],
    ["（有）丸三石油","gs","141.5555838","38.7082878","0226-36-2510"],
    ["東京屋商事","gs","141.5566586","38.7135068","0226-36-2410"],
  ];

  function mapgenerate(i){
    var data = infolist[i];
    var latlng = new google.maps.LatLng(data[3], data[2]);
    var content = '<div id="infoWindow">' +
      '<h1>'+data[0]+'</h1>' +
      '<p> 電話番号　:　'+data[4]+'</p>' +
      '</div>';

    var infowindow = new google.maps.InfoWindow({
      content: content
    });

    var image = 'pin/'+ data[1] +'.png';

    var lopanMarker = new google.maps.Marker({
      position: latlng,
      map: map,
      icon: image,
      title: data[0]
    });

    google.maps.event.addListener(lopanMarker, 'click', function() {

      if(currentwindow){
        currentwindow.close();
      }
      infowindow.open(map, lopanMarker);
      var open = i;
      currentwindow = infowindow;
    });

  }



  for ( var i = 0; i < infolist.length; ++i )  {
    mapgenerate(i);
  }


}

function map_click() {
  infowindow.close();
}

google.maps.event.addDomListener(window, 'load', initialize);
