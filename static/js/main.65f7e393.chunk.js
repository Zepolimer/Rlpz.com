(this["webpackJsonpportfolio-react"] =
  this["webpackJsonpportfolio-react"] || []).push([
  [0],
  {
    31: function (n, e, t) {},
    39: function (n, e, t) {
      "use strict";
      t.r(e);
      var i,
        a,
        o,
        r,
        s = t(1),
        c = t.n(s),
        d = t(13),
        l = t(21),
        b = t.n(l),
        p = (t(31), t(9)),
        j = t(2),
        u = t(3),
        m = t(14),
        h = t(0),
        x = u.a.nav(
          i ||
            (i = Object(j.a)([
              "\n  width: 100vw;\n  height: 80px;\n  background: black;\n  opacity: ",
              ";\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2;",
            ])),
          function (n) {
            return n.scrollNav ? "0.75" : "1";
          }
        ),
        g = u.a.div(
          a ||
            (a = Object(j.a)([
              "\nwidth: 90%;\nheight: 100%;\nmargin: 0 auto;\ndisplay: -webkit-box;\ndisplay: -ms-flexbox;\ndisplay: flex;\n-webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n-webkit-box-align: center;\n    -ms-flex-align: center;\n        align-items: center;",
            ]))
        ),
        f = u.a.p(
          o ||
            (o = Object(j.a)([
              "\n    font-size: 1.8rem;\n    color: white;\n    cursor: pointer;",
            ]))
        ),
        O = u.a.div(
          r ||
            (r = Object(j.a)([
              "\n    color: white;\n    cursor:pointer;\n    font-size: 1.8rem;",
            ]))
        );
      function w(n) {
        n.preventDefault(), window.scrollTo({ top: 0, behavior: "smooth" });
      }
      var k,
        v,
        y,
        z,
        C,
        S,
        P,
        L,
        A,
        B,
        I,
        E,
        M,
        R,
        q,
        T,
        H,
        F,
        D,
        J,
        _,
        Q,
        Z,
        N,
        W,
        X,
        Y,
        U,
        G,
        $,
        K,
        V,
        nn,
        en,
        tn,
        an,
        on,
        rn,
        sn,
        cn,
        dn,
        ln,
        bn,
        pn,
        jn = function (n) {
          var e = n.toggle,
            t = Object(s.useState)(!1),
            i = Object(p.a)(t, 2),
            a = i[0],
            o = i[1],
            r = function () {
              window.scrollY > 500 ? o(!0) : o(!1);
            };
          return (
            Object(s.useEffect)(function () {
              window.addEventListener("scroll", r);
            }, []),
            Object(h.jsx)(h.Fragment, {
              children: Object(h.jsx)(x, {
                scrollNav: a,
                children: Object(h.jsxs)(g, {
                  children: [
                    Object(h.jsx)(f, {
                      onClick: w,
                      children: Object(h.jsx)("img", {
                        id: "monLogo",
                        src: "./logo-rlpz.png",
                        alt: "RLPZ",
                      }),
                    }),
                    Object(h.jsx)(O, {
                      onClick: e,
                      children: Object(h.jsx)(m.a, {}),
                    }),
                  ],
                }),
              }),
            })
          );
        },
        un = u.a.aside(
          k ||
            (k = Object(j.a)([
              "\n    position: fixed;\n    z-index: 999;\n    width: 100%;\n    height: 100vh;\n    background: black;\n    display: grid;\n    grid-template-rows: 80px auto;\n    align-items: center;\n    top: 0;\n    left: 0;\n    transition: 750ms ease-in-out;\n    opacity: ",
              ";\n    top: ",
              ";\n    transform: ",
              "",
            ])),
          function (n) {
            return n.isOpen ? "100%" : "0";
          },
          function (n) {
            return n.isOpen ? "0" : "-100%";
          },
          function (n) {
            return n.isOpen ? "translateY(0)" : "translateY(-100%)";
          }
        ),
        mn = Object(u.a)(m.b)(
          v ||
            (v = Object(j.a)([
              "\n    color: white;\n    \n    &&:hover{\n        -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n        -webkit-transition: -webkit-transform 500ms ease-in-out;\n        transition: -webkit-transform 500ms ease-in-out;\n    }",
            ]))
        ),
        hn = u.a.div(
          y ||
            (y = Object(j.a)([
              "\n    width: 90%;\n    margin: 0 auto;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    height: 70px;\n    font-size: 1.8rem;\n    cursor: pointer;",
            ]))
        ),
        xn = u.a.div(
          z ||
            (z = Object(j.a)([
              "\n  height: 80vh;\n  width: auto;\n\n  background-color: black;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: auto;\n      grid-template-rows: auto;\n  -ms-grid-columns: 100%;\n      grid-template-columns: 100%;\n      justify-items: center;\n      align-items: flex-start;\n",
            ]))
        ),
        gn = u.a.a(
          C ||
            (C = Object(j.a)([
              "\n    text-decoration: none;\n    letter-spacing: 0.2rem;\n    color: transparent;\n    -webkit-text-stroke-width: 1px;\n    -webkit-text-stroke-color: white;\n    font-size: 36px;\n    font-weight: 600;\n    cursor: pointer;\n    \n    &&:hover {\n        -webkit-text-stroke-width: 2px;\n        -webkit-text-stroke-color: red;\n        border-bottom: 3px solid red;\n    }",
            ]))
        ),
        fn = function (n) {
          var e = n.isOpen,
            t = n.toggle;
          return Object(h.jsxs)(un, {
            isOpen: e,
            onClick: t,
            children: [
              Object(h.jsx)(hn, {
                onClick: t,
                children: Object(h.jsx)(mn, {}),
              }),
              Object(h.jsxs)(xn, {
                children: [
                  Object(h.jsx)(gn, {
                    href: "#about",
                    onClick: t,
                    children: "A propos",
                  }),
                  Object(h.jsx)(gn, {
                    href: "#competences",
                    onClick: t,
                    children: "Competences",
                  }),
                  Object(h.jsx)(gn, {
                    href: "#portfolio",
                    onClick: t,
                    children: "Portfolio",
                  }),
                  Object(h.jsx)(gn, {
                    href: "#contact",
                    onClick: t,
                    children: "Contact",
                  }),
                ],
              }),
            ],
          });
        },
        On = function () {
          var n = Object(s.useState)(!1),
            e = Object(p.a)(n, 2),
            t = e[0],
            i = e[1],
            a = function () {
              i(!t);
            };
          return Object(h.jsxs)(h.Fragment, {
            children: [
              Object(h.jsx)(fn, { isOpen: t, toggle: a }),
              Object(h.jsx)(jn, { toggle: a }),
            ],
          });
        },
        wn = t(5),
        kn = t(6),
        vn = t(8),
        yn = t(7),
        zn = t(25),
        Cn = t.n(zn),
        Sn = u.a.section(
          S ||
            (S = Object(j.a)([
              "\n  height: 100vh;\n  width: 90vw;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: 40% 60%;\n  align-items: center;\n  justify-content: center;\n\n    @media (min-width: 768px) {\n        grid-template-rows: auto;\n        grid-template-columns: 60% 40%;\n    }\n",
            ]))
        ),
        Pn = u.a.div(
          P ||
            (P = Object(j.a)([
              "\n  width: 100%;\n  align-self: flex-end;\n  \n  @media (min-width: 768px) {\n    align-self: center;\n  }\n",
            ]))
        ),
        Ln = u.a.div(
          L ||
            (L = Object(j.a)([
              "\n  font-size: 10vw;\n  letter-spacing: 0.2rem;\n  color: red;\n  -webkit-text-stroke-width: 1px;\n  -webkit-text-stroke-color: red;\n  margin-bottom: 20px;\n  text-shadow: 2px 2px 1px #464646;\n\n  @media(min-width: 768px) {\n    font-size: 8vw;\n  }\n",
            ]))
        ),
        An = u.a.p(
          A ||
            (A = Object(j.a)([
              "\n  text-transform: uppercase;\n  margin-bottom: 20px;\n  font-style: oblique;\n  \n    @media (min-width: 768px) { font-size: 1.8vw; }\n",
            ]))
        ),
        Bn = u.a.p(B || (B = Object(j.a)(["\n  color: black;\n"]))),
        In = u.a.a(
          I ||
            (I = Object(j.a)([
              "\n  -webkit-text-decoration: transparent;\n          text-decoration: transparent;\n  color: red;\n  border-bottom: 1px dotted red;\n",
            ]))
        ),
        En = u.a.div(
          E ||
            (E = Object(j.a)([
              "\n  align-self: flex-start;\n  justify-self: center;\n  width: 30vw;\n  -webkit-animation: float 5s ease-in-out infinite;\n          animation: float 5s ease-in-out infinite;\n\n    @media (min-width: 768px) {\n        align-self: center;\n        justify-self: flex-start;\n    }\n",
            ]))
        ),
        Mn = u.a.img(
          M ||
            (M = Object(j.a)([
              "\n  margin-top: 50px;\n  width: 30vw;\n  -webkit-animation: float 5s ease-in-out infinite;\n          animation: float 5s ease-in-out infinite;\n\n  @media (min-width: 768px) {\n    margin-top: 0px;\n    max-width: 300px;\n    margin-left: 5vw;\n  }\n",
            ]))
        ),
        Rn = (function (n) {
          Object(vn.a)(t, n);
          var e = Object(yn.a)(t);
          function t() {
            return Object(wn.a)(this, t), e.apply(this, arguments);
          }
          return (
            Object(kn.a)(t, [
              {
                key: "render",
                value: function () {
                  return Object(h.jsxs)(Sn, {
                    children: [
                      Object(h.jsxs)(Pn, {
                        children: [
                          Object(h.jsx)(Ln, {
                            children: Object(h.jsx)(Cn.a, {
                              onInit: function (n) {
                                n.typeString("<span>Remi Lpz</span>")
                                  .start()
                                  .deleteChars(3)
                                  .typeString("Lopez")
                                  .start();
                              },
                            }),
                          }),
                          Object(h.jsx)(An, {
                            children: "D\xe9veloppeur Web Junior",
                          }),
                          Object(h.jsxs)(Bn, {
                            children: [
                              "Pour d\xe9couvrir mon travail, ",
                              Object(h.jsx)(In, {
                                href: "#portfolio",
                                children: "cliquez ici",
                              }),
                              " !",
                            ],
                          }),
                        ],
                      }),
                      Object(h.jsx)(En, {
                        children: Object(h.jsx)(Mn, {
                          src: "./img/illu-remi.png",
                          alt: "Portrait",
                        }),
                      }),
                    ],
                  });
                },
              },
            ]),
            t
          );
        })(c.a.Component),
        qn = u.a.section(
          R ||
            (R = Object(j.a)([
              "\n  width: 90vw;\n  margin: 0 auto 80px auto;\n  padding-top: 100px;\n\n  @media(min-width: 768px) {\n    background-image: url(./img/illu-aboutme.png);\n    background-repeat: no-repeat;\n    background-size: 180px;\n    background-position: bottom left 5%;\n  }\n",
            ]))
        ),
        Tn = u.a.h2(
          q ||
            (q = Object(j.a)([
              "\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: 20px;\n  text-transform: uppercase;\n  color: red;\n  font-weight: 300;\n  margin: 0 0 30px 0;\n  letter-spacing: 0.25rem;\n  border-bottom: 3px solid red;\n\n  @media (min-width: 768px) {\n    margin-left: 35%; \n}\n",
            ]))
        ),
        Hn = u.a.p(
          T ||
            (T = Object(j.a)([
              "\n  letter-spacing: 0.05rem;\n  line-height: 1.5rem;\n  text-align: justify;\n  margin: 30px 0;\n\n  @media (min-width: 768px) {\n    margin-left: 35%; \n}\n",
            ]))
        ),
        Fn = (function (n) {
          Object(vn.a)(t, n);
          var e = Object(yn.a)(t);
          function t() {
            return Object(wn.a)(this, t), e.apply(this, arguments);
          }
          return (
            Object(kn.a)(t, [
              {
                key: "render",
                value: function () {
                  return Object(h.jsxs)(qn, {
                    id: "about",
                    children: [
                      Object(h.jsx)(Tn, {
                        "data-aos": "fade-up",
                        "data-aos-offset": "150",
                        "data-aos-duration": "500",
                        children: "Me, myself & I",
                      }),
                      Object(h.jsx)(Hn, {
                        "data-aos": "fade-right",
                        "data-aos-offset": "150",
                        "data-aos-duration": "500",
                        children:
                          "Avant de continuer votre d\xe9couverte du site, vous souhaitez en savoir plus \xe0 mon sujet ? Aucun doute vous \xeates au bon endroit !",
                      }),
                      Object(h.jsx)(Hn, {
                        "data-aos": "fade-left",
                        "data-aos-offset": "150",
                        "data-aos-duration": "500",
                        children:
                          "D\xe9veloppeur web rigoureux & cr\xe9atif, je suis tr\xe8s sensible au design & \xe0 l'ergonomie des applications que je d\xe9veloppe.",
                      }),
                      Object(h.jsx)(Hn, {
                        "data-aos": "fade-right",
                        "data-aos-offset": "150",
                        "data-aos-duration": "500",
                        children:
                          "Autodidacte, j'ai commenc\xe9 \xe0 me former via FreeCode Camp en d\xe9cembre 2020, puis j'ai mit en pratique mes acquis en cr\xe9ant des sites vitrines \xe0 partir de maquettes gr\xe2ce au site Frontend Mentor. Pour un Newbie, c'\xe9tait quand m\xeame un sacr\xe9 challenge !",
                      }),
                      Object(h.jsx)(Hn, {
                        "data-aos": "fade-left",
                        "data-aos-offset": "150",
                        "data-aos-duration": "500",
                        children:
                          "J'ai ensuite d\xe9cid\xe9 d'int\xe9grer une formation dans le d\xe9veloppement aupr\xe8s de l'AFPA, en mai 2021, pour obtenir un dipl\xf4me reconnu ainsi qu'une approche professionnalisante du m\xe9tier, tout en continuant mon apprentissage des diff\xe9rents langages.",
                      }),
                    ],
                  });
                },
              },
            ]),
            t
          );
        })(c.a.Component),
        Dn = u.a.section(
          H ||
            (H = Object(j.a)([
              "\n  height: auto;\n  margin-bottom: 180px;\n  padding-top: 140px;\n",
            ]))
        ),
        Jn = u.a.h2(
          F ||
            (F = Object(j.a)([
              "\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0 auto 50px auto;\n  font-size: 5vw;\n  text-transform: uppercase;\n  color: red;\n  font-weight: 300;\n  letter-spacing: 0.25rem;\n  border-bottom: 3px solid red;\n\n  @media (min-width: 768px) {\n    font-size: 20px;\n  }\n",
            ]))
        ),
        _n = u.a.div(
          D ||
            (D = Object(j.a)([
              "\n  width: 100vw;\n  padding: 100px 0;\n  white-space: nowrap;\n  overflow-x: hidden !important;\n  background-image: url(./img/illu-competences.png);\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center center;\n",
            ]))
        ),
        Qn = u.a.article(
          J ||
            (J = Object(j.a)([
              "\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-animation: infiniteText 10s linear infinite;\n          animation: infiniteText 10s linear infinite;\n  cursor: pointer;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n  margin-bottom: 20px;\n\n  &&:hover{\n    -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n  }\n  span {\n    font-size: 30px;\n    font-weight: 700;\n    text-transform: uppercase;\n    color: black;\n    margin: 0 65px 0;\n    -webkit-transition: all ease 0.5s;\n    transition: all ease 0.5s;\n\n    @media(min-width:768px) {\n      font-size: 50px;\n    }\n  }\n",
            ]))
        ),
        Zn = (function (n) {
          Object(vn.a)(t, n);
          var e = Object(yn.a)(t);
          function t() {
            return Object(wn.a)(this, t), e.apply(this, arguments);
          }
          return (
            Object(kn.a)(t, [
              {
                key: "render",
                value: function () {
                  return Object(h.jsxs)(Dn, {
                    id: "competences",
                    "data-aos": "zoom-in",
                    "data-aos-offset": "500",
                    "data-aos-duration": "500",
                    children: [
                      Object(h.jsx)(Jn, {
                        children: "Ma soif de connaissances",
                      }),
                      Object(h.jsxs)(_n, {
                        children: [
                          Object(h.jsxs)(Qn, {
                            id: "line1",
                            children: [
                              Object(h.jsx)("span", { children: "HTML" }),
                              Object(h.jsx)("span", { children: "CSS" }),
                              Object(h.jsx)("span", { children: "Bootstrap" }),
                              Object(h.jsx)("span", { children: "JavaScript" }),
                              Object(h.jsx)("span", { children: "React" }),
                              Object(h.jsx)("span", { children: "HTML" }),
                              Object(h.jsx)("span", { children: "CSS" }),
                              Object(h.jsx)("span", { children: "Bootstrap" }),
                              Object(h.jsx)("span", { children: "JavaScript" }),
                              Object(h.jsx)("span", { children: "React" }),
                              Object(h.jsx)("span", { children: "HTML" }),
                              Object(h.jsx)("span", { children: "CSS" }),
                              Object(h.jsx)("span", { children: "Bootstrap" }),
                              Object(h.jsx)("span", { children: "JavaScript" }),
                              Object(h.jsx)("span", { children: "React" }),
                            ],
                          }),
                          Object(h.jsxs)(Qn, {
                            id: "line2",
                            children: [
                              Object(h.jsx)("span", { children: "PHP" }),
                              Object(h.jsx)("span", { children: "SQL" }),
                              Object(h.jsx)("span", { children: "Symfony" }),
                              Object(h.jsx)("span", { children: "PHP" }),
                              Object(h.jsx)("span", { children: "SQL" }),
                              Object(h.jsx)("span", { children: "Symfony" }),
                              Object(h.jsx)("span", { children: "PHP" }),
                              Object(h.jsx)("span", { children: "SQL" }),
                              Object(h.jsx)("span", { children: "Symfony" }),
                            ],
                          }),
                          Object(h.jsxs)(Qn, {
                            id: "line3",
                            children: [
                              Object(h.jsx)("span", { children: "WordPress" }),
                              Object(h.jsx)("span", { children: "Adobe XD" }),
                              Object(h.jsx)("span", {
                                children: "Illustrations",
                              }),
                              Object(h.jsx)("span", { children: "Anglais" }),
                              Object(h.jsx)("span", { children: "WordPress" }),
                              Object(h.jsx)("span", { children: "Adobe XD" }),
                              Object(h.jsx)("span", {
                                children: "Illustrations",
                              }),
                              Object(h.jsx)("span", { children: "Anglais" }),
                              Object(h.jsx)("span", { children: "WordPress" }),
                              Object(h.jsx)("span", { children: "Adobe XD" }),
                              Object(h.jsx)("span", {
                                children: "Illustrations",
                              }),
                              Object(h.jsx)("span", { children: "Anglais" }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  });
                },
              },
            ]),
            t
          );
        })(c.a.Component),
        Nn = u.a.section(
          _ ||
            (_ = Object(j.a)([
              "\n  width: 100vw;\n  height: auto;\n  padding: 10vh 0 0 0;\n",
            ]))
        ),
        Wn = u.a.h2(
          Q ||
            (Q = Object(j.a)([
              "\n    padding: 5vh 0 0 0;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    font-size: 20px;\n    text-transform: uppercase;\n    color: red;\n    font-weight: 300;\n    margin: 40px 0 30px 5%;\n    letter-spacing: 0.25rem;\n    border-bottom: 3px solid red;",
            ]))
        ),
        Xn = u.a.section(
          Z ||
            (Z = Object(j.a)([
              "\n    width: 100vw;\n    height: auto;\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: 50% 50%;\n    grid-template-columns: 50% 50%;\n      \n    @media (min-width: 768px) {\n        display: -ms-grid;\n        display: grid;\n        -ms-grid-columns: 1fr 1fr 1fr;\n        grid-template-columns: 1fr 1fr 1fr;\n    }",
            ]))
        ),
        Yn = u.a.a(
          N ||
            (N = Object(j.a)([
              "\n    text-decoration: none;\n    text-align: center;\n    color: white;",
            ]))
        ),
        Un = u.a.h3(
          W ||
            (W = Object(j.a)([
              "\n    font-family: 'Raleway', sans-serif;\n    font-size: 32vw;\n    font-weight: 500;\n    \n    @media (min-width: 768px) {\n        font-size: 20vw;\n    }",
            ]))
        ),
        Gn = u.a.p(
          X ||
            (X = Object(j.a)([
              "\n    font-size: 4vw;\n    text-transform: uppercase;\n    padding-bottom: 20px;\n    \n    @media (min-width: 768px) {\n        font-size: 2vw;\n    }",
            ]))
        ),
        $n = u.a.div(
          Y ||
            (Y = Object(j.a)([
              "\n  background-color: black;\n  color: white;\n\n  &&:hover {\n  background-color: transparent;\n  -webkit-transition: all ease 0.3s;\n  transition: all ease 0.3s;\n  background-image: url(./templates/Calculator.png);\n  background-size: cover;\n  background-position: center center;\n  }\n",
            ]))
        ),
        Kn = u.a.div(
          U ||
            (U = Object(j.a)([
              "\n  background-color: red;\n  color: black;\n\n  &&:hover {\n  background-color: transparent;\n  -webkit-transition: all ease 0.3s;\n  transition: all ease 0.3s;\n  background-image: url(./templates/Sunnyside.png);\n  background-size: cover;\n  background-position: center center;\n  }\n",
            ]))
        ),
        Vn = u.a.div(
          G ||
            (G = Object(j.a)([
              "\n  background-color: red;\n  color: black;\n\n  &&:hover {\n  background-color: transparent;\n  -webkit-transition: all ease 0.3s;\n  transition: all ease 0.3s;\n  background-image: url(./templates/desktop-design.jpg);\n  background-size: cover;\n  background-position: center center;\n  }\n\n  @media (min-width: 768px) {\n    background-color: black;\n    color: white;\n    -webkit-transition: all ease 0.3s;\n    transition: all ease 0.3s;\n  }\n",
            ]))
        ),
        ne = u.a.div(
          $ ||
            ($ = Object(j.a)([
              "\n  background-color: black;\n  color: white;\n\n  &&:hover {\n  background-color: transparent;\n  -webkit-transition: all ease 0.3s;\n  transition: all ease 0.3s;\n  background-image: url(./templates/Room-Page.png);\n  background-size: cover;\n  background-position: center center;\n  }\n\n  @media (min-width: 768px) {\n    background-color: red;\n    color: black;\n    -webkit-transition: all ease 0.3s;\n    transition: all ease 0.3s;\n  }\n",
            ]))
        ),
        ee = u.a.div(
          K ||
            (K = Object(j.a)([
              "\n  background-color: black;\n  color: white;\n\n  &&:hover {\n  background-color: transparent;\n  -webkit-transition: all ease 0.3s;\n  transition: all ease 0.3s;\n  background-image: url(./templates/crowdfunding.jpg);\n  background-size: cover;\n  background-position: center center;\n  }\n",
            ]))
        ),
        te = u.a.div(
          V ||
            (V = Object(j.a)([
              "\n  background-color: red;\n  color: black;\n\n  &&:hover {\n  background-color: transparent;\n  -webkit-transition: all ease 0.3s;\n  transition: all ease 0.3s;\n  background-image: url(./templates/Pageview.png);\n  background-size: cover;\n  background-position: center center;\n  }\n",
            ]))
        ),
        ie = (function (n) {
          Object(vn.a)(t, n);
          var e = Object(yn.a)(t);
          function t() {
            return Object(wn.a)(this, t), e.apply(this, arguments);
          }
          return (
            Object(kn.a)(t, [
              {
                key: "render",
                value: function () {
                  return Object(h.jsxs)(Nn, {
                    id: "portfolio",
                    children: [
                      Object(h.jsx)(Wn, { children: "Certains projets" }),
                      Object(h.jsxs)(Xn, {
                        children: [
                          Object(h.jsx)($n, {
                            "data-aos": "zoom-out",
                            children: Object(h.jsxs)(Yn, {
                              href: "https://zepolimer.github.io/Calculator/",
                              children: [
                                Object(h.jsx)(Un, { children: "01" }),
                                Object(h.jsx)(Gn, { children: "Calculator" }),
                              ],
                            }),
                          }),
                          Object(h.jsx)(Kn, {
                            "data-aos": "zoom-out",
                            children: Object(h.jsxs)(Yn, {
                              href:
                                "https://zepolimer.github.io/Sunnyside_React/",
                              children: [
                                Object(h.jsx)(Un, { children: "02" }),
                                Object(h.jsx)(Gn, { children: "SunnySide" }),
                              ],
                            }),
                          }),
                          Object(h.jsx)(Vn, {
                            "data-aos": "zoom-out",
                            children: Object(h.jsxs)(Yn, {
                              href: "https://zepolimer.github.io/FAQ_React/",
                              children: [
                                Object(h.jsx)(Un, { children: "03" }),
                                Object(h.jsx)(Gn, { children: "FAQ" }),
                              ],
                            }),
                          }),
                          Object(h.jsx)(ne, {
                            "data-aos": "zoom-out",
                            children: Object(h.jsxs)(Yn, {
                              href:
                                "https://zepolimer.github.io/Room_Homepage/",
                              children: [
                                Object(h.jsx)(Un, { children: "04" }),
                                Object(h.jsx)(Gn, { children: "RoomPage" }),
                              ],
                            }),
                          }),
                          Object(h.jsx)(ee, {
                            "data-aos": "zoom-out",
                            children: Object(h.jsxs)(Yn, {
                              href: "https://zepolimer.github.io/Crowfunding/",
                              children: [
                                Object(h.jsx)(Un, { children: "05" }),
                                Object(h.jsx)(Gn, { children: "Crowdfunding" }),
                              ],
                            }),
                          }),
                          Object(h.jsx)(te, {
                            "data-aos": "zoom-out",
                            children: Object(h.jsxs)(Yn, {
                              href:
                                "https://zepolimer.github.io/Princing_Toggle/",
                              children: [
                                Object(h.jsx)(Un, { children: "06" }),
                                Object(h.jsx)(Gn, { children: "Pricing" }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  });
                },
              },
            ]),
            t
          );
        })(c.a.Component),
        ae = function () {
          var n = Object(s.useState)(""),
            e = Object(p.a)(n, 2),
            t = e[0],
            i = e[1],
            a = Object(s.useState)(""),
            o = Object(p.a)(a, 2),
            r = o[0],
            c = o[1],
            d = Object(s.useState)(""),
            l = Object(p.a)(d, 2),
            b = l[0],
            j = l[1],
            u = function (n) {
              var e = document.getElementById("formMessage");
              (e.innerHTML = n),
                (e.style.display = "block"),
                document.getElementById("name").classList.add("error"),
                document.getElementById("email").classList.add("error"),
                document.getElementById("message").classList.add("error");
            },
            m = function (n, e) {
              window.emailjs
                .send("gmail", n, e)
                .then(function (n) {
                  !(function () {
                    var n = document.getElementById("formMessage");
                    (n.innerHTML =
                      "Message envoy\xe9, je vous recontacte d\xe8s que possible !"),
                      (n.style.display = "block"),
                      (n.style.borderBottom = "none"),
                      document.getElementById("name").classList.remove("error"),
                      document
                        .getElementById("email")
                        .classList.remove("error"),
                      document
                        .getElementById("message")
                        .classList.remove("error"),
                      setTimeout(function () {
                        n.style.display = "none";
                      }, 5e3);
                  })(),
                    i(""),
                    c(""),
                    j("");
                })
                .catch(function (n) {
                  u("Oups ! Une erreur s'est produite");
                });
            };
          return Object(h.jsxs)("form", {
            id: "contactForm",
            children: [
              Object(h.jsx)("input", {
                type: "text",
                id: "name",
                name: "name",
                onChange: function (n) {
                  return i(n.target.value);
                },
                placeholder: "Nom & Pr\xe9nom (obligatoire)",
                value: t,
                autoComplete: "off",
              }),
              Object(h.jsx)("input", {
                type: "mail",
                id: "email",
                name: "email",
                onChange: function (n) {
                  return c(n.target.value);
                },
                placeholder: "Adresse email (obligatoire)",
                value: r,
                autoComplete: "off",
              }),
              Object(h.jsx)("label", {
                id: "errorEmail",
                children: "Adresse email non valide",
              }),
              Object(h.jsx)("textarea", {
                id: "message",
                name: "message",
                onChange: function (n) {
                  return j(n.target.value);
                },
                placeholder:
                  "Parlez moi bri\xe8vement de votre projet (obligatoire)",
                value: b,
              }),
              Object(h.jsx)("input", {
                id: "formBtn",
                type: "button",
                value: "Collaborons",
                onClick: function (n) {
                  n.preventDefault(),
                    t &&
                    (function () {
                      var n = document.getElementById("errorEmail");
                      return r.match(
                        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
                      )
                        ? ((n.style.display = "none"), !0)
                        : ((n.style.display = "block"), !1);
                    })() &&
                    b
                      ? m("template_sgdhrsp", { name: t, email: r, message: b })
                      : u("Merci de remplir chaque champs du formulaire");
                },
              }),
              Object(h.jsx)("div", { id: "formMessage" }),
            ],
          });
        },
        oe = u.a.section(
          nn ||
            (nn = Object(j.a)([
              "\n  width: 100%;\n  padding: 18vh 5% 0 5%;\n  height: auto;\n  margin: 0 auto;\n\n  @media(min-width:768px){\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse;\n  }\n",
            ]))
        ),
        re = u.a.div(
          en ||
            (en = Object(j.a)([
              "\n  text-align: center;\n\n  @media(min-width:768px){\n    text-align: right;\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n  }\n",
            ]))
        ),
        se = u.a.img(
          tn ||
            (tn = Object(j.a)([
              "\n  width: 80%;\n  -webkit-animation: plane 2s ease infinite;\n          animation: plane 2s ease infinite;\n\n  @media(min-width:768px){\n    width: 75%;\n  }\n",
            ]))
        ),
        ce = u.a.div(
          an ||
            (an = Object(j.a)([
              "\n  width:100%;\n  @media(min-width:768px) {\n    width:auto;\n  }\n",
            ]))
        ),
        de = u.a.h2(
          on ||
            (on = Object(j.a)([
              "\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: 20px;\n  text-transform: uppercase;\n  color: red;\n  font-weight: 300;\n  margin: 40px 0 30px 0;\n  letter-spacing: 0.25rem;\n  border-bottom: 3px solid red;\n",
            ]))
        ),
        le = u.a.p(
          rn ||
            (rn = Object(j.a)([
              "\n  letter-spacing: 0.10rem;\n  line-height: 1.6rem;\n  text-align: justify;\n  margin-bottom: 50px;\n",
            ]))
        ),
        be = (function (n) {
          Object(vn.a)(t, n);
          var e = Object(yn.a)(t);
          function t() {
            return Object(wn.a)(this, t), e.apply(this, arguments);
          }
          return (
            Object(kn.a)(t, [
              {
                key: "render",
                value: function () {
                  return Object(h.jsxs)(oe, {
                    id: "contact",
                    children: [
                      Object(h.jsx)(re, {
                        "data-aos": "zoom-in-right",
                        "data-aos-offset": "200",
                        "data-aos-duration": "500",
                        children: Object(h.jsx)(se, {
                          src: "./img/illu-contact.png",
                          alt: "Contactez moi",
                        }),
                      }),
                      Object(h.jsxs)(ce, {
                        children: [
                          Object(h.jsx)(de, {
                            "data-aos": "fade-up",
                            "data-aos-offset": "200",
                            "data-aos-duration": "500",
                            children: "Un projet ?",
                          }),
                          Object(h.jsx)(le, {
                            "data-aos": "fade-right",
                            "data-aos-offset": "150",
                            "data-aos-duration": "500",
                            children:
                              "Si vous voulez me contacter, discuter \xe0 propos d'un projet ou d'une collaboration ou tout simplement me dire bonjour, remplissez ce magnifique formulaire et je vous recontacterai !",
                          }),
                          Object(h.jsx)(ae, {}),
                        ],
                      }),
                    ],
                  });
                },
              },
            ]),
            t
          );
        })(c.a.Component),
        pe = u.a.footer(
          sn || (sn = Object(j.a)(["\n    background-color: black;"]))
        ),
        je = u.a.section(
          cn ||
            (cn = Object(j.a)([
              "\n    width: 90%;\n    margin: 60px auto 0 auto;\n    \n    @media (min-width: 768px) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-pack: distribute;\n        justify-content: space-around;\n    }",
            ]))
        ),
        ue = u.a.article(
          dn ||
            (dn = Object(j.a)([
              "\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding: 15px 10px;",
            ]))
        ),
        me = u.a.img(
          ln ||
            (ln = Object(j.a)(["\n  width: 22px;\n  margin-right: 10px;\n"]))
        ),
        he = u.a.a(
          bn ||
            (bn = Object(j.a)([
              "\n  font-size: 13px;\n  -webkit-text-decoration: dotted;\n          text-decoration: dotted;\n  color: white;\n\n  &&:hover {\n  color: red;\n  border-bottom: 0.125em dotted red;\n}\n",
            ]))
        ),
        xe = u.a.p(
          pn ||
            (pn = Object(j.a)([
              "\n    font-size: 12px;\n    text-align: center;\n    color: white;\n    padding: 10px;",
            ]))
        ),
        ge = (function (n) {
          Object(vn.a)(t, n);
          var e = Object(yn.a)(t);
          function t() {
            return Object(wn.a)(this, t), e.apply(this, arguments);
          }
          return (
            Object(kn.a)(t, [
              {
                key: "render",
                value: function () {
                  return Object(h.jsxs)(pe, {
                    children: [
                      Object(h.jsxs)(je, {
                        children: [
                          Object(h.jsxs)(ue, {
                            children: [
                              Object(h.jsx)(me, {
                                src: "./icons/redphone.png",
                                alt: "mon email",
                              }),
                              Object(h.jsx)(he, {
                                href: "mailto:remilopez.pro@gmail.com",
                                children: "remilopez.dev@gmail.com",
                              }),
                            ],
                          }),
                          Object(h.jsxs)(ue, {
                            children: [
                              Object(h.jsx)(me, {
                                src: "./icons/redmail.png",
                                alt: "mon t\xe9l\xe9phone",
                              }),
                              Object(h.jsx)(he, {
                                href: "tel:+33781536846",
                                children: "(+33) 07 81 53 68 46",
                              }),
                            ],
                          }),
                          Object(h.jsxs)(ue, {
                            children: [
                              Object(h.jsx)(me, {
                                src: "./icons/redgit.png",
                                alt: "mon github",
                              }),
                              Object(h.jsx)(he, {
                                href:
                                  "https://github.com/Zepolimer?tab=repositories",
                                children: "Github",
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(h.jsx)(xe, {
                        children: "Copyright \xa9 R\xe9mi Lopez. 2021",
                      }),
                    ],
                  });
                },
              },
            ]),
            t
          );
        })(c.a.Component),
        fe = t(26),
        Oe = t.n(fe),
        we =
          (t(34),
          function () {
            return (
              Oe.a.init(),
              Object(h.jsxs)(d.a, {
                children: [
                  Object(h.jsx)(On, {}),
                  Object(h.jsx)(Rn, {}),
                  Object(h.jsx)(Fn, {}),
                  Object(h.jsx)(Zn, {}),
                  Object(h.jsx)(ie, {}),
                  Object(h.jsx)(be, {}),
                  Object(h.jsx)(ge, {}),
                ],
              })
            );
          });
      b.a.render(
        Object(h.jsx)(d.a, { children: Object(h.jsx)(we, {}) }),
        document.getElementById("root")
      );
    },
  },
  [[39, 1, 2]],
]);
//# sourceMappingURL=main.65f7e393.chunk.js.map
