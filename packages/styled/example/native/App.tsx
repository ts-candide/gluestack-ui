// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from 'react-native';

import { styled } from '@gluestack/styled';
import { convertUtilityPropsToSX } from '@gluestack/ui-convert-utility-to-sx';
import React from 'react';

const Box = styled(
  Pressable,
  {
    baseStyle: {
      style: {
        bg: '$blue500',
        p: '$6',
        rounded: '$full',
      },
      state: {
        hover: {
          style: {
            bg: '$colors$red300',
          },
        },
      },
    },
    variants: {
      greenBox: {
        style: {
          bg: '$green500',
        },
        state: {
          hover: {
            style: {
              bg: '$green600',
            },
          },
        },
      },
    },
  },
  {}
);

export default function App() {
  const [isPressed, setIsPressed] = React.useState(false);
  const [isHovered, setisHovered] = React.useState(false);
  return (
    <View style={styles.container}>
      <Box
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        onHoverIn={() => setisHovered(true)}
        onHoverOut={() => setisHovered(false)}
        variant="greenBox"
        bg="$red500"
        hover-bg="$green600"
        hover-web-bg="$amber600"
        active-p="$8"
        active-bg="$pink600"
        web-bg="$blue600"
        web-hover-bg="$gray600"
        web-hover-p="$8"
        states={{
          hover: isHovered,
          active: isPressed,
        }}
        sx={{
          platform: {
            web: {
              state: {
                hover: {
                  style: {
                    bg: '$amber600',
                    // p: '$8',
                  },
                },
              },
            },
          },
          state: {
            hover: {
              style: {
                bg: '$red500',
              },
            },
          },
        }}
      >
        Hello Box
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
