window.addEventListener('load', ()=> {
    navigator.geolocation.getCurrentPosition(posicion => {
        // console.log(posicion);
        let lat = posicion.coords.latitude;
        let lon = posicion.coords.longitude;
    
    
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lang=es&lat=${lat}&lon=${lon}&appid=c0a970a140187fc1cd26fc1738ac0235`
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            let ubicacion = document.getElementById('ubicacion');
            ubicacion.textContent = `Ubicación: ${data.name}`;

            let temperatura = document.getElementById('temperatura');
            temperatura.textContent = `${data.main.temp} °C`;

            let sensacionTermica = document.getElementById('sensacionTermica');
            sensacionTermica.textContent = `${data.main.feels_like} °C`;

            let descripcion = document.getElementById('descripcion');
            // Lo siguiente es para poner la primera letra de la descripcion en mayúscula.
            let stringDesc = data.weather[0].description;
            descripcion.textContent = stringDesc.charAt(0).toUpperCase() + stringDesc.slice(1);

            let velocidadVientoNumero = document.getElementById('VelocidadVientoNumero');
            velocidadVientoNumero.textContent = `${data.wind.speed} m/s`;

            let margenError = document.getElementById('MargenError');
            margenError.textContent = `Margen de Error: ${posicion.coords.accuracy} Mts`;

            let iconoAnimado = document.getElementById('iconoAnimado');

            switch(data.weather[0].main){
                case 'Clear':
                    iconoAnimado.src = 'iconos/Clear.svg';
                    iconoAnimado.style.marginLeft = '-15px';
                    break;
                case 'Drizzle':
                    iconoAnimado.src = 'iconos/Drizzle.svg';
                    break;
                case 'Clouds':
                    iconoAnimado.src = 'iconos/Clouds.svg';
                    break;
                case 'Rain':
                    iconoAnimado.src = 'iconos/Rain.svg';
                    break;
                case 'Snow':
                    iconoAnimado.src = 'iconos/Snow.svg';
                    break;
                case 'Atmosphere':
                    iconoAnimado.src = 'iconos/Weather.svg';
                    break;
                case 'Thunderstorm':
                    iconoAnimado.src = 'iconos/Thunderstorm.svg';
                    break;
            }

        })
        .catch(error => {
            console.log(error);
        });
    });
});