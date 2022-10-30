import jwt from "jsonwebtoken";

export const isUserAuthenticated = (req, res, next) => {
  const authHeader = req.headers.authorization
  if (!authHeader) {
    return res.status(403).json({
      status: 403,
      message: 'cannot access this resource'
    })
  }
  try {
    jwt.verify(authHeader, "secret-key")
    next()
  } catch (error) {
    if(error instanceof jwt.JsonWebTokenError){
      return res.status(401).json({
        status: 401,
        message: 'Unauthorized'
      })
    } else {
      return res.status(500).json({
        status: 500,
        message: 'failed to authenticate'
      })
    }
  }
}
