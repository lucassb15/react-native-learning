import React from 'react';
import {View, Text} from 'react-native';

const App = () => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'left',
        marginLeft: 40,
        marginRight: 40,
        borderWidth: 1,
        borderColor: 'lightgray',
      }}>
      <Text>Nome:</Text>
      <Text>Lucas Barbosa</Text>
    </View>
  );
};

export default App;
