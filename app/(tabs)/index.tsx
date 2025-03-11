import CustomHeader from '@/components/CustomHeader';
import Loader from '@/components/Loader';
import UserCard from '@/components/UserCard';
import useFetchData from '@/hooks/useFetchData';
import { Dimensions, FlatList, StyleSheet, View } from 'react-native';

const { height } = Dimensions.get('window');

const AllUser = () => {

    const {data, loading} = useFetchData();

    if(loading) return <Loader />

  return (
    <View style={styles.container}>

      <CustomHeader title='All User' />
      <FlatList
        data={data || []}
        keyExtractor={item => item.uid.toString()}
        renderItem={({ item }) => <UserCard user={item} />}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        snapToInterval={height - 150}
        decelerationRate="fast"
        snapToAlignment="start"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default AllUser;
