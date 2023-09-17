import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { categories } from 'src/constants/index';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState('');
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
        {categories.map((category, index) => {
          const isActive = category.name === activeCategory;
          const btnClass = isActive ? 'bg-gray-600' : 'bg-gray-200';
          const textClass = isActive
            ? 'font-semibold text-gray-800'
            : 'text-gray-500';

          return (
            <View key={index} className="flex justify-center items-center mr-2">
              <TouchableOpacity
                onPress={() => setActiveCategory(category.name)}
                className={`flex justify-center p-2 rounded-full shadow ${btnClass}`}
              >
                <Image
                  style={{ width: 45, height: 45 }}
                  source={category.image}
                />
              </TouchableOpacity>
              <Text className={`text-sm ${textClass}`}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
