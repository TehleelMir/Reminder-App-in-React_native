import React from "react"
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native'

export default (props) => {
    return(
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={styles.listItemText} >
                    {props.item.text }
                </Text>
                <Text onPress={() => {
                    props.delete(props.item.id)
                }}>Remove</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: { 
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee'
    }, 
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }, 
    listItemText: {
        fontSize: 18 
    }

})