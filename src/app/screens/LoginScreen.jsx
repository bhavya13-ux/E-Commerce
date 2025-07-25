import React,{useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = ({navigation}) => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [errors,setErrors]=useState({});

    const handleLogin=()=>{
        let valid=true;
        let tempErrors={};
        if (!email.trim()) {
              tempErrors.email = 'Email is required';
              valid = false;
            } else if (!/^\S+@\S+\.\S+$/.test(email)) {
              tempErrors.email = 'Enter a valid email';
              valid = false;
            }
        
            if (!password.trim()) {
              tempErrors.password = 'Password is required';
              valid = false;
            } else if (password.length < 6) {
              tempErrors.password = 'Password must be at least 6 characters';
              valid = false;
            }
        
            setErrors(tempErrors);
        
            if (valid) {
              Alert.alert('Success', 'Login Successful!');
              navigation.navigate('Main');
            }

    };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor='white' />

      {/* Logo and Title */}
      <View style={styles.header}>
        <Image
          source={require('../assets/icons/App_logo.png')} 
          style={styles.logo}
        />
        <Text style={styles.title}>Login In To your Account</Text>
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Enter your Email"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            />
        </View>
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

        <View style={styles.inputWrapper}>
          <TextInput
             placeholder="Enter your Password"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword}
        />
        </View>
        {errors.password && (<Text style={styles.errorText}>{errors.password}</Text>
        )}
      </View>

      {/* Options */}
      <View style={styles.optionsRow}>
        <Text style={styles.optionText}>Keep me logged in</Text>
        <TouchableOpacity>
          <Text style={[styles.optionText, styles.forgotPassword]}>Forgot Password</Text>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Footer */}
      <View style={[styles.footer, { flexDirection: 'row' }]}>
  <Text style={styles.footerText}>Don't have an account? </Text>
  <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
    <Text style={styles.link}>Sign Up</Text>
  </TouchableOpacity>
</View>

    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 25,
    paddingTop: 160,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'serif',
  },
  inputContainer: {
    marginBottom: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#f2f2f2',
  },
  icon: {
    marginRight: 5,
  },
  input: {
    flex: 1,
    height: 40,
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  optionText: {
    fontSize: 12,
    color: '#333',
  },
  forgotPassword: {
    color: '#0066cc',
    fontWeight: '500',
  },
  loginButton: {
    backgroundColor: '#0066cc',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    justifyContent:'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 13,
    color: '#333',
  },
  link: {
    color: '#0066cc',
    fontWeight: '500',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 5,
    marginLeft: 5,
  },
});
