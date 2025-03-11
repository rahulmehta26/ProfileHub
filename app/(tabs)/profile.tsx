import { View, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import UserCard from '@/components/UserCard';
import useFetchData from '@/hooks/useFetchData';
import NavigationButton from '@/components/NavigationButton';
import Loader from '@/components/Loader';
import CustomHeader from '@/components/CustomHeader';

const Profile = () => {
  const { loading, data } = useFetchData();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  if (loading) return <Loader />

  if (!data || data.length === 0) {
    return <View style={styles.container} />;
  }

  const handlePrevious = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < data.length - 1) setCurrentIndex(currentIndex + 1);
  };

  return (
    <View style={styles.container}>

      <CustomHeader title='Profile' />

      <ScrollView showsVerticalScrollIndicator = {false} contentContainerStyle={{
        backgroundColor:"#fff",
      }} >

      <View style={styles.cardContainer}>
        <UserCard user={data[currentIndex]} isPassword = {true} isUID = {true} />
      </View>
      </ScrollView>


      <NavigationButton
        onPrevious={handlePrevious}
        onNext={handleNext}
        canGoPrevious={currentIndex > 0}
        canGoNext={currentIndex < data.length - 1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff"
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Profile;
