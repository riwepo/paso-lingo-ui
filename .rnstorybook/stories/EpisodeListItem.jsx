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
  imageSource,   // <-- NEW
  imageStyle,    // <-- optional override
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.row}>
        {imageSource && (
          <Image
            source={imageSource}
            style={[styles.thumbnail, imageStyle]}
            resizeMode="cover"
          />
        )}

        <View style={styles.content}>
          <View style={styles.headerRow}>
            <Text style={styles.date}>{date}</Text>
            <Text style={styles.source}>{source}</Text>
          </View>

          <Text style={styles.title}>{title}</Text>

          <View style={styles.footerRow}>
            {free && <Text style={styles.freeBadge}>FREE</Text>}
            <Text style={styles.duration}>{duration}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 4,
    backgroundColor: '#eee',
  },
  content: {
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    color: '#666',
  },
  source: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#222',
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  freeBadge: {
    backgroundColor: '#4CAF50',
    color: 'white',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    fontWeight: 'bold',
    fontSize: 12,
  },
  duration: {
    fontSize: 12,
    color: '#666',
  },
});
