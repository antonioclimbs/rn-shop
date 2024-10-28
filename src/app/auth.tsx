import { Text, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const authSchema = zod.object({
  email: zod.string().email({ message: 'Invalid email address' }),
  password: zod
    .string()
    .min(6, { message: 'Password must be at least 6 characters long' }),
});

export default function Auth() {
  const {} = useForm({
    resolver: zodResolver(authSchema),
    defaultValues: { email: '', password: '' },
  });

  return (
    <View>
      <Text>Auth</Text>
    </View>
  );
}
