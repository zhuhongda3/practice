!
function (e) {
	var t;
	t = function () {
		function t(t, a) {
			this.settings = e.extend({}, e.fn.keyboard.defaults, a), this.$element = e(t), this.init()
		}
		return t.prototype = {
			init: function () {
				this.$element.addClass("keyboard"), this.$element.append(e("<div />", {
					name: name
				}).addClass("keyboard-toolbar")), this.$element.append(e("<div />", {
					name: name
				}).addClass("keyboard-wrapper")), this.$element_toolbar = e(".keyboard-toolbar", this.$element), this.$element_wrapper = e(".keyboard-wrapper", this.$element), this.$element_toolbar.append(e("<a />", {
					text: this.settings.lang.close,
					href: "javascript:$.fn.keyboard.lookup[" + this.$element.data("keyboard") + "].close()"
				}).addClass("keyboard-toolbar-item"));
				var t = this;
				e.each(this.settings.keyset, function (e, a) {
					t._addLayout(e, a)
				}), this.$element.focusout(function () {
					setTimeout(function () {
						t.$element[0].contains(e(":focus")[0]) || t.settings.focusout()
					}, 0)
				})
			},
			close: function () {
				this.$element.hide(), this.settings.hide(),$(".weui-flex__item").removeClass("active")
			},
			switchTo: function (t, a) {
				if (this.$element.is(":visible") || this.$element.show(), void 0 != this.settings.currentKeyset) {
					if (this.settings.currentKeyset == t) return this.$element.is(":visible") || this.$element.focus(), "function" == typeof a && a(this, t), this;
					e("div[name=" + this.settings.currentKeyset + "]", this.$element_wrapper).hide()
				}
				e("div[name=" + t + "]", this.$element_wrapper).show();
				return this.settings.currentKeyset = t, this.$element.focus(), this.settings.show(), "function" == typeof a && a(this, t), this
			},
			disableKeys: function (t, a) {
				var n = e("div[name=" + t + "]", this.$element);
				if (e(".keyboard-button", n).removeAttr("disabled"), void 0 == a || 0 == a.length) return this;
				for (var o = 0; o < a.length; o++) e('.keyboard-button[value="' + a[o] + '"]', n).attr("disabled", "true");
				return this
			},
			onKeyup: function (e) {
				return this.settings.onKeyup = e, this
			},
			onDelete: function (e) {
				return this.settings.onDelete = e, this
			},
			_keyup: function (e, t) {
				this.settings.onKeyup({
					label: e,
					val: t
				})
			},
			_delete: function () {
				this.settings.onDelete()
			},
			
			_addLayout: function (t, a) {
				var n = e("<div />", {
						name: t
					}).addClass("keyboard-keyset").hide(),
					o = this;
				e.each(a, function (t, a) {
					if (void 0 != a.type) {
						if ("newline" == a.type) return void n.append("<br/>");
						"delete" == a.type ? n.append(e("<a />", {
							href: "javascript:$.fn.keyboard.lookup[" + o.$element.data("keyboard") + "]._delete()",
							value: "delete",
							tabindex: -1
						}).addClass("keyboard-button").addClass("keyboard-action-button").addClass("keyboard-action-delete").append(e("<span />", {
							text: " "
						}).addClass("keyboard-text"))) : "placeholder" == a.type && n.append(e("<a />", {
							href: "javascript:void(0)",
							tabindex: -1
						}).addClass("keyboard-button").addClass("keyboard-action-button").addClass("keyboard-action-placeholder").append(e("<span />", {
							text: " "
						}).addClass("keyboard-text")))
						//switch keyboard
						"switch1" == a.type?n.append(e("<a />", {
							href: "javascript:switchKeyBoard(1);",
							value: "switch1",
							tabindex: -1
						}).addClass("keyboard-button").addClass("keyboard-action-button").addClass("keyboard-action-switch").addClass("keyboard-action-switch1").append(e("<span />", {
							text: ""
						}).addClass("keyboard-text"))):""
						"switch2" == a.type?n.append(e("<a />", {
							href: "javascript:switchKeyBoard(2);",
							value: "switch2",
							tabindex: -1
						}).addClass("keyboard-button").addClass("keyboard-action-button").addClass("keyboard-action-switch").append(e("<span />", {
							text: ""
						}).addClass("keyboard-text"))):""
					}else{
						n.append(e("<a />", {
							href: "javascript:$.fn.keyboard.lookup[" + o.$element.data("keyboard") + "]._keyup('" + a.label + "', '" + a.val + "')",
							value: a.val,
							tabindex: -1
						}).addClass("keyboard-button").append(e("<span />", {
							text: a.label
						}).addClass("keyboard-text")).append(e("<span />", {
							text: a.label
						}).addClass("keyboard-text-hover")))
					}
				}), this.$element_wrapper.append(n)
			}
		}, t
	}(), e.fn.keyboard = function (a) {
		return this.each(function () {
			var n = e(this),
				o = e.fn.keyboard.lookup[n.data("keyboard")];
			o || (n.data("keyboard", ++e.fn.keyboard.lookup.i), e.fn.keyboard.lookup[e.fn.keyboard.lookup.i] = new t(this, a), o = e.fn.keyboard.lookup[n.data("keyboard")]), "string" == typeof a && o[a]()
		})
	}, e.Keyboard = function (t) {
		return e.fn.keyboard.lookup[e(t).data("keyboard")]
	}, e.fn.keyboard.lookup = {
		i: 0
	}, e.fn.keyboard.defaults = {
		keyset: {},
		lang: {
			close: "关闭"
		},
		currentKeyset: void 0,
		show: function () {},
		hide: function () {},
		focusout: function () {}
	}
}(window.jQuery || window.Zepto || window.$);