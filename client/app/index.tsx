import React, { useEffect, useState } from 'react';
import { StatusBar, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGetDishesByCategory } from 'src/api/dish.api';

import { Categories } from 'src/components/homeScreenComponents/Categories';
import { DishList } from 'src/components/homeScreenComponents/DishComponents/DishList';
import { SearchBar } from 'src/components/homeScreenComponents/SearchBar';

function HomeScreen() {
  const [category, setCategory] = useState<string>('');

  return (
    <>
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
        <DishList currentCategory={category} />
      </ScrollView>
    </>
  );
}

export default HomeScreen;
