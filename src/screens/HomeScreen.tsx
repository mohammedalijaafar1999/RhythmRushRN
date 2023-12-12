import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useStore} from '../store/store';
import Coffee from '../types/Coffee';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import {ScrollView} from 'react-native';
import HeaderBar from '../components/HeaderBar';
import CustomIcon from '../components/CustomIcon';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface CategoryCount {
  [categoryName: string]: number;
}

const getCategoriesFromData = (data: Coffee[]) => {
  let temp: CategoryCount = {};
  for (let i = 0; i < data.length; i++) {
    if (temp[data[i].name] == undefined) {
      temp[data[i].name] = 1;
    } else {
      temp[data[i].name] += 1;
    }
  }
  let categories = Object.keys(temp);
  categories.unshift('All');
  return categories;
};

const getCoffeeList = (category: string, data: Coffee[]) => {
  if (category == 'All') {
    return data;
  } else {
    let coffelist = data.filter(item => item.name == category);
    return coffelist;
  }
};

export default function HomeScreen() {
  const CoffeeList = useStore((state: any) => state.CoffeList);
  console.log('CoffeeList', CoffeeList);
  const [categories, setCategories] = useState(
    getCategoriesFromData(CoffeeList),
  );
  const [searchText, setSearchText] = useState('');
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });
  const [sortedCoffee, setSortedCoffee] = useState(
    getCoffeeList(categoryIndex.category, CoffeeList),
  );

  const tabBarHeight = useBottomTabBarHeight();

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex}></StatusBar>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        {/* App Header */}
        <HeaderBar />
        <Text style={styles.ScreenTitle}>
          Find the best {'\n'}coffee for you
        </Text>

        {/* Search Input */}
        <View style={styles.SearchInputContainer}>
          <TouchableOpacity onPress={() => {}}>
            <Icon
              name="magnify"
              color={
                searchText.length > 0
                  ? COLORS.primaryOrangeHex
                  : COLORS.primaryGreyHex
              }
              size={FONTSIZE.size_18}
              style={styles.InputIcon}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Find your coffee"
            placeholderTextColor={COLORS.primaryLightGreyHex}
            value={searchText}
            onChangeText={text => {
              setSearchText(text);
            }}
            style={styles.TextInputContaier}
          />
        </View>

        {/* Category Scroller  */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
    paddingLeft: SPACING.space_30,
    paddingRight: SPACING.space_30,
  },

  ScrollViewFlex: {
    flexGrow: 1,
  },

  ScreenTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_28,
    color: COLORS.primaryWhiteHex,
  },

  SearchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SPACING.space_30,
    borderRadius: SPACING.space_20,
    backgroundColor: COLORS.primaryDarkGreyHex,
    // paddingLeft: SPACING.space_30,
  },

  InputIcon: {
    marginHorizontal: SPACING.space_20,
  },

  TextInputContaier: {
    flex: 1,
    height: SPACING.space_20 * 3,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },
});

// export default HomeScreen;
