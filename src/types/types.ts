export interface typeAirport {
  id: number,
  name: string,
  ident: string,
  local_code: string,
  region: string,
  type: string,
  country: string
}

export type typeAirportType = string
export type typeAirportRegion = string
export type typeAirportCountry = string


// export interface typeServerResponse<T> {
//   count: number,
//   next: number,
//   previous: number,
//   data: T[]
// }
