module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            options: {
                separator: '\n\n',
            },
            dist: {
                src: ['src/*.html'], // Ubah sesuai dengan path ke file-file HTML Anda
                dest: 'dist/index.html', // Nama dan lokasi file utama hasil penggabungan
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['concat']);
};