import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';

// Bu bileşen tekrar kullanılabilir olması için ayrı oluşturuldu.
// Özel bir Header (başlık) oluşturarak varsayılan navigasyon başlığını gizledik.
export default function Header({ title, showBack = false, onBack }) {
  return (
    <View style={styles.container}>
      {showBack ? (
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={styles.backText}>{'<'}</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.backButtonPlaceholder} />
      )}
      
      <Text style={styles.title}>{title}</Text>
      
      {/* Sağı dengelemek için boş bir alan */}
      <View style={styles.backButtonPlaceholder} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: colors.background,
  },
  title: {
    ...typography.header,
    color: colors.text,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 2,
  },
  backText: {
    fontSize: 20,
    color: colors.text,
    fontWeight: 'bold',
  },
  backButtonPlaceholder: {
    width: 40,
    height: 40,
  }
});
