import { useCallback, useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';

import ContentLoader, { Circle } from 'react-content-loader/native';
import { themeColors } from 'src/theme';
import { useCategoryQuery } from 'src/api/category.api';

interface CategoriesProps {
  setCategory: (category: string) => void;
}

export const Categories = ({ setCategory }: CategoriesProps) => {
  const { data: categories, isLoading: isCategoriesLoading } =
    useCategoryQuery();
  const [activeCategory, setActiveCategory] = useState('');

  useEffect(() => {
    setCategory(activeCategory);
  }, [activeCategory]);

  const CategoriesLoader = useCallback(
    () => (
      <ContentLoader
        height={50}
        width={'100%'}
        speed={1.5}
        backgroundColor={themeColors.bgColor(1)}
      >
        {/* Only SVG shapes */}
        <Circle cx="30" cy="25" r="25" />
        <Circle x={60} cx="30" cy="25" r="25" />
        <Circle x={120} cx="30" cy="25" r="25" />
        <Circle x={180} cx="30" cy="25" r="25" />
        <Circle x={240} cx="30" cy="25" r="25" />
        <Circle x={300} cx="30" cy="25" r="25" />
      </ContentLoader>
    ),
    []
  );

  const RenderCategories = useCallback(() => {
    return categories?.map((category, index) => {
      const isActive = category.categoryName === activeCategory;
      const btnClass = isActive ? 'bg-gray-600' : 'bg-gray-200';
      const textClass = isActive
        ? 'font-semibold text-gray-800'
        : 'text-gray-500';
      /*       console.log(category.categoryIcon.url); */
      return (
        <View key={index} className="flex justify-center items-center mr-2">
          <TouchableOpacity
            onPress={() => setActiveCategory(category.categoryName)}
            className={`flex justify-center p-2 rounded-full shadow ${btnClass}`}
          >
            <Image
              style={{ width: 45, height: 45 }}
              source={{ uri: category.categoryIcon.url }}
            />
          </TouchableOpacity>
          <Text className={`text-sm ${textClass}`}>
            {category.categoryName}
          </Text>
        </View>
      );
    });
  }, [categories, activeCategory]);

  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {isCategoriesLoading ? <CategoriesLoader /> : <RenderCategories />}
      </ScrollView>
    </View>
  );
};
