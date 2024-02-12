import { addDoc, collection, doc, query, getDocs, where, limit, updateDoc, orderBy } from "firebase/firestore";
import { firestore } from "../firestore";
import { CreatePointInput, FinishPointInput, IPoint } from "@/@types/Point";

const PointCollection = collection(firestore, "IPoint");

const createPoint = async ({ userEmail, joinedAt, observation }: CreatePointInput) => {
  const docRef = await addDoc(PointCollection, { userEmail, joinedAt, observation });
  return docRef;
};

const finishPoint = async (docId: string, { leftAt, observation }: FinishPointInput) => {
  const pointRef = doc(firestore, "IPoint", docId);

  await updateDoc(pointRef, { leftAt, observation });
};

const findLastPointByEmail = async (userEmail: string) => {
  const emailQuery = query(PointCollection, where("userEmail", "==", userEmail), orderBy("joinedAt", "desc"), limit(1));
  const querySnapshot = await getDocs(emailQuery);
  if(querySnapshot.docs[0])
  return { ...querySnapshot.docs[0].data(), pointId: querySnapshot.docs[0].id } as IPoint;
  else 
    return undefined;
};

export { PointCollection, finishPoint, createPoint, findLastPointByEmail };
