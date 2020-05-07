import React from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import leagues from "../../data/leagues";
import { Card, Button, ProgressBar, FAB } from "react-native-paper";
import { styles } from "../../shared/styles/ContestsStyle";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import CustomButton from "../../components/Button";

const {
  Container,
  cardContainer,
  buttonContainer,
  card,
  gameContainer,
  prizePool,
  footerView,
  text,
  entryView,
  spotView,
  entryText,
  fab,
} = styles;

export const ContestsScreen = ({ navigation, route }) => {
  let data = leagues;
  console.log("in",route)
  function navToCreateTeam() {
    if (route.params.name === "FootBall") {
      navigation.navigate("CreateTeamFootBallStack", {
        screen: "CreateTeamFootBall",
        params: {
          home_team_code: route.params.home_team_code,
          away_team_code: route.params.away_team_code,
          away_team:route.params.away_team,
          home_team:route.params.home_team,
         
        },
      })
    }
    if (route.params.name === "Cricket") {
      navigation.navigate("CreateTeamCricketStack");
    }
    if (route.params.name === "BasketBall") {
      navigation.navigate("CreateTeamBasketBallStack");
    }
  }
  function emptyList() {
    return (
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>
        {" "}
        No Contests as of now
      </Text>
    );
  }
  function renderRow(item) {

    let lcategory = data.leagueCategories;

    let categoryList = data.categoryList;

    const {
      winnings,
      cost,
      team_count,
      id,
      name,
      game_id,
      type,
      winners,
      details,
      min_teams,
      max_teams,
      start_time,
      status,
      max_entries,
      joining_code,
      league_category,
    } = item.item;

    return (
      
      <View style={cardContainer} key={id}>
        {categoryList.map(function (element) {
          for (i = 0; i < categoryList.length; i++) {
            if (league_category == element.tag) {
              return (
                <View key={element.short_description}>
                  <View style={{ margin: 5 }}>
                    <Text style={{ fontWeight: "bold" }}>
                      {element.long_name}
                    </Text>
                    <Text style={{ fontWeight: "300" }}>
                      {element.short_description}
                    </Text>
                  </View>
                  <Card
                    style={card}
                    onPress={() =>
                      navigation.navigate("ContestStack", {
                        screen: "Contest",
                        params: {
                          home_team_code: route.params.home_team_code,
                          away_team_code: route.params.away_team_code,
                         
                        },
                      })
                    }
                  >
                    <View style={gameContainer}>
                      <View style={prizePool}>
                        <Text style={text}>prize pool</Text>

                        <Text style={text}>
                          {"\u20B9"} {winnings}
                        </Text>
                      </View>
                      <View></View>
                      <View style={entryView}>
                        <Text style={text}>Entry</Text>
                        <Button
                          mode="contained"
                          style={entryText}
                          onPress={navToCreateTeam}
                        >
                          {"\u20B9"} {cost}
                        </Button>
                      </View>
                    </View>
                    <View style={{ paddingHorizontal: 10 }}>
                      <ProgressBar progress={0.5} color="red" />
                      <View style={spotView}>
                        <Text style={text}>12 spots left</Text>
                        <Text style={text}>30 spots</Text>
                      </View>
                    </View>
                    <View style={footerView}>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <MaterialCommunityIcons
                          name="podium-gold"
                          color="white"
                          onPress={() => {}}
                          size={26}
                        />
                        <Text style={text}>{winners}</Text>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <MaterialCommunityIcons
                          name="trophy-variant"
                          color="white"
                          onPress={() => {}}
                          size={26}
                        />

                        <Text style={text}>30%</Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Text style={text}>30</Text>
                        <Text style={text}>30%</Text>
                      </View>
                    </View>
                  </Card>
                  <TouchableOpacity
                    style={{ alignItems: "flex-end", padding: 5 }}
                    onPress={() =>
                      navigation.navigate("ContestH2h", {
                        league_category: element.long_name,
                      })
                    }
                  >
                    <Text>View more</Text>
                  </TouchableOpacity>
                </View>
              );
            }
          }
        })}
      </View>
    );
  }

  return (
    <View style={Container}>
      <View style={buttonContainer}>
        <View
          style={{
            width: "45%",
          }}
        >
          <CustomButton
            title="Enter Contest Code"
            onPress={() => navigation.navigate("InviteCode")}
            style={{
              height: 30,
              backgroundColor: "#FFFFFF",
              borderWidth: 0.2,
            }}
            textStyle={{
              fontSize: 10,
              color: "black",
              fontWeight: "500",
            }}
          />
        </View>
        <View
          style={{
            width: "45%",
          }}
        >
          <CustomButton
            title="Create a Contest"
            onPress={() => navigation.navigate("CreateContest")}
            style={{ height: 30, backgroundColor: "#FFFFFF", borderWidth: 0.2 }}
            textStyle={{
              fontSize: 10,
              color: "black",
              fontWeight: "500",
            }}
          />
        </View>
      </View>

      <FlatList
        data={data.leagues}
        extraData={data}
        renderItem={renderRow}
        keyExtractor={(item, index) => item.id.toString()}
        ListEmptyComponent={emptyList}
      />
      <FAB
        style={fab}
        small
        color="green"
        label="Create Team"
        onPress={navToCreateTeam}
      />
    </View>
  );
};

export default ContestsScreen;
