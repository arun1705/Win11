import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  cardContainer: {
    marginVertical: 5,
    marginHorizontal: 20,
  },
  card: {
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  gameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  teamView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  teamLogo: { height: 45, width: 45 },
  teamText: { marginLeft: 5, fontWeight: "bold" },
  timeText: { color: "red", fontWeight: "bold" },

  awayTeamView: { flexDirection: "row", alignItems: "center" },
  awayTeamText: { marginRight: 5, fontWeight: "bold" },
});
