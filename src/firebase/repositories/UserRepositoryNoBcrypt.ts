import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firestore";
import { IUser } from "@/@types/User";


const UserCollection = collection(firestore, "User");

const findUserByEmail = async (email: string) => {
  const emailQuery = query(UserCollection, where("email", "==", email));
  console.log(emailQuery)
  const querySnapshot = await getDocs(emailQuery);
  alert(querySnapshot.docs[0])
  if (querySnapshot.size < 1) {
    return null;
  }
  return querySnapshot.docs[0].data() as IUser;
};

export { UserCollection, findUserByEmail };
