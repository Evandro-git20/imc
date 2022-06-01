
import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button} from 'react-native';
import { CheckBox, color } from '@rneui/base';

function App() {
  let[masculino, setMasculino] = useState(false);
  let[feminino, setFeminino] = useState(false);
  let[resultado, setResultado] = useState('');
  let[altura, setAltura] = useState('');
  let homem;
  let mulher;
  let valorH = 72.7;
  let subtrairH = 58;
  let valorF = 62.1;
  let subtrairF = 44.7;
  let altu = Number(altura);

  const limparValores=()=>{
    setAltura(false);
    setMasculino(false);
    setFeminino(false);
    setResultado(false);
  }

  const genderMasculino =() =>{
    setMasculino(true);
    setFeminino(false);
  }
  const genderFeminino = () =>{
  setMasculino(false);
  setFeminino(true);  
  }
  const calcular = () =>{
    
    if(!altura && !masculino && !feminino){
      alert('Campos inválidos!');
      return;
    } 
    if(!altura){
      alert('Digite uma Altura');
      return;
    }
    if(masculino){
      homem = (valorH * altu) - subtrairH;
      setResultado(`Peso ideal:   ${homem.toFixed(2)}`);      
      return; 
    }else if(feminino){
      mulher = (valorF * altu) - subtrairF;
      setResultado(`Peso ideal:   ${mulher.toFixed(2)}`);   
      return;
    }else{
      alert('Selecione um gênero!');
    }
    
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{fontSize: 38, marginTop: 100, color:'#fcba00'}}>Calcule o seu IMC</Text>

      <View flexDirection='row' style={{marginRight: 180, marginTop: 80}}>
        <CheckBox
        title='Masculino' 
        checked={masculino} 
        checkedIcon='dot-circle-o' 
        uncheckedIcon='circle-o'
        onPress={genderMasculino}
        />
        <CheckBox
        title='Feminino' 
        checked={feminino} 
        checkedIcon='dot-circle-o' 
        uncheckedIcon='circle-o'
        onPress={genderFeminino}
        />
      </View>
      
      <View style={{flexDirection: 'row', marginTop:40, marginRight:250}}>
        <Text style={{fontSize: 26, color:'#fff'}}>Altura</Text>
        <TextInput style={styles.inputs} placeholder="  0,00 cm" placeholderTextColor={'#A0A0A0'} onChangeText={(alt) => setAltura(alt)}/>
      </View>

      <View style={{marginTop: 50}}>
        <Text style={{fontSize:30, color: '#00ff00'}}>{resultado}</Text>
      </View>

      <View style={{marginTop: 50, width: 200}}>
        <Button title='Calcular' onPress={calcular} />
      </View>
      
      <View style={{marginTop: 20, width: 200}}>
        <Button title='Reiniciar' onPress={limparValores} />
      </View>
          
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(0, 30, 50)',
    alignItems:'center',
    justifyContent:'flex-start',
  },
  inputs:{
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#A0A0A0',
    marginLeft: 10,
    width: 100,
    height: 35,
    color: '#fff',
    // textAlign:'center',
  }
});
  
export default App;