import {
    View,
    Text,
    StyleSheet,
    Pressable,
    Linking,
    Platform,
} from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

const IconesRedesSociais = () => {

    const openURL = (url: string): void => {
        if (Platform.OS === 'web'){
            window.open(url, '_blank')
        }
        else{
            Linking.openURL(url)
        }
    }
    return (
        <View
            style={styles.logos}>
            <Pressable
                onPress={() => openURL('https://linkedin.com')}>
                <Ionicons name='logo-linkedin' size={32} color='blue' />
            </Pressable>
            <Ionicons name='logo-instagram' size={32} color='purple' />
            <Ionicons name='logo-github' size={32} />
            <Ionicons name='logo-gitlab' size={32} />
            <Ionicons name='logo-bitbucket' size={32} />
            <Ionicons name='logo-facebook' size={32} color='blue' />
            <Ionicons name='logo-whatsapp' size={32} color='green' />
            <Ionicons name='logo-apple' size={32} />
        </View>
    )
}

const styles = StyleSheet.create({
    logos: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%'
    }
})

export default IconesRedesSociais