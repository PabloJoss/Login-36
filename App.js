import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default App = () => {
  const [expediente, setExpediente] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (expediente !== '' && password !== '') {
      Alert.alert('Usuario autenticado');
    } else {
      Alert.alert('Usuario no autenticado');
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Login</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.TextInput}
          placeholder="Expediente"
          maxLength={6}
          keyboardType="numeric"
          onChangeText={expediente => {
            setExpediente(expediente);
            console.log(expediente);
          }}
          value={expediente}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          maxLength={10}
          secureTextEntry={true}
          onChangeText={(password) => {
            setPassword(password);
          }}
          value={password}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Iniciar sesión"
          onPress={handleSubmit}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00FFFF', 
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
  },
  buttonContainer: {
    width: '80%',
    marginVertical: 20,
  },
  TextInput: {
    backgroundColor: 'black',
    borderColor: '#00FFFF', 
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    color: 'white',
  },
});
