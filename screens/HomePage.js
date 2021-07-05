import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CoursePage from './CoursePage';
import DrawerContent from './DrawerContent';
import userProfile from './userProfile';
import editUserProfile from './editUserProfile';
import feedbackPage from './feedbackPage';

const Drawer = createDrawerNavigator();

const HomePage = () => {
    return (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="Courses" component={CoursePage} />
            <Drawer.Screen name="Profile" component={userProfile} />
            <Drawer.Screen name="editProfile" component={editUserProfile} />
            <Drawer.Screen name="Feedback" component={feedbackPage} />
        </Drawer.Navigator>
    );
}

export default HomePage;