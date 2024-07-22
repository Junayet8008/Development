import { Key } from "react";

export interface Provider {
  providerId: string;
  wholeName: string;
  photoUrl?: string;
  starRatingAverage: number;
  starRatingCount: number;
  insurances: [string];
  specialties: [string];
  locations: [Location];
}

interface Address {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  zip: string;
}

interface Location {
  phone: string;
  practiceName: string;
  address: Address;
  distance: number;
}
