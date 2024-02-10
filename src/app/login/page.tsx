"use client";

import styles from "./page.module.css";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { LoginUserInput } from "@/@types/User";
import { signIn } from "@/services/user-service";
import { useAuthContext } from "@/contexts/Auth";

export default function Login() {
  const { logIn, isUserAuthenticated } = useAuthContext();
  const [error, setError] = React.useState();
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<LoginUserInput>({ mode: "onChange" });

  const onSubmit = async (data: LoginUserInput) => {
    try {
      const response = await signIn(data);
      console.log(response);
      if (logIn({ token: response.data.token })) {
        return router.replace("/");
      }
    } catch (error: any) {
      console.log(error);
      setError(error.response.data.error);
    }
  };

  useEffect(() => {
    if (isUserAuthenticated) {
      return router.replace("/");
    }
  }, [isUserAuthenticated]);

  return (
    <div className={styles.wraper}>
      <form noValidate onSubmit={handleSubmit(onSubmit)} className={styles.login_form}>
        <h1 className={styles.title}>HomePONTO</h1>
        <div className="d-flex flex-column gap-2">
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <div className="form-floating ">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              {...register("email")}
            />
            <label htmlFor="floatingInput">Email</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              {...register("password")}
            />
            <label htmlFor="floatingPassword">Senha</label>
          </div>
          <div className="px-2">
            <a href="/cadastro" style={{ fontSize: "13px" }}>
              Cadastrar
            </a>
          </div>
        </div>
        <button typeof="submit" className="btn btn-primary p-2" type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
}
