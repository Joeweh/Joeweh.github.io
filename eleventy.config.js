module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/CNAME");
    eleventyConfig.addPassthroughCopy("src/robots.txt");
    eleventyConfig.addPassthroughCopy("src/**/*.{css,js,png,jpg,webp,svg,ico,woff2,pdf}");

    return {
        dir: { input: "src", output: "_site" },
        templateFormats: ["html", "liquid"],
        htmlTemplateEngine: "liquid",
    };
};