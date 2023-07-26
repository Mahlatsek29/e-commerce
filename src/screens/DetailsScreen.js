import React, { useState } from 'react';
import { View, SafeAreaView, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';

const DetailsScreen = ({ navigation, route }) => {
  const plant = route.params;
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
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
    const updatedCartItems = [...cartItems, { ...plant, quantity: selectedQuantity }];
    setCartItems(updatedCartItems);
    const updatedTotalAmount = totalAmount + plant.price * selectedQuantity;
    setTotalAmount(updatedTotalAmount);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <View style={styles.header}>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
        <Icon name="shopping-cart" size={28} />
      </View>
      <View style={styles.imageContainer}>
        <Image source={plant.img} style={{ resizeMode: 'contain', flex: 1 }} />
      </View>
      <View style={styles.detailsContainer}>
        <View
          style={{
            marginLeft: 5,
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}
        >
          <View style={styles.line} />
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Best choice</Text>
        </View>
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{plant.name}</Text>
          <View style={styles.priceTag}>
            <Text
              style={{
                marginLeft: 15,
                color: COLORS.white,
                fontWeight: 'bold',
                fontSize: 16,
              }}
            >
              R{plant.price}
            </Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>About</Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 16,
              lineHeight: 22,
              marginTop: 10,
            }}
          >
            {plant.about}
          </Text>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            {/* Quantity */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <TouchableOpacity style={styles.borderBtn} onPress={decreaseQuantityHandler}>
                <Text style={styles.borderBtnText}>-</Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal: 10,
                  fontWeight: 'bold',
                }}
              >
                {selectedQuantity}
              </Text>
              <TouchableOpacity style={styles.borderBtn} onPress={increaseQuantityHandler}>
                <Text style={styles.borderBtnText}>+</Text>
              </TouchableOpacity>
            </View>

            {/* Add to Cart Button */}
            <View style={styles.addtoCartBtn}>
              <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.button}>
                <Text style={{ color: COLORS.white, fontSize: 18, fontWeight: 'bold' }}>
                  Add To Cart
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 0.4,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: COLORS.light,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 5,
    paddingTop: 30,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: COLORS.dark,
    marginBottom: 5,
    marginRight: 3,
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
  borderBtnText: { fontWeight: 'bold', fontSize: 28 },
  addtoCartBtn: {
    width: 120,
    height: 50,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  priceTag: {
    backgroundColor: COLORS.green,
    width: 80,
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
});

export default DetailsScreen;
