import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Drawer,
} from 'react-native-paper';
import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function DrawerContent(props) {
  return (
    <View style={{ flex: 1 , backgroundColor: '#f2f2f2'}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: -15 }}>
              <Avatar.Image
                source={{
                  uri: 'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg',
                }}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                <Title styles={styles.title}>Mayur Shah</Title>
                <Caption style={styles.caption}>mayurshah@gmail.com</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) =>(
              <Icon
                name="bookmark-outline"
                color={color}
                size={size}
              />
              )}
              label="Courses"
              onPress={() => {props.navigation.navigate('Courses')}}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="message-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Discuss"
              onPress={() => { }}
            />

            <DrawerItem
              icon={({ color, size }) =>(
                <Icon
                  name="account-check-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Profile"
              onPress={() => {props.navigation.navigate('Profile')}}
            />

            <DrawerItem
              icon={({ color, size }) =>(
                <Icon
                  name="star-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Rate"
              onPress={() => { }}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="text-box-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Feedback"
              onPress={() => {props.navigation.navigate('Feedback')}}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="wrench-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Settings"
              onPress={() => { }}
            />
          </Drawer.Section>

        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) =>
            <Icon
              name="exit-to-app"
              color={color}
              size={size}
            />
          }
          label="Sign Out"
          onPress={() => { }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});