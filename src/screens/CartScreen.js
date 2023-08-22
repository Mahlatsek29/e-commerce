import React, { useState } from 'react';
import { View, SafeAreaView, Image, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import COLORS from '../consts/colors';

const CartScreen = ({ navigation, cartItems, totalAmount, addToCart }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const increaseQuantityHandler = () => {
    setSelectedQuantity(selectedQuantity + 1);
  };

  const decreaseQuantityHandler = () => {
    if (selectedQuantity > 1) {
      setSelectedQuantity(selectedQuantity - 1);
    }
  };

  const addToCartHandler = () => {
    // Assuming "plant" is passed as a route parameter
    const updatedCartItem = { ...plant, quantity: selectedQuantity };
    addToCart(updatedCartItem);
  };

  const handleCheckoutPress = () => {
    navigation.navigate('Payment'); // Navigate to the payment screen
  };

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.cartItemImage} />
      <View style={styles.cartItemDetails}>
        <Text style={styles.cartItemName}>{item.name}</Text>
        <Text style={styles.cartItemPrice}>Price: R{item.price.toFixed(2)}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={decreaseQuantityHandler}>
            <Icon name="remove-circle" size={24} color={COLORS.primary} />
          </TouchableOpacity>
          <Text style={styles.cartItemQuantity}>{item.quantity}</Text>
          <TouchableOpacity onPress={increaseQuantityHandler}>
            <Icon name="add-circle" size={24} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: R{totalAmount.toFixed(2)}</Text>
        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckoutPress}>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  cartItemImage: {
    width: 80,
    height: 80,
    marginRight: 16,
    resizeMode: 'cover',
  },
  cartItemDetails: {
    flex: 1,
  },
  cartItemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartItemPrice: {
    fontSize: 16,
  },
  cartItemQuantity: {
    fontSize: 16,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: COLORS.lightGray,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
    totalAmount: state.cart.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    ),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (cartItem) => dispatch(addToCart(cartItem)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);