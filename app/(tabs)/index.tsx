//  // for Expo SDK 48+




// import { LinearGradient } from 'expo-linear-gradient';
// import React, { useEffect, useRef, useState } from 'react';
// import {
//   Alert,
//   Animated,
//   Dimensions,
//   FlatList,
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';

// const { width, height } = Dimensions.get('window');

// const BlueShoreApp = () => {
//   const [sensorData, setSensorData] = useState({
//     airTemp: '28°C',
//     waterTemp: '24°C',
//     humidity: '65%',
//     windSpeed: '15 km/h',
//     uvIndex: 'UV 6',
//     waveHeight: '1.2m',
//     waterPH: '7.8',
//     waterQuality: 'GOOD',
//   });

//   const [alerts, setAlerts] = useState([
//     {
//       id: 1,
//       type: 'info',
//       icon: 'ℹ️',
//       title: 'High Tide Advisory',
//       message: 'High tide expected at 14:30. Beach area may be reduced.',
//     },
//     {
//       id: 2,
//       type: 'warning',
//       icon: '⚠️',
//       title: 'UV Warning',
//       message: 'UV Index is 6. Use sunscreen and seek shade during peak hours.',
//     },
//     {
//       id: 3,
//       type: 'info',
//       icon: '🏊',
//       title: 'Swimming Conditions',
//       message: 'Good conditions for swimming. Water temperature ideal.',
//     },
//   ]);

//   const fadeAnim = useRef(new Animated.Value(0)).current;
//   const scaleAnim = useRef(new Animated.Value(0.9)).current;

//   useEffect(() => {
//     Animated.parallel([
//       Animated.timing(fadeAnim, {
//         toValue: 1,
//         duration: 1000,
//         useNativeDriver: true,
//       }),
//       Animated.timing(scaleAnim, {
//         toValue: 1,
//         duration: 800,
//         useNativeDriver: true,
//       }),
//     ]).start();

//     // Simulate real-time data updates
//     const interval = setInterval(() => {
//       const temps = ['27°C', '28°C', '29°C', '30°C'];
//       const qualities = ['EXCELLENT', 'GOOD', 'FAIR'];
//       setSensorData(prev => ({
//         ...prev,
//         airTemp: temps[Math.floor(Math.random() * temps.length)],
//         waterQuality: qualities[Math.floor(Math.random() * qualities.length)],
//       }));
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

// type StatusCardProps = {
//   title: string;
//   value: string;
//   status: string;
//   icon: string;
// };

// const StatusCard: React.FC<StatusCardProps> = ({ title, value, status, icon }) => (
//   <Animated.View style={[styles.statusCard, { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }]}>
//     <LinearGradient
//       colors={['rgba(255,255,255,0.95)', 'rgba(255,255,255,0.85)']}
//       style={styles.statusCardGradient}
//     >
//       <Text style={styles.statusIcon}>{icon}</Text>
//       <Text style={[styles.statusValue, getStatusColor(status)]}>{status}</Text>
//       <Text style={styles.statusTitle}>{title}</Text>
//     </LinearGradient>
//   </Animated.View>
// );
//  type SensorItemProps = {
//   label: string;
//   value: string;
// };

// const SensorItem: React.FC<SensorItemProps> = ({ label, value }) => (
//   <View style={styles.sensorItem}>
//     <Text style={styles.sensorValue}>{value}</Text>
//     <Text style={styles.sensorLabel}>{label}</Text>
//   </View>
// );

// type AlertItemProps = {
//   alert: {
//     id: number;
//     type: string;
//     icon: string;
//     title: string;
//     message: string;
//   };
// };

// const AlertItem: React.FC<AlertItemProps> = ({ alert }) => (
//   <LinearGradient
//     colors={alert.type === 'warning' ? ['#feca57', '#ff9ff3'] : ['#48cae4', '#0077b6']}
//     style={styles.alertItem}
//   >
//     <Text style={styles.alertIcon}>{alert.icon}</Text>
//     <View style={styles.alertContent}>
//       <Text style={styles.alertTitle}>{alert.title}</Text>
//       <Text style={styles.alertMessage}>{alert.message}</Text>
//     </View>
//   </LinearGradient>
// );

// const getStatusColor = (status: string) => {
//   switch (status) {
//     case 'EXCELLENT':
//     case 'SAFE':
//     case 'IDEAL':
//       return styles.statusExcellent;
//     case 'GOOD':
//     case 'MODERATE':
//       return styles.statusGood;
//     case 'WARNING':
//       return styles.statusWarning;
//     default:
//       return styles.statusGood;
//   }
// };
//   const handleARMode = () => {
//     Alert.alert(
//       'AR Mode',
//       'AR Mode would launch camera interface with real-time beach condition overlays',
//       [{ text: 'OK', style: 'default' }]
//     );
//   };

//   const handleMobileAR = () => {
//     Alert.alert(
//       'Mobile AR',
//       'Mobile AR interface would provide smartphone-based augmented reality view',
//       [{ text: 'OK', style: 'default' }]
//     );
//   };

//   const handleCrowdHeatmap = () => {
//     Alert.alert(
//       'Crowd Heatmap',
//       'Crowd density visualization would show real-time occupancy patterns',
//       [{ text: 'OK', style: 'default' }]
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#667eea" />
      
//       <LinearGradient colors={['#667eea', '#764ba2']} style={styles.header}>
//         <Text style={styles.headerTitle}>🏖️ BlueShore</Text>
//         <Text style={styles.headerSubtitle}>Beach Recreation Monitoring System</Text>
//       </LinearGradient>

//       <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
//         {/* Status Overview */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Current Status</Text>
//           <View style={styles.statusGrid}>
//             <StatusCard title="Beach Conditions" value="EXCELLENT" status="EXCELLENT" icon="🏖️" />
//             <StatusCard title="Wave Conditions" value="MODERATE" status="MODERATE" icon="🌊" />
//             <StatusCard title="Safety Status" value="SAFE" status="SAFE" icon="🦺" />
//             <StatusCard title="Crowding Level" value="MODERATE" status="MODERATE" icon="👥" />
//             <StatusCard title="Temperature" value="IDEAL" status="IDEAL" icon="🌡️" />
//           </View>
//         </View>

//         {/* Environmental Sensors */}
//         <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
//           <Text style={styles.cardTitle}>🔬 Environmental Sensors</Text>
//           <View style={styles.sensorGrid}>
//             <SensorItem label="Air Temp" value={sensorData.airTemp} />
//             <SensorItem label="Water Temp" value={sensorData.waterTemp} />
//             <SensorItem label="Humidity" value={sensorData.humidity} />
//             <SensorItem label="Wind Speed" value={sensorData.windSpeed} />
//             <SensorItem label="UV Index" value={sensorData.uvIndex} />
//             <SensorItem label="Wave Height" value={sensorData.waveHeight} />
//             <SensorItem label="Water pH" value={sensorData.waterPH} />
//             <SensorItem label="Water Quality" value={sensorData.waterQuality} />
//           </View>
//         </Animated.View>

//         {/* Weather Information */}
//         <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
//           <Text style={styles.cardTitle}>🌤️ Weather Conditions</Text>
//           <View style={styles.weatherGrid}>
//             <View style={styles.weatherItem}>
//               <Text style={styles.weatherIcon}>☀️</Text>
//               <Text style={styles.weatherLabel}>Sunny</Text>
//               <Text style={styles.weatherDesc}>Clear skies</Text>
//             </View>
//             <View style={styles.weatherItem}>
//               <Text style={styles.weatherIcon}>💨</Text>
//               <Text style={styles.weatherLabel}>15 km/h</Text>
//               <Text style={styles.weatherDesc}>SW Wind</Text>
//             </View>
//             <View style={styles.weatherItem}>
//               <Text style={styles.weatherIcon}>👁️</Text>
//               <Text style={styles.weatherLabel}>12 km</Text>
//               <Text style={styles.weatherDesc}>Visibility</Text>
//             </View>
//             <View style={styles.weatherItem}>
//               <Text style={styles.weatherIcon}>🌊</Text>
//               <Text style={styles.weatherLabel}>High</Text>
//               <Text style={styles.weatherDesc}>Tide: 14:30</Text>
//             </View>
//           </View>
//         </Animated.View>

//         {/* Real-time Alerts */}
//         <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
//           <Text style={styles.cardTitle}>⚠️ Real-time Alerts</Text>
//           <FlatList
//             data={alerts}
//             keyExtractor={(item) => item.id.toString()}
//             renderItem={({ item }) => <AlertItem alert={item} />}
//             scrollEnabled={false}
//           />
//         </Animated.View>

//         {/* Recommendations */}
//         <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
//           <Text style={styles.cardTitle}>💡 Smart Recommendations</Text>
//           <View style={styles.recommendationItem}>
//             <Text style={styles.recommendationTitle}>Best Activities:</Text>
//             <Text style={styles.recommendationText}>Swimming, sunbathing, beach volleyball, water sports</Text>
//           </View>
//           <View style={styles.recommendationItem}>
//             <Text style={styles.recommendationTitle}>Recommended Time:</Text>
//             <Text style={styles.recommendationText}>Current conditions are optimal until 16:00</Text>
//           </View>
//           <View style={styles.recommendationItem}>
//             <Text style={styles.recommendationTitle}>Safety Tip:</Text>
//             <Text style={styles.recommendationText}>Apply SPF 30+ sunscreen every 2 hours</Text>
//           </View>
//           <View style={styles.recommendationItem}>
//             <Text style={styles.recommendationTitle}>Comfort Zone:</Text>
//             <Text style={styles.recommendationText}>East section has less wind exposure</Text>
//           </View>
//         </Animated.View>

//         {/* AR Visualization */}
//         <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
//           <Text style={styles.cardTitle}>🥽 Enhanced Reality View</Text>
//           <LinearGradient colors={['#667eea', '#764ba2']} style={styles.arViewer}>
//             <Text style={styles.arEmoji}>🌊🏖️🌞</Text>
//             <Text style={styles.arTitle}>AR Beach Conditions</Text>
//             <Text style={styles.arSubtitle}>Interactive 3D visualization</Text>
//             <View style={styles.arFeatures}>
//               <Text style={styles.arFeature}>• Real-time wave patterns</Text>
//               <Text style={styles.arFeature}>• Safety zones overlay</Text>
//               <Text style={styles.arFeature}>• Facility locations</Text>
//               <Text style={styles.arFeature}>• Crowd density mapping</Text>
//             </View>
//           </LinearGradient>
//           <View style={styles.buttonRow}>
//             <TouchableOpacity style={styles.primaryButton} onPress={handleARMode}>
//               <Text style={styles.buttonText}>🎯 AR Mode</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.secondaryButton} onPress={handleMobileAR}>
//               <Text style={styles.buttonText}>📱 Mobile AR</Text>
//             </TouchableOpacity>
//           </View>
//         </Animated.View>

//         {/* Beach Map */}
//         <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
//           <Text style={styles.cardTitle}>🗺️ Interactive Beach Map</Text>
//           <LinearGradient colors={['#74b9ff', '#0984e3']} style={styles.beachMap}>
//             <View style={styles.mapOverlay}>
//               <Text style={styles.mapOverlayText}>📍 Main Beach Area</Text>
//             </View>
//             <Text style={styles.mapEmoji}>🏖️</Text>
//             <Text style={styles.mapTitle}>Beach Layout & Facilities</Text>
//             <Text style={styles.mapFacilities}>
//               🚿 Showers • 🚻 Restrooms • 🏐 Sports{'\n'}
//               🍹 Refreshments • 🦺 Lifeguards
//             </Text>
//           </LinearGradient>
//           <View style={styles.buttonRow}>
//             <TouchableOpacity style={styles.primaryButton} onPress={handleCrowdHeatmap}>
//               <Text style={styles.buttonText}>📊 Crowd Map</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.secondaryButton}>
//               <Text style={styles.buttonText}>📍 My Location</Text>
//             </TouchableOpacity>
//           </View>
//         </Animated.View>

