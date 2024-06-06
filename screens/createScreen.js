import React from 'react';
import {Text, View ,ScrollView,Button,TextInput} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Form from "../components/form"

export default function CreateScreen({ navigation,route }) {
  const {fetchData}=route.params
    const AddJob = async(values) => {

      const response= await fetch('https://jopsearch-backend.onrender.com/create', {
        method: 'POST',
        body: JSON.stringify({
          title:values.title,
          content: values.content,
          city:values.city,
          cat:values.cat,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
    const result= await response.json();
    console.log(result);
    }

    return (
    <View >
      <Form fetchData={fetchData} AddJob={AddJob} navigation={navigation} />
    </View>
  )
}


