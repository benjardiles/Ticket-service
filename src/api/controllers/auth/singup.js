import supabase from "../../config/supabase.js";

export const signup = async (req, res) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) return res.status(400).json({ error: error.message });

  res.json({ user: data.user });
};