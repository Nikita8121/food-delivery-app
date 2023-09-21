import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { useGetDishesByCategory } from 'src/api/dish.api';
import { IDish } from 'src/models/dish.model';
import { extractPropertyValuesFromArray } from 'src/utils/extractPropertyValuesFromArray ';
import { DishCard } from './DishCard';

interface DishListProps {
  currentCategory: string;
}

export const DishList = ({ currentCategory }: DishListProps) => {
  const { fetchNextPage, data: dishes } = useGetDishesByCategory(
    currentCategory,
    {
      enabled: !!currentCategory,
    }
  );
  return (
    <ScrollView className="py-" showsVerticalScrollIndicator={false}>
      {dishes &&
        extractPropertyValuesFromArray<IDish>('data', dishes.pages).map(
          (dish, i) => <DishCard key={i.toString()} dish={dish} />
        )}
    </ScrollView>
  );
};
