import { View, Text, Button, FlatList, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import {fetch} from 'expo/fetch'
import { Link } from 'expo-router';

export default function Category() {
    const [categories,setCategories] = useState([]);
    const [processing,setProcessing] = useState(false);
    const fetching = async()=>{
        setProcessing(true)
        try{
            const get =await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
                const jsonData = await get.json();
                setCategories(jsonData.categories)
        }
        catch(error){
    
        }
        finally{
    
          setProcessing(false)
        }
        
        
      }
  return (
    <View style={{flex:1,alignItems:'center', paddingTop:50,
        
    }}>
      <Button title='fetch' onPress={fetching}/>
      <FlatList data={categories} style={{gap:14,padding:5}}

        renderItem={({item})=>{
            // console.log(item);
            return(
                <View style={style.catContainer}>
                    <Image source={{uri:item.strCategoryThumb}} style={style.img}/>
                    
                    <View style={{paddingLeft:10}}>
                        <Text style={style.catTitle}>{item.strCategory}</Text>
                        {/* <Text style={style.catDetail}>{item.strCategoryDescription}</Text> */}
                        <Link href={`/meals/${item.strCategory}`}>
                        <Button title='View Meals' />
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
    catDetail:{
        
    }
});