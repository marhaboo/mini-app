import { Apartment } from "../model/types";

const API_URL = "http://localhost:3001";

export const getApartments = async (): Promise<Apartment[]> => {
  const res = await fetch(`${API_URL}/apartments`, { cache: "no-store" });
  return res.json();
};

export const getApartmentById = async (
  id: string,
): Promise<Apartment | null> => {
  const res = await fetch(`${API_URL}/apartments/${id}`, { cache: "no-store" });
  if (!res.ok) return null;
  return res.json();
};
