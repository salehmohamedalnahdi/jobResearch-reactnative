import React from 'react';
import {Text, View ,Button,TextInput} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Formik } from 'formik';
import ValidationForm from "../utility/validationForm"

export default function Form({ AddJob, navigation,fetchData}) {
    const validation =ValidationForm().schemaCreateJob
    return (
    <View style={tw `mx-2 mt-8 flex `}>
        <Formik
        initialValues={{ title: '',content: '',city: '',cat: ''}}
        validationSchema={validation}
        onSubmit={(values, actions) => {
          actions.resetForm();
          AddJob(values);
          fetchData()
          navigation.navigate("HomeScreen")
          
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={input}
              placeholder='Type Title Of Job'
              onChangeText={props.handleChange('title')}
              value={props.values.title}
            />
            <Text style={text}>{props.errors.title}</Text>
            <TextInput
              style={input}
              placeholder='Type City Of Job'
              onChangeText={props.handleChange('city')}
              value={props.values.city}
            />
            <Text style={text}>{props.errors.city}</Text>
            <TextInput
              style={input}
              placeholder='Type Categoery Of Job'
              onChangeText={props.handleChange('cat')}
              value={props.values.cat}
            />
            <Text style={text}>{props.errors.cat}</Text>
            <TextInput
              style={tw ` border border-blue-500 h-40 px-2`}
              placeholder='Type content Of Job'
              onChangeText={props.handleChange('content')}
              value={props.values.content}
            />
            <Text style={text}>{props.errors.content}</Text>
             <Button color='#DD5746' title="Submit" onPress={props.handleSubmit} /> 
          </View>
        )}

      </Formik>
    </View>
  )
}

const text=tw `text-sm`
const input=tw ` border border-blue-500 h-12 px-2`



