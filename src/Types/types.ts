export interface ListType {
  _id: string;
  title: string;
  cards: CardType[];
}

export interface CardType {
  _id: string;
  title: string;
  subject?: string;
  isFollowed?: boolean;
}

export interface CardWithListInfosType {
  listId?: string;
  listTitle?: string;
  card?: CardType;
}
