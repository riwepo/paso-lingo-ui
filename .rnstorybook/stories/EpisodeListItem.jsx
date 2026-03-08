/** EpisodeListItem component to display episode details */
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { debug } from './styles/debug_styles'

export const EpisodeListItem = ({
  date,
  source,
  title,
  free = false,
  duration,
  imageSource,
  style,
}) => {
  return (
    <View style={[styles.container, style, debug]}>
      <View style={[styles.row, debug]}>
        {imageSource && (
          <View style={debug}>
            <Image
              source={imageSource}
              style={styles.thumbnail}
              resizeMode="contain"
            />
          </View>
        )}

        <View style={[styles.content, debug]}>
          <View style={[styles.headerRow, debug]}>
            <Text style={styles.source}>
              <Text style={styles.sourceLabel}>Source: </Text>
              {source}
            </Text>
          </View>

          <View style={debug}>
            <Text style={styles.title}>{title}</Text>
          </View>

          <View style={[styles.footerRow, debug]}>
            <Text style={styles.date}>Date: {date}</Text>
            <Text style={styles.duration}>Duration: {duration}</Text>
            {free && <Text style={styles.freeBadge}>FREE</Text>}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  thumbnail: {
    width: 40,
    height: 40,
    borderRadius: 6,
    marginRight: 12,
  },

  content: {
    flex: 1,
  },

  headerRow: {
    marginBottom: 12, // extra space before title
  },

  source: {
    fontSize: 12,
    color: '#666',
  },

  sourceLabel: {
    fontWeight: '600',
    color: '#444',
  },

  title: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 12,
    color: '#222',
  },

  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  date: {
    fontSize: 12,
    color: '#666',
  },

  duration: {
    fontSize: 12,
    color: '#666',
  },

  freeBadge: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0a7',
  },
});
