import { StaticImageData } from 'next/image';
export type CareerType = {
  area:string,
  level:string,
  duration:string,
  system:string,
  schedules:string[],
  titleLabel:string,
  info:string,
  curriculum:string,
}

export type StatisticType = {
  title:string,
  value:string,
  source:string
}

export type StatisticComponentType ={
  data:StatisticType[]
}

export type WorkAreaType = {
  title:string,
  description:string
}

export type RelatedCareerType = {
  cardTitle: string,
  carDescription: string,
  cardImage: StaticImageData | string
  redirectPath: string
}