//         <View style={styles.bottomPadding} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f0f2f5',
//   },
//   header: {
//     paddingHorizontal: 20,
//     paddingVertical: 25,
//     borderBottomLeftRadius: 25,
//     borderBottomRightRadius: 25,
//   },
//   headerTitle: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: 'white',
//     textAlign: 'center',
//   },
//   headerSubtitle: {
//     fontSize: 14,
//     color: 'rgba(255,255,255,0.9)',
//     textAlign: 'center',
//     marginTop: 5,
//   },
//   scrollContainer: {
//     flex: 1,
//     paddingHorizontal: 20,
//   },
//   section: {
//     marginVertical: 20,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#2c3e50',
//     marginBottom: 15,
//   },
//   statusGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   statusCard: {
//     width: (width - 60) / 2,
//     marginBottom: 15,
//   },
//   statusCardGradient: {
//     padding: 20,
//     borderRadius: 15,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 5,
//   },
//   statusIcon: {
//     fontSize: 30,
//     marginBottom: 10,
//   },
//   statusValue: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   statusTitle: {
//     fontSize: 12,
//     color: '#666',
//     textAlign: 'center',
//   },
//   statusExcellent: {
//     color: '#27ae60',
//   },
//   statusGood: {
//     color: '#f39c12',
//   },
//   statusWarning: {
//     color: '#e74c3c',
//   },
//   card: {
//     backgroundColor: 'rgba(255,255,255,0.95)',
//     borderRadius: 15,
//     padding: 20,
//     marginVertical: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 5,
//   },
//   cardTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#2c3e50',
//     marginBottom: 15,
//   },
//   sensorGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   sensorItem: {
//     width: (width - 80) / 4,
//     backgroundColor: '#f8f9fa',
//     borderRadius: 10,
//     padding: 12,
//     alignItems: 'center',
//     marginBottom: 10,
//     borderWidth: 1,
//     borderColor: '#dee2e6',
//   },
//   sensorValue: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#2c3e50',
//   },
//   sensorLabel: {
//     fontSize: 10,
//     color: '#6c757d',
//     marginTop: 4,
//     textAlign: 'center',
//   },
//   weatherGrid: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   weatherItem: {
//     flex: 1,
//     alignItems: 'center',
//     padding: 15,
//     backgroundColor: '#f8f9fa',
//     borderRadius: 10,
//     marginHorizontal: 2,
//   },
//   weatherIcon: {
//     fontSize: 24,
//     marginBottom: 8,
//   },
//   weatherLabel: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#2c3e50',
//   },
//   weatherDesc: {
//     fontSize: 12,
//     color: '#6c757d',
//     marginTop: 2,
//   },
//   alertItem: {
//     flexDirection: 'row',
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 10,
//     alignItems: 'center',
//   },
//   alertIcon: {
//     fontSize: 20,
//     marginRight: 15,
//   },
//   alertContent: {
//     flex: 1,
//   },
//   alertTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: 'white',
//     marginBottom: 4,
//   },
//   alertMessage: {
//     fontSize: 14,
//     color: 'rgba(255,255,255,0.9)',
//   },
//   recommendationItem: {
//     backgroundColor: 'rgba(168, 230, 207, 0.3)',
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 10,
//     borderLeftWidth: 4,
//     borderLeftColor: '#27ae60',
//   },
//   recommendationTitle: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#2c3e50',
//     marginBottom: 4,
//   },
//   recommendationText: {
//     fontSize: 14,
//     color: '#555',
//   },
//   arViewer: {
//     borderRadius: 15,
//     padding: 30,
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   arEmoji: {
//     fontSize: 40,
//     marginBottom: 15,
//   },
//   arTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'white',
//     marginBottom: 8,
//   },
//   arSubtitle: {
//     fontSize: 14,
//     color: 'rgba(255,255,255,0.8)',
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   arFeatures: {
//     alignItems: 'flex-start',
//   },
//   arFeature: {
//     fontSize: 12,
//     color: 'rgba(255,255,255,0.9)',
//     marginBottom: 4,
//   },
//   beachMap: {
//     borderRadius: 15,
//     padding: 30,
//     alignItems: 'center',
//     marginBottom: 15,
//     position: 'relative',
//   },
//   mapOverlay: {
//     position: 'absolute',
//     top: 15,
//     left: 15,
//     backgroundColor: 'rgba(255,255,255,0.9)',
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 20,
//   },
//   mapOverlayText: {
//     fontSize: 12,
//     color: '#333',
//   },
//   mapEmoji: {
//     fontSize: 40,
//     marginBottom: 15,
//   },
//   mapTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'white',
//     marginBottom: 15,
//   },
//   mapFacilities: {
//     fontSize: 14,
//     color: 'rgba(255,255,255,0.9)',
//     textAlign: 'center',
//   },
//   buttonRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   primaryButton: {
//     flex: 1,
//     backgroundColor: '#667eea',
//     padding: 15,
//     borderRadius: 25,
//     marginRight: 5,
//     alignItems: 'center',
//   },
//   secondaryButton: {
//     flex: 1,
//     backgroundColor: 'rgba(102, 126, 234, 0.3)',
//     padding: 15,
//     borderRadius: 25,
//     marginLeft: 5,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: '600',
//     fontSize: 14,
//   },
//   bottomPadding: {
//     height: 30,
//   },
// });

// export default BlueShoreApp;


// with three dot section updated:
// import { LinearGradient } from 'expo-linear-gradient';
// import * as Location from 'expo-location';
// import React, { useEffect, useRef, useState } from 'react';
// import {
//     Alert,
//     Animated,
//     Dimensions,
//     FlatList,
//     Modal,
//     SafeAreaView,
//     ScrollView,
//     StatusBar,
//     StyleSheet,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     View,
// } from 'react-native';
// import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
// const { width, height } = Dimensions.get('window');
// const styles = StyleSheet.create({
//   // Auth Screens Styles
//   authContainer: {
//     flex: 1,
//   },
//   authGradient: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   scrollAuthContent: {
//     flexGrow: 1,
//     justifyContent: 'center',
//   },
//   authContent: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 30,
//   },
//   logoContainer: {
//     alignItems: 'center',
//     marginBottom: 40,
//   },
//   logoEmoji: {
//     fontSize: 60,
//     marginBottom: 15,
//   },
//   logoText: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: 'white',
//     marginBottom: 8,
//   },
//   logoSubtext: {
//     fontSize: 16,
//     color: 'rgba(255,255,255,0.8)',
//     textAlign: 'center',
//   },
//   formContainer: {
//     backgroundColor: 'rgba(255,255,255,0.95)',
//     borderRadius: 20,
//     padding: 25,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 8 },
//     shadowOpacity: 0.15,
//     shadowRadius: 12,
//     elevation: 8,
//   },
//   formTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#2c3e50',
//     textAlign: 'center',
//     marginBottom: 25,
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   inputLabel: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#2c3e50',
//     marginBottom: 8,
//   },
//   textInput: {
//     backgroundColor: '#f8f9fa',
//     borderRadius: 12,
//     padding: 15,
//     fontSize: 16,
//     borderWidth: 1,
//     borderColor: '#dee2e6',
//     color: '#2c3e50',
//   },
//   forgotPassword: {
//     alignSelf: 'flex-end',
//     marginBottom: 25,
//   },
//   forgotPasswordText: {
//     color: '#667eea',
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   authButton: {
//     backgroundColor: '#667eea',
//     borderRadius: 12,
//     padding: 16,
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   authButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   authFooter: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   authFooterText: {
//     color: '#6c757d',
//     fontSize: 14,
//   },
//   authFooterLink: {
//     color: '#667eea',
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   backButton: {
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   backButtonText: {
//     color: '#667eea',
//     fontSize: 16,
//     fontWeight: '600',
//   },

//   recommendationsSection: {
//     marginBottom: 25,
//   },
//   recommendationCard: {
//     width: 200,
//     marginRight: 15,
//   },
//   recommendationGradient: {
//     borderRadius: 15,
//     padding: 20,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 5,
//   },
//   recommendationEmoji: {
//     fontSize: 30,
//     marginBottom: 10,
//   },
//   recommendationTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#2c3e50',
//     textAlign: 'center',
//     marginBottom: 5,
//   },

//   // Home Screen Styles
//     container: {
//     flex: 1,
//     backgroundColor: '#f0f2f5',
//   },
//   homeHeader: {
//     paddingHorizontal: 20,
//     paddingTop: 15,
//     paddingBottom: 20,
//     borderBottomLeftRadius: 25,
//     borderBottomRightRadius: 25,
//   },
//   headerTop: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   headerRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   headerButton: {
//     marginLeft: 15,
//     position: 'relative',
//   },
//   headerIcon: {
//     fontSize: 24,
//   },
//   alertBadge: {
//     position: 'absolute',
//     top: -2,
//     right: -2,
//     width: 8,
//     height: 8,
//     backgroundColor: '#ff4757',
//     borderRadius: 4,
//   },
//   searchContainer: {
//     marginBottom: 10,
//   },
//   searchBar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'rgba(255,255,255,0.95)',
//     borderRadius: 15,
//     paddingHorizontal: 15,
//     paddingVertical: 12,
//   },
//   searchIcon: {
//     fontSize: 18,
//     marginRight: 10,
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 16,
//     color: '#2c3e50',
//   },
//   locationButton: {
//     padding: 5,
//   },
//   locationIcon: {
//     fontSize: 18,
//   },
//   scrollContainer: {
//     flex: 1,
//     paddingHorizontal: 20,
//   },
//   mapContainer: {
//     marginVertical: 20,
//   },
//   mapView: {
//     borderRadius: 15,
//     padding: 30,
//     alignItems: 'center',
//   },
//   mapEmoji: {
//     fontSize: 40,
//     marginBottom: 15,
//   },
//   mapTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'white',
//     marginBottom: 8,
//   },
//   mapSubtitle: {
//     fontSize: 14,
//     color: 'rgba(255,255,255,0.8)',
//     marginBottom: 20,
//   },
//   mapControls: {
//     flexDirection: 'row',
//     gap: 10,
//   },
//   mapButton: {
//     backgroundColor: 'rgba(255,255,255,0.2)',
//     paddingHorizontal: 15,
//     paddingVertical: 8,
//     borderRadius: 20,
//   },
//   mapButtonText: {
//     color: 'white',
//     fontSize: 12,
//     fontWeight: '600',
//   },
//   quickStatus: {
//     marginBottom: 25,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#2c3e50',
//     marginBottom: 15,
//   },
//   statusRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   statusItem: {
//     flex: 1,
//     backgroundColor: 'rgba(255,255,255,0.95)',
//     borderRadius: 12,
//     padding: 15,
//     alignItems: 'center',
//     marginHorizontal: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   statusEmoji: {
//     fontSize: 24,
//     marginBottom: 8,
//   },
//   statusValue: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#2c3e50',
//     marginBottom: 4,
//   },
//   statusLabel: {
//     fontSize: 11,
//     color: '#6c757d',
//     textAlign: 'center',
//   },
//   recommendationType: {
//     fontSize: 12,
//     color: '#6c757d',
//     marginBottom: 10,
//   },
//   recommendationInfo: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//   },
//   recommendationRating: {
//     fontSize: 12,
//     color: '#f39c12',
//     fontWeight: '600',
//   },
//   recommendationDistance: {
//     fontSize: 12,
//     color: '#667eea',
//     fontWeight: '600',
//   },
//   alertsPreview: {
//     marginBottom: 25,
//   },
//   alertsHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   viewAllText: {
//     color: '#667eea',
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   alertPreviewItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'rgba(255,255,255,0.95)',
//     borderRadius: 12,
//     padding: 15,
//     marginBottom: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   alertPreviewIcon: {
//     fontSize: 20,
//     marginRight: 15,
//   },
//   alertPreviewContent: {
//     flex: 1,
//   },
//   alertPreviewTitle: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#2c3e50',
//     marginBottom: 4,
//   },
//   alertPreviewTime: {
//     fontSize: 12,
//     color: '#6c757d',
//   },
//   bottomPadding: {
//     height: 30,
//   },
//   bottomNav: {
//     flexDirection: 'row',
//     backgroundColor: 'rgba(255,255,255,0.98)',
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderTopWidth: 1,
//     borderTopColor: '#dee2e6',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: -2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 10,
//   },
//   navItem: {
//     flex: 1,
//     alignItems: 'center',
//     paddingVertical: 8,
//   },
//   navItemActive: {
//     backgroundColor: 'rgba(102, 126, 234, 0.1)',
//     borderRadius: 12,
//   },
//   navIcon: {
//     fontSize: 20,
//     marginBottom: 4,
//   },
//   navLabel: {
//     fontSize: 11,
//     color: '#6c757d',
//     fontWeight: '500',
//   },

//   // Modal Styles
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   alertsModal: {
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 20,
//     margin: 20,
//     maxHeight: height * 0.8,
//     width: width - 40,
//   },
//   modalHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//     paddingBottom: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#dee2e6',
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#2c3e50',
//   },
//   modalClose: {
//     fontSize: 24,
//     color: '#6c757d',
//     fontWeight: 'bold',
//   },
//   alertModalItem: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     padding: 15,
//     backgroundColor: '#f8f9fa',
//     borderRadius: 12,
//     marginBottom: 10,
//   },
//   alertModalIcon: {
//     fontSize: 20,
//     marginRight: 15,
//     marginTop: 2,
//   },
//   alertModalContent: {
//     flex: 1,
//   },
//   alertModalTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#2c3e50',
//     marginBottom: 5,
//   },
//   alertModalMessage: {
//     fontSize: 14,
//     color: '#555',
//     marginBottom: 8,
//     lineHeight: 20,
//   },
//   alertModalTime: {
//     fontSize: 12,
//     color: '#6c757d',
//   },
//   menuModal: {
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 20,
//     margin: 20,
//     minWidth: 200,
//   },
//   menuHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   menuHeaderTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#2c3e50',
//   },
//   menuHeaderClose: {
//     fontSize: 22,
//     color: '#6c757d',
//     fontWeight: 'bold',
//   },
//   menuScrollView: {
//     maxHeight: height * 0.5,
//   },
//   menuItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 15,
//     paddingHorizontal: 10,
//     borderRadius: 12,
//     marginBottom: 5,
//   },
//   menuIcon: {
//     fontSize: 20,
//     marginRight: 15,
//     width: 25,
//   },
//   menuItemContent: {
//     flex: 1,
//   },
//   menuText: {
//     fontSize: 16,
//     color: '#2c3e50',
//     fontWeight: '500',
//   },
//   menuSubtext: {
//     fontSize: 12,
//     color: '#6c757d',
//   },
//   menuDivider: {
//     height: 1,
//     backgroundColor: '#dee2e6',
//     marginVertical: 10,
//   },
//   logoutItem: {
//     backgroundColor: 'rgba(231, 76, 60, 0.1)',
//     marginTop: 10,
//   },
//   logoutText: {
//     color: '#e74c3c',
//     fontWeight: 'bold',
//   },
//   menuCancel: {
//     alignItems: 'center',
//     paddingVertical: 15,
//     marginTop: 10,
//     borderTopWidth: 1,
//     borderTopColor: '#dee2e6',
//   },
//   menuCancelText: {
//     fontSize: 16,
//     color: '#6c757d',
//     fontWeight: '600',
//   },
// });
// // Move this OUTSIDE of BeachRecreationApp
// // Fixed HomeScreen with proper TypeScript types
// const HomeScreen = ({
//   setCurrentScreen,
//   setShowAlerts,
//   setShowMenu,
//   alerts,
//   searchText,
//   setSearchText,
//   setSearchedLocation,
//   mapRef,
//   location,
//   searchedLocation,
//   sensorData,
//   recommendations,
//   styles,
// }: {
//   setCurrentScreen: (screen: string) => void;
//   setShowAlerts: (show: boolean) => void;
//   setShowMenu: (show: boolean) => void;
//   alerts: any[];
//   searchText: string;
//   setSearchText: (text: string) => void;
//   setSearchedLocation: (location: { latitude: number; longitude: number } | null) => void;
//   mapRef: React.RefObject<MapView>;
//   location: { latitude: number; longitude: number } | null;
//   searchedLocation: { latitude: number; longitude: number } | null;
//   sensorData: any;
//   recommendations: any[];
//   styles: any;
// }) => (
//   <SafeAreaView style={styles.container}>
//     <StatusBar barStyle="light-content" backgroundColor="#667eea" />
    
//     {/* Header with Navigation */}
//     <LinearGradient colors={['#667eea', '#764ba2']} style={styles.homeHeader}>
//       <View style={styles.headerTop}>
//         <TouchableOpacity onPress={() => setCurrentScreen('home')}>
//           <Text style={styles.headerIcon}>🏠</Text>
//         </TouchableOpacity>
        
//         <Text style={styles.headerTitle}>BlueShore</Text>
        
//         <View style={styles.headerRight}>
//           <TouchableOpacity 
//             style={styles.headerButton}
//             onPress={() => setShowAlerts(true)}
//           >
//             <Text style={styles.headerIcon}>🔔</Text>
//             {alerts.length > 0 && <View style={styles.alertBadge} />}
//           </TouchableOpacity>
          
//           <TouchableOpacity 
//             style={styles.headerButton}
//             onPress={() => setShowMenu(true)}
//           >
//             <Text style={styles.headerIcon}>⋯</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </LinearGradient>

    

// const BeachRecreationApp = () => {
//   const [currentScreen, setCurrentScreen] = useState('login'); // login, signup, forgot, home
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showAlerts, setShowAlerts] = useState(false);
//   const [showMenu, setShowMenu] = useState(false);
//   const [searchText, setSearchText] = useState('');
  
//   // Form states
//   const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
//   const [searchedLocation, setSearchedLocation] = useState<{ latitude: number; longitude: number } | null>(null); // <-- Add this line
//   const mapRef = useRef<MapView>(null);
// useEffect(() => {
//   let subscription: Location.LocationSubscription | null = null;

//   (async () => {
//     let { status } = await Location.requestForegroundPermissionsAsync();
//     if (status !== 'granted') {
//       alert('Permission to access location was denied');
//       return;
//     }
//     subscription = await Location.watchPositionAsync(
//       { accuracy: Location.Accuracy.High, distanceInterval: 5 },
//       (loc) => {
//         const coords = {
//           latitude: loc.coords.latitude,
//           longitude: loc.coords.longitude,
//         };
//         setLocation(coords);
//         mapRef.current?.animateToRegion({
//           ...coords,
//           latitudeDelta: 0.05,
//           longitudeDelta: 0.05,
//         }, 1000);
//       }
//     );
//   })();

//   return () => {
//     if (subscription) subscription.remove();
//   };
// }, []);
//   const [loginForm, setLoginForm] = useState({ email: '', password: '' });
//   const [signupForm, setSignupForm] = useState({ 
//     fullName: '', 
//     email: '', 
//     password: '', 
//     confirmPassword: '' 
//   });
//   const [forgotEmail, setForgotEmail] = useState('');

//   const [sensorData, setSensorData] = useState({
//     airTemp: '28°C',
//     waterTemp: '24°C',
//     humidity: '65%',
//     windSpeed: '15 km/h',
//     uvIndex: 'UV 6',
//     waveHeight: '1.2m',
//     waterPH: '7.8',
//     waterQuality: 'GOOD',
//   });

//   const [alerts, setAlerts] = useState([
//     {
//       id: 1,
//       type: 'info',
//       icon: 'ℹ️',
//       title: 'High Tide Advisory',
//       message: 'High tide expected at 14:30. Beach area may be reduced.',
//       time: '2 min ago'
//     },
//     {
//       id: 2,
//       type: 'warning',
//       icon: '⚠️',
//       title: 'UV Warning',
//       message: 'UV Index is 6. Use sunscreen and seek shade during peak hours.',
//       time: '15 min ago'
//     },
//     {
//       id: 3,
//       type: 'info',
//       icon: '🏊',
//       title: 'Swimming Conditions',
//       message: 'Good conditions for swimming. Water temperature ideal.',
//       time: '1 hour ago'
//     },
//   ]);

//   const [recommendations] = useState([
//     { id: 1, title: 'Sunny Beach Resort', rating: 4.8, distance: '2.3 km', type: 'Beach Resort' },
//     { id: 2, title: 'Marina Bay Beach', rating: 4.6, distance: '1.8 km', type: 'Public Beach' },
//     { id: 3, title: 'Coral Reef Point', rating: 4.9, distance: '3.5 km', type: 'Snorkeling Spot' },
//     { id: 4, title: 'Sunset Beach Club', rating: 4.7, distance: '4.2 km', type: 'Beach Club' },
//   ]);

//   const fadeAnim = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 1000,
//       useNativeDriver: true,
//     }).start();
//   }, [currentScreen]);

//   // Menu item handlers
// const handleMenuAction = (action: string) => {
//   setShowMenu(false);
    
//     switch (action) {
//       case 'settings':
//         Alert.alert('Settings', 'Settings panel would open here. Configure app preferences, notifications, and display options.');
//         break;
//       case 'bilingual':
//         Alert.alert('Language Settings', 'Choose your preferred language:\n• English\n• Spanish\n• French\n• Portuguese\n• German');
//         break;
//       case 'emergency':
//         Alert.alert('Emergency Services', 'Emergency contacts:\n🚨 Coast Guard: 911\n🏥 Medical Emergency: 112\n🚁 Beach Patrol: +1-555-BEACH\n📍 Location sharing enabled');
//         break;
//       case 'review':
//         Alert.alert('User Review', 'Rate your experience with BlueShore:\n⭐⭐⭐⭐⭐\nYour feedback helps us improve our services!');
//         break;
//       case 'safety':
//         Alert.alert('Safety Tips', '🏊 Always swim in designated areas\n☀️ Apply sunscreen regularly\n🌊 Check wave conditions\n👥 Never swim alone\n🚩 Observe warning flags');
//         break;
//       case 'faq':
//         Alert.alert('FAQs & Support', 'Common questions:\n• How to read water quality data?\n• Understanding UV index warnings\n• Beach flag meanings\n• Emergency procedures\n\n📧 support@blueshore.com\n📞 1-800-BEACH-HELP');
//         break;
//       case 'logout':
//         Alert.alert(
//           'Logout',
//           'Are you sure you want to logout?',
//           [
//             { text: 'Cancel', style: 'cancel' },
//             { 
//               text: 'Logout', 
//               style: 'destructive',
//               onPress: () => {
//                 setIsLoggedIn(false);
//                 setCurrentScreen('login');
//               }
//             }
//           ]
//         );
//         break;
//       default:
//         break;
//     }
//   };

//   // Login Screen Component
//   const LoginScreen = () => (
//     <SafeAreaView style={styles.authContainer}>
//       <StatusBar barStyle="light-content" backgroundColor="#667eea" />
      
//       <LinearGradient colors={['#667eea', '#764ba2']} style={styles.authGradient}>
//         <Animated.View style={[styles.authContent, { opacity: fadeAnim }]}>
//           {/* Logo/Header */}
//           <View style={styles.logoContainer}>
//             <Text style={styles.logoEmoji}>🏖️</Text>
//             <Text style={styles.logoText}>BlueShore</Text>
//             <Text style={styles.logoSubtext}>Beach Recreation Monitoring</Text>
//           </View>

//           {/* Login Form */}
//           <View style={styles.formContainer}>
//             <Text style={styles.formTitle}>Welcome Back</Text>
            
//             <View style={styles.inputContainer}>
//               <Text style={styles.inputLabel}>Email</Text>
//               <TextInput
//                 style={styles.textInput}
//                 placeholder="Enter your email"
//                 placeholderTextColor="#999"
//                 value={loginForm.email}
//                 onChangeText={(text) => setLoginForm({...loginForm, email: text})}
//                 keyboardType="email-address"
//                 autoCapitalize="none"
//               />
//             </View>

//             <View style={styles.inputContainer}>
//               <Text style={styles.inputLabel}>Password</Text>
//               <TextInput
//                 style={styles.textInput}
//                 placeholder="Enter your password"
//                 placeholderTextColor="#999"
//                 value={loginForm.password}
//                 onChangeText={(text) => setLoginForm({...loginForm, password: text})}
//                 secureTextEntry
//               />
//             </View>

//             <TouchableOpacity 
//               style={styles.forgotPassword}
//               onPress={() => setCurrentScreen('forgot')}
//             >
//               <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
//             </TouchableOpacity>

//             <TouchableOpacity 
//               style={styles.authButton}
//               onPress={() => {
//                 setIsLoggedIn(true);
//                 setCurrentScreen('home');
//               }}
//             >
//               <Text style={styles.authButtonText}>Login</Text>
//             </TouchableOpacity>

//             <View style={styles.authFooter}>
//               <Text style={styles.authFooterText}>Don't have an account? </Text>
//               <TouchableOpacity onPress={() => setCurrentScreen('signup')}>
//                 <Text style={styles.authFooterLink}>Sign Up</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Animated.View>
//       </LinearGradient>
//     </SafeAreaView>
//   );

//   // Signup Screen Component
//   const SignupScreen = () => (
//     <SafeAreaView style={styles.authContainer}>
//       <StatusBar barStyle="light-content" backgroundColor="#667eea" />
      
//       <LinearGradient colors={['#667eea', '#764ba2']} style={styles.authGradient}>
//         <ScrollView contentContainerStyle={styles.scrollAuthContent}>
//           <Animated.View style={[styles.authContent, { opacity: fadeAnim }]}>
//             {/* Header */}
//             <View style={styles.logoContainer}>
//               <Text style={styles.logoEmoji}>🏖️</Text>
//               <Text style={styles.logoText}>Create Account</Text>
//               <Text style={styles.logoSubtext}>Join BlueShore Community</Text>
//             </View>

//             {/* Signup Form */}
//             <View style={styles.formContainer}>
//               <View style={styles.inputContainer}>
//                 <Text style={styles.inputLabel}>Full Name</Text>
//                 <TextInput
//                   style={styles.textInput}
//                   placeholder="Enter your full name"
//                   placeholderTextColor="#999"
//                   value={signupForm.fullName}
//                   onChangeText={(text) => setSignupForm({...signupForm, fullName: text})}
//                 />
//               </View>

//               <View style={styles.inputContainer}>
//                 <Text style={styles.inputLabel}>Email</Text>
//                 <TextInput
//                   style={styles.textInput}
//                   placeholder="Enter your email"
//                   placeholderTextColor="#999"
//                   value={signupForm.email}
//                   onChangeText={(text) => setSignupForm({...signupForm, email: text})}
//                   keyboardType="email-address"
//                   autoCapitalize="none"
//                 />
//               </View>

//               <View style={styles.inputContainer}>
//                 <Text style={styles.inputLabel}>Password</Text>
//                 <TextInput
//                   style={styles.textInput}
//                   placeholder="Create a password"
//                   placeholderTextColor="#999"
//                   value={signupForm.password}
//                   onChangeText={(text) => setSignupForm({...signupForm, password: text})}
//                   secureTextEntry
//                 />
//               </View>

//               <View style={styles.inputContainer}>
//                 <Text style={styles.inputLabel}>Confirm Password</Text>
//                 <TextInput
//                   style={styles.textInput}
//                   placeholder="Confirm your password"
//                   placeholderTextColor="#999"
//                   value={signupForm.confirmPassword}
//                   onChangeText={(text) => setSignupForm({...signupForm, confirmPassword: text})}
//                   secureTextEntry
//                 />
//               </View>

//               <TouchableOpacity 
//                 style={styles.authButton}
//                 onPress={() => {
//                   Alert.alert('Success', 'Account created successfully!');
//                   setCurrentScreen('login');
//                 }}
//               >
//                 <Text style={styles.authButtonText}>Create Account</Text>
//               </TouchableOpacity>

//               <View style={styles.authFooter}>
//                 <Text style={styles.authFooterText}>Already have an account? </Text>
//                 <TouchableOpacity onPress={() => setCurrentScreen('login')}>
//                   <Text style={styles.authFooterLink}>Login</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </Animated.View>
//         </ScrollView>
//       </LinearGradient>
//     </SafeAreaView>
//   );

//   // Forgot Password Screen Component
//   const ForgotPasswordScreen = () => (
//     <SafeAreaView style={styles.authContainer}>
//       <StatusBar barStyle="light-content" backgroundColor="#667eea" />
      
//       <LinearGradient colors={['#667eea', '#764ba2']} style={styles.authGradient}>
//         <Animated.View style={[styles.authContent, { opacity: fadeAnim }]}>
//           {/* Header */}
//           <View style={styles.logoContainer}>
//             <Text style={styles.logoEmoji}>🔐</Text>
//             <Text style={styles.logoText}>Reset Password</Text>
//             <Text style={styles.logoSubtext}>We'll send you a reset link</Text>
//           </View>

//           {/* Form */}
//           <View style={styles.formContainer}>
//             <View style={styles.inputContainer}>
//               <Text style={styles.inputLabel}>Email Address</Text>
//               <TextInput
//                 style={styles.textInput}
//                 placeholder="Enter your email"
//                 placeholderTextColor="#999"
//                 value={forgotEmail}
//                 onChangeText={setForgotEmail}
//                 keyboardType="email-address"
//                 autoCapitalize="none"
//               />
//             </View>

//             <TouchableOpacity 
//               style={styles.authButton}
//               onPress={() => {
//                 Alert.alert('Email Sent', 'Password reset link sent to your email!');
//                 setCurrentScreen('login');
//               }}
//             >
//               <Text style={styles.authButtonText}>Send Reset Link</Text>
//             </TouchableOpacity>

//             <TouchableOpacity 
//               style={styles.backButton}
//               onPress={() => setCurrentScreen('login')}
//             >
//               <Text style={styles.backButtonText}>← Back to Login</Text>
//             </TouchableOpacity>
//           </View>
//         </Animated.View>
//       </LinearGradient>
//     </SafeAreaView>
//   );
//         {/* Search Bar */}
//        <View style={styles.searchContainer}>
//         <View style={styles.searchBar}>
//           <Text style={styles.searchIcon}>🔍</Text>
//           <TextInput
//             style={styles.searchInput}
//             placeholder="Search beaches, activities..."
//             placeholderTextColor="#999"
//             value={searchText}
//             onChangeText={setSearchText}
//             blurOnSubmit={false}
//             returnKeyType="search"
//             onSubmitEditing={async () => {
//               if (!searchText.trim()) return;
//               try {
//                 const results = await Location.geocodeAsync(searchText);
//                 if (results.length > 0) {
//                   const { latitude, longitude } = results[0];
//                   setSearchedLocation({ latitude, longitude });
//                   mapRef.current?.animateToRegion({
//                     latitude,
//                     longitude,
//                     latitudeDelta: 0.05,
//                     longitudeDelta: 0.05,
//                   }, 1000);
//                 } else {
//                   Alert.alert('Not found', 'Could not find that location.');
//                 }
//               } catch (e) {
//                 Alert.alert('Error', 'Failed to search for location.');
//               }
//             }}
//           />
//           <TouchableOpacity style={styles.locationButton}>
//             <Text style={styles.locationIcon}>📍</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </LinearGradient>

//     <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>

//         {/* Quick Status */}
//             <View style={styles.quickStatus}>
//         <Text style={styles.sectionTitle}>Current Conditions</Text>
//         <View style={styles.statusRow}>
//           <View style={styles.statusItem}>
//             <Text style={styles.statusEmoji}>🌡️</Text>
//             <Text style={styles.statusValue}>{sensorData.airTemp}</Text>
//             <Text style={styles.statusLabel}>Air Temp</Text>
//           </View>
//           <View style={styles.statusItem}>
//             <Text style={styles.statusEmoji}>🌊</Text>
//             <Text style={styles.statusValue}>{sensorData.waveHeight}</Text>
//             <Text style={styles.statusLabel}>Wave Height</Text>
//           </View>
//           <View style={styles.statusItem}>
//             <Text style={styles.statusEmoji}>☀️</Text>
//             <Text style={styles.statusValue}>{sensorData.uvIndex}</Text>
//             <Text style={styles.statusLabel}>UV Index</Text>
//           </View>
//           <View style={styles.statusItem}>
//             <Text style={styles.statusEmoji}>💧</Text>
//             <Text style={styles.statusValue}>{sensorData.waterQuality}</Text>
//             <Text style={styles.statusLabel}>Water Quality</Text>
//           </View>
//         </View>
//       </View>


//         {/* Recommendations */}
//         <View style={styles.recommendationsSection}>
//         <Text style={styles.sectionTitle}>Recommended for You</Text>
//         <FlatList
//           data={recommendations}
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={({ item }) => (
//             <View style={styles.recommendationCard}>
//               <LinearGradient 
//                 colors={['rgba(255,255,255,0.95)', 'rgba(255,255,255,0.85)']}
//                 style={styles.recommendationGradient}
//               >
//                 <Text style={styles.recommendationEmoji}>🏖️</Text>
//                 <Text style={styles.recommendationTitle}>{item.title}</Text>
//                 <Text style={styles.recommendationType}>{item.type}</Text>
//                 <View style={styles.recommendationInfo}>
//                   <Text style={styles.recommendationRating}>⭐ {item.rating}</Text>
//                   <Text style={styles.recommendationDistance}>📍 {item.distance}</Text>
//                 </View>
//               </LinearGradient>
//             </View>
//           )}
//         />
//       </View>

//         {/* Recent Alerts Preview */}
//             <View style={styles.alertsPreview}>
//         <View style={styles.alertsHeader}>
//           <Text style={styles.sectionTitle}>Recent Alerts</Text>
//           <TouchableOpacity onPress={() => setShowAlerts(true)}>
//             <Text style={styles.viewAllText}>View All</Text>
//           </TouchableOpacity>
//         </View>
//         {alerts.slice(0, 2).map((alert) => (
//           <View key={alert.id} style={styles.alertPreviewItem}>
//             <Text style={styles.alertPreviewIcon}>{alert.icon}</Text>
//             <View style={styles.alertPreviewContent}>
//               <Text style={styles.alertPreviewTitle}>{alert.title}</Text>
//               <Text style={styles.alertPreviewTime}>{alert.time}</Text>
//             </View>
//           </View>
//         ))}
//       </View>

//       <View style={styles.bottomPadding} />
//     </ScrollView>


//       {/* Bottom Navigation */}
//        <View style={styles.bottomNav}>
//       <TouchableOpacity 
//         style={[styles.navItem, styles.navItemActive]}
//         onPress={() => setCurrentScreen('home')}
//       >
//         <Text style={styles.navIcon}>🏠</Text>
//         <Text style={styles.navLabel}>Home</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.navItem}>
//         <Text style={styles.navIcon}>🗺️</Text>
//         <Text style={styles.navLabel}>Map</Text>
//       </TouchableOpacity>
      
//       <TouchableOpacity style={styles.navItem}>
//         <Text style={styles.navIcon}>📍</Text>
//         <Text style={styles.navLabel}>Location</Text>
//       </TouchableOpacity>
      
//       <TouchableOpacity 
//         style={styles.navItem}
//         onPress={() => setShowMenu(true)}
//       >
//         <Text style={styles.navIcon}>👤</Text>
//         <Text style={styles.navLabel}>Account</Text>
//       </TouchableOpacity>
//     </View>
//   </SafeAreaView>
// );

//       {/* Alerts Modal */}
//       <Modal
//         visible={showAlerts}
//         animationType="slide"
//         transparent={true}
//         onRequestClose={() => setShowAlerts(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.alertsModal}>
//             <View style={styles.modalHeader}>
//               <Text style={styles.modalTitle}>Alerts & Notifications</Text>
//               <TouchableOpacity onPress={() => setShowAlerts(false)}>
//                 <Text style={styles.modalClose}>✕</Text>
//               </TouchableOpacity>
//             </View>
//             <ScrollView>
//               {alerts.map((alert) => (
//                 <View key={alert.id} style={styles.alertModalItem}>
//                   <Text style={styles.alertModalIcon}>{alert.icon}</Text>
//                   <View style={styles.alertModalContent}>
//                     <Text style={styles.alertModalTitle}>{alert.title}</Text>
//                     <Text style={styles.alertModalMessage}>{alert.message}</Text>
//                     <Text style={styles.alertModalTime}>{alert.time}</Text>
//                   </View>
//                 </View>
//               ))}
//             </ScrollView>
//           </View>
//         </View>
//       </Modal>

//       {/* Enhanced Menu Modal */}
//       <Modal
//         visible={showMenu}
//         animationType="fade"
//         transparent={true}
//         onRequestClose={() => setShowMenu(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.menuModal}>
//             <View style={styles.menuHeader}>
//               <Text style={styles.menuHeaderTitle}>Menu</Text>
//               <TouchableOpacity onPress={() => setShowMenu(false)}>
//                 <Text style={styles.menuHeaderClose}>✕</Text>
//               </TouchableOpacity>
//             </View>
            
//             <ScrollView style={styles.menuScrollView}>
//               <TouchableOpacity 
//                 style={styles.menuItem}
//                 onPress={() => handleMenuAction('settings')}
//               >
//                 <Text style={styles.menuIcon}>⚙️</Text>
//                 <View style={styles.menuItemContent}>
//                   <Text style={styles.menuText}>Settings</Text>
//                   <Text style={styles.menuSubtext}>App preferences & notifications</Text>
//                 </View>
//               </TouchableOpacity>
              
//               <TouchableOpacity 
//                 style={styles.menuItem}
//                 onPress={() => handleMenuAction('bilingual')}
//               >
//                 <Text style={styles.menuIcon}>🌐</Text>
//                 <View style={styles.menuItemContent}>
//                   <Text style={styles.menuText}>Bilingual Support</Text>
//                   <Text style={styles.menuSubtext}>Change language settings</Text>
//                 </View>
//               </TouchableOpacity>
              
//               <TouchableOpacity 
//                 style={styles.menuItem}
//                 onPress={() => handleMenuAction('emergency')}
//               >
//                 <Text style={styles.menuIcon}>🚨</Text>
//                 <View style={styles.menuItemContent}>
//                   <Text style={styles.menuText}>Emergency Services</Text>
//                   <Text style={styles.menuSubtext}>Quick access to help</Text>
//                 </View>
//               </TouchableOpacity>
              
//               <TouchableOpacity 
//                 style={styles.menuItem}
//                 onPress={() => handleMenuAction('review')}
//               >
//                 <Text style={styles.menuIcon}>⭐</Text>
//                 <View style={styles.menuItemContent}>
//                   <Text style={styles.menuText}>User Review</Text>
//                   <Text style={styles.menuSubtext}>Rate your experience</Text>
//                 </View>
//               </TouchableOpacity>
              
//               <TouchableOpacity 
//                 style={styles.menuItem}
//                 onPress={() => handleMenuAction('safety')}
//               >
//                 <Text style={styles.menuIcon}>🛡️</Text>
//                 <View style={styles.menuItemContent}>
//                   <Text style={styles.menuText}>Safety Tips</Text>
//                   <Text style={styles.menuSubtext}>Beach safety guidelines</Text>
//                 </View>
//               </TouchableOpacity>
              
//               <TouchableOpacity 
//                 style={styles.menuItem}
//                 onPress={() => handleMenuAction('faq')}
//               >
//                 <Text style={styles.menuIcon}>❓</Text>
//                 <View style={styles.menuItemContent}>
//                   <Text style={styles.menuText}>FAQs & Support</Text>
//                   <Text style={styles.menuSubtext}>Help & common questions</Text>
//                 </View>
//               </TouchableOpacity>
              
//               <View style={styles.menuDivider} />
              
//               <TouchableOpacity 
//                 style={[styles.menuItem, styles.logoutItem]}
//                 onPress={() => handleMenuAction('logout')}
//               >
//                 <Text style={styles.menuIcon}>🚪</Text>
//                 <View style={styles.menuItemContent}>
//                   <Text style={[styles.menuText, styles.logoutText]}>Logout</Text>
//                   <Text style={styles.menuSubtext}>Sign out of your account</Text>
//                 </View>
//               </TouchableOpacity>
//             </ScrollView>
            
//             <TouchableOpacity 
//               style={styles.menuCancel}
//               onPress={() => setShowMenu(false)}
//             >
//               <Text style={styles.menuCancelText}>Cancel</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </SafeAreaView>
//   );

//   // Main render logic
//   if (!isLoggedIn) {
//     switch (currentScreen) {
//       case 'signup':
//         return <SignupScreen />;
//       case 'forgot':
//         return <ForgotPasswordScreen />;
//       default:
//         return <LoginScreen />;
//     }
//   }

//  return (
//   <HomeScreen
//     setCurrentScreen={setCurrentScreen}
//     setShowAlerts={setShowAlerts}
//     setShowMenu={setShowMenu}
//     alerts={alerts}
//     searchText={searchText}
//     setSearchText={setSearchText}
//     setSearchedLocation={setSearchedLocation}
//     mapRef={mapRef}
//     location={location}
//     searchedLocation={searchedLocation}
//     sensorData={sensorData}
//     recommendations={recommendations}
//     styles={styles}
//   />
// );
// };

// export default BeachRecreationApp;




// import { LinearGradient } from 'expo-linear-gradient';
// import * as Location from 'expo-location';
// import React, { useEffect, useRef, useState } from 'react';
// import {
//     Alert,
//     Animated,
//     Dimensions,
//     FlatList,
//     Modal,
//     SafeAreaView,
//     ScrollView,
//     StatusBar,
//     StyleSheet,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     View,
// } from 'react-native';
// import MapView from 'react-native-maps';

// const { width, height } = Dimensions.get('window');

// const styles = StyleSheet.create({
//     // Auth Screens Styles
//     authContainer: {
//         flex: 1,
//     },
//     authGradient: {
//         flex: 1,
//         justifyContent: 'center',
//     },
//     scrollAuthContent: {
//         flexGrow: 1,
//         justifyContent: 'center',
//     },
//     authContent: {
//         flex: 1,
//         justifyContent: 'center',
//         paddingHorizontal: 30,
//     },
//     logoContainer: {
//         alignItems: 'center',
//         marginBottom: 40,
//     },
//     logoEmoji: {
//         fontSize: 60,
//         marginBottom: 15,
//     },
//     logoText: {
//         fontSize: 32,
//         fontWeight: 'bold',
//         color: 'white',
//         marginBottom: 8,
//     },
//     logoSubtext: {
//         fontSize: 16,
//         color: 'rgba(255,255,255,0.8)',
//         textAlign: 'center',
//     },
//     formContainer: {
//         backgroundColor: 'rgba(255,255,255,0.95)',
//         borderRadius: 20,
//         padding: 25,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 8 },
//         shadowOpacity: 0.15,
//         shadowRadius: 12,
//         elevation: 8,
//     },
//     formTitle: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         color: '#2c3e50',
//         textAlign: 'center',
//         marginBottom: 25,
//     },
//     inputContainer: {
//         marginBottom: 20,
//     },
//     inputLabel: {
//         fontSize: 14,
//         fontWeight: '600',
//         color: '#2c3e50',
//         marginBottom: 8,
//     },
//     textInput: {
//         backgroundColor: '#f8f9fa',
//         borderRadius: 12,
//         padding: 15,
//         fontSize: 16,
//         borderWidth: 1,
//         borderColor: '#dee2e6',
//         color: '#2c3e50',
//     },
//     forgotPassword: {
//         alignSelf: 'flex-end',
//         marginBottom: 25,
//     },
//     forgotPasswordText: {
//         color: '#667eea',
//         fontSize: 14,
//         fontWeight: '600',
//     },
//     authButton: {
//         backgroundColor: '#667eea',
//         borderRadius: 12,
//         padding: 16,
//         alignItems: 'center',
//         marginBottom: 20,
//     },
//     authButtonText: {
//         color: 'white',
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
//     authFooter: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     authFooterText: {
//         color: '#6c757d',
//         fontSize: 14,
//     },
//     authFooterLink: {
//         color: '#667eea',
//         fontSize: 14,
//         fontWeight: '600',
//     },
//     backButton: {
//         alignItems: 'center',
//         marginTop: 10,
//     },
//     backButtonText: {
//         color: '#667eea',
//         fontSize: 16,
//         fontWeight: '600',
//     },

//     recommendationsSection: {
//         marginBottom: 25,
//     },
//     recommendationCard: {
//         width: 200,
//         marginRight: 15,
//     },
//     recommendationGradient: {
//         borderRadius: 15,
//         padding: 20,
//         alignItems: 'center',
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 4 },
//         shadowOpacity: 0.1,
//         shadowRadius: 8,
//         elevation: 5,
//     },
//     recommendationEmoji: {
//         fontSize: 30,
//         marginBottom: 10,
//     },
//     recommendationTitle: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: '#2c3e50',
//         textAlign: 'center',
//         marginBottom: 5,
//     },

//     // Home Screen Styles
//     container: {
//         flex: 1,
//         backgroundColor: '#f0f2f5',
//     },
//     homeHeader: {
//         paddingHorizontal: 20,
//         paddingTop: 15,
//         paddingBottom: 20,
//         borderBottomLeftRadius: 25,
//         borderBottomRightRadius: 25,
//     },
//     headerTop: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: 20,
//     },
//     headerTitle: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         color: 'white',
//     },
//     headerRight: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     headerButton: {
//         marginLeft: 15,
//         position: 'relative',
//     },
//     headerIcon: {
//         fontSize: 24,
//     },
//     alertBadge: {
//         position: 'absolute',
//         top: -2,
//         right: -2,
//         width: 8,
//         height: 8,
//         backgroundColor: '#ff4757',
//         borderRadius: 4,
//     },
//     searchContainer: {
//         marginBottom: 10,
//     },
//     searchBar: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         backgroundColor: 'rgba(255,255,255,0.95)',
//         borderRadius: 15,
//         paddingHorizontal: 15,
//         paddingVertical: 12,
//     },
//     searchIcon: {
//         fontSize: 18,
//         marginRight: 10,
//     },
//     searchInput: {
//         flex: 1,
//         fontSize: 16,
//         color: '#2c3e50',
//     },
//     locationButton: {
//         padding: 5,
//     },
//     locationIcon: {
//         fontSize: 18,
//     },
//     scrollContainer: {
//         flex: 1,
//         paddingHorizontal: 20,
//     },
//     mapContainer: {
//         marginVertical: 20,
//     },
//     mapView: {
//         borderRadius: 15,
//         padding: 30,
//         alignItems: 'center',
//     },
//     mapEmoji: {
//         fontSize: 40,
//         marginBottom: 15,
//     },
//     mapTitle: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: 'white',
//         marginBottom: 8,
//     },
//     mapSubtitle: {
//         fontSize: 14,
//         color: 'rgba(255,255,255,0.8)',
//         marginBottom: 20,
//     },
//     mapControls: {
//         flexDirection: 'row',
//         gap: 10,
//     },
//     mapButton: {
//         backgroundColor: 'rgba(255,255,255,0.2)',
//         paddingHorizontal: 15,
//         paddingVertical: 8,
//         borderRadius: 20,
//     },
//     mapButtonText: {
//         color: 'white',
//         fontSize: 12,
//         fontWeight: '600',
//     },
//     quickStatus: {
//         marginBottom: 25,
//     },
//     sectionTitle: {
//         fontSize: 20,
//         fontWeight: '600',
//         color: '#2c3e50',
//         marginBottom: 15,
//     },
//     statusRow: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//     },
//     statusItem: {
//         flex: 1,
//         backgroundColor: 'rgba(255,255,255,0.95)',
//         borderRadius: 12,
//         padding: 15,
//         alignItems: 'center',
//         marginHorizontal: 2,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 4,
//         elevation: 3,
//     },
//     statusEmoji: {
//         fontSize: 24,
//         marginBottom: 8,
//     },
//     statusValue: {
//         fontSize: 14,
//         fontWeight: 'bold',
//         color: '#2c3e50',
//         marginBottom: 4,
//     },
//     statusLabel: {
//         fontSize: 11,
//         color: '#6c757d',
//         textAlign: 'center',
//     },
//     recommendationType: {
//         fontSize: 12,
//         color: '#6c757d',
//         marginBottom: 10,
//     },
//     recommendationInfo: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         width: '100%',
//     },
//     recommendationRating: {
//         fontSize: 12,
//         color: '#f39c12',
//         fontWeight: '600',
//     },
//     recommendationDistance: {
//         fontSize: 12,
//         color: '#667eea',
//         fontWeight: '600',
//     },
//     alertsPreview: {
//         marginBottom: 25,
//     },
//     alertsHeader: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: 15,
//     },
//     viewAllText: {
//         color: '#667eea',
//         fontSize: 14,
//         fontWeight: '600',
//     },
//     alertPreviewItem: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         backgroundColor: 'rgba(255,255,255,0.95)',
//         borderRadius: 12,
//         padding: 15,
//         marginBottom: 10,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 4,
//         elevation: 3,
//     },
//     alertPreviewIcon: {
//         fontSize: 20,
//         marginRight: 15,
//     },
//     alertPreviewContent: {
//         flex: 1,
//     },
//     alertPreviewTitle: {
//         fontSize: 14,
//         fontWeight: '600',
//         color: '#2c3e50',
//         marginBottom: 4,
//     },
//     alertPreviewTime: {
//         fontSize: 12,
//         color: '#6c757d',
//     },
//     bottomPadding: {
//         height: 30,
//     },
//     bottomNav: {
//         flexDirection: 'row',
//         backgroundColor: 'rgba(255,255,255,0.98)',
//         paddingVertical: 12,
//         paddingHorizontal: 20,
//         borderTopWidth: 1,
//         borderTopColor: '#dee2e6',
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: -2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 8,
//         elevation: 10,
//     },
//     navItem: {
//         flex: 1,
//         alignItems: 'center',
//         paddingVertical: 8,
//     },
//     navItemActive: {
//         backgroundColor: 'rgba(102, 126, 234, 0.1)',
//         borderRadius: 12,
//     },
//     navIcon: {
//         fontSize: 20,
//         marginBottom: 4,
//     },
//     navLabel: {
//         fontSize: 11,
//         color: '#6c757d',
//         fontWeight: '500',
//     },

//     // Modal Styles
//     modalOverlay: {
//         flex: 1,
//         backgroundColor: 'rgba(0,0,0,0.5)',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     alertsModal: {
//         backgroundColor: 'white',
//         borderRadius: 20,
//         padding: 20,
//         margin: 20,
//         maxHeight: height * 0.8,
//         width: width - 40,
//     },
//     modalHeader: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: 20,
//         paddingBottom: 15,
//         borderBottomWidth: 1,
//         borderBottomColor: '#dee2e6',
//     },
//     modalTitle: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#2c3e50',
//     },
//     modalClose: {
//         fontSize: 24,
//         color: '#6c757d',
//         fontWeight: 'bold',
//     },
//     alertModalItem: {
//         flexDirection: 'row',
//         alignItems: 'flex-start',
//         padding: 15,
//         backgroundColor: '#f8f9fa',
//         borderRadius: 12,
//         marginBottom: 10,
//     },
//     alertModalIcon: {
//         fontSize: 20,
//         marginRight: 15,
//         marginTop: 2,
//     },
//     alertModalContent: {
//         flex: 1,
//     },
//     alertModalTitle: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: '#2c3e50',
//         marginBottom: 5,
//     },
//     alertModalMessage: {
//         fontSize: 14,
//         color: '#555',
//         marginBottom: 8,
//         lineHeight: 20,
//     },
//     alertModalTime: {
//         fontSize: 12,
//         color: '#6c757d',
//     },
//     menuModal: {
//         backgroundColor: 'white',
//         borderRadius: 20,
//         padding: 20,
//         margin: 20,
//         minWidth: 200,
//     },
//     menuHeader: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: 10,
//     },
//     menuHeaderTitle: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: '#2c3e50',
//     },
//     menuHeaderClose: {
//         fontSize: 22,
//         color: '#6c757d',
//         fontWeight: 'bold',
//     },
//     menuScrollView: {
//         maxHeight: height * 0.5,
//     },
//     menuItem: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         paddingVertical: 15,
//         paddingHorizontal: 10,
//         borderRadius: 12,
//         marginBottom: 5,
//     },
//     menuIcon: {
//         fontSize: 20,
//         marginRight: 15,
//         width: 25,
//     },
//     menuItemContent: {
//         flex: 1,
//     },
//     menuText: {
//         fontSize: 16,
//         color: '#2c3e50',
//         fontWeight: '500',
//     },
//     menuSubtext: {
//         fontSize: 12,
//         color: '#6c757d',
//     },
//     menuDivider: {
//         height: 1,
//         backgroundColor: '#dee2e6',
//         marginVertical: 10,
//     },
//     logoutItem: {
//         backgroundColor: 'rgba(231, 76, 60, 0.1)',
//         marginTop: 10,
//     },
//     logoutText: {
//         color: '#e74c3c',
//         fontWeight: 'bold',
//     },
//     menuCancel: {
//         alignItems: 'center',
//         paddingVertical: 15,
//         marginTop: 10,
//         borderTopWidth: 1,
//         borderTopColor: '#dee2e6',
//     },
//     menuCancelText: {
//         fontSize: 16,
//         color: '#6c757d',
//         fontWeight: '600',
//     },
// });

// // Fixed HomeScreen with proper TypeScript types
// const HomeScreen = ({
//     setCurrentScreen,
//     setShowAlerts,
//     setShowMenu,
//     alerts,
//     searchText,
//     setSearchText,
//     setSearchedLocation,
//     mapRef,
//     location,
//     searchedLocation,
//     sensorData,
//     recommendations,
// }: {
//     setCurrentScreen: (screen: string) => void;
//     setShowAlerts: (show: boolean) => void;
//     setShowMenu: (show: boolean) => void;
//     alerts: any[];
//     searchText: string;
//     setSearchText: (text: string) => void;
//     setSearchedLocation: (location: { latitude: number; longitude: number } | null) => void;
//     mapRef: React.RefObject<MapView | null>;
//     location: { latitude: number; longitude: number } | null;
//     searchedLocation: { latitude: number; longitude: number } | null;
//     sensorData: any;
//     recommendations: any[];
//     // Removed 'styles' prop as it's globally accessible
// }) => (
//     <SafeAreaView style={styles.container}>
//         <StatusBar barStyle="light-content" backgroundColor="#667eea" />

//         {/* Header with Navigation */}
//         <LinearGradient colors={['#667eea', '#764ba2']} style={styles.homeHeader}>
//             <View style={styles.headerTop}>
//                 <TouchableOpacity onPress={() => setCurrentScreen('home')}>
//                     <Text style={styles.headerIcon}>🏠</Text>
//                 </TouchableOpacity>

//                 <Text style={styles.headerTitle}>BlueShore</Text>

//                 <View style={styles.headerRight}>
//                     <TouchableOpacity
//                         style={styles.headerButton}
//                         onPress={() => setShowAlerts(true)}
//                     >
//                         <Text style={styles.headerIcon}>🔔</Text>
//                         {alerts.length > 0 && <View style={styles.alertBadge} />}
//                     </TouchableOpacity>

//                     <TouchableOpacity
//                         style={styles.headerButton}
//                         onPress={() => setShowMenu(true)}
//                     >
//                         <Text style={styles.headerIcon}>⋯</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>

//             {/* Search Bar */}
//             <View style={styles.searchContainer}>
//                 <View style={styles.searchBar}>
//                     <Text style={styles.searchIcon}>🔍</Text>
//                     <TextInput
//                         style={styles.searchInput}
//                         placeholder="Search beaches, activities..."
//                         placeholderTextColor="#999"
//                         value={searchText}
//                         onChangeText={setSearchText}
//                         blurOnSubmit={false}
//                         returnKeyType="search"
//                         onSubmitEditing={async () => {
//                             if (!searchText.trim()) return;
//                             try {
//                                 const results = await Location.geocodeAsync(searchText);
//                                 if (results.length > 0) {
//                                     const { latitude, longitude } = results[0];
//                                     setSearchedLocation({ latitude, longitude });
//                                     mapRef.current?.animateToRegion({
//                                         latitude,
//                                         longitude,
//                                         latitudeDelta: 0.05,
//                                         longitudeDelta: 0.05,
//                                     }, 1000);
//                                 } else {
//                                     Alert.alert('Not found', 'Could not find that location.');
//                                 }
//                             } catch (e) {
//                                 Alert.alert('Error', 'Failed to search for location.');
//                             }
//                         }}
//                     />
//                     <TouchableOpacity style={styles.locationButton}>
//                         <Text style={styles.locationIcon}>📍</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </LinearGradient>

//         <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>

//             {/* Map Placeholder/Actual Map */}
//             {/* If you want to show a map, you need to conditionally render it here.
//                 For simplicity, I'm just showing a placeholder as your original code
//                 had a MapView that wasn't correctly integrated here.
//             */}
//             {location && (
//                 <View style={styles.mapContainer}>
//                     <LinearGradient
//                         colors={['#4CAF50', '#8BC34A']} // Example gradient for the map area
//                         style={styles.mapView}
//                     >
//                         <Text style={styles.mapEmoji}>🗺️</Text>
//                         <Text style={styles.mapTitle}>Current Location</Text>
//                         <Text style={styles.mapSubtitle}>
//                             Lat: {location.latitude.toFixed(4)}, Long: {location.longitude.toFixed(4)}
//                         </Text>
//                         {/* You can render MapView inside this LinearGradient if desired,
//                             but ensure it has a fixed height and width to render correctly.
//                             Example: <MapView style={{ width: '100%', height: 200 }} initialRegion={{...location, latitudeDelta: 0.05, longitudeDelta: 0.05}}><Marker coordinate={location} /></MapView>
//                         */}
//                     </LinearGradient>
//                 </View>
//             )}


//             {/* Quick Status */}
//             <View style={styles.quickStatus}>
//                 <Text style={styles.sectionTitle}>Current Conditions</Text>
//                 <View style={styles.statusRow}>
//                     <View style={styles.statusItem}>
//                         <Text style={styles.statusEmoji}>🌡️</Text>
//                         <Text style={styles.statusValue}>{sensorData.airTemp}</Text>
//                         <Text style={styles.statusLabel}>Air Temp</Text>
//                     </View>
//                     <View style={styles.statusItem}>
//                         <Text style={styles.statusEmoji}>🌊</Text>
//                         <Text style={styles.statusValue}>{sensorData.waveHeight}</Text>
//                         <Text style={styles.statusLabel}>Wave Height</Text>
//                     </View>
//                     <View style={styles.statusItem}>
//                         <Text style={styles.statusEmoji}>☀️</Text>
//                         <Text style={styles.statusValue}>{sensorData.uvIndex}</Text>
//                         <Text style={styles.statusLabel}>UV Index</Text>
//                     </View>
//                     <View style={styles.statusItem}>
//                         <Text style={styles.statusEmoji}>💧</Text>
//                         <Text style={styles.statusValue}>{sensorData.waterQuality}</Text>
//                         <Text style={styles.statusLabel}>Water Quality</Text>
//                     </View>
//                 </View>
//             </View>

//             {/* Recommendations */}
//             <View style={styles.recommendationsSection}>
//                 <Text style={styles.sectionTitle}>Recommended for You</Text>
//                 <FlatList
//                     data={recommendations}
//                     horizontal
//                     showsHorizontalScrollIndicator={false}
//                     keyExtractor={(item) => item.id.toString()}
//                     renderItem={({ item }) => (
//                         <View style={styles.recommendationCard}>
//                             <LinearGradient
//                                 colors={['rgba(255,255,255,0.95)', 'rgba(255,255,255,0.85)']}
//                                 style={styles.recommendationGradient}
//                             >
//                                 <Text style={styles.recommendationEmoji}>🏖️</Text>
//                                 <Text style={styles.recommendationTitle}>{item.title}</Text>
//                                 <Text style={styles.recommendationType}>{item.type}</Text>
//                                 <View style={styles.recommendationInfo}>
//                                     <Text style={styles.recommendationRating}>⭐ {item.rating}</Text>
//                                     <Text style={styles.recommendationDistance}>📍 {item.distance}</Text>
//                                 </View>
//                             </LinearGradient>
//                         </View>
//                     )}
//                 />
//             </View>

//             {/* Recent Alerts Preview */}
//             <View style={styles.alertsPreview}>
//                 <View style={styles.alertsHeader}>
//                     <Text style={styles.sectionTitle}>Recent Alerts</Text>
//                     <TouchableOpacity onPress={() => setShowAlerts(true)}>
//                         <Text style={styles.viewAllText}>View All</Text>
//                     </TouchableOpacity>
//                 </View>
//                 {alerts.slice(0, 2).map((alert) => (
//                     <View key={alert.id} style={styles.alertPreviewItem}>
//                         <Text style={styles.alertPreviewIcon}>{alert.icon}</Text>
//                         <View style={styles.alertPreviewContent}>
//                             <Text style={styles.alertPreviewTitle}>{alert.title}</Text>
//                             <Text style={styles.alertPreviewTime}>{alert.time}</Text>
//                         </View>
//                     </View>
//                 ))}
//             </View>

//             <View style={styles.bottomPadding} />
//         </ScrollView>

//         {/* Bottom Navigation */}
//         <View style={styles.bottomNav}>
//             <TouchableOpacity
//                 style={[styles.navItem, styles.navItemActive]}
//                 onPress={() => setCurrentScreen('home')}
//             >
//                 <Text style={styles.navIcon}>🏠</Text>
//                 <Text style={styles.navLabel}>Home</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.navItem}>
//                 <Text style={styles.navIcon}>🗺️</Text>
//                 <Text style={styles.navLabel}>Map</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.navItem}>
//                 <Text style={styles.navIcon}>📍</Text>
//                 <Text style={styles.navLabel}>Location</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//                 style={styles.navItem}
//                 onPress={() => setShowMenu(true)}
//             >
//                 <Text style={styles.navIcon}>👤</Text>
//                 <Text style={styles.navLabel}>Account</Text>
//             </TouchableOpacity>
//         </View>
//     </SafeAreaView>
// );


// const BeachRecreationApp = () => {
//     const [currentScreen, setCurrentScreen] = useState('login'); // login, signup, forgot, home
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [showAlerts, setShowAlerts] = useState(false);
//     const [showMenu, setShowMenu] = useState(false);
//     const [searchText, setSearchText] = useState('');

//     // Form states
//     const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
//     const [searchedLocation, setSearchedLocation] = useState<{ latitude: number; longitude: number } | null>(null);
//     const mapRef = useRef<MapView>(null);

//     useEffect(() => {
//         let subscription: Location.LocationSubscription | null = null;

//         (async () => {
//             let { status } = await Location.requestForegroundPermissionsAsync();
//             if (status !== 'granted') {
//                 Alert.alert('Permission Error', 'Permission to access location was denied');
//                 return;
//             }
//             subscription = await Location.watchPositionAsync(
//                 { accuracy: Location.Accuracy.High, distanceInterval: 5 },
//                 (loc) => {
//                     const coords = {
//                         latitude: loc.coords.latitude,
//                         longitude: loc.coords.longitude,
//                     };
//                     setLocation(coords);
//                     mapRef.current?.animateToRegion({
//                         ...coords,
//                         latitudeDelta: 0.05,
//                         longitudeDelta: 0.05,
//                     }, 1000);
//                 }
//             );
//         })();

//         return () => {
//             if (subscription) subscription.remove();
//         };
//     }, []);

//     const [loginForm, setLoginForm] = useState({ email: '', password: '' });
//     const [signupForm, setSignupForm] = useState({
//         fullName: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//     });
//     const [forgotEmail, setForgotEmail] = useState('');

//     const [sensorData, setSensorData] = useState({
//         airTemp: '28°C',
//         waterTemp: '24°C',
//         humidity: '65%',
//         windSpeed: '15 km/h',
//         uvIndex: 'UV 6',
//         waveHeight: '1.2m',
//         waterPH: '7.8',
//         waterQuality: 'GOOD',
//     });

//     const [alerts, setAlerts] = useState([
//         {
//             id: 1,
//             type: 'info',
//             icon: 'ℹ️',
//             title: 'High Tide Advisory',
//             message: 'High tide expected at 14:30. Beach area may be reduced.',
//             time: '2 min ago'
//         },
//         {
//             id: 2,
//             type: 'warning',
//             icon: '⚠️',
//             title: 'UV Warning',
//             message: 'UV Index is 6. Use sunscreen and seek shade during peak hours.',
//             time: '15 min ago'
//         },
//         {
//             id: 3,
//             type: 'info',
//             icon: '🏊',
//             title: 'Swimming Conditions',
//             message: 'Good conditions for swimming. Water temperature ideal.',
//             time: '1 hour ago'
//         },
//     ]);

//     const [recommendations] = useState([
//         { id: 1, title: 'Sunny Beach Resort', rating: 4.8, distance: '2.3 km', type: 'Beach Resort' },
//         { id: 2, title: 'Marina Bay Beach', rating: 4.6, distance: '1.8 km', type: 'Public Beach' },
//         { id: 3, title: 'Coral Reef Point', rating: 4.9, distance: '3.5 km', type: 'Snorkeling Spot' },
//         { id: 4, title: 'Sunset Beach Club', rating: 4.7, distance: '4.2 km', type: 'Beach Club' },
//     ]);

//     const fadeAnim = useRef(new Animated.Value(0)).current;

//     useEffect(() => {
//         Animated.timing(fadeAnim, {
//             toValue: 1,
//             duration: 1000,
//             useNativeDriver: true,
//         }).start();
//     }, [currentScreen]);

//     // Menu item handlers
//     const handleMenuAction = (action: string) => {
//         setShowMenu(false);

//         switch (action) {
//             case 'settings':
//                 Alert.alert('Settings', 'Settings panel would open here. Configure app preferences, notifications, and display options.');
//                 break;
//             case 'bilingual':
//                 Alert.alert('Language Settings', 'Choose your preferred language:\n• English\n• Spanish\n• French\n• Portuguese\n• German');
//                 break;
//             case 'emergency':
//                 Alert.alert('Emergency Services', 'Emergency contacts:\n🚨 Coast Guard: 911\n🏥 Medical Emergency: 112\n🚁 Beach Patrol: +1-555-BEACH\n📍 Location sharing enabled');
//                 break;
//             case 'review':
//                 Alert.alert('User Review', 'Rate your experience with BlueShore:\n⭐⭐⭐⭐⭐\nYour feedback helps us improve our services!');
//                 break;
//             case 'safety':
//                 Alert.alert('Safety Tips', '🏊 Always swim in designated areas\n☀️ Apply sunscreen regularly\n🌊 Check wave conditions\n👥 Never swim alone\n🚩 Observe warning flags');
//                 break;
//             case 'faq':
//                 Alert.alert('FAQs & Support', 'Common questions:\n• How to read water quality data?\n• Understanding UV index warnings\n• Beach flag meanings\n• Emergency procedures\n\n📧 support@blueshore.com\n📞 1-800-BEACH-HELP');
//                 break;
//             case 'logout':
//                 Alert.alert(
//                     'Logout',
//                     'Are you sure you want to logout?',
//                     [
//                         { text: 'Cancel', style: 'cancel' },
//                         {
//                             text: 'Logout',
//                             style: 'destructive',
//                             onPress: () => {
//                                 setIsLoggedIn(false);
//                                 setCurrentScreen('login');
//                             }
//                         }
//                     ]
//                 );
//                 break;
//             default:
//                 break;
//         }
//     };

//     // Login Screen Component
//     const LoginScreen = () => (
//         <SafeAreaView style={styles.authContainer}>
//             <StatusBar barStyle="light-content" backgroundColor="#667eea" />

//             <LinearGradient colors={['#667eea', '#764ba2']} style={styles.authGradient}>
//                 <Animated.View style={[styles.authContent, { opacity: fadeAnim }]}>
//                     {/* Logo/Header */}
//                     <View style={styles.logoContainer}>
//                         <Text style={styles.logoEmoji}>🏖️</Text>
//                         <Text style={styles.logoText}>BlueShore</Text>
//                         <Text style={styles.logoSubtext}>Beach Recreation Monitoring</Text>
//                     </View>

//                     {/* Login Form */}
//                     <View style={styles.formContainer}>
//                         <Text style={styles.formTitle}>Welcome Back</Text>

//                         <View style={styles.inputContainer}>
//                             <Text style={styles.inputLabel}>Email</Text>
//                             <TextInput
//                                 style={styles.textInput}
//                                 placeholder="Enter your email"
//                                 placeholderTextColor="#999"
//                                 value={loginForm.email}
//                                 onChangeText={(text) => setLoginForm({ ...loginForm, email: text })}
//                                 keyboardType="email-address"
//                                 autoCapitalize="none"
//                             />
//                         </View>

//                         <View style={styles.inputContainer}>
//                             <Text style={styles.inputLabel}>Password</Text>
//                             <TextInput
//                                 style={styles.textInput}
//                                 placeholder="Enter your password"
//                                 placeholderTextColor="#999"
//                                 value={loginForm.password}
//                                 onChangeText={(text) => setLoginForm({ ...loginForm, password: text })}
//                                 secureTextEntry
//                             />
//                         </View>

//                         <TouchableOpacity
//                             style={styles.forgotPassword}
//                             onPress={() => setCurrentScreen('forgot')}
//                         >
//                             <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
//                         </TouchableOpacity>

//                         <TouchableOpacity
//                             style={styles.authButton}
//                             onPress={() => {
//                                 setIsLoggedIn(true);
//                                 setCurrentScreen('home');
//                             }}
//                         >
//                             <Text style={styles.authButtonText}>Login</Text>
//                         </TouchableOpacity>

//                         <View style={styles.authFooter}>
//                             <Text style={styles.authFooterText}>Don't have an account? </Text>
//                             <TouchableOpacity onPress={() => setCurrentScreen('signup')}>
//                                 <Text style={styles.authFooterLink}>Sign Up</Text>
//                             </TouchableOpacity>
//                         </View>
//                     </View>
//                 </Animated.View>
//             </LinearGradient>
//         </SafeAreaView>
//     );

//     // Signup Screen Component
//     const SignupScreen = () => (
//         <SafeAreaView style={styles.authContainer}>
//             <StatusBar barStyle="light-content" backgroundColor="#667eea" />

//             <LinearGradient colors={['#667eea', '#764ba2']} style={styles.authGradient}>
//                 <ScrollView contentContainerStyle={styles.scrollAuthContent}>
//                     <Animated.View style={[styles.authContent, { opacity: fadeAnim }]}>
//                         {/* Header */}
//                         <View style={styles.logoContainer}>
//                             <Text style={styles.logoEmoji}>🏖️</Text>
//                             <Text style={styles.logoText}>Create Account</Text>
//                             <Text style={styles.logoSubtext}>Join BlueShore Community</Text>
//                         </View>

//                         {/* Signup Form */}
//                         <View style={styles.formContainer}>
//                             <View style={styles.inputContainer}>
//                                 <Text style={styles.inputLabel}>Full Name</Text>
//                                 <TextInput
//                                     style={styles.textInput}
//                                     placeholder="Enter your full name"
//                                     placeholderTextColor="#999"
//                                     value={signupForm.fullName}
//                                     onChangeText={(text) => setSignupForm({ ...signupForm, fullName: text })}
//                                 />
//                             </View>

//                             <View style={styles.inputContainer}>
//                                 <Text style={styles.inputLabel}>Email</Text>
//                                 <TextInput
//                                     style={styles.textInput}
//                                     placeholder="Enter your email"
//                                     placeholderTextColor="#999"
//                                     value={signupForm.email}
//                                     onChangeText={(text) => setSignupForm({ ...signupForm, email: text })}
//                                     keyboardType="email-address"
//                                     autoCapitalize="none"
//                                 />
//                             </View>

//                             <View style={styles.inputContainer}>
//                                 <Text style={styles.inputLabel}>Password</Text>
//                                 <TextInput
//                                     style={styles.textInput}
//                                     placeholder="Create a password"
//                                     placeholderTextColor="#999"
//                                     value={signupForm.password}
//                                     onChangeText={(text) => setSignupForm({ ...signupForm, password: text })}
//                                     secureTextEntry
//                                 />
//                             </View>

//                             <View style={styles.inputContainer}>
//                                 <Text style={styles.inputLabel}>Confirm Password</Text>
//                                 <TextInput
//                                     style={styles.textInput}
//                                     placeholder="Confirm your password"
//                                     placeholderTextColor="#999"
//                                     value={signupForm.confirmPassword}
//                                     onChangeText={(text) => setSignupForm({ ...signupForm, confirmPassword: text })}
//                                     secureTextEntry
//                                 />
//                             </View>

//                             <TouchableOpacity
//                                 style={styles.authButton}
//                                 onPress={() => {
//                                     Alert.alert('Success', 'Account created successfully!');
//                                     setCurrentScreen('login');
//                                 }}
//                             >
//                                 <Text style={styles.authButtonText}>Create Account</Text>
//                             </TouchableOpacity>

//                             <View style={styles.authFooter}>
//                                 <Text style={styles.authFooterText}>Already have an account? </Text>
//                                 <TouchableOpacity onPress={() => setCurrentScreen('login')}>
//                                     <Text style={styles.authFooterLink}>Login</Text>
//                                 </TouchableOpacity>
//                             </View>
//                         </View>
//                     </Animated.View>
//                 </ScrollView>
//             </LinearGradient>
//         </SafeAreaView>
//     );

//     // Forgot Password Screen Component
//     const ForgotPasswordScreen = () => (
//         <SafeAreaView style={styles.authContainer}>
//             <StatusBar barStyle="light-content" backgroundColor="#667eea" />

//             <LinearGradient colors={['#667eea', '#764ba2']} style={styles.authGradient}>
//                 <Animated.View style={[styles.authContent, { opacity: fadeAnim }]}>
//                     {/* Header */}
//                     <View style={styles.logoContainer}>
//                         <Text style={styles.logoEmoji}>🔐</Text>
//                         <Text style={styles.logoText}>Reset Password</Text>
//                         <Text style={styles.logoSubtext}>We'll send you a reset link</Text>
//                     </View>

//                     {/* Form */}
//                     <View style={styles.formContainer}>
//                         <View style={styles.inputContainer}>
//                             <Text style={styles.inputLabel}>Email Address</Text>
//                             <TextInput
//                                 style={styles.textInput}
//                                 placeholder="Enter your email"
//                                 placeholderTextColor="#999"
//                                 value={forgotEmail}
//                                 onChangeText={setForgotEmail}
//                                 keyboardType="email-address"
//                                 autoCapitalize="none"
//                             />
//                         </View>

//                         <TouchableOpacity
//                             style={styles.authButton}
//                             onPress={() => {
//                                 Alert.alert('Email Sent', 'Password reset link sent to your email!');
//                                 setCurrentScreen('login');
//                             }}
//                         >
//                             <Text style={styles.authButtonText}>Send Reset Link</Text>
//                         </TouchableOpacity>

//                         <TouchableOpacity
//                             style={styles.backButton}
//                             onPress={() => setCurrentScreen('login')}
//                         >
//                             <Text style={styles.backButtonText}>← Back to Login</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </Animated.View>
//             </LinearGradient>
//         </SafeAreaView>
//     );

//     // This is the main component that renders different screens based on state
//     return (
//         <View style={{ flex: 1 }}>
//             {currentScreen === 'login' && <LoginScreen />}
//             {currentScreen === 'signup' && <SignupScreen />}
//             {currentScreen === 'forgot' && <ForgotPasswordScreen />}
//             {currentScreen === 'home' && (
//                 <HomeScreen
//                     setCurrentScreen={setCurrentScreen}
//                     setShowAlerts={setShowAlerts}
//                     setShowMenu={setShowMenu}
//                     alerts={alerts}
//                     searchText={searchText}
//                     setSearchText={setSearchText}
//                     setSearchedLocation={setSearchedLocation}
//                     mapRef={mapRef}
//                     location={location}
//                     searchedLocation={searchedLocation}
//                     sensorData={sensorData}
//                     recommendations={recommendations}
//                 />
//             )}

//             {/* Alerts Modal */}
//             <Modal
//                 visible={showAlerts}
//                 animationType="slide"
//                 transparent={true}
//                 onRequestClose={() => setShowAlerts(false)}
//             >
//                 <View style={styles.modalOverlay}>
//                     <View style={styles.alertsModal}>
//                         <View style={styles.modalHeader}>
//                             <Text style={styles.modalTitle}>Beach Alerts</Text>
//                             <TouchableOpacity onPress={() => setShowAlerts(false)}>
//                                 <Text style={styles.modalClose}>✖️</Text>
//                             </TouchableOpacity>
//                         </View>
//                         <ScrollView showsVerticalScrollIndicator={false}>
//                             {alerts.map((alert) => (
//                                 <View key={alert.id} style={styles.alertModalItem}>
//                                     <Text style={styles.alertModalIcon}>{alert.icon}</Text>
//                                     <View style={styles.alertModalContent}>
//                                         <Text style={styles.alertModalTitle}>{alert.title}</Text>
//                                         <Text style={styles.alertModalMessage}>{alert.message}</Text>
//                                         <Text style={styles.alertModalTime}>{alert.time}</Text>
//                                     </View>
//                                 </View>
//                             ))}
//                         </ScrollView>
//                     </View>
//                 </View>
//             </Modal>

//             {/* Menu Modal */}
//             <Modal
//                 visible={showMenu}
//                 animationType="fade"
//                 transparent={true}
//                 onRequestClose={() => setShowMenu(false)}
//             >
//                 <View style={styles.modalOverlay}>
//                     <View style={styles.menuModal}>
//                         <View style={styles.menuHeader}>
//                             <Text style={styles.menuHeaderTitle}>Menu</Text>
//                             <TouchableOpacity onPress={() => setShowMenu(false)}>
//                                 <Text style={styles.menuHeaderClose}>✖️</Text>
//                             </TouchableOpacity>
//                         </View>
//                         <ScrollView style={styles.menuScrollView} showsVerticalScrollIndicator={false}>
//                             <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuAction('settings')}>
//                                 <Text style={styles.menuIcon}>⚙️</Text>
//                                 <View style={styles.menuItemContent}>
//                                     <Text style={styles.menuText}>Settings</Text>
//                                     <Text style={styles.menuSubtext}>App preferences & notifications</Text>
//                                 </View>
//                             </TouchableOpacity>
//                             <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuAction('bilingual')}>
//                                 <Text style={styles.menuIcon}>🌐</Text>
//                                 <View style={styles.menuItemContent}>
//                                     <Text style={styles.menuText}>Bilingual Support</Text>
//                                     <Text style={styles.menuSubtext}>Switch languages</Text>
//                                 </View>
//                             </TouchableOpacity>
//                             <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuAction('emergency')}>
//                                 <Text style={styles.menuIcon}>🆘</Text>
//                                 <View style={styles.menuItemContent}>
//                                     <Text style={styles.menuText}>Emergency Services</Text>
//                                     <Text style={styles.menuSubtext}>Contact lifeguards, medical</Text>
//                                 </View>
//                             </TouchableOpacity>
//                             <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuAction('review')}>
//                                 <Text style={styles.menuIcon}>⭐</Text>
//                                 <View style={styles.menuItemContent}>
//                                     <Text style={styles.menuText}>Review Us</Text>
//                                     <Text style={styles.menuSubtext}>Rate your experience</Text>
//                                 </View>
//                             </TouchableOpacity>
//                             <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuAction('safety')}>
//                                 <Text style={styles.menuIcon}>⛑️</Text>
//                                 <View style={styles.menuItemContent}>
//                                     <Text style={styles.menuText}>Beach Safety Tips</Text>
//                                     <Text style={styles.menuSubtext}>Stay safe on the beach</Text>
//                                 </View>
//                             </TouchableOpacity>
//                             <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuAction('faq')}>
//                                 <Text style={styles.menuIcon}>❓</Text>
//                                 <View style={styles.menuItemContent}>
//                                     <Text style={styles.menuText}>FAQs & Support</Text>
//                                     <Text style={styles.menuSubtext}>Get help and answers</Text>
//                                 </View>
//                             </TouchableOpacity>
//                             <View style={styles.menuDivider} />
//                             <TouchableOpacity style={[styles.menuItem, styles.logoutItem]} onPress={() => handleMenuAction('logout')}>
//                                 <Text style={[styles.menuIcon, styles.logoutText]}>🚪</Text>
//                                 <View style={styles.menuItemContent}>
//                                     <Text style={[styles.menuText, styles.logoutText]}>Logout</Text>
//                                 </View>
//                             </TouchableOpacity>
//                         </ScrollView>
//                         <TouchableOpacity style={styles.menuCancel} onPress={() => setShowMenu(false)}>
//                             <Text style={styles.menuCancelText}>Cancel</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </Modal>
//         </View>
//     );
// };

// export default BeachRecreationApp; // Don't forget to export your main component for App.js or index.js



import { LinearGradient } from 'expo-linear-gradient';
import * as Location from 'expo-location';
import React, { useEffect, useRef, useState } from 'react';
import {
    Alert,
    Animated,
    Dimensions,
    FlatList,
    Modal,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    // ... (Your existing styles remain the same)
    authContainer: {
        flex: 1,
    },
    authGradient: {
        flex: 1,
        justifyContent: 'center',
    },
    scrollAuthContent: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    authContent: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    logoEmoji: {
        fontSize: 60,
        marginBottom: 15,
    },
    logoText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 8,
    },
    logoSubtext: {
        fontSize: 16,
        color: 'rgba(255,255,255,0.8)',
        textAlign: 'center',
    },
    formContainer: {
        backgroundColor: 'rgba(255,255,255,0.95)',
        borderRadius: 20,
        padding: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 8,
    },
    formTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2c3e50',
        textAlign: 'center',
        marginBottom: 25,
    },
    inputContainer: {
        marginBottom: 20,
    },
    inputLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: '#2c3e50',
        marginBottom: 8,
    },
    textInput: {
        backgroundColor: '#f8f9fa',
        borderRadius: 12,
        padding: 15,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#dee2e6',
        color: '#2c3e50',
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        marginBottom: 25,
    },
    forgotPasswordText: {
        color: '#667eea',
        fontSize: 14,
        fontWeight: '600',
    },
    authButton: {
        backgroundColor: '#667eea',
        borderRadius: 12,
        padding: 16,
        alignItems: 'center',
        marginBottom: 20,
    },
    authButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    authFooter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    authFooterText: {
        color: '#6c757d',
        fontSize: 14,
    },
    authFooterLink: {
        color: '#667eea',
        fontSize: 14,
        fontWeight: '600',
    },
    backButton: {
        alignItems: 'center',
        marginTop: 10,
    },
    backButtonText: {
        color: '#667eea',
        fontSize: 16,
        fontWeight: '600',
    },

    recommendationsSection: {
        marginBottom: 25,
    },
    recommendationCard: {
        width: 200,
        marginRight: 15,
    },
    recommendationGradient: {
        borderRadius: 15,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    recommendationEmoji: {
        fontSize: 30,
        marginBottom: 10,
    },
    recommendationTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2c3e50',
        textAlign: 'center',
        marginBottom: 5,
    },

    // Home Screen Styles
    container: {
        flex: 1,
        backgroundColor: '#f0f2f5',
    },
    homeHeader: {
        paddingHorizontal: 20,
        paddingTop: 15,
        paddingBottom: 20,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerButton: {
        marginLeft: 15,
        position: 'relative',
    },
    headerIcon: {
        fontSize: 24,
    },
    alertBadge: {
        position: 'absolute',
        top: -2,
        right: -2,
        width: 8,
        height: 8,
        backgroundColor: '#ff4757',
        borderRadius: 4,
    },
    searchContainer: {
        marginBottom: 10,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.95)',
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 12,
    },
    searchIcon: {
        fontSize: 18,
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#2c3e50',
    },
    locationButton: {
        padding: 5,
    },
    locationIcon: {
        fontSize: 18,
    },
    scrollContainer: {
        flex: 1,
        paddingHorizontal: 20,
    },
    mapContainer: {
        marginVertical: 20,
        borderRadius: 15,
        overflow: 'hidden', // Crucial for borderRadius to work on MapView
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    mapView: {
        width: '100%',
        height: 250, // Fixed height for the map
    },
    mapEmoji: { // Keep these if you want a placeholder when map isn't ready
        fontSize: 40,
        marginBottom: 15,
    },
    mapTitle: { // Keep these if you want a placeholder when map isn't ready
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 8,
    },
    mapSubtitle: { // Keep these if you want a placeholder when map isn't ready
        fontSize: 14,
        color: 'rgba(255,255,255,0.8)',
        marginBottom: 20,
    },
    mapControls: {
        flexDirection: 'row',
        gap: 10,
    },
    mapButton: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 20,
    },
    mapButtonText: {
        color: 'white',
        fontSize: 12,
        fontWeight: '600',
    },
    quickStatus: {
        marginBottom: 25,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#2c3e50',
        marginBottom: 15,
    },
    statusRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    statusItem: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.95)',
        borderRadius: 12,
        padding: 15,
        alignItems: 'center',
        marginHorizontal: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    statusEmoji: {
        fontSize: 24,
        marginBottom: 8,
    },
    statusValue: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 4,
    },
    statusLabel: {
        fontSize: 11,
        color: '#6c757d',
        textAlign: 'center',
    },
    recommendationType: {
        fontSize: 12,
        color: '#6c757d',
        marginBottom: 10,
    },
    recommendationInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    recommendationRating: {
        fontSize: 12,
        color: '#f39c12',
        fontWeight: '600',
    },
    recommendationDistance: {
        fontSize: 12,
        color: '#667eea',
        fontWeight: '600',
    },
    alertsPreview: {
        marginBottom: 25,
    },
    alertsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    viewAllText: {
        color: '#667eea',
        fontSize: 14,
        fontWeight: '600',
    },
    alertPreviewItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.95)',
        borderRadius: 12,
        padding: 15,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    alertPreviewIcon: {
        fontSize: 20,
        marginRight: 15,
    },
    alertPreviewContent: {
        flex: 1,
    },
    alertPreviewTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#2c3e50',
        marginBottom: 4,
    },
    alertPreviewTime: {
        fontSize: 12,
        color: '#6c757d',
    },
    bottomPadding: {
        height: 30,
    },
    bottomNav: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.98)',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderTopColor: '#dee2e6',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 10,
    },
    navItem: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 8,
    },
    navItemActive: {
        backgroundColor: 'rgba(102, 126, 234, 0.1)',
        borderRadius: 12,
    },
    navIcon: {
        fontSize: 20,
        marginBottom: 4,
    },
    navLabel: {
        fontSize: 11,
        color: '#6c757d',
        fontWeight: '500',
    },

    // Modal Styles
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    alertsModal: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        margin: 20,
        maxHeight: height * 0.8,
        width: width - 40,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#dee2e6',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2c3e50',
    },
    modalClose: {
        fontSize: 24,
        color: '#6c757d',
        fontWeight: 'bold',
    },
    alertModalItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 15,
        backgroundColor: '#f8f9fa',
        borderRadius: 12,
        marginBottom: 10,
    },
    alertModalIcon: {
        fontSize: 20,
        marginRight: 15,
        marginTop: 2,
    },
    alertModalContent: {
        flex: 1,
    },
    alertModalTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 5,
    },
    alertModalMessage: {
        fontSize: 14,
        color: '#555',
        marginBottom: 8,
        lineHeight: 20,
    },
    alertModalTime: {
        fontSize: 12,
        color: '#6c757d',
    },
    menuModal: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        margin: 20,
        minWidth: 200,
    },
    menuHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    menuHeaderTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2c3e50',
    },
    menuHeaderClose: {
        fontSize: 22,
        color: '#6c757d',
        fontWeight: 'bold',
    },
    menuScrollView: {
        maxHeight: height * 0.5,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 12,
        marginBottom: 5,
    },
    menuIcon: {
        fontSize: 20,
        marginRight: 15,
        width: 25,
    },
    menuItemContent: {
        flex: 1,
    },
    menuText: {
        fontSize: 16,
        color: '#2c3e50',
        fontWeight: '500',
    },
    menuSubtext: {
        fontSize: 12,
        color: '#6c757d',
    },
    menuDivider: {
        height: 1,
        backgroundColor: '#dee2e6',
        marginVertical: 10,
    },
    logoutItem: {
        backgroundColor: 'rgba(231, 76, 60, 0.1)',
        marginTop: 10,
    },
    logoutText: {
        color: '#e74c3c',
        fontWeight: 'bold',
    },
    menuCancel: {
        alignItems: 'center',
        paddingVertical: 15,
        marginTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#dee2e6',
    },
    menuCancelText: {
        fontSize: 16,
        color: '#6c757d',
        fontWeight: '600',
    },
});

