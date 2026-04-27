import { tesloApi } from "@/api/tesloApi"
import type { AuthResponse } from "../interfaces/auth.response";


export const registroAction = async (fullName: string, email: string, password: string): Promise<AuthResponse> => {
    try {
        const { data } = await tesloApi.post("/auth/register", {
            fullName,
            email,
            password
        })

        return data;
    } catch (error) {
        console.error("Registro error:", error);
        throw error;
    }
};