// script.js
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Validación simple (en prototipo real usarías autenticación real)
    const username = this.elements[0].value;
    const password = this.elements[1].value;
    
    if(username && password) {
        // Guardar en sessionStorage para simular sesión
        sessionStorage.setItem('loggedIn', 'true');
        // Redirigir a página principal
        window.location.href = 'index.html';
    } else {
        alert('Por favor ingrese usuario y contraseña');
    }
});