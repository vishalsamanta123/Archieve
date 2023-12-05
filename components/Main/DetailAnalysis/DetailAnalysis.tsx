import { StyleSheet, TouchableOpacity, View } from "react-native";
import {
  GluestackUIProvider,
  Text,
  Box,
  Icon,
  ChevronLeftIcon,
  FlatList,
} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import React from "react";
import DropDown from "../../../components/General/DropDown/index.tsx";
// import DropDown from "./src/components/DropDown";
// import { FONT_FAMILY, FontSize } from "./src/constants/Fonts";
import Tab from "../../../components/General/Tab/Tab.tsx";
import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";
import { BLACK_COLOR_CODE } from "../../../constants/Colors";

const DetailAnalysis = () => {
  const data = [
    {
      productId: "XS1932866079",
      quantity: "S-126-726-0",
      MTM_Price: "Deposit",
      averagePrice: "350735379",
      marketValue: "Singapore Dollar",
      unrealized: 0,
    },
    {
      productId: "XS1932866079",
      quantity: "S-126-726-0",
      MTM_Price: "Deposit",
      averagePrice: "350735379",
      marketValue: "Singapore Dollar",
      unrealized: 0,
    },
    {
      productId: "XS1932866079",
      quantity: "S-126-726-0",
      MTM_Price: "Deposit",
      averagePrice: "350735379",
      marketValue: "Singapore Dollar",
      unrealized: 0,
    },
    {
      productId: "XS1932866079",
      quantity: "S-126-726-0",
      MTM_Price: "Deposit",
      averagePrice: "350735379",
      marketValue: "Singapore Dollar",
      unrealized: 0,
    },
    {
      productId: "XS1932866079",
      quantity: "S-126-726-0",
      MTM_Price: "Deposit",
      averagePrice: "350735379",
      marketValue: "Singapore Dollar",
      unrealized: 0,
    },
  ];
  // const data = [
  //   {value: 50, text: 'A'},
  //   {value: 80, text: 'A'},
  //   {value: 90, text: 'A'},
  //   {value: 70, text: 'A'},
  // ];

  // const handlePress = (item: any) => {
  //   console.log('Pressed', item);
  // };
  return (
    <GluestackUIProvider config={config}>
      <Box style={styles.mainView}>
        <Box style={styles.safeViewStyle}>
          <TouchableOpacity>
            <Icon as={ChevronLeftIcon} size="lg" />
          </TouchableOpacity>
          <Box
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.headerTextStyle}>Asset Class</Text>
          </Box>
        </Box>
        <Box>
          <DropDown />
          <FlatList
            style={{ marginBottom: 120 }}
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({ item, index }) => {
              return <Tab item={item} index={index} />;
            }}
          />
        </Box>
      </Box>
      {/* <BarChart data={data} onPress={(item: any) => {
          handlePress(item);
        }} />
      <LineChart data={data} />
      <PieChart
        donut={true}
        data={data}
        focusOnPress={true}
        onPress={(item: any) => {
          handlePress(item);
        }} */}
      {/* /> */}
    </GluestackUIProvider>
  );
};

export default DetailAnalysis;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  safeViewStyle: {
    flexDirection: "row",
    marginLeft: 10,
    paddingTop: 10,
  },
  headerTextStyle: {
    fontSize: 22,
    // fontFamily: FONT_FAMILY.REGULAR,
    color: BLACK_COLOR_CODE,
  },
});
