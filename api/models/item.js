const db = require('../database/connect');

class Item {

    constructor({ item_id, title, content }) {
        this.id = item_id;
        this.title = title;
        this.content = content;
    }

    static async getAll() {
        const response = await db.query("SELECT * FROM item");
        return response.rows.map(p => new Item(p));
    }

    static async getOneById(id) {
        const response = await db.query("SELECT * FROM item WHERE item_id = $1", [id]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate Item.")
        }
        return new Post(response.rows[0]);
    }

    static async create(data) {
        const { title, content } = data;
        let response = await db.query("INSERT INTO item (title, content) VALUES ($1, $2) RETURNING item_id;",
            [title, content]);
        const newId = response.rows[0].item_id;
        const newItem = await Item.getOneById(newId);
        return newItem;
    }

    async update(data){
        const updatedItem = db.query("UPDATE item SET (title, content)=($1, $2) WHERE item_id = $3) RETURNING *;", [title, this.content]);

        if(response.rows.length != 1){
            throw new Error("Not able to update the item")
        }
        return new Item(updatedItem);
    }

    async destroy() {
        let response = await db.query("DELETE FROM itemn WHERE item_id = $1 RETURNING *;", [this.id]);
        return new Item(response.rows[0]);
    }

}

module.exports = Item;
