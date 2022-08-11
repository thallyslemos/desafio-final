// Table é uma interface para receber vehicleData da api para consumir na tabela
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
  vehicleData: Tables;
}
