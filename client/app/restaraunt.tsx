import { Link, useRouter } from 'expo-router';
import React from 'react';
import {
  View,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  ArrowLeft as ArrowLeftIcon,
  MapPin as MapPinIcon,
} from 'react-native-feather';
import { ScrollView } from 'react-native-gesture-handler';
import { featured } from 'src/constants';
import { themeColors } from 'src/theme';

const restaraunt = featured.restaurants[0];

const RestarauntScreen = () => {
  const navigation = useRouter();
  return (
    <SafeAreaView className="relati">
      <ScrollView>
        <View>
          <Image className="w-full h-72" source={restaraunt.image} />
          <TouchableOpacity
            activeOpacity={0.9}
            className="absolute --50 top-10 left-2 bg-gray-50 p-2 rounded-full shadow"
            onPress={() => navigation.back()}
          >
            <ArrowLeftIcon strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-white -mt-12 pt-6"
        >
          <View className="px-5">
            <Text className="text-3xl font-bold">{restaraunt.name}</Text>
          </View>

          <View className="flex-row px-5">
            <View className="flex flex-row items-center text-xs mb-1">
              <Image
                source={require('src/assets/images/fullStar.png')}
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
          <Text className="text-gray-500">{restaraunt.description}</Text>
          <View className="pb-36 bg-white">
            <Text className="text-gray-500"></Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RestarauntScreen;
