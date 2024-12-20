import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

interface VideoStreamProps {
  streamUrl: string;
}

export const VideoStream: React.FC<VideoStreamProps> = ({ streamUrl }) => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: streamUrl }}
        style={styles.video}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowsInlineMediaPlayback={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  video: {
    flex: 1,
  },
});

