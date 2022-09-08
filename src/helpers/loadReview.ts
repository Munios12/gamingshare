import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadReview = async (uid: string) => {
  if (!uid) throw new Error("El UID del usuario no existe");

  const collectionRef = collection(FirebaseDB, `${uid}/gaming-share/review`);

  const docs = await getDocs(collectionRef);

  const reviews: Array<any> = [];

  docs.forEach((doc) => {
    reviews.push({ ...doc.data() });
  });

  return reviews;
};

export const loadAllReview = async () => {
  const allReviews: Array<any> = []; //Conseguir lista de todos los uids desde FB

  allReviews.forEach(async (user) => {
    const userReviews = await loadReview(user.uid);
    allReviews.concat(...userReviews);
  });
};
