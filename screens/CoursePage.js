import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CoursePage = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Text>Welcome to course page!</Text>
        </View>
    );
}

export default CoursePage;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});