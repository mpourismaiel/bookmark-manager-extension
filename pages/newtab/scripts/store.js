const stores = {};

const store = (initial = {}, key = "", compute = null) => {
  const subscribers = [];
  let data = initial;

  if (key) {
    const memory = localStorage.getItem(key);
    try {
      data = JSON.parse(memory);
      if (!data) {
        throw new Error();
      }
    } catch (err) {
      data = initial;
      localStorage.setItem(key, JSON.stringify(data));
    }
  }

  const emit = () => {
    subscribers.forEach((fn) => fn(data));
  };

  const set = (newData) => {
    data = newData;
    if (compute) {
      data = compute(data);
    }

    if (key) {
      localStorage.setItem(key, JSON.stringify(data));
    }

    emit();
  };

  const update = (newData) => {
    set({ ...data, ...newData });
  };

  const get = () => {
    return data;
  };

  const subscribe = (fn) => {
    subscribers.push(fn);
    fn(data);
  };

  stores[key] = { set, get, subscribe, compute, update };
  return stores[key];
};

const getStore = (key) => {
  return stores[key];
};

module.exports = { store, getStore };
