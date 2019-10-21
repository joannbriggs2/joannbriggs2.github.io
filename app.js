// Display 3 images
// hide first current image
// second current image becomes first.
//  third current image becomes second
//  add next thirst image
//
$(() => {
  let city = "";
  let startIndex = 1;
  let midIndex = 2;
  let endIndex = 3;

  function nextCarousel() {
    let highestIndex = $(".flex-main-images").children().length - 2;
    const mainImage = $(".flex-main-images").children();
    $(".flex-main-images")
      .children()
      .eq(startIndex)
      .css("display", "none");
    // increment image indexes

    startIndex = midIndex;
    midIndex = endIndex;
    if (endIndex < highestIndex) {
      endIndex++;
    } else {
      endIndex = 1;
    }
    // show current image
    $(".flex-main-images")
      .children()
      .eq(endIndex)
      .css("display", "block");
  }

  function previousCarousel() {
    highestIndex = $(".flex-main-images").children().length - 2;
    const mainImage = $(".flex-main-images").children();
    $(".flex-main-images")
      .children()
      .eq(endIndex)
      .css("display", "none");
    // increment image indexes

    endIndex = midIndex;
    midIndex = startIndex;
    if (startIndex > 1) {
      startIndex--;
    } else {
      startIndex = highestIndex;
    }
    // show current image
    $(".flex-main-images")
      .children()
      .eq(startIndex)
      .css("display", "block");
  }

  const getWeatherImage = icon => {
    if (icon > 0 && icon < 4) {
      weatherImage = "weatherImages/sunny/sunny.jpeg";
    } else if (icon >= 4 && icon < 12) {
      weatherImage = "weatherImages/cloudy/cloudy.jpg";
    } else if (icon >= 12 && icon < 19) {
      weatherImage = "weatherImages/rainy/rain.jpg";
    } else if (icon >= 19 && icon < 24) {
      weatherImage = "weatherImages/snow/snow.png";
    } else if (icon >= 24 && icon < 30) {
      weatherImage = "weatherImages/sleet/sleet.jpeg";
    } else if (icon == 32) {
      weatherImage = "weatherImages/windy/windy.png";
    } else if (icon >= 30) {
      weatherImage = "weatherImages/whoKnows/whoKnows.jpeg";
    }
    return weatherImage;
  };
  function getCarouselImg(i, icon) {
    if (icon > 0 && icon < 4) {
      let iImage = "sunnyDay" + i + ".jpg";
      carouselImg = "weatherImages/sunny/" + iImage;
    } else if (icon >= 4 && icon < 12) {
      let iImage = "cloudyDay" + i + ".jpg";
      carouselImg = "weatherImages/cloudy/" + iImage;
    } else if (icon >= 12 && icon < 19) {
      let iImage = "rainyDay" + i + ".jpg";
      carouselImg = "weatherImages/rainy/" + iImage;
    } else if (icon >= 19 && icon < 24) {
      let iImage = "snowDay" + i + ".jpg";
      carouselImg = "weatherImages/snow/" + iImage;
    } else if (icon >= 24 && icon < 30) {
      let iImage = "sleetDay" + i + ".jpg";
      carouselImg = "weatherImages/sleet/" + iImage;
    } else if (icon == 32) {
      let iImage = "windyDay" + i + ".jpg";
      carouselImg = "weatherImages/windy/" + iImage;
    } else if (icon >= 30) {
      let iImage = "whoKnowsDay" + i + ".jpg";
      carouselImg = "weatherImages/whoKnows/" + iImage;
    }
    return carouselImg;
  }
  function carouselFunction(imgIndex) {
    const $imageIndx = $(".carousel-image");
    for (i = 0; i <= imgIndex; i++) {
      currentImage = $imageIndx[i].src;
      //get position of .jpg and then decrement by 1 to get the position of the picture number
      let currentIndex = currentImage.indexOf(".jpg");
      currentIndex = currentIndex - 1;
      let stringNum = currentImage.charAt(currentIndex);
      let pictureNum = parseInt(stringNum);
      //determine what the next picture number is.  If picture number is 5 then reset to the beginning of carousel at 1
      let newPictureNum = 0;
      if (pictureNum == imgIndex) {
      } else {
        newPictureNum = pictureNum + 1;
      }
      //when image src retrieved it is coming back with HTTP which is causing
      //the image to not be found,  Need to strip out everthing prior "weatherImages".
      const stripIndex = currentImage.indexOf("weatherImages");
      const strippedImage = currentImage.substring(stripIndex);
      const newImage = strippedImage.replace(pictureNum, newPictureNum);

      $imageIndx.eq(i).attr("src", newImage);
    }
  }
  function getWeatherMsg(
    date,
    icon,
    iconPhrase,
    tempMinValue,
    tempMaxValue,
    city
  ) {
    let blanketMsg = "When in doubt...blanket!";
    if (tempMinValue > 40) {
      blanketMsg = "No blanket today!";
    } else if (tempMaxValue < 20) {
      blanketMsg = "a heavy weight blanket is recommended";
    } else if (tempMinValue >= 20 && tempMaxValue > 40) {
      if (icon > 0 && icon < 12) {
        blanketMsg = "No blanket today!";
      } else {
        blanketMsg = "a lightweight blanket is recommended";
      }
    }
    // console.log(icon, iconPhrase, location);
    const weatherMsg =
      "Your weather for " +
      city +
      " for " +
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
  // const handleData = () => {
  const handleData = data => {
    console.log("enter handle data");
    for (let i = 0; i < 5; i++) {
      // console.log(data);
      //hardcoded values to be commented out after
      //when getting api call values
      //when using hardcoded...handleData has no parms
      // let date = "2019-10-15";
      // let icon = 32;
      // let iconPhrase = "Partly Cloudy";
      // let tempMinValue = 47;
      // let tempMaxValue = 63;
      ///Format data/////////////////////////////
      const icon = data.DailyForecasts[i].Day.Icon;
      let date = data.DailyForecasts[i].Date;
      date = date.slice(0, 10);
      const iconPhrase = data.DailyForecasts[i].Day.IconPhrase;
      const tempMinValue = data.DailyForecasts[i].Temperature.Minimum.Value;
      const tempMaxValue = data.DailyForecasts[i].Temperature.Maximum.Value;
      //create HTML object///////////////////////////////////////
      const $flexWeather = $("<div>").attr("class", "flexWeather");
      $("#flexWeather").append($flexWeather);
      $($flexWeather).css("display", "flex");
      $($flexWeather).css("flex", "3");
      $($flexWeather).css("margin-bottom", "10px");
      $($flexWeather).css("align-items", "center");
      $($flexWeather).css("justify-content", "space-around");

      //build carousel
      const $carouselDiv = $("<div>").attr("class", "carousel-images");
      $($flexWeather).append($carouselDiv);
      carouselImg = getCarouselImg(i, icon);
      const $imgSrc = $("<img>")
        .attr("src", carouselImg)
        .attr("class", "carousel-image");
      $($imgSrc).css("border-radius", "25px");
      $($carouselDiv).append($imgSrc);
      // get emoji
      let weatherImage = getWeatherImage(icon);
      const $weatherImage = $("<img>").attr("src", weatherImage);
      $($flexWeather).append($weatherImage);
      // format the weather message
      $($weatherImage).css("width", "50px");
      $($weatherImage).css("height", "50px");
      $($weatherImage).css("border-radius", "25px");
      console.log(location);
      let weatherMsg = getWeatherMsg(
        date,
        icon,
        iconPhrase,
        tempMinValue,
        tempMaxValue,
        city
      );
      // alert(weatherMsg);
      const $weatherMsg = $("<p>")
        .text(weatherMsg)
        .attr("class", "weatherMsg");
      $($flexWeather).append($weatherMsg);
      // $($weatherMsg).css("margin-left", "5px");
      // $($weatherMsg).css("width", "600px");
      // $($weatherMsg).css("padding-top", "30x");
      // $($weatherMsg).css("padding-left", "10px");
      // $($weatherMsg).css("padding-right", "10px");
      // $($weatherMsg).css("padding-right", "20px");
      // $($weatherMsg).css("font-family", "sans-serif");
      // $($weatherMsg).css("color", "white");
      // $($weatherMsg).css("background-color", "rgb(1, 84, 156)");
      // $($weatherMsg).css("border-radius", "25px");

      ///initialize to  1st image displays
      ///////////////////////////////////////////////////////
      //create carousel images approach 2 - create 1 image per div
      //cascading the image number so same image won't appear on different divs if
      //the weather condition changes - carousel will replace image
      //////////////////////////////////////////////////
      ////////////////////////////////////////////////////////
    }
    let imgIndex = 4;
    setInterval(() => carouselFunction(imgIndex), 3000);
  };

  const handleData2 = data2 => {
    console.log(data2);
    const length = data2.length;
    if (length == 0) {
      alert("Zip Code is Invalied");
      return;
    }

    const locationKey = data2[0].Key;
    city = data2[0].LocalizedName;
    // console.log(location);
    const endpoint = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=xrwNm8rSHhO5oGzbxzSLF7L6wTw8gubZ`;
    $.ajax({ url: endpoint }).then(handleData);
  };

  $(".next").on("click", () => {
    console.log("on click");
    nextCarousel();
  });

  $(".previous").on("click", () => {
    console.log("on click");
    previousCarousel();
  });

  $("form").on("click", "#submit", event => {
    event.preventDefault(); // stops the page from being refreshed
    const inputValue = $("#input-box").val();
    ///////to handle data when hardcoded values are used for testing
    // handleData();

    // use zip input to get location keylocationKey
    const endpoint2 = `http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=xrwNm8rSHhO5oGzbxzSLF7L6wTw8gubZ&q=${inputValue}`;
    $.ajax({ url: endpoint2 }).then(handleData2);
    // $(event).trigger("reset");
  });
});
