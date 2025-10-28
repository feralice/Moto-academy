export interface IPlayer {
  id: string;
  name: string;
  email: string;
}

export class Player implements IPlayer {
  id: string;
  name: string;
  email: string;
  constructor(id: string, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

export type NewPlayer = Omit<IPlayer, 'id'>;
