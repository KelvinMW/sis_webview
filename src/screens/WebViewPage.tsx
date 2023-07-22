import React from 'react';
import { WebView } from 'react-native-webview';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  LandingPage: undefined;
  WebViewPage: { domain: string };
};

// Add this type definition
type WebViewRouteProp = RouteProp<RootStackParamList, 'WebViewPage'>;

const WebViewPage = () => {
  const navigation = useNavigation();
  const route = useRoute<WebViewRouteProp>();

  return (
    <WebView
      source={{ uri: `https://${route.params.domain}` }}
      // more props as needed
    />
  );
};

export default WebViewPage;
