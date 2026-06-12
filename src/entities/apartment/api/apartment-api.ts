import { Apartment } from "../model/types";

const API_URL = "http://localhost:3001";

export const getApartments = async (params?: {
  search?: string;
  rooms?: string;
  minPrice?: string;
  maxPrice?: string;
}): Promise<Apartment[]> => {
  const res = await fetch(`${API_URL}/apartments`, { cache: "no-store" });
  let data: Apartment[] = await res.json();

  if (params?.search) {
    data = data.filter((a) =>
      a.title.toLowerCase().includes(params.search!.toLowerCase()),
    );
  }
  if (params?.rooms) {
    data = data.filter((a) => a.rooms === Number(params.rooms));
  }
  if (params?.minPrice) {
    data = data.filter((a) => a.price >= Number(params.minPrice));
  }
  if (params?.maxPrice) {
    data = data.filter((a) => a.price <= Number(params.maxPrice));
  }

  return data;
};

export const getApartmentById = async (
  id: string,
): Promise<Apartment | null> => {
  const res = await fetch(`${API_URL}/apartments/${id}`, { cache: "no-store" });
  if (!res.ok) return null;
  return res.json();
};
