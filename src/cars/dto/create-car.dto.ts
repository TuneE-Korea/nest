// DTO: 프론트 => 백으로 전달해주는 양식 같은 것

export class CreateCarDto {
  id: number;
  carNumber: string;
  carName: string;
  carStatus: string;
}
