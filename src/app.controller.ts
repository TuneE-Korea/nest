import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/coffee/:id')
  getCoffee(@Param('id') id: string):
    | {
        id: number;
        name: string;
        price: number;
        kcal: number;
      }
    | string {
    const menu = [
      { id: 0, name: '아메리카노', price: 1000, kcal: 0 },
      { id: 1, name: '라떼', price: 2500, kcal: 100 },
      { id: 2, name: '바닐라초코', price: 3500, kcal: 300 },
    ];

    const target = menu.find((v) => v.id == +id);
    if (!target) return '해당 데이터는 없습니다!!!';
    return target;
    // 리턴할때 target이 undefined일 수도 있다고 에러 뜰 수 있다. 그럴땐 타입에 유니온 연산자로 string 넣고 조건문 달아주면됨.
  }

  @Get('/icecream/:id')
  getIcecream(@Param('id') id: string): string {
    const icecreamMenu = ['바닐라', '초코', '딸기'];
    const result = icecreamMenu[+id] || '그런 맛 없음';
    // const targetIce = icecreamMenu.find((v) => v.id == +id);
    return result;
  }

  @Get('/cookie')
  getCookie(): { name: string; price: number; kcal: number } {
    return this.appService.getCookie();
  }
}
