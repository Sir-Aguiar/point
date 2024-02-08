import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firestore";
import { CreatePointInput, FinishPointInput } from "@/@types/Point";

const PointCollection = collection(firestore, "Points");

const createPoint = async ({ userEmail, joinedAt, observation }: CreatePointInput) => {
  const docRef = await addDoc(PointCollection, { userEmail, joinedAt, observation });
  return docRef;
};

const finishPoint = async (docId: string, { leftAt, observation }: FinishPointInput) => {
  const pointRef = doc(firestore, "Points", docId);

  await updateDoc(pointRef, { leftAt, observation });
};

export { PointCollection, finishPoint, createPoint };
