jQuery(function(){
  const url = 'https://api.jikan.moe/v4/top/anime?type=ona';

  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
      obj = JSON.parse(xhr.responseText);
      for(let i = 0; i < obj.data.length; i++){
        console.log(obj.data[i].images.jpg.image_url);
      }
    }
  }
  
  xhr.open('GET', url);
  xhr.send();
});