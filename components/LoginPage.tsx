import React, { useState } from "react";
import {
    View,
    TextInput,
    Button,
    StyleSheet,
    KeyboardAvoidingView,
    Text,
    Image,
    Platform,
    TouchableOpacity,
    StatusBar,
    ScrollView
} from "react-native";
import LottieView from 'lottie-react-native';


interface ErrorsType {
    general?: string;
    password?: string;
    username?: string;
  }

const logoURL = require('../assets/images/RealpageLogo.png');
const LoginPage = ({onLogin}: any) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<ErrorsType>({});
    const [isUser,setIsUser]=useState<boolean>(false)
    const [isAdmin,setIsAdmin]=useState<boolean>(false)
    const [isVendor,setIsVendor]=useState<boolean>(false)
    const validateForm = () => {
        let errors = {}
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    // if (username === "Admin" && password === "Password") {
    //     setIsAdmin(true)
    // } 
    // else if (username === "User" && password === "Password") {
    //     setIsUser(true)
    // } 
    // else {
    //     setIsVendor(true)
    // } 
    const handleSubmit = async() => {

        if (validateForm()) {

            if (username === "Admin" && password === "Password") {
                onLogin('admin');
            } else if (username === "User" && password === "Password") {
                onLogin('user'); 
            } else if (username === "Vendor" && password === "Password"){
                onLogin('vendor'); 
            }
            else {
                setErrors({ general: "Invalid username or password" });
            }



            // try {
            //     const response = await fetch('https://your-api-url/login', {
            //         method: 'POST',
            //         headers: {
            //             'Content-Type': 'application/json',
            //         },
            //         body: JSON.stringify({
            //             username,
            //             password,
            //         }),
            //     });
        
            //     const data = await response.json();
            //     if (response.ok) {
            //         const userType = data.userType;
                    
                   
            //         onLogin(userType); 
            //     } else {
            //         setErrors({ general: data.message || 'Login failed' }); 
            //     }
            // } catch (error) {
            //     setErrors({ general: 'An error occurred. Please try again.' });
            // }
        }
    };

    return (
        <>
            <StatusBar />
            <ScrollView>
                
                <Image
                        source={logoURL}
                        style={{
                            width: 300,
                            height: 100,
                            marginBottom: 10,
                        }}
                    />
                <View style={{height:300,width:300,alignSelf:'center' }}>
                
                    <LottieView style={{flex:1}} source={require('../assets/loginpageAnimation.json')} autoPlay loop />

                </View>
                <View style={styles.form}>
                    <Text style={{alignSelf:'center',fontSize:30,paddingBottom:20,fontWeight:"bold"}}>Login</Text>
                    
                    <Text style={styles.label}>Username</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your username"
                        value={username}
                        onChangeText={setUsername}
                    />
                    {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}

                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                    {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
                    {errors.general ? (
                        <Text style={styles.errorText}>{errors.general}</Text>
                    ) : null}
                    <View style={styles.loginButton}>
                        <Button title="Login" color='#ff4f00' onPress={handleSubmit} />
                    </View>
                </View>           
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 25,
        padding: 20,
        textAlign: 'center'
        

    },
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 20,
        backgroundColor: '#DCDEE6'
    },
    form: {
        marginHorizontal:10,
        marginVertical:10,
        backgroundColor: "#ffffff",
        padding: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    label: {
        fontSize: 16,
        marginBottom: 7,
        fontWeight: "bold",
    },
    input: {
        height: 40,
        borderColor: "#ddd",
        borderWidth: 1,
        marginBottom: 15,
        padding: 10,
        borderRadius: 5,
    },

    errorText: {
        color: "red",
        marginBottom: 10,
    },
    loginButton: {
        width: '45%',
        alignSelf: 'center',
        padding: 7
    }
});

export default LoginPage;