const { getDefaultConfig } = require('expo/metro-config');
const { withStorybook } = require('@storybook/react-native/metro/withStorybook');
const path = require('path');

const projectRoot = path.resolve(__dirname);

const defaultConfig = getDefaultConfig(projectRoot);

defaultConfig.resolver.extraNodeModules = {
  ...(defaultConfig.resolver.extraNodeModules || {}),
  '@': projectRoot,
};

defaultConfig.watchFolders = [
  ...(defaultConfig.watchFolders || []),
  projectRoot,
];

module.exports = withStorybook(defaultConfig);
