import React from 'react';
import {Text, View ,Button,TextInput} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Formik } from 'formik';
import ValidationForm from "../utility/validationForm"

export default function Apply({ navigation,id }) {
  const validation =ValidationForm().schemaCreateApplyer
    const HandleSubmit = async(value,id) => {
      const response= await fetch('https://jopsearch-backend.onrender.com/applyer/'+id, {
        method: 'POST',
        body: JSON.stringify({
          name:value.name,
          email: value.email,
          cv:value.cv,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
    const result= await response.json();
  
    };
    return (
    <View style={tw `mx-2 mt-8 flex `}>
        <Formik
        initialValues={{ name: '',email: '',cv: ''}}
        validationSchema={validation}
        onSubmit={(values, actions) => {
          actions.resetForm();
          HandleSubmit(values,id);
          navigation.navigate("HomeScreen")
          
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={tw ` border border-gray-500 h-12 px-2`}
              placeholder='Type Your Name'
              onChangeText={props.handleChange('name')}
              value={props.values.name}
            />
            <Text style={tw `text-sm`}>{props.errors.name}</Text>
            <TextInput
              style={tw ` border border-gray-500 h-12 px-2`}
              placeholder='Type Your Email'
              onChangeText={props.handleChange('email')}
              value={props.values.email}
            />
            <Text style={tw `text-sm`}>{props.errors.email}</Text>
            <TextInput
              style={tw ` border border-gray-500 h-12 px-2`}
              placeholder='Type Url of Your CV'
              onChangeText={props.handleChange('cv')}
              value={props.values.cv}
            />
            <Text style={tw `text-sm`}>{props.errors.cv}</Text>
             <Button color='#DD5746' title="Submit" onPress={props.handleSubmit} /> 
          </View>
        )}

      </Formik>
    </View>
  )
}



