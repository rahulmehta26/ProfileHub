import { COLORS } from '@/constant/color';
import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    width: width,
    padding: 16,
    backgroundColor: COLORS.white,
  },
  card: {
    width: '100%',
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 8,
    boxShadow:
      '0 12px 20px -8px rgba(0, 0, 0, 0.15), 0 4px 8px -4px rgba(0, 0, 0, 0.1)',
  },
  header: {
    paddingVertical: width * 0.01,
    minHeight: 100,
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    backgroundColor: COLORS.darkGrey,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  avatarContainer: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: width * 0.1,
    borderWidth: 4,
    borderColor: COLORS.white,
    overflow: 'hidden',
    backgroundColor: COLORS.lightGrey,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImage: {
    width: '20%',
    height: '20%',
    resizeMode: 'cover',
  },
  headerOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: width * 0.04,
  },
  userIdBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  userIdText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
  },
  avatar: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  avatarFallback: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.lightGrey,
  },
  avatarFallbackText: {
    fontSize: 28,
    fontWeight: '900',
    color: COLORS.lightBlue,
  },
  content: {
    paddingTop: width * 0.04,
    paddingHorizontal: width * 0.06,
    paddingBottom: width * 0.04,
  },
  nameSection: {
    marginBottom: width * 0.03,
  },
  name: {
    fontSize: 28,
    fontWeight: '900',
    color: COLORS.white,
  },
  username: {
    fontSize: 16,
    color: COLORS.white,
    marginTop: 4,
    fontWeight: '700',
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.lightGrey,
    marginVertical: width * 0.03,
  },
  infoSection: {
    gap: width * 0.04,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: COLORS.white,
    marginBottom: width * 0.04,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.04,
    marginBottom: width * 0.02,
  },
  iconContainer: {
    width: width * 0.1,
    height: width * 0.1,
    maxWidth: 40,
    maxHeight: 40,
    borderRadius: 12,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    color: COLORS.white,
    marginBottom: 2,
  },
  value: {
    fontSize: 16,
    color: COLORS.white,
    fontWeight: '500',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.black,
    borderRadius: 8,
    paddingHorizontal: width * 0.04,
    paddingVertical: width * 0.03,
    marginTop: 4,
  },
  passwordValue: {
    fontSize: 16,
    color: COLORS.white,
    fontWeight: '500',
  },
  passwordIcon: {
    backgroundColor: COLORS.lightBlue,
    width: width * 0.08,
    height: width * 0.08,
    maxWidth: 32,
    maxHeight: 32,
    borderRadius: width * 0.04,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
