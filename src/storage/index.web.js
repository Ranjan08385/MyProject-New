import SecureLS from 'secure-ls';
import { secKey } from '../App';

// eslint-disable-next-line import/prefer-default-export
export const setCustomStorage = (key, value) => {
  try {
    const ls = new SecureLS({
      encodingType: 'des',
      isCompression: false,
      encryptionSecret: 'secKey',
    });
    ls.set(key, { data: value });
    // logMe('StorageUtils', `Saved data; key: ${key}, value: ${value}`);
  } catch (e) {
    // saving error
    // logMe('StorageUtils', `Error saving data; key: ${key}, value: ${value}`);
  }
};

export const getCustomStorage = (key, defaultValue) => {
  try {
    const ls = new SecureLS({
      encodingType: 'des',
      isCompression: false,
      encryptionSecret: 'secKey',
    });
    const value = ls.get(key).data;
    return value;
  } catch (e) {
    // error reading value
    // logMe('StorageUtils', `Error reading data; key: ${key}`);
    return defaultValue;
  }
};

export const removeStorageData = async key => {
  try {
    const ls = new SecureLS({
      encodingType: 'des',
      isCompression: false,
      encryptionSecret: 'secKey',
    });
    ls.remove(key);
  } catch (e) {
    // error removing value
    // logMe('StorageUtils', `Error removing data; key: ${key}`);
  }
};
