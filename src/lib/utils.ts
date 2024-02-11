import axios from "axios";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getPosts = async () => {
  const response = await axios.get("http://localhost:3000/api/posts");
  return response.data;
}

