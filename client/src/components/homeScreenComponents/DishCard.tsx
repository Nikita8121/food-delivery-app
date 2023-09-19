import { Link, useNavigation } from 'expo-router';
import React from 'react';
import { View, Image, Text } from 'react-native';
import { MapPin as MapPinIcon } from 'react-native-feather';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { themeColors } from 'src/theme';

interface RestarauntCardProps {
  restaraunt: any;
}

export const RestarauntCard = ({ restaraunt }: RestarauntCardProps) => {
  return (
    <Link href="/restaraunt">
      <TouchableWithoutFeedback>
        <View className="mr-6 my-2 bg-white rounded-3xl shadow-lg shadow-black">
          <Image
            className="h-36 w-64 rounded-t-3xl"
            source={restaraunt.image}
          />
          <View className=" px-3 pb-4 space-y-2">
            <Text className="text-lg fontt-bold pt-2">{restaraunt.name}</Text>

            <View className="flex flex-row items-center text-xs mb-1">
              <Image
                source={require('../../assets/images/fullStar.png')}
                className="h-4 w-4 mr-1"
              />
              <Text className="text-green-700 pr-1">{restaraunt.stars}</Text>
              <Text className="text-gray-700 pr-1">({restaraunt.reviews})</Text>
              <Text className="font-semibold">{restaraunt.category}</Text>
            </View>

            <View className="flex flex-row">
              <MapPinIcon color="gray" width="15" height="15" />
              <Text className="text-gray-700 text-xs pl-2">
                Nearby {restaraunt.address}
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Link>
  );
};
