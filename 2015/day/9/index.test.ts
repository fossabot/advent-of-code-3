import { readFileSync } from 'fs';
import { part1 } from '.';

const input = readFileSync(`${__dirname}/input`, 'utf-8').split('\n');

describe('Day 9', () => {
  describe('Part 1', () => {
    it('should calculate shortest disance', () => {
      expect.assertions(2);

      expect(
        part1(['London to Dublin = 464', 'London to Belfast = 518', 'Dublin to Belfast = 141']),
      ).toStrictEqual(605);
      expect(part1(input)).toStrictEqual(117);
    });
  });
});
