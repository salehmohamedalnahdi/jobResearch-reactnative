import React,{useEffect,useState} from 'react';
import {Text, View ,Modal,TouchableOpacity,Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import tw from 'tailwind-react-native-classnames';
import Apply from './applys'


export default function ModalApply({id, navigation}){

    const [modal,setMoadl]= useState(false)
    return(
        <View>
          <Modal  animationType="slide"
            visible={modal}
            onRequestClose={() => setMoadl(!modal)} 
           >
          <View  style={tw `mt-4 mx-3 items-center `} >
            <TouchableOpacity onPress={() =>setMoadl(false)}>
                <Icon name="times" size={24} color="#4b5563" style={tw `mr-2`} />
            </TouchableOpacity>
          </View>
          <Apply navigation={ navigation} id={id} />
        </Modal>
        <Button color='#8B93FF' title="Apply" onPress={() =>setMoadl(true)} />  
        </View>
    )
}