import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{title:"Meal CateGory"}}  />
      <Stack.Screen name="meals/[id]" options={{title:"View Meals"}}/>
      <Stack.Screen name="meals/meal/[mid]" options={{title:"Meal details"}}/>
    </Stack>
  );
}
