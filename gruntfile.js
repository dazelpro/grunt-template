module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),

		// Tugas untuk menyalin file HTML, CSS, dan JavaScript
		copy: {
			html: {
				src: "src/**/*.html", // Menggunakan src/**/*.html untuk menyalin semua file HTML dalam folder src dan subfolder
				dest: "dist/",
				expand: true, // Aktifkan opsi expand
				flatten: true // Aktifkan opsi flatten
			},
			assets: {
				expand: true,
				cwd: "src/assets/",
				src: "**",
				dest: "dist/assets/"
			}
		},

		// Tugas untuk memantau perubahan file dan menjalankan tugas
		watch: {
			html: {
				files: ["src/**/*.html"],
				tasks: ["copy:html"],
				options: {
					livereload: true // Aktifkan LiveReload agar perubahan muncul secara otomatis di browser
				}
			},
			assets: {
				files: ["src/assets/**"],
				tasks: ["copy:assets"],
				options: {
					livereload: true // Aktifkan LiveReload agar perubahan muncul secara otomatis di browser
				}
			}
		},

		// Tugas untuk mengatur server lokal dan sinkronisasi browser
		browserSync: {
			dev: {
				bsFiles: {
					src: ["dist/**/*"]
				},
				options: {
					server: {
						baseDir: "dist/"
					},
					watchTask: true
				}
			}
		}
	});

	// Load plugin Grunt yang diperlukan
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-browser-sync");

	// Tugas default
	grunt.registerTask("default", ["copy", "browserSync", "watch"]);
};
