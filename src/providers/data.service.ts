import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
  data = [
    {
      id: 1,
      name: 'FRISOR',
      address: 'ул. Саксаганского 27'
    },
    {
      id: 1,
      name: 'FRISOR2',
      address: 'ул. Пушкинская 9б'
    },
    {
      id: 1,
      name: 'FRISOR3',
      address: 'ул. Саксаганского 27'
    },
    {
      id: 1,
      name: 'FRISOR4',
      address: 'ул. Пушкинская 9б'
    },
    {
      id: 1,
      name: 'FRISOR5',
      address: 'ул. Саксаганского 27'
    }
  ];

  employees = [
    {
      id: 1,
      firstname: 'Павел',
      lastname: 'Сергеев',
      rank: 'Барбер',
      avatar: 'https://yclients.com/uploads/masters/sm/20151223022502_5948.jpg',
    },
    {
      id: 2,
      firstname: 'Альберт',
      lastname: 'Сергеев',
      rank: 'Барбер',
      avatar: 'https://yclients.com/uploads/masters/sm/20151223022635_2257.jpg',
    },
    {
      id: 3,
      firstname: 'Павел',
      lastname: 'Сергеев',
      rank: 'Барбер',
      avatar: 'https://yclients.com/uploads/masters/sm/20151223022502_5948.jpg',
    },
    {
      id: 4,
      firstname: 'Альберт',
      lastname: 'Сергеев',
      rank: 'Барбер',
      avatar: 'https://yclients.com/uploads/masters/sm/20151223022635_2257.jpg',
    },
    {
      id: 5,
      firstname: 'Павел',
      lastname: 'Сергеев',
      rank: 'Барбер',
      avatar: 'https://yclients.com/uploads/masters/sm/20151223022502_5948.jpg',
    },
  ];

  services = [
    {
      nameCategoty: 'Стрижка',
      services: [
        {
          name: 'Обичная',
          price: '300грн',
        },
        {
          name: 'Необычная',
          price: '300грн',
        },
        {
          name: 'Обичная',
          price: '300грн',
        }
      ]
    },
    {
      nameCategoty: 'Борода',
      services: [
        {
          name: 'Необычная',
          price: '300грн',
        },
        {
          name: 'Обичная',
          price: '300грн',
        },
        {
          name: 'Необычная',
          price: '300грн',
        }
      ]
    },
    {
      nameCategoty: 'Стрижка',
      services: [
        {
          name: 'Обичная',
          price: '300грн',
        },
        {
          name: 'Необычная',
          price: '300грн',
        },
        {
          name: 'Обичная',
          price: '300грн',
        }
      ]
    },
    {
      nameCategoty: 'Стрижка',
      services: [
        {
          name: 'Обичная',
          price: '300грн',
        },
        {
          name: 'Необычная',
          price: '300грн',
        },
        {
          name: 'Обичная',
          price: '300грн',
        }
      ]
    },
    {
      nameCategoty: 'Стрижка',
      services: [
        {
          name: 'Обичная',
          price: '300грн',
        },
        {
          name: 'Необычная',
          price: '300грн',
        },
        {
          name: 'Обичная',
          price: '300грн',
        }
      ]
    },
    {
      nameCategoty: 'Стрижка',
      services: [
        {
          name: 'Обичная',
          price: '300грн',
        },
        {
          name: 'Необычная',
          price: '300грн',
        },
        {
          name: 'Обичная',
          price: '300грн',
        }
      ]
    }
  ];

  bookTimes = [
    {
      datetime: '2017-03-11T20:45:00+04:00',
      seance_length: 900,
      time: '10:15'
    },
    {
      datetime: '2017-03-11T20:45:00+04:00',
      seance_length: 900,
      time: '10:30'
    },
    {
      datetime: '2017-03-11T20:45:00+04:00',
      seance_length: 900,
      time: '11:30'
    },
    {
      datetime: '2017-03-11T20:45:00+04:00',
      seance_length: 900,
      time: '12:30'
    },
    {
      datetime: '2017-03-11T20:45:00+04:00',
      seance_length: 900,
      time: '13:30'
    },
    {
      datetime: '2017-03-11T20:45:00+04:00',
      seance_length: 900,
      time: '14:15'
    },
    {
      datetime: '2017-03-11T20:45:00+04:00',
      seance_length: 900,
      time: '15:30'
    },
    {
      datetime: '2017-03-11T20:45:00+04:00',
      seance_length: 900,
      time: '16:30'
    },
    {
      datetime: '2017-03-11T20:45:00+04:00',
      seance_length: 900,
      time: '17:30'
    },
    {
      datetime: '2017-03-11T20:45:00+04:00',
      seance_length: 900,
      time: '18:45'
    }
  ];

  getFilials() {
    return Observable.of(this.data).delay(10);
  }

  getEmployees() {
    return Observable.of(this.employees).delay(10);
  }

  getServices() {
    return Observable.of(this.services).delay(10);
  }

  getbookTimes() {
    return Observable.of(this.bookTimes).delay(10);
  }


}
