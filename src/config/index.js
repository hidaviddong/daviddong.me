const Works = [
	{
		name: "Chatbot",
		description: "Chat application in medical field.",
		time: "2023-2024",
		href: "/project/chatbot",
		background: "/images/chatbot.webp",
		keywords: ["llm", "large language model", "gpt", "medical", "chatbot"]
	},
	{
		name: "Data Visualization",
		description: "Chart and 3D models.",
		time: "2023-2024",
		href: "/project/data-visualization",
		background: "/images/data-visualization.webp",
		keywords: ["data visualization", "ECharts", "Blender", "Three.js"]
	},
	{
		name: "Hybrid Mobile App",
		description: "QQ Music livestreaming Room.",
		time: "2022",
		href: "/project/tme",
		background: "/images/tme.webp",
		keywords: ["mobile app", "hybrid app", "React", "TypeScript"]
	},
];

const OpenSourceProjects = [
	{
		name: "daviddong.me",
		description: "My website.",
		time: "2024",
		href: "/project/website",
		background: "/images/website.webp",
		keywords: ["personal website", "portfolio", "web development", "software engineer"]
	},
	{
		name: "Raytracing",
		description: "Raytracing algorithm in JavaScript.",
		time: "2024",
		href: "/project/raytracing",
		background: "/images/raytracing.webp",
		keywords: ["raytracing"]
	},
	{
		name: "Mini React",
		description: "A Minimal implementation of React.js and ReactDOM.",
		time: "2024",
		href: "/project/react",
		background: "/images/react.webp",
		keywords: ["react", "react-dom", "hooks"]
	},
	{
		name: "Comments",
		description: "Add comments to your website.",
		time: "2023",
		href: "/project/comments",
		background: "/images/comments.webp",
		keywords: ["comments", "open source", "React", "TypeScript", "Node.js"]
	},
];

const Blog = [
	{
		name: 'Reading: The Elements of Computing Systems',
		description: "Understand how hardware and software worked at a low level.",
		time: '2024',
		href: '/blog/nand2tetris',
		background: "/images/og/nand2tetris.webp",
		keywords: ["Hardware", "Software", "Computer Science"]
	},
	{
		name: 'TypeScript Type Challenges in Real Projects',
		description: "Managing complex key combinations in TypeScript.",
		time: '2024',
		href: '/blog/typescript-type-challenges-in-real-projects',
		background: "/images/og/typescript-type-challenges-in-real-projects.webp",
		keywords: ["TypeScript", "Type Challenge"]
	},
	{
		name: `Why I Don't Use Note-Taking and Task Management Apps`,
		description: "Bye bye Notion, Obsidian, Calendar, TodoList...",
		time: '2024',
		href: '/blog/why-i-dont-use-note-taking-and-task-management-apps',
		background: "/images/og/why-i-dont-use-note-taking-and-task-management-apps",
		keywords: ["App", "Notion", "Obsidian", "Todolist", "Calendar"]
	},
	{
		name: 'Things I Use In 2024',
		description: "Some software on Mac and Windows, and some hardware.",
		time: '2024',
		href: '/blog/things-i-use-in-2024',
		background: "/images/og/things-i-use-in-2024.webp",
		keywords: ["Mac", "Windows", "Software", "Computer"]
	},
	{
		name: 'Build a Investment Management App ',
		description: "My thoughts on investment management.",
		time: '2024',
		href: '/blog/build-a-investment-management-app',
		background: "/images/og/build-a-investment-management-app.webp",
		keywords: ["investment", "management"]
	}
]
const SONG_BASEURL = "https://img1.doubanio.com/lpic/";
const Songs = [
	{ title: "Blue Moon", artist: "David Tao", url: "s4208287" },
	{ title: "Love Words", artist: "Dean Ting", url: "s33545377" },
	{ title: "After the Love Has Gone", artist: "Earth Wind & Fire", url: "s2558289" },
	{ title: "Regulate (feat. Nate Dogg)", artist: "Warren G", url: "s28000661" },
	{ title: "Nuthin' But A 'G' Thang", artist: "Dr. Dre, Snoop Dogg", url: "s34485730" },
	{
		title: "Can't Take My Eyes Off of You (I Love You Baby)",
		artist: "Lauryn Hill",
		url: "s34291208",
	},
	{ title: "Ex-Factor", artist: "Lauryn Hill", url: "s34291208" },
	{ title: "Strange Weather", artist: "YELLOW, 9m88", url: "s33722359" },
	{ title: "Over", artist: "Khalil Fong", url: "s4720193" },
	{ title: "How Deep Is Your Love", artist: "PJ Morton", url: "s29437574" },
	{ title: "Isn't She Lovely", artist: "Stevie Wonder", url: "s34317705" },
	{ title: "Stan (feat. Dido)", artist: "Eminem", url: "s3809299" },
	{ title: "Once in a Blue Moon (feat. Mavis Fan)", artist: "YELLOW", url: "s34869641" },
	{ title: "My Only Girl", artist: "Khalil Fong", url: "s24459457" },
	{ title: "Definition of Love", artist: "Khalil Fong", url: "s24459457" },
	{ title: "Madoromi", artist: "Naoko Gushima", url: "s33289183" },
];

