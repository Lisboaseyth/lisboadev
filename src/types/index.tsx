export type Techs = {
  image: string;
  name: string;
  color: string;
  text: string;
}

export type Project = {
  image: string;
  name: string;
  description: string;
  techs: string[];
  link: string;
}

export type ProjectId = {
  title: string;
  type: string;
  logo: string;
  description: string;
  techs: TechId[];
  screenshots: Screenshots[];
  linkGit: string;
}

export type TechId = {
  name: string;
  image: string;
}

export type Screenshots = {
  original: string;
  thumbnail: string;
  description: string;
}

export type Jobs = {
  name: string;
  position: string;
  data: string;
  description: string;
  image: string;
  techs: string[];
}

export type EmailContact = {
  name: string;
  subject: string;
  email: string;
  message: string;
}