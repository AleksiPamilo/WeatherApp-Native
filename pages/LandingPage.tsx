import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import Card from '../components/Card';

type LandingPageProps = {
  data: any;
  fetchWeather: (country: string) => void;
};

const LandingPage: React.FC<LandingPageProps> = ({ data, fetchWeather }) => {
  const date = new Date();

  const currentWeather = data.currentWeather;
  const forecastWeather = data.forecastWeather;

  return (
    <View>
      <Text style={Styles.Date}>{getWeekDay(date)}, {getOrdinalNum(date.getDate())}, {getMonthName(date)}</Text>
      <Text style={Styles.Time}>{date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }).toLowerCase().replace(" ", "")}</Text>
      <Text style={Styles.City}>{currentWeather.name}</Text>
      <View>
        <Image source={{ uri: `https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@4x.png` }} style={Styles.Icon} />
        <Text style={Styles.Temp}>{Math.round(currentWeather.main.temp)}°C</Text>
      </View>
      <View>
        <Text style={Styles.WeekDay}>{getWeekDay(date)}</Text>
        <View style={{ alignItems: "center" }}>
          <View style={Styles.Line} />
        </View>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginHorizontal: 20 }}>
        {forecastWeather.list.slice(0, 5).map((weather: any, index: number) => {
          return (
            <Card
              key={index}
              temperature={Math.round(weather.main.temp)}
              time={getTime(weather.dt)}
              icon={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            />
          )
        }
        )}
      </View>
    </View>
  );
};

const getTime = (time: number) => {
  const date = new Date(time * 1000);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }).toLowerCase().replace(" ", "");
}

function getMonthName(date: Date) {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return months[date.getMonth()];
};

function getWeekDay(date: Date) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[date.getDay()];
};

function getOrdinalNum(n: number) {
  return n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '');
}

const Styles = StyleSheet.create({
  Date: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  },
  Time: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    marginTop: 10,
    fontFamily: "Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  },
  City: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    marginTop: 10,
    fontFamily: "Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  },
  Icon: {
    width: 400,
    height: 400,
    marginTop: -50,
  },
  Temp: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    marginTop: -70,
    fontFamily: "Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  },
  WeekDay: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    marginTop: 100,
    fontFamily: "Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  },
  Line: {
    width: "60%",
    height: 1,
    backgroundColor: "#fff",
    marginTop: 15,
  },
});

export default LandingPage;
