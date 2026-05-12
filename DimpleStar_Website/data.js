// ============================================================
// HARDCODED DATA — replaces MySQL backend
// ============================================================

const USERS = [
  { id: 1, fname: "Test", lname: "User",   email: "test@example.com", password: "password123" },
  { id: 2, fname: "Juan", lname: "dela Cruz", email: "juan@gmail.com",  password: "juan2024" },
  { id: 3, fname: "Maria", lname: "Santos",   email: "maria@gmail.com", password: "maria2024" }
];

const ROUTES = [
  { busid:1,  origin:"Ali Mall Cubao",  destination:"San Jose", time:"10:00am", price:300, bustype:"Air Conditioned" },
  { busid:2,  origin:"Ali Mall Cubao",  destination:"San Jose", time:"9:00am",  price:300, bustype:"Air Conditioned" },
  { busid:3,  origin:"Ali Mall Cubao",  destination:"San Jose", time:"1:00pm",  price:300, bustype:"Air Conditioned" },
  { busid:4,  origin:"Ali Mall Cubao",  destination:"San Jose", time:"4:00pm",  price:300, bustype:"Air Conditioned" },
  { busid:5,  origin:"Alabang",         destination:"San Jose", time:"6:00am",  price:300, bustype:"Air Conditioned" },
  { busid:6,  origin:"Alabang",         destination:"San Jose", time:"7:00am",  price:300, bustype:"Air Conditioned" },
  { busid:7,  origin:"Alabang",         destination:"San Jose", time:"2:00pm",  price:300, bustype:"Air Conditioned" },
  { busid:8,  origin:"Alabang",         destination:"San Jose", time:"6:00pm",  price:300, bustype:"Air Conditioned" },
  { busid:9,  origin:"Alabang",         destination:"San Jose", time:"10:00pm", price:300, bustype:"Air Conditioned" },
  { busid:10, origin:"Cabuyao",         destination:"San Jose", time:"8:00am",  price:300, bustype:"Air Conditioned" },
  { busid:11, origin:"Cabuyao",         destination:"San Jose", time:"9:00am",  price:300, bustype:"Air Conditioned" },
  { busid:12, origin:"Cabuyao",         destination:"San Jose", time:"4:00pm",  price:300, bustype:"Air Conditioned" },
  { busid:13, origin:"Cabuyao",         destination:"San Jose", time:"8:00pm",  price:300, bustype:"Air Conditioned" },
  { busid:14, origin:"Espana",          destination:"San Jose", time:"4:30am",  price:300, bustype:"Air Conditioned" },
  { busid:15, origin:"Espana",          destination:"San Jose", time:"5:30am",  price:300, bustype:"Air Conditioned" },
  { busid:16, origin:"Espana",          destination:"San Jose", time:"12:00am", price:300, bustype:"Air Conditioned" },
  { busid:17, origin:"Espana",          destination:"San Jose", time:"4:00pm",  price:300, bustype:"Air Conditioned" },
  { busid:18, origin:"Espana",          destination:"San Jose", time:"8:00pm",  price:300, bustype:"Air Conditioned" },
  { busid:19, origin:"San Lorenzo",     destination:"San Jose", time:"3:00am",  price:300, bustype:"Air Conditioned" },
  { busid:20, origin:"San Lorenzo",     destination:"San Jose", time:"4:30am",  price:200, bustype:"Air Conditioned" },
  { busid:21, origin:"San Lorenzo",     destination:"San Jose", time:"11:00am", price:300, bustype:"Air Conditioned" },
  { busid:22, origin:"San Lorenzo",     destination:"San Jose", time:"3:00pm",  price:300, bustype:"Air Conditioned" },
  { busid:23, origin:"San Lorenzo",     destination:"San Jose", time:"7:00pm",  price:300, bustype:"Air Conditioned" },
  { busid:24, origin:"Pasay",           destination:"San Jose", time:"5:00am",  price:300, bustype:"Air Conditioned" },
  { busid:25, origin:"Pasay",           destination:"San Jose", time:"6:00am",  price:300, bustype:"Air Conditioned" },
  { busid:26, origin:"Pasay",           destination:"San Jose", time:"1:00pm",  price:300, bustype:"Air Conditioned" },
  { busid:27, origin:"Pasay",           destination:"San Jose", time:"3:00pm",  price:300, bustype:"Air Conditioned" },
  { busid:28, origin:"Ali Mall Cubao",  destination:"San Jose", time:"10:00am", price:200, bustype:"Ordinary" },
  { busid:29, origin:"Ali Mall Cubao",  destination:"San Jose", time:"9:00am",  price:200, bustype:"Ordinary" },
  { busid:30, origin:"Ali Mall Cubao",  destination:"San Jose", time:"1:00pm",  price:200, bustype:"Ordinary" },
  { busid:31, origin:"Ali Mall Cubao",  destination:"San Jose", time:"4:00pm",  price:200, bustype:"Ordinary" },
  { busid:32, origin:"Alabang",         destination:"San Jose", time:"6:00am",  price:200, bustype:"Ordinary" },
  { busid:33, origin:"Alabang",         destination:"San Jose", time:"7:00am",  price:200, bustype:"Ordinary" },
  { busid:34, origin:"Alabang",         destination:"San Jose", time:"2:00pm",  price:200, bustype:"Ordinary" },
  { busid:35, origin:"Alabang",         destination:"San Jose", time:"6:00pm",  price:200, bustype:"Ordinary" },
  { busid:36, origin:"Alabang",         destination:"San Jose", time:"10:00pm", price:200, bustype:"Ordinary" },
  { busid:37, origin:"Cabuyao",         destination:"San Jose", time:"8:00am",  price:200, bustype:"Ordinary" },
  { busid:38, origin:"Cabuyao",         destination:"San Jose", time:"9:00am",  price:200, bustype:"Ordinary" },
  { busid:39, origin:"Cabuyao",         destination:"San Jose", time:"4:00pm",  price:200, bustype:"Ordinary" },
  { busid:40, origin:"Cabuyao",         destination:"San Jose", time:"8:00pm",  price:200, bustype:"Ordinary" },
  { busid:41, origin:"Espana",          destination:"San Jose", time:"4:30am",  price:200, bustype:"Ordinary" },
  { busid:42, origin:"Espana",          destination:"San Jose", time:"5:30am",  price:200, bustype:"Ordinary" },
  { busid:43, origin:"Espana",          destination:"San Jose", time:"12:00am", price:200, bustype:"Ordinary" },
  { busid:44, origin:"Espana",          destination:"San Jose", time:"4:00pm",  price:200, bustype:"Ordinary" },
  { busid:45, origin:"Espana",          destination:"San Jose", time:"8:00pm",  price:200, bustype:"Ordinary" },
  { busid:46, origin:"San Lorenzo",     destination:"San Jose", time:"3:00am",  price:200, bustype:"Ordinary" },
  { busid:47, origin:"San Lorenzo",     destination:"San Jose", time:"4:30am",  price:200, bustype:"Ordinary" },
  { busid:48, origin:"San Lorenzo",     destination:"San Jose", time:"11:00am", price:200, bustype:"Ordinary" },
  { busid:49, origin:"San Lorenzo",     destination:"San Jose", time:"3:00pm",  price:200, bustype:"Ordinary" },
  { busid:50, origin:"San Lorenzo",     destination:"San Jose", time:"7:00pm",  price:200, bustype:"Ordinary" },
  { busid:51, origin:"Pasay",           destination:"San Jose", time:"5:00am",  price:200, bustype:"Ordinary" },
  { busid:52, origin:"Pasay",           destination:"San Jose", time:"6:00am",  price:200, bustype:"Ordinary" },
  { busid:53, origin:"Pasay",           destination:"San Jose", time:"1:00pm",  price:200, bustype:"Ordinary" },
  { busid:54, origin:"Pasay",           destination:"San Jose", time:"3:00pm",  price:200, bustype:"Ordinary" }
];

