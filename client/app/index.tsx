import React, { useEffect, useState } from 'react';
import { StatusBar, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Categories } from 'src/components/homeScreenComponents/Categories';
import { DishList } from 'src/components/homeScreenComponents/DishComponents/DishList';
import { SearchBar } from 'src/components/homeScreenComponents/SearchBar';

function HomeScreen() {
  const [category, setCategory] = useState<string>('');

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
          <Categories setCategory={setCategory} />

          {/* dishes */}
          <DishList />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default HomeScreen;
