import React from 'react';
import { View, Text, StatusBar, ScrollView } from 'react-native';
import {
  MapPin as MapPinIcon,
  Search as SearchIcon,
  Sliders as SlidersIcon,
} from 'react-native-feather';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { featured } from 'src/constants/index';
import { themeColors } from 'src/theme';

import Categories from 'src/components/homeScreenComponents/Categories';
import { FeaturedRow } from 'src/components/homeScreenComponents/FeaturedRow';

function HomeScreen() {
  return (
    <>
      <SafeAreaView className="bg-white pb-5">
        {/* search bar */}
        <StatusBar barStyle="dark-content" />
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

        {/* main */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 30,
          }}
          className='overflow-auto'
        >
          {/* categories */}
          <Categories />

          {/* featured */}
          <View className="mt-5">
            {[featured, featured, featured].map((item, index) => (
              <FeaturedRow
                key={index}
                title={item.title}
                restaraunts={item.restaurants}
                description={item.description}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default HomeScreen;
