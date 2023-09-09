import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { routeStyles } from "../styles/routeStyle";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from "../store/configStore";

interface IData {
  _id: string
  image: string
  name: string
  isActive: boolean
  registered: string
}

const data = [
  {
    _id: "6471b6e92ef399896312cd2b",
    image: "https://picsum.photos/id/7/80/80",
    name: "Millicent Bullock",
    isActive: false,
    registered: "2023-05-27 10:36",
  },
  {
    _id: "6471b6e90e1b095f1dbe0806",
    image: "https://picsum.photos/id/83/80/80",
    name: "Moran Langley",
    isActive: false,
    registered: "2023-05-27 05:34",
  },
  {
    _id: "6471b6e9b87145f3732777e2",
    image: "https://picsum.photos/id/18/80/80",
    name: "Baxter Cleveland",
    isActive: true,
    registered: "2023-05-27 07:05",
  },
  {
    _id: "6471b6e95410e15fdf9bcf6d",
    image: "https://picsum.photos/id/50/80/80",
    name: "Blake Barrera",
    isActive: true,
    registered: "2023-05-27 05:45",
  },
  {
    _id: "6471b6e976d2e3f662037b3d",
    image: "https://picsum.photos/id/5/80/80",
    name: "Eva Hicks",
    isActive: false,
    registered: "2023-05-27 03:59",
  },
  {
    _id: "6471b6e92ed2c40093532cbc",
    image: "https://picsum.photos/id/23/80/80",
    name: "Socorro Morrow",
    isActive: true,
    registered: "2023-05-27 10:08",
  },
  {
    _id: "6471b6e9b43d793c7a8b93d2",
    image: "https://picsum.photos/id/87/80/80",
    name: "Nina Bass",
    isActive: true,
    registered: "2023-05-27 05:26",
  },
  {
    _id: "6471b6e9c9b7b6ab0a71a064",
    image: "https://picsum.photos/id/67/80/80",
    name: "Howe Barnes",
    isActive: false,
    registered: "2023-05-27 10:29",
  },
].sort((a, b) =>
  a.isActive === b.isActive
    ? Date.parse(a.registered) > Date.parse(b.registered)
      ? -1
      : 1
    : a.isActive
      ? 1
      : -1
);

const getDate = (registered: string) => {
  const today: any = new Date();
  const dateIso: any = new Date(registered);
  const date = (today - dateIso) / (1000 * 60 * 60 * 24);
  if (date < 2 && date > 1) {
    return "Yesterday";
  } else if (date >= 2) {
    return registered.split(" ", 1);
  } else {
    if (dateIso.getDay() < today.getDay()) return "Yesterday";
    if (dateIso.getHours() >= 5 && dateIso.getHours() < 12)
      return (
        "Morning " +
        dateIso.getHours().toString() +
        ":" +
        dateIso.getMinutes().toString()
      );
    else if (dateIso.getHours() >= 12 && dateIso.getHours() < 17)
      return (
        "Afternoon " +
        dateIso.getHours().toString() +
        ":" +
        dateIso.getMinutes().toString()
      );
    else if (dateIso.getHours() >= 17 && dateIso.getHours() < 21)
      return (
        "Evening " +
        dateIso.getHours().toString() +
        ":" +
        dateIso.getMinutes().toString()
      );
    else
      return (
        "Night " +
        dateIso.getHours().toString() +
        ":" +
        dateIso.getMinutes().toString()
      );
  }
};

const GetStories = ({ item }: { item: IData, key: string }) =>
  !item.isActive ? (
    <TouchableOpacity style={routeStyles.storiesBox}>
      <TouchableOpacity style={routeStyles.storiesFoto}>
        <View style={routeStyles.storiesCircle}>
          {
            item.image ?
              <Image source={{ uri: item.image }} style={routeStyles.storiesFoto as any} />
              : null
          }
        </View>
      </TouchableOpacity>
      <View style={routeStyles.storiesDetails}>
        <Text style={routeStyles.storiesName}>{item.name}</Text>
        <Text style={routeStyles.storiesDate}>{getDate(item.registered)}</Text>
      </View>
    </TouchableOpacity>
  ) : null;

const GetSeenStories = ({ item }: { item: IData, key: string }) =>
  item.isActive ? (
    <TouchableOpacity style={routeStyles.storiesBox}>
      <TouchableOpacity style={routeStyles.storiesFoto}>
        <View style={routeStyles.storiesCircleOp}>
          {
            item.image ?
              <Image source={{ uri: item.image }} style={routeStyles.storiesFoto as any} />
              : null
          }
        </View>
      </TouchableOpacity>
      <View style={routeStyles.storiesDetails}>
        <Text style={routeStyles.storiesName}>{item.name}</Text>
        <Text style={routeStyles.storiesDate}>Night 0:42</Text>
      </View>
    </TouchableOpacity>
  ) : null;

const GetAllStories = ({ storiesData }: { storiesData: IData[] }) => (
  <View>
    <TouchableOpacity style={routeStyles.storiesBox}>
      <TouchableOpacity style={routeStyles.storiesFoto}>
        <View style={routeStyles.storiesCircleOp}>
          {
            storiesData[0]?.image ?
              <Image
                source={{ uri: storiesData[0]?.image }}
                style={routeStyles.storiesFoto as any}
              />
              : null
          }
          <View style={routeStyles.addIconBox}>
            <AntDesign name="plus" style={routeStyles.addIcon} />
          </View>
        </View>
      </TouchableOpacity>
      <View style={routeStyles.storiesDetails}>
        <Text style={routeStyles.storiesName}>Your Story</Text>
        <Text style={routeStyles.storiesDate}>Touch to add new story</Text>
      </View>
    </TouchableOpacity>

    <Text
      style={{ height: 25, fontSize: 16, color: "#8e9ba4", marginLeft: 10, marginTop: 20 }}
    >
      Recent updates
    </Text>

    {storiesData?.length ? storiesData.map((item) =>
    (
      <GetStories item={item} key={item._id} />
    )) : (
      <Text style={routeStyles.dataNotFound}>Data not found</Text>
    )
    }

    <Text
      style={{ height: 25, fontSize: 16, color: "#8e9ba4", marginLeft: 10, marginTop: 30 }}
    >
      Viewed updates
    </Text>

    {storiesData?.length ? storiesData.map((item) =>
    (
      <GetSeenStories item={item} key={item._id} />
    )) : (
      <Text style={routeStyles.dataNotFound}>Data not found</Text>
    )
    }
  </View>
);

export default function StoriesComponent() {
  const searchPhrase = useSelector((state: AppState) => state.search.searchPhrase);
  const [filteredData, setFilteredData] = useState<IData[]>([]);

  useEffect(() => {
    if (searchPhrase) {
      setFilteredData(prev => {
        const filtered = data.filter(item =>
          String(item.name).toLowerCase().includes(searchPhrase.toLowerCase())
        )

        if (filtered) return filtered

        return []
      })
    } else {
      setFilteredData(data);
    }
  }, [searchPhrase]);

  return (
    <View style={routeStyles.storiesContent}>
      <ScrollView>
        <GetAllStories storiesData={filteredData} />
      </ScrollView>
    </View>
  );
}
