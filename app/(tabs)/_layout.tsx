import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Optional for icons

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index" // Matches index.tsx in the (tabs) folder
        options={{
          title: 'Home',
          
          tabBarIcon: ({ color }) => <Ionicons name="home" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile" // Matches settings.tsx in the (tabs) folder
        options={{
          title: 'profile',
          tabBarIcon: ({ color }) => <Ionicons name="person" size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
