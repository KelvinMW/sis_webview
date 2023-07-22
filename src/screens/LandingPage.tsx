import React from 'react';
import { Button, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  LandingPage: undefined;
  WebViewPage: { domain: string };
};

type LandingPageNavigationProp = StackNavigationProp<RootStackParamList,'LandingPage'>;

type Props = {
  navigation: LandingPageNavigationProp;
};

const LandingPage: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Button
        title="ELM SECONDARY"
        onPress={() => navigation.navigate('WebViewPage', { domain: 'secondary.elmischools.com' })}
      />
      <Button
        title="ELM SCIENCE SECONDARY"
        onPress={() => navigation.navigate('WebViewPage', { domain: 'science-secondary.elmischools.com' })}
      />
        <Button
        title="ELM UPPER PRIMARY"
        onPress={() => navigation.navigate('WebViewPage', { domain: 'elm-upper.elmischools.com' })}
      />
        <Button
        title="ELM LOWER PRIMARY"
        onPress={() => navigation.navigate('WebViewPage', { domain: 'elm-lower.elmischools.com' })}
      />
        <Button
        title="ELM KINDERGARTEN"
        onPress={() => navigation.navigate('WebViewPage', { domain: 'kg.elmischools.com' })}
      />
         <Button
        title="ELM MASALA"
        onPress={() => navigation.navigate('WebViewPage', { domain: 'masala.elmischools.com' })}
      />
      {/* ... repeat for other sections ... */}
    </View>
  );
};

export default LandingPage;