import { cert, initializeApp as initializeAdmin, getApps, getApp } from 'firebase-admin/app';
import { getFirestore as getAdminFirestore } from 'firebase-admin/firestore';

export const app = getApps().length ? getApp() : initializeAdmin({
    credential: cert({
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: JSON.parse(process.env.FIREBASE_PRIVATE_KEY!),
        projectId: 'julia-firestack-bugbash'
    })
});

export const firestore = getAdminFirestore(app);

export const messageSnapshots = firestore
    .collection("messages")
    .orderBy('createdAt')
    .limitToLast(100)
    .get()
    .then(it => it.docs);