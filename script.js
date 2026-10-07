/* ---------- Mock database (replace with API calls to your backend) ----------
   Later: swap these arrays with fetch('/api/customers'), fetch('/api/accounts') etc.
   Table names mirror a typical DBMS schema: Customer, Account, Transaction, Loan. */
const db = {
  customers: [
    { id: 1, name: "Aarav Sharma", phone: "9876543210", city: "Chennai" },
    { id: 2, name: "Meera Nair", phone: "9123456780", city: "Kochi" },
  ],
  accounts: [
    { no: 1001, customerId: 1, type: "Savings", balance: 52000 },
    { no: 1002, customerId: 2, type: "Current", balance: 18500 },
  ],
  transactions: [
    { id: 1, date: "2026-10-01", account: 1001, kind: "Deposit", amount: 12000 },
    { id: 2, date: "2026-10-03", account: 1002, kind: "Withdraw", amount: 2500 },
  ],
  loans: [
    { id: 1, customerId: 1, type: "Education", amount: 400000, rate: 8.5, status: "Approved" },
    { id: 2, customerId: 2, type: "Home", amount: 2500000, rate: 8.9, status: "Pending" },
  ],
};

const $ = (s) => document.querySelector(s);
const inr = (n) => "₹" + Number(n).toLocaleString("en-IN");
const custName = (id) => db.customers.find((c) => c.id === id)?.name ?? "Unknown";
const nextId = (arr) => Math.max(0, ...arr.map((x) => x.id ?? x.no)) + 1;

function toast(msg, isError = false) {
  const t = $("#toast");
  t.textContent = msg;
  t.className = "show" + (isError ? " error" : "");
  setTimeout(() => (t.className = ""), 2500);
}

function table(el, headers, rows) {
  el.innerHTML = rows.length
    ? `<thead><tr>${headers.map((h) => `<th>${h}</th>`).join("")}</tr></thead>
       <tbody>${rows.map((r) => `<tr>${r.map((c) => `<td${/^[₹\d,]+$/.test(c) ? ' class="num"' : ""}>${c}</td>`).join("")}</tr>`).join("")}</tbody>`
    : `<tbody><tr><td class="empty">Nothing here yet.</td></tr></tbody>`;
}

/* ---------- Renderers ---------- */
function renderStats() {
  const total = db.accounts.reduce((s, a) => s + a.balance, 0);
  const pending = db.loans.filter((l) => l.status === "Pending").length;
  const items = [
    ["Customers", db.customers.length], ["Accounts", db.accounts.length],
    ["Total deposits", inr(total)], ["Loans pending approval", pending],
  ];
  $("#stats").innerHTML = items.map(([l, v]) => `<div class="stat"><b>${v}</b><small>${l}</small></div>`).join("");
}

const txnRows = (list) => list.map((t) => [
  t.id, t.date, t.account,
  `<span class="${t.kind === "Deposit" ? "in" : "out"}">${t.kind}</span>`, inr(t.amount),
]);
const txnHead = ["ID", "Date", "Account", "Type", "Amount"];

function renderCustomers() {
  const q = $("#customer-search").value.toLowerCase();
  const list = db.customers.filter((c) => (c.name + c.city).toLowerCase().includes(q));
  table($("#customer-table"), ["ID", "Name", "Phone", "City"], list.map((c) => [c.id, c.name, c.phone, c.city]));
}

function renderAccounts() {
  table($("#account-table"), ["Account no.", "Holder", "Type", "Balance"],
    db.accounts.map((a) => [a.no, custName(a.customerId), a.type, inr(a.balance)]));
}

function renderLoans() {
  table($("#loan-table"), ["ID", "Customer", "Type", "Amount", "Rate %", "Status"],
    db.loans.map((l) => [l.id, custName(l.customerId), l.type, inr(l.amount), l.rate,
      `<span class="${l.status === "Approved" ? "in" : "pending"}">${l.status}</span>`]));
}

function fillSelects() {
  $("#account-customer").innerHTML = db.customers.map((c) => `<option value="${c.id}">${c.name}</option>`).join("");
  const opts = db.accounts.map((a) => `<option value="${a.no}">${a.no} · ${custName(a.customerId)}</option>`).join("");
  $("#txn-account").innerHTML = opts;
  $("#txn-target").innerHTML = opts;
}

function renderAll() {
  renderStats(); renderCustomers(); renderAccounts(); renderLoans(); fillSelects();
  table($("#recent-table"), txnHead, txnRows([...db.transactions].reverse().slice(0, 5)));
  table($("#txn-table"), txnHead, txnRows([...db.transactions].reverse()));
}

/* ---------- Navigation ---------- */
$("#nav").addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  document.querySelectorAll("nav button, .view").forEach((el) => el.classList.remove("active"));
  btn.classList.add("active");
  $("#view-" + btn.dataset.view).classList.add("active");
});

/* ---------- Forms ---------- */
$("#customer-search").addEventListener("input", renderCustomers);

$("#customer-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = Object.fromEntries(new FormData(e.target));
  db.customers.push({ id: nextId(db.customers), ...f });
  e.target.reset(); renderAll(); toast(`Added customer ${f.name}`);
});

$("#account-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = Object.fromEntries(new FormData(e.target));
  db.accounts.push({ no: nextId(db.accounts) + 1000, customerId: +f.customer, type: f.type, balance: +f.balance });
  renderAll(); toast("Account opened");
});

$("#txn-kind").addEventListener("change", (e) => ($("#txn-target-wrap").hidden = e.target.value !== "Transfer"));

$("#txn-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = Object.fromEntries(new FormData(e.target));
  const amt = +f.amount, from = db.accounts.find((a) => a.no === +f.account);
  if (!from) return toast("Select an account", true);
  if (f.kind !== "Deposit" && from.balance < amt) return toast("Insufficient balance", true);

  if (f.kind === "Deposit") from.balance += amt;
  else from.balance -= amt;
  if (f.kind === "Transfer") {
    const to = db.accounts.find((a) => a.no === +f.target);
    if (!to || to.no === from.no) { from.balance += amt; return toast("Pick a different target account", true); }
    to.balance += amt;
  }
  db.transactions.push({ id: nextId(db.transactions), date: new Date().toISOString().slice(0, 10), account: from.no, kind: f.kind, amount: amt });
  e.target.reset(); $("#txn-target-wrap").hidden = true;
  renderAll(); toast(`${f.kind} of ${inr(amt)} done`);
});

renderAll();
