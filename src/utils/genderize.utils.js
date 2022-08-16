// get the gender using the genderize.io API
const getGenderObjFromAPI = async (firstname) => {
  try {
    const rawResponse = await fetch(
      `https://api.genderize.io?name=${firstname}`
    );
    const { gender, probability } = await rawResponse.json();

    return {
      gender: gender
        ? gender.slice(0, 1).toUpperCase() + gender.slice(1)
        : "Not Found",
      probability: gender ? `${probability * 100}%` : "/",
    };
  } catch (error) {
    return { gender: "An error occured", probability: "/" };
  }
};

// We use the memoization technique to avoid calling the API a useless amount of times since limited to 1000 calls per day
export function memoize(fn) {
  const cache = {};
  return function (...args) {
    // CACHING MECHANISM: check if we already called this function with this particular set of arguments and store the result this cache object
    if (cache[args]) {
      return cache[args];
    }
    // Whenever we call a function with an array of arguments, we have to use the apply method
    const result = fn.apply(this, args);

    cache[args] = result;
    return result;
  };
}

export const getGenderObj = memoize(getGenderObjFromAPI);
