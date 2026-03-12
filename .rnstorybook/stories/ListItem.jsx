/** ListItem component to display items of a list */
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { debug } from './styles/debug_styles'

export const ListItem = ({
  imageSource,
  imageComment,
  title,
  miscInfoLabel1,
  miscInfoValue1,
  miscInfoLabel2,
  miscInfoValue2,
  banner,
  style,
}) => {
  return (
    <View style={[styles.overallContainer, style, debug]}>

      <ListItemImage
       imageSource={imageSource}
       imageComment={imageComment} />

      <ListItemInfo
       title={title}
       miscInfoLabel1={miscInfoLabel1}
       miscInfoValue1={miscInfoValue1}
       miscInfoLabel2={miscInfoLabel2}
       miscInfoValue2={miscInfoValue2}
       banner={banner}  />

    </View>

  );
};

const ListItemImage = ({
  imageSource,
  imageComment
}) => {
  return (
    <View style={[styles.imageContainer, debug]}>
            <Image
              source={imageSource}
              style={styles.thumbnail}
              resizeMode="contain"
            />
          </View>
          );
      ;}

const ListItemInfo = ({
    title,
    miscInfoLabel1,
    miscInfoValue1,
    miscInfoLabel2,
    miscInfoValue2,
    banner
}) => {
  return (
    <View style={[styles.contentContainer, debug]}>

            <View style={[styles.topRow, debug]}>
              <Text style={styles.title}>
                {title}
              </Text>
            </View>

            <View style={[styles.bottomRow, debug]}>
              <Text style={styles.misc_info_label}>{miscInfoLabel1}</Text>
              <Text style={styles.misc_info_value}>
                {miscInfoValue1}
              </Text>
              <Text style={styles.misc_info_label}>{miscInfoLabel2}</Text>
              <Text style={styles.misc_info_value}>
                {miscInfoLabel2}
              </Text>
              {banner && <Text style={styles.banner}>{banner[0]}</Text>}
            </View>


          </View>
          );
      }




const styles = StyleSheet.create({

  overallContainer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  imageContainer: {
    paddingVertical: 4,
    paddingHorizontal: 4,
  },

  contentContainer: {
    paddingVertical: 4,
    paddingHorizontal: 4,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },

  thumbnail: {
    width: 40,
    height: 40,
    borderRadius: 6,
    marginRight: 12,
  },

  topRow: {
    flexDirection: 'row',
    marginBottom: 12, // extra space before title
  },

  middleRow: {
    flexDirection: 'row',
    marginBottom: 12, // extra space before title
  },

  bottomRow: {
    flexDirection: 'row'
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
    color: '#222',
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
