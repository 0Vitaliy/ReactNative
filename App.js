import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, Icon } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './components/Home';
import ProductsScreen from './screens/products/ProductsScreen';
import {
    ScrollIntoView,
    wrapScrollView,
    wrapScrollViewConfigured,
} from 'react-native-scroll-into-view';





// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to starking on your app!</Text>
//     </View>
//   );
// }

// const options = {
//     align: 'bottom',
//     animated: true,
//     immediate: false,
//     insets: {
//         top: 120,
//         bottom: 20,
//     },
//     computeScrollY: (scrollViewLayout, viewLayout, scrollY, insets, align) => {},
//     measureElement: viewRef => {},
// };
// const CustomScrollView = wrapScrollView(ScrollView);
// class MyScreen extends React.Component {
//     render() {
//         return (
//             <CustomScrollView
//                 scrollIntoViewOptions={options}
//             >
//                 <View >
//                     <ScrollIntoView
//                         enabled={false}
//                         ref={ref => (this.scrollIntoViewRef = ref)}
//                     >
//                         <Text>This will scroll into view when the button is pressed</Text>
//                         <Text>This will scroll into view when the button is pressed</Text>
//                         <Text>This will scroll into view when the button is pressed</Text>
//                         <Text>This will scroll into view when the button is pressed</Text>
//                         <Text>This will scroll into view when the button is pressed</Text>
//                         <Text>This will scroll into view when the button is pressed</Text>
//                         <Text>This will scroll into view when the button is pressed</Text>
//                         <Text>This will scroll into view when the button is pressed</Text>
//
//                     </ScrollIntoView>
//                     <Button
//                         title="Make above text scroll into view with custom options"
//                         onPress={() =>
//                             this.scrollIntoViewRef.scrollIntoView({ top: 0, bottom: 0 })
//                         }
//                     />
//                 </View>
//             </CustomScrollView>
//         );
//     }
// }


class Header extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>SettingsScreen</Text>
            </View>
        );
    }
}

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: ProductsScreen,
        navigationOptions: () => ({
            title: 'Products',
            tabBarIcon: () => {
                return <Image source={{uri:'https://pngicon.ru/file/uploads/vinni-pukh-v-png-256x256.png'}} style={{width: 25, height: 25}}/>
            }
        })
    },
  Settings: {
        screen:HomeScreen,
        navigationOptions: () => ({
              title: 'Login',
              tabBarIcon: () => {
                  return <Image source={{uri:'http://pngimg.com/uploads/mario/mario_PNG55.png'}} style={{width: 25, height: 25}}/>
              },
      })},
});

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
