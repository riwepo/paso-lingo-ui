import React from 'react';
import { View } from 'react-native';
import { fn } from 'storybook/test';

import { ListItem } from './ListItem';

export default {
  title: 'Lists/ListItem',
  component: ListItem,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, alignItems: 'flex-start' }}>
        <Story />
      </View>
    ),
  ],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Use `fn` to spy on the onPress arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: { onPress: fn() },
};

export const TedEspanolFree = {
  args: {
    imageSource: 'ted_en_espanol.png',
    imageComment: 'TED en Espanol',
    title: 'Periodismo que desafia al poder | Jorge Ramos',
    miscInfoLabel1: 'Date Added',
    miscInfoValue1: '12/03/26',
    miscInfoLabel2: 'Duration',
    miscInfoValue2: '15 mins 35 secs',
    banner:  ['FREE', 'white', 'green'],
  },
};

export const YouTubeLocked = {
  args: {
        imageSource: 'you_tube.png',
        imageComment: 'YouTube',
        title: 'Music, poesia e identidad | Jorge Drexler',
        miscInfoLabel1: 'Date Added',
        miscInfoValue1: '07/03/2025',
        miscInfoLabel2: 'Duration',
        miscInfoValue2: '14 mins 00 secs',
        banner:  ['LOCKED', 'red','black'],
  },
};



