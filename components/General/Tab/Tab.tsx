import { StyleSheet } from "react-native";
import React from "react";
import { Box, GluestackUIProvider, Image, Text } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import {
  BLACK_COLOR_CODE,
  BLUE_COLOR_CODE,
  WHITE_COLOR_CODE,
  GREY_COLOR_CODE,
  LIGHT_GREY_COLOR_CODE,
  SECOND_WHITE_COLOR,
} from "../../../constants/Colors";
import { image } from "../../../constants/images";
// import { FONT_FAMILY } from "../../constants/Fonts";

const Tab = (props: any) => {
  const { item } = props;
  return (
    <GluestackUIProvider config={config}>
      <Box style={styles.mainView}>
        <Box style={styles.innerView}>
          <Text style={{ color: BLUE_COLOR_CODE, marginRight: 15 }}>
            {item.productId}
          </Text>
          <Box style={styles.countryStyle}>
            <Image style={styles.imageStyle} source={image.singapore}  />
            <Text style={{ color: GREY_COLOR_CODE }}>SGD</Text>
          </Box>
        </Box>
        <Box>
          <Text style={styles.textStyle}>
            Bond, Issuer: Oil India Ltd, Coupon: 5.125%, Maturity
          </Text>
          <Text style={styles.textStyle}>Date: 04-FEB-2029</Text>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <Box
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              height: 50,
            }}
          >
            <Text style={styles.textHeadStyle}>Quantity</Text>
            <Text style={styles.textStyle}>{item.quantity}</Text>
          </Box>
          <Box
            style={{ flexDirection: "column", justifyContent: "space-between" }}
          >
            <Text style={styles.textHeadStyle}>MTM Price</Text>
            <Text style={styles.textStyle}>{item.MTM_Price}</Text>
          </Box>
          <Box
            style={{ flexDirection: "column", justifyContent: "space-between" }}
          >
            <Text style={styles.textHeadStyle}>Average Price</Text>
            <Text style={styles.textStyle}>{item.averagePrice}</Text>
          </Box>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 20,
          }}
        >
          <Box
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              height: 50,
            }}
          >
            <Text style={styles.textHeadStyle}>Market Value</Text>
            <Text style={styles.textStyle}>{item.marketValue}</Text>
          </Box>
          <Box
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              height: 50,
              marginLeft: 15,
            }}
          >
            <Text style={styles.textHeadStyle}>Unrealized P&L</Text>
            <Text style={styles.textStyle}>{item.unrealized}</Text>
          </Box>
          <Box></Box>
        </Box>
      </Box>
    </GluestackUIProvider>
  );
};

export default Tab;

const styles = StyleSheet.create({
  mainView: {
    display: "flex",
    marginHorizontal: 14,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    borderColor: SECOND_WHITE_COLOR,
  },
  innerView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 10,
  },
  textHeadStyle: {
    color: BLACK_COLOR_CODE,
    // fontFamily: FONT_FAMILY.MEDIUM,
  },
  countryStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 70,
    borderWidth: 1,
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 5,
    borderColor: SECOND_WHITE_COLOR,
  },
  imageStyle: {
    width: 30,
    height: 19,
  },
  textStyle: {
    // fontFamily: FONT_FAMILY.SEMI_BOLD,
    color: LIGHT_GREY_COLOR_CODE,
  },
});
