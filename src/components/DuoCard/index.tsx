import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import * as Icon from 'phosphor-react-native'
import { THEME } from '../../theme';
import { DouInfo } from '../DouInfo';

import { styles } from './styles';

export interface DuoCardProps {
  id: string
  hourEnd: string
  hourStart: string
  name: string
  useVoiceChannel: boolean
  weekDays: string[]
  yearsPlaying: number
}

interface Props {
  data: DuoCardProps
  onConnect: () => void
}

export function DuoCard({ data, onConnect }: Props) {
  return (
    <View style={styles.container}>
      <DouInfo label='Nome' value={data.name} />
      <DouInfo label='Tempo de jogo' value={`${data.yearsPlaying} ano(s)`} />
      <DouInfo label='Disponibilidade' value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`} />
      <DouInfo label='Chamada de áudio' value={data.useVoiceChannel?'Sim':'Não'} colorValue={data.useVoiceChannel?THEME.COLORS.SUCCESS:THEME.COLORS.ALERT} />

      <TouchableOpacity style={styles.button} onPress={onConnect}>
        <Icon.GameController size={20} color={THEME.COLORS.TEXT} />
        <Text style={styles.buttonTitle}>Conectar</Text>
      </TouchableOpacity>
    </View>
  );
}