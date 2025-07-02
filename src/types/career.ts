
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