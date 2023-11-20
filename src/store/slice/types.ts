export enum EStages {
  Start,
  Playing,
  End,
}

export type ActionPayload = {
  answer: string | undefined;
  option: string;
};
