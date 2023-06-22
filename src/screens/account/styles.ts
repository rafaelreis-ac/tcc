import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  background:{
    alignItems: 'center',
    height: '100%',
  }, 
  container: {
    marginTop: 70,
    width: '90%',
    //backgroundColor: '#FA3F30',
    height: '100%',
  },
  input:{ 
    backgroundColor: '#FFF',
    width: '100%',
    marginBottom:15,
    color: '#222',
    fontSize:12,
    borderRadius: 5.35,
    padding: 8,
    borderWidth: 3,
    borderColor: '#E7E9ED',
    marginTop: 30,
  },
  btnSubmit:{
    marginTop: 50,
    backgroundColor: '#61B482',
    width: '100%',
    height: 45,
    alignItems: 'center', 
    justifyContent: 'center',
    borderRadius: 5.35,
  },
  submitText:{
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold', 
  },
  title: {
    marginBottom: 30,
  },
  titleText:{
    color: '#61B482', 
    fontSize: 26,
    fontWeight: 'bold',  
  },
  titleText2:{
    color: '#4C4E52',
    fontSize: 26,
    fontWeight: 'bold',  
  },
  titleDescription: {
    color: '#9BA0AA',
    fontSize: 11,
    marginBotton: 100,
  },
})