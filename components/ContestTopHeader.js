import React from "react";
import { Text, View } from "react-native";

import { styles } from "../shared/styles/ContestsStyle";

const {
  Container,
  headerCard,
  headerCardContentStyle,
  headerCardTitleText
} = styles;

export default function ContestTopHeader({ tabs, route }) {
    return (
      <View style={Container}>
        <View style={headerCard}>
          <View style={headerCardContentStyle}>
            <Text style={headerCardTitleText}>
              {route.params.home_team_code} vs {route.params.away_team_code}
            </Text>
          </View>
        </View>
        {tabs}
      </View>
    );
  }