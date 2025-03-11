// FETCH DATA

import { useState, useEffect } from 'react';
import { ToastAndroid } from 'react-native';

interface ApiResponse {
  id: number;
  uid: string;
  password: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  avatar: string;
}

const useFetchData = () => {
  const [data, setData] = useState<ApiResponse[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const Notification = (message: string) => {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://random-data-api.com/api/users/random_user?size=80'
        );
        // ADD TOAST ANDROID NOTIFICATION
        if (!response.ok) return Notification('Failed to fetch data');

        const result = await response.json();

        setData(result);
      } catch (err) {
        // ADD TOAST ANDROID NOTIFICATION
        const errorMessage = (err as Error).message;
        Notification(errorMessage);
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetchData;
