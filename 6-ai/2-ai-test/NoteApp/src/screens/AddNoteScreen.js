import React from 'react';
import { View, TextInput, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../components/Header';
import PrimaryButton from '../components/PrimaryButton';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';

// Bu ekran şimdilik sadece arayüzden oluşuyor.
export default function AddNoteScreen({ navigation }) {
  
  const handleSave = () => {
    // İleride burada not kaydetme işlemi (Redux vb.) yapılacak. Şimdilik sadece geri dönüyoruz.
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header 
        title="Yeni Not" 
        showBack={true} 
        onBack={() => navigation.goBack()} 
      />
      
      <KeyboardAvoidingView 
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView style={styles.formContainer} showsVerticalScrollIndicator={false}>
          <TextInput
            style={styles.titleInput}
            placeholder="Başlık girin..."
            placeholderTextColor={colors.textSecondary}
          />
          
          <TextInput
            style={styles.contentInput}
            placeholder="Notunuzu buraya yazın..."
            placeholderTextColor={colors.textSecondary}
            multiline
            textAlignVertical="top"
          />
        </ScrollView>
        
        <View style={styles.buttonContainer}>
          <PrimaryButton 
            title="İptal" 
            type="outline"
            style={styles.cancelButton}
            onPress={() => navigation.goBack()}
          />
          <PrimaryButton 
            title="Kaydet" 
            style={styles.saveButton}
            onPress={handleSave}
          />
        </View>
      </KeyboardAvoidingView>
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
  },
  formContainer: {
    flex: 1,
    padding: 20,
  },
  titleInput: {
    ...typography.header,
    color: colors.text,
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  contentInput: {
    ...typography.body,
    color: colors.text,
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    minHeight: 250,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 20,
    paddingBottom: 30,
    backgroundColor: colors.background,
  },
  cancelButton: {
    flex: 1,
    marginRight: 10,
  },
  saveButton: {
    flex: 2,
    marginLeft: 10,
  }
});
