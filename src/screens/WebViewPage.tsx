import React, { useRef } from 'react';
import { TouchableOpacity, StyleSheet, Share } from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation, RouteProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackNavigationProp } from '@react-navigation/stack';
import { View } from 'react-native';
type RootStackParamList = {
  LandingPage: undefined;
  WebViewPage: { domain: string };
};

type WebViewRouteProp = RouteProp<RootStackParamList, 'WebViewPage'>;
type WebViewNavigationProp = StackNavigationProp<RootStackParamList, 'WebViewPage'>;

type Props = {
  route: WebViewRouteProp;
  navigation: WebViewNavigationProp;
};

const WebViewPage: React.FC<Props> = ({ route, navigation }) => {
  const webViewRef = useRef(null);
  
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `https://${route.params.domain}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <WebView ref={webViewRef} source={{ uri: `https://${route.params.domain}` }} />
      
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('LandingPage', undefined)}
      >
        <Icon name="gear" size={30} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => webViewRef.current.goBack()}
      >
        <Icon name="arrow-left" size={30} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => webViewRef.current.goForward()}
      >
        <Icon name="arrow-right" size={30} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => webViewRef.current.reload()}
      >
        <Icon name="refresh" size={30} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={onShare}
      >
        <Icon name="share" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 10,
    bottom: 10,
    borderRadius: 30,
    backgroundColor: '#5067FF',
    elevation: 8,
    zIndex: 1,
  },
  button: {
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    left: 10,
    bottom: 10,
    borderRadius: 30,
    backgroundColor: '#5067FF',
    elevation: 8,
    zIndex: 1,
  },
});

export default WebViewPage;
