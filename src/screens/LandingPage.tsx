//how do I include page titles to this webview on each domain page
import React from 'react';
import { Button, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import AnimatedCard from './AnimatedCard';

type RootStackParamList = {
  LandingPage: undefined;
  WebViewPage: { domain: string };
};

type LandingPageNavigationProp = StackNavigationProp<RootStackParamList,'LandingPage'>;

type Props = {
  navigation: LandingPageNavigationProp;
};

const LandingPage: React.FC<Props> = ({ navigation }) => {
  <AnimatedCard title='' onPress={() => navigation.navigate('LandingPage', undefined)}/>
  return (
    <View>
      <AnimatedCard
        title="ELM SECONDARY"
        onPress={() => navigation.navigate('WebViewPage', { domain: 'secondary.elmischools.com'})}
      />
      <AnimatedCard
        title="ELM SCIENCE SECONDARY"
        onPress={() => navigation.navigate('WebViewPage', { domain: 'science-secondary.elmischools.com' })}
      />
        <AnimatedCard
        title="ELM UPPER PRIMARY"
        onPress={() => navigation.navigate('WebViewPage', { domain: 'upper-p.elmischools.com' })}
      />
        <AnimatedCard
        title="ELM LOWER PRIMARY"
        onPress={() => navigation.navigate('WebViewPage', { domain: 'lower-p.elmischools.com' })}
      />
        <AnimatedCard
        title="ELM KINDERGARTEN"
        onPress={() => navigation.navigate('WebViewPage', { domain: 'kg.elmischools.com' })}
      />
         <AnimatedCard
        title="ELM MASALA"
        onPress={() => navigation.navigate('WebViewPage', { domain: 'masala.elmischools.com' })}
      />
      <AnimatedCard
      title=''
      onPress={() => navigation.navigate('LandingPage', undefined)}/>
      {/* ... repeat for other sections ... */}
    </View>
  );
};

export default LandingPage;