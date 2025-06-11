INSERT INTO Users (email, password, firstName, lastName, username) VALUES
("bellamoreno05@icloud.com", "B22y11@2005", "Bella", "Moreno Eugenio", "bellamrno"),
("juan@gmail.com", "patata", "Juan", "González Martínez", "juanito");

INSERT INTO Artists (nombre, avatarUrl) VALUES
("Recycled J", "https://imgs.search.brave.com/sp6Jh2wJVVx6S_2N015gUoxc7vA_MLqjPoEA0vQ3DJ4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vZXMucm9s/bGluZ3N0b25lLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NS8wMi9MYS1sZXll/bmRhLWRlLVJlY3lj/bGVkLUotMi5qcGc_/cmVzaXplPTY2OSwx/MDAwJnNzbD0x"),
("D.Valentino", "https://th.bing.com/th/id/OIP.oI7KmBxzIvC_SpGNOL7F6QHaHa?rs=1&pid=ImgDetMain"),
("rusowsky", "https://th.bing.com/th/id/OIF.Hiio8jDGRiFoDbqqtRCpqQ?o=7rm=3&rs=1&pid=ImgDetMain"),
("L'Haine", "https://s1.ppllstatics.com/larioja/www/multimedia/202302/06/media/cortadas/80521071-kCbF--1248x770@La%20Rioja.jpg"),
("Judeline", "https://th.bing.com/th/id/OIP.Cw_go63iNEpfz2IJ2IhrkwHaHa?rs=1&pid=ImgDetMain"),
("Hoke", "https://th.bing.com/th/id/OIP.yAADINkA1YnjvN010ZQhIQHaEK?rs=1&pid=ImgDetMain"),
("Juicy BAE", "https://i.scdn.co/image/ab6761610000e5eb72d74dd3c4123d648cf54cae"),
("Teo Lucadamo", "https://th.bing.com/th/id/OIP.x2gkvZPrG2lsy0GZyFVAFQHaE8?rs=1&pid=ImgDetMain"),
("Delaossa", "https://th.bing.com/th/id/OIP.dkMIF9bx7xQjW1gQJrzTqgHaHa?rs=1&pid=ImgDetMain"),
("Bon Calso", "https://th.bing.com/th/id/OIP.aevQKYZmlv-T_z19zDJcdQHaHa?rs=1&pid=ImgDetMain"),
("Sticky M.A.", "https://images.genius.com/c4f7ed657749c83dc9f0788b2061339d.1000x1000x1.jpg"),
("Diego 900", "https://i.scdn.co/image/ab6761610000e5ebb3e756cc0aa9bd3a8100c6d0");

