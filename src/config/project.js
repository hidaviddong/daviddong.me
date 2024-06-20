const Works = [
	{
		name: "Large Language Model",
		description: "Medical field chat application.",
		href: "/project/llm",
		background: "/llm.webp",
	},
	{
		name: "Data Visualization",
		description: "Chart and 3D models.",
		href: "/project/data-visualization",
		background: "/data-visualization.webp",
	},
	{
		name: "Hybrid Mobile App",
		description: "QQ Music livestreaming Room.",
		href: "/project/tme",
		background: "/tme.webp",
	},
];

const SideProjects = [
	{
		name: "Comments",
		description: "Add comments to your website.",
		href: "/project/comments",
		background: "/comments.webp",
	},
	{
		name: "daviddong.me",
		description: "My website.",
		href: "/project/website",
		background: "/daviddong.webp",
	},
];

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

export { Works, SideProjects, SONG_BASEURL, Songs, Movies, MOVIE_BASEURL };
