import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '반갑다 세상아';
  }
  getCoffee(): string {
    return '아메리카노 꿀맛';
  }
  getIcecream(): string {
    return '아이스크림 꿀맛';
  }
  getCookie(): { name: string; price: number; kcal: number } {
    return { name: '민트쿠키', price: 2500, kcal: 100 };
  }
}
