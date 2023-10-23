window.onload = function() {
    const data = new Date();
    document.getElementById('data').innerText = data.toLocaleDateString();
    document.getElementById('hora').innerText = data.toLocaleTimeString();
};
