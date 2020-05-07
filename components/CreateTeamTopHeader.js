import React from "react";
import { Text, View, Image } from "react-native";
import { ProgressBar } from "react-native-paper";
import { styles } from "../shared/styles/ContestsStyle";
import CustomButton from "../components/Button";
import ScrollableTabView, {
  ScrollableTabBar,
} from "react-native-scrollable-tab-view";

const {
  Container,
  createTeamHeaderBackGround,
  maxPlayersText,
  createTeamHeaderRowContent,
  rowText,
  playersCount,
  createTeamLogoRow,
  teamLogoStyle,
  teamHomeTextStyle,
  teamAwayTextStyle,
  creditsLeft,
  progressBar,
  customButton,
  teamCount,
} = styles;

export default function CreateTeamTopHeader({ tabs, route }) {
  return (
    <View style={Container}>
      <View style={createTeamHeaderBackGround}>
        <Text style={maxPlayersText}>Max 7 players from a Team</Text>
        <View style={createTeamHeaderRowContent}>
          <View>
            <Text style={rowText}>Players</Text>
            <Text style={playersCount}>0/11</Text>
          </View>
          <View style={createTeamLogoRow}>
            <Image
              source={{ uri: route.params.home_team.logo }}
              style={teamLogoStyle}
            />
            <View>
              <Text style={teamHomeTextStyle}>
                {route.params.home_team_code}
              </Text>
              <Text style={teamCount}>0</Text>
            </View>
          </View>
          <View style={createTeamLogoRow}>
            <View>
              <Text style={teamAwayTextStyle}>
                {route.params.away_team_code}
              </Text>
              <Text style={teamCount}>0</Text>
            </View>
            <Image
              source={{ uri: route.params.away_team.logo }}
              style={teamLogoStyle}
            />
          </View>
          <View>
            <Text style={rowText}>Credits Left</Text>
            <Text style={creditsLeft}>100</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <ProgressBar progress={0.1} color="#1c5e74" style={progressBar} />
          <CustomButton
            title="-"
            onPress={() => alert("HI")}
            style={customButton}
          />
        </View>
      </View>
      <ScrollableTabView
        style={{ color: "red" }}
        initialPage={0}
        renderTabBar={() => <ScrollableTabBar />}
      >
        {tabs.map((result) => {
          return (
            <View tabLabel={result.name}>
            </View>
          );
        })}
      </ScrollableTabView>
    </View>
  );
}
