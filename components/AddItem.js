import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import ClearBtn from './ClearBtn'

export default (props) => {
    const [text, setText] = useState("") 
    function onChanged(textValue) {
        setText(textValue)
    }
    return (
        <View>
            <TextInput placeholder="Add Item.." style={styles.input} onChangeText={onChanged} />
            <View style={styles.nestView}>
                <ClearBtn clearAll={props.clearAll}/>
                    <TouchableOpacity style={styles.btn}
                    onPress={() => {
                        props.addItem(text)
                    }}
                >
                    <Text style={styles.btnText}>Add Reminder</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
} 

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16
    },
    btn: {
        backgroundColor: "#c2bad8",
        padding: 9,
        margin: 5,
        flex: 1
    },
    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center'
    },
    nestView: {
        flexDirection: 'row'
    }
})