import React from 'react';
import { View } from 'react-native';

const Block = (props) => {
  return (
    <View style={styles.containerStyle}>{props.children}</View>
  );
};


const styles = {
  containerStyle: {
    marginTop: 60
  }
};

export { Block };
