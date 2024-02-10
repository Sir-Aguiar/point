import { LoginUserInput } from "@/@types/User";
import axios from "axios";

async function signIn(data: LoginUserInput) {
    const result = await axios.post('/api/login', data);
    return result
}

export { signIn };