import { Redirect, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { CATEGORIES } from '../../../assets/categories';
import { PRODUCTS } from '../../../assets/products';

const Category = () => {
  const { slug } = useLocalSearchParams<{ slug: string }>();

  const category = CATEGORIES.find((category) => category.slug === slug);

  if (!category) return <Redirect href="/404" />;

  const products = PRODUCTS.filter((product) => product.category.slug === slug);

  return (
    <View>
      <Text>Category</Text>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({});
