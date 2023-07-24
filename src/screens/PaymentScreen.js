import React, { useState } from "react";
import Toast from "react-native-root-toast";
import { Text, View, ScrollView, TextInput, Button, StyleSheet } from "react-native";

// Define the new COLORS object
const COLORS = {
  white: '#fff',
  dark: '#000',
  red: '#F52A2A',
  light: '#F1F1F1',
  green: '#00B761',
};

// Import the PaymentScreen component
import PaymentScreen from './PaymentScreen';

export default function App() {
  const [pay, setPay] = useState(false);
  const [billingDetail, setBillingDetail] = useState({
    billingName: "",
    billingEmail: "",
    billingMobile: "",
    amount: "",
  });

  const handleOnchange = (text, input) => {
    setBillingDetail((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleSubmit = () => {
    // Implement your payment logic here
    // For this example, let's just show the PaymentScreen when the user clicks on "Pay Now" button
    setPay(true);
  };

  if (pay) {
    // Render the PaymentScreen when pay is true
    return <PaymentScreen />;
  }

  return (
    <ScrollView>
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>React Native and Paystack</Text>
      </View>
      <View style={styles.body}>
        <TextInput
          style={styles.input}
          placeholder="Billing Name"
          onChangeText={(text) => handleOnchange(text, "billingName")}
          value={billingDetail?.billingName}
        />
        <TextInput
          style={styles.input}
          placeholder="Billing Email"
          onChangeText={(text) => handleOnchange(text, "billingEmail")}
          value={billingDetail?.billingEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Billing Mobile"
          onChangeText={(text) => handleOnchange(text, "billingMobile")}
          value={billingDetail?.billingMobile}
        />
        <TextInput
          style={styles.input}
          placeholder="Amount"
          onChangeText={(text) => handleOnchange(text, "amount")}
          value={billingDetail?.amount}
        />
        <Button
          title="Pay Now"
          color={COLORS.green} // Set the color for the button using COLORS.green
          accessibilityLabel="pay now"
          onPress={handleSubmit}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: COLORS.white, 
    height: 95,
    borderBottomColor: COLORS.light, 
    borderBottomWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  appBarTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: COLORS.red, 
  },
  body: {
    padding: 10,
  },
  input: {
    borderColor: COLORS.dark, 
    borderWidth: 2,
    padding: 10,
    marginTop: 15,
  },
});
