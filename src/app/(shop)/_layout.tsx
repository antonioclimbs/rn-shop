import { Tabs } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const TabsLayout = () => {
  return (
    // SafeAreaView is a component that renders its children in a safe area that is guaranteed not to be obscured by the device's status bar, navigation bar, notch, or home indicator.
    <SafeAreaView>
      <Tabs>
        {/* the name refers to file/page in the folder */}
        <Tabs.Screen name="index" options={{ headerShown: false }} />
        <Tabs.Screen name="orders" options={{}} />
      </Tabs>
    </SafeAreaView>
  );
};

export default TabsLayout;
