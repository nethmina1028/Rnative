import { SetStateAction, useState } from 'react';
import { Image, StyleSheet,View,Text, Button, TextInput ,ScrollView} from 'react-native';


export default function HomeScreen() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState<string[]>([]);

  function goalInputHandler(enteredText: SetStateAction<string>){
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler(){
    setCourseGoals((currentCourseGoals) =>[
      ...currentCourseGoals,
       enteredGoalText,
      ]);
  }

  return (
    /*
       <View style={styles.container}>
        <View>
           <Text 
             style={{
              margin:16,
              borderWidth:2,
              borderColor:'red',
              padding:10,
             }}>

              Home Screen
            </Text>

        </View>

         <Button title='tap me' />
      <Text style={styles.dummyText}>Work with sytle dummy</Text>
           

       </View>

       */
      <View style={styles.appContainer}>
          <View style={styles.inputContainer}>
             <TextInput
              style={styles.textInput} 
              placeholder='Enter your name' 
              onChangeText={goalInputHandler}
              />

             <Button title='Submit' onPress={addGoalHandler} />
          </View>
            
            <View style={styles.goalsContainer}>
          <ScrollView >
              {courseGoals.map((goal)=> (
                <View  style={styles.goalItem} key={goal}>
                <Text style={styles.goalText}>
                  {goal}
                  </Text>
                </View>
                  ))}
          </ScrollView>

          </View>
      </View>
  );
}

const styles = StyleSheet.create({

  appContainer:{
      flex:1,
      paddingTop:50,
      paddingHorizontal:16,
      
  },
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
   margin: 16,
   padding: 10,
    borderWidth: 2,
    borderColor: 'red',
  },
  inputContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  textInput:{
    borderWidth:1,
    borderColor:'black',
    width:'80%',
    marginRight:8,
    padding:8,
  },
  goalsContainer:{
    marginTop:16,
    padding:8,
    
  },
  goalItem:{
      margin:8,
      padding:8,
      borderRadius:8,
      backgroundColor:'#5e0acc',
      

  },
  goalText:{
    color:'white'
  }
  
});
