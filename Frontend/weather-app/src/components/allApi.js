import axios from "axios";

// Below function is to get current location that returns a promise.

function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        resolve({ latitude, longitude });
      },
      (error) => {
        reject(error);
      }
    );
  });
}

getCurrentLocation()
  .then(({ latitude, longitude }) => {
    // console.log("Latitude:", latitude);
    // console.log("Longitude:", longitude);
  })
  .catch((error) => {
    // console.log("Error occurred:", error);
  });

// Below function is to get weather of current location.

export const currentWeather = async () => {
  const data = await getCurrentLocation().then((res) => {
    return [res.latitude, res.longitude];
  });

  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${data[0]}&lon=${data[1]}&units=metric&appid=19e5bb78eb85f21fbfcbcde9f026af1e`
    )
    .then((res) => {
      return res;
    })
    .catch((err) => null);
};

// Below function is to get Date in date, month and year format;

export const getDate = (time) => {
  // console.log(time);
  const date = new Date(time * 1000);
  const year = date.getFullYear();
  const monthIndex = date.getMonth();
  const month = monthIndex + 1; // Adding 1 because month is zero-based
  const day = date.getDate();
  const dayOfWeek = date.getDay();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const formattedDayOfWeek = daysOfWeek[dayOfWeek];
  const formattedMonth = months[monthIndex];
  let result =
    formattedDayOfWeek + " " + day + ", " + formattedMonth + ", " + year;
  return result;
};

// Below function is to get image url according to weather.

export const getIcon = (code) => {
  return `https://openweathermap.org/img/wn/${code}@2x.png`;
};

// Below function is to get day from date;

const getDay = (date) => {
  const dateObj = new Date(date);
  const dayOfWeek = dateObj.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
  });
  // console.log(dayOfWeek.split(" "))
  return dayOfWeek.split(" ");
};

// Below function is to get weather forecast for 5 days location provided.

export const weatherForecast = async (name) => {
  let url = "";
  if (!name) {
    const data = await getCurrentLocation().then((res) => {
      return [res.latitude, res.longitude];
    });
    url = `https://api.openweathermap.org/data/2.5/forecast?lat=${data[0]}&lon=${data[1]}&units=metric&appid=19e5bb78eb85f21fbfcbcde9f026af1e`;
  } else {
    url = `https://api.openweathermap.org/data/2.5/forecast?q=${name}&units=metric&appid=19e5bb78eb85f21fbfcbcde9f026af1e`;
  }
  return (
    axios
      .get(url)
      .then((res) => {
        const forecastList = res.data.list;

        const filteredForecast = forecastList.filter((dataPoint) => {
          return dataPoint.dt_txt.includes("12:00:00");
        });

        const forecastResults = filteredForecast.map((dataPoint) => {
          const date = dataPoint.dt_txt.slice(0, 10);
          const temperature = dataPoint.main.temp;
          const weatherConditions = dataPoint.weather[0];
          let finalDate = [date.slice(date.length - 2), ...getDay(date)];
  
          return {
            day: finalDate,
            temperature: temperature,
            weatherConditions: weatherConditions,
          };
        });

        return forecastResults;
      })
      .catch((err) => null)
  );
};

// Below function is to get weather for location provided.

export const getWeatherBySearch = (name) => {
  // console.log(name);
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=19e5bb78eb85f21fbfcbcde9f026af1e`
    )
    .then((res) => {
      return res;
    })
    .catch((err) =>null);
};
