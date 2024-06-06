import React from 'react';
import {Text, View ,TouchableOpacity,TextInput} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Formik } from 'formik';
import ValidationForm from "../utility/validationForm"
import Icon from 'react-native-vector-icons/FontAwesome';




export default function Search({ onSearch}) {
    const validation =ValidationForm().schemaSearch
    return (
    <View >
        <Formik
        initialValues={{ cat: ''}}
        validationSchema={validation}
        onSubmit={(values, actions) => {
          actions.resetForm();
          onSearch(values.cat);
          
        }}
      >
        {(props) => (
          <View >
            <View style={tw `flex flex-row justify-center items-center mt-2 `}>
            <TextInput
              style={tw ` mr-2 rounded-lg text-lg border-2 border-gray-800 text-center py-1 px-2 w-60`}
              placeholder='Search by Caegoery'
              onChangeText={props.handleChange('cat')}
              value={props.values.cat}
            />
            <TouchableOpacity onPress={props.handleSubmit}>
               <View style={tw `items-center `}>
               <Icon name="search" size={30} color="#538392"/>
               </View>
            </TouchableOpacity>
            </View>
            <Text style={tw `text-sm font-semibold text-red-500 ml-10 `}>{props.errors.cat}</Text>
          </View>
        )}
      </Formik>
    </View>
  )
}



