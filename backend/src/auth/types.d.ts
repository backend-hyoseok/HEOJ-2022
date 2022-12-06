interface JWTAuthCookie {
  name: string;
  value: string;
  cookieOptions: CookieOptions;
}

interface JWTAuthPayload {
  studentId: string;
}
