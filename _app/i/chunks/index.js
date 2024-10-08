function N() {}
function H(t, n) {
  for (const e in n) t[e] = n[e];
  return t;
}
function O(t) {
  return t();
}
function q() {
  return Object.create(null);
}
function p(t) {
  t.forEach(O);
}
function I(t) {
  return typeof t == "function";
}
function ut(t, n) {
  return t != t
    ? n == n
    : t !== n || (t && typeof t == "object") || typeof t == "function";
}
let g;
function st(t, n) {
  return g || (g = document.createElement("a")), (g.href = n), t === g.href;
}
function W(t) {
  return Object.keys(t).length === 0;
}
function G(t, ...n) {
  if (t == null) return N;
  const e = t.subscribe(...n);
  return e.unsubscribe ? () => e.unsubscribe() : e;
}
function at(t, n, e) {
  t.$$.on_destroy.push(G(n, e));
}
function ft(t, n, e, i) {
  if (t) {
    const c = L(t, n, e, i);
    return t[0](c);
  }
}
function L(t, n, e, i) {
  return t[1] && i ? H(e.ctx.slice(), t[1](i(n))) : e.ctx;
}
function _t(t, n, e, i) {
  if (t[2] && i) {
    const c = t[2](i(e));
    if (n.dirty === void 0) return c;
    if (typeof c == "object") {
      const s = [],
        l = Math.max(n.dirty.length, c.length);
      for (let o = 0; o < l; o += 1) s[o] = n.dirty[o] | c[o];
      return s;
    }
    return n.dirty | c;
  }
  return n.dirty;
}
function dt(t, n, e, i, c, s) {
  if (c) {
    const l = L(n, e, i, s);
    t.p(l, c);
  }
}
function ht(t) {
  if (t.ctx.length > 32) {
    const n = [],
      e = t.ctx.length / 32;
    for (let i = 0; i < e; i++) n[i] = -1;
    return n;
  }
  return -1;
}
function mt(t) {
  return t == null ? "" : t;
}
let w = !1;
function J() {
  w = !0;
}
function K() {
  w = !1;
}
function Q(t, n, e, i) {
  for (; t < n; ) {
    const c = t + ((n - t) >> 1);
    e(c) <= i ? (t = c + 1) : (n = c);
  }
  return t;
}
function R(t) {
  if (t.hydrate_init) return;
  t.hydrate_init = !0;
  let n = t.childNodes;
  if (t.nodeName === "HEAD") {
    const r = [];
    for (let u = 0; u < n.length; u++) {
      const f = n[u];
      f.claim_order !== void 0 && r.push(f);
    }
    n = r;
  }
  const e = new Int32Array(n.length + 1),
    i = new Int32Array(n.length);
  e[0] = -1;
  let c = 0;
  for (let r = 0; r < n.length; r++) {
    const u = n[r].claim_order,
      f =
        (c > 0 && n[e[c]].claim_order <= u
          ? c + 1
          : Q(1, c, (y) => n[e[y]].claim_order, u)) - 1;
    i[r] = e[f] + 1;
    const a = f + 1;
    (e[a] = r), (c = Math.max(a, c));
  }
  const s = [],
    l = [];
  let o = n.length - 1;
  for (let r = e[c] + 1; r != 0; r = i[r - 1]) {
    for (s.push(n[r - 1]); o >= r; o--) l.push(n[o]);
    o--;
  }
  for (; o >= 0; o--) l.push(n[o]);
  s.reverse(), l.sort((r, u) => r.claim_order - u.claim_order);
  for (let r = 0, u = 0; r < l.length; r++) {
    for (; u < s.length && l[r].claim_order >= s[u].claim_order; ) u++;
    const f = u < s.length ? s[u] : null;
    t.insertBefore(l[r], f);
  }
}
function U(t, n) {
  if (w) {
    for (
      R(t),
        (t.actual_end_child === void 0 ||
          (t.actual_end_child !== null &&
            t.actual_end_child.parentElement !== t)) &&
          (t.actual_end_child = t.firstChild);
      t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

    )
      t.actual_end_child = t.actual_end_child.nextSibling;
    n !== t.actual_end_child
      ? (n.claim_order !== void 0 || n.parentNode !== t) &&
        t.insertBefore(n, t.actual_end_child)
      : (t.actual_end_child = n.nextSibling);
  } else (n.parentNode !== t || n.nextSibling !== null) && t.appendChild(n);
}
function pt(t, n, e) {
  w && !e
    ? U(t, n)
    : (n.parentNode !== t || n.nextSibling != e) &&
      t.insertBefore(n, e || null);
}
function V(t) {
  t.parentNode.removeChild(t);
}
function yt(t, n) {
  for (let e = 0; e < t.length; e += 1) t[e] && t[e].d(n);
}
function X(t) {
  return document.createElement(t);
}
function Y(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function S(t) {
  return document.createTextNode(t);
}
function gt() {
  return S(" ");
}
function bt() {
  return S("");
}
function xt(t, n, e, i) {
  return t.addEventListener(n, e, i), () => t.removeEventListener(n, e, i);
}
function $t(t) {
  return function (n) {
    return n.preventDefault(), t.call(this, n);
  };
}
function Z(t, n, e) {
  e == null
    ? t.removeAttribute(n)
    : t.getAttribute(n) !== e && t.setAttribute(n, e);
}
function wt(t, n) {
  const e = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const i in n)
    n[i] == null
      ? t.removeAttribute(i)
      : i === "style"
      ? (t.style.cssText = n[i])
      : i === "__value"
      ? (t.value = t[i] = n[i])
      : e[i] && e[i].set
      ? (t[i] = n[i])
      : Z(t, i, n[i]);
}
function tt(t) {
  return Array.from(t.childNodes);
}
function nt(t) {
  t.claim_info === void 0 &&
    (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function P(t, n, e, i, c = !1) {
  nt(t);
  const s = (() => {
    for (let l = t.claim_info.last_index; l < t.length; l++) {
      const o = t[l];
      if (n(o)) {
        const r = e(o);
        return (
          r === void 0 ? t.splice(l, 1) : (t[l] = r),
          c || (t.claim_info.last_index = l),
          o
        );
      }
    }
    for (let l = t.claim_info.last_index - 1; l >= 0; l--) {
      const o = t[l];
      if (n(o)) {
        const r = e(o);
        return (
          r === void 0 ? t.splice(l, 1) : (t[l] = r),
          c
            ? r === void 0 && t.claim_info.last_index--
            : (t.claim_info.last_index = l),
          o
        );
      }
    }
    return i();
  })();
  return (
    (s.claim_order = t.claim_info.total_claimed),
    (t.claim_info.total_claimed += 1),
    s
  );
}
function B(t, n, e, i) {
  return P(
    t,
    (c) => c.nodeName === n,
    (c) => {
      const s = [];
      for (let l = 0; l < c.attributes.length; l++) {
        const o = c.attributes[l];
        e[o.name] || s.push(o.name);
      }
      s.forEach((l) => c.removeAttribute(l));
    },
    () => i(n)
  );
}
function vt(t, n, e) {
  return B(t, n, e, X);
}
function Et(t, n, e) {
  return B(t, n, e, Y);
}
function et(t, n) {
  return P(
    t,
    (e) => e.nodeType === 3,
    (e) => {
      const i = "" + n;
      if (e.data.startsWith(i)) {
        if (e.data.length !== i.length) return e.splitText(i.length);
      } else e.data = i;
    },
    () => S(n),
    !0
  );
}
function kt(t) {
  return et(t, " ");
}
function At(t, n) {
  (n = "" + n), t.wholeText !== n && (t.data = n);
}
function jt(t, n, e, i) {
  e === null
    ? t.style.removeProperty(n)
    : t.style.setProperty(n, e, i ? "important" : "");
}
function Nt(t, n, e) {
  t.classList[e ? "add" : "remove"](n);
}
function St(t, n = document.body) {
  return Array.from(n.querySelectorAll(t));
}
let m;
function h(t) {
  m = t;
}
function v() {
  if (!m) throw new Error("Function called outside component initialization");
  return m;
}
function Ct(t) {
  v().$$.on_mount.push(t);
}
function Tt(t) {
  v().$$.after_update.push(t);
}
function qt(t, n) {
  return v().$$.context.set(t, n), n;
}
function Mt(t) {
  return v().$$.context.get(t);
}
function Ot(t, n) {
  const e = t.$$.callbacks[n.type];
  e && e.slice().forEach((i) => i.call(this, n));
}
const d = [],
  M = [],
  x = [],
  k = [],
  D = Promise.resolve();
let A = !1;
function z() {
  A || ((A = !0), D.then(F));
}
function Lt() {
  return z(), D;
}
function j(t) {
  x.push(t);
}
function Pt(t) {
  k.push(t);
}
const E = new Set();
let b = 0;
function F() {
  const t = m;
  do {
    for (; b < d.length; ) {
      const n = d[b];
      b++, h(n), it(n.$$);
    }
    for (h(null), d.length = 0, b = 0; M.length; ) M.pop()();
    for (let n = 0; n < x.length; n += 1) {
      const e = x[n];
      E.has(e) || (E.add(e), e());
    }
    x.length = 0;
  } while (d.length);
  for (; k.length; ) k.pop()();
  (A = !1), E.clear(), h(t);
}
function it(t) {
  if (t.fragment !== null) {
    t.update(), p(t.before_update);
    const n = t.dirty;
    (t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, n),
      t.after_update.forEach(j);
  }
}
const $ = new Set();
let _;
function Bt() {
  _ = { r: 0, c: [], p: _ };
}
function Dt() {
  _.r || p(_.c), (_ = _.p);
}
function rt(t, n) {
  t && t.i && ($.delete(t), t.i(n));
}
function zt(t, n, e, i) {
  if (t && t.o) {
    if ($.has(t)) return;
    $.add(t),
      _.c.push(() => {
        $.delete(t), i && (e && t.d(1), i());
      }),
      t.o(n);
  }
}
const Ft =
  typeof window != "undefined"
    ? window
    : typeof globalThis != "undefined"
    ? globalThis
    : global;
function Ht(t, n) {
  const e = {},
    i = {},
    c = { $$scope: 1 };
  let s = t.length;
  for (; s--; ) {
    const l = t[s],
      o = n[s];
    if (o) {
      for (const r in l) r in o || (i[r] = 1);
      for (const r in o) c[r] || ((e[r] = o[r]), (c[r] = 1));
      t[s] = o;
    } else for (const r in l) c[r] = 1;
  }
  for (const l in i) l in e || (e[l] = void 0);
  return e;
}
function It(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function Wt(t, n, e) {
  const i = t.$$.props[n];
  i !== void 0 && ((t.$$.bound[i] = e), e(t.$$.ctx[i]));
}
function Gt(t) {
  t && t.c();
}
function Jt(t, n) {
  t && t.l(n);
}
function ct(t, n, e, i) {
  const { fragment: c, on_mount: s, on_destroy: l, after_update: o } = t.$$;
  c && c.m(n, e),
    i ||
      j(() => {
        const r = s.map(O).filter(I);
        l ? l.push(...r) : p(r), (t.$$.on_mount = []);
      }),
    o.forEach(j);
}
function lt(t, n) {
  const e = t.$$;
  e.fragment !== null &&
    (p(e.on_destroy),
    e.fragment && e.fragment.d(n),
    (e.on_destroy = e.fragment = null),
    (e.ctx = []));
}
function ot(t, n) {
  t.$$.dirty[0] === -1 && (d.push(t), z(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(n / 31) | 0] |= 1 << n % 31);
}
function Kt(t, n, e, i, c, s, l, o = [-1]) {
  const r = m;
  h(t);
  const u = (t.$$ = {
    fragment: null,
    ctx: null,
    props: s,
    update: N,
    not_equal: c,
    bound: q(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(n.context || (r ? r.$$.context : [])),
    callbacks: q(),
    dirty: o,
    skip_bound: !1,
    root: n.target || r.$$.root,
  });
  l && l(u.root);
  let f = !1;
  if (
    ((u.ctx = e
      ? e(t, n.props || {}, (a, y, ...C) => {
          const T = C.length ? C[0] : y;
          return (
            u.ctx &&
              c(u.ctx[a], (u.ctx[a] = T)) &&
              (!u.skip_bound && u.bound[a] && u.bound[a](T), f && ot(t, a)),
            y
          );
        })
      : []),
    u.update(),
    (f = !0),
    p(u.before_update),
    (u.fragment = i ? i(u.ctx) : !1),
    n.target)
  ) {
    if (n.hydrate) {
      J();
      const a = tt(n.target);
      u.fragment && u.fragment.l(a), a.forEach(V);
    } else u.fragment && u.fragment.c();
    n.intro && rt(t.$$.fragment),
      ct(t, n.target, n.anchor, n.customElement),
      K(),
      F();
  }
  h(r);
}
class Qt {
  $destroy() {
    lt(this, 1), (this.$destroy = N);
  }
  $on(n, e) {
    const i = this.$$.callbacks[n] || (this.$$.callbacks[n] = []);
    return (
      i.push(e),
      () => {
        const c = i.indexOf(e);
        c !== -1 && i.splice(c, 1);
      }
    );
  }
  $set(n) {
    this.$$set &&
      !W(n) &&
      ((this.$$.skip_bound = !0), this.$$set(n), (this.$$.skip_bound = !1));
  }
}
export {
  Nt as $,
  Ht as A,
  It as B,
  lt as C,
  H as D,
  Lt as E,
  Mt as F,
  j as G,
  Y as H,
  Et as I,
  mt as J,
  st as K,
  U as L,
  xt as M,
  p as N,
  at as O,
  M as P,
  Wt as Q,
  Pt as R,
  Qt as S,
  Ft as T,
  yt as U,
  wt as V,
  St as W,
  ft as X,
  dt as Y,
  ht as Z,
  _t as _,
  tt as a,
  $t as a0,
  Ot as a1,
  Z as b,
  vt as c,
  V as d,
  X as e,
  jt as f,
  pt as g,
  et as h,
  Kt as i,
  At as j,
  gt as k,
  bt as l,
  kt as m,
  N as n,
  Bt as o,
  zt as p,
  Dt as q,
  rt as r,
  ut as s,
  S as t,
  qt as u,
  Tt as v,
  Ct as w,
  Gt as x,
  Jt as y,
  ct as z,
};
