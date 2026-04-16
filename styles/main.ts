import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
  {
    container: {
      backgroundColor: 'white',
      height: '100%'
    },
    box:{
      backgroundColor: 'blue',
      margin: 20,
      padding: 20,
      borderRadius: 10,
    },
    text:{
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
      fontWeight: 'bold'
    },
  
    input:{
      borderColor: 'green',
      borderWidth: 2,
      padding: 10,
      marginTop: 10,
      borderRadius: 25,

    },

    email:{
      borderColor: 'green',
      borderWidth: 2,
      padding: 10,
      borderRadius: 25,
    },
    password:{
      borderColor: 'green',
      borderWidth: 2,
      padding: 10,
      borderRadius: 25,
      marginBottom: 10,
    },
  }
);

export default styles;