"use strict";
function sample(t) {
    return t[Math.floor(Math.random() * t.length)]
}
function randomInt(t) {
    return Math.floor(Math.random() * Math.floor(t))
}
function randomIntRange(t, e) {
    return Math.floor(Math.random() * Math.floor(e - t)) + t
}
!function() {
    function g(t) {
        return t.width && t.height || (t.height = t.bottom - t.top,
        t.width = t.right - t.left),
        t
    }
    function t(t, e, n) {
        for (var o = document.getElementsByClassName(t), i = 0; i < o.length; i++)
            o[i].addEventListener(e, n)
    }
    var e, n = ((e = document.createElement("style")).appendChild(document.createTextNode("")),
    document.head.appendChild(e),
    e.sheet);
    n.insertRule(".btn-escape { position: relative; top: 0px; bottom: 0px; left: 0px; right: 0px }"),
    n.insertRule(".btn-jump { transition: .2s all; }"),
    n.insertRule(".btn-push { transition: .15s all; }"),
    n.insertRule("@keyframes fadein { 0% { opacity: 0; } 100% { opacity: 1; } }"),
    n.insertRule(".fadein { animation: fadein 1.5s ease-in; }"),
    n.insertRule(".btn-zip { transition: .3s ease-out all; }"),
    n.insertRule(".btn-fakeout { transition: .2s all; }"),
    n.insertRule(".btn-bug { transition: .1s all; }"),
    t("btn-jump", "mouseenter", function(t) {
        var e = g(this.getBoundingClientRect())
          , n = window.getComputedStyle(this, null)
          , o = parseInt(n.top.substring(0, n.top.length - 2)) + sample([1, -1]) * randomIntRange(e.height, 2.5 * e.height) + "px"
          , i = parseInt(n.left.substring(0, n.left.length - 2)) + sample([1, -1]) * randomIntRange(.8 * e.width, 1.8 * e.width) + "px";
        this.style.top = o,
        this.style.left = i
    }),
    t("btn-push", "mouseover", function(t) {
        var e = g(this.getBoundingClientRect())
          , n = window.getComputedStyle(this, null)
          , o = parseInt(n.top.substring(0, n.top.length - 2))
          , i = parseInt(n.left.substring(0, n.left.length - 2));
        t.offsetX + 15 > e.width ? this.style.left = i - 120 + "px" : t.offsetX - 15 < 0 ? this.style.left = i + 120 + "px" : t.offsetY + 15 > e.height ? this.style.top = o - 100 + "px" : (t.offsetY,
        this.style.top = o + 100 + "px")
    }),
    t("btn-warp", "mouseover", function(t) {
        var e = this
          , n = (g(e.getBoundingClientRect()),
        window.getComputedStyle(e, null))
          , o = parseInt(n.top.substring(0, n.top.length - 2))
          , i = parseInt(n.left.substring(0, n.left.length - 2))
          , s = t.pageY
          , l = t.pageX
          , p = randomIntRange(0, .9 * window.innerWidth)
          , r = randomIntRange(0, .9 * window.innerHeight);
        e.classList.remove("fadein"),
        e.style.opacity = 0,
        e.style.top = o + (r - s) + "px",
        e.style.left = i + (p - l) + "px",
        window.setTimeout(function() {
            e.style.opacity = 1,
            e.classList.add("fadein")
        }, 0)
    }),
    t("btn-zip", "mouseover", function(t) {
        function e() {
            s.style.left = a - l.left + "px"
        }
        function n() {
            s.style.left = a + (window.innerWidth - l.right - 1) + "px"
        }
        function o() {
            s.style.top = r - l.top + "px"
        }
        function i() {
            s.style.top = r + (window.innerHeight - l.bottom - 1) + "px"
        }
        var s = this
          , l = g(s.getBoundingClientRect())
          , p = window.getComputedStyle(s, null)
          , r = parseInt(p.top.substring(0, p.top.length - 2))
          , a = parseInt(p.left.substring(0, p.left.length - 2));
        t.offsetX + 10 > l.width ? (console.log("zip left"),
        l.left - 10 < 0 ? n() : e()) : t.offsetX - 10 < 0 ? (console.log("zip right"),
        l.right + 30 > window.innerWidth ? e() : n()) : t.offsetY + 5 > l.height ? (console.log("zip up"),
        l.top - 5 < 0 ? i() : o()) : t.offsetY - 5 < 0 ? (console.log("zip down"),
        l.bottom + 5 > window.innerHeight ? o() : i()) : (console.log("No zip direction detected"),
        sample([e, n, o, i])())
    }),
    t("btn-fakeout", "mouseover", function(t) {
        var e = this
          , n = g(e.getBoundingClientRect())
          , o = window.getComputedStyle(e, null)
          , i = parseInt(o.top.substring(0, o.top.length - 2))
          , s = parseInt(o.left.substring(0, o.left.length - 2))
          , l = 0
          , p = 0;
        t.offsetX + 15 > n.width ? (e.style.left = s - 140 + "px",
        l = s + 280 + "px") : t.offsetX - 15 < 0 ? (e.style.left = s + 140 + "px",
        l = s - 280 + "px") : t.offsetY + 15 > n.height ? (e.style.top = i - 75 + "px",
        p = i + 150 + "px") : t.offsetY - 15 < 0 ? (e.style.top = i + 75 + "px",
        p = i - 150 + "px") : (e.style.left = s + 140 + "px",
        l = s - 280 + "px"),
        window.setTimeout(function() {
            l && (e.style.left = l),
            p && (e.style.top = p)
        }, 200)
    }),
    t("btn-bug", "mouseover", function(t) {
        for (var e = this, n = (g(e.getBoundingClientRect()),
        window.getComputedStyle(e, null)), o = parseInt(n.top.substring(0, n.top.length - 2)), i = parseInt(n.left.substring(0, n.left.length - 2)), s = t.pageY, l = t.pageX, p = .9 * (i + (window.innerWidth - l)), r = .9 * (i - l), a = .9 * (o + (window.innerHeight - s)), f = .9 * (o - s), u = 0; u < 5; u++)
            window.setTimeout(function() {
                e.style.top = randomIntRange(f, a) + "px",
                e.style.left = randomIntRange(r, p) + "px"
            }, 100 * u)
    })
}();
