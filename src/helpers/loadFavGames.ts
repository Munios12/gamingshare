import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadFavGames = async (uid: string) => {
  if (!uid) throw new Error("El UID del usuario no existe");

  const collectionRef = collection(FirebaseDB, `${uid}/gaming-share/favlist`);
  const docs = await getDocs(collectionRef);

  const games: any = [];
  docs.forEach((doc) => {
    games.push({ ...doc.data() });
  });

  return games;
};
