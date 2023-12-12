import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useStore} from '../store/store';
import Coffee from '../types/Coffee';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import {ScrollView} from 'react-native';
import HeaderBar from '../components/HeaderBar';

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
  const [searchText, setSearchText] = useState(undefined);
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },

  ScrollViewFlex: {
    flexGrow: 1,
  },

  ScreenTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_28,
    color: COLORS.primaryWhiteHex,
    paddingLeft: SPACING.space_30,
  },
});

// export default HomeScreen;
