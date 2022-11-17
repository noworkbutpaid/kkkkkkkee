(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [942],
    {
        86137: function (e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/Mint",
                function () {
                    return n(96186);
                },
            ]);
        },
        9162: function (e, t, n) {
            "use strict";
            n.d(t, {
                Z: function () {
                    return m;
                },
            });
            var a = n(85893),
                i = n(34295),
                s = (n(67294), n(41664)),
                u = n.n(s);
            function r() {
                return (0, a.jsx)("div", {
                    className: "sticky top-0 z-50 bg-black py-5",
                    children: (0, a.jsx)("header", {
                        className: " body-font",
                        children: (0, a.jsxs)("div", {
                            className: "container mx-auto flex p-1 flex-row justify-between w-full md:w-4/5 lg:w-2/3",
                            children: [
                                (0, a.jsx)(u(), {
                                    href: "#",
                                    passHref: !0,
                                    children: (0, a.jsxs)("div", {
                                        className: "w-fit justify-self-end duration-200 flex hover:cursor-pointer hover:scale-105",
                                        children: [
                                            (0, a.jsx)("img", { src: "#", alt: "", className: "mx-auto h-16" }),
                                            (0, a.jsx)("img", { src: "", alt: "", className: "mx-auto h-16 hidden md:flex" }),
                                        ],
                                    }),
                                }),
                                (0, a.jsx)("div", { className: "flex items-center space-x-2 ml-2 sm:ml-0", children: (0, a.jsx)(i.NL, { moralisAuth: !1, chainId: 56 }) }),
                            ],
                        }),
                    }),
                });
            }
            var p = n(9008),
                o = n.n(p),
                y = n(11163),
                l = n(31472);
            function d(e) {
                var t = e.pageTitle,
                    n = l._2,
                    i = (0, y.useRouter)(),
                    s = "https://diamondnpc.club" + i.asPath,
                    u = "/" === i.pathname ? "website" : "article",
                    r = t || "",
                    p = "Krampus Staking";
                return (0, a.jsxs)(o(), {
                    children: [
                        (0, a.jsx)("title", { children: "Krampus Staking" }),
                        (0, a.jsx)("link", { rel: "apple-touch-icon", sizes: "180x180", href: "./images/apple-touch-icon.png" }),
                        (0, a.jsx)("link", { rel: "icon", type: "image/png", sizes: "32x32", href: "./images/favicon-32x32.png" }),
                        (0, a.jsx)("link", { rel: "icon", type: "image/png", sizes: "16x16", href: "./images/favicon-16x16.png" }),
                        (0, a.jsx)("link", { rel: "manifest", href: "./images/site.webmanifest" }),
                        (0, a.jsx)("link", { rel: "shortcut icon", href: "./images/favicon.ico" }),
                        (0, a.jsx)("meta", { name: "theme-color", content: "#0097d9" }),
                        (0, a.jsx)("meta", { name: "description", content: p }, "description"),
                        (0, a.jsx)("meta", { property: "og:url", content: s }),
                        (0, a.jsx)("meta", { property: "og:type", content: u }),
                        (0, a.jsx)("meta", { property: "og:site_name", content: n }),
                        (0, a.jsx)("meta", { property: "og:title", content: r }),
                        (0, a.jsx)("meta", { property: "og:description", content: p }, "ogDescription"),
                    ],
                });
            }
            function m(e) {
                var t = e.children,
                    n = e.pageTitle;
                return (0, a.jsxs)("div", { className: "text-white bg-gradient-to-t from-[#633132] to-black min-h-screen", children: [(0, a.jsx)(d, { pageTitle: n }), (0, a.jsx)(r, {}), (0, a.jsx)("main", { children: t })] });
            }
        },
        26166: function (e, t, n) {
            "use strict";
            n.d(t, {
                Z: function () {
                    return p;
                },
            });
            var a = n(85893),
                i = n(67294),
                s = n(41664),
                u = n.n(s),
                r = n(98834);
            function p() {
                var e = (0, i.useContext)(r._)[0];
                return (0, a.jsxs)("div", {
                    className: "flex flex-row font-['Helvetica Neue']",
                    children: [
                        (0, a.jsx)(u(), { href: "https://www.pinksale.finance/launchpad/0x9dfd9018a75bb9B5C0A1a90024ff147BEfd5A6c1?chain=BSC", children: (0, a.jsx)("p", { className: "head-link\n          ".concat(1 === e.page ? "text-[#603031]" : "text-[#777777]", "\n        "), children: "Mint 3 Krampus NFTs To Be WhiteListed On PINKSALE!" }) }),
                    ],
                });
            }
        },
        96186: function (e, t, n) {
            "use strict";
            n.r(t),
                n.d(t, {
                    default: function () {
                        return k;
                    },
                });
            var a = n(85893),
                i = n(9008),
                s = n.n(i),
                u = n(67294),
                r = n(98834),
                p = n(9162),
                o = n(47568),
                y = n(34051),
                l = n.n(y),
                d = n(2593),
                m = n(64146),
                c = n(35553),
                f = n(85739),
                T = n(83078),
                b = n(34295),
                x = n(35917),
                h = JSON.parse(
'[{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]'                
                ),
                v = n(31472),
                w = n(84038);
            function M() {
                var e = function () {
                        g && F
                            ? (be(), Me())
                            : (function () {
                                  Te.apply(this, arguments);
                              })();
                    },
                    t = function (e, t, n, a, i) {
                        ne({ type: e, message: t, title: n, icon: a, position: i || "bottomR" });
                    },
                    n = function (e) {
                        t(
                            "error",
                            (function (e) {
                                var t = Object.keys(y).filter(function (t) {
                                    return e.message.includes(t);
                                });
                                return t[0] in y ? y[t[0]] : e.message;
                            })(e),
                            "Transaction Notification",
                            "xCircle"
                        );
                    },
                    i = function () {
                        k && te(d.O$.from(K) >= d.O$.from(C.mul($)));
                    },
                    s = v.UR,
                    r = v.h,
                    p = v.J4,
                    y = v.e_,
                    M = (0, T.Nr)(),
                    g = M.isWeb3Enabled,
                    k = M.account,
                    j = M.chainId,
                    N = "0xe29ec5098ff277c0ae4f3f73a143652a335a03ab",
                    A = "0x10ED43C718714eb63d5aA57B78B54704E256024E",
                    E = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
                    _ = "0xe9e7cea3dedca5984780bafc599bd69add087d56",
                    F = (0, w.gV)(j),
                    O = (0, u.useState)(0),
                    I = O[0],
                    S = O[1],
                    B = (0, u.useState)(d.O$.from(0)),
                    C = B[0],
                    R = B[1],
                    H = (0, u.useState)(0),
                    D = H[0],
                    q = H[1],
                    P = (0, u.useState)(0),
                    Z = P[0],
                    L = P[1],
                    U = (0, u.useState)(1),
                    $ = U[0],
                    J = U[1],
                    W = (0, u.useState)(0),
                    z = W[0],
                    V = W[1],
                    X = (0, u.useState)(d.O$.from(0)),
                    G = (X[0], X[1], (0, u.useState)(d.O$.from(0))),
                    K = G[0],
                    Q = G[1],
                    Y = (0, u.useState)(!0),
                    ee = Y[0],
                    te = Y[1],
                    ne = (0, b.lm)(),
                    ae = (0, T.gA)({ abi: x, contractAddress: N, functionName: "claimRewardsTokens" }),
                    ie = ae.fetch,
                    se = ae.isFetching,
                    ue = ae.isLoading,
                    re = (0, T.gA)({ abi: x, contractAddress: N, functionName: "getReflectionBalances", params: { _owner: k } }).fetch,
                    pe = (0, T.gA)({ abi: x, contractAddress: N, functionName: "mint", params: { _mintAmount: $ }, msgValue: c.parseEther(r.publicSale.mintPrice).mul($).toString() }),
                    oe = pe.fetch,
                    ye = pe.isFetching,
                    le = pe.isLoading,
                    de = (0, T.gA)({ abi: x, contractAddress: N, functionName: "getSaleState" }).fetch,
                    me = (0, T.gA)({ abi: x, contractAddress: N, functionName: "cost" }).fetch,
                    ce = (0, T.gA)({ abi: x, contractAddress: N, functionName: "maxMintAmount" }).fetch,
                    fe = ((0, T.gA)({ abi: h, contractAddress: A, functionName: "getAmountsOut", params: { amountIn: I, path: [E, _] } }).fetch, (0, T.gA)({ abi: x, contractAddress: N, functionName: "totalSupply" }).fetch);
                function Te() {
                    return (Te = (0, o.Z)(
                        l().mark(function e() {
                            var t, n, a, i, s;
                            return l().wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (t = new f.r("https://bsc-dataseed.binance.org/")), (n = new m.CH(N, x, t)), (e.next = 4), n.totalSupply();
                                        case 4:
                                            return (a = e.sent), (e.next = 7), n.cost();
                                        case 7:
                                            return (i = e.sent), (e.next = 10), n.maxMintAmount();
                                        case 10:
                                            (s = e.sent), R(d.O$.from(i)), q(s.toNumber()), L(a.toNumber());
                                        case 14:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    )).apply(this, arguments);
                }
                var be = (0, u.useCallback)(
                    (0, o.Z)(
                        l().mark(function e() {
                            var t, n, a;
                            return l().wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (e.next = 2), me();
                                        case 2:
                                            return (t = e.sent), (e.next = 5), ce();
                                        case 5:
                                            return (n = e.sent), (e.next = 8), fe();
                                        case 8:
                                            (a = e.sent), R(d.O$.from(t)), q(n.toNumber()), L(a.toNumber());
                                        case 12:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    ),
                    [ce, me, de, fe]
                );
                function xe(e) {
                    return he.apply(this, arguments);
                }
                function he() {
                    return (he = (0, o.Z)(
                        l().mark(function e(n) {
                            return l().wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (e.next = 2), n.wait(1);
                                        case 2:
                                            be(), t("success", "Success!", "Transaction Notification", "checkmark");
                                        case 4:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    )).apply(this, arguments);
                }
                function ve() {
                    return (
                        (ve = (0, o.Z)(
                            l().mark(function e() {
                                return l().wrap(function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (
                                                    (e.next = 2),
                                                    oe({
                                                        onSuccess: (function () {
                                                            var e = (0, o.Z)(
                                                                l().mark(function e(t) {
                                                                    return l().wrap(function (e) {
                                                                        for (;;)
                                                                            switch ((e.prev = e.next)) {
                                                                                case 0:
                                                                                    return (e.next = 2), xe(t);
                                                                                case 2:
                                                                                    return e.abrupt("return", e.sent);
                                                                                case 3:
                                                                                case "end":
                                                                                    return e.stop();
                                                                            }
                                                                    }, e);
                                                                })
                                                            );
                                                            return function (t) {
                                                                return e.apply(this, arguments);
                                                            };
                                                        })(),
                                                        onError: function (e) {
                                                            return n(e);
                                                        },
                                                    })
                                                );
                                            case 2:
                                            case "end":
                                                return e.stop();
                                        }
                                }, e);
                            })
                        )),
                        ve.apply(this, arguments)
                    );
                }
                function we() {
                    return (
                        (we = (0, o.Z)(
                            l().mark(function e() {
                                return l().wrap(function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (
                                                    (e.next = 2),
                                                    ie({
                                                        onSuccess: (function () {
                                                            var e = (0, o.Z)(
                                                                l().mark(function e(t) {
                                                                    return l().wrap(function (e) {
                                                                        for (;;)
                                                                            switch ((e.prev = e.next)) {
                                                                                case 0:
                                                                                    return (e.next = 2), xe(t);
                                                                                case 2:
                                                                                    return e.abrupt("return", e.sent);
                                                                                case 3:
                                                                                case "end":
                                                                                    return e.stop();
                                                                            }
                                                                    }, e);
                                                                })
                                                            );
                                                            return function (t) {
                                                                return e.apply(this, arguments);
                                                            };
                                                        })(),
                                                        onError: function (e) {
                                                            return n(e);
                                                        },
                                                    })
                                                );
                                            case 2:
                                            case "end":
                                                return e.stop();
                                        }
                                }, e);
                            })
                        )),
                        we.apply(this, arguments)
                    );
                }
                function Me() {
                    return ge.apply(this, arguments);
                }
                function ge() {
                    return (ge = (0, o.Z)(
                        l().mark(function e() {
                            var t;
                            return l().wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            if (!k) {
                                                e.next = 5;
                                                break;
                                            }
                                            return (e.next = 3), re();
                                        case 3:
                                            void 0 !== (t = e.sent) && S(Number(t._hex));
                                        case 5:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    )).apply(this, arguments);
                }
                function ke() {
                    return (ke = (0, o.Z)(
                        l().mark(function e() {
                            var t, n, a;
                            return l().wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (t = new f.r("https://bsc-dataseed.binance.org/")), (n = new m.CH(A, h, t)), (e.next = 4), n.getAmountsOut(I.toString(), [E, _]);
                                        case 4:
                                            (a = e.sent),
                                                k &&
                                                    (t.getBalance(k).then(function (e) {
                                                        Q(e);
                                                    }),
                                                    i()),
                                                V(Number(a[1]._hex) / Math.pow(10, 18));
                                        case 7:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    )).apply(this, arguments);
                }
                return (
                    (0, u.useEffect)(
                        function () {
                            return (
                                e(),
                                function () {
                                    R(d.O$.from(0)), q(0), L(0);
                                }
                            );
                        },
                        [F, g]
                    ),
                    (0, u.useEffect)(
                        function () {
                            Me();
                        },
                        [k]
                    ),
                    (0, u.useEffect)(
                        function () {
                            I &&
                                (function () {
                                    ke.apply(this, arguments);
                                })();
                        },
                        [I, k]
                    ),
                    (function (e, t) {
                        var n = (0, u.useRef)();
                        (0, u.useEffect)(
                            function () {
                                n.current = e;
                            },
                            [e]
                        ),
                            (0, u.useEffect)(
                                function () {
                                    if (null !== t) {
                                        var e = setInterval(function () {
                                            n.current();
                                        }, t);
                                        return function () {
                                            return clearInterval(e);
                                        };
                                    }
                                },
                                [t]
                            );
                    })(function () {
                        e();
                    }, 1e4),
                    (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsxs)("div", {
                            className: "app-body",
                            children: [
                                (0, a.jsx)("div", {
                                    className: "flex",
                                    children: (0, a.jsxs)("div", {
                                        className:
                                            "text-lg text-center mx-auto border border-[#603031a1] shadow-inner shadow-[#603031] rounded-full h-32 w-32 p-3 flex flex-col align-middle bg-gradient-to-t from-[#603031] via-[#603031a1] to-[#603031]",
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: "text-xl border-b-[3px] border-[#603031a1] mt-auto",
                                                children: [(0, a.jsx)("span", { className: "text-amber-500 text-4xl font-black", children: Z }), (0, a.jsx)("br", {})],
                                            }),
                                            (0, a.jsx)("div", { className: "text-2xl text-[#603031a1] mt-1 mb-auto", children: s }),
                                        ],
                                    }),
                                }),
                                (0, a.jsxs)("div", {
                                    className: "flex align-middle m-2 px-1 mt-2",
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: "w-fit items-center mx-auto flex",
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className: "flex flex-col justify-center items-center relative mx-auto",
                                                    children: [
                                                        (0, a.jsx)("button", {
                                                            type: "button",
                                                            className: "w-fit my-2 p-2 rounded ".concat(
                                                                $ >= D ? "bg-slate-800 cursor-default" : "bg-amber-500 shadow-black hover:bg-amber-600 shadow duration-200 hover:scale-105 active:rounded-lg active:scale-75"
                                                            ),
                                                            onClick: function () {
                                                                J(Math.min(D, $ + 1)), i();
                                                            },
                                                            children: (0, a.jsx)(b.JO, { fill: "#fff", svg: "triangleUp" }),
                                                        }),
                                                        (0, a.jsx)("button", {
                                                            type: "button",
                                                            className: "w-fit my-2 p-2 rounded ".concat(
                                                                $ <= 1 ? "bg-slate-800 cursor-default" : "bg-amber-500 shadow-black hover:bg-amber-600 shadow duration-200 hover:scale-105 active:rounded-lg active:scale-75"
                                                            ),
                                                            onClick: function () {
                                                                J(Math.max(1, $ - 1)), i();
                                                            },
                                                            children: (0, a.jsx)(b.JO, { fill: "#fff", svg: "triangleDown" }),
                                                        }),
                                                    ],
                                                }),
                                                (0, a.jsx)("p", { className: "text-3xl font-extrabold w-12 text-center justify-self-start text-white", children: $ }),
                                            ],
                                        }),
                                        (0, a.jsxs)("div", {
                                            className: "text-center text-lg my-auto mx-4",
                                            children: [(0, a.jsx)("span", { className: "text-amber-500", children: "Total Price:" }), (0, a.jsx)("br", {}), c.formatEther(C.mul($)), " ", p],
                                        }),
                                        (0, a.jsx)("div", {
                                            className: "mx-auto w-16 my-auto",
                                            children:
                                                ye || le
                                                    ? (0, a.jsx)("button", { type: "button", className: "dapp-spin", disabled: !0, children: (0, a.jsx)(b.gb, { size: 16, spinnerColor: "rgb(251 191 36)" }) })
                                                    : (0, a.jsx)("button", {
                                                          type: "button",
                                                          className: "font-bold py-2 px-4 my-1 rounded ".concat(g && F ? "dapp-btn" : "bg-gray-700 cursor-not-allowed text-white"),
                                                          disabled: !g || !F,
                                                          onClick: function () {
                                                              return ve.apply(this, arguments);
                                                          },
                                                          children: "Mint",
                                                      }),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)("div", {
                                    className: "border-t border-gray-200 mt-4 pt-2 border-opacity-20",
                                    children: (0, a.jsxs)("div", {
                                        className: "text-lg",
                                        children: [
                                            (0, a.jsx)("p", { className: "font-bold text-slate-400 mb-2 font-['Helvetica Neue']", children: "Earned:" }),
                                            (0, a.jsx)("p", { className: "font-bold text-xl text-center w-full", children: z.toFixed(2) }),
                                            (0, a.jsx)("p", { className: "font-bold text-slate-400 text-center w-full font-['Helvetica Neue']", children: "BUSD" }),
                                            (0, a.jsx)("p", { className: "font-bold text-white text-center w-full font-['Helvetica Neue']", children: "KRAMPUS NFT's GIVE YOU PASSIVE BUSD!!" }),
                                            (0, a.jsx)("p", { className: "font-bold text-white text-center w-full font-['Helvetica Neue']", children: "GET THEM BEFORE THEY ARE GONE!" }),
                                        ],
                                    }),
                                }),
                                (0, a.jsx)("div", {
                                    className: "mx-auto flex justify-center my-1 h-24 py-6 text-sm",
                                    children:
                                        se || ue
                                            ? (0, a.jsx)("button", { type: "button", className: "dapp-spin", disabled: !0, children: (0, a.jsx)(b.gb, { size: 16, spinnerColor: "rgb(251 191 36)" }) })
                                            : (0, a.jsx)("button", {
                                                  type: "button",
                                                  className: "font-bold py-2 px-4 my-1 rounded ".concat(g && F ? "dapp-btn" : "bg-gray-700 cursor-not-allowed text-white"),
                                                  disabled: !g || !F,
                                                  onClick: function () {
                                                      return we.apply(this, arguments);
                                                  },
                                                  children: "Claim",
                                              }),
                                }),
                                !g && (0, a.jsx)("div", { className: "text-red-500 text-center mt-4", children: "Not connected to your wallet!" }),
                                g && !F && (0, a.jsx)("div", { className: "text-red-500 text-center mt-4", children: "Switch to BSC" }),
                                g && F && !ee ? (0, a.jsx)("div", { className: "text-red-500 text-center mt-4", children: "Insufficient BNB Balance" }) : null,
                            ],
                        }),
                    })
                );
            }
            var g = n(26166),
                k = function () {
                    var e = (0, u.useContext)(r._),
                        t = (e[0], e[1]);
                    return (
                        (0, u.useEffect)(function () {
                            t({ type: "Mint" });
                        }, []),
                        (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsxs)(p.Z, {
                                children: [
                                    (0, a.jsx)(s(), { children: (0, a.jsx)("title", { children: "Krampus | Mint" }) }),
                                    (0, a.jsx)("div", { className: "w-full justify-center flex mt-6", children: (0, a.jsx)(g.Z, {}) }),
                                    (0, a.jsx)("div", {
                                        className: "flex flex-wrap md:flex-nowrap max-w-fit mx-auto align-middle",
                                        children: (0, a.jsx)("div", { className: "max-w-[100ch] mx-auto justify-center h-fit mt-8", children: (0, a.jsx)(M, {}) }),
                                    }),
                                ],
                            }),
                        })
                    );
                };
        },
        84038: function (e, t, n) {
            "use strict";
            n.d(t, {
                gV: function () {
                    return i;
                },
            });
            n(31472).q7;
            function a(e) {
                return parseInt(null !== e && void 0 !== e ? e : "").toString();
            }
            function i(e) {
                return "56" === a(e);
            }
        },
        31472: function (e) {
            "use strict";
            e.exports = JSON.parse(
                '{"_2":"Krampus NFT ","UR":500,"h":{"allowlistSale":{"mintPrice":"0.07","maxMintAmountPerTx":"5"},"publicSale":{"mintPrice":"0.07","maxMintAmountPerTx":"5"}},"q7":{"1":[],"56":"0xe29ec5098ff277c0ae4f3f73a143652a335a03ab","56":"0xe29ec5098ff277c0ae4f3f73a143652a335a03ab"},"e_":{"MyNftCollection__InvalidMintAmount":"Action Failed!","MyNftCollection__MaxSupplyExceeded":"Action Failed!","MyNftCollection__InsufficientFunds":"Action Failed!","MyNftCollection__AllowlistSaleClosed":"Action Failed!","MyNftCollection__AddressAlreadyClaimed":"Action Failed!","MyNftCollection__InvalidProof":"Action Failed!","MyNftCollection__PublicSaleClosed":"Action Failed!","MyNftCollection__TransferFailed":"Action Failed!","MyNftCollection__NonexistentToken":"Action Failed!"},"J4":"BNB"}'
            );
        },
        35917: function (e) {
            "use strict";
            e.exports = JSON.parse(
'[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"string","name":"baseTokenURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DexRouter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RewardToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimRewardsTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getReflectionBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getReflectionBalances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getTokenIds","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lastDividendAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"minters","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_winner","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"randomGiveaway","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reflectToOwners","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"reflectionBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"remainingIds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newDexRouter","type":"address"}],"name":"setDexRouter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newcreatorReward","type":"uint256"},{"internalType":"uint256","name":"_newmintReward","type":"uint256"}],"name":"setFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newRewardToken","type":"address"}],"name":"setRewardToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newTeamReceiver","type":"address"}],"name":"setTeamReceiver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setmaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDividend","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]'            
                );
        },
    },
    function (e) {
        e.O(0, [693, 968, 774, 888, 179], function () {
            return (t = 86137), e((e.s = t));
            var t;
        });
        var t = e.O();
        _N_E = t;
    },
]);
