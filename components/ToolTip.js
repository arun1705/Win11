import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import Colors from "../shared/const/Colors";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import Tooltip from "react-native-walkthrough-tooltip";

export default function ToolTipComp({ title }) {
  const [toolTipVisible, setToolTipVisible] = useState(false);

  return (
    <View>
      <Tooltip
        animated={true}
        //(Optional) When true, tooltip will animate in/out when showing/hiding
        arrowSize={{ width: 16, height: 8 }}
        //(Optional) Dimensions of arrow bubble pointing to the highlighted element
        backgroundColor="transparent"
        //(Optional) Color of the fullscreen background beneath the tooltip.
        isVisible={toolTipVisible}
        //(Must) When true, tooltip is displayed
        content={
          <Text multiline text style={{ fontSize: 15 }}>
            {title}
          </Text>
        }
        //(Must) This is the view displayed in the tooltip
        placement="bottom"
        //(Must) top, bottom, left, right, auto.
        onClose={() => setToolTipVisible(false)}
        tooltipStyle={{ flex: 1, height: "100%", width: "100%" }}
        contentStyle={{ backgroundColor: "#e8f4f7" }}
        //(Optional) Callback fired when the user taps the tooltip
      >
        <MaterialCommunityIcons
          name="information-outline"
          color="gray"
          onPress={() => setToolTipVisible(true)}
          size={26}
          style={{ paddingTop: 10 }}
        />
      </Tooltip>
    </View>
  );
}

