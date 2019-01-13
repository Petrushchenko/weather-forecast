import { findIndex } from "lodash";

function parserWeather(data) {
  const city = data.city.name;

  const list = data.list.reduce((prev, current) => {
    const {
      dt_txt,
      main: { temp, temp_min, temp_max, humidity },
      weather
    } = current;
    const [date, hour] = dt_txt.split(" ");
    const currentIndex = findIndex(prev, elem => {
      return elem.date === date;
    });

    if (currentIndex > -1) {
      prev[currentIndex].ranges.push({
        hour,
        temp,
        humidity,
        icon: weather[0].icon
      });
      prev[currentIndex].temp_max = Math.max(
        temp_max,
        prev[currentIndex].temp_max
      );
      prev[currentIndex].temp_min = Math.min(
        temp_min,
        prev[currentIndex].temp_min
      );   
    } else {
      prev.push({
        date,
        temp_min,
        temp_max,
        ranges: [
          {
            hour,
            temp,
            humidity,
            icon: weather[0].icon
          }
        ]
      });
    }

    return prev;
  }, []);
  console.log(data, {
    [city]: list
  })
  return {
    [city]: list
  };
}

export default parserWeather;