// Bookings stored in sessionStorage so they persist across pages within the tab
function getBookings() {
  return JSON.parse(sessionStorage.getItem("ds_bookings") || "[]");
}
function saveBooking(b) {
  const list = getBookings();
  b.ticket = Date.now();
  list.push(b);
  sessionStorage.setItem("ds_bookings", JSON.stringify(list));
  return b.ticket;
}

// Auth helpers
function getSession() {
  return JSON.parse(sessionStorage.getItem("ds_user") || "null");
}
function login(email, password) {
  const u = USERS.find(u => u.email === email && u.password === password);
  if (u) { sessionStorage.setItem("ds_user", JSON.stringify(u)); return true; }
  return false;
}
function logout() { sessionStorage.removeItem("ds_user"); }
function register(fname, lname, email, password) {
  if (USERS.find(u => u.email === email)) return false;
  const u = { id: USERS.length+1, fname, lname, email, password };
  USERS.push(u);
  sessionStorage.setItem("ds_user", JSON.stringify(u));
  return true;
}

// Render nav login area into element #nav-auth
function renderNavAuth() {
  const el = document.getElementById("nav-auth");
  if (!el) return;
  const user = getSession();
  if (user) {
    el.innerHTML = `<span class="nav-welcome">Hi, ${user.fname}!</span> <a href="signlog.html" onclick="logout()" class="nav-link-btn">Logout</a>`;
  } else {
    el.innerHTML = `<a href="signlog.html" class="nav-link-btn">Sign Up / Login</a>`;
  }
}
