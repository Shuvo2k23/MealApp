import { View, Text, Alert, FlatList, Image, Button, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link, usePathname } from 'expo-router'
import { useSearchParams } from 'expo-router/build/hooks'

export default function Meals() {
    const [id,setId] = useSearchParams();
    const [meals,setMeals] = useState();
    console.log(id[1]);
    // const [ab,setAb] = useState();
    const fetchMeals= async (cat:number)=>{
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
    <View>
      <FlatList data={meals} style={{gap:14,padding:5}}
      
              renderItem={({item})=>{
                  console.log(item);
                  return(
                      <View style={style.catContainer}>
                          <Image source={{uri:item.strMealThumb}} style={style.img}/>
                          
                          <View style={{paddingLeft:10}}>
                              <Text style={style.catTitle}>{item.strMeal}</Text>
                              {/* <Text style={style.catDetail}>{item.strCategoryDescription}</Text> */}
                              <Button title='View Details' />
                              {/* <Link href={`/meals/${item.strCategory}`}>
                              
                              </Link> */}
                              
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
    catDetail:{
        
    }
});