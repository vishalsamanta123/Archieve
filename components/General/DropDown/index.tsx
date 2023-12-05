import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import React, { useRef, useState } from "react";
import { GluestackUIProvider, Box, Text } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import {
  BLACK_COLOR_CODE,
  BLUE_COLOR_CODE,
  WHITE_COLOR_CODE,
} from "../../../constants/Colors";

const DropDown = (props: any) => {
  const ref: any = useRef();
  const [status, setStatus] = useState();
  const data = [
    {
      label: "UX Research",
      value: 0,
    },
    {
      label: "Web Development",
      value: 1,
    },
    {
      label: "Cross Platform Development Process",
      value: 2,
    },
    {
      label: "UI Designing",
      value: 3,
    },
    {
      label: "Backend Development",
      value: 4,
    },
  ];
  const onChange = (item: any) => {
    setStatus(item.value);
  };
  const renderItem = (item: any) => {
    return (
      <Box style={styles.item}>
        <Text>{item.label}</Text>
      </Box>
    );
  };
  return (
    <GluestackUIProvider config={config}>
      <Box style={styles.mainBox}>
        <Dropdown
          ref={ref}
          style={[
            styles.dropdown,
            {
              width: "100%",
              height: 50,
              paddingLeft: 10,
            },
          ]}
          itemTextStyle={{ fontSize: 20, color: BLACK_COLOR_CODE }}
          placeholderStyle={styles.placeholderStyle}
          data={data}
          maxHeight={300}
          labelField={"label"}
          valueField={"value"}
          placeholder={"Select"}
          value={status}
          onChange={(item) => {
            onChange(item);
          }}
          renderItem={renderItem}
        />
      </Box>
    </GluestackUIProvider>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  mainBox: {
    marginVertical: 20,
    marginHorizontal: 15,
  },
  dropdown: {
    backgroundColor: WHITE_COLOR_CODE,
    borderRadius: 5,
    padding: 5,
    borderColor: BLUE_COLOR_CODE,
    borderWidth: 3,
  },
  placeholderStyle: {
    color: BLACK_COLOR_CODE,
  },
  item: {
    padding: 11,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
