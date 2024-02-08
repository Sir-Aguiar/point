import { createPoint, finishPoint, findLastPointById } from "@/firebase/repositories/PointRepository";


export async function BaterPonto(userEmail: string, id: string, observation: string){
    const now = new Date();
    let LastPoint = await findLastPointById(id);

    if(LastPoint?.joinedAt.toLocaleDateString == now.toLocaleDateString){
        if(!LastPoint.leftAt){
            await finishPoint(id, {observation, leftAt: now});
        }else {
            console.log("todos os pontos já batidos");
        }
    }else{
        createPoint({userEmail,observation,joinedAt:now});
    }


}