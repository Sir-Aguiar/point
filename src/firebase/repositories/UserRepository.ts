import { addDoc, collection, doc, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firestore";
import { CreateUserInput, IUser } from "@/@types/User";
import { hashSync } from "bcrypt";

const UserCollection = collection(firestore, "User");

const createUser = async ({ email, name, password }: CreateUserInput) => {
  const docRef = await addDoc(UserCollection, { email, name, password: hashSync(password, 14) });
  return docRef;
};

const findUserByEmail = async (email: string) => {
  const emailQuery = query(UserCollection, where("email", "==", email));

  const querySnapshot = await getDocs(emailQuery);

  if (querySnapshot.size < 1) {
    return null;
  }

  return { ...querySnapshot.docs[0].data(), userId: querySnapshot.docs[0].id } as IUser;
};

export { UserCollection, createUser, findUserByEmail };
