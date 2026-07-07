import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';

export default function PrimaryButton({ title, onPress, type = 'primary', style }) {
  
  const getBackgroundColor = () => {
    if (type === 'danger') return colors.danger;
    if (type === 'outline') return 'transparent';
    return colors.primary;
  };

  const getTextColor = () => {
    if (type === 'outline') return colors.primary;
    return '#FFFFFF';
  };

  return (
    <TouchableOpacity 
      style={[
        styles.button, 
        { backgroundColor: getBackgroundColor() },
        type === 'outline' && styles.outlineButton,
        style
      ]} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, { color: getTextColor() }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  outlineButton: {
    borderWidth: 2,
    borderColor: colors.primary,
    shadowOpacity: 0,
    elevation: 0,
  },
  text: {
    ...typography.title,
    fontWeight: 'bold',
  },
});
