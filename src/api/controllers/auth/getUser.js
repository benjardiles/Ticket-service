import supabase from "../../config/supabase.js";

export const getUser = async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "No autorizado" });

  const { data, error } = await supabase.auth.getUser(token);

  if (error) return res.status(401).json({ error: error.message });

  res.json({ user: data.user });
};