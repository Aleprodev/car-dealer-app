export interface CarsResponse {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: Car[];
}

export interface Car {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
}

export interface VehicleDataPath {
  makeId: string;
  year: string;
}

export interface VehicleDataResponse {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: VehicleDetails[];
}

export interface VehicleDetails {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}
