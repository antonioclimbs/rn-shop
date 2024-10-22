import { Stack } from 'expo-router';
import { ToastProvider } from 'react-native-toast-notifications';

export default function RootLayout() {
  return (
    <ToastProvider>
      <Stack>
        <Stack.Screen
          name="(shop)"
          options={{ headerShown: false, title: 'Shop' }}
        />
        <Stack.Screen
          name="categories"
          options={{ headerShown: false, title: 'Categories' }}
        />
        <Stack.Screen
          name="product"
          options={{ headerShown: false, title: 'Product' }}
        />
        {/* this will be a modal */}
        <Stack.Screen
          name="cart"
          options={{ presentation: 'modal', title: 'Shopping Cart' }}
        />
        {/* will set a name later */}
        <Stack.Screen name="auth" options={{ headerShown: true }} />
      </Stack>
    </ToastProvider>
  );
}
