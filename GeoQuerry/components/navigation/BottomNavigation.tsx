import { View, Platform } from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@/app/(tabs)/HomeScreen';
import ProfileScreen from '@/app/(tabs)/ProfileScreen';
import ExploreScreen from '@/app/(tabs)/ExploreScreen';
import MapScreen from '@/app/(tabs)/MapScreens';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '@/constants/Colors';

function MyTabBar({ state, descriptors, navigation }) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();

  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Text style={{ color: isFocused ? colors.primary : colors.text }}>
              {label}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();
export function MyTabs() {
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,

      }}
    >
      <Tab.Screen name="Home" component={Home} 
      options={{
        tabBarLabel: 'Home',
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarIcon: ({ color, size }) =>(
          <Ionicons name="home" size={size} color={color} />
        )
      }}/>
      <Tab.Screen name="Explore" component={ExploreScreen} 
      options={{
        tabBarLabel: 'Explore',
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarIcon: ({ color, size }) =>(
          <Ionicons name="rocket" size={size} color={color} />
        )
      }}/>
      <Tab.Screen name="Map" component={MapScreen} 
      options={{
        tabBarLabel: 'Map',
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarIcon: ({ color, size }) =>(
          <Ionicons name="map" size={size} color={color} />
        )
      }}/>
      <Tab.Screen name="Profile" component={ProfileScreen} 
      options={{
        tabBarLabel: 'Profile',
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarIcon: ({ color, size }) =>(
          <Ionicons name="person-sharp" size={size} color={color} />
        )
      }}/>
    </Tab.Navigator>
  );
}