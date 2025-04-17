// Variables globales
let totalClics = 0;
let ingresos = 0;

// Cargar datos al iniciar
window.addEventListener('load', function() {
    // Verificar sesión
    if (!sessionStorage.getItem('loggedIn')) {
        window.location.href = 'login.html';
        return;
    }

    // Solo cargar datos si existe la sesión
    const clicsGuardados = localStorage.getItem('totalClics');
    const ingresosGuardados = localStorage.getItem('ingresos');
    
    if (clicsGuardados) {
        totalClics = parseInt(clicsGuardados);
        document.getElementById('contador-clics').textContent = totalClics;
    }
    
    if (ingresosGuardados) {
        ingresos = parseInt(ingresosGuardados);
        document.getElementById('contador-dinero').textContent = ingresos;
    }
});

// Manejar clics en anuncios - FUNCIONA PARA TODOS LOS ANUNCIOS
document.querySelectorAll('.anuncio').forEach(anuncio => {
    anuncio.addEventListener('click', function() {
        // Verificar sesión
        if (!sessionStorage.getItem('loggedIn')) {
            window.location.href = 'login.html';
            return;
        }

        // Incrementar contadores (funciona igual para cualquier anuncio)
        totalClics++;
        ingresos += 1; // +1 USD por clic en cualquier anuncio
        
        // Actualizar contadores globales
        document.getElementById('contador-clics').textContent = totalClics;
        document.getElementById('contador-dinero').textContent = ingresos;
        
        // Guardar en localStorage
        localStorage.setItem('totalClics', totalClics);
        localStorage.setItem('ingresos', ingresos);
    });
});

// Manejar cierre de sesión - REINICIAR CONTADORES
document.getElementById('logoutBtn').addEventListener('click', function() {
    // Reiniciar contadores
    totalClics = 0;
    ingresos = 0;
    
    // Eliminar datos almacenados
    localStorage.removeItem('totalClics');
    localStorage.removeItem('ingresos');
    
    // Cerrar sesión
    sessionStorage.removeItem('loggedIn');
    
    // Redirigir a login
    window.location.href = 'login.html';
});