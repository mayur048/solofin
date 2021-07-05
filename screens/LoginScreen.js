import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton'; 
import { ScrollView } from 'react-native-gesture-handler';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
      <ScrollView>
        <View style={styles.container}>
            <Image
                source={require('../assets/adaptive-icon.png')}
                style={styles.logo}
            />
            <Text style={styles.text}>SoloFin</Text>
            <FormInput 
              labelValue={email}
              onChangeText={(userEmail) => setEmail(userEmail)}
              placeholderText = "Email"
              iconType ="user"
              keyboardType ="email-address"
              autoCapitalize ="none"
              autoCorrect ={false}
            />

            <FormInput 
              labelValue={password}
              onChangeText={(userpassword) => setPassword(userpassword)}
              placeholderText = "Password"
              iconType ="lock"
              secureTextEntry={true}
            />

            <FormButton 
              buttonTitle = "Sign In"
              onPress={() => navigation.navigate('Home')}
            />

            <TouchableOpacity style={styles.forgotButton} onPress={()=>{}}>
                <Text style={styles.navButton}>Forgot Password?</Text>
            </TouchableOpacity>

            <SocialButton 
              buttonTitle="Sign In with Facebook"
              btnType="facebook"
              color="#4867aa"
              backgroundColor="#e6eaf4"
              onPress={()=> {}}
            />

            <SocialButton
              buttonTitle="Sign In with Google"
              btnType="google"
              color="#de4d41"
              backgroundColor="#f5e7ea"
              onPress={() => {}}
            />

            <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.navButton}>Don't have an account? Create here</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
      )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50,
        alignItems: 'center'
      },
      logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
      },
      text: {
        fontFamily: 'Helvicta',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
      },
      navButton: {
        fontFamily: 'Helvicta',
        marginTop: 15,
      },
      forgotButton: {
        marginVertical: 35,
      },
      navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Helvicta',
      },
});
