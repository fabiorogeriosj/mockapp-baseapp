

var mockapp = {};
mockapp.isDevice = function(){
  return navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/);
};
mockapp.screenWidth = window.screen.availWidth;
mockapp.screenHeight = window.screen.availHeight;
mockapp.parseConfig = function (o, d){
  for(i in o){
    if(d[i] != o[i]){
      d[i] = o[i];
    }
  }
  return d;
}

document.addEventListener("deviceready", function(){
  mockapp.onReady=true;
}, false);
document.addEventListener("pause", function(){
  mockapp.onPause=true;
}, false);
document.addEventListener("resume", function(){
  mockapp.onResume=true;
}, false);
document.addEventListener("backbutton", function(){
  mockapp.onBackKeyDown=true;
}, false);
document.addEventListener("menubutton", function(){
  mockapp.onMenuKeyDown=true;
}, false);
document.addEventListener("searchbutton", function(){
  mockapp.onSearchKeyDown=true;
}, false);
document.addEventListener("volumedownbutton", function(){
  mockapp.onVolumeDownKeyDown=true;
}, false);
document.addEventListener("volumeupbutton", function(){
  mockapp.onVolumeUpKeyDown=true;
}, false);
