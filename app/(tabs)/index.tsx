import { Dimensions, FlatList, StyleSheet, View } from 'react-native';
import CustomHeader from '@/components/CustomHeader';
import Loader from '@/components/Loader';
import UserCard from '@/components/UserCard';
import useFetchData from '@/hooks/useFetchData';
import { COLORS } from '@/constant/color';

const { height } = Dimensions.get('window');

const CARD_HEIGHT = height - 150

const AllUser = () => {
  const { data, loading } = useFetchData();

  if (loading) return <Loader />;

  return (
    <View style={styles.container}>
      <CustomHeader title="All User" />
      <FlatList
        data={data || []}
        keyExtractor={item => item.uid.toString()}
        renderItem={({ item }) => <UserCard user={item} />}
        showsVerticalScrollIndicator={false}
        decelerationRate={0.99}
        snapToAlignment="start"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

});

export default AllUser;
