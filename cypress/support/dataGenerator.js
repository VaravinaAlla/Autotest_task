import { faker } from '@faker-js/faker';

export function generateRandomData() {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    zipCode: faker.address.zipCode(),
  };
}
