! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("yzmplayer", [], t) : "object" == typeof exports ? exports.yzmplayer = t() : e.yzmplayer = t()
}("undefined" != typeof self ? self : this, function() {
    return function(e) {
        function t(i) {
            if (n[i]) return n[i].exports;
            var a = n[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return e[i].call(a.exports, a, a.exports, t), a.l = !0, a.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.d = function(e, n, i) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: i
            })
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "/", t(t.s = 5)
    }([
        function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = /mobile/i.test(window.navigator.userAgent),
                a = {
                    secondToTime: function(e) {
                        var t = function(e) {
                                return e < 10 ? "0" + e : "" + e
                            },
                            n = Math.floor(e / 3600),
                            i = Math.floor((e - 3600 * n) / 60),
                            a = Math.floor(e - 3600 * n - 60 * i);
                        return (n > 0 ? [n, i, a] : [i, a]).map(t).join(":")
                    },
                    getElementViewLeft: function(e) {
                        var t = e.offsetLeft,
                            n = e.offsetParent,
                            i = document.body.scrollLeft + document.documentElement.scrollLeft;
                        if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement)
                            for (; null !== n && n !== e;) t += n.offsetLeft, n = n.offsetParent;
                        else
                            for (; null !== n;) t += n.offsetLeft, n = n.offsetParent;
                        return t - i
                    },
                    getScrollPosition: function() {
                        return {
                            left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
                            top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
                        }
                    },
                    setScrollPosition: function(e) {
                        var t = e.left,
                            n = void 0 === t ? 0 : t,
                            i = e.top,
                            a = void 0 === i ? 0 : i;
                        this.isFirefox ? (document.documentElement.scrollLeft = n, document.documentElement.scrollTop = a) : window.scrollTo(n, a)
                    },
                    isMobile: i,
                    isFirefox: /firefox/i.test(window.navigator.userAgent),
                    isChrome: /chrome/i.test(window.navigator.userAgent),
                    storage: {
                        set: function(e, t) {
                            localStorage.setItem(e, t)
                        },
                        get: function(e) {
                            return localStorage.getItem(e)
                        }
                    },
                    cumulativeOffset: function(e) {
                        var t = 0,
                            n = 0;
                        do {
                            t += e.offsetTop || 0, n += e.offsetLeft || 0, e = e.offsetParent
                        } while (e);
                        return {
                            top: t,
                            left: n
                        }
                    },
                    nameMap: {
                        dragStart: i ? "touchstart" : "mousedown",
                        dragMove: i ? "touchmove" : "mousemove",
                        dragEnd: i ? "touchend" : "mouseup"
                    }
                };
            t.default = a
        },
        function(e, t, n) {
            "use strict";
            var i, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
            i = function() {
                return this
            }();
            try {
                i = i || Function("return this")() || (0, eval)("this")
            } catch (e) {
                "object" === ("undefined" == typeof window ? "undefined" : a(window)) && (i = window)
            }
            e.exports = i
        },
        function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = n(16),
                o = i(a),
                s = n(17),
                r = i(s),
                l = n(18),
                c = i(l),
                u = n(19),
                d = i(u),
                p = n(20),
                h = i(p),
                y = n(21),
                m = i(y),
                f = n(22),
                v = i(f),
                g = n(23),
                b = i(g),
                k = n(24),
                w = i(k),
                x = n(25),
                S = i(x),
                T = n(26),
                L = i(T),
                M = n(27),
                _ = i(M),
                q = n(28),
                E = i(q),
                B = n(29),
                P = i(B),
                C = n(30),
                O = i(C),
                z = n(31),
                F = i(z),
                I = {
                    play: o.default,
                    pause: r.default,
                    volumeUp: c.default,
                    volumeDown: d.default,
                    volumeOff: h.default,
                    full: m.default,
                    fullWeb: v.default,
                    setting: b.default,
                    right: w.default,
                    comment: S.default,
                    commentOff: L.default,
                    send: _.default,
                    pallette: E.default,
                    camera: P.default,
                    subtitle: O.default,
                    loading: F.default
                };
            t.default = I
        },
        function(e, t, n) {
            "use strict";
            e.exports = n(33)
        },
        function(e, t, n) {
            var i = n(3);
            e.exports = function(e) {
                "use strict";
                e = e || {};
                var t = "",
                    n = e.enableSubtitle,
                    a = e.subtitle,
                    o = e.current,
                    s = e.pic,
                    r = i.$escape,
                    l = e.screenshot,
                    c = e.preload,
                    u = e.url,
                    n = a && "webvtt" === a.type;
                return t += '\n<video\n    class="yzmplayer-video ', o && (t += "yzmplayer-video-current"), t += '"\n    webkit-playsinline\n    playsinline\n    ', s && (t += 'poster="', t += r(s), t += '"'), t += "\n    ", (l || n) && (t += 'crossorigin="anonymous"'), t += "\n    ", c && (t += 'preload="', t += r(c), t += '"'), t += "\n    ", u && (t += 'src="', t += r(u), t += '"'), t += "\n    >\n    ", n && (t += '\n    <track kind="metadata" default src="', t += r(a.url), t += '"></track>\n    '), t += "\n</video>"
            }
        },
        function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), n(6);
            var i = n(7),
                a = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(i);
            console.log("笑啦TV");
            console.log('%cWWW.XIAOLATV.TK', 'font-size:2em');
            console.log('%c页面加载完毕消耗了' + Math.round(performance.now() * 100) / 100 + 'ms', 'background:#fff;color:#333;text-shadow:0 0 2px #eee,0 0 3px #eee,0 0 3px #eee,0 0 2px #eee,0 0 3px #eee;');
            t.default = a.default
        },
        function(e, t) {},
        function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                s = n(8),
                r = i(s),
                l = n(0),
                c = i(l),
                u = n(12),
                d = i(u),
                p = n(14),
                h = i(p),
                y = n(15),
                m = i(y),
                f = n(2),
                v = i(f),
                g = n(35),
                b = i(g),
                k = n(36),
                w = i(k),
                x = n(37),
                S = i(x),
                T = n(38),
                L = i(T),
                M = n(39),
                _ = i(M),
                q = n(40),
                E = i(q),
                B = n(41),
                P = i(B),
                C = n(42),
                O = i(C),
                z = n(43),
                F = i(z),
                I = n(45),
                j = i(I),
                D = n(46),
                W = i(D),
                H = n(47),
                A = i(H),
                V = n(48),
                R = i(V),
                X = n(49),
                N = i(X),
                U = n(4),
                $ = i(U),
                Q = 0,
                J = [],
                Y = function() {
                    function e(t) {
                        var n = this;
                        a(this, e), this.options = (0, d.default)(t), this.options.video.quality && (this.qualityIndex = this.options.video.defaultQuality, this.quality = this.options.video.quality[this.options.video.defaultQuality]), this.tran = new h.default(this.options.lang).tran, this.events = new w.default, this.user = new L.default(this), this.container = this.options.container, this.container.classList.add("yzmplayer"), this.options.danmaku || this.container.classList.add("yzmplayer-no-danmaku"), this.options.live && this.container.classList.add("yzmplayer-live"), c.default.isMobile && this.container.classList.add("yzmplayer-mobile"), this.arrow = this.container.offsetWidth <= 500, this.arrow && this.container.classList.add("yzmplayer-arrow"), this.template = new m.default({
                            container: this.container,
                            options: this.options,
                            index: Q,
                            tran: this.tran
                        }), this.video = this.template.video, this.bar = new E.default(this.template), this.bezel = new O.default(this.template.bezel), this.fullScreen = new S.default(this), this.controller = new F.default(this), this.options.danmaku && (this.danmaku = new b.default({
                            container: this.template.danmaku,
                            opacity: this.user.get("opacity"),
                            callback: function() {
                                setTimeout(function() {
                                    n.template.danmakuLoading.style.display = "none", setTimeout(function() {
                                        document.getElementById('link2-success').style.display = "block"
                                    }, 1 * 1500), n.options.autoplay && n.play()
                                }, 0)
                            },
                            error: function(e) {
                                document.getElementById('link2-success').remove(), setTimeout(function() {
                                    document.getElementById('link2-error').style.display = "block"
                                }, 1 * 1000), n.notice(e)
                            },
                            apiBackend: this.options.apiBackend,
                            borderColor: this.options.theme,
                            height: this.arrow ? 24 : 30,
                            time: function() {
                                return n.video.currentTime
                            },
                            unlimited: this.user.get("unlimited"),
                            api: {
                                id: this.options.danmaku.id,
                                address: this.options.danmaku.api,
                                token: this.options.danmaku.token,
                                maximum: this.options.danmaku.maximum,
                                addition: this.options.danmaku.addition,
                                user: this.options.danmaku.user
                            },
                            events: this.events
                        }), this.comment = new W.default(this)), this.setting = new j.default(this), document.addEventListener("click", function() {
                            n.focus = !1
                        }, !0), this.container.addEventListener("click", function() {
                            n.focus = !0
                        }, !0), this.paused = !0, this.time = new P.default(this), this.hotkey = new A.default(this), this.contextmenu = new R.default(this), this.initVideo(this.video, this.quality && this.quality.type || this.options.video.type), this.infoPanel = new N.default(this), !this.danmaku && this.options.autoplay && this.play(), Q++, J.push(this)
                    }
                    return o(e, [{
                        key: "seek",
                        value: function(e) {
                            e = Math.max(e, 0), this.video.duration && (e = Math.min(e, this.video.duration)), this.video.currentTime < e ? this.notice(this.tran("FF") + " " + (e - this.video.currentTime).toFixed(0) + " " + this.tran("s")) : this.video.currentTime > e && this.notice(this.tran("REW") + " " + (this.video.currentTime - e).toFixed(0) + " " + this.tran("s")), this.video.currentTime = e, this.danmaku && this.danmaku.seek(), this.bar.set("played", e / this.video.duration, "width")
                        }
                    }, {
                        key: "play",
                        value: function() {
                            var e = this;
                            if (this.paused = !1, this.video.paused && this.bezel.switch(v.default.play), this.template.playButton.innerHTML = v.default.pause, r.default.resolve(this.video.play()).catch(function() {
                                e.pause()
                            }).then(function() {}), this.time.enable("loading"), this.time.enable("progress"), this.container.classList.remove("yzmplayer-paused"), this.container.classList.add("yzmplayer-playing"), this.danmaku && this.danmaku.play(), this.options.mutex)
                                for (var t = 0; t < J.length; t++) this !== J[t] && J[t].pause()
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            this.paused = !0, this.container.classList.remove("yzmplayer-loading"), this.video.paused || this.bezel.switch(v.default.pause), this.ended = !1, this.template.playButton.innerHTML = v.default.play, this.video.pause(), this.time.disable("loading"), this.time.disable("progress"), this.container.classList.remove("yzmplayer-playing"), this.container.classList.add("yzmplayer-paused"), this.danmaku && this.danmaku.pause()
                        }
                    }, {
                        key: "switchVolumeIcon",
                        value: function() {
                            this.volume() >= .95 ? this.template.volumeIcon.innerHTML = v.default.volumeUp : this.volume() > 0 ? this.template.volumeIcon.innerHTML = v.default.volumeDown : this.template.volumeIcon.innerHTML = v.default.volumeOff
                        }
                    }, {
                        key: "volume",
                        value: function(e, t, n) {
                            if (e = parseFloat(e), !isNaN(e)) {
                                e = Math.max(e, 0), e = Math.min(e, 1), this.bar.set("volume", e, "width");
                                var i = (100 * e).toFixed(0) + "%";
                                this.template.volumeBarWrapWrap.dataset.balloon = i, t || this.user.set("volume", e), n || this.notice(this.tran("Volume") + " " + (100 * e).toFixed(0) + "%"), this.video.volume = e, this.video.muted && (this.video.muted = !1), this.switchVolumeIcon()
                            }
                            return this.video.volume
                        }
                    }, {
                        key: "toggle",
                        value: function() {
                            this.video.paused ? this.play() : this.pause()
                        }
                    }, {
                        key: "on",
                        value: function(e, t) {
                            this.events.on(e, t)
                        }
                    }, {
                        key: "switchVideo",
                        value: function(e, t) {
                            this.pause(), this.video.poster = e.pic ? e.pic : "", this.video.src = e.url, this.initMSE(this.video, e.type || "auto"), t && (this.template.danmakuLoading.style.display = "block", this.bar.set("played", 0, "width"), this.bar.set("loaded", 0, "width"), this.template.ptime.innerHTML = "00:00", this.template.danmaku.innerHTML = "", this.danmaku && this.danmaku.reload({
                                id: t.id,
                                address: t.api,
                                token: t.token,
                                maximum: t.maximum,
                                addition: t.addition,
                                user: t.user
                            }))
                        }
                    }, {
                        key: "initMSE",
                        value: function(e, t) {
                            var n = this;
                            if (this.type = t, this.options.video.customType && this.options.video.customType[t]) "[object Function]" === Object.prototype.toString.call(this.options.video.customType[t]) ? this.options.video.customType[t](this.video, this) : console.error("Illegal customType: " + t);
                            else switch ("auto" === this.type && (/m3u8(#|\?|$)/i.exec(e.src) ? this.type = "hls" : /.flv(#|\?|$)/i.exec(e.src) ? this.type = "flv" : /.mpd(#|\?|$)/i.exec(e.src) ? this.type = "dash" : this.type = "normal"), this.type) {
                                case "hls":
                                    if (Hls)
                                        if (Hls.isSupported()) {
                                            var i = new Hls;
                                            i.loadSource(e.src), i.attachMedia(e)
                                        } else this.notice("Error: Hls is not supported.");
                                    else this.notice("Error: Can't find Hls.");
                                    break;
                                case "flv":
                                    if (flvjs && flvjs.isSupported())
                                        if (flvjs.isSupported()) {
                                            var a = flvjs.createPlayer({
                                                type: "flv",
                                                url: e.src
                                            });
                                            a.attachMediaElement(e), a.load()
                                        } else this.notice("Error: flvjs is not supported.");
                                    else this.notice("Error: Can't find flvjs.");
                                    break;
                                case "dash":
                                    dashjs ? dashjs.MediaPlayer().create().initialize(e, e.src, !1) : this.notice("Error: Can't find dashjs.");
                                    break;
                                case "webtorrent":
                                    if (WebTorrent)
                                        if (WebTorrent.WEBRTC_SUPPORT) {
                                            this.container.classList.add("yzmplayer-loading");
                                            var o = new WebTorrent,
                                                s = e.src;
                                            o.add(s, function(e) {
                                                e.files.find(function(e) {
                                                    return e.name.endsWith(".mp4")
                                                }).renderTo(n.video, {
                                                    autoplay: n.options.autoplay
                                                }, function() {
                                                    n.container.classList.remove("yzmplayer-loading")
                                                })
                                            })
                                        } else this.notice("Error: Webtorrent is not supported.");
                                    else this.notice("Error: Can't find Webtorrent.")
                            }
                        }
                    }, {
                        key: "initVideo",
                        value: function(e, t) {
                            var n = this;
                            this.initMSE(e, t), this.on("durationchange", function() {
                                1 !== e.duration && (n.template.dtime.innerHTML = c.default.secondToTime(e.duration))
                            }), this.on("progress", function() {
                                var t = e.buffered.length ? e.buffered.end(e.buffered.length - 1) / e.duration : 0;
                                n.bar.set("loaded", t, "width")
                            }), this.on("error", function() {
                                n.tran && n.notice && (n.type, n.notice(n.tran("This video fails to load"), -1))
                            }), this.ended = !1, this.on("ended", function() {
                                n.bar.set("played", 1, "width"), n.setting.loop ? (n.seek(0), e.play()) : (n.ended = !0, n.pause()), n.danmaku && (n.danmaku.danIndex = 0)
                            }), this.on("play", function() {
                                n.paused && n.play()
                            }), this.on("pause", function() {
                                n.paused || n.pause()
                            });
                            for (var i = 0; i < this.events.videoEvents.length; i++)! function(t) {
                                e.addEventListener(n.events.videoEvents[t], function() {
                                    n.events.trigger(n.events.videoEvents[t])
                                })
                            }(i);
                            this.volume(this.user.get("volume"), !0, !0), this.options.subtitle && (this.subtitle = new _.default(this.template.subtitle, this.video, this.options.subtitle, this.events), this.user.get("subtitle") || this.subtitle.hide())
                        }
                    }, {
                        key: "switchQuality",
                        value: function(e) {
                            var t = this;
                            if (this.qualityIndex !== e && !this.switchingQuality) {
                                this.qualityIndex = e, this.switchingQuality = !0, this.quality = this.options.video.quality[e], this.template.qualityButton.innerHTML = this.quality.name;
                                var n = this.video.paused;
                                this.video.pause();
                                var i = (0, $.default)({
                                        current: !1,
                                        pic: null,
                                        screenshot: this.options.screenshot,
                                        preload: "auto",
                                        url: this.quality.url,
                                        subtitle: this.options.subtitle
                                    }),
                                    a = (new DOMParser).parseFromString(i, "text/html").body.firstChild;
                                this.template.videoWrap.insertBefore(a, this.template.videoWrap.getElementsByTagName("div")[0]), this.prevVideo = this.video, this.video = a, this.initVideo(this.video, this.quality.type || this.options.video.type), this.seek(this.prevVideo.currentTime), this.notice(this.tran("Switching to") + " " + this.quality.name + " " + this.tran("quality"), -1), this.events.trigger("quality_start", this.quality), this.on("canplay", function() {
                                    if (t.prevVideo) {
                                        if (t.video.currentTime !== t.prevVideo.currentTime) return void t.seek(t.prevVideo.currentTime);
                                        t.template.videoWrap.removeChild(t.prevVideo), t.video.classList.add("yzmplayer-video-current"), n || t.video.play(), t.prevVideo = null, t.notice(t.tran("Switched to") + " " + t.quality.name + " " + t.tran("quality")), t.switchingQuality = !1, t.events.trigger("quality_end")
                                    }
                                })
                            }
                        }
                    }, {
                        key: "notice",
                        value: function(e) {
                            var t = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2e3,
                                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .8;
                            this.template.notice.innerHTML = e, this.template.notice.style.opacity = i, this.noticeTime && clearTimeout(this.noticeTime), this.events.trigger("notice_show", e), this.noticeTime = setTimeout(function() {
                                t.template.notice.style.opacity = 0, t.events.trigger("notice_hide")
                            }, n)
                        }
                    }, {
                        key: "resize",
                        value: function() {
                            this.danmaku && this.danmaku.resize(), this.events.trigger("resize")
                        }
                    }, {
                        key: "speed",
                        value: function(e) {
                            this.video.playbackRate = e
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            J.splice(J.indexOf(this), 1), this.pause(), this.controller.destroy(), this.time.destroy(), this.video.src = "", this.container.innerHTML = "", this.events.trigger("destroy");
                            for (var e in this) this.hasOwnProperty(e) && "paused" !== e && delete this[e]
                        }
                    }]), e
                }();
            t.default = Y
        },
        function(e, t, n) {
            "use strict";
            (function(t) {
                function n() {}

                function i(e, t) {
                    return function() {
                        e.apply(t, arguments)
                    }
                }

                function a(e) {
                    if (!(this instanceof a)) throw new TypeError("Promises must be constructed via new");
                    if ("function" != typeof e) throw new TypeError("not a function");
                    this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], u(e, this)
                }

                function o(e, t) {
                    for (; 3 === e._state;) e = e._value;
                    if (0 === e._state) return void e._deferreds.push(t);
                    e._handled = !0, a._immediateFn(function() {
                        var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                        if (null === n) return void(1 === e._state ? s : r)(t.promise, e._value);
                        var i;
                        try {
                            i = n(e._value)
                        } catch (e) {
                            return void r(t.promise, e)
                        }
                        s(t.promise, i)
                    })
                }

                function s(e, t) {
                    try {
                        if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
                        if (t && ("object" === (void 0 === t ? "undefined" : d(t)) || "function" == typeof t)) {
                            var n = t.then;
                            if (t instanceof a) return e._state = 3, e._value = t, void l(e);
                            if ("function" == typeof n) return void u(i(n, t), e)
                        }
                        e._state = 1, e._value = t, l(e)
                    } catch (t) {
                        r(e, t)
                    }
                }

                function r(e, t) {
                    e._state = 2, e._value = t, l(e)
                }

                function l(e) {
                    2 === e._state && 0 === e._deferreds.length && a._immediateFn(function() {
                        e._handled || a._unhandledRejectionFn(e._value)
                    });
                    for (var t = 0, n = e._deferreds.length; t < n; t++) o(e, e._deferreds[t]);
                    e._deferreds = null
                }

                function c(e, t, n) {
                    this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
                }

                function u(e, t) {
                    var n = !1;
                    try {
                        e(function(e) {
                            n || (n = !0, s(t, e))
                        }, function(e) {
                            n || (n = !0, r(t, e))
                        })
                    } catch (e) {
                        if (n) return;
                        n = !0, r(t, e)
                    }
                }
                var d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    p = setTimeout;
                a.prototype.catch = function(e) {
                    return this.then(null, e)
                }, a.prototype.then = function(e, t) {
                    var i = new this.constructor(n);
                    return o(this, new c(e, t, i)), i
                }, a.all = function(e) {
                    return new a(function(t, n) {
                        function i(e, s) {
                            try {
                                if (s && ("object" === (void 0 === s ? "undefined" : d(s)) || "function" == typeof s)) {
                                    var r = s.then;
                                    if ("function" == typeof r) return void r.call(s, function(t) {
                                        i(e, t)
                                    }, n)
                                }
                                a[e] = s, 0 == --o && t(a)
                            } catch (e) {
                                n(e)
                            }
                        }
                        if (!e || void 0 === e.length) throw new TypeError("Promise.all accepts an array");
                        var a = Array.prototype.slice.call(e);
                        if (0 === a.length) return t([]);
                        for (var o = a.length, s = 0; s < a.length; s++) i(s, a[s])
                    })
                }, a.resolve = function(e) {
                    return e && "object" === (void 0 === e ? "undefined" : d(e)) && e.constructor === a ? e : new a(function(t) {
                        t(e)
                    })
                }, a.reject = function(e) {
                    return new a(function(t, n) {
                        n(e)
                    })
                }, a.race = function(e) {
                    return new a(function(t, n) {
                        for (var i = 0, a = e.length; i < a; i++) e[i].then(t, n)
                    })
                }, a._immediateFn = "function" == typeof t && function(e) {
                    t(e)
                } || function(e) {
                    p(e, 0)
                }, a._unhandledRejectionFn = function(e) {
                    "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
                }, e.exports = a
            }).call(t, n(9).setImmediate)
        },
        function(e, t, n) {
            "use strict";

            function i(e, t) {
                this._id = e, this._clearFn = t
            }
            var a = Function.prototype.apply;
            t.setTimeout = function() {
                return new i(a.call(setTimeout, window, arguments), clearTimeout)
            }, t.setInterval = function() {
                return new i(a.call(setInterval, window, arguments), clearInterval)
            }, t.clearTimeout = t.clearInterval = function(e) {
                e && e.close()
            }, i.prototype.unref = i.prototype.ref = function() {}, i.prototype.close = function() {
                this._clearFn.call(window, this._id)
            }, t.enroll = function(e, t) {
                clearTimeout(e._idleTimeoutId), e._idleTimeout = t
            }, t.unenroll = function(e) {
                clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
            }, t._unrefActive = t.active = function(e) {
                clearTimeout(e._idleTimeoutId);
                var t = e._idleTimeout;
                t >= 0 && (e._idleTimeoutId = setTimeout(function() {
                    e._onTimeout && e._onTimeout()
                }, t))
            }, n(10), t.setImmediate = setImmediate, t.clearImmediate = clearImmediate
        },
        function(e, t, n) {
            "use strict";
            (function(e, t) {
                ! function(e, n) {
                    function i(e) {
                        "function" != typeof e && (e = new Function("" + e));
                        for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
                        var i = {
                            callback: e,
                            args: t
                        };
                        return c[l] = i, r(l), l++
                    }

                    function a(e) {
                        delete c[e]
                    }

                    function o(e) {
                        var t = e.callback,
                            i = e.args;
                        switch (i.length) {
                            case 0:
                                t();
                                break;
                            case 1:
                                t(i[0]);
                                break;
                            case 2:
                                t(i[0], i[1]);
                                break;
                            case 3:
                                t(i[0], i[1], i[2]);
                                break;
                            default:
                                t.apply(n, i)
                        }
                    }

                    function s(e) {
                        if (u) setTimeout(s, 0, e);
                        else {
                            var t = c[e];
                            if (t) {
                                u = !0;
                                try {
                                    o(t)
                                } finally {
                                    a(e), u = !1
                                }
                            }
                        }
                    }
                    if (!e.setImmediate) {
                        var r, l = 1,
                            c = {},
                            u = !1,
                            d = e.document,
                            p = Object.getPrototypeOf && Object.getPrototypeOf(e);
                        p = p && p.setTimeout ? p : e, "[object process]" === {}.toString.call(e.process) ? function() {
                            r = function(e) {
                                t.nextTick(function() {
                                    s(e)
                                })
                            }
                        }() : function() {
                            if (e.postMessage && !e.importScripts) {
                                var t = !0,
                                    n = e.onmessage;
                                return e.onmessage = function() {
                                    t = !1
                                }, e.postMessage("", "*"), e.onmessage = n, t
                            }
                        }() ? function() {
                            var t = "setImmediate$" + Math.random() + "$",
                                n = function(n) {
                                    n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && s(+n.data.slice(t.length))
                                };
                            e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n), r = function(n) {
                                e.postMessage(t + n, "*")
                            }
                        }() : e.MessageChannel ? function() {
                            var e = new MessageChannel;
                            e.port1.onmessage = function(e) {
                                s(e.data)
                            }, r = function(t) {
                                e.port2.postMessage(t)
                            }
                        }() : d && "onreadystatechange" in d.createElement("script") ? function() {
                            var e = d.documentElement;
                            r = function(t) {
                                var n = d.createElement("script");
                                n.onreadystatechange = function() {
                                    s(t), n.onreadystatechange = null, e.removeChild(n), n = null
                                }, e.appendChild(n)
                            }
                        }() : function() {
                            r = function(e) {
                                setTimeout(s, 0, e)
                            }
                        }(), p.setImmediate = i, p.clearImmediate = a
                    }
                }("undefined" == typeof self ? void 0 === e ? void 0 : e : self)
            }).call(t, n(1), n(11))
        },
        function(e, t, n) {
            "use strict";

            function i() {
                throw new Error("setTimeout has not been defined")
            }

            function a() {
                throw new Error("clearTimeout has not been defined")
            }

            function o(e) {
                if (d === setTimeout) return setTimeout(e, 0);
                if ((d === i || !d) && setTimeout) return d = setTimeout, setTimeout(e, 0);
                try {
                    return d(e, 0)
                } catch (t) {
                    try {
                        return d.call(null, e, 0)
                    } catch (t) {
                        return d.call(this, e, 0)
                    }
                }
            }

            function s(e) {
                if (p === clearTimeout) return clearTimeout(e);
                if ((p === a || !p) && clearTimeout) return p = clearTimeout, clearTimeout(e);
                try {
                    return p(e)
                } catch (t) {
                    try {
                        return p.call(null, e)
                    } catch (t) {
                        return p.call(this, e)
                    }
                }
            }

            function r() {
                f && y && (f = !1, y.length ? m = y.concat(m) : v = -1, m.length && l())
            }

            function l() {
                if (!f) {
                    var e = o(r);
                    f = !0;
                    for (var t = m.length; t;) {
                        for (y = m, m = []; ++v < t;) y && y[v].run();
                        v = -1, t = m.length
                    }
                    y = null, f = !1, s(e)
                }
            }

            function c(e, t) {
                this.fun = e, this.array = t
            }

            function u() {}
            var d, p, h = e.exports = {};
            ! function() {
                try {
                    d = "function" == typeof setTimeout ? setTimeout : i
                } catch (e) {
                    d = i
                }
                try {
                    p = "function" == typeof clearTimeout ? clearTimeout : a
                } catch (e) {
                    p = a
                }
            }();
            var y, m = [],
                f = !1,
                v = -1;
            h.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                m.push(new c(e, t)), 1 !== m.length || f || o(l)
            }, c.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, h.title = "browser", h.browser = !0, h.env = {}, h.argv = [], h.version = "", h.versions = {}, h.on = u, h.addListener = u, h.once = u, h.off = u, h.removeListener = u, h.removeAllListeners = u, h.emit = u, h.prependListener = u, h.prependOnceListener = u, h.listeners = function(e) {
                return []
            }, h.binding = function(e) {
                throw new Error("process.binding is not supported")
            }, h.cwd = function() {
                return "/"
            }, h.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            }, h.umask = function() {
                return 0
            }
        },
        function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                a = n(13),
                o = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(a);
            t.default = function(e) {
                var t = {
                    container: e.element || document.getElementsByClassName("yzmplayer")[0],
                    live: !1,
                    autoplay: !1,
                    theme: "#b7daff",
                    loop: !1,
                    lang: (navigator.language || navigator.browserLanguage).toLowerCase(),
                    screenshot: !1,
                    hotkey: !0,
                    preload: "auto",
                    volume: .7,
                    apiBackend: o.default,
                    video: {},
                    contextmenu: [],
                    mutex: !0
                };
                for (var n in t) t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
                return e.video && !e.video.type && (e.video.type = "auto"), "object" === i(e.danmaku) && e.danmaku && !e.danmaku.user && (e.danmaku.user = "DIYgod"), e.subtitle && (!e.subtitle.type && (e.subtitle.type = "webvtt"), !e.subtitle.fontSize && (e.subtitle.fontSize = "20px"), !e.subtitle.bottom && (e.subtitle.bottom = "40px"), !e.subtitle.color && (e.subtitle.color = "#fff")), e.video.quality && (e.video.url = [e.video.quality[e.video.defaultQuality].url]), e.lang && (e.lang = e.lang.toLowerCase()), e.contextmenu = e.contextmenu.concat([{
                    text: "Video info",
                    click: function(e) {
                        e.infoPanel.triggle()
                    }
                }, {
                    text: "笑啦TV",
                    link: "https://www.xiaolatv.live/"
                }]), e
            }
        },
        function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function(e, t, n, i, a) {
                var o = new XMLHttpRequest;
                o.onreadystatechange = function() {
                    if (4 === o.readyState) {
                        if (o.status >= 200 && o.status < 300 || 304 === o.status) {
                            var e = JSON.parse(o.responseText);
                            return 0 !== e.code ? i(o, e) : n(o, e)
                        }
                        a(o)
                    }
                }, o.open(null !== t ? "POST" : "GET", e, !0), o.send(null !== t ? JSON.stringify(t) : null)
            };
            t.default = {
                send: function(e, t, n) {
                    i(e, t, function(e, t) {
                        console.log("发送弹幕成功"), n && n()
                    }, function(e, t) {
                        alert(t.msg)
                    }, function(e) {
                        console.log("Request was unsuccessful: " + e.status)
                    })
                },
                read: function(e, t) {
                    i(e, null, function(e, n) {
                        t(null, n.danmaku)
                    }, function(e, n) {
                        t({
                            status: e.status,
                            response: n
                        })
                    }, function(e) {
                        t({
                            status: e.status,
                            response: null
                        })
                    })
                }
            }
        },
        function(e, t, n) {
            "use strict";

            function i(e) {
                var t = this;
                this.lang = e, this.tran = function(e) {
                    return a[t.lang] && a[t.lang][e] ? a[t.lang][e] : e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                "zh-cn": {
                    "Danmaku is loading": "弹幕加载中",
                    Top: "顶部",
                    Bottom: "底部",
                    Rolling: "滚动",
                    "Input danmaku, hit Enter": "在这里输入弹幕吐槽哦~",
                    "About author": "关于作者",
                    "yzmplayer feedback": "播放器意见反馈",
                    "About yzmplayer": "关于 yzmplayer 播放器",
                    Loop: "洗脑循环",
                    Speed: "速度",
                    "Opacity for danmaku": "弹幕透明度",
                    Normal: "正常",
                    "Please input danmaku content!": "要输入弹幕内容啊喂！",
                    "Set danmaku color": "弹幕颜色",
                    "Set danmaku type": "弹幕模式",
                    "Show danmaku": "显示弹幕",
                    "This video fails to load": "视频加载失败",
                    "Switching to": "正在切换至",
                    "Switched to": "已经切换至",
                    quality: "画质",
                    FF: "快进",
                    REW: "快退",
                    "Unlimited danmaku": "海量弹幕",
                    "Send danmaku": "发送弹幕",
                    Setting: "设置",
                    "Full screen": "全屏",
                    "Web full screen": "页面全屏",
                    Send: "发送",
                    Screenshot: "截图",
                    s: "秒",
                    "Show subtitle": "显示字幕",
                    "Hide subtitle": "隐藏字幕",
                    Volume: "音量",
                    Live: "直播",
                    "Video info": "视频统计信息"
                },
               "zh-tw": {
                    "Danmaku is loading": "彈幕加載中",
                    Top: "頂部",
                    Bottom: "底部",
                    Rolling: "滾動",
                    "Input danmaku, hit Enter": "輸入彈幕，Enter 發送",
                    "About author": "關於作者",
                    "yzmplayer feedback": "播放器意見反饋",
                    "About yzmplayer": "關於 yzmplayer 播放器",
                    Loop: "循環播放",
                    Speed: "速度",
                    "Opacity for danmaku": "彈幕透明度",
                    Normal: "正常",
                    "Please input danmaku content!": "請輸入彈幕内容啊！",
                    "Set danmaku color": "設置彈幕顏色",
                    "Set danmaku type": "設置彈幕類型",
                    "Show danmaku": "顯示彈幕",
                    "This video fails to load": "視頻加載失敗",
                    "Switching to": "正在切換至",
                    "Switched to": "已經切換至",
                    quality: "畫質",
                    FF: "快進",
                    REW: "快退",
                    "Unlimited danmaku": "海量彈幕",
                    "Send danmaku": "發送彈幕",
                    Setting: "設置",
                    "Full screen": "全屏",
                    "Web full screen": "頁面全屏",
                    Send: "發送",
                    Screenshot: "截圖",
                    s: "秒",
                    "Show subtitle": "顯示字幕",
                    "Hide subtitle": "隱藏字幕",
                    Volume: "音量",
                    Live: "直播",
                    "Video info": "視頻統計信息"
                }
            };
            t.default = i
        },
        function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                s = n(2),
                r = i(s),
                l = n(32),
                c = i(l),
                u = function() {
                    function e(t) {
                        a(this, e), this.container = t.container, this.options = t.options, this.index = t.index, this.tran = t.tran, this.init()
                    }
                    return o(e, [{
                        key: "init",
                        value: function() {
                            this.container.innerHTML = (0, c.default)({
                                options: this.options,
                                index: this.index,
                                tran: this.tran,
                                icons: r.default,
                                video: {
                                    current: !0,
                                    pic: this.options.video.pic,
                                    screenshot: this.options.screenshot,
                                    preload: this.options.preload,
                                    url: this.options.video.url,
                                    subtitle: this.options.subtitle
                                }
                            }), this.volumeBar = this.container.querySelector(".yzmplayer-volume-bar-inner"), this.volumeBarWrap = this.container.querySelector(".yzmplayer-volume-bar"), this.volumeBarWrapWrap = this.container.querySelector(".yzmplayer-volume-bar-wrap"), this.volumeButton = this.container.querySelector(".yzmplayer-volume"), this.volumeIcon = this.container.querySelector(".yzmplayer-volume-icon .yzmplayer-icon-content"), this.playedBar = this.container.querySelector(".yzmplayer-played"), this.loadedBar = this.container.querySelector(".yzmplayer-loaded"), this.playedBarWrap = this.container.querySelector(".yzmplayer-bar-wrap"), this.playedBarTime = this.container.querySelector(".yzmplayer-bar-time"), this.danmaku = this.container.querySelector(".yzmplayer-danmaku"), this.danmakuLoading = this.container.querySelector(".yzmplayer-danloading"), this.video = this.container.querySelector(".yzmplayer-video-current"), this.bezel = this.container.querySelector(".yzmplayer-bezel-icon"), this.playButton = this.container.querySelector(".yzmplayer-play-icon"), this.videoWrap = this.container.querySelector(".yzmplayer-video-wrap"), this.controllerMask = this.container.querySelector(".yzmplayer-controller-mask"), this.ptime = this.container.querySelector(".yzmplayer-ptime"), this.settingButton = this.container.querySelector(".yzmplayer-setting-icon"), this.settingBox = this.container.querySelector(".yzmplayer-setting-box"), this.mask = this.container.querySelector(".yzmplayer-mask"), this.loop = this.container.querySelector(".yzmplayer-setting-loop"), this.loopToggle = this.container.querySelector(".yzmplayer-setting-loop .yzmplayer-toggle-setting-input"), this.showDanmaku = this.container.querySelector(".yzmplayer-setting-showdan"), this.showDanmakuToggle = this.container.querySelector(".yzmplayer-showdan-setting-input"), this.unlimitDanmaku = this.container.querySelector(".yzmplayer-setting-danunlimit"), this.unlimitDanmakuToggle = this.container.querySelector(".yzmplayer-danunlimit-setting-input"), this.speed = this.container.querySelector(".yzmplayer-setting-speed"), this.speedItem = this.container.querySelectorAll(".yzmplayer-setting-speed-item"), this.danmakuOpacityBar = this.container.querySelector(".yzmplayer-danmaku-bar-inner"), this.danmakuOpacityBarWrap = this.container.querySelector(".yzmplayer-danmaku-bar"), this.danmakuOpacityBarWrapWrap = this.container.querySelector(".yzmplayer-danmaku-bar-wrap"), this.danmakuOpacityBox = this.container.querySelector(".yzmplayer-setting-danmaku"), this.dtime = this.container.querySelector(".yzmplayer-dtime"), this.controller = this.container.querySelector(".yzmplayer-controller"), this.commentInput = this.container.querySelector(".yzmplayer-comment-input"), this.commentButton = this.container.querySelector(".yzmplayer-comment-icon"), this.commentSettingBox = this.container.querySelector(".yzmplayer-comment-setting-box"), this.commentSettingButton = this.container.querySelector(".yzmplayer-comment-setting-icon"), this.commentSettingFill = this.container.querySelector(".yzmplayer-comment-setting-icon path"), this.commentSendButton = this.container.querySelector(".yzmplayer-send-icon"), this.commentSendFill = this.container.querySelector(".yzmplayer-send-icon path"), this.commentColorSettingBox = this.container.querySelector(".yzmplayer-comment-setting-color"), this.browserFullButton = this.container.querySelector(".yzmplayer-full-icon"), this.webFullButton = this.container.querySelector(".yzmplayer-full-in-icon"), this.menu = this.container.querySelector(".yzmplayer-menu"), this.menuItem = this.container.querySelectorAll(".yzmplayer-menu-item"), this.qualityList = this.container.querySelector(".yzmplayer-quality-list"), this.camareButton = this.container.querySelector(".yzmplayer-camera-icon"), this.subtitleButton = this.container.querySelector(".yzmplayer-subtitle-icon"), this.subtitleButtonInner = this.container.querySelector(".yzmplayer-subtitle-icon .yzmplayer-icon-content"), this.subtitle = this.container.querySelector(".yzmplayer-subtitle"), this.qualityButton = this.container.querySelector(".yzmplayer-quality-icon"), this.barPreview = this.container.querySelector(".yzmplayer-bar-preview"), this.barWrap = this.container.querySelector(".yzmplayer-bar-wrap"), this.notice = this.container.querySelector(".yzmplayer-notice"), this.infoPanel = this.container.querySelector(".yzmplayer-info-panel"), this.infoPanelClose = this.container.querySelector(".yzmplayer-info-panel-close"), this.infoVersion = this.container.querySelector(".yzmplayer-info-panel-item-version .yzmplayer-info-panel-item-data"), this.infoFPS = this.container.querySelector(".yzmplayer-info-panel-item-fps .yzmplayer-info-panel-item-data"), this.infoType = this.container.querySelector(".yzmplayer-info-panel-item-type .yzmplayer-info-panel-item-data"), this.infoUrl = this.container.querySelector(".yzmplayer-info-panel-item-url .yzmplayer-info-panel-item-data"), this.infoResolution = this.container.querySelector(".yzmplayer-info-panel-item-resolution .yzmplayer-info-panel-item-data"), this.infoDuration = this.container.querySelector(".yzmplayer-info-panel-item-duration .yzmplayer-info-panel-item-data"), this.infoDanmakuId = this.container.querySelector(".yzmplayer-info-panel-item-danmaku-id .yzmplayer-info-panel-item-data"), this.infoDanmakuApi = this.container.querySelector(".yzmplayer-info-panel-item-danmaku-api .yzmplayer-info-panel-item-data"), this.infoDanmakuAmount = this.container.querySelector(".yzmplayer-info-panel-item-danmaku-amount .yzmplayer-info-panel-item-data")
                        }
                    }]), e
                }();
            t.default = u
        },
        function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path d="M17.982 9.275L8.06 3.27A2.013 2.013 0 005 4.994v12.011a2.017 2.017 0 003.06 1.725l9.922-6.005a2.017 2.017 0 000-3.45z"></path></svg>'
        },
        function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path d="M7 3a2 2 0 00-2 2v12a2 2 0 104 0V5a2 2 0 00-2-2zM15 3a2 2 0 00-2 2v12a2 2 0 104 0V5a2 2 0 00-2-2z"></path></svg>'
        },
        function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path d="M10.188 4.65L6 8H5a2 2 0 00-2 2v2a2 2 0 002 2h1l4.188 3.35a.5.5 0 00.812-.39V5.04a.498.498 0 00-.812-.39zM14.446 3.778a1 1 0 00-.862 1.804 6.002 6.002 0 01-.007 10.838 1 1 0 00.86 1.806A8.001 8.001 0 0019 11a8.001 8.001 0 00-4.554-7.222z"></path><path d="M15 11a3.998 3.998 0 00-2-3.465v6.93A3.998 3.998 0 0015 11z"></path></svg>'
        },
        function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path d="M10.188 4.65L6 8H5a2 2 0 00-2 2v2a2 2 0 002 2h1l4.188 3.35a.5.5 0 00.812-.39V5.04a.498.498 0 00-.812-.39zM14.446 3.778a1 1 0 00-.862 1.804 6.002 6.002 0 01-.007 10.838 1 1 0 00.86 1.806A8.001 8.001 0 0019 11a8.001 8.001 0 00-4.554-7.222z"></path><path d="M15 11a3.998 3.998 0 00-2-3.465v6.93A3.998 3.998 0 0015 11z"></path></svg>'
        },
        function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path d="M15 11a3.998 3.998 0 00-2-3.465v2.636l1.865 1.865A4.02 4.02 0 0015 11z"></path><path d="M13.583 5.583A5.998 5.998 0 0117 11a6 6 0 01-.585 2.587l1.477 1.477a8.001 8.001 0 00-3.446-11.286 1 1 0 00-.863 1.805zM18.778 18.778l-2.121-2.121-1.414-1.414-1.415-1.415L13 13l-2-2-3.889-3.889-3.889-3.889a.999.999 0 10-1.414 1.414L5.172 8H5a2 2 0 00-2 2v2a2 2 0 002 2h1l4.188 3.35a.5.5 0 00.812-.39v-3.131l2.587 2.587-.01.005a1 1 0 00.86 1.806c.215-.102.424-.214.627-.333l2.3 2.3a1.001 1.001 0 001.414-1.416zM11 5.04a.5.5 0 00-.813-.39L8.682 5.854 11 8.172V5.04z"></path></svg>'
        },
        function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" version="1.1" viewBox="0 0 1024 1024"><path class="yzmplayer-fill" style="fill:#ffffff" d="M172.76790012 458.3867064c-16.56714924 0-30.76756226-13.41150166-30.76756226-30.76756226V276.93697895C142.00033786 205.93491169 182.23484286 163.33367119 249.29235047 163.33367119h148.31542969c16.56714924 0 30.76756226 13.41150166 30.76756298 30.76756226s-13.41150166 30.76756226-30.76756298 30.76756228H250.08126254c-28.40082677 0-46.54579943 8.67803065-46.54580015 52.8570953v150.68216519c0 15.77823717-14.20041374 29.97865091-30.76756227 29.97865018z m597.99518975 441.79064149H622.44766018c-16.56714924 0-29.97865091-13.41150166-29.97865019-29.97865019s13.41150166-29.97865091 29.97865019-29.9786509h148.31542969c28.40082677 0 46.54579943-8.67803065 46.54580016-52.85709459V635.89187494c0-16.56714924 13.41150166-29.97865091 29.97865019-29.97865019s29.97865091 13.41150166 29.97865092 29.97865019v150.68216518c0.78891208 71.00206727-39.44559292 113.60330777-106.50310127 113.60330777z" id="yzmplayer-full"></path></svg>'
        },
        function(e, t) {
            e.exports = '<svg id="yemian"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path d="M18 4H4a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zM8 15.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h1a.5.5 0 01.5.5V14h1.5a.5.5 0 01.5.5v1zm0-8a.5.5 0 01-.5.5H6v1.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v1zm10 8a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H16v-1.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v3zm0-6a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V8h-1.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v3z"></path></svg><svg id="tuichuuyemian" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path d="M18 4H4a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zM8 15.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V14H4.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v3zm0-6a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H6V6.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v3zm10 4a.5.5 0 01-.5.5H16v1.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v1zm0-4a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h1a.5.5 0 01.5.5V8h1.5a.5.5 0 01.5.5v1z"></path></svg>'
        },
        function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><circle cx="11" cy="11" r="2"></circle><path d="M19.164 8.861L17.6 8.6a6.978 6.978 0 00-1.186-2.099l.574-1.533a1 1 0 00-.436-1.217l-1.997-1.153a1.001 1.001 0 00-1.272.23l-1.008 1.225a7.04 7.04 0 00-2.55.001L8.716 2.829a1 1 0 00-1.272-.23L5.447 3.751a1 1 0 00-.436 1.217l.574 1.533A6.997 6.997 0 004.4 8.6l-1.564.261A.999.999 0 002 9.847v2.306c0 .489.353.906.836.986l1.613.269a7 7 0 001.228 2.075l-.558 1.487a1 1 0 00.436 1.217l1.997 1.153c.423.244.961.147 1.272-.23l1.04-1.263a7.089 7.089 0 002.272 0l1.04 1.263a1 1 0 001.272.23l1.997-1.153a1 1 0 00.436-1.217l-.557-1.487c.521-.61.94-1.31 1.228-2.075l1.613-.269a.999.999 0 00.835-.986V9.847a.999.999 0 00-.836-.986zM11 15a4 4 0 110-8 4 4 0 010 8z"></path></svg>'
        },
        function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>'
        },
        function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" version="1.1" viewBox="0 0 1024 1024"><path class="yzmplayer-fill" style="fill:#ffffff" d="M634.307692 358.53846172H341.23076914c-24.23076943 0-45-19.61538487-45-45S315.84615401 269.69230742 341.23076914 269.69230742h293.07692285c24.23076943 0 43.84615342 19.61538487 43.84615429 45s-19.61538487 43.84615342-43.84615429 43.8461543z m-74.99999971 159.23076943c0-24.23076943-19.61538487-45-45-45H328.53846113c-24.23076943 0-45 19.61538487-45 45s19.61538487 45 45 45h186.92307773c24.23076943-1.15384658 43.84615342-20.76923057 43.84615343-45zM520.07692344 835.07692344c0-23.07692285-18.46153828-42.69230771-42.69230772-42.69230771H252.38461573c-54.23076914 0-96.92307685-47.30769229-96.92307686-106.15384688v-426.92307627c0-58.84615371 43.84615342-106.15384599 96.92307685-106.153846h630c54.23076914 0 96.92307685 47.30769229 96.92307686 106.153846v94.61538456c0 23.07692285 18.46153828 42.69230771 42.69230771 42.69230773s42.69230771-18.46153828 42.69230772-42.69230773v-94.61538456C1064.69230801 154.30769229 982.76923057 68.92307685 882.38461573 68.92307685H252.38461573C153.15384658 68.92307685 71.23076914 154.30769229 71.23076914 259.30769258v428.07692285c0 105.00000029 81.92307656 190.38461573 181.15384658 190.38461572H477.38461573c24.23076943 0 42.69230771-19.61538487 42.69230771-42.69230771z m323.07692255-521.53846172c0-27.69230742-23.07692285-50.76923115-50.76923026-50.76923115s-50.76923115 23.07692285-50.76923116 50.76923115 23.07692285 50.76923115 50.76923116 50.76923028c28.84615401 0 50.76923115-23.07692285 50.76923026-50.76923028m255.00000059 377.3076917c0-148.84615372-121.15384629-270-268.84615429-270S559.30769229 541.99999971 559.30769229 690.84615342s121.15384629 268.84615342 270 268.84615429 268.84615342-119.99999971 268.84615429-268.84615429z m-87.69230772 0c0 99.23076914-80.76923086 181.15384658-181.15384657 181.15384658s-181.15384658-80.76923086-181.15384571-181.15384658 80.76923086-180 181.15384571-180 181.15384658 80.76923086 181.15384657 180z m-167.30769287 114.23076944l170.76923086-184.61538458c15.00000029-16.15384599 13.84615371-41.53846114-2.30769228-56.53846143-16.15384599-15.00000029-41.53846114-13.84615371-56.53846142 2.30769229L807.38461513 724.307692 731.23076885 672.38461513c-18.46153828-12.69230801-42.69230771-8.07692344-55.38461484 10.38461573-12.69230801 18.46153828-8.07692344 42.69230771 10.38461484 55.38461572l106.15384687 72.69230743c6.92307685 4.61538457 15.00000029 6.92307685 23.07692285 6.92307685 9.23076914 0 19.61538487-4.61538457 27.69230742-12.69230801z" id="yzmplayer-comment"></path></svg>'
        },
        function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z"></path></svg>'
        },
        function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1048 1024"><path d="M675.48206831 405.43059956c-21.34102395 0-38.61709113-17.27606717-38.61709114-38.61709114 0-21.34102395 17.27606717-38.61709113 38.61709113-38.6170903s38.61709113 17.27606717 38.6170903 38.6170903c0 21.34102395-17.27606717 38.61709113-38.6170903 38.61709114M825.88547437 93.44515543c-1.0162392 0-3.04871759 1.0162392-4.06495679 1.0162392L171.42740857 347.50496286c-32.51965512 9.14615277-57.92563586 35.56837271-67.07178864 68.08802865-9.14615277 34.55213351 0 69.10426785 25.40598074 94.5102486 5.08119598 5.08119598 11.17863116 8.12991357 18.29230555 10.1623928L284.22996353 557.86648401l104.67264139 30.48717673c48.77948309-45.7307655 144.30597089-134.14357891 159.54955883-148.37092768 15.24358878-15.24358878 39.63333032-15.24358878 54.87691911 0 15.24358878 15.24358878 15.24358878 39.63333032 0 54.87691911-18.29230637 18.29230637-132.11110052 123.98118613-157.51708127 147.35468847L498.65644147 883.06303852c2.03247839 7.11367438 5.08119598 14.22734958 10.16239279 19.30854556 18.29230637 18.29230637 42.68204792 28.45469834 69.10426703 28.45469833 8.12991357 0 17.27606717-1.0162392 25.40598157-3.04871759 33.53589431-9.14615277 58.94187506-33.53589431 68.08802783-66.05555026L943.76922531 218.44258075c1.0162392-2.03247839 1.0162392-3.04871759 2.0324784-5.08119598 9.14615277-34.55213351 0-69.10426785-25.40598074-94.5102486C894.98974222 94.46139462 860.43760788 84.29900183 825.88547437 93.44515543z"></path></svg>'
        },
        function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path d="M16.5 8c1.289 0 2.49.375 3.5 1.022V6a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2h7.022A6.5 6.5 0 0116.5 8zM7 13H5a1 1 0 010-2h2a1 1 0 010 2zm2-4H5a1 1 0 010-2h4a1 1 0 010 2z"></path><path d="M20.587 13.696l-.787-.131a3.503 3.503 0 00-.593-1.051l.301-.804a.46.46 0 00-.21-.56l-1.005-.581a.52.52 0 00-.656.113l-.499.607a3.53 3.53 0 00-1.276 0l-.499-.607a.52.52 0 00-.656-.113l-1.005.581a.46.46 0 00-.21.56l.301.804c-.254.31-.456.665-.593 1.051l-.787.131a.48.48 0 00-.413.465v1.209a.48.48 0 00.413.465l.811.135c.144.382.353.733.614 1.038l-.292.78a.46.46 0 00.21.56l1.005.581a.52.52 0 00.656-.113l.515-.626a3.549 3.549 0 001.136 0l.515.626a.52.52 0 00.656.113l1.005-.581a.46.46 0 00.21-.56l-.292-.78c.261-.305.47-.656.614-1.038l.811-.135A.48.48 0 0021 15.37v-1.209a.48.48 0 00-.413-.465zM16.5 16.057a1.29 1.29 0 11.002-2.582 1.29 1.29 0 01-.002 2.582z"></path></svg>'
        },
        function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z"></path></svg>'
        },
        function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>'
        },
        function(e, t) {
            e.exports = '<svg version="1.1" viewBox="0 0 22 22"><svg x="7" y="1"><circle class="diplayer-loading-dot diplayer-loading-dot-0" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-1" cx="4" cy="4" r="2"></circle></svg><svg x="13" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-2" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-3" cx="4" cy="4" r="2"></circle></svg><svg x="7" y="13"><circle class="diplayer-loading-dot diplayer-loading-dot-4" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-5" cx="4" cy="4" r="2"></circle></svg><svg x="1" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-6" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-7" cx="4" cy="4" r="2"></circle></svg></svg>'
        },
        function(e, t, n) {
            var i = n(3);
            e.exports = function(e) {
                "use strict";
                e = e || {};
                var t = "",
                    a = (arguments[1], e.video),
                    o = e.options,
                    s = i.$escape,
                    r = e.tran,
                    l = e.icons,
                    c = e.index,
                    u = i.$each;
                e.$value, e.$index;
                return t += '<div id="loading-box"><div class="loading"><p class="pic"></p><div class="tips"></div></div><div type="button" id="close" ><span id="link1">播放器已连接</span><span id="link2">弹幕正在连接中</span><span id="link2-success">弹幕已填装完毕</span><span id="link2-error">弹幕连接失败</span><span id="link3"><e id="link3_tip">等待视频连接中</e><!--d class="wait"><e id="span">3</e>s</d--></span></div></div><div class="yzmplayer-mask"></div>\n<div class="yzmplayer-cplayer"><div class="yzmplayer-showing"><svg aria-hidden="true"><use xlink:href="#icon-play"></use></svg></div></div><div class="yzmplayer-video-wrap">\n    ',
                    function(e) {
                        t += e
                    }(n(4)(a)), t += "\n    ", o.logo && (t += '\n    <div class="yzmplayer-logo">\n        <img src="', t += s(o.logo), t += '">\n    </div>\n    '), t += '\n    <div class="yzmplayer-danmaku"', o.danmaku && o.danmaku.bottm && (t += ' style="margin-bottom:', t += s(o.danmaku.bottm), t += '"'), t += '>\n        <div class="yzmplayer-danmaku-item yzmplayer-danmaku-item--demo"></div>\n    </div>\n    <div class="yzmplayer-subtitle"></div>\n    <div class="yzmplayer-bezel">\n        <span class="yzmplayer-bezel-icon"></span>\n        ', o.danmaku && (t += '\n        <span class="yzmplayer-danloading">', t += s(r("Danmaku is loading")), t += "</span>\n        "), t += '\n        <span class="diplayer-loading-icon">', t += l.loading, t += '</span>\n    </div>\n</div>\n<div class="yzmplayer-controller-mask"></div>\n<div class="yzmplayer-controller">\n  <div class="controller-box">\n   <div class="yzmplayer-icons yzmplayer-icons-left">\n        <button class="yzmplayer-icon yzmplayer-play-icon">\n            <span class="yzmplayer-icon-content">', t += l.play, t += '</span>\n        </button>\n    <button onclick="video_next();" class="yzmplayer-icon  icon-xj" data-balloon="下一集" data-balloon-pos="up">\n<span class="yzmplayer-icon-content"><svg aria-hidden="true" fill="#fff"><use xlink:href="#icon-play-xj"></use></svg></span></button>\n    <div class="yzmplayer-volume">\n            <button class="yzmplayer-icon yzmplayer-volume-icon">\n                <span class="yzmplayer-icon-content">', t += l.volumeDown, t += '</span>\n            </button>\n            <div class="yzmplayer-volume-bar-wrap" data-balloon-pos="up">\n                <div class="yzmplayer-volume-bar">\n                    <div class="yzmplayer-volume-bar-inner" style="background: ', t += s(o.theme), t += ';">\n                        <span class="yzmplayer-thumb" style="background: ', t += s(o.theme), t += '"></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <span class="yzmplayer-time">\n            <span class="yzmplayer-ptime">0:00</span> /\n            <span class="yzmplayer-dtime">0:00</span>\n        </span>\n        ', o.live && (t += '\n        <span class="yzmplayer-live-badge"><span class="yzmplayer-live-dot" style="background: ', t += s(o.theme), t += ';"></span>', t += s(r("Live")), t += "</span>\n        "), t += '\n    </div>\n    <div class="yzmplayer-icons yzmplayer-icons-right">\n        ', o.video.quality && (t += '\n        <div class="yzmplayer-quality">\n            <button class="yzmplayer-icon yzmplayer-quality-icon">', t += s(o.video.quality[o.video.defaultQuality].name), t += '</button>\n            <div class="yzmplayer-quality-mask">\n                <div class="yzmplayer-quality-list"></div>\n                ', u(o.video.quality, function(e, n) {
                        t += '\n                    <div class="yzmplayer-quality-item" data-index="', t += s(n), t += '">', t += s(e.name), t += "</div>\n                "
                    }), t += "\n                </div>\n            </div>\n        </div>\n        "), t += "\n        ", o.screenshot && (t += '\n        <a href="#" class="yzmplayer-icon yzmplayer-camera-icon" data-balloon="', t += s(r("Screenshot")), t += '" data-balloon-pos="up">\n            <span class="yzmplayer-icon-content">', t += l.camera, t += "</span>\n        </a>\n        "), t += '\n        <div class="yzmplayer-comment">\n            <button class="yzmplayer-icon yzmplayer-comment-icon" data-balloon="', t += s(r("Send danmaku")), t += '" data-balloon-pos="up">\n                <span class="yzmplayer-icon-content">', t += l.comment, t += "</span>\n            </button>\n        </div>\n        ", o.subtitle && (t += '\n        <div class="yzmplayer-subtitle-btn">\n            <button class="yzmplayer-icon yzmplayer-subtitle-icon" data-balloon="', t += s(r("Hide subtitle")), t += '" data-balloon-pos="up">\n                <span class="yzmplayer-icon-content">', t += l.subtitle, t += "</span>\n            </button>\n        </div>\n        "), t += '\n        <div class="yzmplayer-setting"><button class="yzmplayer-icon yzmplayer-setting-speeds "data-balloon="速度"data-balloon-pos="up"><span class="yzmplayer-label title">倍速</span><div class="yzmplayer-setting-speed-panel speed-stting"><div class="yzmplayer-setting-speed-item"data-speed="0.5"><span class="yzmplayer-label">0.5x</span></div><div class="yzmplayer-setting-speed-item"data-speed="0.75"><span class="yzmplayer-label">0.75x</span></div><div class="yzmplayer-setting-speed-item"data-speed="1"><span class="yzmplayer-label">正常</span></div><div class="yzmplayer-setting-speed-item"data-speed="1.25"><span class="yzmplayer-label">1.25x</span></div><div class="yzmplayer-setting-speed-item"data-speed="1.5"><span class="yzmplayer-label">1.5x</span></div><div class="yzmplayer-setting-speed-item"data-speed="2"><span class="yzmplayer-label">2.0x</span></div></div></button><button class="yzmplayer-icon yzmplayer-list-icon" data-balloon="弹幕列表" data-balloon-pos="up"><span class="yzmplayer-icon-content"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" version="1.1" viewBox="0 0 32 32"><path class="yzmplayer-fill" style="fill:#ffffff" d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z" id="yzmplayer-full-in"></path></svg></span></button>\n            <button class="yzmplayer-icon yzmplayer-setting-icon" data-balloon="', t += s(r("Setting")), t += '" data-balloon-pos="up">\n                <span class="yzmplayer-icon-content">', t += l.setting, t += '</span>\n            </button>\n            <div class="yzmplayer-setting-box">\n                <div class="yzmplayer-setting-origin-panel">\n                    <div class="yzmplayer-setting-item yzmplayer-setting-speed">\n                        <span class="yzmplayer-label">', t += s(r("Speed")), t += '</span>\n                        <div class="yzmplayer-toggle">', t += l.right, t += '</div>\n                    </div>\n                    <div class="yzmplayer-setting-item yzmplayer-setting-loop">\n                        <span class="yzmplayer-label">', t += s(r("Loop")), t += '</span>\n                        <div class="yzmplayer-toggle">\n                            <input class="yzmplayer-toggle-setting-input" type="checkbox" name="yzmplayer-toggle">\n                            <label for="yzmplayer-toggle"></label>\n                        </div>\n                    </div>\n             </div>\n                <div class="yzmplayer-setting-speed-panel">\n                    <div class="yzmplayer-setting-speed-item" data-speed="0.5">\n                        <span class="yzmplayer-label">0.5</span>\n                    </div>\n                    <div class="yzmplayer-setting-speed-item" data-speed="0.75">\n                        <span class="yzmplayer-label">0.75</span>\n                    </div>\n                    <div class="yzmplayer-setting-speed-item" data-speed="1">\n                        <span class="yzmplayer-label">', t += s(r("Normal")), t += '</span>\n                    </div>\n                    <div class="yzmplayer-setting-speed-item" data-speed="1.25">\n                        <span class="yzmplayer-label">1.25</span>\n                    </div>\n                    <div class="yzmplayer-setting-speed-item" data-speed="1.5">\n                        <span class="yzmplayer-label">1.5</span>\n                    </div>\n                    <div class="yzmplayer-setting-speed-item" data-speed="2">\n                        <span class="yzmplayer-label">2</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="yzmplayer-full">\n            <button class="yzmplayer-icon yzmplayer-full-in-icon" data-balloon="', t += s(r("Web full screen")), t += '" data-balloon-pos="up">\n                <span class="yzmplayer-icon-content">', t += l.fullWeb, t += '</span>\n            </button>\n            <button class="yzmplayer-icon yzmplayer-full-icon" data-balloon="', t += s(r("Full screen")), t += '" data-balloon-pos="up">\n                <span class="yzmplayer-icon-content">', t += l.full, t += '</span>\n            </button><button class="yzmplayer-icon yzmplayer-fulloff-icon" data-balloon="退出全屏" data-balloon-pos="up"><span class="yzmplayer-icon-content"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" version="1.1" viewBox="0 0 1024 1024"><path class="yzmplayer-fill" style="fill:#ffffff" d="M308.3555518 432.05693128H150.1524268c-17.67162586 0-32.81873308-14.30560177-32.81873308-32.81873308s14.30560177-32.81873308 32.81873308-32.81873309h158.203125c30.29421522 0 49.64885273-9.25656603 49.6488535-56.38090166V150.1524268c0-17.67162586 14.30560177-32.81873308 32.81873308-32.81873308s32.81873308 14.30560177 32.81873309 32.81873308v160.72764287c-0.84150622 75.73553842-43.75831155 121.17686162-115.28631967 121.17686161z m321.45528573 471.24335092c-17.67162586 0-31.97722764-14.30560177-31.97722687-31.97722687V709.75390625c0-75.73553842 42.91680533-121.17686162 114.44481346-121.17686162h158.203125c17.67162586 0 31.97722764 14.30560177 31.97722763 31.97722764s-14.30560177 31.97722764-31.97722763 31.97722687H712.27842412c-30.29421522 0-49.64885273 9.25656603-49.64885273 56.38090089v160.72764287c-0.84150622 18.51313131-15.14710799 33.6602393-32.81873386 33.6602393z" id="yzmplayer-fulloff"></path></svg></span></button>\n        </div>\n    </div>\n    <div class="yzmplayer-bar-wrap">\n        <div class="yzmplayer-bar-time hidden">00:00</div>\n        <div class="yzmplayer-bar-preview"></div>\n        <div class="yzmplayer-bar">\n            <div class="yzmplayer-loaded" style="width: 0;"></div>\n            <div class="yzmplayer-played" style="width: 0; background: ', t += s(o.theme), t += '">\n                <span class="yzmplayer-thumb" style="background: ', t += s(o.theme), t += '"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);"><defs><clipPath id="__lottie_element_25"><rect width="18" height="18" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_25)"><g transform="matrix(1,0,0,1,8.937000274658203,8.25)" opacity="0.14" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0.07500000298023224,1.2130000591278076)"><path fill="rgb(251,114,153)" fill-opacity="1" d=" M9,-3.5 C9,-3.5 9,3.5 9,3.5 C9,5.707600116729736 7.207600116729736,7.5 5,7.5 C5,7.5 -5,7.5 -5,7.5 C-7.207600116729736,7.5 -9,5.707600116729736 -9,3.5 C-9,3.5 -9,-3.5 -9,-3.5 C-9,-5.707600116729736 -7.207600116729736,-7.5 -5,-7.5 C-5,-7.5 5,-7.5 5,-7.5 C7.207600116729736,-7.5 9,-5.707600116729736 9,-3.5z"></path></g></g><g transform="matrix(1,0,0,1,9.140999794006348,8.67199993133545)" opacity="0.28" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,-0.1509999930858612,0.7990000247955322)"><path fill="rgb(251,114,153)" fill-opacity="1" d=" M8,-3 C8,-3 8,3 8,3 C8,4.931650161743164 6.431650161743164,6.5 4.5,6.5 C4.5,6.5 -4.5,6.5 -4.5,6.5 C-6.431650161743164,6.5 -8,4.931650161743164 -8,3 C-8,3 -8,-3 -8,-3 C-8,-4.931650161743164 -6.431650161743164,-6.5 -4.5,-6.5 C-4.5,-6.5 4.5,-6.5 4.5,-6.5 C6.431650161743164,-6.5 8,-4.931650161743164 8,-3z"></path></g></g><g transform="matrix(0.9883429408073425,-0.7275781631469727,0.6775955557823181,0.920446515083313,7.3224687576293945,-0.7606706619262695)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(0.9937776327133179,-0.11138220876455307,0.11138220876455307,0.9937776327133179,-2.5239999294281006,1.3849999904632568)"><path fill="rgb(0,0,0)" fill-opacity="1" d=" M0.75,-1.25 C0.75,-1.25 0.75,1.25 0.75,1.25 C0.75,1.663925051689148 0.4139249920845032,2 0,2 C0,2 0,2 0,2 C-0.4139249920845032,2 -0.75,1.663925051689148 -0.75,1.25 C-0.75,1.25 -0.75,-1.25 -0.75,-1.25 C-0.75,-1.663925051689148 -0.4139249920845032,-2 0,-2 C0,-2 0,-2 0,-2 C0
