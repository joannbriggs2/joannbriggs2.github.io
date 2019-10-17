$(() => {
  const getWeatherImage = icon => {
    if (icon > 0 && icon < 4) {
      weatherImage = "weatherImages/sunny.jpg";
    } else if (icon >= 4 && icon < 12) {
      weatherImage = "weatherImages/cloudy.jpg";
    } else if (icon >= 12 && icon < 19) {
      weatherImage = "weatherImages/rainy/rain.jpg";
    } else if (icon >= 19 && icon < 24) {
      weatherImage = "weatherImages/snow.png";
    } else if (icon >= 24 && icon < 30) {
      weatherImage = "weatherImages/sleet.jpeg";
    } else if ((icon = 32)) {
      weatherImage = "weatherImages/windy.png";
    } else if (icon >= 30) {
      weatherImage = "weatherImages/whoKnows.jpeg";
      console.log(icon);
    }
    return weatherImage;
  };
  function getCarouselImg(ii, icon) {
    if (icon > 0 && icon < 4) {
      carouselImg = "weatherImages/sunny.jpg";
    } else if (icon >= 4 && icon < 12) {
      carouselImg = "weatherImages/cloudy.jpg";
    } else if (icon >= 12 && icon < 19) {
      let iiImage = "rainyDay" + ii + ".jpg";
      carouselImg = "weatherImages/rainy/" + iiImage;
    } else if (icon >= 19 && icon < 24) {
      carouselImg = "weatherImages/snow.png";
    } else if (icon >= 24 && icon < 30) {
      carouselImg = "weatherImages/sleet.jpeg";
    } else if ((icon = 32)) {
      carouselImg = "weatherImages/windy.png";
    } else if (icon >= 30) {
      carouselImg = "weatherImages/whoKnows.jpeg";
      console.log(icon);
    }
    return carouselImg;
  }
  function carouselFunction(carouselIndex, highestIndex) {
    console.log("carousel function");

    //need to be able to construct carousel images then drill down to image
    //or need to get to a class id that is a number
    //also doesn't seem to be looping?
    // this I need to create 1 image per div.  That image has it's own class ie imgDay1
    //imgDay2.  in this function switch the image for each class.  Maybe keep track of the image
    //by day so day 1 start with image 1 and day 2 start with image 2 so same image is not ]
    //on the screen at the same time.

    const $imageIndx = $(".carousel-image").eq(carouselIndex);
    console.log($imageIndx);
    $imageIndx.css("display", "none");
    // increment image index
    if (carouselIndex < highestIndex) {
      carouselIndex++;
    } else {
      carouselIndex = 0;
    }
    // show current image
    $(".carousel-image")
      .eq(carouselIndex)
      .css("display", "block");
  }
  function getWeatherMsg(date, icon, iconPhrase, tempMinValue, tempMaxValue) {
    let blanketMsg = "Who knows! when in doubt...blanket!";
    if (tempMinValue > 40) {
      blanketMsg = "No blanket today!";
    } else if (tempMaxValue < 20) {
      blanketMsg = "a heavy weight blanket is recommended";
    } else if (tempMinValue >= 20 && tempMaxValue <= 40) {
      if (icon > 0 && icon < 12) {
        blanketMsg = "a lightweight blanket is recommended";
      } else {
        blanketMsg = "a heavyweight blanket is recommended";
      }
    }
    const weatherMsg =
      "Your weather for " +
      date +
      " is " +
      iconPhrase +
      " with temperatures between " +
      tempMinValue +
      " degrees and " +
      tempMaxValue +
      " degrees. " +
      blanketMsg;
    return weatherMsg;
  }
  const handleData = () => {
    // const handleData = data => {
    for (let i = 0; i < 5; i++) {
      //hardcoded values to be commented out after
      //when getting api call values
      //when using hardcoded...handleData has no parms
      let date = "2019-10-15";
      let icon = 13;
      let iconPhrase = "Partly Cloudy";
      let tempMinValue = 47;
      let tempMaxValue = 63;
      ///Format data/////////////////////////////
      // date = date.slice(0, 10);
      // const icon = data.DailyForecasts[i].Day.Icon;
      // let date = data.DailyForecasts[i].Date;
      // const iconPhrase = data.DailyForecasts[i].Day.IconPhrase;
      // const tempMinValue = data.DailyForecasts[i].Temperature.Minimum.Value;
      // const tempMaxValue = data.DailyForecasts[i].Temperature.Maximum.Value;
      //create HTML object///////////////////////////////////////
      const $flexWeather = $("<div>").attr("class", "flexWeather");
      $("#flexWeather").append($flexWeather);
      $($flexWeather).css("display", "flex");
      $($flexWeather).css("flex", "3");
      $($flexWeather).css("margin-bottom", "10px");
      // get emoji
      let weatherImage = getWeatherImage(icon);
      const $weatherImage = $("<img>").attr("src", weatherImage);
      $($flexWeather).append($weatherImage);
      // format the weather message
      $($weatherImage).css("width", "50px");
      $($weatherImage).css("height", "50px");
      let weatherMsg = getWeatherMsg(
        date,
        icon,
        iconPhrase,
        tempMinValue,
        tempMaxValue
      );
      // alert(weatherMsg);
      const $weatherMsg = $("<p>").text(weatherMsg);
      $($flexWeather).append($weatherMsg);
      $($weatherMsg).css("height", "50px");
      $($weatherMsg).css("width", "400px");
      $($weatherMsg).css("margin-left", "5px");
      $($weatherMsg).css("padding-top", "0px");
      //build carousel
      const $carouselDiv = $("<div>").attr("class", "carousel-images");
      $($flexWeather).append($carouselDiv);
      ///create images with class of ii to create carousel effect
      for (let ii = 1; ii < 6; ii++) {
        carouselImg = getCarouselImg(ii, icon);
        const $imgSrc = $("<img>")
          .attr("src", carouselImg)
          .attr("class", "carousel-image");
        // .attr("class", ii);
        $($carouselDiv).append($imgSrc);
        ///initialize to  1st image displays
        if (ii == 1) {
          $imgSrc.css("display", "block");
        } else {
          $imgSrc.css("display", "none");
        }
        //////////////////////////////////////////////////
        //     let highestIndex = $('.carousel-images').children().length - 1;
        //     // next button
        //     let currentImgIndex = 0;
        // $('.next').on('click', () => {
        //     // hide current image
        //     $('.carousel-images').children().eq(currentImgIndex).css('display', 'none');
        //     // increment image index
        //     if (currentImgIndex < highestIndex) {
        //         currentImgIndex++;
        //     }
        //     else {
        //         currentImgIndex = 0;
        //     }

        //     // show current image
        //     $('.carousel-images').children().eq(currentImgIndex).css('display', 'block');
        // })
        ////////////////////////////////////////////////////////
      }
    }
    let carouselIndex = 0;
    let highestIndex = 4;
    alert("set interval");
    let myvar = setInterval(
      carouselFunction(carouselIndex, highestIndex),
      3000
    );
  };

  ///////to handle data when hardcoded values are used for testing
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
