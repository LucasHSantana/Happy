import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text, Dimensions } from 'react-native';
import LandingImg from '../images/landing.png';

export default function Landing() {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => navigation.navigate('OrphanagesMap'), 5000);
    }, []);


    return (
        <View style={styles.container}>                    
            <Image 
                key={1}
                style={styles.image}
                source={ LandingImg }
            />            
            <Text
                style={styles.title}
            >Happy</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00C7C7',            
    },

    image: {                        
        width: '70%',
        height: '70%',        
        resizeMode: 'contain',        
    },

    title: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 68,
        color: '#FFF'
    }


});