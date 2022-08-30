import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';

type CardProps = {
    icon: string;
}

const Card: React.FC<CardProps> = ({ icon }) => {
    return (
        <View>
            <Text style={{ textAlign: 'center', color: "#fff" }}>6am</Text>
            <Image source={{ uri: icon }} style={Styles.Icon} />
            <Text style={{ color: "#fff", marginTop: -10, textAlign: 'center' }}>10°</Text>
        </View>
    );
};

const Styles = StyleSheet.create({
    Date: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center",
        fontFamily: "Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    },
    Icon: {
        width: 50,
        height: 50,
    },
});

export default Card;
