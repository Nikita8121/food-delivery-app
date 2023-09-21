import React from 'react';
import { Link } from 'expo-router';
import { View, Image, Text, Pressable } from 'react-native';
import { ArrowRight } from 'react-native-feather';
import { IDish } from 'src/models/dish.model';
import { createShortTextPreview } from 'src/utils/createShortTextPreview';

interface DishCardProps {
  dish: IDish;
}

export const DishCard = ({ dish }: DishCardProps) => {
  return (
    <Link
      href={{
        pathname: `/dish/[id]`,
        params: { id: dish.id },
      }}
      className="min-h-[150px] m-3 rounded-3xl flex-row  bg-white shadow-2xl shadow-black"
      asChild
    >
      <Pressable>
        <Image
          className="rounded-3xl w-2/5 h-full"
          source={{ uri: dish.image.url }}
        />

        <View className="w-3/5 flex-col p-2">
          {/* title */}
          <View className="flex flex-row justify-between">
            <Text className="text-lg font-bold">{dish.name}</Text>
            <ArrowRight className="" width={25} height={25} stroke="black" />
          </View>
          {/* short description */}
          <Text className="mt-1 text-sm text-gray-500 font font-bold">
            {createShortTextPreview(dish.description, 100)}
          </Text>
          {/* price */}
          <Text className="mt-2 text-xl font-bold">{dish.price[0].price}$</Text>
        </View>
      </Pressable>
    </Link>
  );
};
