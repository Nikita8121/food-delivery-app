import React from 'react';
import { View, Image, Text } from 'react-native';
import { ArrowRight } from 'react-native-feather';

export const DishCard = () => {
  return (
    <View className="min-h-[150px] rounded-3xl flex-row  bg-white shadow-2xl shadow-black">
      <Image
        className="rounded-3xl w-2/5 h-full"
        source={require('../../../assets/images/pizza.png')}
      />

      <View className="w-3/5 flex-col p-2">
        {/* title */}
        <View className="flex flex-row justify-between">
          <Text className="text-lg font-bold">Pizza</Text>
          <ArrowRight className="" width={25} height={25} stroke="black" />
        </View>
        {/* short description */}
        <Text className="mt-1 text-sm text-gray-500 font font-bold">
          Low fat
        </Text>
        {/* price */}
        <Text className="mt-2 text-xl font-bold">12$</Text>
      </View>
    </View>
  );
};
