import React,{useEffect,useState} from 'react';
import {Text, View ,ScrollView,} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import AddButton from "../components/addButton"
import DeleteButton from "../components/deleteButton"
import Search from "../components/search"
import ModalApply  from "../components/modalApply"

export default function HomeScreen({ navigation }) {

  let cat
  const [data,setData]=useState()
  const [load,setLoad]=useState(false)
  useEffect(()=>{
    fetchData()
  },[])
  const handleSearch = async (cat) => {
    fetchData(cat)
  }
  const fetchData = async (cat='') => {
    setLoad(true)
    const response= await fetch('https://jopsearch-backend.onrender.com/jobs/'+cat);
  if(!response.ok){
    throw Error("could not fetch data for that resource")
       }
  const result= await response.json();
  setLoad(false)
  setData(result)
  }

    return (
    <View style={tw `flex flex-col `} >
       <ScrollView>
         <AddButton fetchData={fetchData} navigation={navigation} />
         <Search onSearch={handleSearch} />
         {load && <Text style={tw `text-xl text-center`} >Loading....</Text>}
        {data && data.map((item,index)=>{
          return(
                <View key={index} style={tw `mt-1 px-1 flex flex-col bg-white shadow-md  border border-black `}>
                   <View  style={tw `flex-row items-center justify-between px-2 pt-1`}>
                      <Text style={tw `text-lg font-semibold`} >{item.title}</Text>
                      <DeleteButton fetchData={fetchData} navigation={navigation} id={item.id} />
                   </View>
                    <Text style={tw `text-lg font-semibold px-2 pt-1`} >City: {item.city}</Text>
                    <Text style={tw `text-lg font-semibold px-2 pt-1`}>Categoery: {item.cat}</Text>
                    <Text style={tw `text-gray-600  px-2 pt-2`}>{item.content}</Text>                     
                    <View style={tw `flex justify-center py-1`} >
                       <View  style={tw `mt-2 `} >
                         <ModalApply id={item.id} navigation={navigation} />
                       </View>
                    </View>            
                 </View>
          )

        })
        }
      </ScrollView>
    </View>
  )
}

