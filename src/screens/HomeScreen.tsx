import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useStore} from '../store/store';

const getCategoriesFromData = (data: any) => {
  let temp: any = {};
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

export default function HomeScreen() {
  const CoffeeList = useStore((state: any) => state.CoffeList);
  console.log('CoffeeList', CoffeeList);
  const [categories, setCategories] = useState([undefined]);
  const [searchText, setSearchText] = useState(undefined);
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });
  const [sortedCoffee, setSortedCoffee] = useState(undefined);

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

// export default HomeScreen;