// Fixed HomeScreen with proper TypeScript types
const HomeScreen = ({
    setCurrentScreen,
    setShowAlerts,
    setShowMenu,
    alerts,
    searchText,
    setSearchText,
    setSearchedLocation,
    mapRef,
    location, // Passed from parent
    searchedLocation, // Passed from parent
    sensorData,
    recommendations,
}: {
    setCurrentScreen: (screen: string) => void;
    setShowAlerts: (show: boolean) => void;
    setShowMenu: (show: boolean) => void;
    alerts: any[];
    searchText: string;
    setSearchText: (text: string) => void;
    setSearchedLocation: (location: { latitude: number; longitude: number } | null) => void;
    mapRef: React.RefObject<MapView>;
    location: { latitude: number; longitude: number } | null;
    searchedLocation: { latitude: number; longitude: number } | null;
    sensorData: any;
    recommendations: any[];
}) => {
    // Default region for the map if no location is available yet
    const initialRegion = {
        latitude: 28.5355, // Default to a central India location (e.g., Delhi area)
        longitude: 77.3910, // Default to a central India location
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    // Calculate the current map region based on location or searchedLocation
    const currentMapRegion = location
        ? {
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.05, // Zoom level for current location
              longitudeDelta: 0.05,
          }
        : searchedLocation
        ? {
              latitude: searchedLocation.latitude,
              longitude: searchedLocation.longitude,
              latitudeDelta: 0.05, // Zoom level for searched location
              longitudeDelta: 0.05,
          }
        : initialRegion; // Fallback to a default region

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#667eea" />

            {/* Header with Navigation */}
            <LinearGradient colors={['#667eea', '#764ba2']} style={styles.homeHeader}>
                <View style={styles.headerTop}>
                    <TouchableOpacity onPress={() => setCurrentScreen('home')}>
                        <Text style={styles.headerIcon}>🏠</Text>
                    </TouchableOpacity>

                    <Text style={styles.headerTitle}>BlueShore</Text>

                    <View style={styles.headerRight}>
                        <TouchableOpacity
                            style={styles.headerButton}
                            onPress={() => setShowAlerts(true)}
                        >
                            <Text style={styles.headerIcon}>🔔</Text>
                            {alerts.length > 0 && <View style={styles.alertBadge} />}
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.headerButton}
                            onPress={() => setShowMenu(true)}
                        >
                            <Text style={styles.headerIcon}>⋯</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Search Bar */}
                <View style={styles.searchContainer}>
                    <View style={styles.searchBar}>
                        <Text style={styles.searchIcon}>🔍</Text>
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search beaches, activities..."
                            placeholderTextColor="#999"
                            value={searchText}
                            onChangeText={setSearchText}
                            blurOnSubmit={false}
                            returnKeyType="search"
                            onSubmitEditing={async () => {
                                if (!searchText.trim()) {
                                    Alert.alert('Search', 'Please enter a location to search.');
                                    return;
                                }
                                try {
                                    const results = await Location.geocodeAsync(searchText);
                                    if (results.length > 0) {
                                        const { latitude, longitude } = results[0];
                                        setSearchedLocation({ latitude, longitude }); // Update searched location state
                                        mapRef.current?.animateToRegion({
                                            latitude,
                                            longitude,
                                            latitudeDelta: 0.05,
                                            longitudeDelta: 0.05,
                                        }, 1000); // Animate map to searched location
                                        Alert.alert('Location Found', `Showing results for: ${searchText}`);
                                    } else {
                                        Alert.alert('Not found', 'Could not find that location.');
                                    }
                                } catch (e) {
                                    console.error("Geocoding error:", e);
                                    Alert.alert('Error', 'Failed to search for location. Please check your internet connection or try a different search term.');
                                }
                            }}
                        />
                        <TouchableOpacity
                            style={styles.locationButton}
                            onPress={() => {
                                // Animate back to current location if available
                                if (location) {
                                    mapRef.current?.animateToRegion({
                                        latitude: location.latitude,
                                        longitude: location.longitude,
                                        latitudeDelta: 0.05,
                                        longitudeDelta: 0.05,
                                    }, 1000);
                                    setSearchedLocation(null); // Clear searched location marker
                                    Alert.alert('Current Location', 'Showing your current position on the map.');
                                } else {
                                    Alert.alert('Location Not Available', 'Please ensure location services are enabled and permissions are granted.');
                                }
                            }}
                        >
                            <Text style={styles.locationIcon}>📍</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>

            <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>

                {/* Map View Section */}
                <View style={styles.mapContainer}>
                    {/* Render MapView only if initialRegion is set (either current or default) */}
                    <MapView
                        ref={mapRef} // Attach the ref to interact with the map
                        style={styles.mapView}
                        provider={PROVIDER_GOOGLE} // Use Google Maps for better features/accuracy
                        initialRegion={currentMapRegion} // Set initial visible region
                        showsUserLocation={true} // Show a blue dot for user's actual location
                        followsUserLocation={true} // Map will follow user's location
                        onRegionChangeComplete={(region) => {
                            // Optional: If you want to store the last visible region
                            // console.log("Map region changed to:", region);
                        }}
                    >
                        {/* Marker for Current Location */}
                        {location && (
                            <Marker
                                coordinate={location}
                                title="Your Current Location"
                                description="You are here!"
                                pinColor="blue" // Make current location marker blue
                            />
                        )}

                        {/* Marker for Searched Location */}
                        {searchedLocation && (
                            <Marker
                                coordinate={searchedLocation}
                                title={searchText || "Searched Location"} // Use search text as title
                                description="This is your searched destination"
                                pinColor="red" // Make searched location marker red
                            />
                        )}
                    </MapView>
                </View>


                {/* Quick Status */}
                <View style={styles.quickStatus}>
                    <Text style={styles.sectionTitle}>Current Conditions</Text>
                    <View style={styles.statusRow}>
                        <View style={styles.statusItem}>
                            <Text style={styles.statusEmoji}>🌡️</Text>
                            <Text style={styles.statusValue}>{sensorData.airTemp}</Text>
                            <Text style={styles.statusLabel}>Air Temp</Text>
                        </View>
                        <View style={styles.statusItem}>
                            <Text style={styles.statusEmoji}>🌊</Text>
                            <Text style={styles.statusValue}>{sensorData.waveHeight}</Text>
                            <Text style={styles.statusLabel}>Wave Height</Text>
                        </View>
                        <View style={styles.statusItem}>
                            <Text style={styles.statusEmoji}>☀️</Text>
                            <Text style={styles.statusValue}>{sensorData.uvIndex}</Text>
                            <Text style={styles.statusLabel}>UV Index</Text>
                        </View>
                        <View style={styles.statusItem}>
                            <Text style={styles.statusEmoji}>💧</Text>
                            <Text style={styles.statusValue}>{sensorData.waterQuality}</Text>
                            <Text style={styles.statusLabel}>Water Quality</Text>
                        </View>
                    </View>
                </View>

                {/* Recommendations */}
                <View style={styles.recommendationsSection}>
                    <Text style={styles.sectionTitle}>Recommended for You</Text>
                    <FlatList
                        data={recommendations}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.recommendationCard}>
                                <LinearGradient
                                    colors={['rgba(255,255,255,0.95)', 'rgba(255,255,255,0.85)']}
                                    style={styles.recommendationGradient}
                                >
                                    <Text style={styles.recommendationEmoji}>🏖️</Text>
                                    <Text style={styles.recommendationTitle}>{item.title}</Text>
                                    <Text style={styles.recommendationType}>{item.type}</Text>
                                    <View style={styles.recommendationInfo}>
                                        <Text style={styles.recommendationRating}>⭐ {item.rating}</Text>
                                        <Text style={styles.recommendationDistance}>📍 {item.distance}</Text>
                                    </View>
                                </LinearGradient>
                            </View>
                        )}
                    />
                </View>

                {/* Recent Alerts Preview */}
                <View style={styles.alertsPreview}>
                    <View style={styles.alertsHeader}>
                        <Text style={styles.sectionTitle}>Recent Alerts</Text>
                        <TouchableOpacity onPress={() => setShowAlerts(true)}>
                            <Text style={styles.viewAllText}>View All</Text>
                        </TouchableOpacity>
                    </View>
                    {alerts.slice(0, 2).map((alert) => (
                        <View key={alert.id} style={styles.alertPreviewItem}>
                            <Text style={styles.alertPreviewIcon}>{alert.icon}</Text>
                            <View style={styles.alertPreviewContent}>
                                <Text style={styles.alertPreviewTitle}>{alert.title}</Text>
                                <Text style={styles.alertPreviewTime}>{alert.time}</Text>
                            </View>
                        </View>
                    ))}
                </View>

                <View style={styles.bottomPadding} />
            </ScrollView>

            {/* Bottom Navigation */}
            <View style={styles.bottomNav}>
                <TouchableOpacity
                    style={[styles.navItem, styles.navItemActive]}
                    onPress={() => setCurrentScreen('home')}
                >
                    <Text style={styles.navIcon}>🏠</Text>
                    <Text style={styles.navLabel}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Text style={styles.navIcon}>🗺️</Text>
                    <Text style={styles.navLabel}>Map</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem}>
                    <Text style={styles.navIcon}>📍</Text>
                    <Text style={styles.navLabel}>Location</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => setShowMenu(true)}
                >
                    <Text style={styles.navIcon}>👤</Text>
                    <Text style={styles.navLabel}>Account</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};


