import { useState } from 'react';
import { 
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

interface Lembrete {
  id: string;
  texto: string;
}

export default function App() {
  const [lembrete, setLembrete] = useState <string>('')
  const [lembretes, setLembretes] = useState<Lembrete[]>([])

  const adicionar = () => {
    const novoLembrete: Lembrete = {
      id: Date.now().toString(),
      texto: lembrete
    }

    setLembretes(lembretesAtual => [
      novoLembrete,
      ...lembretesAtual
    ])

    setLembrete('')
  }
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder='Digite um lembrete...'
        onChangeText={setLembrete}
        value={lembrete}
      />
      <Pressable 
        style={styles.pressable} 
        onPress={adicionar}>
        <Text style={styles.pressableText}>Salvar</Text>
      </Pressable>
      <FlatList
      style={styles.list}
        data={lembretes}
        renderItem={lembrete => (
          <View>
            <Text style={styles.lembrete}>
              {lembrete.item.texto}
            </Text>
          </View>
        )}
      />
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40
  },
  input:{
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 12,
    padding: 8,
    textAlign: 'center'
  },
  pressable:{
    backgroundColor: 'blue',
    width: '80%',
    padding: 8,
    borderRadius: 4,
    marginBottom: 4
  },
  pressableText:{
    color: 'white',
    textAlign: 'center'
  },
  list: {
    borderWidth: 1,
    borderColor: 'lightgray',
    width: '80%',
    borderRadius: 4
  },
  lembrete: {
    textAlign: 'center',
    marginTop: 4,
  }
});
