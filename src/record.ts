export {};

type Prefectures = 'Tokyo' | 'Osaka' | 'Fukuoka' | 'Shiga';

type Covid19InfectionInfo = {
  kanji_name: string;
  conifirmed_cases: number;
};

const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanji_name: '東京', conifirmed_cases: 1960 },
  Osaka: { kanji_name: '大阪', conifirmed_cases: 800 },
  Fukuoka: { kanji_name: '福岡', conifirmed_cases: 500 },
  Shiga: { kanji_name: '滋賀', conifirmed_cases: 200 },
};
