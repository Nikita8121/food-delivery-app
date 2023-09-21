export const extractPropertyValuesFromArray = <T>(
  property: string,
  array: { [key: string]: unknown }[]
) => {
  return array.map((el) => el[property]).flat() as T[];
};
