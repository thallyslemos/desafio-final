// vehicleData é uma interface para receber vehicleData da api para consumir na tabela
export interface vehicleDataArray extends Array<vehicleData> {}

export interface vehicleData {
 id: number,
 vin: string,
 odometer: string,
 tirePressure: string,
 status: string,
 batteryStatus: string,
 fuelLevel: string,
 lat: string,
 long: string
}

export interface vehicleDataAPI {
  vehicleData: vehicleDataArray;
}
