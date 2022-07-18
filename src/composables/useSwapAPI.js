import { provide, inject } from 'vue';
import { LS_KEY_PEOPLE, SwapAPISymbol } from '@/utils/constants';
import { extractPlanetId } from '@/utils/helpers';
const RETRIES = 3;
let currentSwapAPI;

async function useSWapAPILoader() {
  const people = {
    data: JSON.parse(localStorage.getItem(LS_KEY_PEOPLE)) || [],
  };

  if (!people.data.length) {
    const [people, planets] = await Promise.all([
      useSwapAPI('people'),
      useSwapAPI('planets'),
    ]);

    // map planets  using people homeworld
    people.data.forEach((person, index) => {
      if (person.homeworld) {
        const planetId = extractPlanetId(person.homeworld);
        people.data[index] = {
          ...people.data[index],
          planet: planets.data[planetId]
            ? planets.data[planetId].name
            : 'unknown',
          homeworld: planets.data[planetId],
        };
      }
    });
    localStorage.setItem(LS_KEY_PEOPLE, JSON.stringify(people));
  }

  return { people: people.data };
}

async function useSwapAPI(slug) {
  const pageSize = 10;

  const head = await fetchPage(slug, 1);
  if (head.error) {
    return { error: head.error };
  }

  const pagesRemaining = Math.ceil(head.data.count / pageSize) - 1;

  const tail = await Promise.all(
    Array(pagesRemaining)
      .fill([])
      .map((_, page) => fetchPage(slug, page + 2)),
  );

  const error = tail.find((el) => el.error);
  if (error) {
    return { error };
  }

  const data = [...head.data.results, ...tail.flatMap((el) => el.data.results)];

  return { data };
}

async function fetchPage(slug, page, retries = RETRIES) {
  try {
    const url = getUrl(slug, page);
    const response = await fetch(url);
    const data = await response.json();

    if (data.detail) {
      return retryFetchPage(slug, page, retries);
    }

    return { data };
  } catch (error) {
    return retryFetchPage(slug, page, retries);
  }
}

async function retryFetchPage(slug, page, retries) {
  const url = getUrl(slug, page);
  retries--;
  if (retries) {
    const { data, error } = await fetchPage(slug, page, retries);

    if (error) {
      console.warn(
        `Error fetching ${url}, retry #${RETRIES - retries} of ${RETRIES}`,
      );
      retryFetchPage(slug, page, retries);
    }

    if (data) {
      return { data };
    }
  } else {
    const message = `Error fetching ${url} after ${RETRIES} retries`;
    console.warn(message);

    return { error: message };
  }
}

function getUrl(slug, page) {
  return `https://swapi.dev/api/${slug}/?page=${page}`;
}

export async function provideSwapAPI() {
  currentSwapAPI = useSWapAPILoader();
  provide(SwapAPISymbol, currentSwapAPI);
  return currentSwapAPI;
}

export function useCurrentSwapAPI() {
  return inject(SwapAPISymbol);
}
