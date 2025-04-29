import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function TabsRoot() {
  return (
    <Tabs>
        <Tabs.Screen name='index' options={{ 
            title:"Categories",
            headerShown: true }} />
        <Tabs.Screen name='search' options={{ 
            title:"Search",
            headerShown: true }} />
        <Tabs.Screen name='meals/[id]' options={{ 
            title:"Meals",
            headerShown: true }} />
    </Tabs>
  )
}