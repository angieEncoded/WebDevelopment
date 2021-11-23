import Dexie from 'dexie';

const db = new Dexie('animals');
db.version(1).stores({
    animals: `id, name, type`
});

export default db;