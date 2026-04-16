import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Dashboard() {
    return(
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text>Welcome to the tabs main page</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
            
    
    )
}