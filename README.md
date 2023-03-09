
# Reservamos SaaS

Challenge para la empresa reservamos.mx , consiste en una pequeña aplicación que consulta el clima de los 7 días próximos de las ciudades que el usuario selecciona.



## Run Locally

Clone the project

```bash
  git clone https://github.com/RicardoMarin7/reservamos_saas.git
```

Go to the project directory

```bash
  cd reservamos_saas
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_CITIES_URL=https://search.reservamos.mx/api/v2/places`

`VITE_WEATHER_URL=https://api.openweathermap.org/data/2.5/onecall`

`VITE_WEATHER_API_KEY=openWeatherApiKey`