// https://www.omdbapi.com/
const MOVIE_BASEURL = "https://m.media-amazon.com/images/M/";

const Movies = [
	{
		title: "Annie Hall",
		year: "1977",
		imageUrl:
			"MV5BZDg1OGQ4YzgtM2Y2NS00NjA3LWFjYTctMDRlMDI3NWE1OTUyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300",
	},
	{
		title: "Take the Money and Run",
		year: "1969",
		imageUrl: "MV5BMjE2Mjc5NDg3OV5BMl5BanBnXkFtZTgwMzUxMjMyMTE@._V1_SX300",
	},
	{
		title: "Following",
		year: "1998",
		imageUrl:
			"MV5BNDVhYTAyMDgtM2NhNS00MmQ3LWE0ZDMtNWIxMjlhODFmOWUwXkEyXkFqcGdeQXVyMTA5NjIyODcx._V1_SX300",
	},
	{
		title: "Inception",
		year: "2010",
		imageUrl: "MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300",
	},
	{
		title: "Interstellar",
		year: "2014",
		imageUrl:
			"MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300",
	},
	{
		title: "Memento",
		year: "2000",
		imageUrl:
			"MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300",
	},
];
const MUSICVIDEO_BASEURL = "https://www.bilibili.com/video/";
const Music = [
	{
		name: "Autumn Leaves",
		author: "Joe Pass",
		imageUrl: "autumn-leaves",
		url: "BV1P24y1G7MZ",
	},
	{
		name: "Blue Moon",
		author: "David Tao",
		imageUrl: "blue-moon",
		url: "BV12M411e7L9",
	},
	{
		name: "Seventeen",
		author: "David Tao",
		imageUrl: "seventeen",
		url: "BV11f4y1R7H2",
	},
	{
		name: "Slient Night",
		author: "Joseph Mohr, Franz Xaver Gruber",
		imageUrl: "slient-night",
		url: "BV1e7411X7Yh",
	},
	{
		name: "Everything's Gone",
		author: "David Tao",
		imageUrl: "everything-gone",
		url: "BV1i7411u7Ur",
	},
	{
		name: "Evergreen",
		author: "Satoshi Gogo",
		imageUrl: "evergreen",
		url: "BV1xt411t71S",
	},
	{
		name: "Santa Claus is Coming To Town",
		author: "J. Fred Coots, Haven Gillespie",
		imageUrl: "santa-claus-is-coming-to-town",
		url: "BV1Ut411Y7uu",
	},
	{
		name: "When I'm Sixty-Four",
		author: "The Beatles",
		imageUrl: "when-i-am-sixty-four",
		url: "BV1St411Y7WS",
	},
	{
		name: "Can't Buy Me Love",
		author: "The Beatles",
		imageUrl: "cant-buy-me-love",
		url: "BV1Zt411m7XC",
	},
	{
		name: "The Way Home",
		author: "Satoshi Gogo",
		imageUrl: "the-way-home",
		url: "BV19s411L7P5",
	},
	{
		name: "Waiting For The Wind",
		author: "Satoshi Gogo",
		imageUrl: "waiting-for-the-wind",
		url: "BV13W411x7i6",
	},
	{
		name: "The Capital",
		author: "Satoshi Gogo",
		imageUrl: "the-capital",
		url: "BV1vW411J792",
	},
	{
		name: "Love Under The Moon",
		author: "Satoshi Gogo",
		imageUrl: "love-under-the-moon",
		url: "BV1CW411n7Jm",
	},
]
export {
	Works,
	OpenSourceProjects,
	Blog,
	SONG_BASEURL,
	Songs,
	Movies,
	MOVIE_BASEURL,
	Music,
	MUSICVIDEO_BASEURL
};
