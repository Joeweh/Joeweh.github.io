module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/CNAME");
    eleventyConfig.addPassthroughCopy("src/robots.txt");
    eleventyConfig.addPassthroughCopy("src/favicon.ico");
    eleventyConfig.addPassthroughCopy("src/styles.css");
    eleventyConfig.addPassthroughCopy("src/assets");

    return {
        dir: { input: "src", output: "_site" },
        templateFormats: ["html", "liquid"],
    };
};
