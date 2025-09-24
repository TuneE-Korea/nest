import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { userData } from './entities/users';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    const { id, nickName, loginId, password } = createUserDto;
    const target = userData.find((v) => v.id == +id || v.nickName == nickName);
    // POST하려는 ID나 carNumber가 carData에 있으면 그 값이 result에 할당되고, 없으면 undefined
    if (target) return `${id} or ${nickName}이 중복됩니다.`;
    userData.push({ id, nickName, loginId, password });
    return `${id}번인 ${nickName}가 등록되었습니다.`;
  }

  findAll() {
    return userData;
  }

  findOne(id: number) {
    const target = userData.find((v) => v.id == +id);
    if (!target) return `그런 ID는 없습니다.`;
    return target;
  }

  patchOne(updateUserDto: UpdateUserDto) {
    const { id, nickName, loginId, password } = updateUserDto;
    const index = userData.findIndex((v) => v.id === +id);
    console.log(index);
    if (index == -1) return `해당 ${id}는 존재하지 않습니다.`;
    userData[index] = {
      id,
      nickName: nickName || userData[index].nickName,
      loginId: loginId || userData[index].loginId,
      password: password || userData[index].password,
    };
    return `해당 ${id}번 변경되었습니다.`;
  }

  // supabase랑 연동 전이기 때문에 부메랑에서 새로 만든 데이터를 다시삭제하는 작업은 안됨
  // 이 로컬환경에 있는 users.ts를 데이터로써 참조하고 있기때문에 부메랑에서 추가한 데이터가 반영이 안돼서 그럼.
  deleteOne(id: number) {
    const index = userData.findIndex((v) => v.id === +id);
    // findIndex 는 없으면 -1을 반환함
    if (index == -1) return `해당 ${id}는 존재하지 않습니다.`;
    userData.splice(index, 1); // 원본 배열에서 제거
    return `해당 ${id}는 삭제되었습니다.`;
  }
}
