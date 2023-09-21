import { useLocalSearchParams } from 'expo-router';
import React, { useMemo } from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import { useGetDish } from 'src/api/dish.api';
import { useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Facebook } from 'react-native-feather';

const DishScreen = () => {
  const { id } = useLocalSearchParams();

  if (!id || typeof id !== 'string') throw new Error();
  const parsedId = useMemo(() => parseInt(id), [id]);

  const { data: dish, isLoading: isLoadingDish } = useGetDish(
    parseInt(id as string),
    {
      enabled: !!parsedId,
    }
  );

  useEffect(() => {
    console.log(dish);
  }, [dish]);

  if (!dish || isLoadingDish) return <Facebook />;

  return (
    <>
      <ScrollView className="min-h-full">
        <View className="">
          <Image
            className="h-[300px] w-full"
            source={{ uri: dish.image.url }}
          />
        </View>
        <View className="rounded-tl-[50px] rounded-tr-[50px] bg-orange-600">
          <Text className="text-center font-bold">{dish.name}</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default DishScreen;
