$(() => {
  // const handleData = data => {
  const getWeatherImage = icon => {
    if (icon > 0 && icon < 4) {
      weatherImage = "weatherImages/sunny.jpg";
      return weatherImage;
    }
  };
  console.log(weatherImage)

  function getBlanketMsg(tempMinValue, tempMaxValue, icon) {
    
    if (tempMinValue > 20 && tempMaxValue < 40 && (icon > 0 && icon < 12)) {
      blanketMsg = "a lightweight blanket is recommended";
      return weatherImage;
    }
    if (tempMinValue > 40 && tempMaxValue <  && (icon > 0 && icon < 12)) {
      blanketMsg = "a lightweight blanket is recommended";
      return weatherImage;
    }
  }
  const handleData = () => {
    console.log("before");
    for (let i = 0; i < 1; i++) {
      //hardcoded values to be commented out after
      //when getting api call values
      let icon = 2;
      let iconPhrase = "Mostly sunny";
      let tempMinValue = 47;
      let tempMaxValue = 63;
      ///////////////////////////////////////////
      //create div and div class using the i idix
      //add flex container info to div
      //////////////////////////////////////////
      // let className = "flexWeather" + i;
      const $flexWeather = $("<div>").attr("class", "flexWeather");
      $("#flexWeather").append($flexWeather);
      let weatherImage = getWeatherImage(icon);
      const $weatherImage = $("<img>").attr("src", weatherImage);
      $($flexWeather).append($weatherImage);
      let blanketMsg = getBlanketMsg(tempMinValue, tempMaxValue);
      const weatherMsg =
        "Your current weather is " +
        iconPhrase +
        " with temperatures between " +
        tempMinValue +
        " " +
        tempMaxValue +
        " " +
        blanketMsg;
    }
    // const image = $("<img>").src(complaintType);
    // $(".flexWeather1").append($complaintType);}
    // const icon = data.DailyForecasts[i].Day.Icon;
    // const iconPhrase = data.DailyForecasts[i].Day.IconPhrase;
    // const tempMinValue = data.DailyForecasts[i].Temperature.Minimum.Value;
    // const tempMaxValue = data.DailyForecasts[i].Temperature.Maximum.Value;
    // console.log(
    //   icon + " " + iconPhrase + " " + tempMinValue + " " + tempMValue
    // );
  };
  handleData();

  // const endpoint2 =
  //   "http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=xrwNm8rSHhO5oGzbxzSLF7L6wTw8gubZ&q=06483";
  // //Key; - locationKey
  // $.ajax({ url: endpoint2 }).then(handleData2);
  // const endpoint =
  //   "http://dataservice.accuweather.com/forecasts/v1/daily/5day/2439_PC?apikey=xrwNm8rSHhO5oGzbxzSLF7L6wTw8gubZ";
  // $.ajax({ url: endpoint }).then(handleData);
});
// "DailyForecasts": [
//     {
//       "Date": "2019-10-15T07:00:00-04:00",
//       "EpochDate": 1571137200,
//       "Temperature": {
//         "Minimum": {
//           "Value": 47,
//           "Unit": "F",
//           "UnitType": 18
//         },
//         "Maximum": {
//           "Value": 63,
//           "Unit": "F",
//           "UnitType": 18
//         }
//       },
//       "Day": {
//         "Icon": 2,
//         "IconPhrase": "Mostly sunny",
//         "HasPrecipitation": false
//       },
//       "Night": {
//         "Icon": 34,
//         "IconPhrase": "Mostly clear",
//         "HasPrecipitation": false
//       },
//       "Sources": [
//         "AccuWeather"
//       ],
//       "MobileLink": "http://m.accuweather.com/en/us/seymour-ct/06483/daily-weather-forecast/2439_pc?day=1&lang=en-us",
//       "Link": "http://www.accuweather.com/en/us/seymour-ct/06483/daily-weather-forecast/2439_pc?day=1&lang=en-us"
//     },
//     {
//       "Date": "2019-10-16T07:00:00-04:00",
//       "EpochDate": 1571223600,
//       "Temperature": {
//         "Minimum": {
//           "Value": 48,
//           "Unit": "F",
//           "UnitType": 18
//         },
//         "Maximum": {
//           "Value": 65,
//           "Unit": "F",
//           "UnitType": 18
//         }
//       },
//       "Day": {
//         "Icon": 12,
//         "IconPhrase": "Showers",
//         "HasPrecipitation": true,
//         "PrecipitationType": "Rain",
//         "PrecipitationIntensity": "Moderate"
//       },
//       "Night": {
//         "Icon": 18,
//         "IconPhrase": "Rain",
//         "HasPrecipitation": true,
//         "PrecipitationType": "Rain",
//         "PrecipitationIntensity": "Heavy"
//       },
//       "Sources": [
//         "AccuWeather"
//       ],
//       "MobileLink": "http://m.accuweather.com/en/us/seymour-ct/06483/daily-weather-forecast/2439_pc?day=2&lang=en-us",
//       "Link": "http://www.accuweather.com/en/us/seymour-ct/06483/daily-weather-forecast/2439_pc?day=2&lang=en-us"
//     },
//     {
 