module.exports = {
  "stories": [
    "../src/Intro.stories.mdx",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-docs",
    "@storybook/preset-create-react-app",
    // "@storybook/addon-a11y",
  ]
}