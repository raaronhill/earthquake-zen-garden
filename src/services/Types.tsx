export type Root = {
  site: SiteData;
  profile: ProfileData;
  data: HomeData;
}

export type SiteData = {
  title: string;
  heroImage: string;
  logoImage: string;
}

export type ProfileData = {
  firstName: string;
  lastName: string;
  avatarImage: string;
  phone: string;
  email: string;
  bio: string;
}

export type HomeData = {
  type: string;
  metadata: Metadata;
  features: Feature[];
  bbox: number[];
}

export type Feature = {
  id: string;
  type: string;
  properties: Properties;
  geometry: Geometry;
}

export type Properties = {
  mag: number;
  place: string;
  time: number;
  updated: number;
  tz: number;
  url: string;
  detail: string;
  felt: string;
  cdi: string;
  mmi: string;
  alert: string;
  status: string;
  tsunami: number;
  sig: number;
  net: string;
  code: string;
  ids: string;
  sources: string;
  types: string;
  nst: number;
  dmin: number;
  rms: number;
  gap: number;
  magType: string;
  type: string;
  title: string;
}

export type Geometry = {
  type: string;
  coordinates: number[];
}

export type Metadata = {
  generated: number;
  url: string;
  title: string;
  status: number;
  api: string;
  count: number;
}