import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { styles } from '@/styles/userCard.styles';
import LinearGradients from './LinearGradient';

interface User {

    id: number;
    uid: string;
    password: string;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    avatar: string;

}

interface UserCardProps{
  user:User,
  isPassword?: boolean,
  isUID?: boolean
}

const UserCard : React.FC<UserCardProps> = ({
  user,
  isPassword = false,
  isUID = false,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const avatarSource = user.avatar ? { uri: user.avatar } : require('../assets/images/avatar.png');

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Image
          source={{ uri: "https://images.unsplash.com/photo-1557682260-96773eb01377?q=80&w=1000" }}
            style={styles.image}
          />
          <View style={styles.headerOverlay}>
            <View style={styles.userIdBadge}>
              <Text style={styles.userIdText}>ID: {user.id}</Text>
            </View>
          </View>
          <View style={styles.avatarContainer}>
          <Image source={avatarSource} style={styles.avatar} />
          </View>
        </View>

        <LinearGradients>
          <View style={styles.content}>
            <View style={styles.nameSection}>
              <Text
                style={styles.name}
              >{`${user.first_name} ${user.last_name}`}</Text>
              <Text style={styles.username}>@{user.username}</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.infoSection}>
              <Text style={styles.sectionTitle}>User Information</Text>

              {isUID && (
                <View style={styles.infoRow}>
                  <View style={styles.iconContainer}>
                    <Feather name="hash" size={20} color="#6366f1" />
                  </View>

                  <View style={styles.textContainer}>
                    <Text style={styles.label}>UID</Text>
                    <Text style={styles.value}>{user.uid}</Text>
                  </View>
                </View>
              )}

              <View style={styles.infoRow}>
                <View style={styles.iconContainer}>
                  <Feather name="mail" size={20} color="#6366f1" />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.label}>Email</Text>
                  <Text style={styles.value}>{user.email}</Text>
                </View>
              </View>

              {isPassword && (
                <View style={styles.infoRow}>
                  <View style={styles.iconContainer}>
                    <Feather name="lock" size={20} color="#6366f1" />
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.label}>Password</Text>
                    <View style={styles.passwordContainer}>
                      <Text style={styles.passwordValue}>
                        {showPassword
                          ? user.password
                          : '•'.repeat(Math.min(10, user.password.length))}
                      </Text>
                      <TouchableOpacity
                        style={styles.passwordIcon}
                        onPress={() => setShowPassword(!showPassword)}
                      >
                        <Feather
                          name={showPassword ? 'eye-off' : 'eye'}
                          size={16}
                          color="#fff"
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              )}
            </View>
          </View>
        </LinearGradients>
      </View>
    </View>
  );
};

export default UserCard;
