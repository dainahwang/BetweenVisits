function changeContent(imageFile) {
    document.getElementById('displayedImage').src = imageFile;
  
  }

  function changeContent(imageFile) {
    document.getElementById('displayedImage').src = imageFile;
    
    setTimeout(() => {
        document.getElementById('displayedImage').src = '';
    }, 3000); // volta depois de 3 segundos
}