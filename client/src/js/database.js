import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  


};

// GET all content from the DB
export const getDb = async () => {
    // Create connection
    const txtEditorDb = await openDB('jate', 1);
    // Create (configured) transaction
    const transaxn = txtEditorDb.transaction('jate', 'readonly');
    // Open object store
    const store = transaxn.objectStore('jate');
    // Get everything in the object store & set it to a variable
    const request = store.getAll();
    // Set resulting data to a variable, log & return it
    const result = await request;
    console.log('result.value', result);
    return result;
};

initdb();