INSERT INTO Album (nombre, url, fecha_publicacion, spotify_id, destacado, artistaId) VALUES
('San Jorge', 'https://los40.com/resizer/v2/2RORRGCAZVBR7LNXLZDZVYRHYE.jpg?auth=686548cfa6da94f573eee37af12b8f51761e04e5bbbfe619668b6626edc20e60&quality=70&width=706&height=706&focal=1158,1695', '2025-05-23', '5SMgH661iAfJixb3gVRtH5', TRUE, 1),
('CASANOVA', 'https://myipop.net/wp-content/uploads/2023/10/casanova-deluxe.jpg', '2023-06-02', '5FCBY0PBrrrPLJVyJIVRxt', FALSE, 1),
('City Pop', 'https://th.bing.com/th/id/OIP.bw7c3inQnJK1DIZyBPb01QHaHa?rs=1&pid=ImgDetMain', '2019-02-15', '249z3MS2m8SeEeDuoDVjWB', FALSE, 1),
('Oro Rosa', 'https://th.bing.com/th/id/R.6aec45937a9012e9c54febf59368e976?rik=I3HbgeAIm3Zrtw&riu=http%3a%2f%2fmp3.hhgroups.com%2falbumes%2fRecycled-J-Oro-rosa-49598_front.jpg&ehk=kw%2bMm%2f1QlO5ylVR8dQmWp1WaW6VYhm1BVteH0wks0q0%3d&risl=&pid=ImgRaw&r=0', '2017-09-29', '6GOzPolr5FyuTLeS29L0eQ', FALSE, 1),
('Milagro', 'https://th.bing.com/th/id/R.f783aeb3283e52cd2316037a458f979e?rik=vLU0yU%2bC4YWDRQ&riu=http%3a%2f%2fmp3.hhgroups.com%2falbumes%2fRecycled-J-y-One-Path-Milagro-48503_front.jpg&ehk=gwp6ypphPlWUfz1LPGAB98smJ%2fgiAnuiCttbNj7P3pM%3d&risl=&pid=ImgRaw&r=0', '2017-02-27', '6P2wHVks69uYQW8zXldxGm', FALSE, 1),
('B.L.O.W.', 'https://th.bing.com/th/id/R.ad3a79dda79df1ba21b7b159aa59b285?rik=LeRryX4gLt1QZA&riu=http%3a%2f%2fmp3.hhgroups.com%2falbumes%2fRecycled-J-y-Ezzem-B.L.O.W.-45322_front.jpg&ehk=1CYr1xgpYtQishEjphcYB7UvwDjWT9LzpHgjXh0r2QA%3d&risl=&pid=ImgRaw&r=0', '2016-02-06', '47lbWPw68zNutwEM70t0Uc', FALSE, 1),
('Oasis', 'https://i.ytimg.com/vi/EeUnf98tH3o/hqdefault.jpg', '2015-08-10', '3HxbKOP6n8HWhdsOaoJzkC', FALSE, 1),

('Ciao!', 'https://th.bing.com/th/id/OIP.qoh7puAkQB7Mf9zyms1KnwHaHa?rs=1&pid=ImgDetMain', '2025-02-15', '10yYYzdkRsTboBKxXLd1Ft', TRUE, 2),
('Rosa&Rojo', 'https://images.genius.com/bce600d232d859234cba07e6ff8703b5.1000x1000x1.png', '2024-10-18', '5jSAThFjToZdNUWXSMgXuO', TRUE, 2),
('Sweet Dreamz 2', 'https://t2.genius.com/unsafe/300x300/https://images.genius.com/3842f2b22af94d345d10f7238c6eaace.300x300x1.jpg', '2023-02-14', '3sU5CuVLirRWGq698ok3T3', FALSE, 2),

('DAISY', 'https://imgs.search.brave.com/jtteLpXQjGOqlPhQeifclhe1lIRmLWjLgJBzPN4ErZQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vZXMucm9s/bGluZ3N0b25lLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NS8wNi9ydXNvd3Nr/eS1kZXNtaWVudGUt/dGVvcmlhcy1zb2Jy/ZS1EQUlTWS1hdW5x/dWUtbGUtcGFyZWNl/bi1hdGluYWRhcy04/LmpwZz9yZXNpemU9/NjUwLDY1MCZzc2w9/MQ', '2025-05-23', '5wx81wPWrERyW9ZHD5r8CI', TRUE, 3),

('CONCRETO', 'https://images.genius.com/5305f77e31d0e342978bb4c2ee3a3ad8.1000x1000x1.png', '2025-02-20', '1ESilbH021Wgb5T5ktDY6F', TRUE, 4),
('DE LA FORMA EN QUE YO QUIERO', 'https://cdn-p.smehost.net/sites/5b3bac59eb36401694af3a241173447f/wp-content/uploads/2023/03/b3b59bff-4cda-440b-bdbc-e57568c468dd.jpg', '2023-03-17', '1CQP9Yvc2Bse1ajynd7nue', TRUE, 4),
('PATAGONIA', 'https://th.bing.com/th/id/R.d69a6ed697131a9adcf8d63f79ff7471?rik=HLuJqDq2f52fkg&pid=ImgRaw&r=0', '2021-03-26', '3JjSWhes0uMj7k2QzFozgG', FALSE, 4),
('Autobús Noctámbulo', 'https://t2.genius.com/unsafe/600x600/https://images.genius.com/8e130f6c5bfae2a4af1b1ec16b159130.640x640x1.jpg', '2019-05-24', '6xXcTWIgVsKU5J3y0DfTNi', FALSE, 4),

