const { httpError } = require("../helpers/handleError");
const userModel = require("../models/users");
const PORT = process.env.PORT || 3000;
const getItems = async (req, res) => {
	try {
		const listAll = [
			{
				_id: 1,
				name: "The Chain",
				album: "Rumours",
				cover: "https://cloudfront-eu-central-1.images.arcpublishing.com/prisa/M34ABI2EITIZNVSFVQBRSVC3OY.jpg",
				artist: {
					name: "Fleetwood Mac",
					nickname: "Fleetwood Mac",
					nationality: "US",
				},
				duration: {
					start: 0,
					end: 333,
				},
				url: `http://localhost:${PORT}/track.mp3`,
			},
			{
				_id: 2,
				name: "19-2000 (Soulchild Remix)",
				album: "G Sides",
				cover: "https://img.discogs.com/22FWsB2Kn_kJ2N1hzjyeN5dlGtU=/fit-in/600x600/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-33064-1474495477-3989.png.jpg",
				artist: {
					name: "Gorillaz - Soulchild",
					nickname: "Gorillaz - Soulchild",
					nationality: "UK",
				},
				duration: {
					start: 0,
					end: 333,
				},
				url: `http://localhost:${PORT}/track-1.mp3`,
			},
			{
				_id: 3,
				name: "Endlessly She Said",
				album: "Decemberunderground",
				cover: "https://img.discogs.com/fv4a024pRJ267AAljksinYHNUn4=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-702635-1189640493.jpeg.jpg",
				artist: {
					name: "A Fire Inside",
					nickname: "AFI",
					nationality: "US",
				},
				duration: {
					start: 0,
					end: 333,
				},
				url: `http://localhost:${PORT}/track-2.mp3`,
			},
			{
				_id: 4,
				name: "In the End",
				album: "Linkin Park",
				cover: "https://i1.wp.com/www.sopitas.com/wp-content/uploads/2020/10/hybrid-theory.jpeg",
				artist: {
					name: "Linkin Park",
					nickname: "LP",
					nationality: "US",
				},
				duration: {
					start: 0,
					end: 333,
				},
				url: `http://localhost:${PORT}/track-3.mp3`,
			},
			{
				_id: 5,
				name: "7empest",
				album: "Fear Inoculum",
				cover: "https://summainferno.com/wp-content/uploads/2019/08/fearinoculumcover-1565126491-compressed.jpg",
				artist: {
					name: "Tool",
					nickname: "Tool",
					nationality: "US",
				},
				duration: {
					start: 0,
					end: 333,
				},
				url: `http://localhost:${PORT}/track-4.mp3`,
			},
			{
				_id: 6,
				name: "Mr. Fear",
				album: "Bounce into the Music",
				cover: "https://img.discogs.com/41EPmxwXeDkhyRajKgwnQVoOhm0=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-13506702-1560705343-8159.jpeg.jpg",
				artist: {
					name: "Siamés",
					nickname: "Siamés",
					nationality: "AR",
				},
				duration: {
					start: 0,
					end: 333,
				},
				url: `http://localhost:${PORT}/track-5.mp3`,
			},
			{
				_id: 7,
				name: "My Hero",
				album: "The Colour and the Shape",
				cover: "https://wikirock.net/tienda/wp-content/uploads/2020/06/61jn9dLLVYL._SL1500_.jpg",
				artist: {
					name: "Foo Fighters",
					nickname: "Foo Fighters",
					nationality: "US",
				},
				duration: {
					start: 0,
					end: 333,
				},
				url: `http://localhost:${PORT}/track-6.mp3`,
			},
			{
				_id: 8,
				name: "Do I Wanna Know",
				album: "AM",
				cover: "https://img.discogs.com/dCcoVMQ2IUgS_2eAnu9cENT5Hdw=/fit-in/600x598/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4883062-1474755308-2810.jpeg.jpg",
				artist: {
					name: "Arctic Monkeys",
					nickname: "Arctic Monkeys",
					nationality: "UK",
				},
				duration: {
					start: 0,
					end: 333,
				},
				url: `http://localhost:${PORT}/track-7.mp3`,
			},
			{
				_id: 9,
				name: "Solar Sailer",
				album: "TRON: Legacy",
				cover: "https://theworldwentaway.files.wordpress.com/2010/10/daftpunk.png",
				artist: {
					name: "Daft Punk",
					nickname: "Daft Punk",
					nationality: "FR",
				},
				duration: {
					start: 0,
					end: 333,
				},
				url: `http://localhost:${PORT}/track-8.mp3`,
			},
			{
				_id: 10,
				name: "Roses",
				album: "Speakerboxxx/The Love Below",
				cover: "https://www.radiocantilo.com/wp-content/uploads/2020/03/81Wh-vUH7OL._SL1500_.jpg",
				artist: {
					name: "Outkast",
					nickname: "Outkast",
					nationality: "US",
				},
				duration: {
					start: 0,
					end: 333,
				},
				url: `http://localhost:${PORT}/track-9.mp3`,
			},
		];
		res.send({ data: listAll });
	} catch (e) {
		httpError(res, e);
	}
};

const getItem = (req, res) => {};

const createItem = async (req, res) => {
	try {
		const { name, age, email } = req.body;
		const resDetail = await userModel.create({
			name,
			age,
			email,
		});
		res.send({ data: resDetail });
	} catch (e) {
		httpError(res, e);
	}
};

const updateItem = (req, res) => {};

const deleteItem = (req, res) => {};

module.exports = { getItem, getItems, deleteItem, createItem, updateItem };
