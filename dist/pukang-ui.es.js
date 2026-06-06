import { Fragment as e, Teleport as t, Transition as n, computed as r, createBlock as i, createCommentVNode as a, createElementBlock as o, createElementVNode as s, createTextVNode as c, createVNode as l, mergeProps as u, nextTick as d, normalizeClass as f, normalizeStyle as p, onBeforeUnmount as m, onMounted as h, openBlock as g, ref as _, render as v, renderList as y, renderSlot as b, resolveComponent as x, resolveDynamicComponent as S, toDisplayString as C, useCssVars as w, useSlots as T, vModelText as E, watch as D, withCtx as O, withDirectives as k, withModifiers as A } from "vue";
//#region \0rolldown/runtime.js
var j = Object.defineProperty, M = (e, t) => {
	let n = {};
	for (var r in e) j(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || j(n, Symbol.toStringTag, { value: "Module" }), n;
}, N = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, P = /* @__PURE__ */ M({ default: () => I }), F = { class: "pk-aside" }, I = /* @__PURE__ */ N(/* @__PURE__ */ Object.assign({ name: "PkAside" }, {
	props: { width: {
		type: String,
		default: "200px"
	} },
	setup(e) {
		return w((t) => ({ v3bd1b8f2: e.width })), (e, t) => (g(), o("aside", F, [b(e.$slots, "default", {}, void 0, !0)]));
	}
}), [["__scopeId", "data-v-c8a03de9"]]), L = /* @__PURE__ */ M({ default: () => z }), R = ["disabled"], z = /* @__PURE__ */ N(/* @__PURE__ */ Object.assign({ name: "PkButton" }, {
	props: {
		size: {
			type: String,
			default: ""
		},
		round: {
			type: String,
			default: ""
		},
		type: {
			type: String,
			default: "default"
		},
		plain: {
			type: String,
			default: ""
		},
		disable: {
			type: String,
			default: ""
		},
		circle: {
			type: String,
			default: ""
		}
	},
	setup(e) {
		let t = e, n = r(() => t.disable === "disable"), i = r(() => [
			t.size && `pk-button--${t.size}`,
			t.round && "pk-button--round",
			t.plain && "pk-button--plain",
			t.type && `pk-button--${t.type}`,
			t.disable && "pk-button--disable",
			t.circle && "pk-button--circle"
		].filter(Boolean));
		return (e, t) => (g(), o("button", {
			class: f(["pk-button", i.value]),
			disabled: n.value
		}, [b(e.$slots, "default", {}, void 0, !0)], 10, R));
	}
}), [["__scopeId", "data-v-d9da28af"]]), B = /* @__PURE__ */ M({ default: () => U }), V = ["value", "disabled"], H = { class: "pk-checkbox__name" }, U = /* @__PURE__ */ N(/* @__PURE__ */ Object.assign({ name: "PkCheckbox" }, {
	props: {
		labelName: {
			type: String,
			default: ""
		},
		modelValue: {
			type: Boolean,
			default: !1
		},
		disabled: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["toggleCheck"],
	setup(e, { emit: t }) {
		let n = t, r = e, i = _(r.modelValue);
		D(() => r.modelValue, (e) => {
			i.value = e;
		});
		let a = () => {
			i.value = !i.value, n("toggleCheck", r.labelName, i.value), n("update:modelValue", i.value);
		};
		return (t, n) => (g(), o("div", {
			class: f(["pk-checkbox", { disabled: e.disabled }]),
			onClick: a
		}, [
			s("label", { class: f(["pk-checkbox__box", [{ checked: i.value }]]) }, null, 2),
			s("input", {
				type: "checkbox",
				class: "pk-checkbox__input",
				checked: "",
				value: e.labelName,
				disabled: e.disabled
			}, null, 8, V),
			s("label", H, C(e.labelName), 1)
		], 2));
	}
}), [["__scopeId", "data-v-b8b42a0b"]]), W = /* @__PURE__ */ M({ default: () => G }), G = /* @__PURE__ */ N(/* @__PURE__ */ Object.assign({ name: "PkContainer" }, {
	__name: "index",
	props: { padding: {
		type: String,
		default: "0px"
	} },
	setup(e) {
		let t = T(), n = r(() => t.default ? t.default().map((e) => (e.type?.name || e.type?.__name || "").toLowerCase()) : []), i = r(() => n.value.includes("pkheader") || n.value.includes("pk-header") || n.value.includes("pkfooter") || n.value.includes("pk-footer"));
		return (t, n) => (g(), o("section", {
			class: f(["pk-container", { is_container: i.value }]),
			style: p({ padding: e.padding })
		}, [b(t.$slots, "default", {}, void 0, !0)], 6));
	}
}), [["__scopeId", "data-v-be4ff647"]]), K = /* @__PURE__ */ M({ default: () => ae }), ee = { class: "pk-date-picker__prefix" }, te = [
	"type",
	"value",
	"placeholder",
	"disabled",
	"step"
], ne = [
	"type",
	"value",
	"placeholder",
	"disabled",
	"step"
], re = [
	"type",
	"value",
	"placeholder",
	"disabled",
	"step"
], ie = { class: "pk-date-picker__suffix" }, ae = /* @__PURE__ */ N(/* @__PURE__ */ Object.assign({ name: "PkDatePicker" }, {
	__name: "index",
	props: {
		modelValue: {
			type: [String, Array],
			default: ""
		},
		type: {
			type: String,
			default: "date",
			validator: (e) => [
				"date",
				"time",
				"datetime-local"
			].includes(e)
		},
		placeholder: {
			type: String,
			default: "请选择时间"
		},
		startPlaceholder: {
			type: String,
			default: "开始时间"
		},
		endPlaceholder: {
			type: String,
			default: "结束时间"
		},
		width: {
			type: String,
			default: "240px"
		},
		step: {
			type: [String, Number],
			default: void 0
		},
		range: {
			type: Boolean,
			default: !1
		},
		disabled: {
			type: Boolean,
			default: !1
		}
	},
	emits: [
		"update:modelValue",
		"input",
		"change",
		"start-change",
		"end-change"
	],
	setup(t, { emit: n }) {
		let i = t, a = n, c = _(null), l = _(null), u = _(null), d = r(() => Array.isArray(i.modelValue) ? [i.modelValue[0] || "", i.modelValue[1] || ""] : ["", ""]), m = r(() => ({
			date: "日期",
			time: "时间",
			"datetime-local": "日期时间"
		})[i.type] || "时间"), h = r(() => i.range ? `${m.value}段` : m.value), v = r(() => i.type === "time" ? "fa fa-clock-o" : "fa fa-calendar-o"), y = (e) => {
			e?.focus(), e?.showPicker?.();
		}, b = () => {
			i.disabled || y(i.range ? l.value : c.value);
		}, x = (e) => {
			let t = e.target.value;
			a("update:modelValue", t), a("input", t);
		}, S = (e) => {
			a("change", e.target.value);
		}, w = (e, t) => {
			let n = [...d.value];
			n[e] = t.target.value, a("update:modelValue", n), a("input", n), a(e === 0 ? "start-change" : "end-change", t.target.value, n);
		}, T = () => {
			a("change", [...d.value]);
		};
		return (n, r) => (g(), o("div", {
			class: f(["pk-date-picker", {
				"is-disabled": t.disabled,
				"is-range": t.range
			}]),
			style: p({ width: t.width }),
			onClick: b
		}, [
			s("span", ee, [s("i", {
				class: f(v.value),
				"aria-hidden": "true"
			}, null, 2)]),
			t.range ? (g(), o(e, { key: 0 }, [
				s("input", {
					ref_key: "startInputRef",
					ref: l,
					class: "pk-date-picker__inner",
					type: t.type,
					value: d.value[0],
					placeholder: t.startPlaceholder,
					disabled: t.disabled,
					step: t.step,
					onInput: r[0] ||= (e) => w(0, e),
					onChange: T
				}, null, 40, te),
				r[2] ||= s("span", { class: "pk-date-picker__separator" }, "至", -1),
				s("input", {
					ref_key: "endInputRef",
					ref: u,
					class: "pk-date-picker__inner",
					type: t.type,
					value: d.value[1],
					placeholder: t.endPlaceholder,
					disabled: t.disabled,
					step: t.step,
					onInput: r[1] ||= (e) => w(1, e),
					onChange: T
				}, null, 40, ne)
			], 64)) : (g(), o("input", {
				key: 1,
				ref_key: "inputRef",
				ref: c,
				class: "pk-date-picker__inner",
				type: t.type,
				value: t.modelValue,
				placeholder: t.placeholder,
				disabled: t.disabled,
				step: t.step,
				onInput: x,
				onChange: S
			}, null, 40, re)),
			s("span", ie, C(h.value), 1)
		], 6));
	}
}), [["__scopeId", "data-v-3ee01817"]]), oe = /* @__PURE__ */ M({ default: () => de }), se = { class: "pk-dialog__header" }, ce = { class: "pk-dialog__title" }, le = { class: "pk-dialog__body" }, ue = {
	key: 0,
	class: "pk-dialog__footer"
}, de = /* @__PURE__ */ Object.assign({ name: "PkDialog" }, {
	__name: "index",
	props: {
		modelValue: {
			type: Boolean,
			default: !1
		},
		title: {
			type: String,
			default: "提示"
		},
		width: {
			type: String,
			default: "420px"
		},
		closeOnClickMask: {
			type: Boolean,
			default: !0
		},
		showClose: {
			type: Boolean,
			default: !0
		}
	},
	emits: [
		"update:modelValue",
		"open",
		"close"
	],
	setup(e, { emit: r }) {
		let c = e, u = r, d = () => {
			u("update:modelValue", !1), u("close");
		}, f = () => {
			c.closeOnClickMask && d();
		};
		return (r, c) => (g(), i(t, { to: "body" }, [l(n, { name: "pk-dialog-fade" }, {
			default: O(() => [e.modelValue ? (g(), o("div", {
				key: 0,
				class: "pk-dialog__mask",
				onClick: f
			}, [s("div", {
				class: "pk-dialog",
				style: p({ width: e.width }),
				onClick: c[0] ||= A(() => {}, ["stop"])
			}, [
				s("div", se, [s("span", ce, C(e.title), 1), e.showClose ? (g(), o("button", {
					key: 0,
					class: "pk-dialog__close",
					type: "button",
					onClick: d
				}, [...c[1] ||= [s("i", {
					class: "fa fa-times",
					"aria-hidden": "true"
				}, null, -1)]])) : a("", !0)]),
				s("div", le, [b(r.$slots, "default")]),
				r.$slots.footer ? (g(), o("div", ue, [b(r.$slots, "footer")])) : a("", !0)
			], 4)])) : a("", !0)]),
			_: 3
		})]));
	}
}), fe = /* @__PURE__ */ M({ default: () => _e }), pe = {
	class: "pk-dropdown__button",
	type: "button"
}, me = {
	key: 0,
	class: "pk-dropdown__menu"
}, he = {
	key: 0,
	class: "pk-dropdown__divider"
}, ge = ["disabled", "onClick"], _e = /* @__PURE__ */ N(/* @__PURE__ */ Object.assign({ name: "PkDropdown" }, {
	__name: "index",
	props: {
		options: {
			type: Array,
			default: () => []
		},
		triggerText: {
			type: String,
			default: "下拉菜单"
		},
		trigger: {
			type: String,
			default: "click",
			validator: (e) => ["click", "hover"].includes(e)
		},
		hideOnClick: {
			type: Boolean,
			default: !0
		}
	},
	emits: ["command", "visible-change"],
	setup(t, { emit: r }) {
		let i = t, u = r, d = _(null), p = _(!1), v = null, x = (e) => {
			p.value = e, u("visible-change", e);
		}, S = () => {
			v &&= (clearTimeout(v), null);
		}, w = () => {
			x(!p.value);
		}, T = () => {
			S(), p.value && x(!1);
		}, E = () => {
			i.trigger === "click" && w();
		}, D = () => {
			i.trigger === "hover" && (S(), x(!0));
		}, k = () => {
			i.trigger === "hover" && (S(), v = setTimeout(T, 120));
		}, A = (e) => {
			e.disabled || (u("command", e.command, e), i.hideOnClick && T());
		}, j = (e) => {
			i.trigger === "click" && (d.value?.contains(e.target) || T());
		};
		return h(() => {
			document.addEventListener("click", j);
		}), m(() => {
			S(), document.removeEventListener("click", j);
		}), (r, i) => (g(), o("div", {
			ref_key: "dropdownRef",
			ref: d,
			class: "pk-dropdown",
			onMouseenter: D,
			onMouseleave: k
		}, [s("div", {
			class: "pk-dropdown__trigger",
			onClick: E
		}, [b(r.$slots, "default", {}, () => [s("button", pe, [c(C(t.triggerText) + " ", 1), i[0] ||= s("i", {
			class: "fa fa-angle-down",
			"aria-hidden": "true"
		}, null, -1)])], !0)]), l(n, { name: "pk-dropdown-fade" }, {
			default: O(() => [p.value ? (g(), o("div", me, [(g(!0), o(e, null, y(t.options, (t) => (g(), o(e, { key: t.command || t.label }, [t.divided ? (g(), o("div", he)) : a("", !0), s("button", {
				class: f(["pk-dropdown__item", { "is-disabled": t.disabled }]),
				type: "button",
				disabled: t.disabled,
				onClick: (e) => A(t)
			}, [t.icon ? (g(), o("i", {
				key: 0,
				class: f(`fa ${t.icon}`),
				"aria-hidden": "true"
			}, null, 2)) : a("", !0), s("span", null, C(t.label), 1)], 10, ge)], 64))), 128))])) : a("", !0)]),
			_: 1
		})], 544));
	}
}), [["__scopeId", "data-v-f023879a"]]), ve = /* @__PURE__ */ M({ default: () => be }), ye = { class: "pk-footer" }, be = /* @__PURE__ */ N(/* @__PURE__ */ Object.assign({ name: "PkFooter" }, {
	props: {
		padding: {
			type: String,
			default: "0 10px 0 10px"
		},
		height: {
			type: String,
			default: "60px"
		}
	},
	setup(e) {
		return w((t) => ({
			v6a4c0333: e.height,
			v7f4b0b85: e.padding
		})), (e, t) => (g(), o("footer", ye, [b(e.$slots, "default", {}, void 0, !0)]));
	}
}), [["__scopeId", "data-v-b1616a78"]]), xe = /* @__PURE__ */ M({ default: () => Se }), Se = /* @__PURE__ */ N(/* @__PURE__ */ Object.assign({ name: "PkForm" }, {
	__name: "index",
	props: { labelPosition: {
		type: String,
		default: "right",
		validator: (e) => [
			"left",
			"right",
			"top"
		].includes(e)
	} },
	emits: ["submit"],
	setup(e, { emit: t }) {
		let n = t, r = () => {
			n("submit");
		};
		return (t, n) => (g(), o("form", {
			class: f(["pk-form", `pk-form--${e.labelPosition}`]),
			onSubmit: A(r, ["prevent"])
		}, [b(t.$slots, "default", {}, void 0, !0)], 34));
	}
}), [["__scopeId", "data-v-021a0201"]]), Ce = /* @__PURE__ */ M({ default: () => Ee }), we = { class: "pk-form-item__content" }, Te = {
	key: 0,
	class: "pk-form-item__message"
}, Ee = /* @__PURE__ */ N(/* @__PURE__ */ Object.assign({ name: "PkFormItem" }, {
	__name: "index",
	props: {
		label: {
			type: String,
			default: ""
		},
		labelWidth: {
			type: String,
			default: "90px"
		},
		required: {
			type: Boolean,
			default: !1
		},
		message: {
			type: String,
			default: ""
		}
	},
	setup(e) {
		return (t, n) => (g(), o("div", { class: f(["pk-form-item", { "is-required": e.required }]) }, [s("label", {
			class: "pk-form-item__label",
			style: p({ width: e.labelWidth })
		}, C(e.label), 5), s("div", we, [b(t.$slots, "default", {}, void 0, !0), e.message ? (g(), o("div", Te, C(e.message), 1)) : a("", !0)])], 2));
	}
}), [["__scopeId", "data-v-c1b747f3"]]), De = /* @__PURE__ */ M({ default: () => q }), Oe = { class: "pk-header" }, q = /* @__PURE__ */ N(/* @__PURE__ */ Object.assign({ name: "PkHeader" }, {
	props: { height: {
		type: String,
		default: "60px"
	} },
	setup(e) {
		return w((t) => ({ v73e4c94e: e.height })), (e, t) => (g(), o("header", Oe, [b(e.$slots, "default", {}, void 0, !0)]));
	}
}), [["__scopeId", "data-v-a3e45165"]]), ke = /* @__PURE__ */ M({ default: () => Fe }), Ae = {
	key: 0,
	class: "pk-input__prefix"
}, je = [
	"value",
	"type",
	"placeholder",
	"disabled",
	"readonly",
	"maxlength",
	"autocomplete"
], Me = [
	"value",
	"placeholder",
	"disabled",
	"readonly",
	"maxlength",
	"rows",
	"autocomplete"
], Ne = {
	key: 3,
	class: "pk-input__suffix"
}, Pe = ["aria-label"], Fe = /* @__PURE__ */ N(/* @__PURE__ */ Object.assign({
	name: "PkInput",
	inheritAttrs: !1
}, {
	__name: "index",
	props: {
		modelValue: {
			type: [String, Number],
			default: ""
		},
		width: {
			type: String,
			default: "100%"
		},
		type: {
			type: String,
			default: "text"
		},
		placeholder: {
			type: String,
			default: "请输入内容"
		},
		disabled: {
			type: Boolean,
			default: !1
		},
		readonly: {
			type: Boolean,
			default: !1
		},
		clearable: {
			type: Boolean,
			default: !1
		},
		showPassword: {
			type: Boolean,
			default: !1
		},
		maxlength: {
			type: [String, Number],
			default: void 0
		},
		rows: {
			type: [String, Number],
			default: 2
		},
		autosize: {
			type: [Boolean, Object],
			default: !1
		},
		autocomplete: {
			type: String,
			default: "off"
		},
		size: {
			type: String,
			default: "default",
			validator: (e) => [
				"large",
				"default",
				"small"
			].includes(e)
		},
		status: {
			type: String,
			default: "",
			validator: (e) => [
				"",
				"success",
				"warning",
				"error"
			].includes(e)
		}
	},
	emits: [
		"update:modelValue",
		"input",
		"change",
		"focus",
		"blur",
		"clear"
	],
	setup(e, { expose: t, emit: n }) {
		let i = e, c = n, l = T(), m = _(null), v = _(!1), y = _(!1), x = _(!1), S = r(() => (i.modelValue ?? "").toString()), C = r(() => ({ width: i.width })), w = r(() => !!(l.prefix || l.after)), E = r(() => !!(l.suffix || l.before)), O = r(() => i.type === "textarea"), k = r(() => {
			let e = Number(i.rows);
			return Number.isFinite(e) && e > 0 ? e : 2;
		}), j = r(() => i.type !== "password" || !i.showPassword ? i.type : x.value ? "text" : "password"), M = r(() => i.clearable && !i.disabled && !i.readonly && S.value.length > 0), N = r(() => !O.value && i.type === "password" && i.showPassword && !i.disabled), P = r(() => M.value || N.value), F = (e) => {
			let t = Number.parseFloat(window.getComputedStyle(e).lineHeight);
			return Number.isFinite(t) ? t : 20;
		}, I = () => {
			if (!O.value || !i.autosize || !m.value) return;
			let e = m.value, t = F(e), n = typeof i.autosize == "object" ? i.autosize : {}, r = Number(n.minRows ?? k.value), a = Number(n.maxRows), o = Number.isFinite(r) && r > 0 ? r * t : k.value * t, s = Number.isFinite(a) && a > 0 ? a * t : null;
			e.style.height = "auto";
			let c = Math.max(e.scrollHeight, o), l = s ? Math.min(c, s) : c;
			e.style.height = `${l}px`, e.style.overflowY = s && c > s ? "auto" : "hidden";
		}, L = (e, t) => {
			c("update:modelValue", e), c("input", e, t), d(I);
		}, R = (e) => {
			y.value || L(e.target.value, e);
		}, z = (e) => {
			c("change", e.target.value, e);
		}, B = (e) => {
			v.value = !0, c("focus", e);
		}, V = (e) => {
			v.value = !1, c("blur", e);
		}, H = () => {
			y.value = !0;
		}, U = (e) => {
			y.value = !1, L(e.target.value, e);
		}, W = () => {
			m.value?.focus();
		}, G = () => {
			m.value?.blur();
		}, K = () => {
			L("", void 0), c("clear"), d(W);
		}, ee = () => {
			x.value = !x.value, d(W);
		};
		return t({
			focus: W,
			blur: G,
			clear: K
		}), D(() => [
			i.modelValue,
			i.rows,
			i.autosize
		], () => d(I), { deep: !0 }), h(() => {
			d(I);
		}), (t, n) => (g(), o("div", {
			class: f(["pk-input", [
				`pk-input--${e.size}`,
				e.status ? `pk-input--${e.status}` : "",
				{
					"is-disabled": e.disabled,
					"is-readonly": e.readonly,
					"is-focus": v.value,
					"has-prefix": w.value,
					"has-suffix": E.value,
					"has-action": P.value,
					"is-textarea": O.value
				}
			]]),
			style: p(C.value)
		}, [
			w.value ? (g(), o("span", Ae, [b(t.$slots, "prefix", {}, () => [b(t.$slots, "after", {}, void 0, !0)], !0)])) : a("", !0),
			O.value ? (g(), o("textarea", u({
				key: 2,
				ref_key: "inputRef",
				ref: m
			}, t.$attrs, {
				class: "pk-input__inner pk-input__textarea",
				value: S.value,
				placeholder: e.placeholder,
				disabled: e.disabled,
				readonly: e.readonly,
				maxlength: e.maxlength,
				rows: k.value,
				autocomplete: e.autocomplete,
				onInput: R,
				onChange: z,
				onFocus: B,
				onBlur: V,
				onCompositionstart: H,
				onCompositionend: U
			}), null, 16, Me)) : (g(), o("input", u({
				key: 1,
				ref_key: "inputRef",
				ref: m
			}, t.$attrs, {
				class: "pk-input__inner",
				value: S.value,
				type: j.value,
				placeholder: e.placeholder,
				disabled: e.disabled,
				readonly: e.readonly,
				maxlength: e.maxlength,
				autocomplete: e.autocomplete,
				onInput: R,
				onChange: z,
				onFocus: B,
				onBlur: V,
				onCompositionstart: H,
				onCompositionend: U
			}), null, 16, je)),
			E.value || M.value || N.value ? (g(), o("span", Ne, [
				M.value ? (g(), o("button", {
					key: 0,
					class: "pk-input__icon-button",
					type: "button",
					"aria-label": "清空",
					onMousedown: n[0] ||= A(() => {}, ["prevent"]),
					onClick: K
				}, [...n[2] ||= [s("i", {
					class: "fa fa-times-circle",
					"aria-hidden": "true"
				}, null, -1)]], 32)) : a("", !0),
				N.value ? (g(), o("button", {
					key: 1,
					class: "pk-input__icon-button pk-input__password-button",
					type: "button",
					"aria-label": x.value ? "隐藏密码" : "显示密码",
					onMousedown: n[1] ||= A(() => {}, ["prevent"]),
					onClick: ee
				}, [s("i", {
					class: f(x.value ? "fa fa-eye-slash" : "fa fa-eye"),
					"aria-hidden": "true"
				}, null, 2)], 40, Pe)) : a("", !0),
				b(t.$slots, "suffix", {}, () => [b(t.$slots, "before", {}, void 0, !0)], !0)
			])) : a("", !0)
		], 6));
	}
}), [["__scopeId", "data-v-a6d695da"]]), Ie = /* @__PURE__ */ M({ default: () => Re }), Le = { class: "main_container" }, Re = /* @__PURE__ */ N(/* @__PURE__ */ Object.assign({ name: "PkMain" }, {
	props: { padding: {
		type: String,
		default: "10px"
	} },
	setup(e) {
		return (t, n) => (g(), o("main", {
			class: "pk-main",
			style: p({ padding: e.padding })
		}, [s("div", Le, [b(t.$slots, "default", {}, void 0, !0)])], 4));
	}
}), [["__scopeId", "data-v-2ed3fd6d"]]), ze = /* @__PURE__ */ M({ default: () => He }), Be = { class: "pk-message__icon" }, Ve = { class: "pk-message__content" }, He = /* @__PURE__ */ Object.assign({ name: "PkMessage" }, {
	props: {
		icon: {
			type: String,
			default: "success"
		},
		message: {
			type: String,
			default: ""
		}
	},
	setup(t) {
		let n = {
			success: "✅",
			warning: "⚠️",
			error: "❌",
			info: "ℹ️"
		}, r = t;
		return (t, i) => (g(), o(e, null, [s("span", Be, C(n[r.icon]), 1), s("span", Ve, C(r.message), 1)], 64));
	}
}), Ue = /* @__PURE__ */ M({
	PkMessage: () => Ge,
	default: () => We
}), J = 50, Y = 30, X = (e, t = 3e3) => {
	let n = document.createElement("div");
	n.classList.add(`pk-message--${e.type}`, "pk-message", "message_warpper", "show");
	let r = document.getElementsByClassName("message_warpper").length;
	n.style.top = `${Y + r * J - 10}px`, setTimeout(() => {
		n.style.top = `${Y + r * J + 10}px`, n.style.opacity = "1";
	}, 10);
	let i = document.body.appendChild(n);
	v(l(He, {
		icon: e.type,
		message: e.message
	}), i), setTimeout(() => {
		v(null, i), n.remove(), n.style.opacity = "0", document.querySelectorAll(".message_warpper").forEach((e, t) => {
			e.style.top = `${Y + t * J}px`, console.log(e.style.top);
		});
	}, t);
}, We = {
	name: "PkMessage",
	install(e) {
		e.config.globalProperties.$pkMessage = X, e.provide("PkMessage", X);
	}
}, Ge = X, Ke = /* @__PURE__ */ M({ default: () => $e }), qe = { class: "pk-message-box__mask" }, Je = { class: "pk-message-box" }, Ye = { class: "pk-message-box__header" }, Xe = { class: "pk-message-box__title" }, Ze = { class: "pk-message-box__body" }, Qe = { class: "pk-message-box__footer" }, $e = /* @__PURE__ */ Object.assign({ name: "PkMessageBox" }, {
	__name: "index",
	props: {
		title: {
			type: String,
			default: "提示"
		},
		message: {
			type: String,
			default: ""
		},
		confirmText: {
			type: String,
			default: "确定"
		},
		cancelText: {
			type: String,
			default: "取消"
		}
	},
	emits: ["confirm", "cancel"],
	setup(e) {
		return (t, n) => (g(), o("div", qe, [s("div", Je, [
			s("div", Ye, [s("span", Xe, C(e.title), 1), s("button", {
				class: "pk-message-box__close",
				type: "button",
				onClick: n[0] ||= (e) => t.$emit("cancel")
			}, "x")]),
			s("div", Ze, C(e.message), 1),
			s("div", Qe, [s("button", {
				class: "pk-message-box__button",
				type: "button",
				onClick: n[1] ||= (e) => t.$emit("cancel")
			}, C(e.cancelText), 1), s("button", {
				class: "pk-message-box__button pk-message-box__button--primary",
				type: "button",
				onClick: n[2] ||= (e) => t.$emit("confirm")
			}, C(e.confirmText), 1)])
		])]));
	}
}), et = /* @__PURE__ */ M({
	PkMessageBox: () => Z,
	default: () => tt
}), Z = (e = {}) => {
	let t = document.createElement("div");
	document.body.appendChild(t);
	let n = () => {
		v(null, t), t.remove();
	};
	return new Promise((r, i) => {
		v(l($e, {
			title: e.title,
			message: e.message,
			confirmText: e.confirmText,
			cancelText: e.cancelText,
			onConfirm: () => {
				n(), r("confirm");
			},
			onCancel: () => {
				n(), i("cancel");
			}
		}), t);
	});
}, tt = {
	name: "PkMessageBox",
	install(e) {
		e.config.globalProperties.$pkMessageBox = Z, e.provide("PkMessageBox", Z);
	}
}, nt = /* @__PURE__ */ M({ default: () => ct }), rt = { class: "pk-notification__icon" }, it = { class: "pk-notification__content" }, at = { class: "pk-notification__title" }, ot = { class: "pk-notification__message" }, st = {
	key: 0,
	class: "pk-notification__progress"
}, ct = /* @__PURE__ */ Object.assign({ name: "PkNotification" }, {
	__name: "index",
	props: {
		title: {
			type: String,
			default: "通知"
		},
		message: {
			type: String,
			default: ""
		},
		type: {
			type: String,
			default: "info"
		},
		duration: {
			type: Number,
			default: 4500
		}
	},
	emits: ["close"],
	setup(e) {
		let t = e, n = {
			success: "✓",
			warning: "!",
			error: "×",
			info: "i"
		}, i = r(() => n[t.type] || n.info), c = r(() => t.duration > 0), l = r(() => ({ "--pk-notification-duration": `${t.duration}ms` }));
		return (t, n) => (g(), o("div", {
			class: f(["pk-notification", `pk-notification--${e.type}`]),
			style: p(l.value)
		}, [
			s("div", rt, C(i.value), 1),
			s("div", it, [s("div", at, C(e.title), 1), s("div", ot, C(e.message), 1)]),
			s("button", {
				class: "pk-notification__close",
				type: "button",
				onClick: n[0] ||= (e) => t.$emit("close")
			}, "x"),
			c.value ? (g(), o("div", st, [...n[1] ||= [s("span", { class: "pk-notification__progress-inner" }, null, -1)]])) : a("", !0)
		], 6));
	}
}), lt = /* @__PURE__ */ M({
	PkNotification: () => Q,
	default: () => pt
}), ut = 16, dt = 24, ft = () => {
	let e = dt;
	document.querySelectorAll(".pk-notification").forEach((t) => {
		t.style.top = `${e}px`, e += t.offsetHeight + ut;
	});
}, Q = (e = {}) => {
	let t = document.createElement("div");
	document.body.appendChild(t);
	let n = e.duration ?? 4500, r = null, i = !1, a = () => {
		i || (i = !0, r && clearTimeout(r), v(null, t), t.remove(), ft());
	};
	return v(l(ct, {
		title: e.title,
		message: e.message,
		type: e.type || "info",
		duration: n,
		onClose: a
	}), t), ft(), n > 0 && (r = setTimeout(a, n)), { close: a };
}, pt = {
	name: "PkNotification",
	install(e) {
		e.config.globalProperties.$pkNotification = Q, e.provide("PkNotification", Q);
	}
}, mt = /* @__PURE__ */ M({ default: () => bt }), ht = { class: "pk-pagination" }, gt = {
	key: 0,
	class: "pk-pagination__total"
}, _t = ["disabled"], vt = ["onClick"], yt = ["disabled"], bt = /* @__PURE__ */ N(/* @__PURE__ */ Object.assign({ name: "PkPagination" }, {
	__name: "index",
	props: {
		currentPage: {
			type: Number,
			default: 1
		},
		pageSize: {
			type: Number,
			default: 10
		},
		total: {
			type: Number,
			default: 0
		},
		pagerCount: {
			type: Number,
			default: 7
		},
		showTotal: {
			type: Boolean,
			default: !0
		}
	},
	emits: ["update:currentPage", "change"],
	setup(t, { emit: n }) {
		let i = t, c = n, l = r(() => Math.max(1, Math.ceil(i.total / i.pageSize))), u = r(() => {
			let e = l.value, t = Math.max(1, i.pagerCount), n = Math.floor(t / 2), r = Math.max(1, i.currentPage - n), a = Math.min(e, r + t - 1);
			return r = Math.max(1, a - t + 1), Array.from({ length: a - r + 1 }, (e, t) => r + t);
		}), d = (e) => {
			let t = Math.min(Math.max(1, e), l.value);
			t !== i.currentPage && (c("update:currentPage", t), c("change", t));
		};
		return (n, r) => (g(), o("div", ht, [
			t.showTotal ? (g(), o("span", gt, "共 " + C(t.total) + " 条", 1)) : a("", !0),
			s("button", {
				class: "pk-pagination__button",
				type: "button",
				disabled: t.currentPage <= 1,
				onClick: r[0] ||= (e) => d(t.currentPage - 1)
			}, [...r[2] ||= [s("i", {
				class: "fa fa-angle-left",
				"aria-hidden": "true"
			}, null, -1)]], 8, _t),
			(g(!0), o(e, null, y(u.value, (e) => (g(), o("button", {
				key: e,
				class: f(["pk-pagination__pager", { "is-active": e === t.currentPage }]),
				type: "button",
				onClick: (t) => d(e)
			}, C(e), 11, vt))), 128)),
			s("button", {
				class: "pk-pagination__button",
				type: "button",
				disabled: t.currentPage >= l.value,
				onClick: r[1] ||= (e) => d(t.currentPage + 1)
			}, [...r[3] ||= [s("i", {
				class: "fa fa-angle-right",
				"aria-hidden": "true"
			}, null, -1)]], 8, yt)
		]));
	}
}), [["__scopeId", "data-v-9c7a4065"]]), xt = /* @__PURE__ */ M({ default: () => St }), St = /* @__PURE__ */ N(/* @__PURE__ */ Object.assign({ name: "PkPanel" }, {
	__name: "index",
	props: {
		tag: {
			type: String,
			default: "div"
		},
		mode: {
			type: String,
			default: "grid",
			validator: (e) => ["grid", "waterfall"].includes(e)
		},
		rows: {
			type: [Number, String],
			default: ""
		},
		columns: {
			type: [Number, String],
			default: 1
		},
		gap: {
			type: [Number, String],
			default: "16px"
		},
		rowGap: {
			type: [Number, String],
			default: ""
		},
		columnGap: {
			type: [Number, String],
			default: ""
		},
		height: {
			type: [Number, String],
			default: ""
		},
		width: {
			type: [Number, String],
			default: "100%"
		},
		padding: {
			type: [Number, String],
			default: 0
		},
		minItemWidth: {
			type: [Number, String],
			default: ""
		},
		autoFit: {
			type: Boolean,
			default: !1
		},
		stretch: {
			type: Boolean,
			default: !0
		},
		align: {
			type: String,
			default: "stretch"
		},
		justify: {
			type: String,
			default: "stretch"
		},
		dense: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		let t = e, n = (e) => {
			if (!(e === "" || e == null)) return typeof e == "number" ? `${e}px` : e;
		}, a = (e, t = 1) => {
			let n = Number(e);
			return !Number.isFinite(n) || n < 1 ? t : Math.floor(n);
		}, o = r(() => a(t.columns, 1)), s = r(() => t.rows === "" || t.rows === void 0 || t.rows === null ? "" : a(t.rows, 1)), c = r(() => {
			if (t.mode === "waterfall") return;
			let e = n(t.minItemWidth);
			return t.autoFit && e ? `repeat(auto-fit, minmax(${e}, 1fr))` : e ? `repeat(${o.value}, minmax(${e}, 1fr))` : `repeat(${o.value}, minmax(0, 1fr))`;
		}), l = r(() => {
			if (!(t.mode !== "grid" || s.value === "")) return `repeat(${s.value}, minmax(0, 1fr))`;
		}), u = r(() => {
			let e = n(t.gap);
			return {
				width: n(t.width),
				height: n(t.height),
				padding: n(t.padding),
				gap: e,
				rowGap: n(t.rowGap) || e,
				gridTemplateColumns: c.value,
				gridTemplateRows: l.value,
				gridAutoFlow: t.mode === "grid" && t.dense ? "row dense" : void 0,
				alignItems: t.align,
				justifyItems: t.justify,
				"--pk-panel-waterfall-gap": n(t.rowGap) || e,
				columnCount: t.mode === "waterfall" ? o.value : void 0,
				columnGap: n(t.columnGap) || e
			};
		});
		return (t, n) => (g(), i(S(e.tag), {
			class: f(["pk-panel", [`pk-panel--${e.mode}`, {
				"pk-panel--auto-fit": e.autoFit,
				"pk-panel--stretch": e.stretch
			}]]),
			style: p(u.value)
		}, {
			default: O(() => [b(t.$slots, "default", {}, void 0, !0)]),
			_: 3
		}, 8, ["class", "style"]));
	}
}), [["__scopeId", "data-v-7af5ed52"]]), Ct = /* @__PURE__ */ M({ default: () => Tt }), wt = { class: "pk-scrollbar" }, Tt = /* @__PURE__ */ N(/* @__PURE__ */ Object.assign({ name: "PkScrollbar" }, {
	props: { height: {
		type: String,
		default: "100%"
	} },
	setup(e) {
		return w((t) => ({ v4504c016: e.height })), (e, t) => (g(), o("div", wt, [b(e.$slots, "default", {}, void 0, !0)]));
	}
}), [["__scopeId", "data-v-4e39e52d"]]), Et = /* @__PURE__ */ M({ default: () => At }), Dt = { name: "PkSearch" }, Ot = { class: "pk-Search" };
function kt(e, t, n, r, i, a) {
	return g(), o("div", Ot, [...t[0] ||= [s("div", null, null, -1)]]);
}
var At = /* @__PURE__ */ N(Dt, [["render", kt], ["__scopeId", "data-v-5e6375ce"]]), jt = /* @__PURE__ */ M({ default: () => Bt }), Mt = ["disabled"], Nt = { class: "pk-select__value" }, Pt = {
	key: 0,
	class: "pk-select__dropdown"
}, Ft = {
	key: 0,
	class: "pk-select__search"
}, It = ["placeholder"], Lt = ["onClick"], Rt = {
	key: 0,
	class: "fa fa-check",
	"aria-hidden": "true"
}, zt = {
	key: 1,
	class: "pk-select__empty"
}, Bt = /* @__PURE__ */ N(/* @__PURE__ */ Object.assign({ name: "PkSelect" }, {
	__name: "index",
	props: {
		modelValue: {
			type: [String, Number],
			default: ""
		},
		options: {
			type: Array,
			default: () => []
		},
		placeholder: {
			type: String,
			default: "请选择"
		},
		filterPlaceholder: {
			type: String,
			default: "输入关键词搜索"
		},
		width: {
			type: String,
			default: "220px"
		},
		disabled: {
			type: Boolean,
			default: !1
		},
		filterable: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["update:modelValue", "change"],
	setup(t, { emit: i }) {
		let c = t, u = i, v = _(null), b = _(null), x = _(!1), S = _(""), w = r(() => c.options.find((e) => e.value === c.modelValue)), T = r(() => {
			let e = S.value.trim().toLowerCase();
			return !c.filterable || !e ? c.options : c.options.filter((t) => {
				let n = String(t.label ?? "").toLowerCase(), r = String(t.value ?? "").toLowerCase();
				return n.includes(e) || r.includes(e);
			});
		}), j = () => {
			c.disabled || (x.value = !x.value);
		}, M = () => {
			x.value = !1, S.value = "";
		}, N = (e) => {
			e.disabled || (u("update:modelValue", e.value), u("change", e.value), M());
		}, P = (e) => {
			v.value?.contains(e.target) || M();
		};
		return h(() => {
			document.addEventListener("click", P);
		}), m(() => {
			document.removeEventListener("click", P);
		}), D(x, (e) => {
			e && c.filterable && d(() => {
				b.value?.focus();
			});
		}), (r, i) => (g(), o("div", {
			ref_key: "selectRef",
			ref: v,
			class: f(["pk-select", {
				"is-open": x.value,
				"is-disabled": t.disabled,
				"is-empty": !w.value
			}]),
			style: p({ width: t.width })
		}, [s("button", {
			class: "pk-select__trigger",
			type: "button",
			disabled: t.disabled,
			onClick: j
		}, [s("span", Nt, C(w.value?.label || t.placeholder), 1), i[2] ||= s("i", {
			class: "fa fa-angle-down pk-select__arrow",
			"aria-hidden": "true"
		}, null, -1)], 8, Mt), l(n, { name: "pk-select-fade" }, {
			default: O(() => [x.value ? (g(), o("div", Pt, [
				t.filterable ? (g(), o("div", Ft, [i[3] ||= s("i", {
					class: "fa fa-search",
					"aria-hidden": "true"
				}, null, -1), k(s("input", {
					ref_key: "searchInputRef",
					ref: b,
					"onUpdate:modelValue": i[0] ||= (e) => S.value = e,
					class: "pk-select__search-input",
					type: "text",
					placeholder: t.filterPlaceholder,
					onClick: i[1] ||= A(() => {}, ["stop"])
				}, null, 8, It), [[E, S.value]])])) : a("", !0),
				(g(!0), o(e, null, y(T.value, (e) => (g(), o("div", {
					key: e.value,
					class: f(["pk-select__option", {
						"is-selected": e.value === t.modelValue,
						"is-disabled": e.disabled
					}]),
					onClick: (t) => N(e)
				}, [s("span", null, C(e.label), 1), e.value === t.modelValue ? (g(), o("i", Rt)) : a("", !0)], 10, Lt))), 128)),
				T.value.length === 0 ? (g(), o("div", zt, "暂无数据")) : a("", !0)
			])) : a("", !0)]),
			_: 1
		})], 6));
	}
}), [["__scopeId", "data-v-2e4c40d9"]]), Vt = /* @__PURE__ */ M({ default: () => Kt }), Ht = { class: "pk-slider__track-wrap" }, Ut = { class: "pk-slider__track" }, Wt = [
	"value",
	"min",
	"max",
	"step",
	"disabled"
], Gt = {
	key: 0,
	class: "pk-slider__value"
}, Kt = /* @__PURE__ */ N(/* @__PURE__ */ Object.assign({ name: "PkSlider" }, {
	__name: "index",
	props: {
		modelValue: {
			type: Number,
			default: 0
		},
		min: {
			type: Number,
			default: 0
		},
		max: {
			type: Number,
			default: 100
		},
		step: {
			type: Number,
			default: 1
		},
		width: {
			type: String,
			default: "280px"
		},
		showValue: {
			type: Boolean,
			default: !1
		},
		disabled: {
			type: Boolean,
			default: !1
		}
	},
	emits: [
		"update:modelValue",
		"input",
		"change"
	],
	setup(e, { emit: t }) {
		w((e) => ({ v1f4a5a8a: c.value }));
		let n = e, i = t, c = r(() => {
			let e = n.max - n.min;
			return e <= 0 ? "0%" : `${(Math.min(Math.max(n.modelValue, n.min), n.max) - n.min) / e * 100}%`;
		}), l = (e) => Number(e.target.value), u = (e) => {
			let t = l(e);
			i("update:modelValue", t), i("input", t);
		}, d = (e) => {
			i("change", l(e));
		};
		return (t, n) => (g(), o("div", {
			class: "pk-slider",
			style: p({ width: e.width })
		}, [s("div", Ht, [s("div", Ut, [s("div", {
			class: "pk-slider__bar",
			style: p({ width: c.value })
		}, null, 4)]), s("input", {
			class: "pk-slider__range",
			type: "range",
			value: e.modelValue,
			min: e.min,
			max: e.max,
			step: e.step,
			disabled: e.disabled,
			onInput: u,
			onChange: d
		}, null, 40, Wt)]), e.showValue ? (g(), o("span", Gt, C(e.modelValue), 1)) : a("", !0)], 4));
	}
}), [["__scopeId", "data-v-ab6c9385"]]), qt = /* @__PURE__ */ M({ default: () => $ }), Jt = ["disabled", "aria-checked"], Yt = {
	key: 0,
	class: "pk-switch__text"
}, $ = /* @__PURE__ */ N(/* @__PURE__ */ Object.assign({ name: "PkSwitch" }, {
	__name: "index",
	props: {
		modelValue: {
			type: Boolean,
			default: !1
		},
		disabled: {
			type: Boolean,
			default: !1
		},
		activeText: {
			type: String,
			default: ""
		},
		inactiveText: {
			type: String,
			default: ""
		}
	},
	emits: ["update:modelValue", "change"],
	setup(e, { emit: t }) {
		let n = e, i = t, c = r(() => n.modelValue), l = () => {
			if (n.disabled) return;
			let e = !n.modelValue;
			i("update:modelValue", e), i("change", e);
		};
		return (t, n) => (g(), o("button", {
			class: f(["pk-switch", {
				"is-checked": c.value,
				"is-disabled": e.disabled
			}]),
			type: "button",
			disabled: e.disabled,
			role: "switch",
			"aria-checked": c.value,
			onClick: l
		}, [n[0] ||= s("span", { class: "pk-switch__core" }, null, -1), e.activeText || e.inactiveText ? (g(), o("span", Yt, C(c.value ? e.activeText : e.inactiveText), 1)) : a("", !0)], 10, Jt));
	}
}), [["__scopeId", "data-v-4fafd5a6"]]), Xt = /* @__PURE__ */ M({ default: () => tn }), Zt = { class: "pk-table__inner" }, Qt = { key: 0 }, $t = { key: 1 }, en = ["colspan"], tn = /* @__PURE__ */ N(/* @__PURE__ */ Object.assign({ name: "PkTable" }, {
	__name: "index",
	props: {
		columns: {
			type: Array,
			default: () => []
		},
		data: {
			type: Array,
			default: () => []
		},
		rowKey: {
			type: String,
			default: ""
		},
		border: {
			type: Boolean,
			default: !1
		},
		emptyText: {
			type: String,
			default: "暂无数据"
		}
	},
	setup(t) {
		let n = t, r = (e, t) => n.rowKey ? e[n.rowKey] : t;
		return (n, i) => (g(), o("div", { class: f(["pk-table", { "pk-table--border": t.border }]) }, [s("table", Zt, [s("thead", null, [s("tr", null, [(g(!0), o(e, null, y(t.columns, (e) => (g(), o("th", {
			key: e.prop || e.label,
			style: p({
				width: e.width,
				textAlign: e.align || "left"
			})
		}, C(e.label), 5))), 128))])]), t.data.length ? (g(), o("tbody", Qt, [(g(!0), o(e, null, y(t.data, (i, a) => (g(), o("tr", { key: r(i, a) }, [(g(!0), o(e, null, y(t.columns, (e) => (g(), o("td", {
			key: e.prop || e.label,
			style: p({ textAlign: e.align || "left" })
		}, [b(n.$slots, e.prop, {
			row: i,
			column: e,
			index: a
		}, () => [c(C(i[e.prop]), 1)], !0)], 4))), 128))]))), 128))])) : (g(), o("tbody", $t, [s("tr", null, [s("td", {
			class: "pk-table__empty",
			colspan: t.columns.length || 1
		}, C(t.emptyText), 9, en)])]))])], 2));
	}
}), [["__scopeId", "data-v-562b1b4d"]]), nn = /* @__PURE__ */ M({ default: () => rn }), rn = /* @__PURE__ */ N(/* @__PURE__ */ Object.assign({ name: "PkTag" }, {
	__name: "index",
	props: {
		type: {
			type: String,
			default: "primary",
			validator: (e) => [
				"primary",
				"success",
				"info",
				"warning",
				"danger"
			].includes(e)
		},
		closable: {
			type: Boolean,
			default: !1
		},
		round: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["close"],
	setup(e) {
		return (t, n) => (g(), o("span", { class: f(["pk-tag", [`pk-tag--${e.type}`, {
			"is-round": e.round,
			"is-closable": e.closable
		}]]) }, [b(t.$slots, "default", {}, void 0, !0), e.closable ? (g(), o("button", {
			key: 0,
			class: "pk-tag__close",
			type: "button",
			onClick: n[0] ||= (e) => t.$emit("close")
		}, [...n[1] ||= [s("i", {
			class: "fa fa-times",
			"aria-hidden": "true"
		}, null, -1)]])) : a("", !0)], 2));
	}
}), [["__scopeId", "data-v-9abea43a"]]), an = { class: "pk-tree-node" }, on = {
	key: 1,
	class: "pk-tree-node__placeholder"
}, sn = { class: "pk-tree-node__label" }, cn = {
	key: 0,
	class: "pk-tree-node__children"
}, ln = /* @__PURE__ */ N(/* @__PURE__ */ Object.assign({ name: "TreeNode" }, {
	__name: "TreeNode",
	props: {
		node: {
			type: Object,
			required: !0
		},
		level: {
			type: Number,
			default: 0
		},
		labelKey: {
			type: String,
			default: "label"
		},
		valueKey: {
			type: String,
			default: "value"
		},
		childrenKey: {
			type: String,
			default: "children"
		},
		indent: {
			type: Number,
			default: 18
		},
		defaultExpandAll: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["node-click"],
	setup(t, { emit: n }) {
		let c = t, l = n, u = _(c.defaultExpandAll), d = r(() => Array.isArray(c.node[c.childrenKey]) && c.node[c.childrenKey].length > 0), m = () => {
			u.value = !u.value;
		}, h = () => {
			l("node-click", c.node);
		};
		return (n, r) => {
			let c = x("TreeNode", !0);
			return g(), o("li", an, [s("div", {
				class: "pk-tree-node__content",
				style: p({ paddingLeft: `${t.level * t.indent}px` }),
				onClick: h
			}, [d.value ? (g(), o("button", {
				key: 0,
				class: "pk-tree-node__toggle",
				type: "button",
				onClick: A(m, ["stop"])
			}, [s("i", {
				class: f(u.value ? "fa fa-caret-down" : "fa fa-caret-right"),
				"aria-hidden": "true"
			}, null, 2)])) : (g(), o("span", on)), s("span", sn, C(t.node[t.labelKey]), 1)], 4), d.value && u.value ? (g(), o("ul", cn, [(g(!0), o(e, null, y(t.node[t.childrenKey], (e) => (g(), i(c, {
				key: e[t.valueKey] || e[t.labelKey],
				node: e,
				level: t.level + 1,
				"label-key": t.labelKey,
				"value-key": t.valueKey,
				"children-key": t.childrenKey,
				indent: t.indent,
				"default-expand-all": t.defaultExpandAll,
				onNodeClick: r[0] ||= (e) => n.$emit("node-click", e)
			}, null, 8, [
				"node",
				"level",
				"label-key",
				"value-key",
				"children-key",
				"indent",
				"default-expand-all"
			]))), 128))])) : a("", !0)]);
		};
	}
}), [["__scopeId", "data-v-e0cfe930"]]), un = /* @__PURE__ */ M({ default: () => mn }), dn = { class: "pk-tree" }, fn = {
	key: 0,
	class: "pk-tree__list"
}, pn = {
	key: 1,
	class: "pk-tree__empty"
}, mn = /* @__PURE__ */ N(/* @__PURE__ */ Object.assign({ name: "PkTree" }, {
	__name: "index",
	props: {
		data: {
			type: Array,
			default: () => []
		},
		labelKey: {
			type: String,
			default: "label"
		},
		valueKey: {
			type: String,
			default: "value"
		},
		childrenKey: {
			type: String,
			default: "children"
		},
		indent: {
			type: Number,
			default: 18
		},
		defaultExpandAll: {
			type: Boolean,
			default: !1
		},
		emptyText: {
			type: String,
			default: "暂无数据"
		}
	},
	emits: ["node-click"],
	setup(t, { emit: n }) {
		let r = n, a = (e) => {
			r("node-click", e);
		};
		return (n, r) => (g(), o("div", dn, [t.data.length ? (g(), o("ul", fn, [(g(!0), o(e, null, y(t.data, (e) => (g(), i(ln, {
			key: e[t.valueKey] || e[t.labelKey],
			node: e,
			"label-key": t.labelKey,
			"value-key": t.valueKey,
			"children-key": t.childrenKey,
			indent: t.indent,
			"default-expand-all": t.defaultExpandAll,
			onNodeClick: a
		}, null, 8, [
			"node",
			"label-key",
			"value-key",
			"children-key",
			"indent",
			"default-expand-all"
		]))), 128))])) : (g(), o("div", pn, C(t.emptyText), 1))]));
	}
}), [["__scopeId", "data-v-28ccfbcc"]]), hn = /* @__PURE__ */ M({ default: () => An }), gn = [
	"accept",
	"multiple",
	"disabled"
], _n = {
	key: 1,
	class: "pk-upload__actions"
}, vn = ["disabled"], yn = ["disabled"], bn = {
	key: 2,
	class: "pk-upload__tip"
}, xn = {
	key: 3,
	class: "pk-upload__list"
}, Sn = { class: "pk-upload__main" }, Cn = { class: "pk-upload__file" }, wn = { class: "pk-upload__name" }, Tn = { class: "pk-upload__size" }, En = { class: "pk-upload__progress" }, Dn = { class: "pk-upload__progress-track" }, On = { class: "pk-upload__percent" }, kn = ["disabled", "onClick"], An = /* @__PURE__ */ N(/* @__PURE__ */ Object.assign({ name: "PkUpload" }, {
	__name: "index",
	props: {
		modelValue: {
			type: Array,
			default: () => []
		},
		action: {
			type: String,
			default: ""
		},
		data: {
			type: [Object, Function],
			default: () => ({})
		},
		headers: {
			type: Object,
			default: () => ({})
		},
		name: {
			type: String,
			default: "file"
		},
		withCredentials: {
			type: Boolean,
			default: !1
		},
		autoUpload: {
			type: Boolean,
			default: !0
		},
		drag: {
			type: Boolean,
			default: !1
		},
		accept: {
			type: String,
			default: ""
		},
		multiple: {
			type: Boolean,
			default: !1
		},
		limit: {
			type: Number,
			default: 0
		},
		disabled: {
			type: Boolean,
			default: !1
		},
		buttonText: {
			type: String,
			default: "选择文件"
		},
		dragText: {
			type: String,
			default: "将文件拖到此处"
		},
		uploadText: {
			type: String,
			default: "开始上传"
		},
		tip: {
			type: String,
			default: ""
		}
	},
	emits: [
		"update:modelValue",
		"change",
		"remove",
		"exceed",
		"progress",
		"success",
		"error"
	],
	setup(t, { expose: n, emit: i }) {
		let c = t, l = i, u = _(null), d = _(!1), h = /* @__PURE__ */ new Map(), v = r(() => c.modelValue), b = r(() => v.value.filter((e) => e.status === "ready")), x = {
			ready: "待上传",
			uploading: "上传中",
			success: "完成",
			error: "失败"
		}, S = () => {
			c.disabled || u.value?.click();
		}, w = (e) => ({
			uid: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
			name: e.name,
			size: e.size,
			type: e.type,
			raw: e,
			status: "ready",
			percentage: 0,
			response: null,
			error: null
		}), T = (e) => {
			l("update:modelValue", e), l("change", e);
		}, E = (e, t) => {
			let n = v.value.map((n) => n.uid === e.uid ? {
				...n,
				...t
			} : n);
			return T(n), n.find((t) => t.uid === e.uid);
		}, D = (e) => typeof c.data == "function" ? c.data(e) : c.data, O = (e, t) => {
			let n = D(t) || {};
			Object.keys(n).forEach((t) => {
				let r = n[t];
				Array.isArray(r) ? r.forEach((n) => e.append(t, n)) : r != null && e.append(t, r);
			});
		}, k = (e) => {
			if (!c.action) {
				let t = E(e, {
					status: "error",
					percentage: 0,
					error: /* @__PURE__ */ Error("Upload action is required")
				});
				l("error", t.error, t);
				return;
			}
			let t = new FormData();
			t.append(c.name, e.raw, e.name), O(t, e);
			let n = new XMLHttpRequest();
			h.set(e.uid, n), E(e, {
				status: "uploading",
				percentage: 0,
				error: null
			}), n.upload.onprogress = (t) => {
				if (!t.lengthComputable) return;
				let n = Math.round(t.loaded / t.total * 100);
				l("progress", n, E(e, { percentage: n }));
			}, n.onload = () => {
				h.delete(e.uid);
				let t = n.status >= 200 && n.status < 300, r = j(n);
				if (t) l("success", r, E(e, {
					status: "success",
					percentage: 100,
					response: r
				}));
				else {
					let t = /* @__PURE__ */ Error(`Upload failed with status ${n.status}`);
					l("error", t, E(e, {
						status: "error",
						error: t,
						response: r
					}));
				}
			}, n.onerror = () => {
				h.delete(e.uid);
				let t = /* @__PURE__ */ Error("Upload request failed");
				l("error", t, E(e, {
					status: "error",
					error: t
				}));
			}, n.open("POST", c.action), n.withCredentials = c.withCredentials, Object.keys(c.headers).forEach((e) => {
				n.setRequestHeader(e, c.headers[e]);
			}), n.send(t);
		}, j = (e) => {
			let t = e.responseText;
			try {
				return t ? JSON.parse(t) : null;
			} catch {
				return t;
			}
		}, M = (e) => {
			N(Array.from(e.target.files || [])), e.target.value = "";
		}, N = (e) => {
			let t = e.map(w);
			if (!t.length) return;
			let n = c.multiple ? [...v.value, ...t] : t.slice(0, 1);
			if (c.limit > 0 && n.length > c.limit) {
				l("exceed", t, v.value);
				return;
			}
			T(n), c.autoUpload && t.forEach(k);
		}, P = () => {
			c.disabled || (d.value = !0);
		}, F = () => {
			d.value = !1;
		}, I = (e) => {
			d.value = !1, !c.disabled && N(Array.from(e.dataTransfer?.files || []));
		}, L = () => {
			b.value.forEach(k);
		}, R = (e) => {
			let t = [...v.value], n = t.splice(e, 1)[0], r = h.get(n?.uid);
			r && (r.abort(), h.delete(n.uid)), T(t), l("remove", n, t);
		}, z = (e = 0) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1024 / 1024).toFixed(1)} MB`;
		return n({ submit: L }), m(() => {
			h.forEach((e) => e.abort()), h.clear();
		}), (n, r) => (g(), o("div", { class: f(["pk-upload", { "is-disabled": t.disabled }]) }, [
			s("input", {
				ref_key: "inputRef",
				ref: u,
				class: "pk-upload__input",
				type: "file",
				accept: t.accept,
				multiple: t.multiple,
				disabled: t.disabled,
				onChange: M
			}, null, 40, gn),
			t.drag ? (g(), o("div", {
				key: 0,
				class: f(["pk-upload__drag", { "is-dragover": d.value }]),
				onClick: S,
				onDragover: A(P, ["prevent"]),
				onDragleave: A(F, ["prevent"]),
				onDrop: A(I, ["prevent"])
			}, [
				r[0] ||= s("i", {
					class: "fa fa-cloud-upload",
					"aria-hidden": "true"
				}, null, -1),
				s("span", null, C(t.dragText), 1),
				s("small", null, C(t.buttonText), 1)
			], 34)) : (g(), o("div", _n, [s("button", {
				class: "pk-upload__trigger",
				type: "button",
				disabled: t.disabled,
				onClick: S
			}, [r[1] ||= s("i", {
				class: "fa fa-cloud-upload",
				"aria-hidden": "true"
			}, null, -1), s("span", null, C(t.buttonText), 1)], 8, vn), t.autoUpload ? a("", !0) : (g(), o("button", {
				key: 0,
				class: "pk-upload__submit",
				type: "button",
				disabled: t.disabled || !b.value.length,
				onClick: L
			}, C(t.uploadText), 9, yn))])),
			t.tip ? (g(), o("div", bn, C(t.tip), 1)) : a("", !0),
			v.value.length ? (g(), o("ul", xn, [(g(!0), o(e, null, y(v.value, (e, n) => (g(), o("li", {
				key: e.uid,
				class: "pk-upload__item"
			}, [s("div", Sn, [s("div", Cn, [
				r[2] ||= s("i", {
					class: "fa fa-file-o",
					"aria-hidden": "true"
				}, null, -1),
				s("span", wn, C(e.name), 1),
				s("span", Tn, C(z(e.size)), 1),
				s("span", { class: f(["pk-upload__status", `is-${e.status}`]) }, C(x[e.status]), 3)
			]), s("div", En, [s("span", Dn, [s("span", {
				class: f(["pk-upload__progress-bar", { "is-error": e.status === "error" }]),
				style: p({ width: `${e.percentage || 0}%` })
			}, null, 6)]), s("span", On, C(e.percentage || 0) + "%", 1)])]), s("button", {
				class: "pk-upload__remove",
				type: "button",
				disabled: t.disabled,
				onClick: (e) => R(n)
			}, [...r[3] ||= [s("i", {
				class: "fa fa-times",
				"aria-hidden": "true"
			}, null, -1)]], 8, kn)]))), 128))])) : a("", !0)
		], 2));
	}
}), [["__scopeId", "data-v-7092c6ac"]]), jn = /* @__PURE__ */ Object.assign({
	"./components/PkAside/index.vue": P,
	"./components/PkButton/index.vue": L,
	"./components/PkCheckbox/index.vue": B,
	"./components/PkContainer/index.vue": W,
	"./components/PkDatePicker/index.vue": K,
	"./components/PkDialog/index.vue": oe,
	"./components/PkDropdown/index.vue": fe,
	"./components/PkFooter/index.vue": ve,
	"./components/PkForm/index.vue": xe,
	"./components/PkFormItem/index.vue": Ce,
	"./components/PkHeader/index.vue": De,
	"./components/PkInput/index.vue": ke,
	"./components/PkMain/index.vue": Ie,
	"./components/PkMessage/index.js": Ue,
	"./components/PkMessage/index.vue": ze,
	"./components/PkMessageBox/index.js": et,
	"./components/PkMessageBox/index.vue": Ke,
	"./components/PkNotification/index.js": lt,
	"./components/PkNotification/index.vue": nt,
	"./components/PkPagination/index.vue": mt,
	"./components/PkPanel/index.vue": xt,
	"./components/PkScrollbar/index.vue": Ct,
	"./components/PkSearch/index.vue": Et,
	"./components/PkSelect/index.vue": jt,
	"./components/PkSlider/index.vue": Vt,
	"./components/PkSwitch/index.vue": qt,
	"./components/PkTable/index.vue": Xt,
	"./components/PkTag/index.vue": nn,
	"./components/PkTree/index.vue": un,
	"./components/PkUpload/index.vue": hn
}), Mn = [], Nn = [];
for (let e in jn) {
	let t = jn[e].default;
	typeof t == "object" && typeof t.install == "function" ? Nn.push(t) : Mn.push(t);
}
var Pn = { install: (e) => {
	Mn.forEach((t) => {
		if (!t?.name) return;
		let n = t.name.replace(/Pk/g, "pk-").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
		e.component(n, t);
	}), Nn.forEach((t) => {
		typeof t.install == "function" && t.install(e);
	});
} };
//#endregion
export { I as PkAside, z as PkButton, U as PkCheckbox, G as PkContainer, ae as PkDatePicker, de as PkDialog, _e as PkDropdown, be as PkFooter, Se as PkForm, Ee as PkFormItem, q as PkHeader, Fe as PkInput, Re as PkMain, Ge as PkMessage, Z as PkMessageBox, Q as PkNotification, bt as PkPagination, St as PkPanel, Tt as PkScrollbar, At as PkSearch, Bt as PkSelect, Kt as PkSlider, $ as PkSwitch, tn as PkTable, rn as PkTag, mn as PkTree, An as PkUpload, Pn as default };