('Bodhiria', 'https://www.lahiguera.net/musicalia/artistas/judeline/disco/13809/portada-m.jpg', '2024-10-24', '3fVXh36WypsZR2JGathvkq', TRUE, 5),

('TRES CREUS', 'https://bing.com/th/id/OIP.JJsj39VkoJvyn-xsdcoHJAHaHa?cb=thvnextc2&rs=1&pid=ImgDetMain', '2024-12-18', '3XBIEuPt853rX8Fn5DbG5s', TRUE, 6),
('BBO', 'https://th.bing.com/th/id/OIP.pdRp65AZMW3BxEuvXQjKTAHaHa?rs=1&pid=ImgDetMain', '2022-09-15', '0ofRuEkUDbOtzmxqeZs8Pw', TRUE, 6),

('El Secreto', 'https://www.lahiguera.net/musicalia/artistas/varios/disco/14216/juicy_bae_el_secreto-portada.jpg', '2025-04-25', '4NJFWpVWPgPvrciytpxOvr', TRUE, 7),
('Antes de Conocerte (Parte I: Premonición)', 'https://bing.com/th/id/OIP.aajulKx4y-p7UwaVpGYhUgHaHa?cb=thvnextc2&rs=1&pid=ImgDetMain', '2023-05-12', '3m6TsytKnxFmghjbFWLraO', FALSE, 7),
('PTSD', 'https://th.bing.com/th/id/OIP.gHuA8yuUdqSCjz5KjHUi2AHaHa?rs=1&pid=ImgDetMain', '2022-04-11', '3uCDoXLQZnDAck1R6Y0Tuk', TRUE, 7),
('La Noche Ke Me Muera', 'https://static.qobuz.com/images/covers/mc/ew/d5r8wwux2ewmc_600.jpg', '2020-07-31', '7H9OYSVMYR64XE9BOa2V8W', FALSE, 7),

('El Dilema Del Rapero Blanco', 'https://th.bing.com/th/id/OIP.hxVjO9hcIgK_fi49bX-vxwHaHa?rs=1&pid=ImgDetMain', '2025-03-20', '6ookinzNsskMsBDiifBvbD', TRUE, 8),
('Lucadamnson: Fuera de su jaula', 'https://t2.genius.com/unsafe/600x600/https%3A%2F%2Fimages.genius.com%2F5f953996c708311ea8984cdd4416581b.1000x1000x1.png', '2023-06-15', '12hXhnTMvhMjLQA0QrwI3l', FALSE, 8),

('La Madrugá', 'https://www.lahiguera.net/musicalia/artistas/varios/disco/14142/delaossa_la_madruga-portada.jpg', '2025-03-20', '3Au0IW8JlUTwsvT4Ym6yL7', TRUE, 9),
('Playa Virginia', 'https://bing.com/th/id/OIP.PpJWHqT7G9_Irw_K_j9Y_AHaGe?cb=thvnextc2&rs=1&pid=ImgDetMain', '2022-10-28', '5uixDevlvCeyO7Ns1KYHp9', FALSE, 9),
('Un Perro Andaluz', 'https://bing.com/th/id/OIP.m0s6537k76BjJYo3BipqzQHaHa?cb=thvnextc2&rs=1&pid=ImgDetMain', '2019-04-28', '08Pq65v9n2sUoJYLQPGhC8', FALSE, 9),

