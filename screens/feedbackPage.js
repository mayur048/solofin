import React, {useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Picker, TextInput} from 'react-native';
import { Avatar, Title } from 'react-native-paper';
import Card from '../components/Card';
import FormButton from '../components/FormButton';

const feedbackPage = () =>{

    const [pickerValue, setPickervalue] = useState('java');

    return(
        <SafeAreaView style={styles.container}>
            <Card>
                <View style={styles.userInfoSection}>
                    <View style={{flexDirection: 'row', marginBottom: 15}}>
                        <Avatar.Image 
                            source={{
                                uri: 'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg',
                            }}
                            size={80}
                        />
                        <View style={{ marginLeft: 20 }}>
                            <Title style={[styles.title, {
                                marginTop: 15,
                                marginBottom: 5,
                            }]}>Mayur Shah</Title>
                            {/* <Caption style={styles.caption}></Caption> */}
                        </View>
                    </View>

                    <View>
                        <Text style={styles.label}>Select Feedback Type:</Text>
                        <View style={styles.picker}>
                            <Picker
                                selectedValue={pickerValue}
                                onValueChange={(itemValue) =>
                                    setPickervalue(itemValue)
                            }>
                                <Picker.Item label="General" value="general" />
                                <Picker.Item label="Complaint" value="complaint" />
                                <Picker.Item label="Suggestion" value="feedback" />
                            </Picker>
                        </View>
                    </View>

                    <View>
                        <Text style={styles.label}>Feedback:</Text>
                        <View style={{marginBottom: 25}}>
                            <TextInput 
                                style={styles.input}
                                autoFocus={false}
                                placeholder="Type Your Feedback"
                                multiline={true}
                                maxLength={200}
                            />
                        </View>
                    </View>
                    
                    <FormButton 
                        buttonTitle = "Submit"
                        onPress={() => alert('Feedback Submitted Successfully!')}
                    />
                </View>
            </Card>
        </SafeAreaView>
    );
}

export default feedbackPage;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 6,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
    },
    picker:{
        fontSize: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'green',
        borderStyle: 'solid',
        marginBottom: 15,
    },
    input:{
        fontSize:14,
        borderBottomColor: 'green',
        borderBottomWidth: 1,
    },
    label:{
        fontWeight: '500',
        fontSize: 18,
        fontFamily: 'Helvicta',
        marginBottom: 5
    }
});