import * as Crypto from 'expo-crypto';

export const sha1 = (message: string): Promise<string> => {
  return Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA1, message);
};
