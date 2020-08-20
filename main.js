const input = document.getElementById('upload');
const link = document.getElementById('link');
const attackchoice = document.getElementById('attackchoice').value;
const sansname = document.getElementById("sansname").value;
let objectURL;

input.addEventListener('change', function () {
  if (objectURL) {
    // revoke the old object url to avoid using more memory than needed
    URL.revokeObjectURL(objectURL);  
  }

  const file = this.files[0];
  objectURL = URL.createObjectURL(file);

  link.download = sansname + attackchoice; // this name is used when the user downloads the file
  link.href = objectURL;
  link.class = download;
});