const BeachRecreationApp = () => {
    const [currentScreen, setCurrentScreen] = useState('login'); // login, signup, forgot, home
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showAlerts, setShowAlerts] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [searchText, setSearchText] = useState('');

    // Form states
    const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
    const [searchedLocation, setSearchedLocation] = useState<{ latitude: number; longitude: number } | null>(null);
    const mapRef = useRef<MapView>(null); // Ref for MapView instance

    useEffect(() => {
        let subscription: Location.LocationSubscription | null = null;

        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permission Error', 'Permission to access location was denied');
                return;
            }
            subscription = await Location.watchPositionAsync(
                { accuracy: Location.Accuracy.High, distanceInterval: 5 }, // Watch for significant location changes
                (loc) => {
                    const coords = {
                        latitude: loc.coords.latitude,
                        longitude: loc.coords.longitude,
                    };
                    setLocation(coords);
                    // Optionally animate map to current location when it's first fetched
                    // or when user specifically requests it via the button
                    // mapRef.current?.animateToRegion({
                    //   ...coords,
                    //   latitudeDelta: 0.05,
                    //   longitudeDelta: 0.05,
                    // }, 1000);
                }
            );
        })();

        return () => {
            if (subscription) subscription.remove();
        };
    }, []);

    const [loginForm, setLoginForm] = useState({ email: '', password: '' });
    const [signupForm, setSignupForm] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [forgotEmail, setForgotEmail] = useState('');

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
            time: '2 min ago'
        },
        {
            id: 2,
            type: 'warning',
            icon: '⚠️',
            title: 'UV Warning',
            message: 'UV Index is 6. Use sunscreen and seek shade during peak hours.',
            time: '15 min ago'
        },
        {
            id: 3,
            type: 'info',
            icon: '🏊',
            title: 'Swimming Conditions',
            message: 'Good conditions for swimming. Water temperature ideal.',
            time: '1 hour ago'
        },
    ]);

    const [recommendations] = useState([
        { id: 1, title: 'Sunny Beach Resort', rating: 4.8, distance: '2.3 km', type: 'Beach Resort' },
        { id: 2, title: 'Marina Bay Beach', rating: 4.6, distance: '1.8 km', type: 'Public Beach' },
        { id: 3, title: 'Coral Reef Point', rating: 4.9, distance: '3.5 km', type: 'Snorkeling Spot' },
        { id: 4, title: 'Sunset Beach Club', rating: 4.7, distance: '4.2 km', type: 'Beach Club' },
    ]);

    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, [currentScreen]);

    // Menu item handlers
    const handleMenuAction = (action: string) => {
        setShowMenu(false);

        switch (action) {
            case 'settings':
                Alert.alert('Settings', 'Settings panel would open here. Configure app preferences, notifications, and display options.');
                break;
            case 'bilingual':
                Alert.alert('Language Settings', 'Choose your preferred language:\n• English\n• Spanish\n• French\n• Portuguese\n• German');
                break;
            case 'emergency':
                Alert.alert('Emergency Services', 'Emergency contacts:\n🚨 Coast Guard: 911\n🏥 Medical Emergency: 112\n🚁 Beach Patrol: +1-555-BEACH\n📍 Location sharing enabled');
                break;
            case 'review':
                Alert.alert('User Review', 'Rate your experience with BlueShore:\n⭐⭐⭐⭐⭐\nYour feedback helps us improve our services!');
                break;
            case 'safety':
                Alert.alert('Safety Tips', '🏊 Always swim in designated areas\n☀️ Apply sunscreen regularly\n🌊 Check wave conditions\n👥 Never swim alone\n🚩 Observe warning flags');
                break;
            case 'faq':
                Alert.alert('FAQs & Support', 'Common questions:\n• How to read water quality data?\n• Understanding UV index warnings\n• Beach flag meanings\n• Emergency procedures\n\n📧 support@blueshore.com\n📞 1-800-BEACH-HELP');
                break;
            case 'logout':
                Alert.alert(
                    'Logout',
                    'Are you sure you want to logout?',
                    [
                        { text: 'Cancel', style: 'cancel' },
                        {
                            text: 'Logout',
                            style: 'destructive',
                            onPress: () => {
                                setIsLoggedIn(false);
                                setCurrentScreen('login');
                            }
                        }
                    ]
                );
                break;
            default:
                break;
        }
    };

    // Login Screen Component
    const LoginScreen = () => (
        <SafeAreaView style={styles.authContainer}>
            <StatusBar barStyle="light-content" backgroundColor="#667eea" />

            <LinearGradient colors={['#667eea', '#764ba2']} style={styles.authGradient}>
                <Animated.View style={[styles.authContent, { opacity: fadeAnim }]}>
                    {/* Logo/Header */}
                    <View style={styles.logoContainer}>
                        <Text style={styles.logoEmoji}>🏖️</Text>
                        <Text style={styles.logoText}>BlueShore</Text>
                        <Text style={styles.logoSubtext}>Beach Recreation Monitoring</Text>
                    </View>

                    {/* Login Form */}
                    <View style={styles.formContainer}>
                        <Text style={styles.formTitle}>Welcome Back</Text>

                        <View style={styles.inputContainer}>
                            <Text style={styles.inputLabel}>Email</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Enter your email"
                                placeholderTextColor="#999"
                                value={loginForm.email}
                                onChangeText={(text) => setLoginForm({ ...loginForm, email: text })}
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={styles.inputLabel}>Password</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Enter your password"
                                placeholderTextColor="#999"
                                value={loginForm.password}
                                onChangeText={(text) => setLoginForm({ ...loginForm, password: text })}
                                secureTextEntry
                            />
                        </View>

                        <TouchableOpacity
                            style={styles.forgotPassword}
                            onPress={() => setCurrentScreen('forgot')}
                        >
                            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.authButton}
                            onPress={() => {
                                setIsLoggedIn(true);
                                setCurrentScreen('home');
                            }}
                        >
                            <Text style={styles.authButtonText}>Login</Text>
                        </TouchableOpacity>

                        <View style={styles.authFooter}>
                            <Text style={styles.authFooterText}>Don't have an account? </Text>
                            <TouchableOpacity onPress={() => setCurrentScreen('signup')}>
                                <Text style={styles.authFooterLink}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Animated.View>
            </LinearGradient>
        </SafeAreaView>
    );

    // Signup Screen Component
    const SignupScreen = () => (
        <SafeAreaView style={styles.authContainer}>
            <StatusBar barStyle="light-content" backgroundColor="#667eea" />

            <LinearGradient colors={['#667eea', '#764ba2']} style={styles.authGradient}>
                <ScrollView contentContainerStyle={styles.scrollAuthContent}>
                    <Animated.View style={[styles.authContent, { opacity: fadeAnim }]}>
                        {/* Header */}
                        <View style={styles.logoContainer}>
                            <Text style={styles.logoEmoji}>🏖️</Text>
                            <Text style={styles.logoText}>Create Account</Text>
                            <Text style={styles.logoSubtext}>Join BlueShore Community</Text>
                        </View>

                        {/* Signup Form */}
                        <View style={styles.formContainer}>
                            <View style={styles.inputContainer}>
                                <Text style={styles.inputLabel}>Full Name</Text>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Enter your full name"
                                    placeholderTextColor="#999"
                                    value={signupForm.fullName}
                                    onChangeText={(text) => setSignupForm({ ...signupForm, fullName: text })}
                                />
                            </View>

                            <View style={styles.inputContainer}>
                                <Text style={styles.inputLabel}>Email</Text>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Enter your email"
                                    placeholderTextColor="#999"
                                    value={signupForm.email}
                                    onChangeText={(text) => setSignupForm({ ...signupForm, email: text })}
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                />
                            </View>

                            <View style={styles.inputContainer}>
                                <Text style={styles.inputLabel}>Password</Text>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Create a password"
                                    placeholderTextColor="#999"
                                    value={signupForm.password}
                                    onChangeText={(text) => setSignupForm({ ...signupForm, password: text })}
                                    secureTextEntry
                                />
                            </View>

                            <View style={styles.inputContainer}>
                                <Text style={styles.inputLabel}>Confirm Password</Text>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Confirm your password"
                                    placeholderTextColor="#999"
                                    value={signupForm.confirmPassword}
                                    onChangeText={(text) => setSignupForm({ ...signupForm, confirmPassword: text })}
                                    secureTextEntry
                                />
                            </View>

                            <TouchableOpacity
                                style={styles.authButton}
                                onPress={() => {
                                    Alert.alert('Success', 'Account created successfully!');
                                    setCurrentScreen('login');
                                }}
                            >
                                <Text style={styles.authButtonText}>Create Account</Text>
                            </TouchableOpacity>

                            <View style={styles.authFooter}>
                                <Text style={styles.authFooterText}>Already have an account? </Text>
                                <TouchableOpacity onPress={() => setCurrentScreen('login')}>
                                    <Text style={styles.authFooterLink}>Login</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Animated.View>
                </ScrollView>
            </LinearGradient>
        </SafeAreaView>
    );

    // Forgot Password Screen Component
    const ForgotPasswordScreen = () => (
        <SafeAreaView style={styles.authContainer}>
            <StatusBar barStyle="light-content" backgroundColor="#667eea" />

            <LinearGradient colors={['#667eea', '#764ba2']} style={styles.authGradient}>
                <Animated.View style={[styles.authContent, { opacity: fadeAnim }]}>
                    {/* Header */}
                    <View style={styles.logoContainer}>
                        <Text style={styles.logoEmoji}>🔐</Text>
                        <Text style={styles.logoText}>Reset Password</Text>
                        <Text style={styles.logoSubtext}>We'll send you a reset link</Text>
                    </View>

                    {/* Form */}
                    <View style={styles.formContainer}>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputLabel}>Email Address</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Enter your email"
                                placeholderTextColor="#999"
                                value={forgotEmail}
                                onChangeText={setForgotEmail}
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />
                        </View>

                        <TouchableOpacity
                            style={styles.authButton}
                            onPress={() => {
                                Alert.alert('Email Sent', 'Password reset link sent to your email!');
                                setCurrentScreen('login');
                            }}
                        >
                            <Text style={styles.authButtonText}>Send Reset Link</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.backButton}
                            onPress={() => setCurrentScreen('login')}
                        >
                            <Text style={styles.backButtonText}>← Back to Login</Text>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            </LinearGradient>
        </SafeAreaView>
    );

    // This is the main component that renders different screens based on state
    return (
        <View style={{ flex: 1 }}>
            {currentScreen === 'login' && <LoginScreen />}
            {currentScreen === 'signup' && <SignupScreen />}
            {currentScreen === 'forgot' && <ForgotPasswordScreen />}
            {currentScreen === 'home' && (
                <HomeScreen
                    setCurrentScreen={setCurrentScreen}
                    setShowAlerts={setShowAlerts}
                    setShowMenu={setShowMenu}
                    alerts={alerts}
                    searchText={searchText}
                    setSearchText={setSearchText}
                    setSearchedLocation={setSearchedLocation}
                    mapRef={mapRef}
                    location={location}
                    searchedLocation={searchedLocation}
                    sensorData={sensorData}
                    recommendations={recommendations}
                />
            )}

            {/* Alerts Modal */}
            <Modal
                visible={showAlerts}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setShowAlerts(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.alertsModal}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>Beach Alerts</Text>
                            <TouchableOpacity onPress={() => setShowAlerts(false)}>
                                <Text style={styles.modalClose}>✖️</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {alerts.map((alert) => (
                                <View key={alert.id} style={styles.alertModalItem}>
                                    <Text style={styles.alertModalIcon}>{alert.icon}</Text>
                                    <View style={styles.alertModalContent}>
                                        <Text style={styles.alertModalTitle}>{alert.title}</Text>
                                        <Text style={styles.alertModalMessage}>{alert.message}</Text>
                                        <Text style={styles.alertModalTime}>{alert.time}</Text>
                                    </View>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </View>
            </Modal>

            {/* Menu Modal */}
            <Modal
                visible={showMenu}
                animationType="fade"
                transparent={true}
                onRequestClose={() => setShowMenu(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.menuModal}>
                        <View style={styles.menuHeader}>
                            <Text style={styles.menuHeaderTitle}>Menu</Text>
                            <TouchableOpacity onPress={() => setShowMenu(false)}>
                                <Text style={styles.menuHeaderClose}>✖️</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView style={styles.menuScrollView} showsVerticalScrollIndicator={false}>
                            <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuAction('settings')}>
                                <Text style={styles.menuIcon}>⚙️</Text>
                                <View style={styles.menuItemContent}>
                                    <Text style={styles.menuText}>Settings</Text>
                                    <Text style={styles.menuSubtext}>App preferences & notifications</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuAction('bilingual')}>
                                <Text style={styles.menuIcon}>🌐</Text>
                                <View style={styles.menuItemContent}>
                                    <Text style={styles.menuText}>Bilingual Support</Text>
                                    <Text style={styles.menuSubtext}>Switch languages</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuAction('emergency')}>
                                <Text style={styles.menuIcon}>🆘</Text>
                                <View style={styles.menuItemContent}>
                                    <Text style={styles.menuText}>Emergency Services</Text>
                                    <Text style={styles.menuSubtext}>Contact lifeguards, medical</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuAction('review')}>
                                <Text style={styles.menuIcon}>⭐</Text>
                                <View style={styles.menuItemContent}>
                                    <Text style={styles.menuText}>Review Us</Text>
                                    <Text style={styles.menuSubtext}>Rate your experience</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuAction('safety')}>
                                <Text style={styles.menuIcon}>⛑️</Text>
                                <View style={styles.menuItemContent}>
                                    <Text style={styles.menuText}>Beach Safety Tips</Text>
                                    <Text style={styles.menuSubtext}>Stay safe on the beach</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuAction('faq')}>
                                <Text style={styles.menuIcon}>❓</Text>
                                <View style={styles.menuItemContent}>
                                    <Text style={styles.menuText}>FAQs & Support</Text>
                                    <Text style={styles.menuSubtext}>Get help and answers</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.menuDivider} />
                            <TouchableOpacity style={[styles.menuItem, styles.logoutItem]} onPress={() => handleMenuAction('logout')}>
                                <Text style={[styles.menuIcon, styles.logoutText]}>🚪</Text>
                                <View style={styles.menuItemContent}>
                                    <Text style={[styles.menuText, styles.logoutText]}>Logout</Text>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                        <TouchableOpacity style={styles.menuCancel} onPress={() => setShowMenu(false)}>
                            <Text style={styles.menuCancelText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default BeachRecreationApp;