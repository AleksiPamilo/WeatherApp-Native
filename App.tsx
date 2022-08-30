import React, { useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { getWeather } from './api/openWeatherMap';
import LandingPage from './pages/LandingPage';

const App = () => {
  const [data, setData] = React.useState<any>(null);

  useEffect(() => { getWeather("Texas").then((data) => setData(data)) }, []);

  const fetchWeather = (country: string) => {
    getWeather(country).then(setData);
  };

  return (
    <SafeAreaView style={Styles.Container}>
      {
        data
          ? <LandingPage data={data} fetchWeather={fetchWeather} />
          : <Text style={Styles.Loading}>Loading...</Text>
      }
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#344E71",
    paddingTop: 25,
  },
  Loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: 32,
  },
});

export default App;
