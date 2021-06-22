import React from "react";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";

import { styles } from "../styles/default";

import { HelloButton } from "./HelloButton";

export const MonorepoIntro = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
      >
        <HelloButton />
      </ScrollView>
    </SafeAreaView>
  </>
);
