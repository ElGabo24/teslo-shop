import type { User } from "@/interface/user.interface";

// Login, Register, Check Status
export interface AuthResponse {
    user: User;
    token: string;
}