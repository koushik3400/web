function displaySongs(songList){
    songList = songList.split('\n');
    var songNode = document.getElementById('songs');
    songNode.innerHTML = "";
    for (var i=0; i<songList.length; ++i){
      songNode.innerHTML += songList[i] + "<br>"
    }
  }
  
  function displayFiles(id){
    var requestObj = new XMLHttpRequest();
    requestObj.onreadystatechange = function(){
      if (requestObj.readyState==4 && requestObj.status==200){
        displaySongs(requestObj.response);
      }
    }
    filename = document.getElementById(id).value;
    if (filename != "none"){ 
      requestObj.open('get', filename+".txt");
      requestObj.send(); 
    }
  }