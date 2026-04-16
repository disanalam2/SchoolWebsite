// JavaScript code for handling form submission and embedding CCTV video
window.addEventListener('DOMContentLoaded', function() {
    var cctvForm = document.getElementById('cctv-form');
    var cctvSelect = document.getElementById('cctv-select');
    var cctvContainer = document.getElementById('cctv-container');
 
    cctvForm.addEventListener('submit', function(event) {
       event.preventDefault(); // Prevent form submission
       
       var selectedCctv = cctvSelect.value;
       if (selectedCctv) {
          // Replace the video URLs or embed codes with the actual CCTV video sources
          var videoUrls = {
             '1': 'https://www.youtube.com/embed/cctv1',
             '2': 'https://www.youtube.com/embed/cctv2',
             '3': 'https://www.youtube.com/embed/cctv3',
             // Add more CCTV video URLs up to CCTV 10
          };
 
          var videoUrl = videoUrls[selectedCctv];
          if (videoUrl) {
             cctvContainer.innerHTML = '<iframe src="' + videoUrl + '" frameborder="0" allowfullscreen></iframe>';
          } else {
             cctvContainer.innerHTML = '<p>No CCTV video available for the selected option.</p>';
          }
       } else {
          cctvContainer.innerHTML = '<p>Please select a CCTV option.</p>';
       }
    });
 });
 
   