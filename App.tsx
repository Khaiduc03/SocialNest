import { FunctionComponent } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigation from './src/navigation/RootNavigation';

const App: FunctionComponent = () => {
  return (
    <SafeAreaProvider
      initialMetrics={{
        frame: {x: 0, y: 0, width: 0, height: 0},
        insets: {top: 0, left: 0, right: 0, bottom: 0},
      }}>
      <GestureHandlerRootView style={{flex: 1}}>
        {/* ALERT */}

        {/* LOADING API */}

        {/* MAIN APP */}
        <RootNavigation />

        {/* Modal progressing when upgrade version of app */}
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
