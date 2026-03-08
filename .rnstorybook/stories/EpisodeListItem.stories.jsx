import React from 'react';
import { View } from 'react-native';
import { fn } from 'storybook/test';

import { EpisodeListItem } from './EpisodeListItem';

export default {
  title: 'Lists/EpisodeListItem',
  component: EpisodeListItem,
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
    date: '06/03/2025',
    free: true,
    source: 'TED en Espanol',
    title: 'Periodismo que desafia al poder | Jorge Ramos',
    imageSource: require('./assets/ted_en_espanol.png')
  },
};

export const YouTubePaid = {
  args: {
    date: '07/03/2025',
    free: false,
    source: 'TED en Espanol',
    title: 'Music, poesia e identidad | Jorge Drexler',
    imageSource: require('./assets/you_tube.png')
  },
};



