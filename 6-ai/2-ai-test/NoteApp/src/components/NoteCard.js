import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';

export default function NoteCard({ note, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.headerRow}>
        <Text style={styles.title} numberOfLines={1}>
          {note.title}
        </Text>
        {note.isFavorite && (
          <Text style={styles.favoriteIcon}>⭐</Text>
        )}
      </View>
      
      <Text style={styles.preview} numberOfLines={2}>
        {note.preview}
      </Text>
      
      <View style={styles.footerRow}>
        <Text style={styles.date}>{note.date}</Text>
      </View>
    </TouchableOpacity>
  );
}

// StyleSheet stilleri tek bir yerde yönetmemizi sağlar.
// elevation (Android) ve shadow (iOS) özellikleri ile karta modern bir derinlik (gölge) verdik.
const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    shadowColor: '#8C98A4',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 4,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    ...typography.title,
    color: colors.text,
    flex: 1,
    marginRight: 8,
  },
  favoriteIcon: {
    fontSize: 16,
  },
  preview: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: 12,
    lineHeight: 22,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  date: {
    ...typography.caption,
    color: colors.textSecondary,
  },
});
