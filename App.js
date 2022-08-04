import { StyleSheet, Text, Button } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

export default function App() {
  const offset = useSharedValue(0);

  // const [animation, setAnimation] = React.useState(true);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value * 255 }],
    };
  }, [offset /*, animation*/]);

  console.log({ animatedStyles });
  return (
    <>
      <Animated.View
        style={[
          { width: 50, height: 50, backgroundColor: "lightblue" },
          animatedStyles,
        ]}
      />
      <Button
        title="Move button"
        onPress={() => {
          // setAnimation(prevAnim => !prevAnim);
          offset.value = withSpring(Math.random());

          // setOffset(withSpring(Math.random()));
          // offset.value = withSpring(Math.random());
        }}
      >
        <Text>Move button</Text>
      </Button>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
