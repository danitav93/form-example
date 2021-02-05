import { ROUTES, ROUTES_MAP } from '../constants/routes';

export function getSlideByIndex(idx: number): ROUTES {
  return ROUTES_MAP[idx] as ROUTES;
}

export function getPreviousSlide(route: ROUTES): ROUTES {
  const curIdx = ROUTES_MAP.indexOf(route);
  if (curIdx === 0 || curIdx === -1) {
    return ROUTES.HOME;
  }
  return ROUTES_MAP[curIdx + -1] as ROUTES;
}

export function getNextSlide(route: ROUTES): ROUTES {
  const curIdx = ROUTES_MAP.indexOf(route);
  if (curIdx === -1) {
    return ROUTES.HOME;
  }
  return ROUTES_MAP[curIdx + 1] as ROUTES;
}

export function getSlideIndex(route: ROUTES): number {
  return ROUTES_MAP.indexOf(route);
}
export function getTotalNumberOfSlides(): number {
  return ROUTES_MAP.length;
}
