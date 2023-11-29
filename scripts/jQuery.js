$("#invitation").hide();

$("#see-invitation").on("click", () => {
    $("#invitation").slideToggle("slow");
})

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?q=Vancouver,ca&exclude=minutely,hourly,daily,alerts&units=metric&APPID={your-api-key}",
    success: function(result){
        $("#weather-icon").html(`<img src="https://openweathermap.org/img/wn/04n@2x.png" alt="weather icon" />`);
        $("#weather").html(`<a href="https://weather.gc.ca/city/pages/bc-74_metric_e.html">Current temperature: <strong>${result.main.temp}°C</strong></a>`);
    }
})