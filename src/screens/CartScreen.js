import React, { useState } from 'react';
import { View, SafeAreaView, Image, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import COLORS from '../consts/colors';
import { addToCart } from '../redux/actions/cartActions';

const CartScreen = ({ navigation, route, cartItems, totalAmount }) => {
  const plant = route.params?.plant || null;
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
    if (plant) {
      const updatedCartItems = [...cartItems, { ...plant, quantity: selectedQuantity }];
      setCartItems(updatedCartItems);
      const updatedTotalAmount = totalAmount + plant.price * selectedQuantity;
      setTotalAmount(updatedTotalAmount);
    }
  };

  // Checkout Button Press Handler
  const handleCheckoutPress = () => {
    navigation.navigate('Payment', { cartItems, totalAmount });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Cart Items */}
      <View style={styles.cartItemsContainer}>
        <Text style={styles.cartItemsTitle}>Cart Items</Text>
        {cartItems.length === 0 ? (
          <Text>Your cart is empty.</Text>
        ) : (
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.cartItemRow}>
                <Text>{item.name} (x{item.quantity})</Text>
                <Text>R{item.price * item.quantity}</Text>
              </View>
            )}
          />
        )}
      </View>

      {/* Total Amount */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalTitle}>Total Amount</Text>
        <Text style={styles.totalAmount}>R{totalAmount}</Text>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
        <Icon name="shopping-cart" size={28} onPress={() => navigation.navigate('Cart')} />
      </View>

      {/* Plant Image */}
      <View style={styles.imageContainer}>
        {plant && <Image source={plant.img} style={styles.image} resizeMode="contain" />}
      </View>

      {/* Plant Details */}
      {plant && (
        <View style={styles.detailsContainer}>
          <View style={styles.line} />
          <Text style={styles.plantTitle}>{plant.name}</Text>
          <View style={styles.priceTag}>
            <Text style={styles.priceTagText}>R{plant.price}</Text>
          </View>
          <Text style={styles.aboutTitle}>About</Text>
          <Text style={styles.aboutText}>{plant.about}</Text>

          {/* Quantity */}
          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.borderBtn} onPress={decreaseQuantityHandler}>
              <Text style={styles.borderBtnText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{selectedQuantity}</Text>
            <TouchableOpacity style={styles.borderBtn} onPress={increaseQuantityHandler}>
              <Text style={styles.borderBtnText}>+</Text>
            </TouchableOpacity>
          </View>

          {/* Add to Cart Button */}
          <View style={styles.addToCartContainer}>
            <TouchableOpacity onPress={addToCartHandler} style={styles.button}>
              <Text style={styles.buttonText}>Add To Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Checkout Button */}
      <View style={styles.checkoutBtn}>
        <TouchableOpacity onPress={handleCheckoutPress} style={styles.button}>
          <Text style={{ color: COLORS.white, fontSize: 18, fontWeight: 'bold' }}>CHECKOUT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: COLORS.white,
},
header: {
paddingVertical: 20,
flexDirection: 'row',
alignItems: 'center',
marginHorizontal: 20,
},
imageContainer: {
flex: 0.4,
marginTop: 20,
justifyContent: 'center',
alignItems: 'center',
},
image: {
flex: 1,
},
detailsContainer: {
flex: 1,
backgroundColor: COLORS.light,
marginHorizontal: 7,
marginBottom: 7,
borderRadius: 20,
marginTop: 5,
paddingTop: 30,
paddingHorizontal: 20,
},
line: {
width: 25,
height: 2,
backgroundColor: COLORS.dark,
marginBottom: 5,
marginRight: 3,
},
priceTag: {
backgroundColor: COLORS.green,
width: 80,
height: 40,
justifyContent: 'center',
borderTopLeftRadius: 25,
borderBottomLeftRadius: 25,
},
priceTagText: {
marginLeft: 15,
color: COLORS.white,
fontWeight: 'bold',
fontSize: 16,
},
aboutTitle: {
fontSize: 15,
fontWeight: 'bold',
marginTop: 20,
},
aboutText: {
color: 'grey',
fontSize: 16,
lineHeight: 22,
marginTop: 10,
},
quantityContainer: {
marginTop: 20,
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
},
borderBtn: {
borderColor: 'grey',
borderWidth: 1,
borderRadius: 5,
justifyContent: 'center',
alignItems: 'center',
width: 40,
height: 40,
},
borderBtnText: {
fontWeight: 'bold',
fontSize: 28,
},
quantityText: {
fontSize: 20,
marginHorizontal: 10,
fontWeight: 'bold',
},
addToCartContainer: {
marginTop: 20,
alignItems: 'center',
},
button: {
width: 120,
height: 50,
backgroundColor: COLORS.green,
justifyContent: 'center',
alignItems: 'center',
borderRadius: 30,
},
buttonText: {
color: COLORS.white,
fontSize: 18,
fontWeight: 'bold',
},
totalContainer: {
paddingHorizontal: 20,
marginTop: 20,
},
totalTitle: {
fontSize: 18,
fontWeight: 'bold',
},
totalAmount: {
fontSize: 22,
fontWeight: 'bold',
},
cartItemsContainer: {
  paddingHorizontal: 20,
  marginTop: 20,
},
cartItemsTitle: {
  fontSize: 18,
  fontWeight: 'bold',
},
cartItemRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 10,
},
});

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
    totalAmount: state.cart.totalAmount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (cartItems) => dispatch(addToCart(cartItems)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);