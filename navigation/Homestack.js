import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomePage from '../screens/HomePage';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

// import { createDrawerNavigator } from '@react-navigation/drawer';
// import CoursePage from '../screens/CoursePage';

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// const HomePage1 = ({ navigation }) => {
//   return (
//       <Drawer.Navigator initialRouteName="Home">
//           <Drawer.Screen name="Courses" component={CoursePage} />
//           {/* <Drawer.Screen name="Discuss" component={SignupScreen} />
//           <Drawer.Screen name="Profile" component={SignupScreen} />
//           <Drawer.Screen name="Rate" component={SignupScreen} />
//           <Drawer.Screen name="Discuss" component={SignupScreen} />
//           <Drawer.Screen name="Settings" component={SignupScreen} /> */}
//       </Drawer.Navigator>
//   );
// }

function Homestack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={({ navigation }) => ({
            title: '',
            headerStyle: {
              backgroundColor: '#f2f2f2',
              shadowColor: '#f2f2f2',
              elevation: 0
            }
          })}
        />
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={({ navigation }) => ({
            headerLeft: () => (
              <Icon.Button
                name="menu"
                size={30}
                color="black"
                backgroundColor="#f2f2f2"
                onPress={() => navigation.openDrawer()}>
              </Icon.Button>
            ),
            title: '',
            headerStyle: {
              backgroundColor: '#f2f2f2',
              shadowColor: '#f2f2f2',
              elevation: 0
            }
          })
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Homestack;