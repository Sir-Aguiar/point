import { createPoint, finishPoint, findLastPointByEmail } from "@/firebase/repositories/PointRepository";

export async function BaterPonto(userEmail: string | undefined, userId: string | undefined, observation: string | undefined) {
  const now = new Date();

  if (!observation) observation = "";

  if (userEmail && userId) {
    console.log('bateu')
    
    let LastPoint = await findLastPointByEmail(userEmail);
    


    if(LastPoint){
      if (new Date(LastPoint.joinedAt.seconds * 1000).toLocaleDateString() == now.toLocaleDateString()) {

        if (!LastPoint.leftAt) {

          await finishPoint(LastPoint.pointId, { observation, leftAt: now });

        } else {
          console.log("todos os pontos já batidos");
        }
      } else {
        await createPoint({ userEmail, observation, joinedAt: now });
      } 
    } else {
      await createPoint({ userEmail, observation, joinedAt: now });
    }
    
  }

}

