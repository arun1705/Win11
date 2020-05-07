import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { systemWeights } from "react-native-typography";
import Colors from "../const/Colors"
import { Dimensions } from "react-native";

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  cardContainer: {
    marginVertical: 5,
    marginHorizontal: 20,
  },
  lightTitle: {
    fontSize: 20,

    ...systemWeights.regular,
  },
  imageStyle: {
    height: hp(6),
    width: hp(6),
  },
  spotView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  footerView: {
    backgroundColor: "lightgray",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  card: {
    // padding: 10,
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
    paddingHorizontal: 10,
  },
  prizePool: {
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  teamLogo: { height: 45, width: 45 },
  text: {
    marginHorizontal: 5,
    fontWeight: "500",
  },
  timeText: { color: "red", fontWeight: "bold" },

  entryView: { alignItems: "center" },
  entryText: { marginRight: 5, fontWeight: "bold", backgroundColor: "green" },
  buttonLabelStyle: {
    fontSize: 10,
    color: "black",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: "25%",
    backgroundColor: "white",
    alignSelf: "center",
    bottom: 20,
  },
  headerCard: {
    padding: 8,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: Colors.headerBackgroundColor,
  },
  headerCardContentStyle: {
    paddingVertical: 10,
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  headerCardTitleText: {
    fontSize: 15,
    fontWeight: "600",
  },
  header: {
    width: Dimensions.get("screen").width,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "500",
    fontSize: 18,
    color: "white",
  },
  iconLeft: {
    position: "absolute",
    left: 16,
  },
  iconRight: {
    position:'absolute',
    right: 16,
  },
  createTeamHeaderBackGround:{
    backgroundColor: "#404040",
  },
  maxPlayersText:{
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginVertical: 5,
  },
  createTeamHeaderRowContent:{
    flexDirection: "row"
  },
  rowText:{
    fontSize: 15,
    fontWeight: "500",
    color: "white",
    marginVertical: 5,
    marginHorizontal: 10,
  },
  playersCount:{
    fontSize: 15,
    fontWeight: "500",
    color: "white",
    marginHorizontal: 20,
  },
  createTeamLogoRow:{
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginHorizontal: 15,
  },
  teamLogoStyle:{
    height: 60, width: 60 
  },
  teamHomeTextStyle:{
    marginLeft: 5, fontWeight: "400", color: "white"
  },
  teamCount:{
    marginLeft: 10,fontSize:18, fontWeight: "bold", color: "white" 
  },
  teamAwayTextStyle:{
    marginRight: 5, fontWeight: "400", color: "white"
  },
  creditsLeft:{
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "right",
    marginHorizontal: 20,
  },
  progressBar:{
    height: hp(2),
    width: hp(35),
    marginVertical: 15,
  },
  customButton:{
    height: hp(2),
    width: hp(2),
    backgroundColor: "red",
    marginVertical: 15,
    marginRight: 20,
  }
});
