import { useState, useEffect } from 'react';
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
import axios from 'axios';

interface Lembrete {
  id?: string;
  texto: string;
}

export default function App() {
  const [lembrete, setLembrete] = useState<Lembrete | null>(null)
  const [lembretes, setLembretes] = useState<Lembrete[]>([])
  const [emModoDeEdicao, setModoDeEdicao] = useState<boolean>(false)

  useEffect(() => {
    const vai = async () => {
      const result = (await axios.get('http://localhost:3000/lembretes')).data
      setLembretes(result)
    }
    vai()
  },[])

  const atualizar = () => {
    setLembretes(LembretesAtuais => (
      LembretesAtuais.map(l => (
        l.id === lembrete!.id ? lembrete! : l
      ))
    ))
    setLembrete({texto: ''})
    setModoDeEdicao(false)
  }

  const remover = (id: string) => {
    setLembretes(lembretesAtuais => lembretesAtuais.filter(l => l.id !== id))
  }

  const adicionar = () => {
    if(lembrete === null || lembrete.texto === ''){
      alert('Lembrete não pode ser vazio')
    }
    else{
      const novoLembrete: Lembrete = {
        id: Date.now().toString(),
        texto: lembrete!.texto
      }
  
      setLembretes(lembretesAtual => [
        novoLembrete,
        ...lembretesAtual
      ])
    }

    setLembrete({texto: ''})
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Digite um lembrete...'
        onChangeText={(LembreteDigitado) => setLembrete({id: lembrete?.id, texto: LembreteDigitado})}
        value={lembrete?.texto}
      />
      <Pressable
        style={styles.pressable}
        onPress={emModoDeEdicao ? atualizar : adicionar}>
        <Text style={styles.pressableText}>
          {`${emModoDeEdicao ? 'Atualizar' : 'Salvar'} lembrete`}
        </Text>
      </Pressable>
      <FlatList
        style={styles.list}
        keyExtractor={item => item.id!}
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
                remover={() => remover(lembrete.item.id!)}
                atualizar={() => {
                  setLembrete(lembrete.item)
                  setModoDeEdicao(true)
                }} />
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
  input: {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 12,
    padding: 8,
    textAlign: 'center'
  },
  pressable: {
    backgroundColor: 'blue',
    width: '80%',
    padding: 8,
    borderRadius: 4,
    marginBottom: 4
  },
  pressableText: {
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
  listItemText: {
    textAlign: 'center',
    width: '70%'
  },
  listItemButtons: {
    width: '30%'
  }
});
