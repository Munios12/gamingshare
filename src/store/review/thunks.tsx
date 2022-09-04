import { Dispatch } from "react";
import { AnyAction } from "@reduxjs/toolkit";
import { addNewReview, loadAllReviews } from "./reviewSlice";
import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { loadReview } from "../../helpers/loadReview";

// export const StartReview = (message: string, idGame: any) => {
//   return async (dispatch: Dispatch<AnyAction>, getState: any) => {
//     const { uid } = getState().auth;

//     const newReview = {
//       author: uid,
//       reviewtext: message,
//       idMessage: "",
//       idGame: idGame,
//     };

//     const setNewReview = doc(
//       collection(FirebaseDB, `${uid}/gaming-share/review`)
//     );

//     newReview.idMessage = setNewReview.id;

//     setDoc(setNewReview, newReview);

//     // dispatch(addNewReview(newReview));
//     dispatch(loadAllReviews(newReview));
//   };
// };

// export const startLoadingReview = () => {
//   return async (dispatch: Dispatch<AnyAction>, getState: any) => {
//     const { uid } = getState().auth;

//     if (!uid) throw new Error("El UID del usuario no existe");

//     const reviewList = await loadReview(uid);
//     dispatch(loadAllReviews(reviewList));
//   };
// };
