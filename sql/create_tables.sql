DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Artists;
DROP TABLE IF EXISTS Album;
DROP TABLE IF EXISTS Shop;

CREATE TABLE Users (
  userId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(256) UNIQUE NOT NULL,
  password VARCHAR(512) UNIQUE NOT NULL,
  firstName VARCHAR(256) NOT NULL,
  lastName VARCHAR(256) NOT NULL,
  username VARCHAR(256) UNIQUE NOT NULL
);

CREATE TABLE Artists (
	artistId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR(100) NOT NULL,
	avatarUrl VARCHAR(512) NOT NULL
);

CREATE TABLE Album (
	albumId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR(100) NOT NULL,
	url VARCHAR(512) NOT NULL,
	fecha_publicacion DATE NOT NULL,
	spotify_id VARCHAR(255) NOT NULL,
	destacado BOOLEAN NOT NULL,
	artistaId INT NOT NULL,
	FOREIGN KEY (artistaId) REFERENCES Artists(artistId)
);

CREATE OR REPLACE VIEW AlbumsWithArtists AS
SELECT 
	m.albumId AS id
	m.nombre AS nombre_album,
	m.fecha_publicacion AS fecha_publicacion,
	m.spotify_id AS spotify_id,
	a.nombre AS nombre_artista,
	m.url AS url_photo,
	m.destacado AS destacado,
	a.avatarUrl AS url_avatar
FROM 
	Album m
JOIN
	Artists a ON m.artistaId = a.artistId
GROUP BY id, nombre_album, url_photo, fecha_publicacion, spotify_id, nombre_artista, url_avatar, destacado
ORDER BY m.fecha_publicacion DESC;

CREATE TABLE Shop (
	elementoId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR(512) NOT NULL,
	url_photo VARCHAR(512) NOT NULL,
	descripcion VARCHAR(1500) NOT NULL,
	stock BOOLEAN NOT NULL,
	artistaId INT NOT NULL,
	FOREIGN KEY (artistaId) REFERENCES Artists(artistId)
)