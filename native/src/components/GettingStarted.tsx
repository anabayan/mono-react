import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import { Header } from "react-native/Libraries/NewAppScreen";

import { styles } from "../styles/default";

export const GettingStarted = ({ navigation }: { navigation: any }) => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
      >
        <Header />
        {(global as any).HermesInternal == null ? null : (
          <View style={styles.engine}>
            <Text style={styles.footer}>Engine: Hermes</Text>
          </View>
        )}
        <View style={styles.body}>
          <View style={{ ...styles.sectionContainer, alignItems: "center" }}>
            <TouchableOpacity onPress={() => navigation.push("Intro")}>
              <Text style={styles.sectionTitle}>
                <CommonComponent>Common component</CommonComponent>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  </>
);

import styled from "styled-components/native";

const CommonComponent = styled.Text`
  color: blue;
`;
