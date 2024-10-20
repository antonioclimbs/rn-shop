import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(shop)"
        options={{ headerShown: false, title: 'Shop' }}
      />
      <Stack.Screen
        name="categories"
        options={{ headerShown: true, title: 'Categories' }}
      />
      <Stack.Screen
        name="product"
        options={{ headerShown: true, title: 'Product' }}
      />
      {/* this will be a modal */}
      <Stack.Screen
        name="cart"
        options={{ presentation: 'modal', title: 'Shopping Cart' }}
      />
      {/* will set a name later */}
      <Stack.Screen name="auth" options={{ headerShown: true }} />
    </Stack>
  );
}
