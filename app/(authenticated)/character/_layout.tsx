import { BackButton } from '@/components/BackButton';
import { router, Stack } from 'expo-router';

export default function CharacterStackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="[id]"
        options={{
          title: '',
          headerLeft: () => <BackButton onPress={() => router.back()} />,
        }}
      />
    </Stack>
  );
}
