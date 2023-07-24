import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
  const navigation = useNavigation();

  const plantsInCart = [
    { id: 1, img: require('../assets/plant1.png'), plant: 'Plant 1', price: 10, quantity: 1 },
    { id: 2, img: require('../assets/plant2.png'), plant: 'Plant 2', price: 20, quantity: 2 },
    { id: 3, img: require('../assets/plant3.png'), plant: 'Plant 3', price: 30, quantity: 3 },
  ];

  const calculateTotalPrice = (plantsInCart) => {
    let totalPrice = 0;
    plantsInCart.forEach((plant) => {
      totalPrice += plant.price * plant.quantity;
    });
    return totalPrice.toFixed(2);
  };

  const CartCard = ({ item }) => {
    return (
      <View style={styles.cartCard}>
        <Image source={item.img} style={{ height: 80, width: 80 }} />
        <View style={{ height: 100, marginLeft: 10, paddingVertical: 20, flex: 1 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.plant}</Text>
          <Text style={{ fontSize: 17, fontWeight: 'bold' }}>${item.price}</Text>
        </View>
        <View style={styles.minusBtn}>
          <Text style={styles.minusBtnText}>-</Text>
        </View>
        <Text style={{ fontSize: 20, marginHorizontal: 10, fontWeight: 'bold' }}>{item.quantity}</Text>
        <View style={styles.plusBtn}>
          <Text style={styles.plusBtnText}>+</Text>
        </View>
        <View style={{ marginRight: 20, alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{item.quantity}</Text>
          <View style={styles.actionBtn}>
            <TouchableOpacity onPress={() => console.log('Remove pressed.')}>
              <Icon name="remove" size={25} color={COLORS.white} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Add pressed.')}>
              <Icon name="add" size={25} color={COLORS.white} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <View style={styles.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Cart</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        data={plantsInCart}
        renderItem={({ item }) => <CartCard item={item} />}
        ListFooterComponent={() => (
          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Total Price</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>${calculateTotalPrice(plantsInCart)}</Text>
            </View>
            <View style={styles.buyBtn}>
              <TouchableOpacity onPress={() => navigation.navigate('Payment')} style={styles.button}>
                <Text style={{ color: COLORS.white, fontSize: 18, fontWeight: 'bold' }}>CHECKOUT</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  minusBtn: {
    width: 20,
    height: 25,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.dark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  minusBtnText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  plusBtn: {
    width: 20,
    height: 25,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.dark,
    justifyContent: 'center',
    alignItems: 'center'
  },
  plusBtnText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buyBtn: {
    marginTop: 20,
    width: 130,
    height: 50,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
});

export default CartScreen;
