const messages = {
	app_1st_li: "HOME",
	app_2nd_li: "ABOUT",
	app_3rd_li: "SPEAKERS",
	app_4th_li: "SCHEDULE",
	app_5th_li: "PRICING",
	button_more_info: "MORE INFORMATION",
	button_less_info: "LESS INFORMATION",
	button_schedule: "SEE SCHEDULE",
	home1_1st_p: "12TH SYSTEMS ENGINEERING",
	home1_2nd_p: "REGIONAL CONFERENCE",
	home2_1st_p: "FROM JUNE 19 TO 22",
	home2_2nd_p: "UNSCH",
	about_head: "ABOUT THE CONFERENCE",
	about_section_where: "WHERE?",
	about_section_when: "WHEN?",
	about_section_who: "WHO?",
	about_section_who2: "WHO CAN ATTEND?",
	about_text: "<i>XII COREINSI 2019</i> is an academic event focused on the hot topics that the Systems Engineering and related professions contemplate. Attendees can learn with well-qualified, highly rated speakers, about topics with high market demand; like robotics, computational intelligence or virtual reality.",
	about_text_where: "The four-day event will be hosted at the <i>Pedro Gual</i> Auditorium (formerly <i>I.N.C.</i>) in <i>la muy noble y leal ciudad de Huamanga</i>, located in the <i>Ayacucho</i> region of PERU.",
	about_text_when: "From June 19 to 22, 2019, schedules for each day are available",
	about_countdown: "COUNTDOWN",
	about_countdown_weeks: "WKS",
	about_countdown_days: "DAYS",
	about_countdown_hours: "HRS",
	about_countdown_minutes: "MINS",
	about_countdown_seconds: "SECS",
	speakers_header: "OUR SPEAKERS",
	schedule_header: "OUR SCHEDULE PLAN",
	speakers: {
		michael: {
			img: "michael.jpg",
			name: "Michael Hurtado",
			job: "Mathematician/Artist",
			socialNetworks: {
				facebook: "https://www.facebook.com/michael.hurtado",
				instagram: "https://instagram.com/michaelmobius/",
				twitter: "https://twitter.com/michaelmobius",
				github: "https://github.com/MichaelMobius",
				linkedin: "https://www.linkedin.com/in/michaelhurtado/"
			},
			description:
			[
				"Studied Mathematics, <i>Universidad Nacional de Ingeniería</i>",
				"Professor, <i>UTEC - Universidad de Ingeniería y Tecnología</i>",
				"Worked at <i>Museo de Arte Contemporáneo - Lima</i>",
				"CTO at Turing, Alwa Group y Digitoys",
				"Manager at FabLab Lima"
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
			job: "Inmerzum.com co-founder",
			socialNetworks: "",
			description:
			[
				"Virtual and augmented reality specialist.",
				"Google Developer Group Lima organizer.",
				"Consultant in the development of digital materials and interactive activities for virtual environments.",
				"Chief technology officer at Internovam.",
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
			job: "Digital Intelligence analyst",
			socialNetworks: "",
			description:
			[
				"CEO and Project Manager at DENDRO PERÚ",
				"Chief technology officer at APERBIT"
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
			job: "CEO at Tech Hunter Entertainment",
			socialNetworks: {
				facebook: "https://www.facebook.com/letsgorobot",
				instagram: "https://www.instagram.com/dino_techhunter",
				linkedin: "https://www.linkedin.com/in/dinomoralesc/"
			},
			description:
			[
				"Studied Electrical Engineering, PUCP",
				"Video games and Serious Games developer",
				"Actively involved in robotics competitions",
				"Organizer and promoter of technological events and shows",
				"Gamification strategies developer"
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
			job: "UX Researcher at CONCYTEC",
			socialNetworks: "",
			description:
			[
				"Holds a Master of Computer Science",
				"Professor; assigned to the Biomedical Engineering program, PUCP – UPCH",
				"Works in <i>Consejo Nacional de Ciencia y Tecnología - CONCYTEC</i>",
				"Member of the research group \"ai-pucp\", PUCP",
				"Researcher in Computational Linguistics topics"
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
			job: "LET’S GO ROBOT! organizer",
			socialNetworks: {
				facebook: "https://www.facebook.com/letsgorobot/",
			},
			description:
			[
				"Builds specific purpose drones, previous mathematical and physical analysis for chosing optimal components.",
				"Jury of various robotics competitions.",
				"Digital and analog circuits developer.",
			],
			talks:
			[
				"@:schedules.schedule_friday.fri4.title" + " @:schedules.schedule_friday.fri4.title2" ,
				"@:schedules.schedule_saturday.sat1.title",
			]
		},
	},
	schedule_1st_day: "WEDNESDAY",
	schedule_2nd_day: "THURSDAY",
	schedule_3rd_day: "FRIDAY",
	schedule_4th_day: "SATURDAY",
	schedule_1st_long_day: "June, 19",
	schedule_2nd_long_day: "June, 20",
	schedule_3rd_long_day: "June, 21",
	schedule_4th_long_day: "June, 22",
	schedules:{
		schedule_wednesday:
		{
			wed1: {
				title: "OPENING CEREMONY",
				time: "10:00 a.m. - 11:00 a.m.",
				speaker: "XXX XXX XXX",
				speakerJob: "XXXX XXXX XXXX",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat dolor in eros auctor, ac vestibulum diam ultrices. Nam tincidunt ornare fermentum. Phasellus porttitor interdum libero id efficitur. Curabitur condimentum malesuada mi luctus vulputate."
			},
			wed2: {
				title: "INTO THE WORLD OF ROBOTICS.",
				isPresentation: true,
				time: "11:00 a.m. - 12:00 p.m.",
				speaker: "@:speakers.dino.name",
				speakerJob: "@:speakers.dino.job",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat dolor in eros auctor, ac vestibulum diam ultrices. Nam tincidunt ornare fermentum. Phasellus porttitor interdum libero id efficitur. Curabitur condimentum malesuada mi luctus vulputate."
			},
			wed3: {
				title: "3D PIXEL PROSTHESIS.",
				isPresentation: true,
				time: "3:00 p.m. - 4:10 p.m.",
				speaker: "XXXX XXXX XXXX",
				speakerJob: "XXXX XXXX XXXX",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat dolor in eros auctor, ac vestibulum diam ultrices. Nam tincidunt ornare fermentum. Phasellus porttitor interdum libero id efficitur. Curabitur condimentum malesuada mi luctus vulputate."
			},
		},
		schedule_thursday:
		{
			thu1: {
				title: "INVESTIGATION",
				isPresentation: true,
				time: "9:00 a.m. - 10:00 a.m.",
				speaker: "XXXX XXXX XXXX",
				speakerJob: "XXXX XXXX XXXX",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat dolor in eros auctor, ac vestibulum diam ultrices. Nam tincidunt ornare fermentum. Phasellus porttitor interdum libero id efficitur. Curabitur condimentum malesuada mi luctus vulputate."
			},
			thu2: {
				title: "VIRTUAL REALITY",
				isPresentation: true,
				time: "10:10 a.m. - 11:10 a.m.",
				speaker: "XXXX XXXX XXXX",
				speakerJob: "XXXX XXXX XXXX",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat dolor in eros auctor, ac vestibulum diam ultrices. Nam tincidunt ornare fermentum. Phasellus porttitor interdum libero id efficitur. Curabitur condimentum malesuada mi luctus vulputate."
			},
			thu3: {
				title: "BREAK",
				isBreak: true,
				time: "11:10 a.m. - 11:50 a.m.",
			},
		},
		schedule_friday:
		{
			fri1: {
				title: "AI IMAGE RECOGNITION:",
				title2: "Implementing a Pokédex from scratch.",
				isPresentation: true,
				time: "9:00 a.m. - 10:10 a.m.",
				speaker: "@:speakers.ian.name",
				speakerJob: "@:speakers.ian.job",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat dolor in eros auctor, ac vestibulum diam ultrices. Nam tincidunt ornare fermentum. Phasellus porttitor interdum libero id efficitur. Curabitur condimentum malesuada mi luctus vulputate."
			},
			fri2: {
				title: "BUSINESS INTELLIGENCE.",
				isPresentation: true,
				time: "10:10 a.m. - 11:10 a.m.",
				speaker: "XXXX XXXX XXXX",
				speakerJob: "XXXX XXXX XXXX",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat dolor in eros auctor, ac vestibulum diam ultrices. Nam tincidunt ornare fermentum. Phasellus porttitor interdum libero id efficitur. Curabitur condimentum malesuada mi luctus vulputate."
			},
			fri3: {
				title: "BREAK",
				isBreak: true,
				time: "11:10 a.m. - 11:50 a.m.",
			},
			fri4: {
				title: "MUSIC AND PROGRAMMING:",
				title2: "How to join two passions?",
				isPresentation: true,
				time: "11:50 a.m. - 12:50 p.m.",
				speaker: "@:speakers.michael.name",
				speakerJob: "@:speakers.michael.job",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat dolor in eros auctor, ac vestibulum diam ultrices. Nam tincidunt ornare fermentum. Phasellus porttitor interdum libero id efficitur. Curabitur condimentum malesuada mi luctus vulputate."
			},
			fri5: {
				title: "CONFERENCE PAUSE",
				isBreak: true,
				time: "12:50 p.m. - 4:00 p.m.",
			},
			fri6: {
				title: "SHODAN:",
				title2: "Hacking IOT devices.",
				isPresentation: true,
				time: "4:00 p.m. - 5:00 p.m.",
				speaker: "@:speakers.keith.name",
				speakerJob: "@:speakers.keith.job",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat dolor in eros auctor, ac vestibulum diam ultrices. Nam tincidunt ornare fermentum. Phasellus porttitor interdum libero id efficitur. Curabitur condimentum malesuada mi luctus vulputate."
			},
			fri7: {
				title: "TEN YEARS OF FABLABS IN PERÚ.",
				isPresentation: true,
				time: "5:10 p.m. - 6:10 p.m.",
				speaker: "@:speakers.michael.name",
				speakerJob: "@:speakers.michael.job",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat dolor in eros auctor, ac vestibulum diam ultrices. Nam tincidunt ornare fermentum. Phasellus porttitor interdum libero id efficitur. Curabitur condimentum malesuada mi luctus vulputate."
			},
		},
		schedule_saturday:
		{
			sat1: {
				title: "OSINT AND SEARCH ENGINE HACKING.",
				isPresentation: true,
				time: "9:00 a.m. - 10:00 a.m.",
				speaker: "@:speakers.keith.name",
				speakerJob: "@:speakers.keith.job",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat dolor in eros auctor, ac vestibulum diam ultrices. Nam tincidunt ornare fermentum. Phasellus porttitor interdum libero id efficitur. Curabitur condimentum malesuada mi luctus vulputate."
			},
			sat2: {
				title: "DRONES, CONSTRUCTION AND HANDLING.",
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
				title: "2D VIDEO GAMES DEVELOPMENT.",
				isPresentation: true,
				time: "11:50 a.m. - 12:50 p.m.",
				speaker: "@:speakers.dino.name",
				speakerJob: "@:speakers.dino.job",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat dolor in eros auctor, ac vestibulum diam ultrices. Nam tincidunt ornare fermentum. Phasellus porttitor interdum libero id efficitur. Curabitur condimentum malesuada mi luctus vulputate."
			},
			sat5: {
				title: "POSITIVE PSYCHOLOGY",
				time: "1:00 p.m. - 2:00 p.m.",
				speaker: "SYSTEMS ENGINEERING STUDENT GOVERNMENT",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat dolor in eros auctor, ac vestibulum diam ultrices. Nam tincidunt ornare fermentum. Phasellus porttitor interdum libero id efficitur. Curabitur condimentum malesuada mi luctus vulputate."
			}
		}
	},
	schedule_presentation: "PRESENTATION",
	schedule_workshop: "WORKSHOP",
	pricing_title: "<b>INSCRIPTION</b> PRICING",
	pricing_dates_1: "From MAY</br>13 to 26",
	pricing_dates_2: "From MAY 27</br>to JUNE 9",
	pricing_dates_3: "From JUNE</br>10 to 19",
	pricing_1st_title: "DATES",
	pricing_2nd_title: "INDIVIDUAL",
	pricing_3rd_title: "GROUP",
	pricing_indv_btn: "BUY INDIVIDUAL",
	pricing_grp_btn: "BUY GROUP",
	pricing_footnote: "* S: Student.</br>&nbsp;&nbsp;P: Professional.</br>&nbsp;&nbsp;10+: More than 10 students.</br>&nbsp;&nbsp;15+: More than 15 students."
}

export default messages;
