import { View, Text, Alert, FlatList, Image, Button, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link, usePathname } from 'expo-router'
import { useSearchParams } from 'expo-router/build/hooks'

export default function Meals() {
    const [id,setId] = useSearchParams();
    const [meals,setMeals] = useState();
    // console.log(id);
    // const [ab,setAb] = useState();
    const fetchMeals= async (cat:string)=>{
      try{
        const getmeal = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
        const getjson = await getmeal.json()
        setMeals(getjson.meals)
      }
      catch(error){
        alert(error)
      }
      
      
    }
    // console.log(meals);
    useEffect(
      ()=>{
        fetchMeals(id[1]);
         <Text>Balgadesh</Text>
      }
    ,[]);
    
    // console.log(ab);
    
  return (
    <View style={{flex:1,gap:14,padding:25,
      alignItems:"center"}}>
      <FlatList data={meals}
      
              renderItem={({item})=>{
                //  console.log(item);
                 
                  return(
                      <View style={style.catContainer}>
                          <Image source={{uri:item.strMealThumb}} style={style.img}/>
                          
                          <View style={{paddingLeft:10,flex:1}}>
                              <Text style={style.catTitle}>{item.strMeal}</Text>
                              
                              <Link href={`/meals/meal/${item.idMeal}`}>
                                <TouchableOpacity style={style.myBtn}>
                                  <Text style={style.btnTxt}>View Details</Text>
                                </TouchableOpacity>
                              </Link>
                          </View>
                      </View>
                  )
                  
              }}
            />
    </View>
  )
}

const style = StyleSheet.create({
    img:{
        height:150,
        width:150,
        borderRadius:20,
        margin:6
    },
    catContainer:{
        flex:1,
        width:350,
        alignItems:"center",
        borderRadius:15,
        borderColor:"black",
        borderWidth:2,
        flexDirection:'row',
        margin:5,
        backgroundColor:"#FAEBD7"       
    },
    catTitle:{
        fontSize:20,
        fontWeight:600
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