import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { findUserByEmail } from "@/firebase/repositories/UserRepository";
/**
 * @description
 * Controller que será executada quando um POST na rota /api/login for login
 */
export async function POST(request: NextRequest) {
    const { email, password } = await request.json();

    const user = await findUserByEmail(email);

    if (!user) return NextResponse.json({error: "Usuário ou senha inválidos"}, {status: 400});

    const senhaValida = await bcrypt.compare(password, user.password);

    if (!senhaValida) return NextResponse.json({error: "Usuário ou senha inválidos"}, {status: 400});

    const accessToken = jwt.sign({ id: user.userId, email: user.email, name: user.name }, process.env.TOKEN_SECRET!, {
        expiresIn: "10h",
      });
    
  return NextResponse.json({ token: accessToken }, { status: 200 });
}
