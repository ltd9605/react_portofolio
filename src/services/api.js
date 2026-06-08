import { supabase } from '../config/supabaseClient';

export const getProjects = async () => {
  const { data, error } = await supabase.from('projects').select('*');
  if (error) throw error;
  return data;
};

export const getCertificates = async () => {
  const { data, error } = await supabase.from('certificates').select('*');
  if (error) throw error;
  return data;
};

export const insertMessage = async (messageData) => {
  const { data, error } = await supabase.from('Message').insert([messageData]);
  if (error) throw error;
  return data;
};
