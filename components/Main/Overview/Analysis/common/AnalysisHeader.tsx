import React from "react";
import { StyleSheet } from "react-native";
import { HStack, Text } from "@gluestack-ui/themed";

interface IPlanningHeader {
  selectedTab: number;
}

const headerMapping: Record<number, Record<string, string>> = {
  0: {
    title: "Gross Allocation",
    buttonText: "Add Goal",
  },
  1: {
    title: "Relative Performance",
    buttonText: "Add Estate",
  },
};

export default function PlanningHeader({ selectedTab }: IPlanningHeader) {
  const data = headerMapping[selectedTab];
  return (
    <HStack style={styles.headerContainer}>
      <Text style={styles.title}>
        Hi Krish Parekh {"\n"}This is your overall Portfolio Analysis
      </Text>
    </HStack>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
