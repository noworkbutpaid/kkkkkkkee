(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [343],
    {
        8806: function (e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/NFTStaking",
                function () {
                    return n(69408);
                },
            ]);
        },
        9162: function (e, t, n) {
            "use strict";
            n.d(t, {
                Z: function () {
                    return y;
                },
            });
            var a = n(85893),
                i = n(34295),
                s = (n(67294), n(41664)),
                r = n.n(s);
            function o() {
                return (0, a.jsx)("div", {
                    className: "sticky top-0 z-50 bg-black py-5",
                    children: (0, a.jsx)("header", {
                        className: " body-font",
                        children: (0, a.jsxs)("div", {
                            className: "container mx-auto flex p-1 flex-row justify-between w-full md:w-4/5 lg:w-2/3",
                            children: [
                                (0, a.jsx)(r(), {
                                    href: "#",
                                    passHref: !0,
                                    children: (0, a.jsxs)("div", {
                                        className: "w-fit justify-self-end duration-200 flex hover:cursor-pointer hover:scale-105",
                                        children: [
                                            (0, a.jsx)("img", { src: "", alt: "", className: "mx-auto h-16" }),
                                            (0, a.jsx)("img", {src: "", alt: "",  className: "mx-auto h-16 hidden md:flex" }),
                                        ],
                                    }),
                                }),
                                (0, a.jsx)("div", { className: "flex items-center space-x-2 ml-2 sm:ml-0", children: (0, a.jsx)(i.NL, { moralisAuth: !1, chainId: 56 }) }),
                            ],
                        }),
                    }),
                });
            }
            var u = n(9008),
                p = n.n(u),
                l = n(11163),
                c = n(31472);
            function d(e) {
                var t = e.pageTitle,
                    n = c._2,
                    i = (0, l.useRouter)(),
                    s = "https://diamondnpc.club" + i.asPath,
                    r = "/" === i.pathname ? "website" : "article",
                    o = t || "",
                    u = "Krampus Staking";
                return (0, a.jsxs)(p(), {
                    children: [
                        (0, a.jsx)("title", { children: "Krampus | NFT Minting Platform" }),
                        (0, a.jsx)("link", { rel: "apple-touch-icon", sizes: "180x180", href: "./images/apple-touch-icon.png" }),
                        (0, a.jsx)("link", { rel: "icon", type: "image/png", sizes: "32x32", href: "./images/favicon-32x32.png" }),
                        (0, a.jsx)("link", { rel: "icon", type: "image/png", sizes: "16x16", href: "./images/favicon-16x16.png" }),
                        (0, a.jsx)("link", { rel: "manifest", href: "./images/site.webmanifest" }),
                        (0, a.jsx)("link", { rel: "shortcut icon", href: "./images/favicon.ico" }),
                        (0, a.jsx)("meta", { name: "theme-color", content: "#0097d9" }),
                        (0, a.jsx)("meta", { name: "description", content: u }, "Krampus | NFT Minting Platform"),
                        (0, a.jsx)("meta", { property: "og:url", content: s }),
                        (0, a.jsx)("meta", { property: "og:type", content: r }),
                        (0, a.jsx)("meta", { property: "og:site_name", content: n }),
                        (0, a.jsx)("meta", { property: "og:title", content: o }),
                        (0, a.jsx)("meta", { property: "og:description", content: u }, "Krampus | NFT Minting Platform"),
                    ],
                });
            }
            function y(e) {
                var t = e.children,
                    n = e.pageTitle;
                return (0, a.jsxs)("div", { className: "text-white bg-gradient-to-t from-[#633132] to-black min-h-screen", children: [(0, a.jsx)(d, { pageTitle: n }), (0, a.jsx)(o, {}), (0, a.jsx)("main", { children: t })] });
            }
        },
        26166: function (e, t, n) {
            "use strict";
            n.d(t, {
                Z: function () {
                    return u;
                },
            });
            var a = n(85893),
                i = n(67294),
                s = n(41664),
                r = n.n(s),
                o = n(98834);
            function u() {
                var e = (0, i.useContext)(o._)[0];
                return (0, a.jsxs)("div", {
                    className: "flex flex-row text-white font-['Helvetica Neue']",
                    children: [
                        (0, a.jsx)(r(), { href: "https://www.pinksale.finance/launchpad/0x9dfd9018a75bb9B5C0A1a90024ff147BEfd5A6c1?chain=BSC", children: (0, a.jsx)("p", { className: "head-link\n          ".concat(2 === e.page ? "text-[#603031]" : "text-[#777777]", "\n        "), children: "Mint 3 Krampus NFT's To Be WhiteListed On PINKSALE!" }) }),
                    ],
                });
            }
        },
        69408: function (e, t, n) {
            "use strict";
            n.r(t),
                n.d(t, {
                    default: function () {
                        return Z;
                    },
                });
            var a = n(85893),
                i = n(9008),
                s = n.n(i),
                r = n(67294),
                o = n(98834),
                u = n(9162),
                p = n(47568),
                l = n(41799),
                c = n(34051),
                d = n.n(c),
                y = n(64146),
                m = n(85739),
                f = n(83078),
                x = n(34295),
                b = JSON.parse(
                    '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"staker","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"NftStaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"staker","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"NftUnStaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"staker","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"stakeAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fromBlock","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"toBlock","type":"uint256"}],"name":"StakePayout","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"rewardPerBlock","type":"uint256"}],"name":"StakeRewardUpdated","type":"event"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokensPerBlock","type":"uint256"}],"name":"changeTokensPerblock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"checkWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractInfo","outputs":[{"internalType":"uint256","name":"_tokensPerBlock","type":"uint256"},{"internalType":"uint256","name":"_totalStaked","type":"uint256"},{"internalType":"uint256","name":"_contractBalance","type":"uint256"},{"internalType":"uint256[]","name":"_whitelist","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"erc20Token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getCurrentStakeEarned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStakeContractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"harvestMany","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftToken","outputs":[{"internalType":"contract ERC721Enumerable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"receipt","outputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"stakedFromBlock","type":"uint256"},{"internalType":"address","name":"owner","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reclaimTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"rewardsToClaim","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"stakeNFT","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenId","type":"uint256[]"}],"name":"stakeNFTs","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakedTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"ownerTokens","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokensPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"unStakeNFT","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokensPerBlock","type":"uint256"}],"name":"updateStakingReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"earn","type":"uint256"},{"internalType":"uint256[]","name":"ownerTokens","type":"uint256[]"},{"internalType":"uint256[]","name":"stakeTime","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"whitelist","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]'
                ),
                h = n(35917),
                T = n(31472),
                v = n(84038),
                w = n(56371),
                k = n(69396),
                g = n(99534),
                N = (n(30933), n(92), n(29453)),
                j = [
                    1956,
                    434,
                    1359,
                    1276,
                    978,
                    445,
                    1981,
                    1381,
                    795,
                    48,
                    265,
                    3,
                    1278,
                    1048,
                    1678,
                    1446,
                    1754,
                    598,
                    13,
                    1267,
                    1325,
                    1352,
                    1653,
                    1442,
                    810,
                    373,
                    1459,
                    533,
                    1454,
                    905,
                    671,
                    868,
                    649,
                    1517,
                    1555,
                    863,
                    25,
                    139,
                    1043,
                    324,
                    1862,
                    1632,
                    1114,
                    1899,
                    660,
                    509,
                    214,
                    553,
                    338,
                    1208,
                    1811,
                    38,
                    1331,
                    1586,
                    612,
                    1366,
                    1477,
                    1365,
                    1080,
                    1711,
                    1763,
                    1808,
                    873,
                    80,
                    552,
                    224,
                    1113,
                    1312,
                    1720,
                    1343,
                    1028,
                    1375,
                    591,
                    1496,
                    642,
                    1669,
                    1771,
                    291,
                    1978,
                    963,
                    1849,
                    238,
                    376,
                    1460,
                    1804,
                    1435,
                    1622,
                    1141,
                    341,
                    832,
                    658,
                    1166,
                    1322,
                    1073,
                    1953,
                    1356,
                    1933,
                    1042,
                    894,
                    377,
                ],
                M = [
                    848,
                    1696,
                    841,
                    230,
                    1357,
                    1330,
                    1383,
                    1979,
                    518,
                    588,
                    892,
                    307,
                    1677,
                    540,
                    1634,
                    16,
                    455,
                    909,
                    1746,
                    1516,
                    1118,
                    886,
                    129,
                    14,
                    1044,
                    529,
                    833,
                    339,
                    1319,
                    522,
                    1488,
                    1412,
                    779,
                    1439,
                    1100,
                    1659,
                    807,
                    615,
                    1807,
                    875,
                    1745,
                    673,
                    1395,
                    776,
                    601,
                    1504,
                    1636,
                    903,
                    914,
                    1588,
                    1467,
                    1370,
                    1684,
                    1277,
                    1774,
                    618,
                    1020,
                    1818,
                    1626,
                    546,
                    1726,
                    1394,
                    1021,
                    1216,
                    175,
                    900,
                    1389,
                    418,
                    817,
                    1594,
                    490,
                    812,
                    497,
                    381,
                    1970,
                    300,
                    501,
                    1038,
                    1224,
                    655,
                    1897,
                    1102,
                    1222,
                    222,
                    1744,
                    1469,
                    1873,
                    194,
                    1957,
                    1727,
                    613,
                    675,
                    677,
                    1623,
                    1941,
                    1679,
                    440,
                    594,
                    621,
                    918,
                    582,
                    1036,
                    193,
                    750,
                    664,
                    718,
                    1505,
                    1545,
                    895,
                    694,
                    728,
                    1243,
                    1335,
                    114,
                    1914,
                    473,
                    405,
                    236,
                    1363,
                    1426,
                    736,
                    1181,
                    1520,
                    1099,
                    1688,
                    891,
                    1199,
                    1534,
                    1065,
                    379,
                    769,
                    1529,
                    1056,
                    1369,
                    360,
                    1616,
                    502,
                    820,
                    1214,
                    1857,
                    1831,
                    189,
                    1198,
                    1844,
                    994,
                    1275,
                    492,
                    809,
                    1368,
                    1824,
                    50,
                    1635,
                    1574,
                    482,
                    562,
                    1513,
                    575,
                    70,
                    906,
                    1921,
                    1773,
                    20,
                    547,
                    1250,
                    738,
                    804,
                    1388,
                    1379,
                    413,
                    1138,
                    1911,
                    846,
                    1300,
                    1858,
                    1539,
                    1814,
                    1770,
                    859,
                    999,
                    1494,
                    1289,
                    368,
                    732,
                    1486,
                    1333,
                    243,
                    783,
                    1434,
                    367,
                    136,
                    619,
                    935,
                    427,
                    777,
                    335,
                    787,
                    1908,
                    665,
                    865,
                    1532,
                ],
                S = function (e) {
                    var t = e.placeholderSrc,
                        n = e.src,
                        i = (0, g.Z)(e, ["placeholderSrc", "src"]),
                        s = (0, r.useState)(t || n),
                        o = s[0],
                        u = s[1];
                    (0, r.useEffect)(
                        function () {
                            var e = new Image();
                            (e.src = n),
                                (e.onload = function () {
                                    u(n);
                                });
                        },
                        [n]
                    );
                    var p = t && o === t ? "blur-sm animate-pulse" : "";
                    return (0, a.jsx)("div", {
                        className: "bg-amber-400 border-4 border-amber-400 rounded-3xl hover:scale-105",
                        children: (0, a.jsx)("img", (0, k.Z)((0, l.Z)({ src: o }, i), { alt: i.alt || "", className: "image ".concat(p, " w-auto h-[20ch] rounded-3xl") })),
                    });
                };
            function _(e) {
                var t = function (e, t) {
                        return Object.keys(e).reduce(function (n, a) {
                            return (n[a] = t(e[a])), n;
                        }, {});
                    },
                    n = (0, f.Nr)(),
                    i = n.isWeb3Enabled,
                    s = n.account,
                    o = n.chainId,
                    u = (0, v.gV)(o),
                    l = (0, r.useState)(),
                    c = l[0],
                    y = l[1],
                    m = (0, r.useState)(0),
                    x = m[0],
                    b = m[1],
                    h = (0, r.useState)(1),
                    T = (h[0], h[1]),
                    w = (0, r.useCallback)(
                        (0, p.Z)(
                            d().mark(function n() {
                                var a, i;
                                return d().wrap(function (n) {
                                    for (;;)
                                        switch ((n.prev = n.next)) {
                                            case 0:
                                                void 0 != e._userTokenIds &&
                                                    ((a = t(e._userTokenIds, function (e) {
                                                        return e.toNumber();
                                                    })),
                                                    console.log("tokenIds", e),
                                                    (i = 0),
                                                    a && (i = Object.keys(a).length),
                                                    b(i),
                                                    y(a)),
                                                    void 0 != e.slides && T(e.slides);
                                            case 2:
                                            case "end":
                                                return n.stop();
                                        }
                                }, n);
                            })
                        ),
                        [e, s]
                    );
                return (
                    (0, r.useEffect)(
                        function () {
                            i && u && w();
                        },
                        [i, u, s, e]
                    ),
                    (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)("div", {
                            className: "rounded-lg max-w-min mx-auto mb-4",
                            children: (0, a.jsx)(N.tq, {
                                className: "mySwiper max-w-[1360px]",
                                slidesPerView: "auto",
                                spaceBetween: 0,
                                children:
                                    c && x > 0
                                        ? Object.keys(c).map(function (t, n) {
                                              return (0,
                                              a.jsx)(N.o5, { style: { width: 175, padding: 5 }, children: (0, a.jsxs)("div", { className: "w-[20ch] font-bold", children: [(0, a.jsxs)("div", { className: "text-center mb-1 w-[20ch] mx-auto", children: [n + 1, " of ", x] }), (0, a.jsx)(S, { placeholderSrc: "/assets/placeholder.svg", src: "https://ipfs.io/ipfs/bafybeiccikk7el3qqnywk22nhtifdktn7lqohi4k2g6lygmo3or5ua54nu/".concat(c[t], ".png"), alt: "Krampus", className: "" }), (0, a.jsxs)("p", { className: "mt-4 text-center w-[20ch] mx-auto", children: ["RAT #", c[t], " ", j.includes(Number(c[t])) && "\ud83d\udd25", " ", M.includes(Number(c[t])) && "\ud83d\udc8e"] }), e._rewardsForToken && (0, a.jsxs)("p", { className: "my-1 text-center", children: ["Rewards: ", e._rewardsForToken[t]] })] }) }, n);
                                          })
                                        : (0, a.jsxs)("div", {
                                              children: [
                                                  (0, a.jsx)("div", {
                                                      className: "h-[20ch] w-[20ch] flex",
                                                      children: (0, a.jsx)("p", { className: "text-6xl rounded-full w-fit h-fit px-2 text-center mx-auto my-auto align-baseline animate-pulse border-4 border-white", children: "?" }),
                                                  }),
                                                  (0, a.jsx)("p", { children: "No Tokens Yet" }),
                                              ],
                                          }),
                            }),
                        }),
                    })
                );
            }
            var A = n(32650);
            function F(e) {
                var t = function () {
                        c && N
                            ? Ve()
                            : (function () {
                                  Je.apply(this, arguments);
                              })(),
                            k && Ye();
                    },
                    n = function () {
                        return !(B && (void 0 == J || !J.includes(Number(Y))));
                    },
                    i = function (e, t, n, a, i) {
                        j({ type: e, message: t, title: n, icon: a, position: i || "bottomR" });
                    },
                    s = function (e) {
                        i(
                            "error",
                            (function (e) {
                                var t = Object.keys(o).filter(function (t) {
                                    return e.message.includes(t);
                                });
                                return t[0] in o ? o[t[0]] : e.message;
                            })(e),
                            "Transaction Notification",
                            "xCircle"
                        );
                    },
                    o = (T.UR, T.h, T.J4, T.e_),
                    u = (0, f.Nr)(),
                    c = u.isWeb3Enabled,
                    k = u.account,
                    g = u.chainId,
                    N = (0, v.gV)(g),
                    j = (0, x.lm)(),
                    M = (0, r.useState)(!1),
                    S = M[0],
                    F = M[1],
                    I = e.poolAddress,
                    C = e.nftTokenAddress,
                    R = e.poolName,
                    B = (e.rewardSymbol, e.decimals, e.description, e.image, e.whitelist),
                    E = (0, r.useState)(),
                    Z = E[0],
                    P = E[1],
                    D = (0, r.useState)(),
                    O = D[0],
                    U = D[1],
                    z = (0, r.useState)(),
                    W = z[0],
                    L = z[1],
                    X = (0, r.useState)(),
                    J = X[0],
                    V = X[1],
                    q = (0, r.useState)("0"),
                    Y = q[0],
                    H = q[1],
                    K = (0, r.useState)("0"),
                    G = K[0],
                    Q = K[1],
                    $ = (0, r.useState)(!1),
                    ee = ($[0], $[1], (0, r.useState)()),
                    te = ee[0],
                    ne = ee[1],
                    ae = (0, r.useState)(),
                    ie = ae[0],
                    se = ae[1],
                    re = (0, r.useState)(),
                    oe = re[0],
                    ue = re[1],
                    pe = (0, r.useState)(),
                    le = pe[0],
                    ce = pe[1],
                    de = (0, r.useState)(),
                    ye = de[0],
                    me = de[1],
                    fe = (0, r.useState)(!1),
                    xe = fe[0],
                    be = fe[1],
                    he = (0, r.useState)(0),
                    Te = he[0],
                    ve = he[1],
                    we = (0, f.gA)({ abi: b, contractAddress: I, functionName: "contractInfo" }).fetch,
                    ke = (0, f.gA)({ abi: b, contractAddress: I, functionName: "userInfo", params: { account: k } }).fetch,
                    ge = (0, f.gA)({ abi: b, contractAddress: I, functionName: "stakeNFT", params: { tokenId: Y } }),
                    Ne = ge.fetch,
                    je = ge.isFetching,
                    Me = ge.isLoading;
                function Se() {
                    return (
                        (Se = (0, p.Z)(
                            d().mark(function e() {
                                return d().wrap(function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (
                                                    (e.next = 2),
                                                    Ne({
                                                        onSuccess: (function () {
                                                            var e = (0, p.Z)(
                                                                d().mark(function e(t) {
                                                                    return d().wrap(function (e) {
                                                                        for (;;)
                                                                            switch ((e.prev = e.next)) {
                                                                                case 0:
                                                                                    return (e.next = 2), Ke(t);
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
                                                            return s(e);
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
                        Se.apply(this, arguments)
                    );
                }
                var _e = (0, f.gA)({ abi: b, contractAddress: I, functionName: "unStakeNFT", params: { tokenId: G } }),
                    Ae = _e.fetch,
                    Fe = _e.isFetching,
                    Ie = _e.isLoading;
                function Ce() {
                    return (
                        (Ce = (0, p.Z)(
                            d().mark(function e() {
                                return d().wrap(function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (
                                                    (e.next = 2),
                                                    Ae({
                                                        onSuccess: (function () {
                                                            var e = (0, p.Z)(
                                                                d().mark(function e(t) {
                                                                    return d().wrap(function (e) {
                                                                        for (;;)
                                                                            switch ((e.prev = e.next)) {
                                                                                case 0:
                                                                                    return (e.next = 2), Ke(t);
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
                                                            return s(e);
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
                        Ce.apply(this, arguments)
                    );
                }
                var Re = (0, f.gA)({ abi: b, contractAddress: I, functionName: "harvest", params: { tokenId: G } }),
                    Be = Re.fetch,
                    Ee = Re.isFetching,
                    Ze = Re.isLoading;
                function Pe() {
                    return (
                        (Pe = (0, p.Z)(
                            d().mark(function e() {
                                return d().wrap(function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (
                                                    (e.next = 2),
                                                    Be({
                                                        onSuccess: (function () {
                                                            var e = (0, p.Z)(
                                                                d().mark(function e(t) {
                                                                    return d().wrap(function (e) {
                                                                        for (;;)
                                                                            switch ((e.prev = e.next)) {
                                                                                case 0:
                                                                                    return (e.next = 2), Ke(t);
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
                                                            return s(e);
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
                        Pe.apply(this, arguments)
                    );
                }
                var De = (0, f.gA)({ abi: h, contractAddress: C, functionName: "setApprovalForAll", params: { operator: I, approved: !0 } }),
                    Oe = De.fetch,
                    Ue = De.isFetching,
                    ze = De.isLoading;
                function We() {
                    return (
                        (We = (0, p.Z)(
                            d().mark(function e() {
                                return d().wrap(function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (
                                                    (e.next = 2),
                                                    Oe({
                                                        onSuccess: (function () {
                                                            var e = (0, p.Z)(
                                                                d().mark(function e(t) {
                                                                    return d().wrap(function (e) {
                                                                        for (;;)
                                                                            switch ((e.prev = e.next)) {
                                                                                case 0:
                                                                                    return (e.next = 2), Ke(t);
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
                                                            return s(e);
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
                        We.apply(this, arguments)
                    );
                }
                var Le = (0, f.gA)({ abi: h, contractAddress: C, functionName: "isApprovedForAll", params: { owner: k, operator: I } }).fetch,
                    Xe = (0, f.gA)({ abi: h, contractAddress: C, functionName: "getTokenIds", params: { _owner: k } }).fetch;
                function Je() {
                    return (
                        (Je = (0, p.Z)(
                            d().mark(function e() {
                                var t, n, a, i, s, r, o, u;
                                return d().wrap(function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (t = new m.r("https://bsc-dataseed.binance.org/")), (n = new y.CH(I, b, t)), (e.next = 4), n.contractInfo();
                                            case 4:
                                                (a = e.sent),
                                                    (i = a._tokensPerBlock),
                                                    (s = a._totalStaked),
                                                    (r = a._contractBalance),
                                                    (o = a._whitelist),
                                                    B &&
                                                        ((u = o.map(function (e) {
                                                            return e.toNumber();
                                                        })),
                                                        V(u)),
                                                    P((0, w.formatUnits)(i, 4)),
                                                    U(Number(s)),
                                                    L((0, w.formatUnits)(r, 4)),
                                                    console.log("InitialUIDisconnected", Z, O, W, J);
                                            case 14:
                                            case "end":
                                                return e.stop();
                                        }
                                }, e);
                            })
                        )),
                        Je.apply(this, arguments)
                    );
                }
                function Ve() {
                    return qe.apply(this, arguments);
                }
                function qe() {
                    return (
                        (qe = (0, p.Z)(
                            d().mark(function e() {
                                var t, n, a, i, s, r;
                                return d().wrap(function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (e.next = 2), we();
                                            case 2:
                                                (t = e.sent),
                                                    (n = t._tokensPerBlock),
                                                    (a = t._totalStaked),
                                                    (i = t._contractBalance),
                                                    (s = t._whitelist),
                                                    B &&
                                                        ((r = s.map(function (e) {
                                                            return e.toNumber();
                                                        })),
                                                        V(r)),
                                                    P((0, w.formatUnits)(n, 4)),
                                                    U(Number(a)),
                                                    L((0, w.formatUnits)(i, 4)),
                                                    console.log("InitialUIConnected", Z, O, J, W);
                                            case 12:
                                            case "end":
                                                return e.stop();
                                        }
                                }, e);
                            })
                        )),
                        qe.apply(this, arguments)
                    );
                }
                function Ye() {
                    return He.apply(this, arguments);
                }
                function He() {
                    return (
                        (He = (0, p.Z)(
                            d().mark(function e() {
                                var t, n, a, i, s, r, o, u;
                                return d().wrap(function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (e.next = 2), ke();
                                            case 2:
                                                return (t = e.sent), (n = t.earn), (a = t.ownerTokens), (i = t.stakeTime), (e.next = 8), Xe();
                                            case 8:
                                                return (
                                                    (s = e.sent),
                                                    (s = a.map(function (e) {
                                                        return e;
                                                    })),
                                                    (r = (0, w.formatUnits)(n, 4)),
                                                    (e.next = 13),
                                                    Le()
                                                );
                                            case 13:
                                                (o = e.sent),
                                                    (u = i.map(function (e) {
                                                        return (0, w.formatUnits)(e, 4);
                                                    })),
                                                    ne(s),
                                                    me(r),
                                                    se(s),
                                                    ue(s.length),
                                                    ce(u),
                                                    be(o),
                                                    ve({ _userTokenIds: s, _rewardsForToken: u }),
                                                    console.log("UserInfo", te, ye, ie, le, xe),
                                                    console.log("userTokenIds: ", te),
                                                    console.log("userRewards: ", ye),
                                                    console.log("userStakedTokenIds: ", ie),
                                                    console.log("userTotalStaked: ", oe),
                                                    console.log("rewardsForToken: ", le),
                                                    console.log("userApproved: ", xe);
                                            case 30:
                                            case "end":
                                                return e.stop();
                                        }
                                }, e);
                            })
                        )),
                        He.apply(this, arguments)
                    );
                }
                function Ke(e) {
                    return Ge.apply(this, arguments);
                }
                function Ge() {
                    return (Ge = (0, p.Z)(
                        d().mark(function e(t) {
                            return d().wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (e.next = 2), t.wait(1);
                                        case 2:
                                            Ve(), k && Ye(), i("success", "Success!", "Transaction Notification", "checkmark");
                                        case 5:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    )).apply(this, arguments);
                }
                return (
                    (0, r.useEffect)(
                        function () {
                            B && n();
                        },
                        [Y]
                    ),
                    (0, r.useEffect)(
                        function () {
                            t();
                        },
                        [k, c, N]
                    ),
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsxs)("div", {
                                className: "app-body w-[65ch] max-w-[95vw]",
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: "flex",
                                        children: [
                                            (0, a.jsx)("div", { className: "text-2xl mb-3", children: R }),
                                            B &&
                                                (0, a.jsx)("div", {
                                                    className: "w-fit h-8 ml-auto",
                                                    children: (0, a.jsx)("button", {
                                                        className: "dapp-btn py-1 px-2 m-1 rounded font-bold text-lg",
                                                        type: "button",
                                                        onClick: function () {
                                                            return F(!0);
                                                        },
                                                        children: "Token List",
                                                    }),
                                                }),
                                        ],
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: "flex",
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: "w-5/12 p-2 border-2 rounded-lg m-1 min-w-20",
                                                children: [(0, a.jsx)("div", { className: "", children: "Daily Rewards" }), (0, a.jsxs)("div", { className: "", children: [(28800 * Number(Z)).toFixed(0), " WENTXT"] })],
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: "w-3/12 p-2 border-2 rounded-lg m-1 min-w-20",
                                                children: [(0, a.jsx)("div", { className: "", children: "Total Staked" }), (0, a.jsxs)("div", { className: "", children: [O, " RATS"] })],
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: "w-4/12 p-2 border-2 rounded-lg m-1 min-w-20",
                                                children: [(0, a.jsx)("div", { className: "", children: "Contract Balance" }), (0, a.jsxs)("div", { className: "", children: [W, " WENTXT"] })],
                                            }),
                                        ],
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: "flex flex-wrap md:flex-nowrap",
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: "w-fit p-3 border-2 rounded-lg m-1 flex-auto",
                                                children: [
                                                    (0, a.jsx)("div", { children: "RAT to Stake:" }),
                                                    (0, a.jsx)(A.Z, {
                                                        pattern: "[0-9]*",
                                                        onChange: function (e) {
                                                            return H(function (t) {
                                                                return e.target.validity.valid ? e.target.value : t;
                                                            });
                                                        },
                                                        value: Y,
                                                        placeholder: "Insert Token ID",
                                                        className: "bg-[#1b3a5e] border-1 rounded-xl text-[#a7b3c1]",
                                                    }),
                                                    (0, a.jsx)("div", {
                                                        className: "w-fit mx-auto h-8",
                                                        children: xe
                                                            ? (0, a.jsx)(a.Fragment, {
                                                                  children:
                                                                      je || Me
                                                                          ? (0, a.jsx)("button", { type: "button", className: "dapp-spin", disabled: !0, children: (0, a.jsx)(x.gb, { size: 16, spinnerColor: "rgb(251 191 36)" }) })
                                                                          : (0, a.jsx)("button", {
                                                                                type: "button",
                                                                                className: "font-bold py-2 px-4 my-1 rounded ".concat(c && N && n() ? "dapp-btn" : "bg-gray-700 cursor-not-allowed text-white", " "),
                                                                                disabled: !c || !N || !n(),
                                                                                onClick: function () {
                                                                                    return Se.apply(this, arguments);
                                                                                },
                                                                                children: "Stake",
                                                                            }),
                                                              })
                                                            : (0, a.jsx)(a.Fragment, {
                                                                  children:
                                                                      Ue || ze
                                                                          ? (0, a.jsx)("button", { type: "button", className: "dapp-spin", disabled: !0, children: (0, a.jsx)(x.gb, { size: 16, spinnerColor: "rgb(251 191 36)" }) })
                                                                          : (0, a.jsx)("button", {
                                                                                type: "button",
                                                                                className: "font-bold py-2 px-4 my-1 rounded ".concat(c && N ? "dapp-btn" : "bg-gray-700 cursor-not-allowed text-white"),
                                                                                disabled: !c || !N,
                                                                                onClick: function () {
                                                                                    return We.apply(this, arguments);
                                                                                },
                                                                                children: "Approve",
                                                                            }),
                                                              }),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: "w-fit p-3 border-2 rounded-lg m-1 flex-auto",
                                                children: [
                                                    (0, a.jsx)("div", { children: "Staked RATs:" }),
                                                    (0, a.jsx)(A.Z, {
                                                        pattern: "[0-9]*",
                                                        onChange: function (e) {
                                                            return Q(function (t) {
                                                                return e.target.validity.valid ? e.target.value : t;
                                                            });
                                                        },
                                                        value: G,
                                                        placeholder: "Insert Token ID",
                                                        className: "bg-[#1b3a5e] border rounded-xl text-[#a7b3c1]",
                                                    }),
                                                    (0, a.jsxs)("div", {
                                                        className: "flex justify-between h-10",
                                                        children: [
                                                            (0, a.jsx)("div", {
                                                                children: (0, a.jsx)(a.Fragment, {
                                                                    children:
                                                                        Fe || Ie
                                                                            ? (0, a.jsx)("button", { type: "button", className: "dapp-spin", disabled: !0, children: (0, a.jsx)(x.gb, { size: 16, spinnerColor: "rgb(251 191 36)" }) })
                                                                            : (0, a.jsx)("button", {
                                                                                  type: "button",
                                                                                  className: "font-bold py-1 px-2 mt-2 rounded ".concat(c && N ? "dapp-btn" : "bg-gray-700 cursor-not-allowed text-white"),
                                                                                  disabled: !c || !N,
                                                                                  onClick: function () {
                                                                                      return Ce.apply(this, arguments);
                                                                                  },
                                                                                  children: "Unstake",
                                                                              }),
                                                                }),
                                                            }),
                                                            (0, a.jsx)("div", {
                                                                children: (0, a.jsx)(a.Fragment, {
                                                                    children:
                                                                        Ee || Ze
                                                                            ? (0, a.jsx)("button", { type: "button", className: "dapp-spin", disabled: !0, children: (0, a.jsx)(x.gb, { size: 16, spinnerColor: "rgb(251 191 36)" }) })
                                                                            : (0, a.jsx)("button", {
                                                                                  type: "button",
                                                                                  className: "font-bold py-1 px-2 mt-2 rounded ".concat(c && N ? "dapp-btn" : "bg-gray-700 cursor-not-allowed text-white"),
                                                                                  disabled: !c || !N,
                                                                                  onClick: function () {
                                                                                      return Pe.apply(this, arguments);
                                                                                  },
                                                                                  children: "Harvest",
                                                                              }),
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: "flex w-full",
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: "w-2/5 p-2 border-2 rounded-lg m-1",
                                                children: [(0, a.jsx)("div", { className: "", children: "Your Staked Tokens" }), (0, a.jsxs)("div", { className: "", children: [oe, " RATS"] })],
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: "w-3/5 p-2 border-2 rounded-lg m-1",
                                                children: [(0, a.jsx)("div", { className: "", children: "Your Pending Rewards" }), (0, a.jsxs)("div", { className: "", children: [ye, " WENTXT"] })],
                                            }),
                                        ],
                                    }),
                                    0 != Te &&
                                        (0, a.jsxs)("div", {
                                            children: [(0, a.jsx)("div", { className: "text-2xl mt-2", children: "You Staked:" }), (0, a.jsx)("div", { className: "w-[170px] mx-auto", children: (0, a.jsx)(_, (0, l.Z)({}, Te)) })],
                                        }),
                                    !c && (0, a.jsx)("div", { className: "text-red-500 text-center mt-4", children: "Not connected to your wallet!" }),
                                    c && !N && (0, a.jsx)("div", { className: "text-red-500 text-center mt-4", children: "Switch to BSC" }),
                                ],
                            }),
                            S
                                ? (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          (0, a.jsx)("div", {
                                              className: "justify-center items-center flex overflow-x-hidden overflow-y-scroll fixed inset-0 m-2 z-50 outline-none focus:outline-none",
                                              children: (0, a.jsx)("div", {
                                                  className: "relative w-auto my-6 mx-auto max-w-[95vw] max-h-[95vh]",
                                                  children: (0, a.jsxs)("div", {
                                                      className: "app-body bg-opacity-100",
                                                      children: [
                                                          (0, a.jsxs)("div", {
                                                              className: "flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t",
                                                              children: [
                                                                  (0, a.jsx)("h3", { className: "text-3xl font-semibold text-slate-200", children: "Token List" }),
                                                                  (0, a.jsx)("button", {
                                                                      className: "p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
                                                                      onClick: function () {
                                                                          return F(!1);
                                                                      },
                                                                      children: (0, a.jsx)("span", { className: "bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none", children: "\xd7" }),
                                                                  }),
                                                              ],
                                                          }),
                                                          (0, a.jsx)("div", {
                                                              className: "relative p-6 flex-auto",
                                                              children: (0, a.jsx)("p", {
                                                                  className: "my-4 text-slate-100 text-lg leading-relaxed flex flex-wrap",
                                                                  children:
                                                                      J &&
                                                                      (0, a.jsx)(a.Fragment, {
                                                                          children: J.map(function (e) {
                                                                              return (0, a.jsxs)("div", { className: "mx-1", children: ["RAT #", e, " -"] }, e ? Number(e) : 0);
                                                                          }),
                                                                      }),
                                                              }),
                                                          }),
                                                          (0, a.jsx)("div", {
                                                              className: "flex items-center justify-end p-6 border-t h-8 border-solid border-slate-200 rounded-b",
                                                              children: (0, a.jsx)("button", {
                                                                  className: "dapp-btn mx-1 px-2 py-1 text-xl uppercase font-bold rounded",
                                                                  type: "button",
                                                                  onClick: function () {
                                                                      return F(!1);
                                                                  },
                                                                  children: "Close",
                                                              }),
                                                          }),
                                                      ],
                                                  }),
                                              }),
                                          }),
                                          (0, a.jsx)("div", { className: "opacity-25 fixed inset-0 z-40 bg-black" }),
                                      ],
                                  })
                                : null,
                        ],
                    })
                );
            }
            function I() {
                var e = function () {
                        i &&
                            (function () {
                                m.apply(this, arguments);
                            })();
                    },
                    t = (T.UR, T.h, T.J4, T.e_, (0, f.Nr)()),
                    n = t.isWeb3Enabled,
                    i = t.account,
                    s = (t.chainId, (0, r.useState)()),
                    o = (s[0], s[1], (0, r.useState)(0)),
                    u = o[0],
                    c = o[1],
                    y = (0, f.gA)({ abi: h, contractAddress: C.nftTokenAddress, functionName: "getTokenIds", params: { _owner: i } }).fetch;
                function m() {
                    return (m = (0, p.Z)(
                        d().mark(function e() {
                            var t;
                            return d().wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (e.next = 2), y();
                                        case 2:
                                            (t = (t = e.sent).map(function (e) {
                                                return e;
                                            })),
                                                c({ _userTokenIds: t });
                                        case 6:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    )).apply(this, arguments);
                }
                return (
                    (0, r.useEffect)(
                        function () {
                            e();
                        },
                        [i, n]
                    ),
                    (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsxs)("div", { className: "flex h-fit flex-wrap justify-center", children: [(0, a.jsx)(F, (0, l.Z)({}, C)), (0, a.jsx)(F, (0, l.Z)({}, R)), (0, a.jsx)(F, (0, l.Z)({}, B))] }),
                            u &&
                                (0, a.jsxs)("div", {
                                    className: "app-body mx-auto",
                                    children: [(0, a.jsx)("div", { className: "text-lg font-bold text-center mb-2", children: "NFTs in your Wallet:" }), (0, a.jsx)("div", { className: "", children: (0, a.jsx)(_, (0, l.Z)({}, u)) })],
                                }),
                        ],
                    })
                );
            }
            var C = {
                    nftTokenAddress: "0x84135ef38E33f5cc9c61fCb5469F173BB1261C5F",
                    poolAddress: "0x8aC71416b32625D703E917d58D636bbbABf68063",
                    poolName: "\ud83d\udd25 Rare Pool (1-100)",
                    rewardSymbol: "WENTXN",
                    decimals: 4,
                    description: "",
                    image: "/assets/mouse_ico.png",
                    whitelist: !0,
                },
                R = {
                    nftTokenAddress: "0x84135ef38E33f5cc9c61fCb5469F173BB1261C5F",
                    poolAddress: "0x99C1DA9077005A2269f92605976d7E25E7B0f305",
                    poolName: "\ud83d\udc8e Legendary Pool (101 - 300)",
                    rewardSymbol: "WENTXN",
                    decimals: 4,
                    description: "",
                    image: "/assets/mouse_ico.png",
                    whitelist: !0,
                },
                B = {
                    nftTokenAddress: "0x84135ef38E33f5cc9c61fCb5469F173BB1261C5F",
                    poolAddress: "0xD5DF36F9868455269E8955FA4579969a93D3132f",
                    poolName: "Epic Pool (301+)",
                    rewardSymbol: "WENTXN",
                    decimals: 4,
                    description: "",
                    image: "/assets/mouse_ico.png",
                    whitelist: !1,
                },
                E = n(26166),
                Z = function () {
                    var e = (0, r.useContext)(o._),
                        t = (e[0], e[1]);
                    return (
                        (0, r.useEffect)(function () {
                            t({ type: "NFTSTK" });
                        }, []),
                        (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsxs)(u.Z, {
                                children: [
                                    (0, a.jsx)(s(), { children: (0, a.jsx)("title", { children: "Krampus | NFT Staking" }) }),
                                    (0, a.jsx)("div", { className: "w-full justify-center flex mt-6", children: (0, a.jsx)(E.Z, {}) }),
                                    (0, a.jsx)("div", { className: "flex flex-wrap justify-center mt-1 h-fit", children: (0, a.jsx)(I, {}) }),
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
                '{"_2":"Krampus Staking","UR":500,"h":{"allowlistSale":{"mintPrice":"0.07","maxMintAmountPerTx":"5"},"publicSale":{"mintPrice":"0.07","maxMintAmountPerTx":"5"}},"q7":{"1":[],"56":"0xe29ec5098ff277c0ae4f3f73a143652a335a03ab","56":"0xe29ec5098ff277c0ae4f3f73a143652a335a03ab"},"e_":{"MyNftCollection__InvalidMintAmount":"Action Failed!","MyNftCollection__MaxSupplyExceeded":"Action Failed!","MyNftCollection__InsufficientFunds":"Action Failed!","MyNftCollection__AllowlistSaleClosed":"Action Failed!","MyNftCollection__AddressAlreadyClaimed":"Action Failed!","MyNftCollection__InvalidProof":"Action Failed!","MyNftCollection__PublicSaleClosed":"Action Failed!","MyNftCollection__TransferFailed":"Action Failed!","MyNftCollection__NonexistentToken":"Action Failed!"},"J4":"BNB"}'
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
        e.O(0, [693, 968, 941, 562, 774, 888, 179], function () {
            return (t = 8806), e((e.s = t));
            var t;
        });
        var t = e.O();
        _N_E = t;
    },
]);
