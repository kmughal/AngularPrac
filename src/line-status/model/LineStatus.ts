interface RootObject {
  '$type': string;
  id: string;
  name: string;
  modeName: string;
  disruptions: any[];
  created: string;
  modified: string;
  lineStatuses: LineStatus[];
  routeSections: RouteSection[];
  serviceTypes: ServiceType[];
  crowding: Crowding;
}

interface Crowding {
  '$type': string;
}

interface ServiceType {
  '$type': string;
  name: string;
  uri: string;
}

interface RouteSection {
  '$type': string;
  name: string;
  direction: string;
  originationName: string;
  destinationName: string;
  originator: string;
  destination: string;
  serviceType: string;
  validTo: string;
  validFrom: string;
}

interface LineStatus {
  '$type': string;
  id: number;
  statusSeverity: number;
  statusSeverityDescription: string;
  created: string;
  validityPeriods: ValidityPeriod[];
  lineId?: string;
  reason?: string;
  disruption?: Disruption;
}

interface Disruption {
  '$type': string;
  category: string;
  categoryDescription: string;
  description: string;
  affectedRoutes: AffectedRoute[];
  affectedStops: AffectedStop[];
  closureText: string;
}

interface AffectedStop {
  '$type': string;
  naptanId: string;
  stationNaptan: string;
  status: boolean;
  id: string;
  commonName: string;
  lat: number;
  lon: number;
}

interface AffectedRoute {
  '$type': string;
  id: string;
  name: string;
  direction: string;
  originationName: string;
  destinationName: string;
  routeSectionNaptanEntrySequence: (RouteSectionNaptanEntrySequence | RouteSectionNaptanEntrySequence2)[];
}

interface RouteSectionNaptanEntrySequence2 {
  '$type': string;
  ordinal: number;
  stopPoint: StopPoint2;
}

interface StopPoint2 {
  '$type': string;
  naptanId: string;
  modes: any[];
  icsCode: string;
  stationNaptan: string;
  lines: any[];
  lineGroup: any[];
  lineModeGroups: any[];
  status: boolean;
  id: string;
  commonName: string;
  placeType: string;
  additionalProperties: any[];
  children: any[];
  lat: number;
  lon: number;
  hubNaptanCode?: string;
}

interface RouteSectionNaptanEntrySequence {
  '$type': string;
  ordinal: number;
  stopPoint: StopPoint;
}

interface StopPoint {
  '$type': string;
  naptanId: string;
  modes: any[];
  icsCode: string;
  stationNaptan: string;
  lines: any[];
  lineGroup: any[];
  lineModeGroups: any[];
  status: boolean;
  id: string;
  commonName: string;
  placeType: string;
  additionalProperties: any[];
  children: any[];
  lat: number;
  lon: number;
}

interface ValidityPeriod {
  '$type': string;
  fromDate: string;
  toDate: string;
  isNow: boolean;
}