import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StatusBar, TouchableOpacity } from 'react-native';

import {
  Header
} from 'react-native/Libraries/NewAppScreen';

import { styles } from 'styles/default';
import { CommonComponent } from 'common/components/common'

export const GettingStarted = ({ navigation }) => (
  <>
    <StatusBar barStyle='dark-content' />
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior='automatic' style={styles.scrollView}>
        <Header />
        {global.HermesInternal == null ? null : (
          <View style={styles.engine}>
            <Text style={styles.footer}>Engine: Hermes</Text>
          </View>
        )}
        <View style={styles.body}>
          <View style={{ ...styles.sectionContainer, alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigation.push('Intro')}>
              <Text style={styles.sectionTitle}>
                <CommonComponent />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  </>
);
