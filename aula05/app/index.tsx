import { Text, View } from "react-native";
import { Button} from '@rneui/themed';




export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Olá!</Text>
      <Button title="Solid" size="lg" color="error"/>
      <Button title="Outline" type="outline" />
      <Button title="Solid" type="solid" loading />
      
    </View>
  );
}
