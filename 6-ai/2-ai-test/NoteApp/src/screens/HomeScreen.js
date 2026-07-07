import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import NoteCard from '../components/NoteCard';
import EmptyState from '../components/EmptyState';

import { notes } from '../data/notes';
import { colors } from '../styles/colors';

// Şimdilik statik veriler kullanıyoruz. İlerleyen derslerde bunları React state ve daha sonra klasik Redux ile yöneteceğiz.
export default function HomeScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');

  // FlatList büyük listeleri performanslı şekilde render eder.
  const renderItem = ({ item }) => (
    <NoteCard 
      note={item} 
      onPress={() => navigation.navigate('NoteDetail', { note: item })} 
    />
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="Notlarım" />
      
      <SearchBar 
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      
      <View style={styles.listContainer}>
        <FlatList
          data={notes}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.flatListContent}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<EmptyState />}
        />
      </View>

      <TouchableOpacity 
        style={styles.fab} 
        onPress={() => navigation.navigate('AddNote')}
        activeOpacity={0.8}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  flatListContent: {
    paddingBottom: 100, // FAB'ın arkasında kalmaması için alt boşluk
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  fabText: {
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: '300',
    marginTop: -4, // Artı işaretini dikeyde ortalamak için küçük düzeltme
  }
});
