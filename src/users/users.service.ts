import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { userData } from './entities/users';

// Test 09/25/17:34
@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    const { id, nickName, loginId, password } = createUserDto;
    // 값을 안넣어준 경우 허용안함
    if (!id || !nickName || !loginId || !password) return '유저 만들기 실패';
    const target = userData.find((v) => v.id == +id || v.nickName == nickName);
    // 중복된 값인 경우(id가 같거나 nickName이 이미 있는 경우) 허용안함
    // POST하려는 ID나 carNumber가 carData에 있으면 그 값이 result에 할당되고, 없으면 undefined
    if (target) return 'id 또는 nickName이 중복됩니다.';
    userData.push({ id, nickName, loginId, password });
    return `${id}번인 ${nickName}(이)가 등록되었습니다.`;
  }

  findAll() {
    return userData;
  }

  findOne(id: number) {
    const target = userData.find((v) => v.id == +id);
    if (!target) return `그런 ID는 없습니다.`;
    return target;
  }

  update(updateUserDto: UpdateUserDto) {
    const { id, nickName, loginId, password } = updateUserDto;
    if (!id || !nickName || !loginId || !password) return '유저 만들기 실패';
    const index = userData.findIndex((v) => v.id === +id);
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
  remove(id: number) {
    const index = userData.findIndex((v) => v.id === +id);
    // findIndex 는 없으면 -1을 반환함
    if (index == -1) return `해당 ID:${id}는 존재하지 않습니다.`;
    userData.splice(index, 1); // 원본 배열에서 제거
    return `해당 ID:${id}는 삭제되었습니다.`;
  }
}
