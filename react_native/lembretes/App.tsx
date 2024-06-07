import { useState } from 'react';
import { 
  Alert,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View
} from 'react-native';
import IconesRedesSociais from './IconesRedesSociais';
import IconesEdicaoRemocao from './IconesEdicaoRemocao';

interface Lembrete {
  id: string;
  texto: string;
}

export default function App() {
  const [lembrete, setLembrete] = useState <string>('')
  const [lembretes, setLembretes] = useState<Lembrete[]>([])

  const atualizar = (id: string) => {

  }

  const remover = (id: string) => {
    Alert.alert(
      'Remover lembrete',
      `Deseja remover esse lembrete: ${lembretes.find(l => l.id === id)?.texto}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Remover',
          style: 'destructive',
          onPress: () => {
            setLembretes(lembretesAtuais => lembretesAtuais.filter(l => l.id !== id))
            ToastAndroid.show(
              'Lembrete rmovido com sucesso',
              ToastAndroid.LONG
            )
          }
        }
      ]
    )

  }

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
        <Text style={styles.pressableText}>Salvar Lembrete</Text>
      </Pressable>
      <FlatList
      style={styles.list}
        data={lembretes}
        renderItem={lembrete => (
          <View
            style={styles.listItem}>
            <Text style={styles.listItemText}>
              {lembrete.item.texto}
            </Text>
            <View
              style={styles.listItemButtons}>
              <IconesEdicaoRemocao 
                remover={()  => remover(lembrete.item.id)} 
                atualizar={() => atualizar(lembrete.item.id)}/>
            </View>
          </View>
        )}
      />

      <IconesRedesSociais />
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
    borderRadius: 4,
    marginBottom: 8
  },
  listItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBlockColor: 'gray',
    backgroundColor: '#F0F0F0',
    margin: 8,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  listItemText:{
    textAlign: 'center',
    width: '70%'
  },
  listItemButtons:{
    width: '30%'
  }
});
