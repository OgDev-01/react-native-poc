import { useEffect, useState } from "react";

import { Text, View } from "@/components/Themed";
import { useTranslation } from "react-i18next";
import { Pressable } from "react-native";

import * as Location from "expo-location";

export default function TabOneScreen() {
  const [location, setLocation] = useState({});
  const [errorMsg, setErrorMsg] = useState("");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    (async () => {
      let { status } = await Location.getBackgroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  console.log(JSON.stringify(location));

  return (
    <View className="flex-1 justify-center items-center">
      <Text>{t("Hello")}</Text>
      <Pressable
        onPress={() => {
          i18n.language === "en"
            ? i18n.changeLanguage("ro")
            : i18n.changeLanguage("en");
        }}
        className="bg-red-300 w-max px-4 py-2 rounded-md mt-4"
      >
        <Text>
          Switch language to {i18n.language === "en" ? "Romanian" : "English"}
        </Text>
      </Pressable>
    </View>
  );
}
