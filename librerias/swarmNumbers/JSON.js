/*!
 * swarm-numberformat v0.4.0
 * MIT Licensed
 */
!(function (i, n) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = n(require("decimal.js")))
    : "function" == typeof define && define.amd
    ? define(["decimal.js"], n)
    : "object" == typeof exports
    ? (exports.numberformat = n(require("decimal.js")))
    : (i.numberformat = n(i.Decimal));
})(this, function (i) {
  return (function (i) {
    function n(r) {
      if (t[r]) return t[r].exports;
      var o = (t[r] = { i: r, l: !1, exports: {} });
      return i[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    var t = {};
    return (
      (n.m = i),
      (n.c = t),
      (n.i = function (i) {
        return i;
      }),
      (n.d = function (i, t, r) {
        n.o(i, t) ||
          Object.defineProperty(i, t, {
            configurable: !1,
            enumerable: !0,
            get: r,
          });
      }),
      (n.n = function (i) {
        var t =
          i && i.__esModule
            ? function () {
                return i.default;
              }
            : function () {
                return i;
              };
        return n.d(t, "a", t), t;
      }),
      (n.o = function (i, n) {
        return Object.prototype.hasOwnProperty.call(i, n);
      }),
      (n.p = ""),
      n((n.s = 8))
    );
  })([
    function (i, n, t) {
      "use strict";
      (function (i) {
        function r(n) {
          return (
            (n && n.Decimal) ||
            o ||
            (o = (function () {
              return i && i.Decimal ? i.Decimal : t(7);
            })())
          );
        }
        n.a = r;
        var o = void 0;
      }).call(n, t(6));
    },
    function (i, n, t) {
      "use strict";
      function r(i, n) {
        if (!(i instanceof n))
          throw new TypeError("Cannot call a class as a function");
      }
      function o(i, n) {
        if (!i) throw new Error(n);
        return i;
      }
      function l(i, n) {
        if (!n) return i;
        if (i < 0) return -l(-i, n);
        var t = Math.pow(10, n - Math.floor(Math.log(i) / Math.LN10) - 1);
        return Math.floor(i * t) / t;
      }
      function e(i, n) {
        var t = o(g[n.backend], "not a backend: " + n.backend);
        i = t.normalize(i, n);
        var r = t.index(i, n),
          l = n.suffixFn(r),
          e = n.sigfigs || void 0;
        return Math.abs(i) < n.maxSmall
          ? i.toPrecision(e, n.rounding).replace(/(\.\d*[1-9])0+$/, "$1")
          : Math.abs(i) < n.minSuffix
          ? ((i = Math.floor(i)), i.toLocaleString())
          : l || "" === l
          ? "" + t.prefix(i, r, n) + l
          : (e && (e -= 1), i.toExponential(e).replace("e+", "e"));
      }
      var a = t(3),
        u = t.n(a),
        s = t(2),
        c = t.n(s),
        d = t(0);
      t.d(n, "a", function () {
        return v;
      }),
        t.d(n, "b", function () {
          return x;
        }),
        t.d(n, "c", function () {
          return m;
        }),
        t.d(n, "d", function () {
          return D;
        }),
        t.d(n, "e", function () {
          return Q;
        });
      var f = (function () {
          return Math.log10
            ? Math.log10
            : function (i) {
                var n = Math.log(i) / Math.LN10;
                return (n = Math.round(1e6 * n) / 1e6);
              };
        })(),
        g = {
          native: {
            normalize: function (i) {
              return i;
            },
            index: function (i) {
              return Math.max(0, Math.floor(f(Math.abs(i)) / 3));
            },
            prefix: function (i, n, t) {
              var r = t.sigfigs;
              return l(i / Math.pow(1e3, n), r).toPrecision(r || void 0);
            },
          },
          "decimal.js": {
            _requireDecimal: function (i) {
              var n = t.i(d.a)(i);
              if (!n) throw new Error("requireDecimal() failed");
              return n.clone ? n.clone(i) : n;
            },
            normalize: function (i, n) {
              return new (this._requireDecimal(n))(i);
            },
            index: function (i, n) {
              i = new (this._requireDecimal(n))(i);
              var t = i.exponent
                ? "function" == typeof i.exponent
                  ? i.exponent()
                  : i.exponent
                : i.e;
              return Math.floor(t / 3);
            },
            prefix: function (i, n, t) {
              var r = t.sigfigs,
                o = this._requireDecimal(t),
                l = new o(1e3).pow(n);
              return new o(i)
                .dividedBy(l)
                .toPrecision(r || void 0, o.ROUND_DOWN);
            },
          },
        },
        p = {
          backend: "native",
          flavor: "full",
          suffixGroup: "full",
          suffixFn: function (i) {
            var n = this.suffixes || this.suffixGroups[this.suffixGroup];
            if (
              (o(n, "no such suffixgroup: " + this.suffixGroup), i < n.length)
            )
              return n[i] || "";
          },
          minSuffix: 1e5,
          minSuffixSigfigs: !1,
          maxSmall: 0,
          sigfigs: 3,
          format: "standard",
        },
        v = {
          standard: { suffixGroups: u.a },
          longScale: { suffixGroups: c.a },
          scientific: { suffixGroups: { full: [], short: [] } },
          hybrid: {
            suffixGroups: {
              full: u.a.full.slice(0, 12),
              short: u.a.short.slice(0, 12),
            },
          },
          engineering: {
            suffixFn: function (i) {
              return 0 === i ? "" : "E" + 3 * i;
            },
          },
        },
        q = {
          full: { suffixGroup: "full", sigfigs: 5 },
          short: { suffixGroup: "short", sigfigs: 3 },
        };
      (p.formats = v), (p.flavors = q);
      var x = (function () {
          function i() {
            var n = this,
              t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
            r(this, i), (this.opts = t);
            for (
              var o = Object.keys(this._normalizeOpts().flavors), l = 0;
              l < o.length;
              l++
            )
              !(function (i) {
                var t = o[i],
                  r = "format" + t.charAt(0).toUpperCase() + t.substr(1);
                n[r] = function (i, r) {
                  return n.formatFlavor(i, t, r);
                };
              })(l);
          }
          return (
            (i.prototype._normalizeOpts = function () {
              var i =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              i = Object.assign({}, this.opts, i);
              var n = i && i.format,
                t = (i && i.formats) || p.formats,
                r = t[n || p.format];
              o(r, "no such format: " + n);
              var l = i && i.flavor,
                e = (i && i.flavors) || p.flavors,
                a = e[l || p.flavor];
              return (
                o(a, "no such flavor: " + l), Object.assign({}, p, r, a, i)
              );
            }),
            (i.prototype.index = function (i, n) {
              return (n = this._normalizeOpts(n)), g[n.backend].index(i, n);
            }),
            (i.prototype.suffix = function (i, n) {
              n = this._normalizeOpts(n);
              var t = g[n.backend].index(i, n);
              return n.suffixFn(t);
            }),
            (i.prototype.format = function (i, n) {
              return (n = this._normalizeOpts(n)), e(i, n);
            }),
            (i.prototype.formatFlavor = function (i, n, t) {
              return this.format(i, Object.assign({}, t, { flavor: n }));
            }),
            (i.prototype.listFormats = function (i) {
              return (i = this._normalizeOpts(i)), Object.keys(i.formats);
            }),
            i
          );
        })(),
        h = new x();
      (h.defaultOptions = p), (h.Formatter = x), (n.f = h);
      var m = function (i, n) {
          return h.format(i, n);
        },
        D = function (i, n) {
          return h.formatFlavor(i, "full", n);
        },
        Q = function (i, n) {
          return h.formatFlavor(i, "short", n);
        };
    },
    function (i, n) {
      i.exports = {
        short: [
          "",
          "K",
          "M",
          "Md",
          "B",
          "Bd",
          "T",
          "Td",
          "Qa",
          "Qad",
          "Qi",
          "Qid",
          "Sx",
          "Sxd",
          "Sp",
          "Spd",
          "Oc",
          "Od",
          "No",
          "Nd",
          "Dc",
          "Dd",
          "UDc",
          "UDd",
          "DDc",
          "DDd",
          "TDc",
          "TDd",
          "QaDc",
          "QaDd",
          "QiDc",
          "QiDd",
          "SxDc",
          "SxDd",
          "SpDc",
          "SpDd",
          "ODc",
          "ODd",
          "NDc",
          "NDd",
          "Vi",
          "Vd",
          "UVi",
          "UVd",
          "DVi",
          "DVd",
          "TVi",
          "TVd",
          "QaVi",
          "QaVd",
          "QiVi",
          "QiVd",
          "SxVi",
          "SxVd",
          "SpVi",
          "SpVd",
          "OVi",
          "OVd",
          "NVi",
          "NVd",
          "Tg",
          "TD",
          "UTg",
          "UTD",
          "DTg",
          "DTD",
          "TTg",
          "TTD",
          "QaTg",
          "QaTD",
          "QiTg",
          "QiTD",
          "SxTg",
          "SxTD",
          "SpTg",
          "SpTD",
          "OTg",
          "OTD",
          "NTg",
          "NTD",
          "Qd",
          "QD",
          "UQd",
          "UQD",
          "DQd",
          "DQD",
          "TQd",
          "TQD",
          "QaQd",
          "QaQD",
        ],
        full: [
          "",
          " thousand",
          " million",
          " milliard",
          " billion",
          " billiard",
          " trillion",
          " trilliard",
          " quadrillion",
          " quadrilliard",
          " quintillion",
          " quintilliard",
          " sextillion",
          " sextilliard",
          " septillion",
          " septilliard",
          " octillion",
          " octilliard",
          " nonillion",
          " nonilliard",
          " decillion",
          " decilliard",
          " undecillion",
          " undecilliard",
          " duodecillion",
          " duodecilliard",
          " tredecillion",
          " tredecilliard",
          " quattuordecillion",
          " quattuordecilliard",
          " quinquadecillion",
          " quinquadecilliard",
          " sedecillion",
          " sedecilliard",
          " septendecillion",
          " septendecilliard",
          " octodecillion",
          " octodecilliard",
          " novendecillion",
          " novendecilliard",
          " vigintillion",
          " vigintilliard",
          " unvigintillion",
          " unvigintilliard",
          " duovigintillion",
          " duovigintilliard",
          " tresvigintillion",
          " tresvigintilliard",
          " quattuorvigintillion",
          " quattuorvigintilliard",
          " quinquavigintillion",
          " quinquavigintilliard",
          " sesvigintillion",
          " sesvigintilliard",
          " septemvigintillion",
          " septemvigintilliard",
          " octovigintillion",
          " octovigintilliard",
          " novemvigintillion",
          " novemvigintilliard",
          " trigintillion",
          " trigintilliard",
          " untrigintillion",
          " untrigintilliard",
          " duotrigintillion",
          " duotrigintilliard",
          " trestrigintillion",
          " trestrigintilliard",
          " quattuortrigintillion",
          " quattuortrigintilliard",
          " quinquatrigintillion",
          " quinquatrigintilliard",
          " sestrigintillion",
          " sestrigintilliard",
          " septentrigintillion",
          " septentrigintilliard",
          " octotrigintillion",
          " octotrigintilliard",
          " noventrigintillion",
          " noventrigintilliard",
          " quadragintillion",
          " quadragintilliard",
          " unquadragintillion",
          " unquadragintilliard",
        ],
      };
    },
    function (i, n) {
      i.exports = {
        short: [
          "",
          "K",
          "M",
          "B",
          "T",
          "Qa",
          "Qi",
          "Sx",
          "Sp",
          "Oc",
          "No",
          "Dc",
          "UDc",
          "DDc",
          "TDc",
          "QaDc",
          "QiDc",
          "SxDc",
          "SpDc",
          "ODc",
          "NDc",
          "Vi",
          "UVi",
          "DVi",
          "TVi",
          "QaVi",
          "QiVi",
          "SxVi",
          "SpVi",
          "OVi",
          "NVi",
          "Tg",
          "UTg",
          "DTg",
          "TTg",
          "QaTg",
          "QiTg",
          "SxTg",
          "SpTg",
          "OTg",
          "NTg",
          "Qd",
          "UQd",
          "DQd",
          "TQd",
          "QaQd",
          "QiQd",
          "SxQd",
          "SpQd",
          "OQd",
          "NQd",
          "Qq",
          "UQq",
          "DQq",
          "TQq",
          "QaQq",
          "QiQq",
          "SxQq",
          "SpQq",
          "OQq",
          "NQq",
          "Sg",
          "USg",
          "DSg",
          "TSg",
          "QaSg",
          "QiSg",
          "SxSg",
          "SpSg",
          "OSg",
          "NSg",
          "St",
          "USt",
          "DSt",
          "TSt",
          "QaSt",
          "QiSt",
          "SxSt",
          "SpSt",
          "OSt",
          "NSt",
          "Og",
          "UOg",
          "DOg",
          "TOg",
          "QaOg",
          "QiOg",
          "SxOg",
          "SpOg",
          "OOg",
          "NOg",
        ],
        full: [
          "",
          " thousand",
          " million",
          " billion",
          " trillion",
          " quadrillion",
          " quintillion",
          " sextillion",
          " septillion",
          " octillion",
          " nonillion",
          " decillion",
          " undecillion",
          " duodecillion",
          " tredecillion",
          " quattuordecillion",
          " quinquadecillion",
          " sedecillion",
          " septendecillion",
          " octodecillion",
          " novendecillion",
          " vigintillion",
          " unvigintillion",
          " duovigintillion",
          " tresvigintillion",
          " quattuorvigintillion",
          " quinquavigintillion",
          " sesvigintillion",
          " septemvigintillion",
          " octovigintillion",
          " novemvigintillion",
          " trigintillion",
          " untrigintillion",
          " duotrigintillion",
          " trestrigintillion",
          " quattuortrigintillion",
          " quinquatrigintillion",
          " sestrigintillion",
          " septentrigintillion",
          " octotrigintillion",
          " noventrigintillion",
          " quadragintillion",
          " unquadragintillion",
          " duoquadragintillion",
          " tresquadragintillion",
          " quattuorquadragintillion",
          " quinquaquadragintillion",
          " sesquadragintillion",
          " septenquadragintillion",
          " octoquadragintillion",
          " novenquadragintillion",
          " quinquagintillion",
          " unquinquagintillion",
          " duoquinquagintillion",
          " tresquinquagintillion",
          " quattuorquinquagintillion",
          " quinquaquinquagintillion",
          " sesquinquagintillion",
          " septenquinquagintillion",
          " octoquinquagintillion",
          " novenquinquagintillion",
          " sexagintillion",
          " unsexagintillion",
          " duosexagintillion",
          " tresexagintillion",
          " quattuorsexagintillion",
          " quinquasexagintillion",
          " sesexagintillion",
          " septensexagintillion",
          " octosexagintillion",
          " novensexagintillion",
          " septuagintillion",
          " unseptuagintillion",
          " duoseptuagintillion",
          " treseptuagintillion",
          " quattuorseptuagintillion",
          " quinquaseptuagintillion",
          " seseptuagintillion",
          " septenseptuagintillion",
          " octoseptuagintillion",
          " novenseptuagintillion",
          " octogintillion",
          " unoctogintillion",
          " duooctogintillion",
        ],
      };
    },
    function (i, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r = t(1);
      t.d(n, "Formats", function () {
        return r.a;
      }),
        t.d(n, "Formatter", function () {
          return r.b;
        }),
        t.d(n, "format", function () {
          return r.c;
        }),
        t.d(n, "formatFull", function () {
          return r.d;
        }),
        t.d(n, "formatShort", function () {
          return r.e;
        }),
        t.d(n, "numberformat", function () {
          return r.f;
        });
      var o = t(5);
      t.d(n, "parse", function () {
        return o.a;
      }),
        t.d(n, "Parser", function () {
          return o.b;
        });
    },
    function (i, n, t) {
      "use strict";
      function r(i, n) {
        if (!(i instanceof n))
          throw new TypeError("Cannot call a class as a function");
      }
      function o(i) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!i) return n.default || null;
        var t = d[n.suffixGroup || "standard"],
          r = N[n.backend || "native"];
        if (!r) throw new Error("no such backend: " + n.backend);
        i = i.replace(/,/g, "");
        var o = / ?[a-zA-Z]+/.exec(i);
        if (o && o.length > 0) {
          var l = t[o[0].toLowerCase()];
          if (l) return r.parseInt(i.replace(o[0], l.replace), n);
        }
        return r.parseInt(i, n);
      }
      var l = t(3),
        e = t.n(l),
        a = t(2),
        u = (t.n(a), t(0));
      t.d(n, "a", function () {
        return o;
      }),
        t.d(n, "b", function () {
          return w;
        });
      for (
        var s =
            Object.assign ||
            function (i) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(t, r) && (i[r] = t[r]);
              }
              return i;
            },
          c = { standard: e.a },
          d = {},
          f = Object.keys(c),
          g = Array.isArray(f),
          p = 0,
          f = g ? f : f[Symbol.iterator]();
        ;

      ) {
        var v;
        if (g) {
          if (p >= f.length) break;
          v = f[p++];
        } else {
          if (((p = f.next()), p.done)) break;
          v = p.value;
        }
        for (
          var q = v,
            x = c[q],
            h = (d[q] = {}),
            m = Object.keys(x),
            D = Array.isArray(m),
            Q = 0,
            m = D ? m : m[Symbol.iterator]();
          ;

        ) {
          var S;
          if (D) {
            if (Q >= m.length) break;
            S = m[Q++];
          } else {
            if (((Q = m.next()), Q.done)) break;
            S = Q.value;
          }
          var b = S,
            O = x[b];
          for (var T in O) {
            var y = O[T].toLowerCase(),
              V = 3 * T;
            h[y] && h[y].exp,
              "duplicate parsenumber suffix with different exponents: " + y &&
                (h[y] = { index: T, exp: V, replace: "e" + V });
          }
        }
      }
      var N = {
          native: {
            parseInt: function (i, n) {
              var t = Math.ceil(Number(i, 10));
              return "default" in n && !this.isValid(t) ? n.default : t;
            },
            isValid: function (i) {
              return (i || 0 === i) && !Number.isNaN(i);
            },
          },
          "decimal.js": {
            parseInt: function (i, n) {
              try {
                var r = t.i(u.a)(n),
                  o = new r(i),
                  l = o.ceil ? o.ceil() : o.toDecimalPlaces(0, r.ROUND_UP);
                return this.isValid(l) ? l : n.default;
              } catch (i) {
                if ("default" in n) return n.default;
                throw i;
              }
            },
            isValid: function (i) {
              return i && (!i.isNaN || !i.isNaN());
            },
          },
        },
        w = (function () {
          function i(n) {
            r(this, i), (this.config = n);
          }
          return (
            (i.prototype.parse = function (i) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              return o(i, s({}, this.config, n));
            }),
            i
          );
        })();
    },
    function (i, n) {
      var t;
      t = (function () {
        return this;
      })();
      try {
        t = t || Function("return this")() || (0, eval)("this");
      } catch (i) {
        "object" == typeof window && (t = window);
      }
      i.exports = t;
    },
    function (n, t) {
      n.exports = i;
    },
    function (i, n, t) {
      i.exports = t(4);
    },
  ]);
});
//# sourceMappingURL=swarm-numberformat.min.js.map
