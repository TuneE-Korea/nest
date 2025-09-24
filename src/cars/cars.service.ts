import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
// import { UpdateCarDto } from './dto/update-car.dto';
import { carData } from './entities/carData';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  create(createCarDto: CreateCarDto) {
    const { id, carName, carNumber, carStatus } = createCarDto;
    // console.log(createCarDto);
    // ID 중복 방지
    // 내가 한 방식
    // if (carData.find((v) => v.id == id) != undefined) {
    //   return '이미 등록되어있는 ID입니다.';
    // }

    // 스앵님 방식
    const result = carData.find((v) => v.id == +id || v.carNumber == carNumber);
    // POST하려는 ID나 carNumber가 carData에 있으면 그 값이 result에 할당되고, 없으면 undefined
    if (result) return `${id} or ${carNumber}가 중복됩니다.`;
    carData.push({ id, carName, carNumber, carStatus });
    return `${id}번인 ${carName}가 등록되었습니다.`;
  }

  findAll() {
    return carData;
  }

  findOne(id: number) {
    const result = carData.find((v) => v.id == +id);
    // if (!result) '없음';
    if (!result) {
      return '없음';
    }
    return result;
  }
  deleteOne(id: number) {
    const index = carData.findIndex((v) => v.id === +id);
    if (index == -1) return `해당 ${id}는 존재하지 않습니다.`;
    carData.splice(index, 1); // 원본 배열에서 제거
    return `해당 ${id}는 삭제되었습니다.`;
  }
  patchOne(updateCarDto: UpdateCarDto) {
    const { id, carName, carNumber, carStatus } = updateCarDto;
    const index = carData.findIndex((v) => v.id === +id);
    console.log(index);
    if (index == -1) return `해당 ${id}는 존재하지 않습니다.`;
    carData[index] = {
      id,
      carName: carName || carData[index].carName,
      carNumber: carNumber || carData[index].carNumber,
      carStatus: carStatus || carData[index].carStatus,
    };
    return `해당 ${id}번 변경되었습니다.`;
  }
}
