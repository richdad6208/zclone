import { Faker, ko } from "@faker-js/faker";
const faker = new Faker({ locale: ko });

export const post = {
  createdAt: faker.date.past(),
  content: faker.lorem.paragraph(),
  photoUrl: "https://source.unsplash.com/random",
};

export const user = {
  userId: "richdad",
  username: faker.person.fullName(),
  avatarUrl: faker.image.avatar(),
};
