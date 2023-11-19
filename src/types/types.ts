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

export interface typeFilter {
  type: typeAirportType,
  region: typeAirportRegion,
  country: typeAirportCountry
}
