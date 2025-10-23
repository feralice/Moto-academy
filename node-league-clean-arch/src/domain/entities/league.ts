export interface ILeague {
  id: string;
  name: string;
}

export class League implements ILeague {
  id: string;
  name: string;
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
