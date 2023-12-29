import { initializeApp as initializeAdmin, cert, getApps, getApp } from 'firebase-admin/app';
import { getFirestore as getAdminFirestore } from 'firebase-admin/firestore';

export const app = getApps().length ? getApp() : initializeAdmin({
    credential: admin.credential.cert({
        client_email: process.env.FIREBASE_CLIENT_EMAIL,
        private_key: process.env.FIREBASE_PRIVATE_KEY,
        project_id: 'julia-firestack-bugbash'
    })
});

export const firestore = getAdminFirestore(app);

export const messageSnapshots = firestore
    .collection("messages")
    .orderBy('createdAt')
    .limitToLast(100)
    .get()
    .then(it => it.docs);