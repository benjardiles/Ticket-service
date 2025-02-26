import supabase from "../../config/supabase.js";

export const loginUser = async (email, password) => {
  return await supabase.auth.signInWithPassword({ email, password });
};

export const registerUser = async (email, password) => {
  return await supabase.auth.signUp({ email, password });
};

export const getAuthenticatedUser = async (token) => {
  return await supabase.auth.getUser(token);
};