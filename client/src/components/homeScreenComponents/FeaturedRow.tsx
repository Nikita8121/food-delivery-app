import { View, Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { themeColors } from 'src/theme/index';
import { RestarauntCard } from './RestarauntCard';

interface FeaturedRowProps {
  title: string;
  restaraunts: any[];
  description: string;
}

export const FeaturedRow = ({
  title,
  restaraunts,
  description,
}: FeaturedRowProps) => {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-gray-500 text-xs">{description}</Text>
        </View>
        <TouchableOpacity>
          <Text style={{ color: themeColors.text }} className="font-semibold">
            See all
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="overflow-visible py-5"
      >
        {restaraunts.map((restaraunt, index) => (
          <RestarauntCard restaraunt={restaraunt} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};
