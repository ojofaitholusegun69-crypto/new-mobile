import {} from "@react-navigation/native";
import { Link, useNavigation } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const navigator = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Hello, World!</Text>
          <Link href={"/profile"}>Go to Profile</Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
