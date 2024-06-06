import React from 'react';
import {Text, View ,ScrollView,Button} from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function AboutScreen() {


    return (
    <View style={tw `mx-2`}>
      <Text>About</Text>
    </View>
  )
}

const styles={text:tw `border border-blue-300 text-white font-bold px-2 mb-2`}

