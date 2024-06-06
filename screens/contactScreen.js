import React from 'react';
import {Text, View ,ScrollView,Button} from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function ContactScreen() {


    return (
    <View style={tw ` flex items-center mx-2`}>
      <Text>Contact</Text>
    </View>
  )
}

const styles={text:tw `border border-blue-300 text-white font-bold px-2 mb-2`}

