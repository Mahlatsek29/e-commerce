
import React, { useState } from "react";
import { RootSiblingParent } from "react-native-root-siblings";
import Toast from "react-native-root-toast";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
} from "react-native";
import { Paystack } from "react-native-paystack-webview";

export default function PaymentScreen({ route }) {
  const { cartItems, totalAmount } = route.params;

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
    if (
      billingDetail.billingName &&
      billingDetail.billingEmail &&
      billingDetail.billingMobile &&
      billingDetail.amount
    ) {
      
      const numericAmount = parseFloat(billingDetail.amount);
      if (!isNaN(numericAmount)) {
        setBillingDetail((prevState) => ({ ...prevState, amount: numericAmount }));
        setPay(true);
      } else {
        Toast.show("Amount must be a valid number", {
          duration: Toast.durations.LONG,
        });
      }
    } else {
      Toast.show("Fill in all fields", {
        duration: Toast.durations.LONG,
      });
    }
  };

  return (
    <RootSiblingParent>
      <ScrollView>
        <View style={styles.appBar}>
          <Text style={styles.appBarTitle}>Payment</Text>
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
            keyboardType="numeric" 
          />
          <View style={styles.totalContainer}>
            <Text style={styles.totalTitle}>Total Amount</Text>
            <Text style={styles.totalAmount}>R{totalAmount}</Text>
          </View>

          <Button
            title="Pay Now"
            color="#841584"
            accessibilityLabel="pay now"
            onPress={handleSubmit}
          />

          {pay && (
            <View style={{ flex: 1 }}>
              <Paystack
                paystackKey="pk_test_df2662d0591d57ddab2bcef149d5193725de4275"
                amount={billingDetail.amount * 100} // Paystack amount is in kobo (multiply by 100 to convert to kobo)
                currency="ZAR"
                billingEmail={billingDetail.billingEmail}
                billingMobile={billingDetail.billingMobile}
                activityIndicatorColor="green"

                onCancel={(e) => {
                  console.log(e);
                  Toast.show("Transaction Cancelled!!", {
                    duration: Toast.durations.LONG,
                  });
                }}
                onSuccess={(response) => {
                  console.log(response);
                  const responseObject = response["transactionRef"]["message"];
                  if (responseObject === "Approved") {
                    Toast.show("Transaction Approved!!", {
                      duration: Toast.durations.LONG,
                    });
                  }
                }}
                autoStart={true}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </RootSiblingParent>
  );
}

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: "#fff",
    height: 95,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  appBarTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#841584",
  },
  body: {
    padding: 10,
  },
  input: {
    borderColor: "black",
    borderWidth: 2,
    padding: 10,
    marginTop: 15,
  },
});