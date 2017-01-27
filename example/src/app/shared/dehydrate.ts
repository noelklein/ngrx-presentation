export function dehydrate<T>(object): T {
  return JSON.parse(JSON.stringify(object));
}
