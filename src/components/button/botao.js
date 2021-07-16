import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

export default props=>{

    const buttonStyle = [styles.btn]

    if(props.ac){
        buttonStyle.push(styles.btnAC)
    }
    if(props.equal){
        buttonStyle.push(styles.btnEqual)
    }
    if(props.operation){
        buttonStyle.push(styles.btnOper)
    }
    if(props.bs){
        buttonStyle.push(styles.btnBS)
    }

    return(
        <TouchableOpacity
            onPress={props.aoClicar}
        >
            <Text style={buttonStyle}>
                {props.label}
            </Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({

    btn:{
        fontSize: 30,
        height: Dimensions.get('window').height/4,
        width: Dimensions.get('window').height/4,
        padding: 20,
        backgroundColor: "#4a4a48",
        color: "#fff",
        borderWidth: 1,
        borderColor: "#f7db8d",
        textAlign: 'center',
    },
    btnEqual:{
        color: "#ffdc5c"
    },
    btnOper:{
        color: "#ffdc5c"
    },
    btnAC:{
        color: "#e32214",
    },
    btnBS:{
        color: "#e32214",

    }

})