// import { useClerk, useUser } from '@clerk/expo';
import { styled } from 'nativewind';
import { Text, View } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';

const SafeAreaView = styled(RNSafeAreaView);

const SettingsScreen = () => {
  // const { signOut } = useClerk();
  // const { user } = useUser();

  return (
    <SafeAreaView className="flex-1 bg-background px-5 py-6">
      <View className="rounded-3xl border border-border bg-card p-5">
        <Text className="text-3xl font-sans-bold text-primary">Settings</Text>
        <Text className="mt-2 text-sm font-sans-medium text-muted-foreground">
          Keep your billing workspace secure and easy to access.
        </Text>

        {/* <View className="mt-6 gap-2 rounded-2xl bg-background p-4">
          <Text className="text-xs font-sans-semibold uppercase tracking-[1px] text-muted-foreground">
            Signed in as
          </Text>
          <Text className="text-lg font-sans-bold text-primary">
            {user?.fullName || user?.primaryEmailAddress?.emailAddress || 'Your account'}
          </Text>
          {user?.primaryEmailAddress?.emailAddress ? (
            <Text className="text-sm font-sans-medium text-muted-foreground">
              {user.primaryEmailAddress.emailAddress}
            </Text>
          ) : null}
        </View>

        <Pressable className="auth-button mt-6" onPress={() => void signOut()}>
          <Text className="auth-button-text">Sign out</Text>
        </Pressable> */}
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
