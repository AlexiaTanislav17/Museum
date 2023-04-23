DROP TABLE IF EXISTS Paintings;
DROP TABLE IF EXISTS Artists;

CREATE TABLE Artists (
	id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    biography VARCHAR(1000) NOT NULL
);

CREATE TABLE Paintings (
	id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
    title VARCHAR(255) NOT NULL,
    year INTEGER NOT NULL,
    image VARCHAR(256) NOT NULL,
    artist INTEGER NOT NULL,
    
    FOREIGN KEY (artist) REFERENCES Artists(id)
);

INSERT INTO Artists VALUES
		(1, "Fernando Botero", "he died"),
        (2, "Francisco Goya", "he died"),
        (3, "Salvador Dali", "he died");

INSERT INTO Paintings(id, title, artist, year, image) VALUES
		(1, "The Great Feast", (SELECT id FROM Artists WHERE name="Fernando Botero"), 1966, "/img/the-great-feast.webp"),
        (2, "Saturn devouring his son", (SELECT id FROM Artists WHERE name="Francisco Goya"), 1823, "/img/devouring-his-son.jpg"),
        (3, "The Hallucinogenic Toreador", (SELECT id FROM Artists WHERE name="Salvador Dali"), 1942, "/img/the-hallucinogenic-toreador.png");

SELECT title, year, image, Artists.name FROM Paintings JOIN Artists ON artist = Artists.id;
