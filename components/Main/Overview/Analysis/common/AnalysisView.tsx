import { View, Text, Box } from "@gluestack-ui/themed";
import React, { useEffect, useState } from "react";
import { Circle, VictoryLabel, VictoryPie } from "victory-native";
import { useAuthServerMutation } from "../../../../../hooks/useMutation";
import DropDown from "../../../../General/DropDown";
// import { router } from "expo-router";
import { useNavigation } from "expo-router";

interface IAnalysisViewProps {
  selectedTab: number;
}
export default function AnalysisView({ selectedTab }: IAnalysisViewProps) {
  const navigation = useNavigation();
  const [chartData, setChartData]: any = useState([]);
  const { trigger, isMutating } = useAuthServerMutation("gross-allocation/", {
    onSuccess(data) {
      setChartData(data);
    },
  });

  // const { custodianTrigger, isCustodianMutating }: any = useAuthServerMutation(
  //   "custodian/",
  //   {
  //     onSuccess(data) {
  //       console.log("data: ", data);
  //       setChartData(data);
  //     },
  //   }
  // );
  useEffect(() => {
    trigger();
    // custodianTrigger();
  }, []);
  const handleDataPointClick = (event: any, props: any) => {
    // document.title="Analysis";

    navigation.navigate("profile/Detail",{title: 'Assest Class'});

    // router.push("/profile/Detail");
    console.log("Data point clicked!", props.datum);
  };

  function formatNumber(number: any) {
    if (Math.abs(number) >= 1e9) {
      return (number / 1e9).toFixed(2) + "B";
    } else if (Math.abs(number) >= 1e6) {
      return (number / 1e6).toFixed(2) + "M";
    } else if (Math.abs(number) >= 1e3) {
      return (number / 1e3).toFixed(2) + "K";
    }
    return number.toFixed(2);
  }

  if (selectedTab === 0) {
    return (
      <View style={{}}>
        <Box style={{ flex: 1 }}>
          <DropDown />
        </Box>
        {chartData.map((item: any) => {
          // Transforming the API response to required data for pie chart
          const transformedData = item?.data.map((item: any) => ({
            y: item.value,
            label: item.type,
          }));
          // Calculate the total sum of values
          const total = transformedData.reduce(
            (acc: any, cur: any) => acc + Math.abs(cur.y),
            0
          );

          return (
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text
                style={{
                  position: "absolute",
                  textAlign: "center",
                  fontSize: 20,
                }}
              >
                {item?.title}
              </Text>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <VictoryPie
                  data={transformedData}
                  labelRadius={({ innerRadius }: any) => innerRadius + 20}
                  radius={({ datum }) => 170}
                  innerRadius={90}
                  colorScale={"qualitative"}
                  style={{
                    labels: { fill: "black", fontSize: 18 },
                  }}
                  labelComponent={
                    <VictoryLabel
                      text={({ datum }) =>
                        `${((Math.abs(datum.y) / total) * 100).toFixed(2)}%`
                      }
                    />
                  }
                  events={[
                    {
                      target: "data",
                      eventHandlers: {
                        onPressIn: handleDataPointClick,
                      },
                    },
                  ]}
                />
                <View style={{ position: "absolute" }}>
                  <Text
                    style={{
                      textAlign: "center",
                      fontWeight: "400",
                      fontSize: 15,
                    }}
                  >
                    Total
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      fontWeight: "600",
                      fontSize: 20,
                      marginTop: 20,
                    }}
                  >
                    {`${formatNumber(total)} `}
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    );
  }
  return <View></View>;
}
