(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [968],
    {
        81556: function (e, t, r) {
            "use strict";
            r.d(t, {
                Sg: function () {
                    return l;
                },
                zt: function () {
                    return c;
                },
            });
            var n = r(2593),
                o = r(6881),
                i = r(1581);
            var s = function (e, t, r, n) {
                return new (r || (r = Promise))(function (o, i) {
                    function s(e) {
                        try {
                            l(n.next(e));
                        } catch (t) {
                            i(t);
                        }
                    }
                    function a(e) {
                        try {
                            l(n.throw(e));
                        } catch (t) {
                            i(t);
                        }
                    }
                    function l(e) {
                        var t;
                        e.done
                            ? o(e.value)
                            : ((t = e.value),
                              t instanceof r
                                  ? t
                                  : new r(function (e) {
                                        e(t);
                                    })).then(s, a);
                    }
                    l((n = n.apply(e, t || [])).next());
                });
            };
            const a = new i.Logger("abstract-provider/5.6.1");
            class l extends o.Description {
                static isForkEvent(e) {
                    return !(!e || !e._isForkEvent);
                }
            }
            class c {
                constructor() {
                    a.checkAbstract(new.target, c), (0, o.defineReadOnly)(this, "_isProvider", !0);
                }
                getFeeData() {
                    return s(this, void 0, void 0, function* () {
                        const { block: e, gasPrice: t } = yield (0, o.resolveProperties)({ block: this.getBlock("latest"), gasPrice: this.getGasPrice().catch((e) => null) });
                        let r = null,
                            i = null;
                        return e && e.baseFeePerGas && ((i = n.O$.from("1500000000")), (r = e.baseFeePerGas.mul(2).add(i))), { maxFeePerGas: r, maxPriorityFeePerGas: i, gasPrice: t };
                    });
                }
                addListener(e, t) {
                    return this.on(e, t);
                }
                removeListener(e, t) {
                    return this.off(e, t);
                }
                static isProvider(e) {
                    return !(!e || !e._isProvider);
                }
            }
        },
        48088: function (e, t, r) {
            "use strict";
            r.d(t, {
                E: function () {
                    return c;
                },
                b: function () {
                    return u;
                },
            });
            var n = r(6881),
                o = r(1581);
            var i = function (e, t, r, n) {
                return new (r || (r = Promise))(function (o, i) {
                    function s(e) {
                        try {
                            l(n.next(e));
                        } catch (t) {
                            i(t);
                        }
                    }
                    function a(e) {
                        try {
                            l(n.throw(e));
                        } catch (t) {
                            i(t);
                        }
                    }
                    function l(e) {
                        var t;
                        e.done
                            ? o(e.value)
                            : ((t = e.value),
                              t instanceof r
                                  ? t
                                  : new r(function (e) {
                                        e(t);
                                    })).then(s, a);
                    }
                    l((n = n.apply(e, t || [])).next());
                });
            };
            const s = new o.Logger("abstract-signer/5.6.2"),
                a = ["accessList", "ccipReadEnabled", "chainId", "customData", "data", "from", "gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "to", "type", "value"],
                l = [o.Logger.errors.INSUFFICIENT_FUNDS, o.Logger.errors.NONCE_EXPIRED, o.Logger.errors.REPLACEMENT_UNDERPRICED];
            class c {
                constructor() {
                    s.checkAbstract(new.target, c), (0, n.defineReadOnly)(this, "_isSigner", !0);
                }
                getBalance(e) {
                    return i(this, void 0, void 0, function* () {
                        return this._checkProvider("getBalance"), yield this.provider.getBalance(this.getAddress(), e);
                    });
                }
                getTransactionCount(e) {
                    return i(this, void 0, void 0, function* () {
                        return this._checkProvider("getTransactionCount"), yield this.provider.getTransactionCount(this.getAddress(), e);
                    });
                }
                estimateGas(e) {
                    return i(this, void 0, void 0, function* () {
                        this._checkProvider("estimateGas");
                        const t = yield (0, n.resolveProperties)(this.checkTransaction(e));
                        return yield this.provider.estimateGas(t);
                    });
                }
                call(e, t) {
                    return i(this, void 0, void 0, function* () {
                        this._checkProvider("call");
                        const r = yield (0, n.resolveProperties)(this.checkTransaction(e));
                        return yield this.provider.call(r, t);
                    });
                }
                sendTransaction(e) {
                    return i(this, void 0, void 0, function* () {
                        this._checkProvider("sendTransaction");
                        const t = yield this.populateTransaction(e),
                            r = yield this.signTransaction(t);
                        return yield this.provider.sendTransaction(r);
                    });
                }
                getChainId() {
                    return i(this, void 0, void 0, function* () {
                        this._checkProvider("getChainId");
                        return (yield this.provider.getNetwork()).chainId;
                    });
                }
                getGasPrice() {
                    return i(this, void 0, void 0, function* () {
                        return this._checkProvider("getGasPrice"), yield this.provider.getGasPrice();
                    });
                }
                getFeeData() {
                    return i(this, void 0, void 0, function* () {
                        return this._checkProvider("getFeeData"), yield this.provider.getFeeData();
                    });
                }
                resolveName(e) {
                    return i(this, void 0, void 0, function* () {
                        return this._checkProvider("resolveName"), yield this.provider.resolveName(e);
                    });
                }
                checkTransaction(e) {
                    for (const r in e) -1 === a.indexOf(r) && s.throwArgumentError("invalid transaction key: " + r, "transaction", e);
                    const t = (0, n.shallowCopy)(e);
                    return (
                        null == t.from
                            ? (t.from = this.getAddress())
                            : (t.from = Promise.all([Promise.resolve(t.from), this.getAddress()]).then((t) => (t[0].toLowerCase() !== t[1].toLowerCase() && s.throwArgumentError("from address mismatch", "transaction", e), t[0]))),
                        t
                    );
                }
                populateTransaction(e) {
                    return i(this, void 0, void 0, function* () {
                        const t = yield (0, n.resolveProperties)(this.checkTransaction(e));
                        null != t.to &&
                            ((t.to = Promise.resolve(t.to).then((e) =>
                                i(this, void 0, void 0, function* () {
                                    if (null == e) return null;
                                    const t = yield this.resolveName(e);
                                    return null == t && s.throwArgumentError("provided ENS name resolves to null", "tx.to", e), t;
                                })
                            )),
                            t.to.catch((e) => {}));
                        const r = null != t.maxFeePerGas || null != t.maxPriorityFeePerGas;
                        if (
                            (null == t.gasPrice || (2 !== t.type && !r)
                                ? (0 !== t.type && 1 !== t.type) || !r || s.throwArgumentError("pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "transaction", e)
                                : s.throwArgumentError("eip-1559 transaction do not support gasPrice", "transaction", e),
                            (2 !== t.type && null != t.type) || null == t.maxFeePerGas || null == t.maxPriorityFeePerGas)
                        )
                            if (0 === t.type || 1 === t.type) null == t.gasPrice && (t.gasPrice = this.getGasPrice());
                            else {
                                const e = yield this.getFeeData();
                                if (null == t.type)
                                    if (null != e.maxFeePerGas && null != e.maxPriorityFeePerGas)
                                        if (((t.type = 2), null != t.gasPrice)) {
                                            const e = t.gasPrice;
                                            delete t.gasPrice, (t.maxFeePerGas = e), (t.maxPriorityFeePerGas = e);
                                        } else null == t.maxFeePerGas && (t.maxFeePerGas = e.maxFeePerGas), null == t.maxPriorityFeePerGas && (t.maxPriorityFeePerGas = e.maxPriorityFeePerGas);
                                    else
                                        null != e.gasPrice
                                            ? (r && s.throwError("network does not support EIP-1559", o.Logger.errors.UNSUPPORTED_OPERATION, { operation: "populateTransaction" }),
                                              null == t.gasPrice && (t.gasPrice = e.gasPrice),
                                              (t.type = 0))
                                            : s.throwError("failed to get consistent fee data", o.Logger.errors.UNSUPPORTED_OPERATION, { operation: "signer.getFeeData" });
                                else 2 === t.type && (null == t.maxFeePerGas && (t.maxFeePerGas = e.maxFeePerGas), null == t.maxPriorityFeePerGas && (t.maxPriorityFeePerGas = e.maxPriorityFeePerGas));
                            }
                        else t.type = 2;
                        return (
                            null == t.nonce && (t.nonce = this.getTransactionCount("pending")),
                            null == t.gasLimit &&
                                (t.gasLimit = this.estimateGas(t).catch((e) => {
                                    if (l.indexOf(e.code) >= 0) throw e;
                                    return s.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", o.Logger.errors.UNPREDICTABLE_GAS_LIMIT, { error: e, tx: t });
                                })),
                            null == t.chainId
                                ? (t.chainId = this.getChainId())
                                : (t.chainId = Promise.all([Promise.resolve(t.chainId), this.getChainId()]).then((t) => (0 !== t[1] && t[0] !== t[1] && s.throwArgumentError("chainId address mismatch", "transaction", e), t[0]))),
                            yield (0, n.resolveProperties)(t)
                        );
                    });
                }
                _checkProvider(e) {
                    this.provider || s.throwError("missing provider", o.Logger.errors.UNSUPPORTED_OPERATION, { operation: e || "_checkProvider" });
                }
                static isSigner(e) {
                    return !(!e || !e._isSigner);
                }
            }
            class u extends c {
                constructor(e, t) {
                    super(), (0, n.defineReadOnly)(this, "address", e), (0, n.defineReadOnly)(this, "provider", t || null);
                }
                getAddress() {
                    return Promise.resolve(this.address);
                }
                _fail(e, t) {
                    return Promise.resolve().then(() => {
                        s.throwError(e, o.Logger.errors.UNSUPPORTED_OPERATION, { operation: t });
                    });
                }
                signMessage(e) {
                    return this._fail("VoidSigner cannot sign messages", "signMessage");
                }
                signTransaction(e) {
                    return this._fail("VoidSigner cannot sign transactions", "signTransaction");
                }
                _signTypedData(e, t, r) {
                    return this._fail("VoidSigner cannot sign typed data", "signTypedData");
                }
                connect(e) {
                    return new u(this.address, e);
                }
            }
        },
        59567: function (e, t, r) {
            "use strict";
            r.d(t, {
                J: function () {
                    return o;
                },
                c: function () {
                    return i;
                },
            });
            var n = r(16441);
            function o(e) {
                e = atob(e);
                const t = [];
                for (let r = 0; r < e.length; r++) t.push(e.charCodeAt(r));
                return (0, n.arrayify)(t);
            }
            function i(e) {
                e = (0, n.arrayify)(e);
                let t = "";
                for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
                return btoa(t);
            }
        },
        57727: function (e, t, r) {
            "use strict";
            r.r(t),
                r.d(t, {
                    Base32: function () {
                        return s;
                    },
                    Base58: function () {
                        return a;
                    },
                    BaseX: function () {
                        return i;
                    },
                });
            var n = r(16441),
                o = r(6881);
            class i {
                constructor(e) {
                    (0, o.defineReadOnly)(this, "alphabet", e), (0, o.defineReadOnly)(this, "base", e.length), (0, o.defineReadOnly)(this, "_alphabetMap", {}), (0, o.defineReadOnly)(this, "_leader", e.charAt(0));
                    for (let t = 0; t < e.length; t++) this._alphabetMap[e.charAt(t)] = t;
                }
                encode(e) {
                    let t = (0, n.arrayify)(e);
                    if (0 === t.length) return "";
                    let r = [0];
                    for (let n = 0; n < t.length; ++n) {
                        let e = t[n];
                        for (let t = 0; t < r.length; ++t) (e += r[t] << 8), (r[t] = e % this.base), (e = (e / this.base) | 0);
                        for (; e > 0; ) r.push(e % this.base), (e = (e / this.base) | 0);
                    }
                    let o = "";
                    for (let n = 0; 0 === t[n] && n < t.length - 1; ++n) o += this._leader;
                    for (let n = r.length - 1; n >= 0; --n) o += this.alphabet[r[n]];
                    return o;
                }
                decode(e) {
                    if ("string" !== typeof e) throw new TypeError("Expected String");
                    let t = [];
                    if (0 === e.length) return new Uint8Array(t);
                    t.push(0);
                    for (let r = 0; r < e.length; r++) {
                        let n = this._alphabetMap[e[r]];
                        if (void 0 === n) throw new Error("Non-base" + this.base + " character");
                        let o = n;
                        for (let e = 0; e < t.length; ++e) (o += t[e] * this.base), (t[e] = 255 & o), (o >>= 8);
                        for (; o > 0; ) t.push(255 & o), (o >>= 8);
                    }
                    for (let r = 0; e[r] === this._leader && r < e.length - 1; ++r) t.push(0);
                    return (0, n.arrayify)(new Uint8Array(t.reverse()));
                }
            }
            const s = new i("abcdefghijklmnopqrstuvwxyz234567"),
                a = new i("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
        },
        57218: function (e, t, r) {
            "use strict";
            r.d(t, {
                R: function () {
                    return n;
                },
            });
            const n = "0x0000000000000000000000000000000000000000000000000000000000000000";
        },
        64146: function (e, t, r) {
            "use strict";
            r.d(t, {
                CH: function () {
                    return R;
                },
            });
            var n = r(61184),
                o = r(8198),
                i = r(81556),
                s = r(48088),
                a = r(19485),
                l = r(2593),
                c = r(16441),
                u = r(6881),
                h = r(83875),
                d = r(1581);
            var f = function (e, t, r, n) {
                return new (r || (r = Promise))(function (o, i) {
                    function s(e) {
                        try {
                            l(n.next(e));
                        } catch (t) {
                            i(t);
                        }
                    }
                    function a(e) {
                        try {
                            l(n.throw(e));
                        } catch (t) {
                            i(t);
                        }
                    }
                    function l(e) {
                        var t;
                        e.done
                            ? o(e.value)
                            : ((t = e.value),
                              t instanceof r
                                  ? t
                                  : new r(function (e) {
                                        e(t);
                                    })).then(s, a);
                    }
                    l((n = n.apply(e, t || [])).next());
                });
            };
            const g = new d.Logger("contracts/5.6.2");
            function m(e, t) {
                return f(this, void 0, void 0, function* () {
                    const r = yield t;
                    "string" !== typeof r && g.throwArgumentError("invalid address or ENS name", "name", r);
                    try {
                        return (0, a.getAddress)(r);
                    } catch (o) {}
                    e || g.throwError("a provider or signer is needed to resolve ENS names", d.Logger.errors.UNSUPPORTED_OPERATION, { operation: "resolveName" });
                    const n = yield e.resolveName(r);
                    return null == n && g.throwArgumentError("resolver or addr is not configured for ENS name", "name", r), n;
                });
            }
            function p(e, t, r) {
                return f(this, void 0, void 0, function* () {
                    return Array.isArray(r)
                        ? yield Promise.all(r.map((r, n) => p(e, Array.isArray(t) ? t[n] : t[r.name], r)))
                        : "address" === r.type
                        ? yield m(e, t)
                        : "tuple" === r.type
                        ? yield p(e, t, r.components)
                        : "array" === r.baseType
                        ? Array.isArray(t)
                            ? yield Promise.all(t.map((t) => p(e, t, r.arrayChildren)))
                            : Promise.reject(g.makeError("invalid value for array", d.Logger.errors.INVALID_ARGUMENT, { argument: "value", value: t }))
                        : t;
                });
            }
            function y(e, t, r) {
                return f(this, void 0, void 0, function* () {
                    let n = {};
                    r.length === t.inputs.length + 1 && "object" === typeof r[r.length - 1] && (n = (0, u.shallowCopy)(r.pop())),
                        g.checkArgumentCount(r.length, t.inputs.length, "passed to contract"),
                        e.signer
                            ? n.from
                                ? (n.from = (0, u.resolveProperties)({ override: m(e.signer, n.from), signer: e.signer.getAddress() }).then((e) =>
                                      f(this, void 0, void 0, function* () {
                                          return (0, a.getAddress)(e.signer) !== e.override && g.throwError("Contract with a Signer cannot override from", d.Logger.errors.UNSUPPORTED_OPERATION, { operation: "overrides.from" }), e.override;
                                      })
                                  ))
                                : (n.from = e.signer.getAddress())
                            : n.from && (n.from = m(e.provider, n.from));
                    const o = yield (0, u.resolveProperties)({ args: p(e.signer || e.provider, r, t.inputs), address: e.resolvedAddress, overrides: (0, u.resolveProperties)(n) || {} }),
                        i = e.interface.encodeFunctionData(t, o.args),
                        s = { data: i, to: o.address },
                        y = o.overrides;
                    if (
                        (null != y.nonce && (s.nonce = l.O$.from(y.nonce).toNumber()),
                        null != y.gasLimit && (s.gasLimit = l.O$.from(y.gasLimit)),
                        null != y.gasPrice && (s.gasPrice = l.O$.from(y.gasPrice)),
                        null != y.maxFeePerGas && (s.maxFeePerGas = l.O$.from(y.maxFeePerGas)),
                        null != y.maxPriorityFeePerGas && (s.maxPriorityFeePerGas = l.O$.from(y.maxPriorityFeePerGas)),
                        null != y.from && (s.from = y.from),
                        null != y.type && (s.type = y.type),
                        null != y.accessList && (s.accessList = (0, h.accessListify)(y.accessList)),
                        null == s.gasLimit && null != t.gas)
                    ) {
                        let e = 21e3;
                        const r = (0, c.arrayify)(i);
                        for (let t = 0; t < r.length; t++) (e += 4), r[t] && (e += 64);
                        s.gasLimit = l.O$.from(t.gas).add(e);
                    }
                    if (y.value) {
                        const e = l.O$.from(y.value);
                        e.isZero() || t.payable || g.throwError("non-payable method cannot override value", d.Logger.errors.UNSUPPORTED_OPERATION, { operation: "overrides.value", value: n.value }), (s.value = e);
                    }
                    y.customData && (s.customData = (0, u.shallowCopy)(y.customData)),
                        y.ccipReadEnabled && (s.ccipReadEnabled = !!y.ccipReadEnabled),
                        delete n.nonce,
                        delete n.gasLimit,
                        delete n.gasPrice,
                        delete n.from,
                        delete n.value,
                        delete n.type,
                        delete n.accessList,
                        delete n.maxFeePerGas,
                        delete n.maxPriorityFeePerGas,
                        delete n.customData,
                        delete n.ccipReadEnabled;
                    const v = Object.keys(n).filter((e) => null != n[e]);
                    return v.length && g.throwError(`cannot override ${v.map((e) => JSON.stringify(e)).join(",")}`, d.Logger.errors.UNSUPPORTED_OPERATION, { operation: "overrides", overrides: v }), s;
                });
            }
            function v(e, t) {
                const r = t.wait.bind(t);
                t.wait = (t) =>
                    r(t).then(
                        (t) => (
                            (t.events = t.logs.map((r) => {
                                let n = (0, u.deepCopy)(r),
                                    o = null;
                                try {
                                    o = e.interface.parseLog(r);
                                } catch (i) {}
                                return (
                                    o && ((n.args = o.args), (n.decode = (t, r) => e.interface.decodeEventLog(o.eventFragment, t, r)), (n.event = o.name), (n.eventSignature = o.signature)),
                                    (n.removeListener = () => e.provider),
                                    (n.getBlock = () => e.provider.getBlock(t.blockHash)),
                                    (n.getTransaction = () => e.provider.getTransaction(t.transactionHash)),
                                    (n.getTransactionReceipt = () => Promise.resolve(t)),
                                    n
                                );
                            })),
                            t
                        )
                    );
            }
            function b(e, t, r) {
                const n = e.signer || e.provider;
                return function (...o) {
                    return f(this, void 0, void 0, function* () {
                        let i;
                        if (o.length === t.inputs.length + 1 && "object" === typeof o[o.length - 1]) {
                            const e = (0, u.shallowCopy)(o.pop());
                            null != e.blockTag && (i = yield e.blockTag), delete e.blockTag, o.push(e);
                        }
                        null != e.deployTransaction && (yield e._deployed(i));
                        const s = yield y(e, t, o),
                            a = yield n.call(s, i);
                        try {
                            let n = e.interface.decodeFunctionResult(t, a);
                            return r && 1 === t.outputs.length && (n = n[0]), n;
                        } catch (l) {
                            throw (l.code === d.Logger.errors.CALL_EXCEPTION && ((l.address = e.address), (l.args = o), (l.transaction = s)), l);
                        }
                    });
                };
            }
            function w(e, t, r) {
                return t.constant
                    ? b(e, t, r)
                    : (function (e, t) {
                          return function (...r) {
                              return f(this, void 0, void 0, function* () {
                                  e.signer || g.throwError("sending a transaction requires a signer", d.Logger.errors.UNSUPPORTED_OPERATION, { operation: "sendTransaction" }), null != e.deployTransaction && (yield e._deployed());
                                  const n = yield y(e, t, r),
                                      o = yield e.signer.sendTransaction(n);
                                  return v(e, o), o;
                              });
                          };
                      })(e, t);
            }
            function E(e) {
                return !e.address || (null != e.topics && 0 !== e.topics.length) ? (e.address || "*") + "@" + (e.topics ? e.topics.map((e) => (Array.isArray(e) ? e.join("|") : e)).join(":") : "") : "*";
            }
            class _ {
                constructor(e, t) {
                    (0, u.defineReadOnly)(this, "tag", e), (0, u.defineReadOnly)(this, "filter", t), (this._listeners = []);
                }
                addListener(e, t) {
                    this._listeners.push({ listener: e, once: t });
                }
                removeListener(e) {
                    let t = !1;
                    this._listeners = this._listeners.filter((r) => !(!t && r.listener === e) || ((t = !0), !1));
                }
                removeAllListeners() {
                    this._listeners = [];
                }
                listeners() {
                    return this._listeners.map((e) => e.listener);
                }
                listenerCount() {
                    return this._listeners.length;
                }
                run(e) {
                    const t = this.listenerCount();
                    return (
                        (this._listeners = this._listeners.filter((t) => {
                            const r = e.slice();
                            return (
                                setTimeout(() => {
                                    t.listener.apply(this, r);
                                }, 0),
                                !t.once
                            );
                        })),
                        t
                    );
                }
                prepareEvent(e) {}
                getEmit(e) {
                    return [e];
                }
            }
            class k extends _ {
                constructor() {
                    super("error", null);
                }
            }
            class P extends _ {
                constructor(e, t, r, n) {
                    const o = { address: e };
                    let i = t.getEventTopic(r);
                    n ? (i !== n[0] && g.throwArgumentError("topic mismatch", "topics", n), (o.topics = n.slice())) : (o.topics = [i]),
                        super(E(o), o),
                        (0, u.defineReadOnly)(this, "address", e),
                        (0, u.defineReadOnly)(this, "interface", t),
                        (0, u.defineReadOnly)(this, "fragment", r);
                }
                prepareEvent(e) {
                    super.prepareEvent(e), (e.event = this.fragment.name), (e.eventSignature = this.fragment.format()), (e.decode = (e, t) => this.interface.decodeEventLog(this.fragment, e, t));
                    try {
                        e.args = this.interface.decodeEventLog(this.fragment, e.data, e.topics);
                    } catch (t) {
                        (e.args = null), (e.decodeError = t);
                    }
                }
                getEmit(e) {
                    const t = (0, n.BR)(e.args);
                    if (t.length) throw t[0].error;
                    const r = (e.args || []).slice();
                    return r.push(e), r;
                }
            }
            class N extends _ {
                constructor(e, t) {
                    super("*", { address: e }), (0, u.defineReadOnly)(this, "address", e), (0, u.defineReadOnly)(this, "interface", t);
                }
                prepareEvent(e) {
                    super.prepareEvent(e);
                    try {
                        const t = this.interface.parseLog(e);
                        (e.event = t.name), (e.eventSignature = t.signature), (e.decode = (e, r) => this.interface.decodeEventLog(t.eventFragment, e, r)), (e.args = t.args);
                    } catch (t) {}
                }
            }
            class R extends class {
                constructor(e, t, r) {
                    (0, u.defineReadOnly)(this, "interface", (0, u.getStatic)(new.target, "getInterface")(t)),
                        null == r
                            ? ((0, u.defineReadOnly)(this, "provider", null), (0, u.defineReadOnly)(this, "signer", null))
                            : s.E.isSigner(r)
                            ? ((0, u.defineReadOnly)(this, "provider", r.provider || null), (0, u.defineReadOnly)(this, "signer", r))
                            : i.zt.isProvider(r)
                            ? ((0, u.defineReadOnly)(this, "provider", r), (0, u.defineReadOnly)(this, "signer", null))
                            : g.throwArgumentError("invalid signer or provider", "signerOrProvider", r),
                        (0, u.defineReadOnly)(this, "callStatic", {}),
                        (0, u.defineReadOnly)(this, "estimateGas", {}),
                        (0, u.defineReadOnly)(this, "functions", {}),
                        (0, u.defineReadOnly)(this, "populateTransaction", {}),
                        (0, u.defineReadOnly)(this, "filters", {});
                    {
                        const e = {};
                        Object.keys(this.interface.events).forEach((t) => {
                            const r = this.interface.events[t];
                            (0, u.defineReadOnly)(this.filters, t, (...e) => ({ address: this.address, topics: this.interface.encodeFilterTopics(r, e) })), e[r.name] || (e[r.name] = []), e[r.name].push(t);
                        }),
                            Object.keys(e).forEach((t) => {
                                const r = e[t];
                                1 === r.length ? (0, u.defineReadOnly)(this.filters, t, this.filters[r[0]]) : g.warn(`Duplicate definition of ${t} (${r.join(", ")})`);
                            });
                    }
                    if (
                        ((0, u.defineReadOnly)(this, "_runningEvents", {}),
                        (0, u.defineReadOnly)(this, "_wrappedEmits", {}),
                        null == e && g.throwArgumentError("invalid contract address or ENS name", "addressOrName", e),
                        (0, u.defineReadOnly)(this, "address", e),
                        this.provider)
                    )
                        (0, u.defineReadOnly)(this, "resolvedAddress", m(this.provider, e));
                    else
                        try {
                            (0, u.defineReadOnly)(this, "resolvedAddress", Promise.resolve((0, a.getAddress)(e)));
                        } catch (l) {
                            g.throwError("provider is required to use ENS name as contract address", d.Logger.errors.UNSUPPORTED_OPERATION, { operation: "new Contract" });
                        }
                    this.resolvedAddress.catch((e) => {});
                    const n = {},
                        o = {};
                    Object.keys(this.interface.functions).forEach((e) => {
                        const t = this.interface.functions[e];
                        if (o[e]) g.warn(`Duplicate ABI entry for ${JSON.stringify(e)}`);
                        else {
                            o[e] = !0;
                            {
                                const r = t.name;
                                n[`%${r}`] || (n[`%${r}`] = []), n[`%${r}`].push(e);
                            }
                            null == this[e] && (0, u.defineReadOnly)(this, e, w(this, t, !0)),
                                null == this.functions[e] && (0, u.defineReadOnly)(this.functions, e, w(this, t, !1)),
                                null == this.callStatic[e] && (0, u.defineReadOnly)(this.callStatic, e, b(this, t, !0)),
                                null == this.populateTransaction[e] &&
                                    (0, u.defineReadOnly)(
                                        this.populateTransaction,
                                        e,
                                        (function (e, t) {
                                            return function (...r) {
                                                return y(e, t, r);
                                            };
                                        })(this, t)
                                    ),
                                null == this.estimateGas[e] &&
                                    (0, u.defineReadOnly)(
                                        this.estimateGas,
                                        e,
                                        (function (e, t) {
                                            const r = e.signer || e.provider;
                                            return function (...n) {
                                                return f(this, void 0, void 0, function* () {
                                                    r || g.throwError("estimate require a provider or signer", d.Logger.errors.UNSUPPORTED_OPERATION, { operation: "estimateGas" });
                                                    const o = yield y(e, t, n);
                                                    return yield r.estimateGas(o);
                                                });
                                            };
                                        })(this, t)
                                    );
                        }
                    }),
                        Object.keys(n).forEach((e) => {
                            const t = n[e];
                            if (t.length > 1) return;
                            e = e.substring(1);
                            const r = t[0];
                            try {
                                null == this[e] && (0, u.defineReadOnly)(this, e, this[r]);
                            } catch (o) {}
                            null == this.functions[e] && (0, u.defineReadOnly)(this.functions, e, this.functions[r]),
                                null == this.callStatic[e] && (0, u.defineReadOnly)(this.callStatic, e, this.callStatic[r]),
                                null == this.populateTransaction[e] && (0, u.defineReadOnly)(this.populateTransaction, e, this.populateTransaction[r]),
                                null == this.estimateGas[e] && (0, u.defineReadOnly)(this.estimateGas, e, this.estimateGas[r]);
                        });
                }
                static getContractAddress(e) {
                    return (0, a.getContractAddress)(e);
                }
                static getInterface(e) {
                    return o.vU.isInterface(e) ? e : new o.vU(e);
                }
                deployed() {
                    return this._deployed();
                }
                _deployed(e) {
                    return (
                        this._deployedPromise ||
                            (this.deployTransaction
                                ? (this._deployedPromise = this.deployTransaction.wait().then(() => this))
                                : (this._deployedPromise = this.provider
                                      .getCode(this.address, e)
                                      .then((e) => ("0x" === e && g.throwError("contract not deployed", d.Logger.errors.UNSUPPORTED_OPERATION, { contractAddress: this.address, operation: "getDeployed" }), this)))),
                        this._deployedPromise
                    );
                }
                fallback(e) {
                    this.signer || g.throwError("sending a transactions require a signer", d.Logger.errors.UNSUPPORTED_OPERATION, { operation: "sendTransaction(fallback)" });
                    const t = (0, u.shallowCopy)(e || {});
                    return (
                        ["from", "to"].forEach(function (e) {
                            null != t[e] && g.throwError("cannot override " + e, d.Logger.errors.UNSUPPORTED_OPERATION, { operation: e });
                        }),
                        (t.to = this.resolvedAddress),
                        this.deployed().then(() => this.signer.sendTransaction(t))
                    );
                }
                connect(e) {
                    "string" === typeof e && (e = new s.b(e, this.provider));
                    const t = new this.constructor(this.address, this.interface, e);
                    return this.deployTransaction && (0, u.defineReadOnly)(t, "deployTransaction", this.deployTransaction), t;
                }
                attach(e) {
                    return new this.constructor(e, this.interface, this.signer || this.provider);
                }
                static isIndexed(e) {
                    return o.Hk.isIndexed(e);
                }
                _normalizeRunningEvent(e) {
                    return this._runningEvents[e.tag] ? this._runningEvents[e.tag] : e;
                }
                _getRunningEvent(e) {
                    if ("string" === typeof e) {
                        if ("error" === e) return this._normalizeRunningEvent(new k());
                        if ("event" === e) return this._normalizeRunningEvent(new _("event", null));
                        if ("*" === e) return this._normalizeRunningEvent(new N(this.address, this.interface));
                        const t = this.interface.getEvent(e);
                        return this._normalizeRunningEvent(new P(this.address, this.interface, t));
                    }
                    if (e.topics && e.topics.length > 0) {
                        try {
                            const t = e.topics[0];
                            if ("string" !== typeof t) throw new Error("invalid topic");
                            const r = this.interface.getEvent(t);
                            return this._normalizeRunningEvent(new P(this.address, this.interface, r, e.topics));
                        } catch (t) {}
                        const r = { address: this.address, topics: e.topics };
                        return this._normalizeRunningEvent(new _(E(r), r));
                    }
                    return this._normalizeRunningEvent(new N(this.address, this.interface));
                }
                _checkRunningEvents(e) {
                    if (0 === e.listenerCount()) {
                        delete this._runningEvents[e.tag];
                        const t = this._wrappedEmits[e.tag];
                        t && e.filter && (this.provider.off(e.filter, t), delete this._wrappedEmits[e.tag]);
                    }
                }
                _wrapEvent(e, t, r) {
                    const n = (0, u.deepCopy)(t);
                    return (
                        (n.removeListener = () => {
                            r && (e.removeListener(r), this._checkRunningEvents(e));
                        }),
                        (n.getBlock = () => this.provider.getBlock(t.blockHash)),
                        (n.getTransaction = () => this.provider.getTransaction(t.transactionHash)),
                        (n.getTransactionReceipt = () => this.provider.getTransactionReceipt(t.transactionHash)),
                        e.prepareEvent(n),
                        n
                    );
                }
                _addEventListener(e, t, r) {
                    if (
                        (this.provider || g.throwError("events require a provider or a signer with a provider", d.Logger.errors.UNSUPPORTED_OPERATION, { operation: "once" }),
                        e.addListener(t, r),
                        (this._runningEvents[e.tag] = e),
                        !this._wrappedEmits[e.tag])
                    ) {
                        const r = (r) => {
                            let n = this._wrapEvent(e, r, t);
                            if (null == n.decodeError)
                                try {
                                    const t = e.getEmit(n);
                                    this.emit(e.filter, ...t);
                                } catch (o) {
                                    n.decodeError = o.error;
                                }
                            null != e.filter && this.emit("event", n), null != n.decodeError && this.emit("error", n.decodeError, n);
                        };
                        (this._wrappedEmits[e.tag] = r), null != e.filter && this.provider.on(e.filter, r);
                    }
                }
                queryFilter(e, t, r) {
                    const n = this._getRunningEvent(e),
                        o = (0, u.shallowCopy)(n.filter);
                    return (
                        "string" === typeof t && (0, c.isHexString)(t, 32)
                            ? (null != r && g.throwArgumentError("cannot specify toBlock with blockhash", "toBlock", r), (o.blockHash = t))
                            : ((o.fromBlock = null != t ? t : 0), (o.toBlock = null != r ? r : "latest")),
                        this.provider.getLogs(o).then((e) => e.map((e) => this._wrapEvent(n, e, null)))
                    );
                }
                on(e, t) {
                    return this._addEventListener(this._getRunningEvent(e), t, !1), this;
                }
                once(e, t) {
                    return this._addEventListener(this._getRunningEvent(e), t, !0), this;
                }
                emit(e, ...t) {
                    if (!this.provider) return !1;
                    const r = this._getRunningEvent(e),
                        n = r.run(t) > 0;
                    return this._checkRunningEvents(r), n;
                }
                listenerCount(e) {
                    return this.provider ? (null == e ? Object.keys(this._runningEvents).reduce((e, t) => e + this._runningEvents[t].listenerCount(), 0) : this._getRunningEvent(e).listenerCount()) : 0;
                }
                listeners(e) {
                    if (!this.provider) return [];
                    if (null == e) {
                        const e = [];
                        for (let t in this._runningEvents)
                            this._runningEvents[t].listeners().forEach((t) => {
                                e.push(t);
                            });
                        return e;
                    }
                    return this._getRunningEvent(e).listeners();
                }
                removeAllListeners(e) {
                    if (!this.provider) return this;
                    if (null == e) {
                        for (const e in this._runningEvents) {
                            const t = this._runningEvents[e];
                            t.removeAllListeners(), this._checkRunningEvents(t);
                        }
                        return this;
                    }
                    const t = this._getRunningEvent(e);
                    return t.removeAllListeners(), this._checkRunningEvents(t), this;
                }
                off(e, t) {
                    if (!this.provider) return this;
                    const r = this._getRunningEvent(e);
                    return r.removeListener(t), this._checkRunningEvents(r), this;
                }
                removeListener(e, t) {
                    return this.off(e, t);
                }
            } {}
        },
        35644: function (e, t, r) {
            "use strict";
            r.d(t, {
                i: function () {
                    return n;
                },
            });
            const n = "hash/5.6.1";
        },
        84706: function (e, t, r) {
            "use strict";
            r.d(t, {
                Kn: function () {
                    return g;
                },
                VM: function () {
                    return f;
                },
                r1: function () {
                    return d;
                },
            });
            var n = r(16441),
                o = r(35637),
                i = r(29251),
                s = r(38197),
                a = r(1581),
                l = r(35644);
            const c = new a.Logger(l.i),
                u = new Uint8Array(32);
            u.fill(0);
            const h = new RegExp("^((.*)\\.)?([^.]+)$");
            function d(e) {
                try {
                    const t = e.split(".");
                    for (let e = 0; e < t.length; e++) if (0 === (0, o.Ll)(t[e]).length) throw new Error("empty");
                    return !0;
                } catch (t) {}
                return !1;
            }
            function f(e) {
                "string" !== typeof e && c.throwArgumentError("invalid ENS name; not a string", "name", e);
                let t = e,
                    r = u;
                for (; t.length; ) {
                    const a = t.match(h);
                    (null != a && "" !== a[2]) || c.throwArgumentError("invalid ENS address; missing component", "name", e);
                    const l = (0, i.Y0)((0, o.Ll)(a[3]));
                    (r = (0, s.keccak256)((0, n.concat)([r, (0, s.keccak256)(l)]))), (t = a[2] || "");
                }
                return (0, n.hexlify)(r);
            }
            function g(e) {
                return (
                    (0, n.hexlify)(
                        (0, n.concat)(
                            e.split(".").map((e) => {
                                const t = (0, i.Y0)("_" + (0, o.Ll)(e));
                                return (t[0] = t.length - 1), t;
                            })
                        )
                    ) + "00"
                );
            }
        },
        67827: function (e, t, r) {
            "use strict";
            r.d(t, {
                E: function () {
                    return R;
                },
            });
            var n = r(19485),
                o = r(2593),
                i = r(16441),
                s = r(38197),
                a = r(6881),
                l = r(1581),
                c = r(35644),
                u = r(32046),
                h = function (e, t, r, n) {
                    return new (r || (r = Promise))(function (o, i) {
                        function s(e) {
                            try {
                                l(n.next(e));
                            } catch (t) {
                                i(t);
                            }
                        }
                        function a(e) {
                            try {
                                l(n.throw(e));
                            } catch (t) {
                                i(t);
                            }
                        }
                        function l(e) {
                            var t;
                            e.done
                                ? o(e.value)
                                : ((t = e.value),
                                  t instanceof r
                                      ? t
                                      : new r(function (e) {
                                            e(t);
                                        })).then(s, a);
                        }
                        l((n = n.apply(e, t || [])).next());
                    });
                };
            const d = new l.Logger(c.i),
                f = new Uint8Array(32);
            f.fill(0);
            const g = o.O$.from(-1),
                m = o.O$.from(0),
                p = o.O$.from(1),
                y = o.O$.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
            const v = (0, i.hexZeroPad)(p.toHexString(), 32),
                b = (0, i.hexZeroPad)(m.toHexString(), 32),
                w = { name: "string", version: "string", chainId: "uint256", verifyingContract: "address", salt: "bytes32" },
                E = ["name", "version", "chainId", "verifyingContract", "salt"];
            function _(e) {
                return function (t) {
                    return "string" !== typeof t && d.throwArgumentError(`invalid domain value for ${JSON.stringify(e)}`, `domain.${e}`, t), t;
                };
            }
            const k = {
                name: _("name"),
                version: _("version"),
                chainId: function (e) {
                    try {
                        return o.O$.from(e).toString();
                    } catch (t) {}
                    return d.throwArgumentError('invalid domain value for "chainId"', "domain.chainId", e);
                },
                verifyingContract: function (e) {
                    try {
                        return (0, n.getAddress)(e).toLowerCase();
                    } catch (t) {}
                    return d.throwArgumentError('invalid domain value "verifyingContract"', "domain.verifyingContract", e);
                },
                salt: function (e) {
                    try {
                        const t = (0, i.arrayify)(e);
                        if (32 !== t.length) throw new Error("bad length");
                        return (0, i.hexlify)(t);
                    } catch (t) {}
                    return d.throwArgumentError('invalid domain value "salt"', "domain.salt", e);
                },
            };
            function P(e) {
                {
                    const t = e.match(/^(u?)int(\d*)$/);
                    if (t) {
                        const r = "" === t[1],
                            n = parseInt(t[2] || "256");
                        (n % 8 !== 0 || n > 256 || (t[2] && t[2] !== String(n))) && d.throwArgumentError("invalid numeric width", "type", e);
                        const s = y.mask(r ? n - 1 : n),
                            a = r ? s.add(p).mul(g) : m;
                        return function (t) {
                            const r = o.O$.from(t);
                            return (r.lt(a) || r.gt(s)) && d.throwArgumentError(`value out-of-bounds for ${e}`, "value", t), (0, i.hexZeroPad)(r.toTwos(256).toHexString(), 32);
                        };
                    }
                }
                {
                    const t = e.match(/^bytes(\d+)$/);
                    if (t) {
                        const r = parseInt(t[1]);
                        return (
                            (0 === r || r > 32 || t[1] !== String(r)) && d.throwArgumentError("invalid bytes width", "type", e),
                            function (t) {
                                return (
                                    (0, i.arrayify)(t).length !== r && d.throwArgumentError(`invalid length for ${e}`, "value", t),
                                    (function (e) {
                                        const t = (0, i.arrayify)(e),
                                            r = t.length % 32;
                                        return r ? (0, i.hexConcat)([t, f.slice(r)]) : (0, i.hexlify)(t);
                                    })(t)
                                );
                            }
                        );
                    }
                }
                switch (e) {
                    case "address":
                        return function (e) {
                            return (0, i.hexZeroPad)((0, n.getAddress)(e), 32);
                        };
                    case "bool":
                        return function (e) {
                            return e ? v : b;
                        };
                    case "bytes":
                        return function (e) {
                            return (0, s.keccak256)(e);
                        };
                    case "string":
                        return function (e) {
                            return (0, u.id)(e);
                        };
                }
                return null;
            }
            function N(e, t) {
                return `${e}(${t.map(({ name: e, type: t }) => t + " " + e).join(",")})`;
            }
            class R {
                constructor(e) {
                    (0, a.defineReadOnly)(this, "types", Object.freeze((0, a.deepCopy)(e))), (0, a.defineReadOnly)(this, "_encoderCache", {}), (0, a.defineReadOnly)(this, "_types", {});
                    const t = {},
                        r = {},
                        n = {};
                    Object.keys(e).forEach((e) => {
                        (t[e] = {}), (r[e] = []), (n[e] = {});
                    });
                    for (const i in e) {
                        const n = {};
                        e[i].forEach((o) => {
                            n[o.name] && d.throwArgumentError(`duplicate variable name ${JSON.stringify(o.name)} in ${JSON.stringify(i)}`, "types", e), (n[o.name] = !0);
                            const s = o.type.match(/^([^\x5b]*)(\x5b|$)/)[1];
                            s === i && d.throwArgumentError(`circular type reference to ${JSON.stringify(s)}`, "types", e);
                            P(s) || (r[s] || d.throwArgumentError(`unknown type ${JSON.stringify(s)}`, "types", e), r[s].push(i), (t[i][s] = !0));
                        });
                    }
                    const o = Object.keys(r).filter((e) => 0 === r[e].length);
                    0 === o.length ? d.throwArgumentError("missing primary type", "types", e) : o.length > 1 && d.throwArgumentError(`ambiguous primary types or unused types: ${o.map((e) => JSON.stringify(e)).join(", ")}`, "types", e),
                        (0, a.defineReadOnly)(this, "primaryType", o[0]),
                        (function o(i, s) {
                            s[i] && d.throwArgumentError(`circular type reference to ${JSON.stringify(i)}`, "types", e),
                                (s[i] = !0),
                                Object.keys(t[i]).forEach((e) => {
                                    r[e] &&
                                        (o(e, s),
                                        Object.keys(s).forEach((t) => {
                                            n[t][e] = !0;
                                        }));
                                }),
                                delete s[i];
                        })(this.primaryType, {});
                    for (const i in n) {
                        const t = Object.keys(n[i]);
                        t.sort(), (this._types[i] = N(i, e[i]) + t.map((t) => N(t, e[t])).join(""));
                    }
                }
                getEncoder(e) {
                    let t = this._encoderCache[e];
                    return t || (t = this._encoderCache[e] = this._getEncoder(e)), t;
                }
                _getEncoder(e) {
                    {
                        const t = P(e);
                        if (t) return t;
                    }
                    const t = e.match(/^(.*)(\x5b(\d*)\x5d)$/);
                    if (t) {
                        const e = t[1],
                            r = this.getEncoder(e),
                            n = parseInt(t[3]);
                        return (t) => {
                            n >= 0 && t.length !== n && d.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", t);
                            let o = t.map(r);
                            return this._types[e] && (o = o.map(s.keccak256)), (0, s.keccak256)((0, i.hexConcat)(o));
                        };
                    }
                    const r = this.types[e];
                    if (r) {
                        const t = (0, u.id)(this._types[e]);
                        return (e) => {
                            const n = r.map(({ name: t, type: r }) => {
                                const n = this.getEncoder(r)(e[t]);
                                return this._types[r] ? (0, s.keccak256)(n) : n;
                            });
                            return n.unshift(t), (0, i.hexConcat)(n);
                        };
                    }
                    return d.throwArgumentError(`unknown type: ${e}`, "type", e);
                }
                encodeType(e) {
                    const t = this._types[e];
                    return t || d.throwArgumentError(`unknown type: ${JSON.stringify(e)}`, "name", e), t;
                }
                encodeData(e, t) {
                    return this.getEncoder(e)(t);
                }
                hashStruct(e, t) {
                    return (0, s.keccak256)(this.encodeData(e, t));
                }
                encode(e) {
                    return this.encodeData(this.primaryType, e);
                }
                hash(e) {
                    return this.hashStruct(this.primaryType, e);
                }
                _visit(e, t, r) {
                    if (P(e)) return r(e, t);
                    const n = e.match(/^(.*)(\x5b(\d*)\x5d)$/);
                    if (n) {
                        const e = n[1],
                            o = parseInt(n[3]);
                        return o >= 0 && t.length !== o && d.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", t), t.map((t) => this._visit(e, t, r));
                    }
                    const o = this.types[e];
                    return o ? o.reduce((e, { name: n, type: o }) => ((e[n] = this._visit(o, t[n], r)), e), {}) : d.throwArgumentError(`unknown type: ${e}`, "type", e);
                }
                visit(e, t) {
                    return this._visit(this.primaryType, e, t);
                }
                static from(e) {
                    return new R(e);
                }
                static getPrimaryType(e) {
                    return R.from(e).primaryType;
                }
                static hashStruct(e, t, r) {
                    return R.from(t).hashStruct(e, r);
                }
                static hashDomain(e) {
                    const t = [];
                    for (const r in e) {
                        const n = w[r];
                        n || d.throwArgumentError(`invalid typed-data domain key: ${JSON.stringify(r)}`, "domain", e), t.push({ name: r, type: n });
                    }
                    return t.sort((e, t) => E.indexOf(e.name) - E.indexOf(t.name)), R.hashStruct("EIP712Domain", { EIP712Domain: t }, e);
                }
                static encode(e, t, r) {
                    return (0, i.hexConcat)(["0x1901", R.hashDomain(e), R.from(t).hash(r)]);
                }
                static hash(e, t, r) {
                    return (0, s.keccak256)(R.encode(e, t, r));
                }
                static resolveNames(e, t, r, n) {
                    return h(this, void 0, void 0, function* () {
                        e = (0, a.shallowCopy)(e);
                        const o = {};
                        e.verifyingContract && !(0, i.isHexString)(e.verifyingContract, 20) && (o[e.verifyingContract] = "0x");
                        const s = R.from(t);
                        s.visit(r, (e, t) => ("address" !== e || (0, i.isHexString)(t, 20) || (o[t] = "0x"), t));
                        for (const e in o) o[e] = yield n(e);
                        return e.verifyingContract && o[e.verifyingContract] && (e.verifyingContract = o[e.verifyingContract]), (r = s.visit(r, (e, t) => ("address" === e && o[t] ? o[t] : t))), { domain: e, value: r };
                    });
                }
                static getPayload(e, t, r) {
                    R.hashDomain(e);
                    const n = {},
                        s = [];
                    E.forEach((t) => {
                        const r = e[t];
                        null != r && ((n[t] = k[t](r)), s.push({ name: t, type: w[t] }));
                    });
                    const l = R.from(t),
                        c = (0, a.shallowCopy)(t);
                    return (
                        c.EIP712Domain ? d.throwArgumentError("types must not contain EIP712Domain type", "types.EIP712Domain", t) : (c.EIP712Domain = s),
                        l.encode(r),
                        {
                            types: c,
                            domain: n,
                            primaryType: l.primaryType,
                            message: l.visit(r, (e, t) => {
                                if (e.match(/^bytes(\d*)/)) return (0, i.hexlify)((0, i.arrayify)(t));
                                if (e.match(/^u?int/)) return o.O$.from(t).toString();
                                switch (e) {
                                    case "address":
                                        return t.toLowerCase();
                                    case "bool":
                                        return !!t;
                                    case "string":
                                        return "string" !== typeof t && d.throwArgumentError("invalid string", "value", t), t;
                                }
                                return d.throwArgumentError("unsupported type", "type", e);
                            }),
                        }
                    );
                }
            }
        },
        85739: function (e, t, r) {
            "use strict";
            r.d(t, {
                r: function () {
                    return fe;
                },
            });
            var n = r(48088),
                o = r(2593),
                i = r(16441),
                s = r(67827),
                a = r(6881),
                l = r(29251),
                c = r(83875),
                u = r(37707),
                h = r(1581);
            const d = "providers/5.6.8";
            var f = r(81556),
                g = r(59567),
                m = r(57727),
                p = r(57218),
                y = r(84706);
            const v = new h.Logger("networks/5.6.4");
            function b(e) {
                const t = function (t, r) {
                    null == r && (r = {});
                    const n = [];
                    if (t.InfuraProvider && "-" !== r.infura)
                        try {
                            n.push(new t.InfuraProvider(e, r.infura));
                        } catch (o) {}
                    if (t.EtherscanProvider && "-" !== r.etherscan)
                        try {
                            n.push(new t.EtherscanProvider(e, r.etherscan));
                        } catch (o) {}
                    if (t.AlchemyProvider && "-" !== r.alchemy)
                        try {
                            n.push(new t.AlchemyProvider(e, r.alchemy));
                        } catch (o) {}
                    if (t.PocketProvider && "-" !== r.pocket) {
                        const i = ["goerli", "ropsten", "rinkeby"];
                        try {
                            const o = new t.PocketProvider(e, r.pocket);
                            o.network && -1 === i.indexOf(o.network.name) && n.push(o);
                        } catch (o) {}
                    }
                    if (t.CloudflareProvider && "-" !== r.cloudflare)
                        try {
                            n.push(new t.CloudflareProvider(e));
                        } catch (o) {}
                    if (t.AnkrProvider && "-" !== r.ankr)
                        try {
                            const o = ["ropsten"],
                                i = new t.AnkrProvider(e, r.ankr);
                            i.network && -1 === o.indexOf(i.network.name) && n.push(i);
                        } catch (o) {}
                    if (0 === n.length) return null;
                    if (t.FallbackProvider) {
                        let o = 1;
                        return null != r.quorum ? (o = r.quorum) : "homestead" === e && (o = 2), new t.FallbackProvider(n, o);
                    }
                    return n[0];
                };
                return (
                    (t.renetwork = function (e) {
                        return b(e);
                    }),
                    t
                );
            }
            function w(e, t) {
                const r = function (r, n) {
                    return r.JsonRpcProvider ? new r.JsonRpcProvider(e, t) : null;
                };
                return (
                    (r.renetwork = function (t) {
                        return w(e, t);
                    }),
                    r
                );
            }
            const E = { chainId: 1, ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e", name: "homestead", _defaultProvider: b("homestead") },
                _ = { chainId: 3, ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e", name: "ropsten", _defaultProvider: b("ropsten") },
                k = { chainId: 63, name: "classicMordor", _defaultProvider: w("https://www.ethercluster.com/mordor", "classicMordor") },
                P = {
                    unspecified: { chainId: 0, name: "unspecified" },
                    homestead: E,
                    mainnet: E,
                    morden: { chainId: 2, name: "morden" },
                    ropsten: _,
                    testnet: _,
                    rinkeby: { chainId: 4, ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e", name: "rinkeby", _defaultProvider: b("rinkeby") },
                    kovan: { chainId: 42, name: "kovan", _defaultProvider: b("kovan") },
                    goerli: { chainId: 5, ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e", name: "goerli", _defaultProvider: b("goerli") },
                    kintsugi: { chainId: 1337702, name: "kintsugi" },
                    classic: { chainId: 61, name: "classic", _defaultProvider: w("https://www.ethercluster.com/etc", "classic") },
                    classicMorden: { chainId: 62, name: "classicMorden" },
                    classicMordor: k,
                    classicTestnet: k,
                    classicKotti: { chainId: 6, name: "classicKotti", _defaultProvider: w("https://www.ethercluster.com/kotti", "classicKotti") },
                    xdai: { chainId: 100, name: "xdai" },
                    matic: { chainId: 137, name: "matic", _defaultProvider: b("matic") },
                    maticmum: { chainId: 80001, name: "maticmum" },
                    optimism: { chainId: 10, name: "optimism", _defaultProvider: b("optimism") },
                    "optimism-kovan": { chainId: 69, name: "optimism-kovan" },
                    "optimism-goerli": { chainId: 420, name: "optimism-goerli" },
                    arbitrum: { chainId: 42161, name: "arbitrum" },
                    "arbitrum-rinkeby": { chainId: 421611, name: "arbitrum-rinkeby" },
                    bnb: { chainId: 56, name: "bnb" },
                    bnbt: { chainId: 97, name: "bnbt" },
                };
            var N = r(2006),
                R = r(92882),
                x = r.n(R),
                O = r(19485);
            const T = new h.Logger(d);
            class L {
                constructor() {
                    this.formats = this.getDefaultFormats();
                }
                getDefaultFormats() {
                    const e = {},
                        t = this.address.bind(this),
                        r = this.bigNumber.bind(this),
                        n = this.blockTag.bind(this),
                        o = this.data.bind(this),
                        i = this.hash.bind(this),
                        s = this.hex.bind(this),
                        l = this.number.bind(this),
                        c = this.type.bind(this);
                    return (
                        (e.transaction = {
                            hash: i,
                            type: c,
                            accessList: L.allowNull(this.accessList.bind(this), null),
                            blockHash: L.allowNull(i, null),
                            blockNumber: L.allowNull(l, null),
                            transactionIndex: L.allowNull(l, null),
                            confirmations: L.allowNull(l, null),
                            from: t,
                            gasPrice: L.allowNull(r),
                            maxPriorityFeePerGas: L.allowNull(r),
                            maxFeePerGas: L.allowNull(r),
                            gasLimit: r,
                            to: L.allowNull(t, null),
                            value: r,
                            nonce: l,
                            data: o,
                            r: L.allowNull(this.uint256),
                            s: L.allowNull(this.uint256),
                            v: L.allowNull(l),
                            creates: L.allowNull(t, null),
                            raw: L.allowNull(o),
                        }),
                        (e.transactionRequest = {
                            from: L.allowNull(t),
                            nonce: L.allowNull(l),
                            gasLimit: L.allowNull(r),
                            gasPrice: L.allowNull(r),
                            maxPriorityFeePerGas: L.allowNull(r),
                            maxFeePerGas: L.allowNull(r),
                            to: L.allowNull(t),
                            value: L.allowNull(r),
                            data: L.allowNull((e) => this.data(e, !0)),
                            type: L.allowNull(l),
                            accessList: L.allowNull(this.accessList.bind(this), null),
                        }),
                        (e.receiptLog = { transactionIndex: l, blockNumber: l, transactionHash: i, address: t, topics: L.arrayOf(i), data: o, logIndex: l, blockHash: i }),
                        (e.receipt = {
                            to: L.allowNull(this.address, null),
                            from: L.allowNull(this.address, null),
                            contractAddress: L.allowNull(t, null),
                            transactionIndex: l,
                            root: L.allowNull(s),
                            gasUsed: r,
                            logsBloom: L.allowNull(o),
                            blockHash: i,
                            transactionHash: i,
                            logs: L.arrayOf(this.receiptLog.bind(this)),
                            blockNumber: l,
                            confirmations: L.allowNull(l, null),
                            cumulativeGasUsed: r,
                            effectiveGasPrice: L.allowNull(r),
                            status: L.allowNull(l),
                            type: c,
                        }),
                        (e.block = {
                            hash: L.allowNull(i),
                            parentHash: i,
                            number: l,
                            timestamp: l,
                            nonce: L.allowNull(s),
                            difficulty: this.difficulty.bind(this),
                            gasLimit: r,
                            gasUsed: r,
                            miner: L.allowNull(t),
                            extraData: o,
                            transactions: L.allowNull(L.arrayOf(i)),
                            baseFeePerGas: L.allowNull(r),
                        }),
                        (e.blockWithTransactions = (0, a.shallowCopy)(e.block)),
                        (e.blockWithTransactions.transactions = L.allowNull(L.arrayOf(this.transactionResponse.bind(this)))),
                        (e.filter = { fromBlock: L.allowNull(n, void 0), toBlock: L.allowNull(n, void 0), blockHash: L.allowNull(i, void 0), address: L.allowNull(t, void 0), topics: L.allowNull(this.topics.bind(this), void 0) }),
                        (e.filterLog = {
                            blockNumber: L.allowNull(l),
                            blockHash: L.allowNull(i),
                            transactionIndex: l,
                            removed: L.allowNull(this.boolean.bind(this)),
                            address: t,
                            data: L.allowFalsish(o, "0x"),
                            topics: L.arrayOf(i),
                            transactionHash: i,
                            logIndex: l,
                        }),
                        e
                    );
                }
                accessList(e) {
                    return (0, c.accessListify)(e || []);
                }
                number(e) {
                    return "0x" === e ? 0 : o.O$.from(e).toNumber();
                }
                type(e) {
                    return "0x" === e || null == e ? 0 : o.O$.from(e).toNumber();
                }
                bigNumber(e) {
                    return o.O$.from(e);
                }
                boolean(e) {
                    if ("boolean" === typeof e) return e;
                    if ("string" === typeof e) {
                        if ("true" === (e = e.toLowerCase())) return !0;
                        if ("false" === e) return !1;
                    }
                    throw new Error("invalid boolean - " + e);
                }
                hex(e, t) {
                    return "string" === typeof e && (t || "0x" === e.substring(0, 2) || (e = "0x" + e), (0, i.isHexString)(e)) ? e.toLowerCase() : T.throwArgumentError("invalid hash", "value", e);
                }
                data(e, t) {
                    const r = this.hex(e, t);
                    if (r.length % 2 !== 0) throw new Error("invalid data; odd-length - " + e);
                    return r;
                }
                address(e) {
                    return (0, O.getAddress)(e);
                }
                callAddress(e) {
                    if (!(0, i.isHexString)(e, 32)) return null;
                    const t = (0, O.getAddress)((0, i.hexDataSlice)(e, 12));
                    return "0x0000000000000000000000000000000000000000" === t ? null : t;
                }
                contractAddress(e) {
                    return (0, O.getContractAddress)(e);
                }
                blockTag(e) {
                    if (null == e) return "latest";
                    if ("earliest" === e) return "0x0";
                    if ("latest" === e || "pending" === e) return e;
                    if ("number" === typeof e || (0, i.isHexString)(e)) return (0, i.hexValue)(e);
                    throw new Error("invalid blockTag");
                }
                hash(e, t) {
                    const r = this.hex(e, t);
                    return 32 !== (0, i.hexDataLength)(r) ? T.throwArgumentError("invalid hash", "value", e) : r;
                }
                difficulty(e) {
                    if (null == e) return null;
                    const t = o.O$.from(e);
                    try {
                        return t.toNumber();
                    } catch (r) {}
                    return null;
                }
                uint256(e) {
                    if (!(0, i.isHexString)(e)) throw new Error("invalid uint256");
                    return (0, i.hexZeroPad)(e, 32);
                }
                _block(e, t) {
                    null != e.author && null == e.miner && (e.miner = e.author);
                    const r = null != e._difficulty ? e._difficulty : e.difficulty,
                        n = L.check(t, e);
                    return (n._difficulty = null == r ? null : o.O$.from(r)), n;
                }
                block(e) {
                    return this._block(e, this.formats.block);
                }
                blockWithTransactions(e) {
                    return this._block(e, this.formats.blockWithTransactions);
                }
                transactionRequest(e) {
                    return L.check(this.formats.transactionRequest, e);
                }
                transactionResponse(e) {
                    null != e.gas && null == e.gasLimit && (e.gasLimit = e.gas),
                        e.to && o.O$.from(e.to).isZero() && (e.to = "0x0000000000000000000000000000000000000000"),
                        null != e.input && null == e.data && (e.data = e.input),
                        null == e.to && null == e.creates && (e.creates = this.contractAddress(e)),
                        (1 !== e.type && 2 !== e.type) || null != e.accessList || (e.accessList = []);
                    const t = L.check(this.formats.transaction, e);
                    if (null != e.chainId) {
                        let r = e.chainId;
                        (0, i.isHexString)(r) && (r = o.O$.from(r).toNumber()), (t.chainId = r);
                    } else {
                        let r = e.networkId;
                        null == r && null == t.v && (r = e.chainId),
                            (0, i.isHexString)(r) && (r = o.O$.from(r).toNumber()),
                            "number" !== typeof r && null != t.v && ((r = (t.v - 35) / 2), r < 0 && (r = 0), (r = parseInt(r))),
                            "number" !== typeof r && (r = 0),
                            (t.chainId = r);
                    }
                    return t.blockHash && "x" === t.blockHash.replace(/0/g, "") && (t.blockHash = null), t;
                }
                transaction(e) {
                    return (0, c.parse)(e);
                }
                receiptLog(e) {
                    return L.check(this.formats.receiptLog, e);
                }
                receipt(e) {
                    const t = L.check(this.formats.receipt, e);
                    if (null != t.root)
                        if (t.root.length <= 4) {
                            const e = o.O$.from(t.root).toNumber();
                            0 === e || 1 === e
                                ? (null != t.status && t.status !== e && T.throwArgumentError("alt-root-status/status mismatch", "value", { root: t.root, status: t.status }), (t.status = e), delete t.root)
                                : T.throwArgumentError("invalid alt-root-status", "value.root", t.root);
                        } else 66 !== t.root.length && T.throwArgumentError("invalid root hash", "value.root", t.root);
                    return null != t.status && (t.byzantium = !0), t;
                }
                topics(e) {
                    return Array.isArray(e) ? e.map((e) => this.topics(e)) : null != e ? this.hash(e, !0) : null;
                }
                filter(e) {
                    return L.check(this.formats.filter, e);
                }
                filterLog(e) {
                    return L.check(this.formats.filterLog, e);
                }
                static check(e, t) {
                    const r = {};
                    for (const o in e)
                        try {
                            const n = e[o](t[o]);
                            void 0 !== n && (r[o] = n);
                        } catch (n) {
                            throw ((n.checkKey = o), (n.checkValue = t[o]), n);
                        }
                    return r;
                }
                static allowNull(e, t) {
                    return function (r) {
                        return null == r ? t : e(r);
                    };
                }
                static allowFalsish(e, t) {
                    return function (r) {
                        return r ? e(r) : t;
                    };
                }
                static arrayOf(e) {
                    return function (t) {
                        if (!Array.isArray(t)) throw new Error("not an array");
                        const r = [];
                        return (
                            t.forEach(function (t) {
                                r.push(e(t));
                            }),
                            r
                        );
                    };
                }
            }
            var A = function (e, t, r, n) {
                return new (r || (r = Promise))(function (o, i) {
                    function s(e) {
                        try {
                            l(n.next(e));
                        } catch (t) {
                            i(t);
                        }
                    }
                    function a(e) {
                        try {
                            l(n.throw(e));
                        } catch (t) {
                            i(t);
                        }
                    }
                    function l(e) {
                        var t;
                        e.done
                            ? o(e.value)
                            : ((t = e.value),
                              t instanceof r
                                  ? t
                                  : new r(function (e) {
                                        e(t);
                                    })).then(s, a);
                    }
                    l((n = n.apply(e, t || [])).next());
                });
            };
            const C = new h.Logger(d);
            function B(e) {
                return null == e ? "null" : (32 !== (0, i.hexDataLength)(e) && C.throwArgumentError("invalid topic", "topic", e), e.toLowerCase());
            }
            function I(e) {
                for (e = e.slice(); e.length > 0 && null == e[e.length - 1]; ) e.pop();
                return e
                    .map((e) => {
                        if (Array.isArray(e)) {
                            const t = {};
                            e.forEach((e) => {
                                t[B(e)] = !0;
                            });
                            const r = Object.keys(t);
                            return r.sort(), r.join("|");
                        }
                        return B(e);
                    })
                    .join("&");
            }
            function S(e) {
                if ("string" === typeof e) {
                    if (((e = e.toLowerCase()), 32 === (0, i.hexDataLength)(e))) return "tx:" + e;
                    if (-1 === e.indexOf(":")) return e;
                } else {
                    if (Array.isArray(e)) return "filter:*:" + I(e);
                    if (f.Sg.isForkEvent(e)) throw (C.warn("not implemented"), new Error("not implemented"));
                    if (e && "object" === typeof e) return "filter:" + (e.address || "*") + ":" + I(e.topics || []);
                }
                throw new Error("invalid event - " + e);
            }
            function F() {
                return new Date().getTime();
            }
            function D(e) {
                return new Promise((t) => {
                    setTimeout(t, e);
                });
            }
            const U = ["block", "network", "pending", "poll"];
            class $ {
                constructor(e, t, r) {
                    (0, a.defineReadOnly)(this, "tag", e), (0, a.defineReadOnly)(this, "listener", t), (0, a.defineReadOnly)(this, "once", r), (this._lastBlockNumber = -2), (this._inflight = !1);
                }
                get event() {
                    switch (this.type) {
                        case "tx":
                            return this.hash;
                        case "filter":
                            return this.filter;
                    }
                    return this.tag;
                }
                get type() {
                    return this.tag.split(":")[0];
                }
                get hash() {
                    const e = this.tag.split(":");
                    return "tx" !== e[0] ? null : e[1];
                }
                get filter() {
                    const e = this.tag.split(":");
                    if ("filter" !== e[0]) return null;
                    const t = e[1],
                        r =
                            "" === (n = e[2])
                                ? []
                                : n.split(/&/g).map((e) => {
                                      if ("" === e) return [];
                                      const t = e.split("|").map((e) => ("null" === e ? null : e));
                                      return 1 === t.length ? t[0] : t;
                                  });
                    var n;
                    const o = {};
                    return r.length > 0 && (o.topics = r), t && "*" !== t && (o.address = t), o;
                }
                pollable() {
                    return this.tag.indexOf(":") >= 0 || U.indexOf(this.tag) >= 0;
                }
            }
            const G = {
                0: { symbol: "btc", p2pkh: 0, p2sh: 5, prefix: "bc" },
                2: { symbol: "ltc", p2pkh: 48, p2sh: 50, prefix: "ltc" },
                3: { symbol: "doge", p2pkh: 30, p2sh: 22 },
                60: { symbol: "eth", ilk: "eth" },
                61: { symbol: "etc", ilk: "eth" },
                700: { symbol: "xdai", ilk: "eth" },
            };
            function M(e) {
                return (0, i.hexZeroPad)(o.O$.from(e).toHexString(), 32);
            }
            function H(e) {
                return m.Base58.encode((0, i.concat)([e, (0, i.hexDataSlice)((0, N.JQ)((0, N.JQ)(e)), 0, 4)]));
            }
            const j = new RegExp("^(ipfs)://(.*)$", "i"),
                q = [new RegExp("^(https)://(.*)$", "i"), new RegExp("^(data):(.*)$", "i"), j, new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i")];
            function V(e, t) {
                try {
                    return (0, l.ZN)(J(e, t));
                } catch (r) {}
                return null;
            }
            function J(e, t) {
                if ("0x" === e) return null;
                const r = o.O$.from((0, i.hexDataSlice)(e, t, t + 32)).toNumber(),
                    n = o.O$.from((0, i.hexDataSlice)(e, r, r + 32)).toNumber();
                return (0, i.hexDataSlice)(e, r + 32, r + 32 + n);
            }
            function z(e) {
                return e.match(/^ipfs:\/\/ipfs\//i) ? (e = e.substring(12)) : e.match(/^ipfs:\/\//i) ? (e = e.substring(7)) : C.throwArgumentError("unsupported IPFS format", "link", e), `https://gateway.ipfs.io/ipfs/${e}`;
            }
            function Z(e) {
                const t = (0, i.arrayify)(e);
                if (t.length > 32) throw new Error("internal; should not happen");
                const r = new Uint8Array(32);
                return r.set(t, 32 - t.length), r;
            }
            function K(e) {
                if (e.length % 32 === 0) return e;
                const t = new Uint8Array(32 * Math.ceil(e.length / 32));
                return t.set(e), t;
            }
            function W(e) {
                const t = [];
                let r = 0;
                for (let n = 0; n < e.length; n++) t.push(null), (r += 32);
                for (let n = 0; n < e.length; n++) {
                    const o = (0, i.arrayify)(e[n]);
                    (t[n] = Z(r)), t.push(Z(o.length)), t.push(K(o)), (r += 32 + 32 * Math.ceil(o.length / 32));
                }
                return (0, i.hexConcat)(t);
            }
            class X {
                constructor(e, t, r, n) {
                    (0, a.defineReadOnly)(this, "provider", e), (0, a.defineReadOnly)(this, "name", r), (0, a.defineReadOnly)(this, "address", e.formatter.address(t)), (0, a.defineReadOnly)(this, "_resolvedAddress", n);
                }
                supportsWildcard() {
                    return (
                        this._supportsEip2544 ||
                            (this._supportsEip2544 = this.provider
                                .call({ to: this.address, data: "0x01ffc9a79061b92300000000000000000000000000000000000000000000000000000000" })
                                .then((e) => o.O$.from(e).eq(1))
                                .catch((e) => {
                                    if (e.code === h.Logger.errors.CALL_EXCEPTION) return !1;
                                    throw ((this._supportsEip2544 = null), e);
                                })),
                        this._supportsEip2544
                    );
                }
                _fetch(e, t) {
                    return A(this, void 0, void 0, function* () {
                        const r = { to: this.address, ccipReadEnabled: !0, data: (0, i.hexConcat)([e, (0, y.VM)(this.name), t || "0x"]) };
                        let n = !1;
                        (yield this.supportsWildcard()) && ((n = !0), (r.data = (0, i.hexConcat)(["0x9061b923", W([(0, y.Kn)(this.name), r.data])])));
                        try {
                            let e = yield this.provider.call(r);
                            return (0, i.arrayify)(e).length % 32 === 4 && C.throwError("resolver threw error", h.Logger.errors.CALL_EXCEPTION, { transaction: r, data: e }), n && (e = J(e, 0)), e;
                        } catch (o) {
                            if (o.code === h.Logger.errors.CALL_EXCEPTION) return null;
                            throw o;
                        }
                    });
                }
                _fetchBytes(e, t) {
                    return A(this, void 0, void 0, function* () {
                        const r = yield this._fetch(e, t);
                        return null != r ? J(r, 0) : null;
                    });
                }
                _getAddress(e, t) {
                    const r = G[String(e)];
                    if ((null == r && C.throwError(`unsupported coin type: ${e}`, h.Logger.errors.UNSUPPORTED_OPERATION, { operation: `getAddress(${e})` }), "eth" === r.ilk)) return this.provider.formatter.address(t);
                    const n = (0, i.arrayify)(t);
                    if (null != r.p2pkh) {
                        const e = t.match(/^0x76a9([0-9a-f][0-9a-f])([0-9a-f]*)88ac$/);
                        if (e) {
                            const t = parseInt(e[1], 16);
                            if (e[2].length === 2 * t && t >= 1 && t <= 75) return H((0, i.concat)([[r.p2pkh], "0x" + e[2]]));
                        }
                    }
                    if (null != r.p2sh) {
                        const e = t.match(/^0xa9([0-9a-f][0-9a-f])([0-9a-f]*)87$/);
                        if (e) {
                            const t = parseInt(e[1], 16);
                            if (e[2].length === 2 * t && t >= 1 && t <= 75) return H((0, i.concat)([[r.p2sh], "0x" + e[2]]));
                        }
                    }
                    if (null != r.prefix) {
                        const e = n[1];
                        let t = n[0];
                        if ((0 === t ? 20 !== e && 32 !== e && (t = -1) : (t = -1), t >= 0 && n.length === 2 + e && e >= 1 && e <= 75)) {
                            const e = x().toWords(n.slice(2));
                            return e.unshift(t), x().encode(r.prefix, e);
                        }
                    }
                    return null;
                }
                getAddress(e) {
                    return A(this, void 0, void 0, function* () {
                        if ((null == e && (e = 60), 60 === e))
                            try {
                                const e = yield this._fetch("0x3b3b57de");
                                return "0x" === e || e === p.R ? null : this.provider.formatter.callAddress(e);
                            } catch (n) {
                                if (n.code === h.Logger.errors.CALL_EXCEPTION) return null;
                                throw n;
                            }
                        const t = yield this._fetchBytes("0xf1cb7e06", M(e));
                        if (null == t || "0x" === t) return null;
                        const r = this._getAddress(e, t);
                        return null == r && C.throwError("invalid or unsupported coin data", h.Logger.errors.UNSUPPORTED_OPERATION, { operation: `getAddress(${e})`, coinType: e, data: t }), r;
                    });
                }
                getAvatar() {
                    return A(this, void 0, void 0, function* () {
                        const e = [{ type: "name", content: this.name }];
                        try {
                            const t = yield this.getText("avatar");
                            if (null == t) return null;
                            for (let r = 0; r < q.length; r++) {
                                const n = t.match(q[r]);
                                if (null == n) continue;
                                const s = n[1].toLowerCase();
                                switch (s) {
                                    case "https":
                                        return e.push({ type: "url", content: t }), { linkage: e, url: t };
                                    case "data":
                                        return e.push({ type: "data", content: t }), { linkage: e, url: t };
                                    case "ipfs":
                                        return e.push({ type: "ipfs", content: t }), { linkage: e, url: z(t) };
                                    case "erc721":
                                    case "erc1155": {
                                        const r = "erc721" === s ? "0xc87b56dd" : "0x0e89341c";
                                        e.push({ type: s, content: t });
                                        const a = this._resolvedAddress || (yield this.getAddress()),
                                            l = (n[2] || "").split("/");
                                        if (2 !== l.length) return null;
                                        const c = yield this.provider.formatter.address(l[0]),
                                            h = (0, i.hexZeroPad)(o.O$.from(l[1]).toHexString(), 32);
                                        if ("erc721" === s) {
                                            const t = this.provider.formatter.callAddress(yield this.provider.call({ to: c, data: (0, i.hexConcat)(["0x6352211e", h]) }));
                                            if (a !== t) return null;
                                            e.push({ type: "owner", content: t });
                                        } else if ("erc1155" === s) {
                                            const t = o.O$.from(yield this.provider.call({ to: c, data: (0, i.hexConcat)(["0x00fdd58e", (0, i.hexZeroPad)(a, 32), h]) }));
                                            if (t.isZero()) return null;
                                            e.push({ type: "balance", content: t.toString() });
                                        }
                                        const d = { to: this.provider.formatter.address(l[0]), data: (0, i.hexConcat)([r, h]) };
                                        let f = V(yield this.provider.call(d), 0);
                                        if (null == f) return null;
                                        e.push({ type: "metadata-url-base", content: f }),
                                            "erc1155" === s && ((f = f.replace("{id}", h.substring(2))), e.push({ type: "metadata-url-expanded", content: f })),
                                            f.match(/^ipfs:/i) && (f = z(f)),
                                            e.push({ type: "metadata-url", content: f });
                                        const g = yield (0, u.fetchJson)(f);
                                        if (!g) return null;
                                        e.push({ type: "metadata", content: JSON.stringify(g) });
                                        let m = g.image;
                                        if ("string" !== typeof m) return null;
                                        if (m.match(/^(https:\/\/|data:)/i));
                                        else {
                                            if (null == m.match(j)) return null;
                                            e.push({ type: "url-ipfs", content: m }), (m = z(m));
                                        }
                                        return e.push({ type: "url", content: m }), { linkage: e, url: m };
                                    }
                                }
                            }
                        } catch (t) {}
                        return null;
                    });
                }
                getContentHash() {
                    return A(this, void 0, void 0, function* () {
                        const e = yield this._fetchBytes("0xbc1c58d1");
                        if (null == e || "0x" === e) return null;
                        const t = e.match(/^0xe3010170(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
                        if (t) {
                            const e = parseInt(t[3], 16);
                            if (t[4].length === 2 * e) return "ipfs://" + m.Base58.encode("0x" + t[1]);
                        }
                        const r = e.match(/^0xe5010172(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
                        if (r) {
                            const e = parseInt(r[3], 16);
                            if (r[4].length === 2 * e) return "ipns://" + m.Base58.encode("0x" + r[1]);
                        }
                        const n = e.match(/^0xe40101fa011b20([0-9a-f]*)$/);
                        if (n && 64 === n[1].length) return "bzz://" + n[1];
                        const o = e.match(/^0x90b2c605([0-9a-f]*)$/);
                        if (o && 68 === o[1].length) {
                            const e = { "=": "", "+": "-", "/": "_" };
                            return "sia://" + (0, g.c)("0x" + o[1]).replace(/[=+\/]/g, (t) => e[t]);
                        }
                        return C.throwError("invalid or unsupported content hash data", h.Logger.errors.UNSUPPORTED_OPERATION, { operation: "getContentHash()", data: e });
                    });
                }
                getText(e) {
                    return A(this, void 0, void 0, function* () {
                        let t = (0, l.Y0)(e);
                        (t = (0, i.concat)([M(64), M(t.length), t])), t.length % 32 !== 0 && (t = (0, i.concat)([t, (0, i.hexZeroPad)("0x", 32 - (e.length % 32))]));
                        const r = yield this._fetchBytes("0x59d1d43c", (0, i.hexlify)(t));
                        return null == r || "0x" === r ? null : (0, l.ZN)(r);
                    });
                }
            }
            let Q = null,
                Y = 1;
            class ee extends f.zt {
                constructor(e) {
                    if (
                        (super(),
                        (this._events = []),
                        (this._emitted = { block: -2 }),
                        (this.disableCcipRead = !1),
                        (this.formatter = new.target.getFormatter()),
                        (0, a.defineReadOnly)(this, "anyNetwork", "any" === e),
                        this.anyNetwork && (e = this.detectNetwork()),
                        e instanceof Promise)
                    )
                        (this._networkPromise = e), e.catch((e) => {}), this._ready().catch((e) => {});
                    else {
                        const t = (0, a.getStatic)(new.target, "getNetwork")(e);
                        t ? ((0, a.defineReadOnly)(this, "_network", t), this.emit("network", t, null)) : C.throwArgumentError("invalid network", "network", e);
                    }
                    (this._maxInternalBlockNumber = -1024), (this._lastBlockNumber = -2), (this._maxFilterBlockRange = 10), (this._pollingInterval = 4e3), (this._fastQueryDate = 0);
                }
                _ready() {
                    return A(this, void 0, void 0, function* () {
                        if (null == this._network) {
                            let t = null;
                            if (this._networkPromise)
                                try {
                                    t = yield this._networkPromise;
                                } catch (e) {}
                            null == t && (t = yield this.detectNetwork()),
                                t || C.throwError("no network detected", h.Logger.errors.UNKNOWN_ERROR, {}),
                                null == this._network && (this.anyNetwork ? (this._network = t) : (0, a.defineReadOnly)(this, "_network", t), this.emit("network", t, null));
                        }
                        return this._network;
                    });
                }
                get ready() {
                    return (0, u.poll)(() =>
                        this._ready().then(
                            (e) => e,
                            (e) => {
                                if (e.code !== h.Logger.errors.NETWORK_ERROR || "noNetwork" !== e.event) throw e;
                            }
                        )
                    );
                }
                static getFormatter() {
                    return null == Q && (Q = new L()), Q;
                }
                static getNetwork(e) {
                    return (function (e) {
                        if (null == e) return null;
                        if ("number" === typeof e) {
                            for (const t in P) {
                                const r = P[t];
                                if (r.chainId === e) return { name: r.name, chainId: r.chainId, ensAddress: r.ensAddress || null, _defaultProvider: r._defaultProvider || null };
                            }
                            return { chainId: e, name: "unknown" };
                        }
                        if ("string" === typeof e) {
                            const t = P[e];
                            return null == t ? null : { name: t.name, chainId: t.chainId, ensAddress: t.ensAddress, _defaultProvider: t._defaultProvider || null };
                        }
                        const t = P[e.name];
                        if (!t) return "number" !== typeof e.chainId && v.throwArgumentError("invalid network chainId", "network", e), e;
                        0 !== e.chainId && e.chainId !== t.chainId && v.throwArgumentError("network chainId mismatch", "network", e);
                        let r = e._defaultProvider || null;
                        var n;
                        return (
                            null == r && t._defaultProvider && (r = (n = t._defaultProvider) && "function" === typeof n.renetwork ? t._defaultProvider.renetwork(e) : t._defaultProvider),
                            { name: e.name, chainId: t.chainId, ensAddress: e.ensAddress || t.ensAddress || null, _defaultProvider: r }
                        );
                    })(null == e ? "homestead" : e);
                }
                ccipReadFetch(e, t, r) {
                    return A(this, void 0, void 0, function* () {
                        if (this.disableCcipRead || 0 === r.length) return null;
                        const n = e.to.toLowerCase(),
                            o = t.toLowerCase(),
                            i = [];
                        for (let e = 0; e < r.length; e++) {
                            const t = r[e],
                                s = t.replace("{sender}", n).replace("{data}", o),
                                a = t.indexOf("{data}") >= 0 ? null : JSON.stringify({ data: o, sender: n }),
                                l = yield (0, u.fetchJson)({ url: s, errorPassThrough: !0 }, a, (e, t) => ((e.status = t.statusCode), e));
                            if (l.data) return l.data;
                            const c = l.message || "unknown error";
                            if (l.status >= 400 && l.status < 500) return C.throwError(`response not found during CCIP fetch: ${c}`, h.Logger.errors.SERVER_ERROR, { url: t, errorMessage: c });
                            i.push(c);
                        }
                        return C.throwError(`error encountered during CCIP fetch: ${i.map((e) => JSON.stringify(e)).join(", ")}`, h.Logger.errors.SERVER_ERROR, { urls: r, errorMessages: i });
                    });
                }
                _getInternalBlockNumber(e) {
                    return A(this, void 0, void 0, function* () {
                        if ((yield this._ready(), e > 0))
                            for (; this._internalBlockNumber; ) {
                                const t = this._internalBlockNumber;
                                try {
                                    const r = yield t;
                                    if (F() - r.respTime <= e) return r.blockNumber;
                                    break;
                                } catch (n) {
                                    if (this._internalBlockNumber === t) break;
                                }
                            }
                        const t = F(),
                            r = (0, a.resolveProperties)({
                                blockNumber: this.perform("getBlockNumber", {}),
                                networkError: this.getNetwork().then(
                                    (e) => null,
                                    (e) => e
                                ),
                            }).then(({ blockNumber: e, networkError: n }) => {
                                if (n) throw (this._internalBlockNumber === r && (this._internalBlockNumber = null), n);
                                const i = F();
                                return (
                                    (e = o.O$.from(e).toNumber()) < this._maxInternalBlockNumber && (e = this._maxInternalBlockNumber),
                                    (this._maxInternalBlockNumber = e),
                                    this._setFastBlockNumber(e),
                                    { blockNumber: e, reqTime: t, respTime: i }
                                );
                            });
                        return (
                            (this._internalBlockNumber = r),
                            r.catch((e) => {
                                this._internalBlockNumber === r && (this._internalBlockNumber = null);
                            }),
                            (yield r).blockNumber
                        );
                    });
                }
                poll() {
                    return A(this, void 0, void 0, function* () {
                        const e = Y++,
                            t = [];
                        let r = null;
                        try {
                            r = yield this._getInternalBlockNumber(100 + this.pollingInterval / 2);
                        } catch (n) {
                            return void this.emit("error", n);
                        }
                        if ((this._setFastBlockNumber(r), this.emit("poll", e, r), r !== this._lastBlockNumber)) {
                            if ((-2 === this._emitted.block && (this._emitted.block = r - 1), Math.abs(this._emitted.block - r) > 1e3))
                                C.warn(`network block skew detected; skipping block events (emitted=${this._emitted.block} blockNumber${r})`),
                                    this.emit("error", C.makeError("network block skew detected", h.Logger.errors.NETWORK_ERROR, { blockNumber: r, event: "blockSkew", previousBlockNumber: this._emitted.block })),
                                    this.emit("block", r);
                            else for (let e = this._emitted.block + 1; e <= r; e++) this.emit("block", e);
                            this._emitted.block !== r &&
                                ((this._emitted.block = r),
                                Object.keys(this._emitted).forEach((e) => {
                                    if ("block" === e) return;
                                    const t = this._emitted[e];
                                    "pending" !== t && r - t > 12 && delete this._emitted[e];
                                })),
                                -2 === this._lastBlockNumber && (this._lastBlockNumber = r - 1),
                                this._events.forEach((e) => {
                                    switch (e.type) {
                                        case "tx": {
                                            const r = e.hash;
                                            let n = this.getTransactionReceipt(r)
                                                .then((e) => (e && null != e.blockNumber ? ((this._emitted["t:" + r] = e.blockNumber), this.emit(r, e), null) : null))
                                                .catch((e) => {
                                                    this.emit("error", e);
                                                });
                                            t.push(n);
                                            break;
                                        }
                                        case "filter":
                                            if (!e._inflight) {
                                                e._inflight = !0;
                                                const n = e.filter;
                                                (n.fromBlock = e._lastBlockNumber + 1), (n.toBlock = r), n.toBlock - this._maxFilterBlockRange > n.fromBlock && (n.fromBlock = n.toBlock - this._maxFilterBlockRange);
                                                const o = this.getLogs(n)
                                                    .then((t) => {
                                                        (e._inflight = !1),
                                                            0 !== t.length &&
                                                                t.forEach((t) => {
                                                                    t.blockNumber > e._lastBlockNumber && (e._lastBlockNumber = t.blockNumber),
                                                                        (this._emitted["b:" + t.blockHash] = t.blockNumber),
                                                                        (this._emitted["t:" + t.transactionHash] = t.blockNumber),
                                                                        this.emit(n, t);
                                                                });
                                                    })
                                                    .catch((t) => {
                                                        this.emit("error", t), (e._inflight = !1);
                                                    });
                                                t.push(o);
                                            }
                                    }
                                }),
                                (this._lastBlockNumber = r),
                                Promise.all(t)
                                    .then(() => {
                                        this.emit("didPoll", e);
                                    })
                                    .catch((e) => {
                                        this.emit("error", e);
                                    });
                        } else this.emit("didPoll", e);
                    });
                }
                resetEventsBlock(e) {
                    (this._lastBlockNumber = e - 1), this.polling && this.poll();
                }
                get network() {
                    return this._network;
                }
                detectNetwork() {
                    return A(this, void 0, void 0, function* () {
                        return C.throwError("provider does not support network detection", h.Logger.errors.UNSUPPORTED_OPERATION, { operation: "provider.detectNetwork" });
                    });
                }
                getNetwork() {
                    return A(this, void 0, void 0, function* () {
                        const e = yield this._ready(),
                            t = yield this.detectNetwork();
                        if (e.chainId !== t.chainId) {
                            if (this.anyNetwork)
                                return (
                                    (this._network = t),
                                    (this._lastBlockNumber = -2),
                                    (this._fastBlockNumber = null),
                                    (this._fastBlockNumberPromise = null),
                                    (this._fastQueryDate = 0),
                                    (this._emitted.block = -2),
                                    (this._maxInternalBlockNumber = -1024),
                                    (this._internalBlockNumber = null),
                                    this.emit("network", t, e),
                                    yield D(0),
                                    this._network
                                );
                            const r = C.makeError("underlying network changed", h.Logger.errors.NETWORK_ERROR, { event: "changed", network: e, detectedNetwork: t });
                            throw (this.emit("error", r), r);
                        }
                        return e;
                    });
                }
                get blockNumber() {
                    return (
                        this._getInternalBlockNumber(100 + this.pollingInterval / 2).then(
                            (e) => {
                                this._setFastBlockNumber(e);
                            },
                            (e) => {}
                        ),
                        null != this._fastBlockNumber ? this._fastBlockNumber : -1
                    );
                }
                get polling() {
                    return null != this._poller;
                }
                set polling(e) {
                    e && !this._poller
                        ? ((this._poller = setInterval(() => {
                              this.poll();
                          }, this.pollingInterval)),
                          this._bootstrapPoll ||
                              (this._bootstrapPoll = setTimeout(() => {
                                  this.poll(),
                                      (this._bootstrapPoll = setTimeout(() => {
                                          this._poller || this.poll(), (this._bootstrapPoll = null);
                                      }, this.pollingInterval));
                              }, 0)))
                        : !e && this._poller && (clearInterval(this._poller), (this._poller = null));
                }
                get pollingInterval() {
                    return this._pollingInterval;
                }
                set pollingInterval(e) {
                    if ("number" !== typeof e || e <= 0 || parseInt(String(e)) != e) throw new Error("invalid polling interval");
                    (this._pollingInterval = e),
                        this._poller &&
                            (clearInterval(this._poller),
                            (this._poller = setInterval(() => {
                                this.poll();
                            }, this._pollingInterval)));
                }
                _getFastBlockNumber() {
                    const e = F();
                    return (
                        e - this._fastQueryDate > 2 * this._pollingInterval &&
                            ((this._fastQueryDate = e),
                            (this._fastBlockNumberPromise = this.getBlockNumber().then((e) => ((null == this._fastBlockNumber || e > this._fastBlockNumber) && (this._fastBlockNumber = e), this._fastBlockNumber)))),
                        this._fastBlockNumberPromise
                    );
                }
                _setFastBlockNumber(e) {
                    (null != this._fastBlockNumber && e < this._fastBlockNumber) ||
                        ((this._fastQueryDate = F()), (null == this._fastBlockNumber || e > this._fastBlockNumber) && ((this._fastBlockNumber = e), (this._fastBlockNumberPromise = Promise.resolve(e))));
                }
                waitForTransaction(e, t, r) {
                    return A(this, void 0, void 0, function* () {
                        return this._waitForTransaction(e, null == t ? 1 : t, r || 0, null);
                    });
                }
                _waitForTransaction(e, t, r, n) {
                    return A(this, void 0, void 0, function* () {
                        const o = yield this.getTransactionReceipt(e);
                        return (o ? o.confirmations : 0) >= t
                            ? o
                            : new Promise((o, i) => {
                                  const s = [];
                                  let a = !1;
                                  const l = function () {
                                          return (
                                              !!a ||
                                              ((a = !0),
                                              s.forEach((e) => {
                                                  e();
                                              }),
                                              !1)
                                          );
                                      },
                                      c = (e) => {
                                          e.confirmations < t || l() || o(e);
                                      };
                                  if (
                                      (this.on(e, c),
                                      s.push(() => {
                                          this.removeListener(e, c);
                                      }),
                                      n)
                                  ) {
                                      let r = n.startBlock,
                                          o = null;
                                      const c = (s) =>
                                          A(this, void 0, void 0, function* () {
                                              a ||
                                                  (yield D(1e3),
                                                  this.getTransactionCount(n.from).then(
                                                      (u) =>
                                                          A(this, void 0, void 0, function* () {
                                                              if (!a) {
                                                                  if (u <= n.nonce) r = s;
                                                                  else {
                                                                      {
                                                                          const t = yield this.getTransaction(e);
                                                                          if (t && null != t.blockNumber) return;
                                                                      }
                                                                      for (null == o && ((o = r - 3), o < n.startBlock && (o = n.startBlock)); o <= s; ) {
                                                                          if (a) return;
                                                                          const r = yield this.getBlockWithTransactions(o);
                                                                          for (let o = 0; o < r.transactions.length; o++) {
                                                                              const s = r.transactions[o];
                                                                              if (s.hash === e) return;
                                                                              if (s.from === n.from && s.nonce === n.nonce) {
                                                                                  if (a) return;
                                                                                  const r = yield this.waitForTransaction(s.hash, t);
                                                                                  if (l()) return;
                                                                                  let o = "replaced";
                                                                                  return (
                                                                                      s.data === n.data && s.to === n.to && s.value.eq(n.value)
                                                                                          ? (o = "repriced")
                                                                                          : "0x" === s.data && s.from === s.to && s.value.isZero() && (o = "cancelled"),
                                                                                      void i(
                                                                                          C.makeError("transaction was replaced", h.Logger.errors.TRANSACTION_REPLACED, {
                                                                                              cancelled: "replaced" === o || "cancelled" === o,
                                                                                              reason: o,
                                                                                              replacement: this._wrapTransaction(s),
                                                                                              hash: e,
                                                                                              receipt: r,
                                                                                          })
                                                                                      )
                                                                                  );
                                                                              }
                                                                          }
                                                                          o++;
                                                                      }
                                                                  }
                                                                  a || this.once("block", c);
                                                              }
                                                          }),
                                                      (e) => {
                                                          a || this.once("block", c);
                                                      }
                                                  ));
                                          });
                                      if (a) return;
                                      this.once("block", c),
                                          s.push(() => {
                                              this.removeListener("block", c);
                                          });
                                  }
                                  if ("number" === typeof r && r > 0) {
                                      const e = setTimeout(() => {
                                          l() || i(C.makeError("timeout exceeded", h.Logger.errors.TIMEOUT, { timeout: r }));
                                      }, r);
                                      e.unref && e.unref(),
                                          s.push(() => {
                                              clearTimeout(e);
                                          });
                                  }
                              });
                    });
                }
                getBlockNumber() {
                    return A(this, void 0, void 0, function* () {
                        return this._getInternalBlockNumber(0);
                    });
                }
                getGasPrice() {
                    return A(this, void 0, void 0, function* () {
                        yield this.getNetwork();
                        const e = yield this.perform("getGasPrice", {});
                        try {
                            return o.O$.from(e);
                        } catch (t) {
                            return C.throwError("bad result from backend", h.Logger.errors.SERVER_ERROR, { method: "getGasPrice", result: e, error: t });
                        }
                    });
                }
                getBalance(e, t) {
                    return A(this, void 0, void 0, function* () {
                        yield this.getNetwork();
                        const r = yield (0, a.resolveProperties)({ address: this._getAddress(e), blockTag: this._getBlockTag(t) }),
                            n = yield this.perform("getBalance", r);
                        try {
                            return o.O$.from(n);
                        } catch (i) {
                            return C.throwError("bad result from backend", h.Logger.errors.SERVER_ERROR, { method: "getBalance", params: r, result: n, error: i });
                        }
                    });
                }
                getTransactionCount(e, t) {
                    return A(this, void 0, void 0, function* () {
                        yield this.getNetwork();
                        const r = yield (0, a.resolveProperties)({ address: this._getAddress(e), blockTag: this._getBlockTag(t) }),
                            n = yield this.perform("getTransactionCount", r);
                        try {
                            return o.O$.from(n).toNumber();
                        } catch (i) {
                            return C.throwError("bad result from backend", h.Logger.errors.SERVER_ERROR, { method: "getTransactionCount", params: r, result: n, error: i });
                        }
                    });
                }
                getCode(e, t) {
                    return A(this, void 0, void 0, function* () {
                        yield this.getNetwork();
                        const r = yield (0, a.resolveProperties)({ address: this._getAddress(e), blockTag: this._getBlockTag(t) }),
                            n = yield this.perform("getCode", r);
                        try {
                            return (0, i.hexlify)(n);
                        } catch (o) {
                            return C.throwError("bad result from backend", h.Logger.errors.SERVER_ERROR, { method: "getCode", params: r, result: n, error: o });
                        }
                    });
                }
                getStorageAt(e, t, r) {
                    return A(this, void 0, void 0, function* () {
                        yield this.getNetwork();
                        const n = yield (0, a.resolveProperties)({ address: this._getAddress(e), blockTag: this._getBlockTag(r), position: Promise.resolve(t).then((e) => (0, i.hexValue)(e)) }),
                            o = yield this.perform("getStorageAt", n);
                        try {
                            return (0, i.hexlify)(o);
                        } catch (s) {
                            return C.throwError("bad result from backend", h.Logger.errors.SERVER_ERROR, { method: "getStorageAt", params: n, result: o, error: s });
                        }
                    });
                }
                _wrapTransaction(e, t, r) {
                    if (null != t && 32 !== (0, i.hexDataLength)(t)) throw new Error("invalid response - sendTransaction");
                    const n = e;
                    return (
                        null != t && e.hash !== t && C.throwError("Transaction hash mismatch from Provider.sendTransaction.", h.Logger.errors.UNKNOWN_ERROR, { expectedHash: e.hash, returnedHash: t }),
                        (n.wait = (t, n) =>
                            A(this, void 0, void 0, function* () {
                                let o;
                                null == t && (t = 1), null == n && (n = 0), 0 !== t && null != r && (o = { data: e.data, from: e.from, nonce: e.nonce, to: e.to, value: e.value, startBlock: r });
                                const i = yield this._waitForTransaction(e.hash, t, n, o);
                                return null == i && 0 === t
                                    ? null
                                    : ((this._emitted["t:" + e.hash] = i.blockNumber), 0 === i.status && C.throwError("transaction failed", h.Logger.errors.CALL_EXCEPTION, { transactionHash: e.hash, transaction: e, receipt: i }), i);
                            })),
                        n
                    );
                }
                sendTransaction(e) {
                    return A(this, void 0, void 0, function* () {
                        yield this.getNetwork();
                        const t = yield Promise.resolve(e).then((e) => (0, i.hexlify)(e)),
                            r = this.formatter.transaction(e);
                        null == r.confirmations && (r.confirmations = 0);
                        const n = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
                        try {
                            const e = yield this.perform("sendTransaction", { signedTransaction: t });
                            return this._wrapTransaction(r, e, n);
                        } catch (o) {
                            throw ((o.transaction = r), (o.transactionHash = r.hash), o);
                        }
                    });
                }
                _getTransactionRequest(e) {
                    return A(this, void 0, void 0, function* () {
                        const t = yield e,
                            r = {};
                        return (
                            ["from", "to"].forEach((e) => {
                                null != t[e] && (r[e] = Promise.resolve(t[e]).then((e) => (e ? this._getAddress(e) : null)));
                            }),
                            ["gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "value"].forEach((e) => {
                                null != t[e] && (r[e] = Promise.resolve(t[e]).then((e) => (e ? o.O$.from(e) : null)));
                            }),
                            ["type"].forEach((e) => {
                                null != t[e] && (r[e] = Promise.resolve(t[e]).then((e) => (null != e ? e : null)));
                            }),
                            t.accessList && (r.accessList = this.formatter.accessList(t.accessList)),
                            ["data"].forEach((e) => {
                                null != t[e] && (r[e] = Promise.resolve(t[e]).then((e) => (e ? (0, i.hexlify)(e) : null)));
                            }),
                            this.formatter.transactionRequest(yield (0, a.resolveProperties)(r))
                        );
                    });
                }
                _getFilter(e) {
                    return A(this, void 0, void 0, function* () {
                        e = yield e;
                        const t = {};
                        return (
                            null != e.address && (t.address = this._getAddress(e.address)),
                            ["blockHash", "topics"].forEach((r) => {
                                null != e[r] && (t[r] = e[r]);
                            }),
                            ["fromBlock", "toBlock"].forEach((r) => {
                                null != e[r] && (t[r] = this._getBlockTag(e[r]));
                            }),
                            this.formatter.filter(yield (0, a.resolveProperties)(t))
                        );
                    });
                }
                _call(e, t, r) {
                    return A(this, void 0, void 0, function* () {
                        r >= 10 && C.throwError("CCIP read exceeded maximum redirections", h.Logger.errors.SERVER_ERROR, { redirects: r, transaction: e });
                        const n = e.to,
                            s = yield this.perform("call", { transaction: e, blockTag: t });
                        if (r >= 0 && "latest" === t && null != n && "0x556f1830" === s.substring(0, 10) && (0, i.hexDataLength)(s) % 32 === 4)
                            try {
                                const a = (0, i.hexDataSlice)(s, 4),
                                    l = (0, i.hexDataSlice)(a, 0, 32);
                                o.O$.from(l).eq(n) ||
                                    C.throwError("CCIP Read sender did not match", h.Logger.errors.CALL_EXCEPTION, { name: "OffchainLookup", signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)", transaction: e, data: s });
                                const c = [],
                                    u = o.O$.from((0, i.hexDataSlice)(a, 32, 64)).toNumber(),
                                    d = o.O$.from((0, i.hexDataSlice)(a, u, u + 32)).toNumber(),
                                    f = (0, i.hexDataSlice)(a, u + 32);
                                for (let t = 0; t < d; t++) {
                                    const r = V(f, 32 * t);
                                    null == r &&
                                        C.throwError("CCIP Read contained corrupt URL string", h.Logger.errors.CALL_EXCEPTION, {
                                            name: "OffchainLookup",
                                            signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                            transaction: e,
                                            data: s,
                                        }),
                                        c.push(r);
                                }
                                const g = J(a, 64);
                                o.O$.from((0, i.hexDataSlice)(a, 100, 128)).isZero() ||
                                    C.throwError("CCIP Read callback selector included junk", h.Logger.errors.CALL_EXCEPTION, {
                                        name: "OffchainLookup",
                                        signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                        transaction: e,
                                        data: s,
                                    });
                                const m = (0, i.hexDataSlice)(a, 96, 100),
                                    p = J(a, 128),
                                    y = yield this.ccipReadFetch(e, g, c);
                                null == y &&
                                    C.throwError("CCIP Read disabled or provided no URLs", h.Logger.errors.CALL_EXCEPTION, {
                                        name: "OffchainLookup",
                                        signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                        transaction: e,
                                        data: s,
                                    });
                                const v = { to: n, data: (0, i.hexConcat)([m, W([y, p])]) };
                                return this._call(v, t, r + 1);
                            } catch (a) {
                                if (a.code === h.Logger.errors.SERVER_ERROR) throw a;
                            }
                        try {
                            return (0, i.hexlify)(s);
                        } catch (a) {
                            return C.throwError("bad result from backend", h.Logger.errors.SERVER_ERROR, { method: "call", params: { transaction: e, blockTag: t }, result: s, error: a });
                        }
                    });
                }
                call(e, t) {
                    return A(this, void 0, void 0, function* () {
                        yield this.getNetwork();
                        const r = yield (0, a.resolveProperties)({ transaction: this._getTransactionRequest(e), blockTag: this._getBlockTag(t), ccipReadEnabled: Promise.resolve(e.ccipReadEnabled) });
                        return this._call(r.transaction, r.blockTag, r.ccipReadEnabled ? 0 : -1);
                    });
                }
                estimateGas(e) {
                    return A(this, void 0, void 0, function* () {
                        yield this.getNetwork();
                        const t = yield (0, a.resolveProperties)({ transaction: this._getTransactionRequest(e) }),
                            r = yield this.perform("estimateGas", t);
                        try {
                            return o.O$.from(r);
                        } catch (n) {
                            return C.throwError("bad result from backend", h.Logger.errors.SERVER_ERROR, { method: "estimateGas", params: t, result: r, error: n });
                        }
                    });
                }
                _getAddress(e) {
                    return A(this, void 0, void 0, function* () {
                        "string" !== typeof (e = yield e) && C.throwArgumentError("invalid address or ENS name", "name", e);
                        const t = yield this.resolveName(e);
                        return null == t && C.throwError("ENS name not configured", h.Logger.errors.UNSUPPORTED_OPERATION, { operation: `resolveName(${JSON.stringify(e)})` }), t;
                    });
                }
                _getBlock(e, t) {
                    return A(this, void 0, void 0, function* () {
                        yield this.getNetwork(), (e = yield e);
                        let r = -128;
                        const n = { includeTransactions: !!t };
                        if ((0, i.isHexString)(e, 32)) n.blockHash = e;
                        else
                            try {
                                (n.blockTag = yield this._getBlockTag(e)), (0, i.isHexString)(n.blockTag) && (r = parseInt(n.blockTag.substring(2), 16));
                            } catch (o) {
                                C.throwArgumentError("invalid block hash or block tag", "blockHashOrBlockTag", e);
                            }
                        return (0, u.poll)(
                            () =>
                                A(this, void 0, void 0, function* () {
                                    const e = yield this.perform("getBlock", n);
                                    if (null == e) return (null != n.blockHash && null == this._emitted["b:" + n.blockHash]) || (null != n.blockTag && r > this._emitted.block) ? null : void 0;
                                    if (t) {
                                        let t = null;
                                        for (let n = 0; n < e.transactions.length; n++) {
                                            const r = e.transactions[n];
                                            if (null == r.blockNumber) r.confirmations = 0;
                                            else if (null == r.confirmations) {
                                                null == t && (t = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval));
                                                let e = t - r.blockNumber + 1;
                                                e <= 0 && (e = 1), (r.confirmations = e);
                                            }
                                        }
                                        const r = this.formatter.blockWithTransactions(e);
                                        return (r.transactions = r.transactions.map((e) => this._wrapTransaction(e))), r;
                                    }
                                    return this.formatter.block(e);
                                }),
                            { oncePoll: this }
                        );
                    });
                }
                getBlock(e) {
                    return this._getBlock(e, !1);
                }
                getBlockWithTransactions(e) {
                    return this._getBlock(e, !0);
                }
                getTransaction(e) {
                    return A(this, void 0, void 0, function* () {
                        yield this.getNetwork(), (e = yield e);
                        const t = { transactionHash: this.formatter.hash(e, !0) };
                        return (0, u.poll)(
                            () =>
                                A(this, void 0, void 0, function* () {
                                    const r = yield this.perform("getTransaction", t);
                                    if (null == r) return null == this._emitted["t:" + e] ? null : void 0;
                                    const n = this.formatter.transactionResponse(r);
                                    if (null == n.blockNumber) n.confirmations = 0;
                                    else if (null == n.confirmations) {
                                        let e = (yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)) - n.blockNumber + 1;
                                        e <= 0 && (e = 1), (n.confirmations = e);
                                    }
                                    return this._wrapTransaction(n);
                                }),
                            { oncePoll: this }
                        );
                    });
                }
                getTransactionReceipt(e) {
                    return A(this, void 0, void 0, function* () {
                        yield this.getNetwork(), (e = yield e);
                        const t = { transactionHash: this.formatter.hash(e, !0) };
                        return (0, u.poll)(
                            () =>
                                A(this, void 0, void 0, function* () {
                                    const r = yield this.perform("getTransactionReceipt", t);
                                    if (null == r) return null == this._emitted["t:" + e] ? null : void 0;
                                    if (null == r.blockHash) return;
                                    const n = this.formatter.receipt(r);
                                    if (null == n.blockNumber) n.confirmations = 0;
                                    else if (null == n.confirmations) {
                                        let e = (yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)) - n.blockNumber + 1;
                                        e <= 0 && (e = 1), (n.confirmations = e);
                                    }
                                    return n;
                                }),
                            { oncePoll: this }
                        );
                    });
                }
                getLogs(e) {
                    return A(this, void 0, void 0, function* () {
                        yield this.getNetwork();
                        const t = yield (0, a.resolveProperties)({ filter: this._getFilter(e) }),
                            r = yield this.perform("getLogs", t);
                        return (
                            r.forEach((e) => {
                                null == e.removed && (e.removed = !1);
                            }),
                            L.arrayOf(this.formatter.filterLog.bind(this.formatter))(r)
                        );
                    });
                }
                getEtherPrice() {
                    return A(this, void 0, void 0, function* () {
                        return yield this.getNetwork(), this.perform("getEtherPrice", {});
                    });
                }
                _getBlockTag(e) {
                    return A(this, void 0, void 0, function* () {
                        if ("number" === typeof (e = yield e) && e < 0) {
                            e % 1 && C.throwArgumentError("invalid BlockTag", "blockTag", e);
                            let t = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
                            return (t += e), t < 0 && (t = 0), this.formatter.blockTag(t);
                        }
                        return this.formatter.blockTag(e);
                    });
                }
                getResolver(e) {
                    return A(this, void 0, void 0, function* () {
                        let t = e;
                        for (;;) {
                            if ("" === t || "." === t) return null;
                            if ("eth" !== e && "eth" === t) return null;
                            const r = yield this._getResolver(t, "getResolver");
                            if (null != r) {
                                const n = new X(this, r, e);
                                return t === e || (yield n.supportsWildcard()) ? n : null;
                            }
                            t = t.split(".").slice(1).join(".");
                        }
                    });
                }
                _getResolver(e, t) {
                    return A(this, void 0, void 0, function* () {
                        null == t && (t = "ENS");
                        const r = yield this.getNetwork();
                        r.ensAddress || C.throwError("network does not support ENS", h.Logger.errors.UNSUPPORTED_OPERATION, { operation: t, network: r.name });
                        try {
                            const t = yield this.call({ to: r.ensAddress, data: "0x0178b8bf" + (0, y.VM)(e).substring(2) });
                            return this.formatter.callAddress(t);
                        } catch (n) {}
                        return null;
                    });
                }
                resolveName(e) {
                    return A(this, void 0, void 0, function* () {
                        e = yield e;
                        try {
                            return Promise.resolve(this.formatter.address(e));
                        } catch (r) {
                            if ((0, i.isHexString)(e)) throw r;
                        }
                        "string" !== typeof e && C.throwArgumentError("invalid ENS name", "name", e);
                        const t = yield this.getResolver(e);
                        return t ? yield t.getAddress() : null;
                    });
                }
                lookupAddress(e) {
                    return A(this, void 0, void 0, function* () {
                        e = yield e;
                        const t = (e = this.formatter.address(e)).substring(2).toLowerCase() + ".addr.reverse",
                            r = yield this._getResolver(t, "lookupAddress");
                        if (null == r) return null;
                        const n = V(yield this.call({ to: r, data: "0x691f3431" + (0, y.VM)(t).substring(2) }), 0);
                        return (yield this.resolveName(n)) != e ? null : n;
                    });
                }
                getAvatar(e) {
                    return A(this, void 0, void 0, function* () {
                        let t = null;
                        if ((0, i.isHexString)(e)) {
                            const r = this.formatter.address(e).substring(2).toLowerCase() + ".addr.reverse",
                                o = yield this._getResolver(r, "getAvatar");
                            if (!o) return null;
                            t = new X(this, o, r);
                            try {
                                const e = yield t.getAvatar();
                                if (e) return e.url;
                            } catch (n) {
                                if (n.code !== h.Logger.errors.CALL_EXCEPTION) throw n;
                            }
                            try {
                                const e = V(yield this.call({ to: o, data: "0x691f3431" + (0, y.VM)(r).substring(2) }), 0);
                                t = yield this.getResolver(e);
                            } catch (n) {
                                if (n.code !== h.Logger.errors.CALL_EXCEPTION) throw n;
                                return null;
                            }
                        } else if (((t = yield this.getResolver(e)), !t)) return null;
                        const r = yield t.getAvatar();
                        return null == r ? null : r.url;
                    });
                }
                perform(e, t) {
                    return C.throwError(e + " not implemented", h.Logger.errors.NOT_IMPLEMENTED, { operation: e });
                }
                _startEvent(e) {
                    this.polling = this._events.filter((e) => e.pollable()).length > 0;
                }
                _stopEvent(e) {
                    this.polling = this._events.filter((e) => e.pollable()).length > 0;
                }
                _addEventListener(e, t, r) {
                    const n = new $(S(e), t, r);
                    return this._events.push(n), this._startEvent(n), this;
                }
                on(e, t) {
                    return this._addEventListener(e, t, !1);
                }
                once(e, t) {
                    return this._addEventListener(e, t, !0);
                }
                emit(e, ...t) {
                    let r = !1,
                        n = [],
                        o = S(e);
                    return (
                        (this._events = this._events.filter(
                            (e) =>
                                e.tag !== o ||
                                (setTimeout(() => {
                                    e.listener.apply(this, t);
                                }, 0),
                                (r = !0),
                                !e.once || (n.push(e), !1))
                        )),
                        n.forEach((e) => {
                            this._stopEvent(e);
                        }),
                        r
                    );
                }
                listenerCount(e) {
                    if (!e) return this._events.length;
                    let t = S(e);
                    return this._events.filter((e) => e.tag === t).length;
                }
                listeners(e) {
                    if (null == e) return this._events.map((e) => e.listener);
                    let t = S(e);
                    return this._events.filter((e) => e.tag === t).map((e) => e.listener);
                }
                off(e, t) {
                    if (null == t) return this.removeAllListeners(e);
                    const r = [];
                    let n = !1,
                        o = S(e);
                    return (
                        (this._events = this._events.filter((e) => e.tag !== o || e.listener != t || !!n || ((n = !0), r.push(e), !1))),
                        r.forEach((e) => {
                            this._stopEvent(e);
                        }),
                        this
                    );
                }
                removeAllListeners(e) {
                    let t = [];
                    if (null == e) (t = this._events), (this._events = []);
                    else {
                        const r = S(e);
                        this._events = this._events.filter((e) => e.tag !== r || (t.push(e), !1));
                    }
                    return (
                        t.forEach((e) => {
                            this._stopEvent(e);
                        }),
                        this
                    );
                }
            }
            var te = function (e, t, r, n) {
                return new (r || (r = Promise))(function (o, i) {
                    function s(e) {
                        try {
                            l(n.next(e));
                        } catch (t) {
                            i(t);
                        }
                    }
                    function a(e) {
                        try {
                            l(n.throw(e));
                        } catch (t) {
                            i(t);
                        }
                    }
                    function l(e) {
                        var t;
                        e.done
                            ? o(e.value)
                            : ((t = e.value),
                              t instanceof r
                                  ? t
                                  : new r(function (e) {
                                        e(t);
                                    })).then(s, a);
                    }
                    l((n = n.apply(e, t || [])).next());
                });
            };
            const re = new h.Logger(d),
                ne = ["call", "estimateGas"];
            function oe(e, t) {
                if (null == e) return null;
                if ("string" === typeof e.message && e.message.match("reverted")) {
                    const r = (0, i.isHexString)(e.data) ? e.data : null;
                    if (!t || r) return { message: e.message, data: r };
                }
                if ("object" === typeof e) {
                    for (const r in e) {
                        const n = oe(e[r], t);
                        if (n) return n;
                    }
                    return null;
                }
                if ("string" === typeof e)
                    try {
                        return oe(JSON.parse(e), t);
                    } catch (r) {}
                return null;
            }
            function ie(e, t, r) {
                const n = r.transaction || r.signedTransaction;
                if ("call" === e) {
                    const e = oe(t, !0);
                    if (e) return e.data;
                    re.throwError("missing revert data in call exception; Transaction reverted without a reason string", h.Logger.errors.CALL_EXCEPTION, { data: "0x", transaction: n, error: t });
                }
                if ("estimateGas" === e) {
                    let r = oe(t.body, !1);
                    null == r && (r = oe(t, !1)),
                        r && re.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", h.Logger.errors.UNPREDICTABLE_GAS_LIMIT, { reason: r.message, method: e, transaction: n, error: t });
                }
                let o = t.message;
                throw (
                    (t.code === h.Logger.errors.SERVER_ERROR && t.error && "string" === typeof t.error.message ? (o = t.error.message) : "string" === typeof t.body ? (o = t.body) : "string" === typeof t.responseText && (o = t.responseText),
                    (o = (o || "").toLowerCase()),
                    o.match(/insufficient funds|base fee exceeds gas limit/i) && re.throwError("insufficient funds for intrinsic transaction cost", h.Logger.errors.INSUFFICIENT_FUNDS, { error: t, method: e, transaction: n }),
                    o.match(/nonce (is )?too low/i) && re.throwError("nonce has already been used", h.Logger.errors.NONCE_EXPIRED, { error: t, method: e, transaction: n }),
                    o.match(/replacement transaction underpriced|transaction gas price.*too low/i) && re.throwError("replacement fee too low", h.Logger.errors.REPLACEMENT_UNDERPRICED, { error: t, method: e, transaction: n }),
                    o.match(/only replay-protected/i) && re.throwError("legacy pre-eip-155 transactions not supported", h.Logger.errors.UNSUPPORTED_OPERATION, { error: t, method: e, transaction: n }),
                    ne.indexOf(e) >= 0 &&
                        o.match(/gas required exceeds allowance|always failing transaction|execution reverted/) &&
                        re.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", h.Logger.errors.UNPREDICTABLE_GAS_LIMIT, { error: t, method: e, transaction: n }),
                    t)
                );
            }
            function se(e) {
                return new Promise(function (t) {
                    setTimeout(t, e);
                });
            }
            function ae(e) {
                if (e.error) {
                    const t = new Error(e.error.message);
                    throw ((t.code = e.error.code), (t.data = e.error.data), t);
                }
                return e.result;
            }
            function le(e) {
                return e ? e.toLowerCase() : e;
            }
            const ce = {};
            class ue extends n.E {
                constructor(e, t, r) {
                    if ((super(), e !== ce)) throw new Error("do not call the JsonRpcSigner constructor directly; use provider.getSigner");
                    (0, a.defineReadOnly)(this, "provider", t),
                        null == r && (r = 0),
                        "string" === typeof r
                            ? ((0, a.defineReadOnly)(this, "_address", this.provider.formatter.address(r)), (0, a.defineReadOnly)(this, "_index", null))
                            : "number" === typeof r
                            ? ((0, a.defineReadOnly)(this, "_index", r), (0, a.defineReadOnly)(this, "_address", null))
                            : re.throwArgumentError("invalid address or index", "addressOrIndex", r);
                }
                connect(e) {
                    return re.throwError("cannot alter JSON-RPC Signer connection", h.Logger.errors.UNSUPPORTED_OPERATION, { operation: "connect" });
                }
                connectUnchecked() {
                    return new he(ce, this.provider, this._address || this._index);
                }
                getAddress() {
                    return this._address
                        ? Promise.resolve(this._address)
                        : this.provider
                              .send("eth_accounts", [])
                              .then((e) => (e.length <= this._index && re.throwError("unknown account #" + this._index, h.Logger.errors.UNSUPPORTED_OPERATION, { operation: "getAddress" }), this.provider.formatter.address(e[this._index])));
                }
                sendUncheckedTransaction(e) {
                    e = (0, a.shallowCopy)(e);
                    const t = this.getAddress().then((e) => (e && (e = e.toLowerCase()), e));
                    if (null == e.gasLimit) {
                        const r = (0, a.shallowCopy)(e);
                        (r.from = t), (e.gasLimit = this.provider.estimateGas(r));
                    }
                    return (
                        null != e.to &&
                            (e.to = Promise.resolve(e.to).then((e) =>
                                te(this, void 0, void 0, function* () {
                                    if (null == e) return null;
                                    const t = yield this.provider.resolveName(e);
                                    return null == t && re.throwArgumentError("provided ENS name resolves to null", "tx.to", e), t;
                                })
                            )),
                        (0, a.resolveProperties)({ tx: (0, a.resolveProperties)(e), sender: t }).then(({ tx: t, sender: r }) => {
                            null != t.from ? t.from.toLowerCase() !== r && re.throwArgumentError("from address mismatch", "transaction", e) : (t.from = r);
                            const n = this.provider.constructor.hexlifyTransaction(t, { from: !0 });
                            return this.provider.send("eth_sendTransaction", [n]).then(
                                (e) => e,
                                (e) => ie("sendTransaction", e, n)
                            );
                        })
                    );
                }
                signTransaction(e) {
                    return re.throwError("signing transactions is unsupported", h.Logger.errors.UNSUPPORTED_OPERATION, { operation: "signTransaction" });
                }
                sendTransaction(e) {
                    return te(this, void 0, void 0, function* () {
                        const t = yield this.provider._getInternalBlockNumber(100 + 2 * this.provider.pollingInterval),
                            r = yield this.sendUncheckedTransaction(e);
                        try {
                            return yield (0, u.poll)(
                                () =>
                                    te(this, void 0, void 0, function* () {
                                        const e = yield this.provider.getTransaction(r);
                                        if (null !== e) return this.provider._wrapTransaction(e, r, t);
                                    }),
                                { oncePoll: this.provider }
                            );
                        } catch (n) {
                            throw ((n.transactionHash = r), n);
                        }
                    });
                }
                signMessage(e) {
                    return te(this, void 0, void 0, function* () {
                        const t = "string" === typeof e ? (0, l.Y0)(e) : e,
                            r = yield this.getAddress();
                        return yield this.provider.send("personal_sign", [(0, i.hexlify)(t), r.toLowerCase()]);
                    });
                }
                _legacySignMessage(e) {
                    return te(this, void 0, void 0, function* () {
                        const t = "string" === typeof e ? (0, l.Y0)(e) : e,
                            r = yield this.getAddress();
                        return yield this.provider.send("eth_sign", [r.toLowerCase(), (0, i.hexlify)(t)]);
                    });
                }
                _signTypedData(e, t, r) {
                    return te(this, void 0, void 0, function* () {
                        const n = yield s.E.resolveNames(e, t, r, (e) => this.provider.resolveName(e)),
                            o = yield this.getAddress();
                        return yield this.provider.send("eth_signTypedData_v4", [o.toLowerCase(), JSON.stringify(s.E.getPayload(n.domain, t, n.value))]);
                    });
                }
                unlock(e) {
                    return te(this, void 0, void 0, function* () {
                        const t = this.provider,
                            r = yield this.getAddress();
                        return t.send("personal_unlockAccount", [r.toLowerCase(), e, null]);
                    });
                }
            }
            class he extends ue {
                sendTransaction(e) {
                    return this.sendUncheckedTransaction(e).then((e) => ({
                        hash: e,
                        nonce: null,
                        gasLimit: null,
                        gasPrice: null,
                        data: null,
                        value: null,
                        chainId: null,
                        confirmations: 0,
                        from: null,
                        wait: (t) => this.provider.waitForTransaction(e, t),
                    }));
                }
            }
            const de = { chainId: !0, data: !0, gasLimit: !0, gasPrice: !0, nonce: !0, to: !0, value: !0, type: !0, accessList: !0, maxFeePerGas: !0, maxPriorityFeePerGas: !0 };
            class fe extends ee {
                constructor(e, t) {
                    let r = t;
                    null == r &&
                        (r = new Promise((e, t) => {
                            setTimeout(() => {
                                this.detectNetwork().then(
                                    (t) => {
                                        e(t);
                                    },
                                    (e) => {
                                        t(e);
                                    }
                                );
                            }, 0);
                        })),
                        super(r),
                        e || (e = (0, a.getStatic)(this.constructor, "defaultUrl")()),
                        "string" === typeof e ? (0, a.defineReadOnly)(this, "connection", Object.freeze({ url: e })) : (0, a.defineReadOnly)(this, "connection", Object.freeze((0, a.shallowCopy)(e))),
                        (this._nextId = 42);
                }
                get _cache() {
                    return null == this._eventLoopCache && (this._eventLoopCache = {}), this._eventLoopCache;
                }
                static defaultUrl() {
                    return "http://localhost:8545";
                }
                detectNetwork() {
                    return (
                        this._cache.detectNetwork ||
                            ((this._cache.detectNetwork = this._uncachedDetectNetwork()),
                            setTimeout(() => {
                                this._cache.detectNetwork = null;
                            }, 0)),
                        this._cache.detectNetwork
                    );
                }
                _uncachedDetectNetwork() {
                    return te(this, void 0, void 0, function* () {
                        yield se(0);
                        let e = null;
                        try {
                            e = yield this.send("eth_chainId", []);
                        } catch (t) {
                            try {
                                e = yield this.send("net_version", []);
                            } catch (t) {}
                        }
                        if (null != e) {
                            const r = (0, a.getStatic)(this.constructor, "getNetwork");
                            try {
                                return r(o.O$.from(e).toNumber());
                            } catch (t) {
                                return re.throwError("could not detect network", h.Logger.errors.NETWORK_ERROR, { chainId: e, event: "invalidNetwork", serverError: t });
                            }
                        }
                        return re.throwError("could not detect network", h.Logger.errors.NETWORK_ERROR, { event: "noNetwork" });
                    });
                }
                getSigner(e) {
                    return new ue(ce, this, e);
                }
                getUncheckedSigner(e) {
                    return this.getSigner(e).connectUnchecked();
                }
                listAccounts() {
                    return this.send("eth_accounts", []).then((e) => e.map((e) => this.formatter.address(e)));
                }
                send(e, t) {
                    const r = { method: e, params: t, id: this._nextId++, jsonrpc: "2.0" };
                    this.emit("debug", { action: "request", request: (0, a.deepCopy)(r), provider: this });
                    const n = ["eth_chainId", "eth_blockNumber"].indexOf(e) >= 0;
                    if (n && this._cache[e]) return this._cache[e];
                    const o = (0, u.fetchJson)(this.connection, JSON.stringify(r), ae).then(
                        (e) => (this.emit("debug", { action: "response", request: r, response: e, provider: this }), e),
                        (e) => {
                            throw (this.emit("debug", { action: "response", error: e, request: r, provider: this }), e);
                        }
                    );
                    return (
                        n &&
                            ((this._cache[e] = o),
                            setTimeout(() => {
                                this._cache[e] = null;
                            }, 0)),
                        o
                    );
                }
                prepareRequest(e, t) {
                    switch (e) {
                        case "getBlockNumber":
                            return ["eth_blockNumber", []];
                        case "getGasPrice":
                            return ["eth_gasPrice", []];
                        case "getBalance":
                            return ["eth_getBalance", [le(t.address), t.blockTag]];
                        case "getTransactionCount":
                            return ["eth_getTransactionCount", [le(t.address), t.blockTag]];
                        case "getCode":
                            return ["eth_getCode", [le(t.address), t.blockTag]];
                        case "getStorageAt":
                            return ["eth_getStorageAt", [le(t.address), (0, i.hexZeroPad)(t.position, 32), t.blockTag]];
                        case "sendTransaction":
                            return ["eth_sendRawTransaction", [t.signedTransaction]];
                        case "getBlock":
                            return t.blockTag ? ["eth_getBlockByNumber", [t.blockTag, !!t.includeTransactions]] : t.blockHash ? ["eth_getBlockByHash", [t.blockHash, !!t.includeTransactions]] : null;
                        case "getTransaction":
                            return ["eth_getTransactionByHash", [t.transactionHash]];
                        case "getTransactionReceipt":
                            return ["eth_getTransactionReceipt", [t.transactionHash]];
                        case "call":
                            return ["eth_call", [(0, a.getStatic)(this.constructor, "hexlifyTransaction")(t.transaction, { from: !0 }), t.blockTag]];
                        case "estimateGas":
                            return ["eth_estimateGas", [(0, a.getStatic)(this.constructor, "hexlifyTransaction")(t.transaction, { from: !0 })]];
                        case "getLogs":
                            return t.filter && null != t.filter.address && (t.filter.address = le(t.filter.address)), ["eth_getLogs", [t.filter]];
                    }
                    return null;
                }
                perform(e, t) {
                    return te(this, void 0, void 0, function* () {
                        if ("call" === e || "estimateGas" === e) {
                            const e = t.transaction;
                            if (e && null != e.type && o.O$.from(e.type).isZero() && null == e.maxFeePerGas && null == e.maxPriorityFeePerGas) {
                                const r = yield this.getFeeData();
                                null == r.maxFeePerGas && null == r.maxPriorityFeePerGas && (((t = (0, a.shallowCopy)(t)).transaction = (0, a.shallowCopy)(e)), delete t.transaction.type);
                            }
                        }
                        const r = this.prepareRequest(e, t);
                        null == r && re.throwError(e + " not implemented", h.Logger.errors.NOT_IMPLEMENTED, { operation: e });
                        try {
                            return yield this.send(r[0], r[1]);
                        } catch (n) {
                            return ie(e, n, t);
                        }
                    });
                }
                _startEvent(e) {
                    "pending" === e.tag && this._startPending(), super._startEvent(e);
                }
                _startPending() {
                    if (null != this._pendingFilter) return;
                    const e = this,
                        t = this.send("eth_newPendingTransactionFilter", []);
                    (this._pendingFilter = t),
                        t
                            .then(function (r) {
                                return (
                                    (function n() {
                                        e.send("eth_getFilterChanges", [r])
                                            .then(function (r) {
                                                if (e._pendingFilter != t) return null;
                                                let n = Promise.resolve();
                                                return (
                                                    r.forEach(function (t) {
                                                        (e._emitted["t:" + t.toLowerCase()] = "pending"),
                                                            (n = n.then(function () {
                                                                return e.getTransaction(t).then(function (t) {
                                                                    return e.emit("pending", t), null;
                                                                });
                                                            }));
                                                    }),
                                                    n.then(function () {
                                                        return se(1e3);
                                                    })
                                                );
                                            })
                                            .then(function () {
                                                if (e._pendingFilter == t)
                                                    return (
                                                        setTimeout(function () {
                                                            n();
                                                        }, 0),
                                                        null
                                                    );
                                                e.send("eth_uninstallFilter", [r]);
                                            })
                                            .catch((e) => {});
                                    })(),
                                    r
                                );
                            })
                            .catch((e) => {});
                }
                _stopEvent(e) {
                    "pending" === e.tag && 0 === this.listenerCount("pending") && (this._pendingFilter = null), super._stopEvent(e);
                }
                static hexlifyTransaction(e, t) {
                    const r = (0, a.shallowCopy)(de);
                    if (t) for (const o in t) t[o] && (r[o] = !0);
                    (0, a.checkProperties)(e, r);
                    const n = {};
                    return (
                        ["chainId", "gasLimit", "gasPrice", "type", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "value"].forEach(function (t) {
                            if (null == e[t]) return;
                            const r = (0, i.hexValue)(o.O$.from(e[t]));
                            "gasLimit" === t && (t = "gas"), (n[t] = r);
                        }),
                        ["from", "to", "data"].forEach(function (t) {
                            null != e[t] && (n[t] = (0, i.hexlify)(e[t]));
                        }),
                        e.accessList && (n.accessList = (0, c.accessListify)(e.accessList)),
                        n
                    );
                }
            }
        },
        2006: function (e, t, r) {
            "use strict";
            r.d(t, {
                Gy: function () {
                    return d;
                },
                bP: function () {
                    return c;
                },
                JQ: function () {
                    return u;
                },
                o: function () {
                    return h;
                },
            });
            var n = r(33715),
                o = r.n(n),
                i = r(16441),
                s = r(21261),
                a = r(1581);
            const l = new a.Logger("sha2/5.6.1");
            function c(e) {
                return (
                    "0x" +
                    o()
                        .ripemd160()
                        .update((0, i.arrayify)(e))
                        .digest("hex")
                );
            }
            function u(e) {
                return (
                    "0x" +
                    o()
                        .sha256()
                        .update((0, i.arrayify)(e))
                        .digest("hex")
                );
            }
            function h(e) {
                return (
                    "0x" +
                    o()
                        .sha512()
                        .update((0, i.arrayify)(e))
                        .digest("hex")
                );
            }
            function d(e, t, r) {
                return (
                    s.p[e] || l.throwError("unsupported algorithm " + e, a.Logger.errors.UNSUPPORTED_OPERATION, { operation: "hmac", algorithm: e }),
                    "0x" +
                        o()
                            .hmac(o()[e], (0, i.arrayify)(t))
                            .update((0, i.arrayify)(r))
                            .digest("hex")
                );
            }
        },
        21261: function (e, t, r) {
            "use strict";
            var n;
            r.d(t, {
                p: function () {
                    return n;
                },
            }),
                (function (e) {
                    (e.sha256 = "sha256"), (e.sha512 = "sha512");
                })(n || (n = {}));
        },
        35637: function (e, t, r) {
            "use strict";
            r.d(t, {
                Ll: function () {
                    return g;
                },
            });
            var n = r(29251);
            function o(e, t) {
                t ||
                    (t = function (e) {
                        return [parseInt(e, 16)];
                    });
                let r = 0,
                    n = {};
                return (
                    e.split(",").forEach((e) => {
                        let o = e.split(":");
                        (r += parseInt(o[0], 16)), (n[r] = t(o[1]));
                    }),
                    n
                );
            }
            function i(e) {
                let t = 0;
                return e.split(",").map((e) => {
                    let r = e.split("-");
                    1 === r.length ? (r[1] = "0") : "" === r[1] && (r[1] = "1");
                    let n = t + parseInt(r[0], 16);
                    return (t = parseInt(r[1], 16)), { l: n, h: t };
                });
            }
            function s(e, t) {
                let r = 0;
                for (let n = 0; n < t.length; n++) {
                    let o = t[n];
                    if (((r += o.l), e >= r && e <= r + o.h && (e - r) % (o.d || 1) === 0)) {
                        if (o.e && -1 !== o.e.indexOf(e - r)) continue;
                        return o;
                    }
                }
                return null;
            }
            const a = i(
                    "221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"
                ),
                l = "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map((e) => parseInt(e, 16)),
                c = [
                    { h: 25, s: 32, l: 65 },
                    { h: 30, s: 32, e: [23], l: 127 },
                    { h: 54, s: 1, e: [48], l: 64, d: 2 },
                    { h: 14, s: 1, l: 57, d: 2 },
                    { h: 44, s: 1, l: 17, d: 2 },
                    { h: 10, s: 1, e: [2, 6, 8], l: 61, d: 2 },
                    { h: 16, s: 1, l: 68, d: 2 },
                    { h: 84, s: 1, e: [18, 24, 66], l: 19, d: 2 },
                    { h: 26, s: 32, e: [17], l: 435 },
                    { h: 22, s: 1, l: 71, d: 2 },
                    { h: 15, s: 80, l: 40 },
                    { h: 31, s: 32, l: 16 },
                    { h: 32, s: 1, l: 80, d: 2 },
                    { h: 52, s: 1, l: 42, d: 2 },
                    { h: 12, s: 1, l: 55, d: 2 },
                    { h: 40, s: 1, e: [38], l: 15, d: 2 },
                    { h: 14, s: 1, l: 48, d: 2 },
                    { h: 37, s: 48, l: 49 },
                    { h: 148, s: 1, l: 6351, d: 2 },
                    { h: 88, s: 1, l: 160, d: 2 },
                    { h: 15, s: 16, l: 704 },
                    { h: 25, s: 26, l: 854 },
                    { h: 25, s: 32, l: 55915 },
                    { h: 37, s: 40, l: 1247 },
                    { h: 25, s: -119711, l: 53248 },
                    { h: 25, s: -119763, l: 52 },
                    { h: 25, s: -119815, l: 52 },
                    { h: 25, s: -119867, e: [1, 4, 5, 7, 8, 11, 12, 17], l: 52 },
                    { h: 25, s: -119919, l: 52 },
                    { h: 24, s: -119971, e: [2, 7, 8, 17], l: 52 },
                    { h: 24, s: -120023, e: [2, 7, 13, 15, 16, 17], l: 52 },
                    { h: 25, s: -120075, l: 52 },
                    { h: 25, s: -120127, l: 52 },
                    { h: 25, s: -120179, l: 52 },
                    { h: 25, s: -120231, l: 52 },
                    { h: 25, s: -120283, l: 52 },
                    { h: 25, s: -120335, l: 52 },
                    { h: 24, s: -119543, e: [17], l: 56 },
                    { h: 24, s: -119601, e: [17], l: 58 },
                    { h: 24, s: -119659, e: [17], l: 58 },
                    { h: 24, s: -119717, e: [17], l: 58 },
                    { h: 24, s: -119775, e: [17], l: 58 },
                ],
                u = o(
                    "b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"
                ),
                h = o(
                    "179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"
                ),
                d = o(
                    "df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D",
                    function (e) {
                        if (e.length % 4 !== 0) throw new Error("bad data");
                        let t = [];
                        for (let r = 0; r < e.length; r += 4) t.push(parseInt(e.substring(r, r + 4), 16));
                        return t;
                    }
                ),
                f = i("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");
            function g(e) {
                if (e.match(/^[a-z0-9-]*$/i) && e.length <= 59) return e.toLowerCase();
                let t = (0, n.XL)(e);
                var r;
                (r = t.map((e) => {
                    if (l.indexOf(e) >= 0) return [];
                    if (e >= 65024 && e <= 65039) return [];
                    let t = (function (e) {
                        let t = s(e, c);
                        if (t) return [e + t.s];
                        let r = u[e];
                        if (r) return r;
                        let n = h[e];
                        return n ? [e + n[0]] : d[e] || null;
                    })(e);
                    return t || [e];
                })),
                    (t = r.reduce(
                        (e, t) => (
                            t.forEach((t) => {
                                e.push(t);
                            }),
                            e
                        ),
                        []
                    )),
                    (t = (0, n.XL)((0, n.uu)(t), n.Uj.NFKC)),
                    t.forEach((e) => {
                        if (s(e, f)) throw new Error("STRINGPREP_CONTAINS_PROHIBITED");
                    }),
                    t.forEach((e) => {
                        if (s(e, a)) throw new Error("STRINGPREP_CONTAINS_UNASSIGNED");
                    });
                let o = (0, n.uu)(t);
                if ("-" === o.substring(0, 1) || "--" === o.substring(2, 4) || "-" === o.substring(o.length - 1)) throw new Error("invalid hyphen");
                if (o.length > 63) throw new Error("too long");
                return o;
            }
        },
        35553: function (e, t, r) {
            "use strict";
            r.r(t),
                r.d(t, {
                    commify: function () {
                        return _;
                    },
                    formatEther: function () {
                        return N;
                    },
                    formatUnits: function () {
                        return k;
                    },
                    parseEther: function () {
                        return R;
                    },
                    parseUnits: function () {
                        return P;
                    },
                });
            var n = r(16441),
                o = r(1581),
                i = r(48794),
                s = r(2593);
            const a = new o.Logger(i.i),
                l = {},
                c = s.O$.from(0),
                u = s.O$.from(-1);
            function h(e, t, r, n) {
                const i = { fault: t, operation: r };
                return void 0 !== n && (i.value = n), a.throwError(e, o.Logger.errors.NUMERIC_FAULT, i);
            }
            let d = "0";
            for (; d.length < 256; ) d += d;
            function f(e) {
                if ("number" !== typeof e)
                    try {
                        e = s.O$.from(e).toNumber();
                    } catch (t) {}
                return "number" === typeof e && e >= 0 && e <= 256 && !(e % 1) ? "1" + d.substring(0, e) : a.throwArgumentError("invalid decimal size", "decimals", e);
            }
            function g(e, t) {
                null == t && (t = 0);
                const r = f(t),
                    n = (e = s.O$.from(e)).lt(c);
                n && (e = e.mul(u));
                let o = e.mod(r).toString();
                for (; o.length < r.length - 1; ) o = "0" + o;
                o = o.match(/^([0-9]*[1-9]|0)(0*)/)[1];
                const i = e.div(r).toString();
                return (e = 1 === r.length ? i : i + "." + o), n && (e = "-" + e), e;
            }
            function m(e, t) {
                null == t && (t = 0);
                const r = f(t);
                ("string" === typeof e && e.match(/^-?[0-9.]+$/)) || a.throwArgumentError("invalid decimal value", "value", e);
                const n = "-" === e.substring(0, 1);
                n && (e = e.substring(1)), "." === e && a.throwArgumentError("missing value", "value", e);
                const o = e.split(".");
                o.length > 2 && a.throwArgumentError("too many decimal points", "value", e);
                let i = o[0],
                    l = o[1];
                for (i || (i = "0"), l || (l = "0"); "0" === l[l.length - 1]; ) l = l.substring(0, l.length - 1);
                for (l.length > r.length - 1 && h("fractional component exceeds decimals", "underflow", "parseFixed"), "" === l && (l = "0"); l.length < r.length - 1; ) l += "0";
                const c = s.O$.from(i),
                    d = s.O$.from(l);
                let g = c.mul(r).add(d);
                return n && (g = g.mul(u)), g;
            }
            class p {
                constructor(e, t, r, n) {
                    e !== l && a.throwError("cannot use FixedFormat constructor; use FixedFormat.from", o.Logger.errors.UNSUPPORTED_OPERATION, { operation: "new FixedFormat" }),
                        (this.signed = t),
                        (this.width = r),
                        (this.decimals = n),
                        (this.name = (t ? "" : "u") + "fixed" + String(r) + "x" + String(n)),
                        (this._multiplier = f(n)),
                        Object.freeze(this);
                }
                static from(e) {
                    if (e instanceof p) return e;
                    "number" === typeof e && (e = `fixed128x${e}`);
                    let t = !0,
                        r = 128,
                        n = 18;
                    if ("string" === typeof e)
                        if ("fixed" === e);
                        else if ("ufixed" === e) t = !1;
                        else {
                            const o = e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
                            o || a.throwArgumentError("invalid fixed format", "format", e), (t = "u" !== o[1]), (r = parseInt(o[2])), (n = parseInt(o[3]));
                        }
                    else if (e) {
                        const o = (t, r, n) => (null == e[t] ? n : (typeof e[t] !== r && a.throwArgumentError("invalid fixed format (" + t + " not " + r + ")", "format." + t, e[t]), e[t]));
                        (t = o("signed", "boolean", t)), (r = o("width", "number", r)), (n = o("decimals", "number", n));
                    }
                    return (
                        r % 8 && a.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", r), n > 80 && a.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", n), new p(l, t, r, n)
                    );
                }
            }
            class y {
                constructor(e, t, r, n) {
                    e !== l && a.throwError("cannot use FixedNumber constructor; use FixedNumber.from", o.Logger.errors.UNSUPPORTED_OPERATION, { operation: "new FixedFormat" }),
                        (this.format = n),
                        (this._hex = t),
                        (this._value = r),
                        (this._isFixedNumber = !0),
                        Object.freeze(this);
                }
                _checkFormat(e) {
                    this.format.name !== e.format.name && a.throwArgumentError("incompatible format; use fixedNumber.toFormat", "other", e);
                }
                addUnsafe(e) {
                    this._checkFormat(e);
                    const t = m(this._value, this.format.decimals),
                        r = m(e._value, e.format.decimals);
                    return y.fromValue(t.add(r), this.format.decimals, this.format);
                }
                subUnsafe(e) {
                    this._checkFormat(e);
                    const t = m(this._value, this.format.decimals),
                        r = m(e._value, e.format.decimals);
                    return y.fromValue(t.sub(r), this.format.decimals, this.format);
                }
                mulUnsafe(e) {
                    this._checkFormat(e);
                    const t = m(this._value, this.format.decimals),
                        r = m(e._value, e.format.decimals);
                    return y.fromValue(t.mul(r).div(this.format._multiplier), this.format.decimals, this.format);
                }
                divUnsafe(e) {
                    this._checkFormat(e);
                    const t = m(this._value, this.format.decimals),
                        r = m(e._value, e.format.decimals);
                    return y.fromValue(t.mul(this.format._multiplier).div(r), this.format.decimals, this.format);
                }
                floor() {
                    const e = this.toString().split(".");
                    1 === e.length && e.push("0");
                    let t = y.from(e[0], this.format);
                    const r = !e[1].match(/^(0*)$/);
                    return this.isNegative() && r && (t = t.subUnsafe(v.toFormat(t.format))), t;
                }
                ceiling() {
                    const e = this.toString().split(".");
                    1 === e.length && e.push("0");
                    let t = y.from(e[0], this.format);
                    const r = !e[1].match(/^(0*)$/);
                    return !this.isNegative() && r && (t = t.addUnsafe(v.toFormat(t.format))), t;
                }
                round(e) {
                    null == e && (e = 0);
                    const t = this.toString().split(".");
                    if ((1 === t.length && t.push("0"), (e < 0 || e > 80 || e % 1) && a.throwArgumentError("invalid decimal count", "decimals", e), t[1].length <= e)) return this;
                    const r = y.from("1" + d.substring(0, e), this.format),
                        n = b.toFormat(this.format);
                    return this.mulUnsafe(r).addUnsafe(n).floor().divUnsafe(r);
                }
                isZero() {
                    return "0.0" === this._value || "0" === this._value;
                }
                isNegative() {
                    return "-" === this._value[0];
                }
                toString() {
                    return this._value;
                }
                toHexString(e) {
                    if (null == e) return this._hex;
                    e % 8 && a.throwArgumentError("invalid byte width", "width", e);
                    const t = s.O$.from(this._hex).fromTwos(this.format.width).toTwos(e).toHexString();
                    return (0, n.hexZeroPad)(t, e / 8);
                }
                toUnsafeFloat() {
                    return parseFloat(this.toString());
                }
                toFormat(e) {
                    return y.fromString(this._value, e);
                }
                static fromValue(e, t, r) {
                    return null != r || null == t || (0, s.Zm)(t) || ((r = t), (t = null)), null == t && (t = 0), null == r && (r = "fixed"), y.fromString(g(e, t), p.from(r));
                }
                static fromString(e, t) {
                    null == t && (t = "fixed");
                    const r = p.from(t),
                        o = m(e, r.decimals);
                    !r.signed && o.lt(c) && h("unsigned value cannot be negative", "overflow", "value", e);
                    let i = null;
                    r.signed ? (i = o.toTwos(r.width).toHexString()) : ((i = o.toHexString()), (i = (0, n.hexZeroPad)(i, r.width / 8)));
                    const s = g(o, r.decimals);
                    return new y(l, i, s, r);
                }
                static fromBytes(e, t) {
                    null == t && (t = "fixed");
                    const r = p.from(t);
                    if ((0, n.arrayify)(e).length > r.width / 8) throw new Error("overflow");
                    let o = s.O$.from(e);
                    r.signed && (o = o.fromTwos(r.width));
                    const i = o.toTwos((r.signed ? 0 : 1) + r.width).toHexString(),
                        a = g(o, r.decimals);
                    return new y(l, i, a, r);
                }
                static from(e, t) {
                    if ("string" === typeof e) return y.fromString(e, t);
                    if ((0, n.isBytes)(e)) return y.fromBytes(e, t);
                    try {
                        return y.fromValue(e, 0, t);
                    } catch (r) {
                        if (r.code !== o.Logger.errors.INVALID_ARGUMENT) throw r;
                    }
                    return a.throwArgumentError("invalid FixedNumber value", "value", e);
                }
                static isFixedNumber(e) {
                    return !(!e || !e._isFixedNumber);
                }
            }
            const v = y.from(1),
                b = y.from("0.5"),
                w = new o.Logger("units/5.6.1"),
                E = ["wei", "kwei", "mwei", "gwei", "szabo", "finney", "ether"];
            function _(e) {
                const t = String(e).split(".");
                (t.length > 2 || !t[0].match(/^-?[0-9]*$/) || (t[1] && !t[1].match(/^[0-9]*$/)) || "." === e || "-." === e) && w.throwArgumentError("invalid value", "value", e);
                let r = t[0],
                    n = "";
                for ("-" === r.substring(0, 1) && ((n = "-"), (r = r.substring(1))); "0" === r.substring(0, 1); ) r = r.substring(1);
                "" === r && (r = "0");
                let o = "";
                for (2 === t.length && (o = "." + (t[1] || "0")); o.length > 2 && "0" === o[o.length - 1]; ) o = o.substring(0, o.length - 1);
                const i = [];
                for (; r.length; ) {
                    if (r.length <= 3) {
                        i.unshift(r);
                        break;
                    }
                    {
                        const e = r.length - 3;
                        i.unshift(r.substring(e)), (r = r.substring(0, e));
                    }
                }
                return n + i.join(",") + o;
            }
            function k(e, t) {
                if ("string" === typeof t) {
                    const e = E.indexOf(t);
                    -1 !== e && (t = 3 * e);
                }
                return g(e, null != t ? t : 18);
            }
            function P(e, t) {
                if (("string" !== typeof e && w.throwArgumentError("value must be a string", "value", e), "string" === typeof t)) {
                    const e = E.indexOf(t);
                    -1 !== e && (t = 3 * e);
                }
                return m(e, null != t ? t : 18);
            }
            function N(e) {
                return k(e, 18);
            }
            function R(e) {
                return P(e, 18);
            }
        },
        37707: function (e, t, r) {
            "use strict";
            r.r(t),
                r.d(t, {
                    _fetchData: function () {
                        return g;
                    },
                    fetchJson: function () {
                        return m;
                    },
                    poll: function () {
                        return p;
                    },
                });
            var n = r(59567),
                o = r(16441),
                i = r(6881),
                s = r(29251),
                a = r(1581);
            var l = function (e, t, r, n) {
                return new (r || (r = Promise))(function (o, i) {
                    function s(e) {
                        try {
                            l(n.next(e));
                        } catch (t) {
                            i(t);
                        }
                    }
                    function a(e) {
                        try {
                            l(n.throw(e));
                        } catch (t) {
                            i(t);
                        }
                    }
                    function l(e) {
                        var t;
                        e.done
                            ? o(e.value)
                            : ((t = e.value),
                              t instanceof r
                                  ? t
                                  : new r(function (e) {
                                        e(t);
                                    })).then(s, a);
                    }
                    l((n = n.apply(e, t || [])).next());
                });
            };
            function c(e, t) {
                return l(this, void 0, void 0, function* () {
                    null == t && (t = {});
                    const r = { method: t.method || "GET", headers: t.headers || {}, body: t.body || void 0 };
                    !0 !== t.skipFetchSetup && ((r.mode = "cors"), (r.cache = "no-cache"), (r.credentials = "same-origin"), (r.redirect = "follow"), (r.referrer = "client"));
                    const n = yield fetch(e, r),
                        i = yield n.arrayBuffer(),
                        s = {};
                    return (
                        n.headers.forEach
                            ? n.headers.forEach((e, t) => {
                                  s[t.toLowerCase()] = e;
                              })
                            : n.headers.keys().forEach((e) => {
                                  s[e.toLowerCase()] = n.headers.get(e);
                              }),
                        { headers: s, statusCode: n.status, statusMessage: n.statusText, body: (0, o.arrayify)(new Uint8Array(i)) }
                    );
                });
            }
            var u = function (e, t, r, n) {
                return new (r || (r = Promise))(function (o, i) {
                    function s(e) {
                        try {
                            l(n.next(e));
                        } catch (t) {
                            i(t);
                        }
                    }
                    function a(e) {
                        try {
                            l(n.throw(e));
                        } catch (t) {
                            i(t);
                        }
                    }
                    function l(e) {
                        var t;
                        e.done
                            ? o(e.value)
                            : ((t = e.value),
                              t instanceof r
                                  ? t
                                  : new r(function (e) {
                                        e(t);
                                    })).then(s, a);
                    }
                    l((n = n.apply(e, t || [])).next());
                });
            };
            const h = new a.Logger("web/5.6.1");
            function d(e) {
                return new Promise((t) => {
                    setTimeout(t, e);
                });
            }
            function f(e, t) {
                if (null == e) return null;
                if ("string" === typeof e) return e;
                if ((0, o.isBytesLike)(e)) {
                    if (t && ("text" === t.split("/")[0] || "application/json" === t.split(";")[0].trim()))
                        try {
                            return (0, s.ZN)(e);
                        } catch (r) {}
                    return (0, o.hexlify)(e);
                }
                return e;
            }
            function g(e, t, r) {
                const o = "object" === typeof e && null != e.throttleLimit ? e.throttleLimit : 12;
                h.assertArgument(o > 0 && o % 1 === 0, "invalid connection throttle limit", "connection.throttleLimit", o);
                const i = "object" === typeof e ? e.throttleCallback : null,
                    l = "object" === typeof e && "number" === typeof e.throttleSlotInterval ? e.throttleSlotInterval : 100;
                h.assertArgument(l > 0 && l % 1 === 0, "invalid connection throttle slot interval", "connection.throttleSlotInterval", l);
                const g = "object" === typeof e && !!e.errorPassThrough,
                    m = {};
                let p = null;
                const y = { method: "GET" };
                let v = !1,
                    b = 12e4;
                if ("string" === typeof e) p = e;
                else if ("object" === typeof e) {
                    if (((null != e && null != e.url) || h.throwArgumentError("missing URL", "connection.url", e), (p = e.url), "number" === typeof e.timeout && e.timeout > 0 && (b = e.timeout), e.headers))
                        for (const t in e.headers) (m[t.toLowerCase()] = { key: t, value: String(e.headers[t]) }), ["if-none-match", "if-modified-since"].indexOf(t.toLowerCase()) >= 0 && (v = !0);
                    if (((y.allowGzip = !!e.allowGzip), null != e.user && null != e.password)) {
                        "https:" !== p.substring(0, 6) &&
                            !0 !== e.allowInsecureAuthentication &&
                            h.throwError("basic authentication requires a secure https url", a.Logger.errors.INVALID_ARGUMENT, { argument: "url", url: p, user: e.user, password: "[REDACTED]" });
                        const t = e.user + ":" + e.password;
                        m.authorization = { key: "Authorization", value: "Basic " + (0, n.c)((0, s.Y0)(t)) };
                    }
                    null != e.skipFetchSetup && (y.skipFetchSetup = !!e.skipFetchSetup);
                }
                const w = new RegExp("^data:([a-z0-9-]+/[a-z0-9-]+);base64,(.*)$", "i"),
                    E = p ? p.match(w) : null;
                if (E)
                    try {
                        const e = { statusCode: 200, statusMessage: "OK", headers: { "content-type": E[1] }, body: (0, n.J)(E[2]) };
                        let t = e.body;
                        return r && (t = r(e.body, e)), Promise.resolve(t);
                    } catch (N) {
                        h.throwError("processing response error", a.Logger.errors.SERVER_ERROR, { body: f(E[1], E[2]), error: N, requestBody: null, requestMethod: "GET", url: p });
                    }
                t &&
                    ((y.method = "POST"),
                    (y.body = t),
                    null == m["content-type"] && (m["content-type"] = { key: "Content-Type", value: "application/octet-stream" }),
                    null == m["content-length"] && (m["content-length"] = { key: "Content-Length", value: String(t.length) }));
                const _ = {};
                Object.keys(m).forEach((e) => {
                    const t = m[e];
                    _[t.key] = t.value;
                }),
                    (y.headers = _);
                const k = (function () {
                        let e = null;
                        return {
                            promise: new Promise(function (t, r) {
                                b &&
                                    (e = setTimeout(() => {
                                        null != e && ((e = null), r(h.makeError("timeout", a.Logger.errors.TIMEOUT, { requestBody: f(y.body, _["content-type"]), requestMethod: y.method, timeout: b, url: p })));
                                    }, b));
                            }),
                            cancel: function () {
                                null != e && (clearTimeout(e), (e = null));
                            },
                        };
                    })(),
                    P = (function () {
                        return u(this, void 0, void 0, function* () {
                            for (let e = 0; e < o; e++) {
                                let t = null;
                                try {
                                    if (((t = yield c(p, y)), e < o))
                                        if (301 === t.statusCode || 302 === t.statusCode) {
                                            const e = t.headers.location || "";
                                            if ("GET" === y.method && e.match(/^https:/)) {
                                                p = t.headers.location;
                                                continue;
                                            }
                                        } else if (429 === t.statusCode) {
                                            let r = !0;
                                            if ((i && (r = yield i(e, p)), r)) {
                                                let r = 0;
                                                const n = t.headers["retry-after"];
                                                (r = "string" === typeof n && n.match(/^[1-9][0-9]*$/) ? 1e3 * parseInt(n) : l * parseInt(String(Math.random() * Math.pow(2, e)))), yield d(r);
                                                continue;
                                            }
                                        }
                                } catch (N) {
                                    (t = N.response), null == t && (k.cancel(), h.throwError("missing response", a.Logger.errors.SERVER_ERROR, { requestBody: f(y.body, _["content-type"]), requestMethod: y.method, serverError: N, url: p }));
                                }
                                let n = t.body;
                                if (
                                    (v && 304 === t.statusCode
                                        ? (n = null)
                                        : !g &&
                                          (t.statusCode < 200 || t.statusCode >= 300) &&
                                          (k.cancel(),
                                          h.throwError("bad response", a.Logger.errors.SERVER_ERROR, {
                                              status: t.statusCode,
                                              headers: t.headers,
                                              body: f(n, t.headers ? t.headers["content-type"] : null),
                                              requestBody: f(y.body, _["content-type"]),
                                              requestMethod: y.method,
                                              url: p,
                                          })),
                                    r)
                                )
                                    try {
                                        const e = yield r(n, t);
                                        return k.cancel(), e;
                                    } catch (N) {
                                        if (N.throttleRetry && e < o) {
                                            let t = !0;
                                            if ((i && (t = yield i(e, p)), t)) {
                                                const t = l * parseInt(String(Math.random() * Math.pow(2, e)));
                                                yield d(t);
                                                continue;
                                            }
                                        }
                                        k.cancel(),
                                            h.throwError("processing response error", a.Logger.errors.SERVER_ERROR, {
                                                body: f(n, t.headers ? t.headers["content-type"] : null),
                                                error: N,
                                                requestBody: f(y.body, _["content-type"]),
                                                requestMethod: y.method,
                                                url: p,
                                            });
                                    }
                                return k.cancel(), n;
                            }
                            return h.throwError("failed response", a.Logger.errors.SERVER_ERROR, { requestBody: f(y.body, _["content-type"]), requestMethod: y.method, url: p });
                        });
                    })();
                return Promise.race([k.promise, P]);
            }
            function m(e, t, r) {
                let n = null;
                if (null != t) {
                    n = (0, s.Y0)(t);
                    const r = "string" === typeof e ? { url: e } : (0, i.shallowCopy)(e);
                    if (r.headers) {
                        0 !== Object.keys(r.headers).filter((e) => "content-type" === e.toLowerCase()).length || ((r.headers = (0, i.shallowCopy)(r.headers)), (r.headers["content-type"] = "application/json"));
                    } else r.headers = { "content-type": "application/json" };
                    e = r;
                }
                return g(e, n, (e, t) => {
                    let n = null;
                    if (null != e)
                        try {
                            n = JSON.parse((0, s.ZN)(e));
                        } catch (o) {
                            h.throwError("invalid JSON", a.Logger.errors.SERVER_ERROR, { body: e, error: o });
                        }
                    return r && (n = r(n, t)), n;
                });
            }
            function p(e, t) {
                return (
                    t || (t = {}),
                    null == (t = (0, i.shallowCopy)(t)).floor && (t.floor = 0),
                    null == t.ceiling && (t.ceiling = 1e4),
                    null == t.interval && (t.interval = 250),
                    new Promise(function (r, n) {
                        let o = null,
                            i = !1;
                        const s = () => !i && ((i = !0), o && clearTimeout(o), !0);
                        t.timeout &&
                            (o = setTimeout(() => {
                                s() && n(new Error("timeout"));
                            }, t.timeout));
                        const a = t.retryLimit;
                        let l = 0;
                        !(function o() {
                            return e().then(
                                function (e) {
                                    if (void 0 !== e) s() && r(e);
                                    else if (t.oncePoll) t.oncePoll.once("poll", o);
                                    else if (t.onceBlock) t.onceBlock.once("block", o);
                                    else if (!i) {
                                        if ((l++, l > a)) return void (s() && n(new Error("retry limit reached")));
                                        let e = t.interval * parseInt(String(Math.random() * Math.pow(2, l)));
                                        e < t.floor && (e = t.floor), e > t.ceiling && (e = t.ceiling), setTimeout(o, e);
                                    }
                                    return null;
                                },
                                function (e) {
                                    s() && n(e);
                                }
                            );
                        })();
                    })
                );
            }
        },
        71210: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.getDomainLocale = function (e, t, r, n) {
                    return !1;
                });
            ("function" === typeof t.default || ("object" === typeof t.default && null !== t.default)) &&
                "undefined" === typeof t.default.__esModule &&
                (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        48418: function (e, t, r) {
            "use strict";
            var n = r(94941).Z;
            r(45753).default;
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
            var o,
                i = (o = r(67294)) && o.__esModule ? o : { default: o },
                s = r(76273),
                a = r(22725),
                l = r(63462),
                c = r(21018),
                u = r(57190),
                h = r(71210),
                d = r(98684);
            var f = "undefined" !== typeof i.default.useTransition,
                g = {};
            function m(e, t, r, n) {
                if (e && s.isLocalURL(t)) {
                    e.prefetch(t, r, n).catch(function (e) {
                        0;
                    });
                    var o = n && "undefined" !== typeof n.locale ? n.locale : e && e.locale;
                    g[t + "%" + r + (o ? "%" + o : "")] = !0;
                }
            }
            var p = i.default.forwardRef(function (e, t) {
                var r,
                    o = e.href,
                    p = e.as,
                    y = e.children,
                    v = e.prefetch,
                    b = e.passHref,
                    w = e.replace,
                    E = e.shallow,
                    _ = e.scroll,
                    k = e.locale,
                    P = e.onClick,
                    N = e.onMouseEnter,
                    R = e.legacyBehavior,
                    x = void 0 === R ? !0 !== Boolean(!1) : R,
                    O = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            o = {},
                            i = Object.keys(e);
                        for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                        return o;
                    })(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "legacyBehavior"]);
                (r = y), !x || ("string" !== typeof r && "number" !== typeof r) || (r = i.default.createElement("a", null, r));
                var T = !1 !== v,
                    L = n(f ? i.default.useTransition() : [], 2)[1],
                    A = i.default.useContext(l.RouterContext),
                    C = i.default.useContext(c.AppRouterContext);
                C && (A = C);
                var B,
                    I = i.default.useMemo(
                        function () {
                            var e = n(s.resolveHref(A, o, !0), 2),
                                t = e[0],
                                r = e[1];
                            return { href: t, as: p ? s.resolveHref(A, p) : r || t };
                        },
                        [A, o, p]
                    ),
                    S = I.href,
                    F = I.as,
                    D = i.default.useRef(S),
                    U = i.default.useRef(F);
                x && (B = i.default.Children.only(r));
                var $ = x ? B && "object" === typeof B && B.ref : t,
                    G = n(u.useIntersection({ rootMargin: "200px" }), 3),
                    M = G[0],
                    H = G[1],
                    j = G[2],
                    q = i.default.useCallback(
                        function (e) {
                            (U.current === F && D.current === S) || (j(), (U.current = F), (D.current = S)), M(e), $ && ("function" === typeof $ ? $(e) : "object" === typeof $ && ($.current = e));
                        },
                        [F, $, S, j, M]
                    );
                i.default.useEffect(
                    function () {
                        var e = H && T && s.isLocalURL(S),
                            t = "undefined" !== typeof k ? k : A && A.locale,
                            r = g[S + "%" + F + (t ? "%" + t : "")];
                        e && !r && m(A, S, F, { locale: t });
                    },
                    [F, S, H, k, T, A]
                );
                var V = {
                    ref: q,
                    onClick: function (e) {
                        x || "function" !== typeof P || P(e),
                            x && B.props && "function" === typeof B.props.onClick && B.props.onClick(e),
                            e.defaultPrevented ||
                                (function (e, t, r, n, o, i, a, l, c) {
                                    if (
                                        "A" !== e.currentTarget.nodeName.toUpperCase() ||
                                        (!(function (e) {
                                            var t = e.currentTarget.target;
                                            return (t && "_self" !== t) || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || (e.nativeEvent && 2 === e.nativeEvent.which);
                                        })(e) &&
                                            s.isLocalURL(r))
                                    ) {
                                        e.preventDefault();
                                        var u = function () {
                                            t[o ? "replace" : "push"](r, n, { shallow: i, locale: l, scroll: a });
                                        };
                                        c ? c(u) : u();
                                    }
                                })(e, A, S, F, w, E, _, k, C ? L : void 0);
                    },
                    onMouseEnter: function (e) {
                        x || "function" !== typeof N || N(e), x && B.props && "function" === typeof B.props.onMouseEnter && B.props.onMouseEnter(e), s.isLocalURL(S) && m(A, S, F, { priority: !0 });
                    },
                };
                if (!x || b || ("a" === B.type && !("href" in B.props))) {
                    var J = "undefined" !== typeof k ? k : A && A.locale,
                        z = A && A.isLocaleDomain && h.getDomainLocale(F, J, A.locales, A.domainLocales);
                    V.href = z || d.addBasePath(a.addLocale(F, J, A && A.defaultLocale));
                }
                return x ? i.default.cloneElement(B, V) : i.default.createElement("a", Object.assign({}, O, V), r);
            });
            (t.default = p),
                ("function" === typeof t.default || ("object" === typeof t.default && null !== t.default)) &&
                    "undefined" === typeof t.default.__esModule &&
                    (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        57190: function (e, t, r) {
            "use strict";
            var n = r(94941).Z;
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.useIntersection = function (e) {
                    var t = e.rootRef,
                        r = e.rootMargin,
                        c = e.disabled || !s,
                        u = o.useRef(),
                        h = n(o.useState(!1), 2),
                        d = h[0],
                        f = h[1],
                        g = n(o.useState(null), 2),
                        m = g[0],
                        p = g[1];
                    o.useEffect(
                        function () {
                            if (s) {
                                if ((u.current && (u.current(), (u.current = void 0)), c || d)) return;
                                return (
                                    m &&
                                        m.tagName &&
                                        (u.current = (function (e, t, r) {
                                            var n = (function (e) {
                                                    var t,
                                                        r = { root: e.root || null, margin: e.rootMargin || "" },
                                                        n = l.find(function (e) {
                                                            return e.root === r.root && e.margin === r.margin;
                                                        });
                                                    if (n && (t = a.get(n))) return t;
                                                    var o = new Map(),
                                                        i = new IntersectionObserver(function (e) {
                                                            e.forEach(function (e) {
                                                                var t = o.get(e.target),
                                                                    r = e.isIntersecting || e.intersectionRatio > 0;
                                                                t && r && t(r);
                                                            });
                                                        }, e);
                                                    return (t = { id: r, observer: i, elements: o }), l.push(r), a.set(r, t), t;
                                                })(r),
                                                o = n.id,
                                                i = n.observer,
                                                s = n.elements;
                                            return (
                                                s.set(e, t),
                                                i.observe(e),
                                                function () {
                                                    if ((s.delete(e), i.unobserve(e), 0 === s.size)) {
                                                        i.disconnect(), a.delete(o);
                                                        var t = l.findIndex(function (e) {
                                                            return e.root === o.root && e.margin === o.margin;
                                                        });
                                                        t > -1 && l.splice(t, 1);
                                                    }
                                                }
                                            );
                                        })(
                                            m,
                                            function (e) {
                                                return e && f(e);
                                            },
                                            { root: null == t ? void 0 : t.current, rootMargin: r }
                                        )),
                                    function () {
                                        null == u.current || u.current(), (u.current = void 0);
                                    }
                                );
                            }
                            if (!d) {
                                var e = i.requestIdleCallback(function () {
                                    return f(!0);
                                });
                                return function () {
                                    return i.cancelIdleCallback(e);
                                };
                            }
                        },
                        [m, c, r, t, d]
                    );
                    var y = o.useCallback(function () {
                        f(!1);
                    }, []);
                    return [p, d, y];
                });
            var o = r(67294),
                i = r(9311),
                s = "function" === typeof IntersectionObserver;
            var a = new Map(),
                l = [];
            ("function" === typeof t.default || ("object" === typeof t.default && null !== t.default)) &&
                "undefined" === typeof t.default.__esModule &&
                (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        21018: function (e, t, r) {
            "use strict";
            var n;
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.AppRouterContext = void 0);
            var o = ((n = r(67294)) && n.__esModule ? n : { default: n }).default.createContext(null);
            t.AppRouterContext = o;
        },
        9008: function (e, t, r) {
            e.exports = r(5443);
        },
        41664: function (e, t, r) {
            e.exports = r(48418);
        },
        11163: function (e, t, r) {
            e.exports = r(90387);
        },
        47568: function (e, t, r) {
            "use strict";
            function n(e, t, r, n, o, i, s) {
                try {
                    var a = e[i](s),
                        l = a.value;
                } catch (c) {
                    return void r(c);
                }
                a.done ? t(l) : Promise.resolve(l).then(n, o);
            }
            function o(e) {
                return function () {
                    var t = this,
                        r = arguments;
                    return new Promise(function (o, i) {
                        var s = e.apply(t, r);
                        function a(e) {
                            n(s, o, i, a, l, "next", e);
                        }
                        function l(e) {
                            n(s, o, i, a, l, "throw", e);
                        }
                        a(void 0);
                    });
                };
            }
            r.d(t, {
                Z: function () {
                    return o;
                },
            });
        },
    },
]);
