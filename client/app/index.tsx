import React, { useEffect } from 'react';
import { View, Text, StatusBar, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


import { Categories } from 'src/components/homeScreenComponents/Categories';
import { DishCard } from 'src/components/homeScreenComponents/DishComponents/DishCard';
import { SearchBar } from 'src/components/homeScreenComponents/SearchBar';

function HomeScreen() {
  

  return (
    <>
      <SafeAreaView className="bg-white pb-5">
        {/* search bar */}
        <StatusBar barStyle="dark-content" />
        <SearchBar />

        {/* main */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 30,
          }}
          className="overflow-auto"
        >
          {/* categories */}
          <Categories/>

          {/* dishes */}
          <View className="mt-10 px-4">
            <DishCard />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default HomeScreen;
