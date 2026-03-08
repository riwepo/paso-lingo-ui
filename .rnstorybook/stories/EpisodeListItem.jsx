/** EpisodeListItem component to display episode details */
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export const EpisodeListItem = ({
  date,
  source,
  title,
  free = false,
  duration,
  style,
  imageSource,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.row}>
        {imageSource && (
          <Image
            source={imageSource}
            style={styles.thumbnail}
            resizeMode="contain"
          />
        )}

        <View style={styles.content}>
          {/* HEADER ROW — now only Source */}
          <View style={styles.headerRow}>
            <Text style={styles.source}>
              <Text style={styles.sourceLabel}>Source: </Text>
              {source}
            </Text>
          </View>

          <Text style={styles.title}>{title}</Text>

          {/* FOOTER ROW — Date, Duration, FREE */}
          <View style={styles.footerRow}>
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
