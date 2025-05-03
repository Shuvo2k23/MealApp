import { View, Text, Alert, FlatList, Image, Button, StyleSheet, Pressable, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link, usePathname } from 'expo-router'
import { useSearchParams } from 'expo-router/build/hooks'

export default function Meal() {
    const [id,setId] = useSearchParams();
    const [mdetail,setmdetail] = useState();
    console.log(id[1]);
    // const [ab,setAb] = useState();
    const fetchDetail= async (id:string)=>{
      try{
        const getmeal = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`)
        const getjson = await getmeal.json()
        setmdetail(getjson.meals[0])
      }
      catch(error){
        alert(error)
      }
      
      
    }
    console.log(mdetail);
    useEffect(
      ()=>{
        fetchDetail(id[1]);
         
      }
    ,[]);
    
    // console.log(ab);
    
  return (
    <ScrollView>
      <View style={{flex:1,
      alignItems:"center"
    }}>
      {
        mdetail ? <View style={style.mealContainer}>
            <Text style={style.mealTitle}>{mdetail.strMeal}</Text>
            <Image source={{uri:mdetail.strMealThumb}} style={style.img}/>
            <View>
              <Text style={style.insTitle}>Instrutions: </Text>
              <Text style={style.instruction}>{
              mdetail.strInstructions ? mdetail.strInstructions : "Empty"
                }</Text>
            </View>
            <Link href={mdetail.strYoutube}>
                                            <TouchableOpacity style={style.myBtn}>
                                            <Text style={style.btnTxt}>View Details</Text>
                                          </TouchableOpacity>
                                          </Link>
          </View>:
          ""
      }
    
      
    </View>
    </ScrollView>
    
  )
}

const style = StyleSheet.create({
    img:{
        
        padding:40,
        height:300,
        width:300,
        borderRadius:20,
        margin:6
    },
    mealContainer:{
        flex:1,
        width:390,
        alignItems:"center",
        borderRadius:15,
        borderColor:"black",
        borderWidth:2,
        margin:2,
        backgroundColor:"#FAEBD7"       
    },
    mealTitle:{
        fontSize:20,
        fontWeight:700,
        color:'#00a2ed',
        padding:3
    },
    instruction:{
      fontSize:17,
      fontWeight:400,
      margin:5,
      borderRadius:5,
      backgroundColor:"#E9967A"
    },
    insTitle:{
      fontSize:20,
      fontWeight:600,
      padding:5,
      color:'#00a2ed'
    },
    myBtn:{
      width:120,
      height:50,
      backgroundColor:'#00a2ed',
      borderRadius:5,
       margin:4

    },
    btnTxt:{
      color:"white",
      fontSize:20,
      paddingTop:10,
      paddingLeft:5
    }
});