export function validation(text) {
    return (
      text !== null &&
      text.length > 0 &&
      text.length <= 10 &&
      typeof text === "string"
    );
  }
  