import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../components/Header';
import PrimaryButton from '../components/PrimaryButton';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';

export default function NoteDetailScreen({ route, navigation }) {
  const { note } = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header 
        title="Not Detayı" 
        showBack={true} 
        onBack={() => navigation.goBack()} 
      />
      
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <View style={styles.headerRow}>
            <Text style={styles.title}>{note.title}</Text>
            {note.isFavorite && (
              <Text style={styles.favoriteIcon}>⭐</Text>
            )}
          </View>
          
          <Text style={styles.date}>{note.date}</Text>
          
          <View style={styles.divider} />
          
          <Text style={styles.content}>{note.content}</Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <PrimaryButton 
          title="Düzenle" 
          onPress={() => navigation.navigate('EditNote', { note })} 
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  title: {
    ...typography.header,
    color: colors.text,
    flex: 1,
    marginRight: 10,
  },
  favoriteIcon: {
    fontSize: 24,
    marginTop: 4,
  },
  date: {
    ...typography.caption,
    color: colors.textSecondary,
    marginBottom: 20,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginBottom: 20,
  },
  content: {
    ...typography.body,
    color: colors.text,
    lineHeight: 26,
  },
  footer: {
    padding: 20,
    paddingBottom: 30,
    backgroundColor: colors.background,
  }
});
