import React from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import CountdownTimer from "../../components/CountDown";
import { styles } from "../../shared/styles/HomeSportStyle";
const {
  Container,
  cardContainer,
  card,
  gameContainer,
  timeText,
  teamView,
  teamLogo,
  teamText,
  awayTeamView,
  awayTeamText,
} = styles;
import { result } from "../../data/dummydata";
import { Card } from "react-native-paper";
export const FootBall = ({ navigation }) => {
  let data = result.result.games;
  function renderRow(item) {
    const {
      away_team,
      home_team,
      tournament,
      away_team_code,
      game_date,
      home_team_code,
      start_time,
      status,
      id,
    } = item.item;
    const { name, sport_category_id } = tournament;
    if (sport_category_id === 5) {
      return (
        <View style={cardContainer} key={id}>
          <Card
            style={card}
            onPress={() =>
              navigation.navigate("ContestsStack", {
                screen: "ContestsRoot",
                params: {
                  screen: "Contests",
                  params: {
                    name: "FootBall",
                    home_team_code: home_team_code,
                    away_team_code: away_team_code,
                    game_date: game_date,
                    away_team:away_team,
                    home_team:home_team

                  },
                },
              })
            }
          >
            <Text>{name}</Text>
            <View style={gameContainer}>
              <View style={teamView}>
                <Image source={{ uri: home_team.logo }} style={teamLogo} />
                <Text style={teamText}>{home_team_code}</Text>
              </View>
              <View>
                <CountdownTimer time={game_date} style={timeText} />
              </View>
              <View style={awayTeamView}>
                <Text style={awayTeamText}>{away_team_code}</Text>
                <Image source={{ uri: away_team.logo }} style={teamLogo} />
              </View>
            </View>
          </Card>
        </View>
      );
    }
  }

  return (
    <View style={Container}>
      <FlatList
        data={data}
        renderItem={renderRow}
        keyExtractor={(item, index) => {
          return item.id.toString();
        }}
      />
    </View>
  );
};
export default FootBall;
