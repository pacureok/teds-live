async function iniciarApp() {
    const errorZone = document.getElementById('error-zone');
    const locationCheck = document.getElementById('location-check');
    const testForm = document.getElementById('test-form');

    try {
        // Simulamos la obtención de IP/Ubicación
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        
        // Si todo sale bien, mostramos el formulario
        locationCheck.classList.add('hidden');
        testForm.classList.remove('hidden');
    } catch (e) {
        // Si hay error, mostramos el GIF por 5 segundos
        locationCheck.classList.add('hidden');
        errorZone.classList.remove('hidden');
        
        setTimeout(() => {
            errorZone.classList.add('hidden');
            testForm.classList.remove('hidden');
        }, 5000);
    }
}

function calcularResultado() {
    const div = document.getElementById('resultado');
    div.innerHTML = `
        <h3>Tu estimación:</h3>
        <p>Basado en estadísticas generales, tu expectativa es de 82 años.</p>
        <p>Causas potenciales de mortalidad a futuro: Factores cardiovasculares, metabólicos y estilo de vida.</p>
    `;
}

window.onload = iniciarApp;
