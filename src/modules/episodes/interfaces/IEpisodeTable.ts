export interface IData {
  episode: string;
  name: string;
  air_date: string;
}

export interface IEpisodeTable {
  data: IData[];
  isLoading?: boolean;
  title: string;
  id: string;
}
