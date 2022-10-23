// https://www.youtube.com/watch?v=nGVoHEZojiQ
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })

    .getThreeDayforecast()
    .then(function(response)
    {
      for(i=0; i<3; i++){// on récupère les inforamations des 3 prochains jours
        const main = data.list[i].weather[0].main;
        const description = data.list[i].weather[0].description;
        const temp = data.list[i].temp.day;
        const icon = apiWeather.getHTMLElementFromIcon(data.list[i].weather[0].icon);

        document.getElementById('day'+(i+2)+'-forecast-main').innerHTML = main;
        document.getElementById('day'+(i+2)+'-forecast-more-info').innerHTML = description;
        document.getElementById('day'+(i+2)+'-icon-weather-container').innerHTML = icon;
        document.getElementById('day'+(i+2)+'-forecast-temp').innerHTML = `${temp}°C`;
      }
  
    })
   


    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}
function text()
{
  var input = document.getElementById("city-input").value;
}