('Número 7', 'https://images.genius.com/a3c98401bb029cdf69d8abd1fd9b47b4.1000x1000x1.png', '2025-02-07', '0TFFjqNMABn28kZ4L7wnlO', TRUE, 10),
('OUTTA CONTROL', 'https://images.genius.com/dd2df4e8cb4ef338528158238cbcd92c.1000x1000x1.png', '2023-11-03', '0elCd0SVG4EueggCWWiIeN', FALSE, 10),
('Love Me Not', 'https://bing.com/th/id/OIP.W1uvkcrSRQseSdnNfy6PuAHaHa?cb=thvnextc2&rs=1&pid=ImgDetMain', '2022-10-21', '4SjoEMOMjEQCMxuNyFvouz', FALSE, 10),
('OUTTA MY HEAD', 'https://cdn.themedizine.com/2022/02/Bon-Calso-Outta-My-Head.jpg', '2022-01-28', '1ejsFFhUPkN9zAO3d00wtc', TRUE, 10),
('Feelings Matter', 'https://t2.genius.com/unsafe/600x600/https://images.genius.com/e4fff53300d073cffd7e6b7ee1ea10ac.625x625x1.jpg', '2019-08-06', '5oTyvqojyA6NYY01NOXL8E', FALSE, 10),

('Las Pegajosas Aventuras de Sticky M.A. II (Pt.1: La Maldición de Stickson)', 'https://bing.com/th/id/OIP.5EK3hWVK1pvnhRbon1fsPgHaHa?cb=thvnextc2&rs=1&pid=ImgDetMain', '2024-05-31', '1luFyghpTy3c14jUALY9m9', TRUE, 11),
('Corazón Verde', 'https://highxtar.com/wp-content/uploads/2021/12/thumb-sticky-ma-corazon-verde.jpg', '2021-12-03', '5O46k1hqKji22lvLfcqaxJ', TRUE, 11),
('Konbanwa', 'https://bing.com/th/id/OIP.9dBeGe1i4OqZSboq77R1OgAAAA?cb=thvnextc2&rs=1&pid=ImgDetMain', '2020-06-26', '1i99A0TkK2xd7bH6O8Dgvq', TRUE, 11),
('5ta Dimensión', 'https://bing.com/th/id/OIP.jU0oqmG6wm_fSoA-eb1CogHaHa?cb=thvnextc2&rs=1&pid=ImgDetMain', '2019-07-25', '1C9ntuHw6x28dAA00ZdX7Y', TRUE, 11),
('Las Pegajosas Aventuras de Sticky M.A.', 'https://bing.com/th/id/OIP.PwPZag9LfP0V-EiLWIZ-PgHaHa?cb=thvnextc2&rs=1&pid=ImgDetMain', '2018-05-25', '2OSHvJonf4WkJNv8d75TaB', TRUE, 11),

('La Espalda Del Sol', 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/94/b0/ad/94b0ad4b-e6b4-3db9-03e1-a007bb2ce53f/artwork.jpg/1200x1200bf-60.jpg', '2023-12-15', '0EMwFzMU6W8VlWVy6NKPUu', TRUE, 12),
('Gas Platino', 'https://th.bing.com/th/id/R.45eaba4792a50a25453ab27cdfe84337?rik=NlqRjq5xTasApg&pid=ImgRaw&r=0', '2021-12-15', '5WV7JbIdt1jgjbSVConxK3', FALSE, 12),
('Hypnocil', 'https://bing.com/th/id/OIP.4GYBP_fqbB2xmyFODhjgXgHaHa?cb=thvnextc2&rs=1&pid=ImgDetMain', '2020-04-16', '1wJIt5GasVQYOmIlg4IklV', FALSE, 12),
('El Hotel de Las Luces', 'https://t2.genius.com/unsafe/300x300/https://images.genius.com/a54efe578e5e3700ee2fe4a97cdcf07d.300x300x1.png', '2019-03-08', '19ta1CEO2ny3DZje5mgyVy', FALSE, 12);