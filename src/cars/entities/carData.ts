export type carDataType = {
  id: number;
  carName: string;
  carNumber: string;
  carStatus: string;
};

export const carData: carDataType[] = [
  { id: 0, carName: '모닝', carNumber: '12가1234', carStatus: 'incompleted' },
  { id: 1, carName: '소나타', carNumber: '37하1784', carStatus: 'incompleted' },
  {
    id: 2,
    carName: '콩순이자동차',
    carNumber: '56육1234',
    carStatus: 'completed',
  },
  {
    id: 3,
    carName: '람보르기니',
    carNumber: '29나9004',
    carStatus: 'incompleted',
  },
  { id: 4, carName: '벤츠', carNumber: '45가6004', carStatus: 'completed' },
  {
    id: 5,
    carName: '연습용카트',
    carNumber: '45가6004',
    carStatus: 'completed',
  },
  { id: 6, carName: '슈퍼카', carNumber: '45가6004', carStatus: 'completed' },
  { id: 7, carName: '스파크', carNumber: '45가6004', carStatus: 'completed' },
  {
    id: 8,
    carName: '사이버트럭',
    carNumber: '45가6004',
    carStatus: 'completed',
  },
  {
    id: 9,
    carName: '이마트카트',
    carNumber: '45가6004',
    carStatus: 'completed',
  },
  { id: 10, carName: '인력거', carNumber: '45가6004', carStatus: 'completed' },
];
