import React, { useEffect, useState } from "react";
import { Text } from "@gluestack-ui/themed";
import { VStack } from "@gluestack-ui/themed";
import SwitchButton from "./common/SwitchButton";
import AnalysisHeader from "./common/AnalysisHeader";
import AnalysisView from "./common/AnalysisView";
import { SafeAreaView } from "react-native";
export default function Analysis() {
  
  const [selectedTab, setSelectedTab] = useState(0);
  const handleSelectedTab = (selectedTab: number) => {
    setSelectedTab(selectedTab);
  };
  return (
    <VStack space="md">
      <AnalysisHeader selectedTab={selectedTab} />
      <SwitchButton
        selectedTab={selectedTab}
        setSelectedTab={handleSelectedTab}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <AnalysisView selectedTab={selectedTab} />
      </SafeAreaView>
    </VStack>
  );
}
