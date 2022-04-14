import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Image} from 'react-native-elements';
import clubesMono from '../../../assets/iconos-home/club_mono.png';

const ClubesTab = ({focused}) => {

  return (
    <View style={styles.container}>
      <Image
        transition={false}
        placeholderStyle={{backgroundColor: "transparent"}}
        source={ clubesMono }
        style={{height: 30, width: 30, resizeMode:'contain'}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default ClubesTab;
