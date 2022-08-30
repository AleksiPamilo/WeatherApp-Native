import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import Card from '../components/Card';

type LandingPageProps = {
  data: any;
  fetchData: (country: string) => void;
};

const LandingPage: React.FC<LandingPageProps> = ({ data, fetchData }) => {
  const date = new Date();

  console.log(data.name);

  return (
    <View>
      <Text style={Styles.Date}>{getWeekDay(date)}, {getOrdinalNum(date.getDate())}, {getMonthName(date)}</Text>
      <Text style={Styles.Time}>{date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }).toLowerCase().replace(" ", "")}</Text>
      <Text style={Styles.City}>{data.name}</Text>
      <View>
        <Image source={{ uri: `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png` }} style={Styles.Icon} />
        <Text style={Styles.Temp}>{Math.round(data.main.temp)}°C</Text>
      </View>
      <View>
        <Text style={Styles.WeekDay}>{getWeekDay(date)}</Text>
        <View style={{ alignItems: "center" }}>
          <View style={Styles.Line} />
        </View>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginHorizontal: 20 }}>
        <Card icon={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} />
        <Card icon={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} />
        <Card icon={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} />
        <Card icon={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} />
      </View>
    </View>
  );
};

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
