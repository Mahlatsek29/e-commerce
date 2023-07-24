import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
  const navigation = useNavigation();
  const [plantsInCart, setPlantsInCart] = useState([
    { id: 1, img: require('../assets/plant1.png'), plant: 'Plant 1', price: 39.99, quantity: 1 },
    { id: 2, img: require('../assets/plant2.png'), plant: 'Plant 2', price: 29.99, quantity: 2 },
    { id: 3, img: require('../assets/plant3.png'), plant: 'Plant 3', price: 25.99, quantity: 3 },
  ]);

  const calculateTotalPrice = (plantsInCart) => {
    let totalPrice = 0;
    plantsInCart.forEach((plant) => {
      totalPrice += plant.price * plant.quantity;
    });
    return totalPrice.toFixed(2);
  };

  const handleQuantityChange = (itemId, type) => {
    setPlantsInCart((prevPlants) =>
      prevPlants.map((item) => {
        if (item.id === itemId) {
          const updatedQuantity = type === 'add' ? item.quantity + 1 : item.quantity - 1;
          return { ...item, quantity: Math.max(updatedQuantity, 0) };
        }
        return item;
      })
    );
  };

  const CartCard = ({ item }) => {
    return (
      <View style={styles.cartCard}>
        <Image source={item.img} style={{ height: 80, width: 80 }} />
        <View style={{ height: 100, marginLeft: 10, paddingVertical: 20, flex: 1 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.plant}</Text>
          <Text style={{ fontSize: 17, fontWeight: 'bold' }}>R{item.price}</Text>
        </View>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => handleQuantityChange(item.id, 'subtract')}>
            <Text style={styles.quantityBtnText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => handleQuantityChange(item.id, 'add')}>
            <Text style={styles.quantityBtnText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginRight: 20, alignItems: 'center' }}>
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
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>R{calculateTotalPrice(plantsInCart)}</Text>
            </View>
            <View style={styles.checkoutBtn}>
              <TouchableOpacity onPress={() => navigation.navigate('Payment', { cartItems: plantsInCart })} style={styles.button}>
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
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityBtnText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 20,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  checkoutBtn: {
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
