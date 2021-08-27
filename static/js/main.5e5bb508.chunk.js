(this["webpackJsonpportfolio-react"] =
  this["webpackJsonpportfolio-react"] || []).push([
  [0],
  {
    31: function (e, t, n) {},
    39: function (e, t, n) {
      "use strict";
      n.r(t);
      var i,
        a,
        s,
        r,
        o = n(1),
        c = n.n(o),
        d = n(13),
        l = n(21),
        j = n.n(l),
        b = (n(31), n(9)),
        p = n(2),
        u = n(3),
        m = n(14),
        h = n(0),
        x = u.a.nav(
          i ||
            (i = Object(p.a)([
              "\n  width: 100vw;\n  height: 80px;\n  background: black;\n  opacity: ",
              ";\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2;",
            ])),
          function (e) {
            return e.scrollNav ? "0.75" : "1";
          }
        ),
        O = u.a.div(
          a ||
            (a = Object(p.a)([
              "\nwidth: 90%;\nheight: 100%;\nmargin: 0 auto;\ndisplay: -webkit-box;\ndisplay: -ms-flexbox;\ndisplay: flex;\n-webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n-webkit-box-align: center;\n    -ms-flex-align: center;\n        align-items: center;",
            ]))
        ),
        f = u.a.p(
          s ||
            (s = Object(p.a)([
              "\n    font-size: 1.8rem;\n    color: white;\n    cursor: pointer;",
            ]))
        ),
        g = u.a.div(
          r ||
            (r = Object(p.a)([
              "\n    color: white;\n    cursor:pointer;\n    font-size: 1.8rem;",
            ]))
        );
      function v(e) {
        e.preventDefault(), window.scrollTo({ top: 0, behavior: "smooth" });
      }
      var y,
        w,
        k,
        z,
        C,
        S,
        P,
        L,
        A,
        I,
        B,
        E,
        M,
        q,
        N,
        H,
        R,
        T,
        D,
        J,
        F = function (e) {
          var t = e.toggle,
            n = Object(o.useState)(!1),
            i = Object(b.a)(n, 2),
            a = i[0],
            s = i[1],
            r = function () {
              window.scrollY > 500 ? s(!0) : s(!1);
            };
          return (
            Object(o.useEffect)(function () {
              window.addEventListener("scroll", r);
            }, []),
            Object(h.jsx)(h.Fragment, {
              children: Object(h.jsx)(x, {
                scrollNav: a,
                children: Object(h.jsxs)(O, {
                  children: [
                    Object(h.jsx)(f, {
                      onClick: v,
                      children: Object(h.jsx)("img", {
                        id: "monLogo",
                        src: "././logo-rlpz.png",
                        alt: "RLPZ",
                      }),
                    }),
                    Object(h.jsx)(g, {
                      onClick: t,
                      children: Object(h.jsx)(m.a, {}),
                    }),
                  ],
                }),
              }),
            })
          );
        },
        Z = u.a.aside(
          y ||
            (y = Object(p.a)([
              "\n    position: fixed;\n    z-index: 999;\n    width: 100%;\n    height: 100vh;\n    background: black;\n    display: grid;\n    grid-template-rows: 80px auto;\n    align-items: center;\n    top: 0;\n    left: 0;\n    transition: 750ms ease-in-out;\n    opacity: ",
              ";\n    top: ",
              ";\n    transform: ",
              "",
            ])),
          function (e) {
            return e.isOpen ? "100%" : "0";
          },
          function (e) {
            return e.isOpen ? "0" : "-100%";
          },
          function (e) {
            return e.isOpen ? "translateY(0)" : "translateY(-100%)";
          }
        ),
        _ = Object(u.a)(m.b)(
          w ||
            (w = Object(p.a)([
              "\n    color: white;\n    \n    &&:hover{\n        -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n        -webkit-transition: -webkit-transform 500ms ease-in-out;\n        transition: -webkit-transform 500ms ease-in-out;\n    }",
            ]))
        ),
        Q = u.a.div(
          k ||
            (k = Object(p.a)([
              "\n    width: 90%;\n    margin: 0 auto;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    height: 70px;\n    font-size: 1.8rem;\n    cursor: pointer;",
            ]))
        ),
        W = u.a.div(
          z ||
            (z = Object(p.a)([
              "\n  height: 80vh;\n  width: auto;\n\n  background-color: black;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: auto;\n      grid-template-rows: auto;\n  -ms-grid-columns: 100%;\n      grid-template-columns: 100%;\n      justify-items: center;\n      align-items: flex-start;\n",
            ]))
        ),
        U = u.a.a(
          C ||
            (C = Object(p.a)([
              "\n    text-decoration: none;\n    letter-spacing: 0.2rem;\n    color: transparent;\n    -webkit-text-stroke-width: 1px;\n    -webkit-text-stroke-color: white;\n    font-size: 36px;\n    font-weight: 600;\n    cursor: pointer;\n    \n    &&:hover {\n        -webkit-text-stroke-width: 2px;\n        -webkit-text-stroke-color: red;\n        border-bottom: 3px solid red;\n    }",
            ]))
        ),
        X = function (e) {
          var t = e.isOpen,
            n = e.toggle;
          return Object(h.jsxs)(Z, {
            isOpen: t,
            onClick: n,
            children: [
              Object(h.jsx)(Q, { onClick: n, children: Object(h.jsx)(_, {}) }),
              Object(h.jsxs)(W, {
                children: [
                  Object(h.jsx)(U, {
                    href: "#about",
                    onClick: n,
                    children: "A propos",
                  }),
                  Object(h.jsx)(U, {
                    href: "#competences",
                    onClick: n,
                    children: "Competences",
                  }),
                  Object(h.jsx)(U, {
                    href: "#portfolio",
                    onClick: n,
                    children: "Portfolio",
                  }),
                  Object(h.jsx)(U, {
                    href: "#contact",
                    onClick: n,
                    children: "Contact",
                  }),
                ],
              }),
            ],
          });
        },
        Y = function () {
          var e = Object(o.useState)(!1),
            t = Object(b.a)(e, 2),
            n = t[0],
            i = t[1],
            a = function () {
              i(!n);
            };
          return Object(h.jsxs)(h.Fragment, {
            children: [
              Object(h.jsx)(X, { isOpen: n, toggle: a }),
              Object(h.jsx)(F, { toggle: a }),
            ],
          });
        },
        G = n(5),
        $ = n(6),
        K = n(8),
        V = n(7),
        ee = n(25),
        te = n.n(ee),
        ne = u.a.section(
          S ||
            (S = Object(p.a)([
              "\n  height: 100vh;\n  width: 90vw;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: 45% 55%;\n  align-items: center;\n  justify-content: center;\n\n    @media (min-width: 768px) {\n        grid-template-rows: auto;\n        grid-template-columns: 60% 40%;\n    }\n",
            ]))
        ),
        ie = u.a.div(
          P ||
            (P = Object(p.a)([
              "\n  width: 100%;\n  align-self: flex-end;\n  \n    @media (min-width: 768px) {\n        align-self: center;\n    }",
            ]))
        ),
        ae = u.a.p(
          L ||
            (L = Object(p.a)([
              "\n  text-transform: uppercase;\n  margin-bottom: 20px;\n  font-style: oblique;\n  \n    @media (min-width: 768px) { font-size: 1.8vw; }",
            ]))
        ),
        se = u.a.p(A || (A = Object(p.a)(["\n  color: black;"]))),
        re = u.a.a(
          I ||
            (I = Object(p.a)([
              "\n  -webkit-text-decoration: transparent;\n          text-decoration: transparent;\n  color: red;\n  border-bottom: 1px dotted red;",
            ]))
        ),
        oe = u.a.div(
          B ||
            (B = Object(p.a)([
              "\n  align-self: flex-start;\n  justify-self: center;\n  width: 30vw;\n  -webkit-animation: float 5s ease-in-out infinite;\n          animation: float 5s ease-in-out infinite;\n\n    @media (min-width: 768px) {\n        align-self: center;\n        justify-self: flex-start;\n    }",
            ]))
        ),
        ce = (function (e) {
          Object(K.a)(n, e);
          var t = Object(V.a)(n);
          function n() {
            return Object(G.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object($.a)(n, [
              {
                key: "render",
                value: function () {
                  return Object(h.jsxs)(ne, {
                    children: [
                      Object(h.jsxs)(ie, {
                        children: [
                          Object(h.jsx)("div", {
                            className: "remiLopez",
                            children: Object(h.jsx)(te.a, {
                              onInit: function (e) {
                                e.typeString("<span>Remi Lpz</span>")
                                  .start()
                                  .deleteChars(3)
                                  .typeString("Lopez")
                                  .start();
                              },
                            }),
                          }),
                          Object(h.jsx)(ae, {
                            children: "D\xe9veloppeur Web Junior",
                          }),
                          Object(h.jsxs)(se, {
                            children: [
                              "Pour d\xe9couvrir mon travail, ",
                              Object(h.jsx)(re, {
                                href: "#portfolio",
                                children: "cliquez ici",
                              }),
                              " !",
                            ],
                          }),
                        ],
                      }),
                      Object(h.jsx)(oe, {
                        children: Object(h.jsx)("img", {
                          className: "portrait",
                          src: "./img/illu-remi.png",
                          alt: "Portrait",
                        }),
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(c.a.Component),
        de = (function (e) {
          Object(K.a)(n, e);
          var t = Object(V.a)(n);
          function n() {
            return Object(G.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object($.a)(n, [
              {
                key: "render",
                value: function () {
                  return Object(h.jsxs)("section", {
                    className: "aboutme",
                    id: "about",
                    children: [
                      Object(h.jsx)("h2", {
                        "data-aos": "fade-up",
                        "data-aos-offset": "150",
                        "data-aos-duration": "500",
                        children: "Me, myself & I",
                      }),
                      Object(h.jsx)("p", {
                        "data-aos": "fade-right",
                        "data-aos-offset": "150",
                        "data-aos-duration": "500",
                        children:
                          "Avant de continuer votre d\xe9couverte du site, vous souhaitez en savoir plus \xe0 mon sujet ? Aucun doute vous \xeates au bon endroit !",
                      }),
                      Object(h.jsx)("p", {
                        "data-aos": "fade-left",
                        "data-aos-offset": "150",
                        "data-aos-duration": "500",
                        children:
                          "D\xe9veloppeur web rigoureux & cr\xe9atif, je suis tr\xe8s sensible au design & \xe0 l'ergonomie des applications que je d\xe9veloppe.",
                      }),
                      Object(h.jsx)("p", {
                        "data-aos": "fade-right",
                        "data-aos-offset": "150",
                        "data-aos-duration": "500",
                        children:
                          "Autodidacte, j'ai commenc\xe9 \xe0 me former via FreeCode Camp en d\xe9cembre 2020, puis j'ai mit en pratique mes acquis en cr\xe9ant des sites vitrines \xe0 partir de maquettes gr\xe2ce au site Frontend Mentor. Pour un Newbie, c'\xe9tait quand m\xeame un sacr\xe9 challenge !",
                      }),
                      Object(h.jsx)("p", {
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
            n
          );
        })(c.a.Component),
        le = (function (e) {
          Object(K.a)(n, e);
          var t = Object(V.a)(n);
          function n() {
            return Object(G.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object($.a)(n, [
              {
                key: "render",
                value: function () {
                  return Object(h.jsxs)("section", {
                    id: "competences",
                    "data-aos": "zoom-in",
                    "data-aos-offset": "500",
                    "data-aos-duration": "500",
                    children: [
                      Object(h.jsx)("h2", {
                        children: "Ma soif de connaissances",
                      }),
                      Object(h.jsxs)("div", {
                        id: "text",
                        children: [
                          Object(h.jsxs)("article", {
                            className: "line line1",
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
                          Object(h.jsxs)("article", {
                            className: "line line2",
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
                          Object(h.jsxs)("article", {
                            className: "line line3",
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
            n
          );
        })(c.a.Component),
        je = u.a.h2(
          E ||
            (E = Object(p.a)([
              "\n    padding: 5vh 0 0 0;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    font-size: 20px;\n    text-transform: uppercase;\n    color: red;\n    font-weight: 300;\n    margin: 40px 0 30px 5%;\n    letter-spacing: 0.25rem;\n    border-bottom: 3px solid red;",
            ]))
        ),
        be = u.a.section(
          M ||
            (M = Object(p.a)([
              "\n    width: 100vw;\n    height: auto;\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: 50% 50%;\n    grid-template-columns: 50% 50%;\n      \n    @media (min-width: 768px) {\n        display: -ms-grid;\n        display: grid;\n        -ms-grid-columns: 1fr 1fr 1fr;\n        grid-template-columns: 1fr 1fr 1fr;\n    }",
            ]))
        ),
        pe = u.a.a(
          q ||
            (q = Object(p.a)([
              "\n    text-decoration: none;\n    text-align: center;\n    color: white;",
            ]))
        ),
        ue = u.a.h3(
          N ||
            (N = Object(p.a)([
              "\n    font-family: 'Raleway', sans-serif;\n    font-size: 32vw;\n    font-weight: 500;\n    \n    @media (min-width: 768px) {\n        font-size: 20vw;\n    }",
            ]))
        ),
        me = u.a.p(
          H ||
            (H = Object(p.a)([
              "\n    font-size: 4vw;\n    text-transform: uppercase;\n    padding-bottom: 20px;\n    \n    @media (min-width: 768px) {\n        font-size: 2vw;\n    }",
            ]))
        ),
        he = (function (e) {
          Object(K.a)(n, e);
          var t = Object(V.a)(n);
          function n() {
            return Object(G.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object($.a)(n, [
              {
                key: "render",
                value: function () {
                  return Object(h.jsxs)("div", {
                    id: "portfolio",
                    children: [
                      Object(h.jsx)(je, { children: "Certains projets" }),
                      Object(h.jsxs)(be, {
                        children: [
                          Object(h.jsx)("div", {
                            id: "ProjetUn",
                            "data-aos": "zoom-out",
                            children: Object(h.jsxs)(pe, {
                              href: "https://zepolimer.github.io/Calculator/",
                              children: [
                                Object(h.jsx)(ue, { children: "01" }),
                                Object(h.jsx)(me, { children: "Calculator" }),
                              ],
                            }),
                          }),
                          Object(h.jsx)("div", {
                            id: "ProjetDeux",
                            "data-aos": "zoom-out",
                            children: Object(h.jsxs)(pe, {
                              href:
                                "https://zepolimer.github.io/Sunnyside_React/",
                              children: [
                                Object(h.jsx)(ue, { children: "02" }),
                                Object(h.jsx)(me, { children: "SunnySide" }),
                              ],
                            }),
                          }),
                          Object(h.jsx)("div", {
                            id: "ProjetTrois",
                            "data-aos": "zoom-out",
                            children: Object(h.jsxs)(pe, {
                              href: "https://zepolimer.github.io/Loopstudio/",
                              children: [
                                Object(h.jsx)(ue, { children: "03" }),
                                Object(h.jsx)(me, { children: "Loopstudio" }),
                              ],
                            }),
                          }),
                          Object(h.jsx)("div", {
                            id: "ProjetQuatre",
                            "data-aos": "zoom-out",
                            children: Object(h.jsxs)(pe, {
                              href:
                                "https://zepolimer.github.io/Room_Homepage/",
                              children: [
                                Object(h.jsx)(ue, { children: "04" }),
                                Object(h.jsx)(me, { children: "RoomPage" }),
                              ],
                            }),
                          }),
                          Object(h.jsx)("div", {
                            id: "ProjetCinq",
                            "data-aos": "zoom-out",
                            children: Object(h.jsxs)(pe, {
                              href: "https://zepolimer.github.io/Crowfunding/",
                              children: [
                                Object(h.jsx)(ue, { children: "05" }),
                                Object(h.jsx)(me, { children: "Crowdfunding" }),
                              ],
                            }),
                          }),
                          Object(h.jsx)("div", {
                            id: "ProjetSix",
                            "data-aos": "zoom-out",
                            children: Object(h.jsxs)(pe, {
                              href:
                                "https://zepolimer.github.io/Princing_Toggle/",
                              children: [
                                Object(h.jsx)(ue, { children: "06" }),
                                Object(h.jsx)(me, { children: "Pricing" }),
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
            n
          );
        })(c.a.Component),
        xe = function () {
          var e = Object(o.useState)(""),
            t = Object(b.a)(e, 2),
            n = t[0],
            i = t[1],
            a = Object(o.useState)(""),
            s = Object(b.a)(a, 2),
            r = s[0],
            c = s[1],
            d = Object(o.useState)(""),
            l = Object(b.a)(d, 2),
            j = l[0],
            p = l[1],
            u = function (e) {
              var t = document.getElementById("formMessage");
              (t.innerHTML = e),
                (t.style.display = "block"),
                document.getElementById("name").classList.add("error"),
                document.getElementById("email").classList.add("error"),
                document.getElementById("message").classList.add("error");
            },
            m = function (e, t) {
              window.emailjs
                .send("gmail", e, t)
                .then(function (e) {
                  !(function () {
                    var e = document.getElementById("formMessage");
                    (e.innerHTML =
                      "Message envoy\xe9, je vous recontacte d\xe8s que possible !"),
                      (e.style.display = "block"),
                      (e.style.borderBottom = "none"),
                      document.getElementById("name").classList.remove("error"),
                      document
                        .getElementById("email")
                        .classList.remove("error"),
                      document
                        .getElementById("message")
                        .classList.remove("error"),
                      setTimeout(function () {
                        e.style.display = "none";
                      }, 5e3);
                  })(),
                    i(""),
                    c(""),
                    p("");
                })
                .catch(function (e) {
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
                onChange: function (e) {
                  return i(e.target.value);
                },
                placeholder: "Nom & Pr\xe9nom (obligatoire)",
                value: n,
                autoComplete: "off",
              }),
              Object(h.jsx)("input", {
                type: "mail",
                id: "email",
                name: "email",
                onChange: function (e) {
                  return c(e.target.value);
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
                onChange: function (e) {
                  return p(e.target.value);
                },
                placeholder:
                  "Parlez moi bri\xe8vement de votre projet (obligatoire)",
                value: j,
              }),
              Object(h.jsx)("input", {
                id: "formBtn",
                type: "button",
                value: "Collaborons",
                onClick: function (e) {
                  e.preventDefault(),
                    n &&
                    (function () {
                      var e = document.getElementById("errorEmail");
                      return r.match(
                        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
                      )
                        ? ((e.style.display = "none"), !0)
                        : ((e.style.display = "block"), !1);
                    })() &&
                    j
                      ? m("template_sgdhrsp", { name: n, email: r, message: j })
                      : u("Merci de remplir chaque champs du formulaire");
                },
              }),
              Object(h.jsx)("div", { id: "formMessage" }),
            ],
          });
        },
        Oe = (function (e) {
          Object(K.a)(n, e);
          var t = Object(V.a)(n);
          function n() {
            return Object(G.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object($.a)(n, [
              {
                key: "render",
                value: function () {
                  return Object(h.jsxs)("section", {
                    id: "contact",
                    children: [
                      Object(h.jsx)("div", {
                        id: "contactImg",
                        "data-aos": "zoom-in-right",
                        "data-aos-offset": "200",
                        "data-aos-duration": "500",
                        children: Object(h.jsx)("img", {
                          src: "./img/illu-contact.png",
                          alt: "Contactez moi",
                        }),
                      }),
                      Object(h.jsxs)("div", {
                        children: [
                          Object(h.jsx)("h2", {
                            "data-aos": "fade-up",
                            "data-aos-offset": "200",
                            "data-aos-duration": "500",
                            children: "Un projet ?",
                          }),
                          Object(h.jsx)("p", {
                            "data-aos": "fade-right",
                            "data-aos-offset": "150",
                            "data-aos-duration": "500",
                            children:
                              "Si vous voulez me contacter, discuter \xe0 propos d'un projet ou d'une collaboration ou tout simplement me dire bonjour, remplissez ce magnifique formulaire et je vous recontacterai !",
                          }),
                          Object(h.jsx)(xe, {}),
                        ],
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(c.a.Component),
        fe = u.a.footer(
          R || (R = Object(p.a)(["\n    background-color: black;"]))
        ),
        ge = u.a.section(
          T ||
            (T = Object(p.a)([
              "\n    width: 90%;\n    margin: 60px auto 0 auto;\n    \n    @media (min-width: 768px) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-pack: distribute;\n        justify-content: space-around;\n    }",
            ]))
        ),
        ve = u.a.article(
          D ||
            (D = Object(p.a)([
              "\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding: 15px 10px;",
            ]))
        ),
        ye = u.a.p(
          J ||
            (J = Object(p.a)([
              "\n    font-size: 12px;\n    text-align: center;\n    color: white;\n    padding: 10px;",
            ]))
        ),
        we = (function (e) {
          Object(K.a)(n, e);
          var t = Object(V.a)(n);
          function n() {
            return Object(G.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object($.a)(n, [
              {
                key: "render",
                value: function () {
                  return Object(h.jsxs)(fe, {
                    children: [
                      Object(h.jsxs)(ge, {
                        children: [
                          Object(h.jsxs)(ve, {
                            children: [
                              Object(h.jsx)("img", {
                                src: "./icons/redphone.png",
                                alt: "mon email",
                              }),
                              Object(h.jsx)("a", {
                                href: "mailto:remilopez.pro@gmail.com",
                                children: "remilopez.dev@gmail.com",
                              }),
                            ],
                          }),
                          Object(h.jsxs)(ve, {
                            children: [
                              Object(h.jsx)("img", {
                                src: "./icons/redmail.png",
                                alt: "mon t\xe9l\xe9phone",
                              }),
                              Object(h.jsx)("a", {
                                href: "tel:+33781536846",
                                children: "(+33) 07 81 53 68 46",
                              }),
                            ],
                          }),
                          Object(h.jsxs)(ve, {
                            children: [
                              Object(h.jsx)("img", {
                                src: "./icons/redgit.png",
                                alt: "mon github",
                              }),
                              Object(h.jsx)("a", {
                                href:
                                  "https://github.com/Zepolimer?tab=repositories",
                                children: "Github",
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(h.jsx)(ye, {
                        children: "Copyright \xa9 R\xe9mi Lopez. 2021",
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(c.a.Component),
        ke = n(26),
        ze = n.n(ke),
        Ce =
          (n(34),
          function () {
            return (
              ze.a.init(),
              Object(h.jsxs)(d.a, {
                children: [
                  Object(h.jsx)(Y, {}),
                  Object(h.jsx)(ce, {}),
                  Object(h.jsx)(de, {}),
                  Object(h.jsx)(le, {}),
                  Object(h.jsx)(he, {}),
                  Object(h.jsx)(Oe, {}),
                  Object(h.jsx)(we, {}),
                ],
              })
            );
          });
      j.a.render(
        Object(h.jsx)(d.a, { children: Object(h.jsx)(Ce, {}) }),
        document.getElementById("root")
      );
    },
  },
  [[39, 1, 2]],
]);
//# sourceMappingURL=main.5e5bb508.chunk.js.map
