import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, FlatList, Alert, AsyncStorage} from 'react-native';
import Header from './components/header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([])

    const saveTheItem = async(arrOfObject) => {
      try {
        await AsyncStorage.setItem("key", JSON.stringify(arrOfObject)) 
      }catch(e) {
        alert(e)
      }
      setItems(JSON.parse(arrOfObject))
    }

    const saveData = async(text) => {
      try{
        let data = await AsyncStorage.getItem("key")
        let arrOfObject
        let currentTimeInMili = Math.round((new Date()).getTime() / 1000);
        if(data != null && data != '[]') {
          const storedData = JSON.parse(data) 
          arrOfObject = [{id: currentTimeInMili, text: text}, ...storedData]
        }else {
          arrOfObject = [{id: currentTimeInMili, text: text}]
        }
        await AsyncStorage.setItem("key", JSON.stringify(arrOfObject))
        setItems(arrOfObject)
      }catch(e) {
        alert(e)
        return null 
      }
    }

    const saveNewItems = async(items) => {
      try{
        await AsyncStorage.setItem("key", items)
      }catch(e) {
        alert(e) 
      }
    }

    const getSavedData = async() => {
      try{
        const data = await AsyncStorage.getItem("key")
        if(data != null && data != '[]' ) {
          setItems(JSON.parse(data))
        }
      }catch(e) {
        alert(e)
      }
    }

    const delteItem = (id) => {
      setItems(prevsItems => {
        const newItems = prevsItems.filter(item => item.id != id) 
        saveNewItems(JSON.stringify(newItems))
        return newItems
      })
    }

  function AddItemToList(itemText) {
    if(!itemText) 
      alert("Please enter some text")
    else
      saveData(itemText)
  }
  
  const clearAllItems = async() => {
    try{
      await AsyncStorage.clear()
      setItems([])
    }catch(e){
      alert(e)
    }
  }

  useEffect(() => {
    getSavedData() 
  },[]) 

  return (
    <View style={style.container}>
      <Header title="Reminder List 📃" />
      <AddItem addItem={AddItemToList} clearAll={clearAllItems}/>
      <FlatList data={items} renderItem={
        ({item}) => {
          return(
            <ListItem item={item} delete={delteItem} />
          )
        }
      }/>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
