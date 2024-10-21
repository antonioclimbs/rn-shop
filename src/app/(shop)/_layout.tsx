import { Tabs } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={24} {...props} style={{ color: '#1BC464' }} />;
}

const TabsLayout = () => {
  return (
    // SafeAreaView is a component that renders its children in a safe area that is guaranteed not to be obscured by the device's status bar, navigation bar, notch, or home indicator.
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#1BC464',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: { fontSize: 16 },
          tabBarStyle: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingTop: 10,
          },
          headerShown: false,
        }}
      >
        {/* the name refers to file/page in the folder */}
        <Tabs.Screen
          name="index"
          options={{
            title: 'shop',
            tabBarIcon: (props) => (
              <TabBarIcon name="shopping-cart" {...props} />
            ),
          }}
        />
        <Tabs.Screen
          name="orders"
          options={{
            // headerShown: false
            title: 'orders',
            tabBarIcon: (props) => <TabBarIcon name="book" {...props} />,
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
