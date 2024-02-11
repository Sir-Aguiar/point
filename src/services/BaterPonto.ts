import { createPoint, finishPoint, findLastPointByEmail } from "@/firebase/repositories/PointRepository";

export async function BaterPonto(userEmail: string | undefined, userId: string | undefined, observation: string | undefined) {
  const now = new Date();
  if (!observation) observation = "";

  if (userEmail && userId) {
    console.log('bateu')
    
    let LastPoint = await findLastPointByEmail(userEmail);
    
    console.log(LastPoint)


    /* if (new Date(LastPoint!.joinedAt).toLocaleDateString() == now.toLocaleDateString()) {
      if (!LastPoint!.leftAt) {
        await finishPoint(userId, { observation, leftAt: now });
      } else {
        console.log("todos os pontos já batidos");
      }
    } else {
      console.log(userEmail)
      await createPoint({ userEmail, observation, joinedAt: now });
    } */
  }

}

