import { Buffer } from 'buffer';

export const hexToASCII = (string: string): string => {
  return new Buffer(string, 'hex').toString('ascii');
};
