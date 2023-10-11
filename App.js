import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import Navigation from "./components/Navigation";
import 'react-native-gesture-handler'
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {

  const nightTheme = {
    "colors": {
      "primary": "rgb(39, 55, 77)",
      "onPrimary": "rgb(255, 255, 255)",
      "primaryContainer": "rgb(211, 227, 255)",
      "onPrimaryContainer": "rgb(0, 28, 57)",
      "secondary": "rgb(82, 109, 130)",
      "onSecondary": "rgb(255, 255, 255)",
      "secondaryContainer": "rgb(201, 230, 255)",
      "onSecondaryContainer": "rgb(0, 30, 47)",
      "tertiary": "rgb(0, 102, 135)",
      "onTertiary": "rgb(157, 178, 191)",
      "tertiaryContainer": "rgb(193, 232, 255)",
      "onTertiaryContainer": "rgb(0, 30, 43)",
      "error": "rgb(186, 26, 26)",
      "onError": "rgb(255, 255, 255)",
      "errorContainer": "rgb(255, 218, 214)",
      "onErrorContainer": "rgb(65, 0, 2)",
      "background": "rgb(253, 252, 255)",
      "onBackground": "rgb(26, 28, 30)",
      "surface": "rgb(253, 252, 255)",
      "onSurface": "rgb(26, 28, 30)",
      "surfaceVariant": "rgb(223, 226, 235)",
      "onSurfaceVariant": "rgb(67, 71, 78)",
      "outline": "rgb(115, 119, 127)",
      "outlineVariant": "rgb(195, 198, 207)",
      "shadow": "rgb(0, 0, 0)",
      "scrim": "rgb(0, 0, 0)",
      "inverseSurface": "rgb(47, 48, 51)",
      "inverseOnSurface": "rgb(241, 240, 244)",
      "inversePrimary": "rgb(163, 201, 255)",
      "elevation": {
        "level0": "transparent",
        "level1": "rgb(242, 244, 251)",
        "level2": "rgb(235, 240, 248)",
        "level3": "rgb(228, 235, 245)",
        "level4": "rgb(226, 233, 244)",
        "level5": "rgb(221, 230, 242)"
      },
      "surfaceDisabled": "rgba(26, 28, 30, 0.12)",
      "onSurfaceDisabled": "rgba(26, 28, 30, 0.38)",
      "backdrop": "rgba(45, 49, 55, 0.4)"
    }
  }

  const lightTheme =
  {
    "colors": {
      "primary": "rgb(196, 223, 223)",
      "onPrimary": "rgb(255, 255, 255)",
      "primaryContainer": "rgb(111, 246, 249)",
      "onPrimaryContainer": "rgb(0, 32, 32)",
      "secondary": "rgb(210, 233, 233)",
      "onSecondary": "rgb(255, 255, 255)",
      "secondaryContainer": "rgb(111, 246, 250)",
      "onSecondaryContainer": "rgb(0, 32, 33)",
      "tertiary": "rgb(227, 244, 244)",
      "onTertiary": "rgb(255, 255, 255)",
      "tertiaryContainer": "rgb(111, 246, 251)",
      "onTertiaryContainer": "rgb(0, 32, 33)",
      "error": "rgb(186, 26, 26)",
      "onError": "rgb(255, 255, 255)",
      "errorContainer": "rgb(255, 218, 214)",
      "onErrorContainer": "rgb(65, 0, 2)",
      "background": "rgb(250, 253, 252)",
      "onBackground": "rgb(25, 28, 28)",
      "surface": "rgb(250, 253, 252)",
      "onSurface": "rgb(25, 28, 28)",
      "surfaceVariant": "rgb(218, 228, 228)",
      "onSurfaceVariant": "rgb(63, 73, 73)",
      "outline": "rgb(111, 121, 121)",
      "outlineVariant": "rgb(190, 200, 200)",
      "shadow": "rgb(0, 0, 0)",
      "scrim": "rgb(0, 0, 0)",
      "inverseSurface": "rgb(45, 49, 49)",
      "inverseOnSurface": "rgb(239, 241, 240)",
      "inversePrimary": "rgb(76, 218, 220)",
      "elevation": {
        "level0": "transparent",
        "level1": "rgb(238, 246, 245)",
        "level2": "rgb(230, 241, 240)",
        "level3": "rgb(223, 237, 236)",
        "level4": "rgb(220, 235, 235)",
        "level5": "rgb(215, 232, 232)"
      },
      "surfaceDisabled": "rgba(25, 28, 28, 0.12)",
      "onSurfaceDisabled": "rgba(25, 28, 28, 0.38)",
      "backdrop": "rgba(41, 50, 50, 0.4)",
      "fourth": "rgb(0, 108, 75)",
      "onFourth": "rgb(255, 255, 255)",
      "fourthContainer": "rgb(138, 248, 197)",
      "onFourthContainer": "rgb(0, 33, 20)"
    }
  }

  const darkTheme = {
    "colors": {
      "primary": "rgb(34, 40, 49)",
      "onPrimary": "rgb(255, 255, 255)",
      "primaryContainer": "rgb(111, 246, 249)",
      "onPrimaryContainer": "rgb(0, 32, 32)",
      "secondary": "rgb(57, 62, 70)",
      "onSecondary": "rgb(255, 255, 255)",
      "secondaryContainer": "rgb(111, 246, 250)",
      "onSecondaryContainer": "rgb(0, 32, 33)",
      "tertiary": "rgb(227, 244, 244)",
      "onTertiary": "rgb(255, 255, 255)",
      "tertiaryContainer": "rgb(111, 246, 251)",
      "onTertiaryContainer": "rgb(0, 32, 33)",
      "error": "rgb(186, 26, 26)",
      "onError": "rgb(255, 255, 255)",
      "errorContainer": "rgb(255, 218, 214)",
      "onErrorContainer": "rgb(65, 0, 2)",
      "background": "rgb(250, 253, 252)",
      "onBackground": "rgb(25, 28, 28)",
      "surface": "rgb(250, 253, 252)",
      "onSurface": "rgb(25, 28, 28)",
      "surfaceVariant": "rgb(218, 228, 228)",
      "onSurfaceVariant": "rgb(63, 73, 73)",
      "outline": "rgb(111, 121, 121)",
      "outlineVariant": "rgb(190, 200, 200)",
      "shadow": "rgb(0, 0, 0)",
      "scrim": "rgb(0, 0, 0)",
      "inverseSurface": "rgb(45, 49, 49)",
      "inverseOnSurface": "rgb(239, 241, 240)",
      "inversePrimary": "rgb(76, 218, 220)",
      "elevation": {
        "level0": "transparent",
        "level1": "rgb(238, 246, 245)",
        "level2": "rgb(230, 241, 240)",
        "level3": "rgb(223, 237, 236)",
        "level4": "rgb(220, 235, 235)",
        "level5": "rgb(215, 232, 232)"
      },
      "surfaceDisabled": "rgba(25, 28, 28, 0.12)",
      "onSurfaceDisabled": "rgba(25, 28, 28, 0.38)",
      "backdrop": "rgba(41, 50, 50, 0.4)",
      "fourth": "rgb(0, 108, 75)",
      "onFourth": "rgb(255, 255, 255)",
      "fourthContainer": "rgb(138, 248, 197)",
      "onFourthContainer": "rgb(0, 33, 20)"
    }
  }

  const [theme, setTheme] = React.useState(darkTheme);
  const toggleTheme = (userSelect) => {
    if (userSelect == 'light') {
      setTheme(lightTheme);
    } else if (userSelect == 'dark') {
      setTheme(darkTheme);
    } else if (userSelect == 'night') {
      setTheme(nightTheme);
    }

  }

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Navigation theme={darkTheme} />
      </NavigationContainer >
    </PaperProvider >
  );
}
