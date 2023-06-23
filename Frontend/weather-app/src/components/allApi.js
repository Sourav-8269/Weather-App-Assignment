import axios from "axios";

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
      console.log("Latitude:", latitude);
      console.log("Longitude:", longitude);
    })
    .catch((error) => {
      console.log("Error occurred:", error);
    });

export const currentWeather=async ()=>{
    const data=await (getCurrentLocation().then((res)=>{
        console.log(res.latitude,res.longitude)
        return [res.latitude,res.longitude]
    }))
    // console.log(data)
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0]}&lon=${data[1]}&units=metric&appid=19e5bb78eb85f21fbfcbcde9f026af1e`)
    // axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=london&limit=5&units=metric&appid=19e5bb78eb85f21fbfcbcde9f026af1e`)
    .then((res)=>{
        // console.log(res)
        return res;
    })
    .catch((err)=>console.log(err))
}

export const getDate=(time)=>{
    console.log(time)
    const date = new Date(time * 1000);
    const year = date.getFullYear();
    const monthIndex = date.getMonth();
    const month = monthIndex + 1; // Adding 1 because month is zero-based
    const day = date.getDate();
    const dayOfWeek = date.getDay();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const formattedDate = `${year}-${month}-${day}-${dayOfWeek}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const formattedDayOfWeek = daysOfWeek[dayOfWeek];
    const formattedMonth = months[monthIndex];
    // console.log("Date:", formattedDate);
    // console.log("Time:", formattedTime);
    // console.log(formattedDayOfWeek,formattedMonth)
    let result=(formattedDayOfWeek+" "+day+", "+formattedMonth+", "+year)
    return result;
  }

export const getIcon=(code)=>{
    return `https://openweathermap.org/img/wn/${code}@2x.png`
}

const getDay=(date)=>{
    const dateObj = new Date(date);
    const dayOfWeek = dateObj.toLocaleDateString('en-US', { weekday: 'long',month: 'long' });
    // console.log(dayOfWeek.split(" "))
    return(dayOfWeek.split(" ")); 

}

export const weatherForecast=(setForecast)=>{
    return axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=40.7127281&lon=-74.0060152&units=metric&appid=19e5bb78eb85f21fbfcbcde9f026af1e`)
    // axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=london&limit=5&units=metric&appid=19e5bb78eb85f21fbfcbcde9f026af1e`)
    .then((res)=>{
        // console.log(res)
        const forecastList = res.data.list;

        // Step 3: Filter the data
        const filteredForecast = forecastList.filter((dataPoint) => {
          return dataPoint.dt_txt.includes('12:00:00');
        });
        // console.log(filteredForecast)
        const forecastResults = filteredForecast.map((dataPoint) => {
            const date = dataPoint.dt_txt.slice(0, 10);
            const temperature = dataPoint.main.temp;
            const weatherConditions = dataPoint.weather[0];
            let finalDate=[date.slice(date.length-2),...getDay(date)];
            // console.log(finalDate)
            return {
                day: finalDate,
                temperature: temperature,
                weatherConditions: weatherConditions,
              };
        });
        // console.log(forecastResults)
        // setForecast(forecastResults)
        return forecastResults;
    })
    .catch((err)=>console.log(err))
}

// const filteredForecast = forecastList.filter((dataPoint) => {
//     return dataPoint.dt_txt.includes('12:00:00');
//   });