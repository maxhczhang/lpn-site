export interface Brother {
  img: string;
  name: string;
  logo?: string;
  company?: string;
  width?: string;
}

export interface CSuiteMember {
  img: string;
  name: string;
  title: string;
  logo?: string;
  company?: string;
  width?: string;
}

export interface Director {
  img: string;
  name: string;
  title: string;
  logo?: string;
  company?: string;
  width?: string;
}

export interface Profile {
  linkedIn: string;
  homeTown: string;
  year: string;
  class: string;
  major: string;
  minor: string;
  emphasis: string;
  practice: string;
  pronouns: string;
  experience: Record<string, string>;
  campusInvolvements: Record<string, string>;
  interests: string[];
  whyLPN: string;
  img: string;
  company?: string;
  logo?: string;
}

export interface RushEvent {
  title: string;
  date: string;
  time: string;
  location: string;
  dressCode: string;
  description: string;
  calendly?: string;
}

export interface Fact {
  answer: string;
  title: string;
  link: string;
}

export interface CoreValue {
  title: string;
  description: string;
}

export interface ChartCategory {
  data: { title: string; value: number; color: string }[];
  lightened: string[];
}

export interface GalleryPhoto {
  img: string;
  cols: number;
  rows: number;
  title?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
