import React from "react"
import { TouchableOpacity, View, Text, StyleSheet } from "react-native"

export default (props) => {
    return(
        <View>
            <TouchableOpacity style={styles.btn} onPress={() => {
                props.clearAll()
            }}>
                <Text style={styles.text}>Clear All</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#eb7971',
        margin: 5,
        padding: 9
    },
    text: {
        color: '#b3160b',
        fontSize: 20,
        textAlign: "center"
    }
})