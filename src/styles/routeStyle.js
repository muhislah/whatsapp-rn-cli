import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
export const routeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  topLinksContent: {
    // height: (height * 8.4) / 100,
    height: 65,
    width: "100%",
    backgroundColor: "#1f2c34",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  topButtons: {
    flexDirection: "row",
    gap: 20,
  },
  topButton: {
    fontSize: 25,
    color: "#8e9ba4",
  },
  logo: {
    fontWeight: "600",
    fontSize: 24,
    color: "#8e9ba4",
    fontStyle: "italic",
  },
  bottomButtons: {
    position: "absolute",
    bottom: 20,
    right: 20,
    height: 70,
    width: 70,
    borderRadius: 40,
    backgroundColor: "#00a884",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomButtonA: {
    fontSize: 25,
    color: "white",
  },
  listContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#121b22",
  },
  chatBox: {
    width: "100%",
    height: 80,
    alignItems: "center",
    zIndex: 1,
    flexDirection: "row",
  },
  fotoButton: {
    zIndex: 2,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  chatFoto: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  chatInfo: {
    width: width - 80,
    height: "100%",
    paddingHorizontal: 7.5,
    paddingVertical: 10,
    justifyContent: "center",
    gap: 5,
  },
  chatTopInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  chatName: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },
  chatDate: {
    color: "#8e9ba4",
    fontSize: 10,
    fontWeight: "400",
    fontVariant: "italic",
  },
  chatBottomInfo: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
    alignItems: "center",
  },
  chechMark: {
    color: "#8e9ba4",
    fontSize: 16,
  },
  message: {
    color: "#8e9ba4",
    fontSize: 16,
    marginLeft: 8,
  },
  chechMarkDone: {
    color: "#6ab6da",
    fontSize: 16,
  },
  storiesContent: {
    width: "100%",
    height: "100%",
    backgroundColor: "#121b22",
    paddingLeft: 10,
  },
  storiesBox: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  storiesFoto: {
    zIndex: 2,
    height: 80,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  storiesFoto: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderColor: "#121b22",
    borderWidth: 2,
  },
  storiesCircle: {
    height: 64,
    width: 64,
    borderRadius: 31,
    borderColor: "green",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  storiesCircleOp: {
    height: 64,
    width: 64,
    borderRadius: 31,
    borderColor: "#121b22",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  storiesDetails: {
    width: width - 80,
    height: 60,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  storiesName: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  storiesDate: {
    color: "#8e9ba4",
    fontSize: 14,
    fontWeight: "500",
  },
  addIconBox: {
    height: 25,
    width: 25,
    borderRadius: 15,
    backgroundColor: "#00a884",
    position: "absolute",
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#121b22",
    borderWidth: 2,
  },
  addIcon: {
    fontSize: 17,
    color: "white",
  },
  editIconBox: {
    position: "absolute",
    bottom: 20,
    right: 32,
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#233239",
    alignItems: "center",
    justifyContent: "center",
  },
  editIcon: { fontSize: 25, color: "white" },
  callDetail:{
    flexDirection:"row",
    gap:10,
    alignItems: "center",
  },
  getCallDetailIcon:{
    fontSize:19,
    transform: [{rotate: '45deg'}],
  },
  setCallDetailIcon:{
    fontSize:19,
    transform: [{rotate: '225deg'}],
  },
  callIcon:{
    color:"#00a884",
    fontSize:20,
    right:50
  },
  callLink:{
    fontSize:25,
    color: "white",
    transform:[{rotate: '45deg'}]
  },
  CallCircleOp: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#00a984",
    alignItems: "center",
    justifyContent: "center",
  },
  dataNotFound: {
    marginTop: 20,
    fontSize:15,
    color: "white",
    width:'100%',
    textAlign: 'center',
  }
});
