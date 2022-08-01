export interface Tables extends Array<Table> {}

export interface Table {
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

export interface TabelaAPI {
  vehicledata: Tables;
}
