import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  public createDb() {
    let heroes = [
      { id: 1, name: 'Windstorm' },
      { id: 2, name: 'Bombasto' }
    ];
    // @credit to Dan Wahlin JumpStart data
    let customers = [
      {
        'id': 1,
        'firstName': 'ted',
        'lastName': 'james',
        'gender': 'male',
        'address': '1234 Anywhere St.',
        'city': ' Phoenix ',
        'state': {
          'abbreviation': 'AZ',
          'name': 'Arizona'
        },
        'orderTotal': 40.99
      },
      {
        'id': 2,
        'firstName': 'Michelle',
        'lastName': 'Thompson',
        'gender': 'female',
        'address': '345 Cedar Point Ave.',
        'city': 'Los Angeles ',
        'state': {
          'abbreviation': 'CA',
          'name': 'California'
        },
        'orderTotal': 89.99
      }
    ];
    let orders = [
      {
        'customerId': 1,
        'orderItems': [
          { 'id': 1, 'productName': 'Baseball', 'itemCost': 9.99 },
          { 'id': 2, 'productName': 'Bat', 'itemCost': 19.99 }
        ]
      },
      {
        'customerId': 2,
        'orderItems': [
          { 'id': 3, 'productName': 'Basketball', 'itemCost': 7.99 },
          { 'id': 4, 'productName': 'Shoes', 'itemCost': 199.99 }
        ]
      }
    ];
    let states = [
      {
        '_id': '56f861a8a38a3d28e63b6c6b',
        'id': 1,
        'name': 'Alabama',
        'abbreviation': 'AL'
      },
      {
        '_id': '56f861a8a38a3d28e63b6c6d',
        'id': 3,
        'name': 'Alaska',
        'abbreviation': 'AK'
      },
      {
        '_id': '56f861a8a38a3d28e63b6c6f',
        'id': 5,
        'name': 'Arizona',
        'abbreviation': 'AZ'
      },
      {
        '_id': '56f861a8a38a3d28e63b6c71',
        'id': 7,
        'name': 'Arkansas',
        'abbreviation': 'AR'
      }
    ];
    return {
      heroes,
      customers,
      orders,
      states
    }
  }

}
