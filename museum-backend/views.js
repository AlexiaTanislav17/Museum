const db = require("./database.js")

const getAllPaintings = async () => {
    con = await db.connection()
    let [result,fields] = await con.execute(`SELECT * FROM Paintings`)
    con.end()
    return result;
}

const getPaintingByid = async (id) => {
    con = await db.connection()
    let [result,fields] = await con.execute(`SELECT * FROM Paintings WHERE id=${id}`)
    con.end()
    return result;
}

const postPainting = async (data) => {
    con = await db.connection()
    let [result,fields] = await con.execute(`UPDATE Paintings
                                            SET name = '${data.name}', age = ${data.year}, class = '${data.asrtist}'
                                            WHERE id=${id};')`)
    con.end()
}

const deletePainting = async (id) => {
    con = await db.connection()
    await con.execute(
        `DELETE FROM Paintings WHERE id=${id}`
    )
    con.end()
}

const addPainting = async (data) => {
    con = await db.connection()
    let [result,fields] = await con.execute(`INSERT INTO Paintings(name,year,artist) VALUES
                                            ('${data.name}', ${data.year}, '${data.artist}')`)
    con.end()
}


module.exports = {
    
}