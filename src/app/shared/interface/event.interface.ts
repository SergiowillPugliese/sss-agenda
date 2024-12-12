export interface EventData {
  title: string;
  start: Date | null;
  borderColor?: string;
  locationName?: string;
  locationPos?: string;
  choristers?: Chorister[];
  solisters?: Solister[];
  dressCode?: string;
}

export interface FirebaseEventData {
  title: string;
  data: DateEvent;
  borderColor: string;
  locationName: string;
  locationPos: string;
  choristers: Chorister[];
  solisters: Solister[];
  dressCode: string;
}

export interface Chorister {
  name: string;
  role: string;
}

export interface Solister {
  name: string;
  songs: string[];
}

export interface DateEvent {
  seconds: number;
  nanoseconds: number;
}

