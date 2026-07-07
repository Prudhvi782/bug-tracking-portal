export function isAdmin(role) {
  return role === "Admin";
}

export function isDeveloper(role) {
  return role === "Developer";
}

export function isTester(role) {
  return role === "Tester";
}

export function canManageUsers(role) {
  return role === "Admin";
}

export function canAssignBug(role) {
  return role === "Admin";
}

export function canDeleteBug(role) {
  return role === "Admin";
}

export function canCreateBug(role) {
  return role === "Tester" || role === "Admin";
}

export function canComment(role) {
  return true;
}

export function canUpdateStatus(role) {
  return role === "Developer" || role === "Admin";
}