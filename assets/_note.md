**Some tags function like HTML tags**
Use package 'react-native'
```jsx
import { Text, View } from 'react-native';
export default function App() {
  return (
    <View>
      <Text>Hello, world!</Text>
    </View>
  );
}
```
This code snippet demonstrates how to use the `View` and `Text` components from the `react-native` package to create a simple application that displays "Hello, world!" on the screen. The `View` component acts as a container for the `Text` component, which is used to display text content.

**Example of styling in React Native**
```jsx
import { Text, View, StyleSheet } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, styled world!</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 20,
    color: '#333333',
  },
});

```

**Tags**
- <p> - <Text></Text>
- <div> - <View></View>
- <span> - <Text></Text>
- <h1> to <h6> - <Text style={{fontSize: ...}}></Text>
- <ul> - <View></View> with nested <Text> for list items
- <li> - <Text></Text>
- <a> - <Text></Text> with onPress handler
