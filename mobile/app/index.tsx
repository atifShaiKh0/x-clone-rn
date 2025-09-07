import { useClerk } from "@clerk/clerk-expo"
import { View, Text, Button } from "react-native"

const HomeScreen = () => {

    const { signOut } = useClerk();

    console.log("Home Screen rendered")
    return (
        <View>
            <Text>hello After auth</Text>

            <Button onPress={() => signOut()} title="logout" ></Button>
        </View>
    )
}


export default HomeScreen;