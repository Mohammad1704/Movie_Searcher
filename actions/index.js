export const SEARCH_RESULTS = 'SEARCH_RESULTS';

export function searchResults(Search) {
  return {
    type: SEARCH_RESULTS,
    Search
  }
}
