import React from 'react';
import { StyleSheet, SafeAreaView, View, TouchableOpacity } from 'react-native';
import { Avatar, Title, Caption, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome5';

const userProfile = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>


            <View style={styles.userInfoSection}>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
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
            </View>

            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Icon name='map-marker-radius' color='#777777' size={20} />
                    <Text style={{ color: '#777777', marginLeft: 20 }}>Kolkata, India</Text>
                </View>
                <View style={styles.row}>
                    <Icon name='phone' color='#777777' size={20} />
                    <Text style={{ color: '#777777', marginLeft: 20 }}>+91 12345 67890</Text>
                </View>
                <View style={styles.row}>
                    <Icon name='email' color='#777777' size={20} />
                    <Text style={{ color: '#777777', marginLeft: 20 }}>mayurshah@gmail.com</Text>
                </View>
            </View>

            <View style={styles.inforBoxWrapper}>
                <View style={[styles.infoBox, {
                    borderRightColor: '#dddddd',
                    borderRightWidth: 1,
                }]}>
                    <Title>2</Title>
                    <Caption>Courses Enrolled</Caption>
                </View>
                <View style={styles.infoBox}>
                    <Title>0</Title>
                    <Caption>Courses Completed</Caption>
                </View>
            </View>

            <View style={{margin: 30, alignItems: 'flex-end'}}>
                <TouchableOpacity onPress={() => {navigation.navigate('editProfile')}} style={styles.roundedButton}>
                    <View>
                        <FAIcon name="user-edit" color="#777777" size={25} />
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default userProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    inforBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
    roundedButton:{
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#777777'
    }
});