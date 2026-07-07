import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import AddNoteScreen from '../screens/AddNoteScreen';
import EditNoteScreen from '../screens/EditNoteScreen';
import NoteDetailScreen from '../screens/NoteDetailScreen';

const Stack = createNativeStackNavigator();

// Stack Navigator ekranlar arasında geçiş yapmamızı sağlar.
// headerMode: 'none' veya headerShown: false ile varsayılan başlığı gizleyip kendi özel Header bileşenimizi kullanacağız.
export default function StackNavigator() {
  return (
    <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerShown: false, // Kendi Header'ımızı tasarladığımız için bunu gizliyoruz
        animation: 'slide_from_right' // Daha yumuşak ve premium bir geçiş animasyonu
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AddNote" component={AddNoteScreen} />
      <Stack.Screen name="EditNote" component={EditNoteScreen} />
      <Stack.Screen name="NoteDetail" component={NoteDetailScreen} />
    </Stack.Navigator>
  );
}
