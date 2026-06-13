import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid or expired access token" });
  }
};

export const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: "Access denied" });
    }
    next();
  };
};

export const authorizePermission = (permission) => {
  return (req, res, next) => {
    if (req.user.role === "admin") return next();

    if (req.user.role === "moderator") {
      if (req.user.permissions?.[permission] === true) return next();
      return res.status(403).json({ error: "Access denied" });
    }

    return res.status(403).json({ error: "Access denied" });
  };
};
