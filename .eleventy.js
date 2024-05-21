const { DateTime } = require("luxon");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
    eleventyConfig.addGlobalData("title", "Елдар Құдайбергенов");
    eleventyConfig.addCollection("blog", function(collectionApi) {
        return collectionApi.getFilteredByTag("blog").sort((a, b) => b.date - a.date);
      });

      eleventyConfig.addFilter("embedYouTubeVideos", function(value) {
        const youtubeLink = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/g;
        const newValue = value.replace(youtubeLink, '<iframe width="560" height="315" src="https://www.youtube.com/embed/$1" frameborder="0" allowfullscreen></iframe>');
    
        return newValue;
      });

    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toFormat('dd.LL.yyyy');
    });
    eleventyConfig.addPassthroughCopy("src/assets/main.css");

    return {
        dir: {
            input: "src",
            output: "public",
            pathPrefix: "/public/"
        },
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk",
        templateFormats: ["html", "njk", "md"]
    };
};
