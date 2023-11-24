import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';

interface HeaderBarProps {
  title?: string;
}

const HeaderBar: React.FC<HeaderBarProps> = () => {
  return (
    <View style={styles.headerBarContainer}>
      <Text style={styles.HeaderText}>HeaderBar</Text>
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  headerBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SPACING.space_30,
  },
  HeaderText: {
    fontFamily: FONTFAMILY.poppins_bold,
    fontSize: FONTSIZE.size_20,
    fontWeight: 'bold',
    color: COLORS.primaryWhiteHex,
  },
});
