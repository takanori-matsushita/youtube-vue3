import { fireAuth } from "./config";
import { signOut } from "firebase/auth";

export const signout = () => signOut(fireAuth);