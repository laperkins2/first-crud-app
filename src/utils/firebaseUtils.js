import {
  collection,
  getDocs,
  addDocs,
  updateDocs,
  deleteDocs,
} from 'firebase/firestore';
import { db } from '/firebase.config.js';

async function getAllDocuments(collectionName) {
  const querySnapShot = await getDocs(collection(db, collectionName));
  const documents = [];

  querySnapShot.forEach((doc) => {
    documents.push({ id: doc.id, ...doc.data() });
  });
  console.log(documents);

  return documents;
}

async function addDocument(collectionName, data) {
  const refDocs = await addDocs(collection(db, collectionName), data);
  return refDocs.id;
}

async function updateDocument(collectionName, docId, data) {
  const refDocs = collection(db, collectionName).doc(docId);
  await updateDocs(refDocs, data);
}

async function deleteDocument(collectionName, docId) {
  const refDocs = collection(db, collectionName).doc(docId);
  await deleteDocs(refDocs);
}

export { getAllDocuments, addDocument, updateDocument, deleteDocument };
