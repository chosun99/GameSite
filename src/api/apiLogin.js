import { apiClient } from "./apiClient";

export const Login = async (data) => {
    return await apiClient({
        method: "post",
        url: `/auth/login`,
        data: data,
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    })
}
