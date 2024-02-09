import {StyleSheet} from 'react-native';
import RootNavigation from "./src/navigation";
import {NavigationContainer} from "@react-navigation/native";

const App = () => {
    return (
        <NavigationContainer>
            <RootNavigation/>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;