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

// PUT (update) the DB content -- doesnt work yet
export const putDb = async (content) => {
  // Create connection
  const txtEditorDb = await openDB('jate', 1);
  // Create (configured) transaction
  const transaxn = txtEditorDb.transaction('jate', 'readwrite');
  // Open object store
  const store = transaxn.objectStore('jate');
  // Update the store with new content
  const request = store.put({ value: content });  //something wrong here?
  // Set result to a variable and log it
  const result = await request;
  console.log('Updated the database', result);
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
    // Set result to a variable, log & return it
    const result = await request;
    console.log('result.value', result);
    return result;
};

initdb();
