import { ImageBackground } from 'react-native';

import bg from '../../assets/background-galaxy.png'
import { styles } from './styles';

interface Props {
  children: React.ReactNode;
}

export function Background({ children }: Props) {
  return (
    <ImageBackground
      source={bg}
      defaultSource={bg}
      style={styles.container}
    >
      {children}
    </ImageBackground>
  );
}