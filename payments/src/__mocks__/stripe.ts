export default class Stripe {
  charges = {
    create: jest.fn().mockResolvedValue({}),
  };
}
