module.exports = function (grunt) {
  grunt.initConfig({
    watch: {
      scripts: {
        files: ["js/*.js"],
      },
      styles: {
        files: ["css/*.css"],
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["watch"]);
};
