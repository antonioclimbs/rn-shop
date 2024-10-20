import { Tabs } from 'expo-router';

const TabsLayout = () => {
  return (
    <Tabs>
      {/* the name refers to file/page in the folder */}
      <Tabs.Screen name="index" options={{}} />
      <Tabs.Screen name="orders" options={{}} />
    </Tabs>
  );
};

export default TabsLayout;
