import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.label}>360 KIDS ACTIVITY</Text>
      <Text accessibilityRole="header" style={styles.title}>Little adventures. Big possibilities.</Text>
      <Text style={styles.body}>Discover a new way to explore activities for your family.</Text>
      <View style={styles.notice}><Text style={styles.note}>Development preview. Bookings and payments are not available yet.</Text></View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fcfaf5', padding: 28, paddingTop: 64, justifyContent: 'center' },
  label: { color: '#87502b', fontSize: 13, letterSpacing: 2, fontWeight: '700', marginBottom: 24 },
  title: { fontSize: 38, lineHeight: 44, fontWeight: '700', color: '#183f3a', marginBottom: 20 },
  body: { fontSize: 18, lineHeight: 28, color: '#43574c', marginBottom: 28 },
  notice: { padding: 18, borderRadius: 14, backgroundColor: '#eff1e7' },
  note: { fontSize: 14, lineHeight: 22, color: '#43574c' },
});
