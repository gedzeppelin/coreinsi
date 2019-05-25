const messages = {
	es:{
		app_1st_li: "INICIO",
		app_2nd_li: "ACERCA",
		app_3rd_li: "PONENTES",
		app_4th_li: "HORARIOS",
		app_5th_li: "PRECIOS",
		button_more_info: "MÁS INFORMACIÓN",
		button_less_info: "MENOS INFORMACIÓN",
		button_schedule: "VER HORARIOS",
		home1_1st_p: "XII CONGRESO REGIONAL",
		home1_2nd_p: "DE INGENIERÍA DE SISTEMAS",
		home2_1st_p: "DEL 19 AL 22 DE JUNIO",
		home2_2nd_p: "UNSCH",
		about_head: "ACERCA DEL CONGRESO",
		about_text: "El <b>XII COREINSI 2019</b> es un evento de divulgación académica enfocado a los tópicos de interés y actualidad que la carrera profesional de Ingeniería de Sistemas y afines contemplan. Los asistentes podrán capacitarse, de la mano de ponentes altamente calificados, en temas de vanguardia y de alta demanda empresarial; como la robótica, la inteligencia computacional o la realidad virtual.",
		about_text_where: "El evento de cuatro días se llevará a cabo en el Auditorio \"Pedro Gual\" (ex I.N.C.) en la muy noble y leal ciudad de Huamanga, en departamento de Ayacucho, Perú.",
		about_text_when: "El evento tendrá lugar del 19 al 22 de junio del 2019, los horarios para cada día están disponibles.",
		about_text_who: "El <b>XII COREINSI 2019</b> es presentado por la Escuela Profesional de Ingeniería de Sistemas de la Real y Pontificia Universidad Nacional de San Cristóbal de Huamanga.",
		about_text_who2: "Damos la bienvenida a estudiantes, profesionales y a todo tipo de interesados en las áreas del conocimiento que la carrera profesional de Ingeniería de Sistemas y afines contemplan.",
		about_section_where: "¿DÓNDE?",
		about_section_when: "¿CUÁNDO?",
		about_section_who: "¿QUIÉNES LA ORGANIZAN?",
		about_section_who2: "¿QUIÉNES PUEDEN PARTICIPAR?",
		about_countdown: "CUENTA REGRESIVA",
		about_countdown_weeks: "SEMS",
		about_countdown_days: "DÍAS",
		about_countdown_hours: "HRS",
		about_countdown_minutes: "MINS",
		about_countdown_seconds: "SEGS",
		speakers_header: "NUESTROS PONENTES",
		schedule_header: "NUESTRO HORARIO",
		speakers: {
			michael: {
				img: "michael.jpg",
				name: "Michael Hurtado",
				job: "Matemático/Artista",
				socialNetworks: {
					facebook: "https://www.facebook.com/michael.hurtado",
					instagram: "https://instagram.com/michaelmobius/",
					twitter: "https://twitter.com/michaelmobius",
					github: "https://github.com/MichaelMobius",
					linkedin: "https://www.linkedin.com/in/michaelhurtado/"
				},
				description:
				[
					"Estudió Matemáticas en la Universidad Nacional de Ingeniería",
					"Docente en la UTEC - Universidad de Ingeniería y Tecnología",
					"Trabajó en el Museo de Arte Contemporáneo - Lima",
					"CTO de Turing, Alwa Group y Digitoys",
					"Manager de FabLab Lima"
				],
				talks:
				[
					"@:schedules.schedule_friday.fri2.title" + " @:schedules.schedule_friday.fri2.title2",
					"@:schedules.schedule_friday.fri7.title"
				]
			},
			elvis: {
				img: "elvis.jpeg",
				name: "Elvis Rivera",
				job: "Cofundador de Inmerzum.com",
				socialNetworks: "",
				description:
				[
					"Especialista en realidad virtual y realidad aumentada.",
					"Organizador de Google Developer Group Lima.",
					"Consultor en temas de desarrollo de materiales digitales y generación de actividades interactivas para ambientes virtuales.",
					"Director de Tecnología en Internovam.",
				],
				talks:
				[
					"@:schedules.schedule_friday.fri4.title" + " @:schedules.schedule_friday.fri4.title2" ,
					"@:schedules.schedule_saturday.sat1.title",
				]
			},
			keith: {
				img: "keith.jpg",
				name: "Keith Fernández Idme",
				job: "Analista en inteligencia digital",
				socialNetworks: "",
				description:
				[
					"CEO y Project Manager en DENDRO PERÚ",
					"Director tecnológico en APERBIT"
				],
				talks:
				[
					"@:schedules.schedule_friday.fri4.title" + " @:schedules.schedule_friday.fri4.title2" ,
					"@:schedules.schedule_saturday.sat1.title",
				]
			},
			dino: {
				img: "dino.jpg",
				name: "Dino Morales Chavarry",
				job: "CEO de Tech Hunter Entertainment",
				socialNetworks: {
					facebook: "https://www.facebook.com/letsgorobot",
					instagram: "https://www.instagram.com/dino_techhunter",
					linkedin: "https://www.linkedin.com/in/dinomoralesc/"
				},
				description:
				[
					"Estudió Ingeniería electrónica en la PUCP",
					"Desarrollador de videojuegos y \"Serious Games\"",
					"Desarrollador de robótica de competencia",
					"Organizador y promotor de eventos y espectáculos tecnológicos",
					"Desarrollador de estrategias de ludificación"
				],
				talks:
				[
					"@:schedules.schedule_wednesday.wed2.title",
					"@:schedules.schedule_saturday.sat2.title",
				]
			},
			ian: {
				img: "ian.jpg",
				name: "Ian Paul Brossard",
				job: "UX Researcher en el CONCYTEC",
				socialNetworks: "",
				description:
				[
					"Máster en Ciencias de la Computación",
					"Profesor asignado al programa de Ingeniería Biomédica PUCP – UPCH",
					"Trabaja en el Consejo Nacional de Ciencia y Tecnología - CONCYTEC",
					"Pertenece al grupo de investigación \"ai-pucp\" en la PUCP",
					"Investigador en temas de Lingüística computacional."
				],
				talks:
				[
					"@:schedules.schedule_friday.fri1.title" + " @:schedules.schedule_friday.fri1.title2" ,
					"@:schedules.schedule_friday.fri6.title",
				]
			},
			jorge: {
				img: "jorge.jpg",
				name: "Jorge Gonzales Moreno",
				job: "Organizador de LET’S GO ROBOT!",
				socialNetworks: {
					facebook: "https://www.facebook.com/letsgorobot/",
				},
				description:
				[
					"Construye drones de propósito específico, previo desarrollo matemático y análisis físico para la elección de componentes óptimos.",
					"Jurado de diversos concursos de robótica.",
					"Diseña circuitos digitales y analógicos.",
				],
				talks:
				[
					"@:schedules.schedule_friday.fri4.title" + " @:schedules.schedule_friday.fri4.title2" ,
					"@:schedules.schedule_saturday.sat1.title",
				]
			},
		},
		schedule_1st_day: "MIÉRCOLES",
		schedule_2nd_day: "JUEVES",
		schedule_3rd_day: "VIERNES",
		schedule_4th_day: "SÁBADO",
		schedule_1st_long_day: "19 de junio",
		schedule_2nd_long_day: "20 de junio",
		schedule_3rd_long_day: "21 de junio",
		schedule_4th_long_day: "22 de junio",
		schedules:{
			schedule_wednesday:
			{
		    wed1: {
					title: "CEREMONIA DE INAUGURACIÓN",
					time: "10:00 a.m. - 11:00 a.m.",
					speaker: "XXX XXX XXX",
					speakerJob: "XXXX XXXX XXXX",
		      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat dolor in eros auctor, ac vestibulum diam ultrices. Nam tincidunt ornare fermentum. Phasellus porttitor interdum libero id efficitur. Curabitur condimentum malesuada mi luctus vulputate."
				},
				wed2: {
					title: "INGRESA AL MUNDO DE LA ROBÓTICA.",
					isPresentation: true,
					time: "11:00 a.m. - 12:00 p.m.",
					speaker: "@:speakers.dino.name",
					speakerJob: "@:speakers.dino.job",
		      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat dolor in eros auctor, ac vestibulum diam ultrices. Nam tincidunt ornare fermentum. Phasellus porttitor interdum libero id efficitur. Curabitur condimentum malesuada mi luctus vulputate."
				},
				wed3: {
					title: "PRÓTESIS 3D PÍXEL",
					isPresentation: true,
					time: "3:00 p.m. - 4:10 p.m.",
					speaker: "XXX XXX XXX",
					speakerJob: "XXXX XXXX XXXX",
		      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat dolor in eros auctor, ac vestibulum diam ultrices. Nam tincidunt ornare fermentum. Phasellus porttitor interdum libero id efficitur. Curabitur condimentum malesuada mi luctus vulputate."
				},
			},
			schedule_thursday:
			{
				thu1: {
					title: "INVESTIGACIÓN",
					isPresentation: true,
					time: "9:00 a.m. - 10:00 a.m.",
					speaker: "XXXX XXXX XXXX",
					speakerJob: "XXXX XXXX XXXX",
		      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat dolor in eros auctor, ac vestibulum diam ultrices. Nam tincidunt ornare fermentum. Phasellus porttitor interdum libero id efficitur. Curabitur condimentum malesuada mi luctus vulputate."
				},
				thu2: {
					title: "REALIDAD VIRTUAL",
					isPresentation: true,
					time: "10:10 a.m. - 11:10 a.m.",
					speaker: "XXXX XXXX XXXX",
					speakerJob: "XXXX XXXX XXXX",
		      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat dolor in eros auctor, ac vestibulum diam ultrices. Nam tincidunt ornare fermentum. Phasellus porttitor interdum libero id efficitur. Curabitur condimentum malesuada mi luctus vulputate."
				},
				thu3: {
					title: "BREAK",
					isBreak: true,
					time: "11:20 a.m. - 11:50 a.m.",
				},
			},
			schedule_friday:
			{
		    fri1: {
					title: "RECONOCIMIENTO DE IMÁGENES USANDO IA:",
					title2: "Cómo implementar una Pokédex desde cero.",
					isPresentation: true,
					time: "9:00 a.m. - 10:10 a.m.",
					speaker: "@:speakers.ian.name",
					speakerJob: "@:speakers.ian.job",
		      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat dolor in eros auctor, ac vestibulum diam ultrices. Nam tincidunt ornare fermentum. Phasellus porttitor interdum libero id efficitur. Curabitur condimentum malesuada mi luctus vulputate."
				},
				fri2: {
					title: "INTELIGENCIA DE NEGOCIOS",
					isPresentation: true,
					time: "10:10 a.m. - 11:10 a.m.",
					speaker: "XXXX XXXX XXXX",
					speakerJob: "XXXX XXXX XXXX",
		      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat dolor in eros auctor, ac vestibulum diam ultrices. Nam tincidunt ornare fermentum. Phasellus porttitor interdum libero id efficitur. Curabitur condimentum malesuada mi luctus vulputate."
				},
				fri3: {
					title: "BREAK",
					isBreak: true,
					time: "11:20 a.m. - 11:50 a.m.",
				},
				fri4: {
					title: "MÚSICA Y PROGRAMACIÓN:",
					title2: "¿Cómo juntar dos pasiones?",
					isPresentation: true,
					time: "11:50 a.m. - 12:50 p.m.",
					speaker: "@:speakers.michael.name",
					speakerJob: "@:speakers.michael.job",
		      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat dolor in eros auctor, ac vestibulum diam ultrices. Nam tincidunt ornare fermentum. Phasellus porttitor interdum libero id efficitur. Curabitur condimentum malesuada mi luctus vulputate."
				},
				fri5: {
					title: "RECESO",
					isBreak: true,
					time: "12:50 p.m. - 4:00 p.m.",
				},
				fri6: {
					title: "SHODAN:",
					title2: "Hackeando dispositivos IOT.",
					isPresentation: true,
					time: "4:00 p.m. - 5:00 p.m.",
					speaker: "@:speakers.keith.name",
					speakerJob: "@:speakers.keith.job",
		      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat dolor in eros auctor, ac vestibulum diam ultrices. Nam tincidunt ornare fermentum. Phasellus porttitor interdum libero id efficitur. Curabitur condimentum malesuada mi luctus vulputate."
				},
				fri7: {
					title: "DIEZ AÑOS DE LOS FABLABS EN EL PERÚ.",
					isPresentation: true,
					time: "5:10 p.m. - 6:10 p.m.",
					speaker: "@:speakers.michael.name",
					speakerJob: "@:speakers.michael.job",
		      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat dolor in eros auctor, ac vestibulum diam ultrices. Nam tincidunt ornare fermentum. Phasellus porttitor interdum libero id efficitur. Curabitur condimentum malesuada mi luctus vulputate."
				}
			},
			schedule_saturday:
			{
		    sat1: {
					title: "OSINT y HACKING CON BUSCADORES.",
					isPresentation: true,
					time: "9:00 a.m. - 10:00 a.m.",
					speaker: "@:speakers.keith.name",
					speakerJob: "@:speakers.keith.job",
		      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat dolor in eros auctor, ac vestibulum diam ultrices. Nam tincidunt ornare fermentum. Phasellus porttitor interdum libero id efficitur. Curabitur condimentum malesuada mi luctus vulputate."
				},
				sat2: {
					title: "CONSTRUCCIÓN Y MANEJO DE DRONES.",
					isPresentation: true,
					time: "10:10 a.m. - 11:10 a.m.",
					speaker: "Jorge Gonzales Moreno",
					speakerJob: "XXXX XXXX XXXX",
		      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat dolor in eros auctor, ac vestibulum diam ultrices. Nam tincidunt ornare fermentum. Phasellus porttitor interdum libero id efficitur. Curabitur condimentum malesuada mi luctus vulputate."
				},
				sat3: {
					title: "BREAK",
					isBreak: true,
					time: "11:10 a.m. - 11:50 a.m.",
				},
				sat4: {
					title: "CREACIÓN DE VIDEOJUEGOS EN 2D",
					isPresentation: true,
					time: "11:50 a.m. - 12:50 p.m.",
					speaker: "@:speakers.dino.name",
					speakerJob: "@:speakers.dino.job",
		      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat dolor in eros auctor, ac vestibulum diam ultrices. Nam tincidunt ornare fermentum. Phasellus porttitor interdum libero id efficitur. Curabitur condimentum malesuada mi luctus vulputate."
				},
				sat5: {
					title: "PSICOLOGÍA POSITIVA",
					time: "1:00 p.m. - 2:00 p.m.",
					speaker: "CENTRO DE ESTUDIANTES DE ING. DE SISTEMAS",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat dolor in eros auctor, ac vestibulum diam ultrices. Nam tincidunt ornare fermentum. Phasellus porttitor interdum libero id efficitur. Curabitur condimentum malesuada mi luctus vulputate."
				}
			}
		},
		schedule_presentation: "PONENCIA",
		schedule_workshop: "TALLER",
		pricing_title: "PRECIO DE <b>INSCRIPCIONES</b>",
		pricing_dates_1: "Del 13 al 26</br>de MAYO",
		pricing_dates_2: "Del 27 de MAYO</br>al 9 de JUNIO",
		pricing_dates_3: "Del 10 al 19</br>de JUNIO",
		pricing_1st_title: "FECHAS",
		pricing_2nd_title: "INDIVIDUAL",
		pricing_3rd_title: "GRUPAL",
		pricing_indv_btn: "COMPRAR INDIVIDUAL",
		pricing_grp_btn: "COMPRAR GRUPAL",
		pricing_footnote: "* E: Estudiante.</br>&nbsp;&nbsp;P: Profesional.</br>&nbsp;&nbsp;10+: Más de 10 estudiantes.</br>&nbsp;&nbsp;15+: Más de 15 estudiantes."
	}
}

export default messages;
