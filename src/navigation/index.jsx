import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();

const RootNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Registration" component={RegisterScreen}/>
            <Stack.Screen name={"Login"} component={LoginScreen}/>
        </Stack.Navigator>
    );
}

export default RootNavigation;