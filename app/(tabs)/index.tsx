 // for Expo SDK 48+




import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useRef, useState } from 'react';
import {
  Alert,
  Animated,
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const BlueShoreApp = () => {
  const [sensorData, setSensorData] = useState({
    airTemp: '28°C',
    waterTemp: '24°C',
    humidity: '65%',
    windSpeed: '15 km/h',
    uvIndex: 'UV 6',
    waveHeight: '1.2m',
    waterPH: '7.8',
    waterQuality: 'GOOD',
  });

  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: 'info',
      icon: 'ℹ️',
      title: 'High Tide Advisory',
      message: 'High tide expected at 14:30. Beach area may be reduced.',
    },
    {
      id: 2,
      type: 'warning',
      icon: '⚠️',
      title: 'UV Warning',
      message: 'UV Index is 6. Use sunscreen and seek shade during peak hours.',
    },
    {
      id: 3,
      type: 'info',
      icon: '🏊',
      title: 'Swimming Conditions',
      message: 'Good conditions for swimming. Water temperature ideal.',
    },
  ]);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();

    // Simulate real-time data updates
    const interval = setInterval(() => {
      const temps = ['27°C', '28°C', '29°C', '30°C'];
      const qualities = ['EXCELLENT', 'GOOD', 'FAIR'];
      setSensorData(prev => ({
        ...prev,
        airTemp: temps[Math.floor(Math.random() * temps.length)],
        waterQuality: qualities[Math.floor(Math.random() * qualities.length)],
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

type StatusCardProps = {
  title: string;
  value: string;
  status: string;
  icon: string;
};

const StatusCard: React.FC<StatusCardProps> = ({ title, value, status, icon }) => (
  <Animated.View style={[styles.statusCard, { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }]}>
    <LinearGradient
      colors={['rgba(255,255,255,0.95)', 'rgba(255,255,255,0.85)']}
      style={styles.statusCardGradient}
    >
      <Text style={styles.statusIcon}>{icon}</Text>
      <Text style={[styles.statusValue, getStatusColor(status)]}>{status}</Text>
      <Text style={styles.statusTitle}>{title}</Text>
    </LinearGradient>
  </Animated.View>
);
 type SensorItemProps = {
  label: string;
  value: string;
};

const SensorItem: React.FC<SensorItemProps> = ({ label, value }) => (
  <View style={styles.sensorItem}>
    <Text style={styles.sensorValue}>{value}</Text>
    <Text style={styles.sensorLabel}>{label}</Text>
  </View>
);

type AlertItemProps = {
  alert: {
    id: number;
    type: string;
    icon: string;
    title: string;
    message: string;
  };
};

const AlertItem: React.FC<AlertItemProps> = ({ alert }) => (
  <LinearGradient
    colors={alert.type === 'warning' ? ['#feca57', '#ff9ff3'] : ['#48cae4', '#0077b6']}
    style={styles.alertItem}
  >
    <Text style={styles.alertIcon}>{alert.icon}</Text>
    <View style={styles.alertContent}>
      <Text style={styles.alertTitle}>{alert.title}</Text>
      <Text style={styles.alertMessage}>{alert.message}</Text>
    </View>
  </LinearGradient>
);

const getStatusColor = (status: string) => {
  switch (status) {
    case 'EXCELLENT':
    case 'SAFE':
    case 'IDEAL':
      return styles.statusExcellent;
    case 'GOOD':
    case 'MODERATE':
      return styles.statusGood;
    case 'WARNING':
      return styles.statusWarning;
    default:
      return styles.statusGood;
  }
};
  const handleARMode = () => {
    Alert.alert(
      'AR Mode',
      'AR Mode would launch camera interface with real-time beach condition overlays',
      [{ text: 'OK', style: 'default' }]
    );
  };

  const handleMobileAR = () => {
    Alert.alert(
      'Mobile AR',
      'Mobile AR interface would provide smartphone-based augmented reality view',
      [{ text: 'OK', style: 'default' }]
    );
  };

  const handleCrowdHeatmap = () => {
    Alert.alert(
      'Crowd Heatmap',
      'Crowd density visualization would show real-time occupancy patterns',
      [{ text: 'OK', style: 'default' }]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#667eea" />
      
      <LinearGradient colors={['#667eea', '#764ba2']} style={styles.header}>
        <Text style={styles.headerTitle}>🏖️ BlueShore</Text>
        <Text style={styles.headerSubtitle}>Beach Recreation Monitoring System</Text>
      </LinearGradient>

      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Status Overview */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Current Status</Text>
          <View style={styles.statusGrid}>
            <StatusCard title="Beach Conditions" value="EXCELLENT" status="EXCELLENT" icon="🏖️" />
            <StatusCard title="Wave Conditions" value="MODERATE" status="MODERATE" icon="🌊" />
            <StatusCard title="Safety Status" value="SAFE" status="SAFE" icon="🦺" />
            <StatusCard title="Crowding Level" value="MODERATE" status="MODERATE" icon="👥" />
            <StatusCard title="Temperature" value="IDEAL" status="IDEAL" icon="🌡️" />
          </View>
        </View>

        {/* Environmental Sensors */}
        <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
          <Text style={styles.cardTitle}>🔬 Environmental Sensors</Text>
          <View style={styles.sensorGrid}>
            <SensorItem label="Air Temp" value={sensorData.airTemp} />
            <SensorItem label="Water Temp" value={sensorData.waterTemp} />
            <SensorItem label="Humidity" value={sensorData.humidity} />
            <SensorItem label="Wind Speed" value={sensorData.windSpeed} />
            <SensorItem label="UV Index" value={sensorData.uvIndex} />
            <SensorItem label="Wave Height" value={sensorData.waveHeight} />
            <SensorItem label="Water pH" value={sensorData.waterPH} />
            <SensorItem label="Water Quality" value={sensorData.waterQuality} />
          </View>
        </Animated.View>

        {/* Weather Information */}
        <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
          <Text style={styles.cardTitle}>🌤️ Weather Conditions</Text>
          <View style={styles.weatherGrid}>
            <View style={styles.weatherItem}>
              <Text style={styles.weatherIcon}>☀️</Text>
              <Text style={styles.weatherLabel}>Sunny</Text>
              <Text style={styles.weatherDesc}>Clear skies</Text>
            </View>
            <View style={styles.weatherItem}>
              <Text style={styles.weatherIcon}>💨</Text>
              <Text style={styles.weatherLabel}>15 km/h</Text>
              <Text style={styles.weatherDesc}>SW Wind</Text>
            </View>
            <View style={styles.weatherItem}>
              <Text style={styles.weatherIcon}>👁️</Text>
              <Text style={styles.weatherLabel}>12 km</Text>
              <Text style={styles.weatherDesc}>Visibility</Text>
            </View>
            <View style={styles.weatherItem}>
              <Text style={styles.weatherIcon}>🌊</Text>
              <Text style={styles.weatherLabel}>High</Text>
              <Text style={styles.weatherDesc}>Tide: 14:30</Text>
            </View>
          </View>
        </Animated.View>

        {/* Real-time Alerts */}
        <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
          <Text style={styles.cardTitle}>⚠️ Real-time Alerts</Text>
          <FlatList
            data={alerts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <AlertItem alert={item} />}
            scrollEnabled={false}
          />
        </Animated.View>

        {/* Recommendations */}
        <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
          <Text style={styles.cardTitle}>💡 Smart Recommendations</Text>
          <View style={styles.recommendationItem}>
            <Text style={styles.recommendationTitle}>Best Activities:</Text>
            <Text style={styles.recommendationText}>Swimming, sunbathing, beach volleyball, water sports</Text>
          </View>
          <View style={styles.recommendationItem}>
            <Text style={styles.recommendationTitle}>Recommended Time:</Text>
            <Text style={styles.recommendationText}>Current conditions are optimal until 16:00</Text>
          </View>
          <View style={styles.recommendationItem}>
            <Text style={styles.recommendationTitle}>Safety Tip:</Text>
            <Text style={styles.recommendationText}>Apply SPF 30+ sunscreen every 2 hours</Text>
          </View>
          <View style={styles.recommendationItem}>
            <Text style={styles.recommendationTitle}>Comfort Zone:</Text>
            <Text style={styles.recommendationText}>East section has less wind exposure</Text>
          </View>
        </Animated.View>

        {/* AR Visualization */}
        <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
          <Text style={styles.cardTitle}>🥽 Enhanced Reality View</Text>
          <LinearGradient colors={['#667eea', '#764ba2']} style={styles.arViewer}>
            <Text style={styles.arEmoji}>🌊🏖️🌞</Text>
            <Text style={styles.arTitle}>AR Beach Conditions</Text>
            <Text style={styles.arSubtitle}>Interactive 3D visualization</Text>
            <View style={styles.arFeatures}>
              <Text style={styles.arFeature}>• Real-time wave patterns</Text>
              <Text style={styles.arFeature}>• Safety zones overlay</Text>
              <Text style={styles.arFeature}>• Facility locations</Text>
              <Text style={styles.arFeature}>• Crowd density mapping</Text>
            </View>
          </LinearGradient>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.primaryButton} onPress={handleARMode}>
              <Text style={styles.buttonText}>🎯 AR Mode</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryButton} onPress={handleMobileAR}>
              <Text style={styles.buttonText}>📱 Mobile AR</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>

        {/* Beach Map */}
        <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
          <Text style={styles.cardTitle}>🗺️ Interactive Beach Map</Text>
          <LinearGradient colors={['#74b9ff', '#0984e3']} style={styles.beachMap}>
            <View style={styles.mapOverlay}>
              <Text style={styles.mapOverlayText}>📍 Main Beach Area</Text>
            </View>
            <Text style={styles.mapEmoji}>🏖️</Text>
            <Text style={styles.mapTitle}>Beach Layout & Facilities</Text>
            <Text style={styles.mapFacilities}>
              🚿 Showers • 🚻 Restrooms • 🏐 Sports{'\n'}
              🍹 Refreshments • 🦺 Lifeguards
            </Text>
          </LinearGradient>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.primaryButton} onPress={handleCrowdHeatmap}>
              <Text style={styles.buttonText}>📊 Crowd Map</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryButton}>
              <Text style={styles.buttonText}>📍 My Location</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>

        <View style={styles.bottomPadding} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
    marginTop: 5,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 15,
  },
  statusGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statusCard: {
    width: (width - 60) / 2,
    marginBottom: 15,
  },
  statusCardGradient: {
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  statusIcon: {
    fontSize: 30,
    marginBottom: 10,
  },
  statusValue: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  statusTitle: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  statusExcellent: {
    color: '#27ae60',
  },
  statusGood: {
    color: '#f39c12',
  },
  statusWarning: {
    color: '#e74c3c',
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 15,
  },
  sensorGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  sensorItem: {
    width: (width - 80) / 4,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#dee2e6',
  },
  sensorValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  sensorLabel: {
    fontSize: 10,
    color: '#6c757d',
    marginTop: 4,
    textAlign: 'center',
  },
  weatherGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  weatherItem: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    marginHorizontal: 2,
  },
  weatherIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  weatherLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  weatherDesc: {
    fontSize: 12,
    color: '#6c757d',
    marginTop: 2,
  },
  alertItem: {
    flexDirection: 'row',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  alertIcon: {
    fontSize: 20,
    marginRight: 15,
  },
  alertContent: {
    flex: 1,
  },
  alertTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  alertMessage: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
  },
  recommendationItem: {
    backgroundColor: 'rgba(168, 230, 207, 0.3)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#27ae60',
  },
  recommendationTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 4,
  },
  recommendationText: {
    fontSize: 14,
    color: '#555',
  },
  arViewer: {
    borderRadius: 15,
    padding: 30,
    alignItems: 'center',
    marginBottom: 15,
  },
  arEmoji: {
    fontSize: 40,
    marginBottom: 15,
  },
  arTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  arSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    marginBottom: 15,
    textAlign: 'center',
  },
  arFeatures: {
    alignItems: 'flex-start',
  },
  arFeature: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.9)',
    marginBottom: 4,
  },
  beachMap: {
    borderRadius: 15,
    padding: 30,
    alignItems: 'center',
    marginBottom: 15,
    position: 'relative',
  },
  mapOverlay: {
    position: 'absolute',
    top: 15,
    left: 15,
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  mapOverlayText: {
    fontSize: 12,
    color: '#333',
  },
  mapEmoji: {
    fontSize: 40,
    marginBottom: 15,
  },
  mapTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
  },
  mapFacilities: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  primaryButton: {
    flex: 1,
    backgroundColor: '#667eea',
    padding: 15,
    borderRadius: 25,
    marginRight: 5,
    alignItems: 'center',
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: 'rgba(102, 126, 234, 0.3)',
    padding: 15,
    borderRadius: 25,
    marginLeft: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  bottomPadding: {
    height: 30,
  },
});

export default BlueShoreApp;