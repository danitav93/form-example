import { ROUTES, ROUTES_MAP } from '../constants/routes';

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
