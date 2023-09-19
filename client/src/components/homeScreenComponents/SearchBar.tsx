import React from 'react';
import { View, TextInput, Text } from 'react-native';
import {
  MapPin as MapPinIcon,
  Search as SearchIcon,
  Sliders as SlidersIcon,
} from 'react-native-feather';
import { themeColors } from 'src/theme';

export const SearchBar = () => {
  return (
    <View className="flex-row items-center space-x-2 px-4 py-2">
      <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
        <SearchIcon height="25" width="25" stroke="gray" />
        <TextInput placeholder="Restaraunts" className="ml-2 flex-1" />
        <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
          <MapPinIcon height="25" width="25" stroke="gray" />
          <Text>New York, NYC</Text>
        </View>
      </View>
      <View
        style={{ backgroundColor: themeColors.bgColor(1) }}
        className="p-3 rounded-full bg-gray-300"
      >
        <SlidersIcon height="20" width="20" stroke="white" />
      </View>
    </View>
  );
};
