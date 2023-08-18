const mapping: Record<string, string> = {
  answers: 'answer',
  assignments: 'assignment',
  organizations: 'organization',
  questions: 'question',
  surveys: 'survey',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
