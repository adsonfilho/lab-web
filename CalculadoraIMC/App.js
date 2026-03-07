import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Keyboard,
} from 'react-native';
import React from 'react';

const IMCResult = ({ msg, imc, color }) => {
  if (!imc) return null;

  return (
    <View style={[styles.resultContainer, { backgroundColor: color }]}>
      <Text style={styles.txtIMC}>{imc}</Text>
      <Text style={styles.txtMessage}>{msg}</Text>
    </View>
  );
};

export default function App() {
  const [weight, setWeight] = React.useState('');
  const [height, setHeight] = React.useState('');
  const [result, setResult] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [bgColor, setBgColor] = React.useState('#ffffff');
  const [error, setError] = React.useState('');

  const handleWeightChange = (text) => {
    const numericText = text.replace(/[^0-9.,]/g, '');
    setWeight(numericText);
    setError('')
  };

  const handleHeightChange = (text) => {
    const numericText = text.replace(/[^0-9.,]/g, '');
    setHeight(numericText);
    setError('')
  };

  const clear = () => {
    setWeight('');
    setHeight('');
    setResult('');
    setMessage('');
    setBgColor('');
    setError('');
  };

  const calculateIMC = () => {
    Keyboard.dismiss();

    const weightNum = parseFloat(weight.replace(',', '.'));
    const heightNum = parseFloat(height.replace(',', '.'));

    const imcValue = parseFloat(weightNum / (heightNum ** 2))


    if (isNaN(weightNum) || isNaN(heightNum) || heightNum <= 0 || weightNum <= 0){
      setError('Insira valores validos');
      return;
    }

    if (imcValue < 18.5) {
      setMessage('Abaixo do Peso');
      setBgColor('#FFD966');
    } else if (imcValue < 25.0) { 
      setMessage('Peso Normal (Eutrofia)');
      setBgColor('#2ecc71');
    } else if (imcValue < 30.0) {
      setMessage('Sobrepeso');
      setBgColor('#f1c40f');
    } else if (imcValue < 35.0) {
      setMessage('Obesidade Grau I');
      setBgColor('#e67e22');
    } else if (imcValue < 40.0) {
      setMessage('Obesidade Grau II (Severa)');
      setBgColor('#e74c3c');
    } else {
      setMessage('Obesidade Grau III (Mórbida)');
      setBgColor('#9b2226');
    }

    setResult(imcValue.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>CALCULADORA IMC</Text>
      <TextInput
        style={styles.input}
        placeholder="Peso (KG)"
        value={weight}
        onChangeText={handleWeightChange}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (M)"
        value={height}
        onChangeText={handleHeightChange}
        keyboardType="numeric"
      />
      <Button onPress={calculateIMC} title="Calcular IMC" color="#841584" />
      <Button title="Limpar" color="#3c3c3c" onPress={clear} />

      <IMCResult msg={message} imc={result} color={bgColor} />

      {error ? <Text style={styles.txtError}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  resultContainer: {
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  txtMessage: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  txtIMC: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold',
  },
  txtError: {
    color: '#e74c3c',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
},
});
