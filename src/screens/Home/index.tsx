import React from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import { styles } from './styles';

import { Participant } from '../../components/Participant';

export function Home() {
  const participants = ['Rodrigo', 'Vini', 'Diego', 'Biro', 'Ana', 'Isa', 'João', 'Marcos', 'André'];

  function handleParticipantAdd() {
    console.log("Você clicou no botão de adicionar!");
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você removeu um participante ${name}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sábado, 16 de março de 2024
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor='#6B6B6B'
          keyboardType='email-address'
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView  showsVerticalScrollIndicator={false}>
      {
        participants.map(participant => (
          <Participant 
          key={participant}
          name={participant}
           onRemove={() => handleParticipantRemove("Rodrigo")} />
        ))
      }
      </ScrollView>
      


    </View>
  )
}