import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';

import { styles } from './styles';

import { Participant } from '../../components/Participant';

export function Home() {
  const [participants, setParticipants] = useState(['João']);


  function handleParticipantAdd() {
    if (participants.includes("Rodrigo")) {
      return Alert.alert("Participante Existe", "Já existe um participante na lista com esse nome")
    }

    setParticipants(prevState => [...prevState, 'Ana']);
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`,
      [{
        text: 'Sim',
        onPress: () => Alert.alert("Deletado")
      },
      {
        text: 'Não',
        style: 'cancel'
      }
      ]
    );
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

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes à sua lista de presença.
          </Text>
        )}
      />
    </View>
  )
}