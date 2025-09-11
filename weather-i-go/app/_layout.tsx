import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs';

{/* intilaizes a new tab --> example name ="index", index is the tab name, after intlaize create a new file like index.tsx  */}

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Label>Home</Label>
        <Icon sf="house.fill" drawable="custom_android_drawable" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="settings">
        <Icon sf="gear" drawable="custom_settings_drawable" />
        <Label>Settings</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="test1">
        <Icon sf="gear" drawable="custom_settings_drawable" />
        <Label>Profile</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
    
  );
}