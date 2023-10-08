export function validateString(string: any) {
  if (!string || typeof string !== "string") {
    return false;
  }
  return true;
}

export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    return error.message as string;
  } else if (typeof error === "string") {
    return error;
  } else {
    return "An unknown error occurred";
  }
}
