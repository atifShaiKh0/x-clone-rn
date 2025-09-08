import { useClerk } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { Alert } from "react-native";

export const useSignOut = () => {
  const { signOut } = useClerk();

  const router = useRouter();


  const handleSignOut = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Logout",
        style: "destructive",

        onPress: async () => {
          try {
            await signOut();
            router.replace("/(auth)");
            console.log("Sign Out Done : OK Report")
          } catch (error) {
            console.error("sign out failed : ", error);
          }
        }
      },
    ]);
  };

  return { handleSignOut };
};