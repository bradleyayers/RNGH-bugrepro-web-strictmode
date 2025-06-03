import { useEffect, useState, StrictMode } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

export default function Demo() {
  return (
    <StrictComparison title="Strict Mode vs Non-Strict Mode">
      <App />
    </StrictComparison>
  );
}

function App() {
  const [hide, setHide] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setHide(false), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Button
        title={hide ? "Show" : "Hide"}
        onPress={() => setHide((prev) => !prev)}
      />

      {hide ? null : (
        <>
          <Text>Entering</Text>
          <Animated.View entering={FadeIn}>
            <Square />
          </Animated.View>

          <Text>Entering and exiting</Text>
          <Animated.View entering={FadeIn} exiting={FadeOut}>
            <Square />
          </Animated.View>

          <Text>Exiting</Text>
          <Animated.View exiting={FadeOut}>
            <Square />
          </Animated.View>
        </>
      )}
    </View>
  );
}

function StrictComparison({ children, title }) {
  return (
    <View style={{ gap: 8, alignItems: "center", flex: 1 }}>
      <Text style={{ fontSize: 20, alignSelf: "center" }}>{title}</Text>

      <View style={{ flex: 1, flexDirection: "row", gap: 20 }}>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text>Strict mode</Text>
          <StrictMode>{children}</StrictMode>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text>Non-strict</Text>
          {children}
        </View>
      </View>
    </View>
  );
}

function Square() {
  return (
    <View
      style={{
        width: 50,
        height: 50,
        borderRadius: 10,
        backgroundColor: "red",
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    width: 200,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
