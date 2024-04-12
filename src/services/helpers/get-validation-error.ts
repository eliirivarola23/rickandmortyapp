type ErrorCode = keyof typeof CODE_MATCHER;

const CODE_MATCHER = {
  ERR_NETWORK: 'Hubo un error, intente nuevamente o comuniquese con soporte',
  ECONNABORTED: 'Hubo un error, intente nuevamente o comuniquese con soporte',
  ConnectionError: 'Hubo un error, intente nuevamente o comuniquese con soporte',
  ResourceNotFound: 'Hubo un error',
  NotFound: 'Frase no encontrada',
  InvalidItem: 'Frase no encontrada',
  UnauthorizedMethod: 'Metodo no authorizado',
} as const;

export const getValidationError = (errorCode: ErrorCode): string | null => CODE_MATCHER[errorCode] || null;
