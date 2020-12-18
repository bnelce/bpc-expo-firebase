import React, { useState, useContext } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import AuthContext from '../../contexts/auth';

export default function SignIn({navigation}) {
  
    const { signed, signIn } = useContext(AuthContext);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    console.log(signed)

    function handleSignIn(){
        signIn();
    }

    const onFooterLinkPress = () => {
        navigation.navigate('SignUp')
    }

    const onLoginPress = () => {
   /*     firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .get()
                    .then(firestoreDocument => {
                        if (!firestoreDocument.exists) {
                            alert("O usuário inexistente")
                            return;
                        }
                        const user = firestoreDocument.data()
                        navigation.navigate('Home', {user: user})
                    })
                    .catch(error => {
                        alert(error)
                    });
            })
            .catch(error => {
                alert(error)
            })*/
    }

    return (
        <View style={styles.container}>
        <KeyboardAwareScrollView
            style={{ flex: 1, width: '100%' }}
            keyboardShouldPersistTaps="always">
            <Image
                style={styles.logo}
                source={require('../../../assets/icon.png')}
            />
            <TextInput
                style={styles.input}
                placeholder='Email'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setEmail(text)}
                value={email}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholderTextColor="#aaaaaa"
                secureTextEntry
                placeholder='Senha'
                onChangeText={(text) => setPassword(text)}
                value={password}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => handleSignIn()}>
                <Text style={styles.buttonTitle}>Entrar</Text>
            </TouchableOpacity>
            <View style={styles.footerView}>
                <Text style={styles.footerText}>Crie sua conta aqui <Text onPress={onFooterLinkPress} style={styles.footerLink}>Cadastrar-se</Text></Text>
            </View>
        </KeyboardAwareScrollView>
    </View>
    );
}
