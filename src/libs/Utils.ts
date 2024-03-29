export async function toDateFormat(inputDate: string) {
  const date = new Date(inputDate);

  return date.toDateString();
}

export function toTitleCase(inputString: string): string {
  // Split the string into words
  const words = inputString.split(" ");

  // Capitalize the first letter of each word
  const titleCaseWords = words.map((word) => {
    if (word.length > 0) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    } else {
      return word;
    }
  });

  // Join the words back into a string
  const titleCaseString = titleCaseWords.join(" ");

  return titleCaseString;
}

export function log_con(key: string, value: string) {
  console.log("Key: " + key);
  console.log("Value: " + value);
}

export function log_con_obj(key: string, value: object) {
  console.log("Key: " + key);
  console.log("Value OBJ: " + JSON.stringify(value));
}
