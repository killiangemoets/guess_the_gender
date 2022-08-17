// Getting the gender using the genderize.io API
const getGenderObjFromAPI = async (firstname: String) => {
  // console.log("call");
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

// Using the memoization technique to avoid calling the API a useless amount of times since limited to 1000 calls per day
export function memoize(fn: (...args: any[]) => void) {
  type CacheObj = {
    [key: string]: any;
  };
  const cache: CacheObj = {};
  return function (...args: any[]) {
    // console.log(cache);
    const stringifiedArgs: string = JSON.stringify(args);

    // CACHING MECHANISM: check if we already called this function with this particular set of arguments and store the result in the cache object
    if (cache[stringifiedArgs]) {
      return cache[stringifiedArgs];
    }
    // Whenever we call a function with an array of arguments, we have to use the apply method
    const result = fn.apply(undefined, args);

    cache[stringifiedArgs] = result;
    return result;
  };
}

export const getGenderObj = memoize(getGenderObjFromAPI);
