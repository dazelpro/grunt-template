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
			css: {
				expand: true,
				cwd: "src/assets/css/",
				src: "**",
				dest: "dist/assets/css/"
			},
			js: {
				expand: true,
				cwd: "src/assets/js/",
				src: "**",
				dest: "dist/assets/js/"
			},
			images: {
				expand: true,
				cwd: "src/assets/images/",
				src: "**",
				dest: "dist/assets/images/"
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
			css: {
				files: ["src/assets/css/**/*.css"],
				tasks: ["copy:css"],
				options: {
					livereload: true // Aktifkan LiveReload agar perubahan muncul secara otomatis di browser
				}
			},
			js: {
				files: ["src/assets/js/**/*.js"], // Tambahkan pengawasan file .js di sini
				tasks: ["copy:js"],
				options: {
					livereload: true // Aktifkan LiveReload agar perubahan muncul secara otomatis di browser
				}
			},
			images: {
				files: ["src/assets/images/**"], // Pemantauan folder assets/images
				tasks: ["copy:images"], // Menyalin tugas images saat perubahan terdeteksi
				options: {
					livereload: true
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
