// Sistema de logs de visitas propio
// Usa CountAPI para almacenar y ipapi.co para geolocalizar

const VISITS_KEY = "musik-visits";
const COUNTER_KEY = "musik-counter";

async function logVisit() {
    try {
        // 1. Obtener geolocalización
        const geoRes = await fetch("https://ipapi.co/json/");
        const geo = await geoRes.json();
        
        // 2. Crear objeto de visita
        const visit = {
            timestamp: new Date().toISOString(),
            path: window.location.pathname,
            user_agent: navigator.userAgent,
            ip: geo.ip || "unknown",
            location: [geo.city, geo.region, geo.country_name].filter(Boolean).join(", ") || "unknown"
        };
        
        // 3. Guardar en CountAPI (últimos 100 registros como JSON)
        // CountAPI permite almacenar hasta 1000 hits por clave
        
        // Incrementar contador total
        await fetch("https://api.countapi.xyz/hit/" + COUNTER_KEY);
        
        // Guardar visita (usamos una clave única con timestamp para no sobrescribir)
        const visitKey = VISITS_KEY + "-" + Date.now();
        await fetch("https://api.countapi.xyz/set/" + visitKey + "?value=1");
        
        // Almacenar los datos de la visita en localStorage para el dashboard
        const stored = JSON.parse(localStorage.getItem("musik-visits-detail") || "[]");
        stored.push(visit);
        // Mantener solo últimos 50
        if (stored.length > 50) stored.splice(0, stored.length - 50);
        localStorage.setItem("musik-visits-detail", JSON.stringify(stored));
        
    } catch (e) {
        console.log("Error logging visit:", e);
    }
}

// Ejecutar al cargar la página
logVisit();
