document.getElementById('showFlowersBtn').addEventListener('click', function() {
    document.getElementById('flowersContainer').style.display = 'block';
    document.getElementById('messageContainer').style.display = 'block';
    this.style.display = 'none'; // Hide the button after clicking
});
