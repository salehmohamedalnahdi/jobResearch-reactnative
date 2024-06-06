import {Text, TouchableOpacity, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';


export default AddButton = ({navigation,fetchData}) => {
    return ( 
      <View style={tw `items-center mt-2`}>
       <TouchableOpacity onPress={() =>navigation.navigate("CreateScreen",{fetchData:fetchData})}>
         <Icon name="plus-circle" size={30} color="#006769" style={tw `mr-2`} />
       </TouchableOpacity>
       </View>
     );
  }
