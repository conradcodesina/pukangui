import { Fragment as e, Teleport as t, Transition as n, computed as r, createBlock as i, createCommentVNode as a, createElementBlock as o, createElementVNode as s, createTextVNode as c, createVNode as l, mergeProps as u, nextTick as d, normalizeClass as f, normalizeStyle as p, onBeforeUnmount as m, onMounted as h, openBlock as g, ref as _, render as v, renderList as y, renderSlot as b, resolveComponent as x, toDisplayString as S, useCssVars as C, useSlots as w, vModelText as T, watch as E, withCtx as D, withDirectives as O, withModifiers as k } from "vue";
//#region \0rolldown/runtime.js
var A = Object.defineProperty, j = (e, t) => {
	let n = {};
	for (var r in e) A(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || A(n, Symbol.toStringTag, { value: "Module" }), n;
}, M = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, N = /* @__PURE__ */ j({ default: () => F }), P = { class: "pk-aside" }, F = /* @__PURE__ */ M(/* @__PURE__ */ Object.assign({ name: "PkAside" }, {
	props: { width: {
		type: String,
		default: "200px"
	} },
	setup(e) {
		return C((t) => ({ v3bd1b8f2: e.width })), (e, t) => (g(), o("aside", P, [b(e.$slots, "default", {}, void 0, !0)]));
	}
}), [["__scopeId", "data-v-c8a03de9"]]), I = /* @__PURE__ */ j({ default: () => R }), L = ["disabled"], R = /* @__PURE__ */ M(/* @__PURE__ */ Object.assign({ name: "PkButton" }, {
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
		}, [b(e.$slots, "default", {}, void 0, !0)], 10, L));
	}
}), [["__scopeId", "data-v-d9da28af"]]), z = /* @__PURE__ */ j({ default: () => H }), B = ["value", "disabled"], V = { class: "pk-checkbox__name" }, H = /* @__PURE__ */ M(/* @__PURE__ */ Object.assign({ name: "PkCheckbox" }, {
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
		E(() => r.modelValue, (e) => {
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
			}, null, 8, B),
			s("label", V, S(e.labelName), 1)
		], 2));
	}
}), [["__scopeId", "data-v-b8b42a0b"]]), U = /* @__PURE__ */ j({ default: () => W }), W = /* @__PURE__ */ M(/* @__PURE__ */ Object.assign({ name: "PkContainer" }, {
	__name: "index",
	props: { padding: {
		type: String,
		default: "0px"
	} },
	setup(e) {
		let t = w(), n = r(() => t.default ? t.default().map((e) => (e.type?.name || e.type?.__name || "").toLowerCase()) : []), i = r(() => n.value.includes("pkheader") || n.value.includes("pk-header") || n.value.includes("pkfooter") || n.value.includes("pk-footer"));
		return (t, n) => (g(), o("section", {
			class: f(["pk-container", { is_container: i.value }]),
			style: p({ padding: e.padding })
		}, [b(t.$slots, "default", {}, void 0, !0)], 6));
	}
}), [["__scopeId", "data-v-be4ff647"]]), ee = /* @__PURE__ */ j({ default: () => ae }), G = { class: "pk-date-picker__prefix" }, te = [
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
], ie = { class: "pk-date-picker__suffix" }, ae = /* @__PURE__ */ M(/* @__PURE__ */ Object.assign({ name: "PkDatePicker" }, {
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
		}, C = (e) => {
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
			s("span", G, [s("i", {
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
				onChange: C
			}, null, 40, re)),
			s("span", ie, S(h.value), 1)
		], 6));
	}
}), [["__scopeId", "data-v-3ee01817"]]), oe = /* @__PURE__ */ j({ default: () => de }), se = { class: "pk-dialog__header" }, ce = { class: "pk-dialog__title" }, le = { class: "pk-dialog__body" }, ue = {
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
			default: D(() => [e.modelValue ? (g(), o("div", {
				key: 0,
				class: "pk-dialog__mask",
				onClick: f
			}, [s("div", {
				class: "pk-dialog",
				style: p({ width: e.width }),
				onClick: c[0] ||= k(() => {}, ["stop"])
			}, [
				s("div", se, [s("span", ce, S(e.title), 1), e.showClose ? (g(), o("button", {
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
}), fe = /* @__PURE__ */ j({ default: () => _e }), pe = {
	class: "pk-dropdown__button",
	type: "button"
}, me = {
	key: 0,
	class: "pk-dropdown__menu"
}, he = {
	key: 0,
	class: "pk-dropdown__divider"
}, ge = ["disabled", "onClick"], _e = /* @__PURE__ */ M(/* @__PURE__ */ Object.assign({ name: "PkDropdown" }, {
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
		}, C = () => {
			v &&= (clearTimeout(v), null);
		}, w = () => {
			x(!p.value);
		}, T = () => {
			C(), p.value && x(!1);
		}, E = () => {
			i.trigger === "click" && w();
		}, O = () => {
			i.trigger === "hover" && (C(), x(!0));
		}, k = () => {
			i.trigger === "hover" && (C(), v = setTimeout(T, 120));
		}, A = (e) => {
			e.disabled || (u("command", e.command, e), i.hideOnClick && T());
		}, j = (e) => {
			i.trigger === "click" && (d.value?.contains(e.target) || T());
		};
		return h(() => {
			document.addEventListener("click", j);
		}), m(() => {
			C(), document.removeEventListener("click", j);
		}), (r, i) => (g(), o("div", {
			ref_key: "dropdownRef",
			ref: d,
			class: "pk-dropdown",
			onMouseenter: O,
			onMouseleave: k
		}, [s("div", {
			class: "pk-dropdown__trigger",
			onClick: E
		}, [b(r.$slots, "default", {}, () => [s("button", pe, [c(S(t.triggerText) + " ", 1), i[0] ||= s("i", {
			class: "fa fa-angle-down",
			"aria-hidden": "true"
		}, null, -1)])], !0)]), l(n, { name: "pk-dropdown-fade" }, {
			default: D(() => [p.value ? (g(), o("div", me, [(g(!0), o(e, null, y(t.options, (t) => (g(), o(e, { key: t.command || t.label }, [t.divided ? (g(), o("div", he)) : a("", !0), s("button", {
				class: f(["pk-dropdown__item", { "is-disabled": t.disabled }]),
				type: "button",
				disabled: t.disabled,
				onClick: (e) => A(t)
			}, [t.icon ? (g(), o("i", {
				key: 0,
				class: f(`fa ${t.icon}`),
				"aria-hidden": "true"
			}, null, 2)) : a("", !0), s("span", null, S(t.label), 1)], 10, ge)], 64))), 128))])) : a("", !0)]),
			_: 1
		})], 544));
	}
}), [["__scopeId", "data-v-b872f056"]]), ve = /* @__PURE__ */ j({ default: () => be }), ye = { class: "pk-footer" }, be = /* @__PURE__ */ M(/* @__PURE__ */ Object.assign({ name: "PkFooter" }, {
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
		return C((t) => ({
			v6a4c0333: e.height,
			v7f4b0b85: e.padding
		})), (e, t) => (g(), o("footer", ye, [b(e.$slots, "default", {}, void 0, !0)]));
	}
}), [["__scopeId", "data-v-b1616a78"]]), xe = /* @__PURE__ */ j({ default: () => Se }), Se = /* @__PURE__ */ M(/* @__PURE__ */ Object.assign({ name: "PkForm" }, {
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
			onSubmit: k(r, ["prevent"])
		}, [b(t.$slots, "default", {}, void 0, !0)], 34));
	}
}), [["__scopeId", "data-v-021a0201"]]), Ce = /* @__PURE__ */ j({ default: () => K }), we = { class: "pk-form-item__content" }, Te = {
	key: 0,
	class: "pk-form-item__message"
}, K = /* @__PURE__ */ M(/* @__PURE__ */ Object.assign({ name: "PkFormItem" }, {
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
		}, S(e.label), 5), s("div", we, [b(t.$slots, "default", {}, void 0, !0), e.message ? (g(), o("div", Te, S(e.message), 1)) : a("", !0)])], 2));
	}
}), [["__scopeId", "data-v-c1b747f3"]]), Ee = /* @__PURE__ */ j({ default: () => q }), De = { class: "pk-header" }, q = /* @__PURE__ */ M(/* @__PURE__ */ Object.assign({ name: "PkHeader" }, {
	props: { height: {
		type: String,
		default: "60px"
	} },
	setup(e) {
		return C((t) => ({ v73e4c94e: e.height })), (e, t) => (g(), o("header", De, [b(e.$slots, "default", {}, void 0, !0)]));
	}
}), [["__scopeId", "data-v-a3e45165"]]), Oe = /* @__PURE__ */ j({ default: () => Pe }), ke = {
	key: 0,
	class: "pk-input__prefix"
}, Ae = [
	"value",
	"type",
	"placeholder",
	"disabled",
	"readonly",
	"maxlength",
	"autocomplete"
], je = [
	"value",
	"placeholder",
	"disabled",
	"readonly",
	"maxlength",
	"rows",
	"autocomplete"
], Me = {
	key: 3,
	class: "pk-input__suffix"
}, Ne = ["aria-label"], Pe = /* @__PURE__ */ M(/* @__PURE__ */ Object.assign({
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
		let i = e, c = n, l = w(), m = _(null), v = _(!1), y = _(!1), x = _(!1), S = r(() => (i.modelValue ?? "").toString()), C = r(() => ({ width: i.width })), T = r(() => !!(l.prefix || l.after)), D = r(() => !!(l.suffix || l.before)), O = r(() => i.type === "textarea"), A = r(() => {
			let e = Number(i.rows);
			return Number.isFinite(e) && e > 0 ? e : 2;
		}), j = r(() => i.type !== "password" || !i.showPassword ? i.type : x.value ? "text" : "password"), M = r(() => i.clearable && !i.disabled && !i.readonly && S.value.length > 0), N = r(() => !O.value && i.type === "password" && i.showPassword && !i.disabled), P = r(() => M.value || N.value), F = (e) => {
			let t = Number.parseFloat(window.getComputedStyle(e).lineHeight);
			return Number.isFinite(t) ? t : 20;
		}, I = () => {
			if (!O.value || !i.autosize || !m.value) return;
			let e = m.value, t = F(e), n = typeof i.autosize == "object" ? i.autosize : {}, r = Number(n.minRows ?? A.value), a = Number(n.maxRows), o = Number.isFinite(r) && r > 0 ? r * t : A.value * t, s = Number.isFinite(a) && a > 0 ? a * t : null;
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
		}, ee = () => {
			m.value?.blur();
		}, G = () => {
			L("", void 0), c("clear"), d(W);
		}, te = () => {
			x.value = !x.value, d(W);
		};
		return t({
			focus: W,
			blur: ee,
			clear: G
		}), E(() => [
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
					"has-prefix": T.value,
					"has-suffix": D.value,
					"has-action": P.value,
					"is-textarea": O.value
				}
			]]),
			style: p(C.value)
		}, [
			T.value ? (g(), o("span", ke, [b(t.$slots, "prefix", {}, () => [b(t.$slots, "after", {}, void 0, !0)], !0)])) : a("", !0),
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
				rows: A.value,
				autocomplete: e.autocomplete,
				onInput: R,
				onChange: z,
				onFocus: B,
				onBlur: V,
				onCompositionstart: H,
				onCompositionend: U
			}), null, 16, je)) : (g(), o("input", u({
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
			}), null, 16, Ae)),
			D.value || M.value || N.value ? (g(), o("span", Me, [
				M.value ? (g(), o("button", {
					key: 0,
					class: "pk-input__icon-button",
					type: "button",
					"aria-label": "清空",
					onMousedown: n[0] ||= k(() => {}, ["prevent"]),
					onClick: G
				}, [...n[2] ||= [s("i", {
					class: "fa fa-times-circle",
					"aria-hidden": "true"
				}, null, -1)]], 32)) : a("", !0),
				N.value ? (g(), o("button", {
					key: 1,
					class: "pk-input__icon-button pk-input__password-button",
					type: "button",
					"aria-label": x.value ? "隐藏密码" : "显示密码",
					onMousedown: n[1] ||= k(() => {}, ["prevent"]),
					onClick: te
				}, [s("i", {
					class: f(x.value ? "fa fa-eye-slash" : "fa fa-eye"),
					"aria-hidden": "true"
				}, null, 2)], 40, Ne)) : a("", !0),
				b(t.$slots, "suffix", {}, () => [b(t.$slots, "before", {}, void 0, !0)], !0)
			])) : a("", !0)
		], 6));
	}
}), [["__scopeId", "data-v-a6d695da"]]), Fe = /* @__PURE__ */ j({ default: () => Le }), Ie = { class: "main_container" }, Le = /* @__PURE__ */ M(/* @__PURE__ */ Object.assign({ name: "PkMain" }, {
	props: { padding: {
		type: String,
		default: "10px"
	} },
	setup(e) {
		return (t, n) => (g(), o("main", {
			class: "pk-main",
			style: p({ padding: e.padding })
		}, [s("div", Ie, [b(t.$slots, "default", {}, void 0, !0)])], 4));
	}
}), [["__scopeId", "data-v-2ed3fd6d"]]), Re = /* @__PURE__ */ j({ default: () => Ve }), ze = { class: "pk-message__icon" }, Be = { class: "pk-message__content" }, Ve = /* @__PURE__ */ Object.assign({ name: "PkMessage" }, {
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
		return (t, i) => (g(), o(e, null, [s("span", ze, S(n[r.icon]), 1), s("span", Be, S(r.message), 1)], 64));
	}
}), He = /* @__PURE__ */ j({
	PkMessage: () => We,
	default: () => Ue
}), J = 50, Y = 30, X = (e, t = 3e3) => {
	let n = document.createElement("div");
	n.classList.add(`pk-message--${e.type}`, "pk-message", "message_warpper", "show");
	let r = document.getElementsByClassName("message_warpper").length;
	n.style.top = `${Y + r * J - 10}px`, setTimeout(() => {
		n.style.top = `${Y + r * J + 10}px`, n.style.opacity = "1";
	}, 10);
	let i = document.body.appendChild(n);
	v(l(Ve, {
		icon: e.type,
		message: e.message
	}), i), setTimeout(() => {
		v(null, i), n.remove(), n.style.opacity = "0", document.querySelectorAll(".message_warpper").forEach((e, t) => {
			e.style.top = `${Y + t * J}px`, console.log(e.style.top);
		});
	}, t);
}, Ue = {
	name: "PkMessage",
	install(e) {
		e.config.globalProperties.$pkMessage = X, e.provide("PkMessage", X);
	}
}, We = X, Ge = /* @__PURE__ */ j({ default: () => Qe }), Ke = { class: "pk-message-box__mask" }, qe = { class: "pk-message-box" }, Je = { class: "pk-message-box__header" }, Ye = { class: "pk-message-box__title" }, Xe = { class: "pk-message-box__body" }, Ze = { class: "pk-message-box__footer" }, Qe = /* @__PURE__ */ Object.assign({ name: "PkMessageBox" }, {
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
		return (t, n) => (g(), o("div", Ke, [s("div", qe, [
			s("div", Je, [s("span", Ye, S(e.title), 1), s("button", {
				class: "pk-message-box__close",
				type: "button",
				onClick: n[0] ||= (e) => t.$emit("cancel")
			}, "x")]),
			s("div", Xe, S(e.message), 1),
			s("div", Ze, [s("button", {
				class: "pk-message-box__button",
				type: "button",
				onClick: n[1] ||= (e) => t.$emit("cancel")
			}, S(e.cancelText), 1), s("button", {
				class: "pk-message-box__button pk-message-box__button--primary",
				type: "button",
				onClick: n[2] ||= (e) => t.$emit("confirm")
			}, S(e.confirmText), 1)])
		])]));
	}
}), $e = /* @__PURE__ */ j({
	PkMessageBox: () => Z,
	default: () => et
}), Z = (e = {}) => {
	let t = document.createElement("div");
	document.body.appendChild(t);
	let n = () => {
		v(null, t), t.remove();
	};
	return new Promise((r, i) => {
		v(l(Qe, {
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
}, et = {
	name: "PkMessageBox",
	install(e) {
		e.config.globalProperties.$pkMessageBox = Z, e.provide("PkMessageBox", Z);
	}
}, tt = /* @__PURE__ */ j({ default: () => st }), nt = { class: "pk-notification__icon" }, rt = { class: "pk-notification__content" }, it = { class: "pk-notification__title" }, at = { class: "pk-notification__message" }, ot = {
	key: 0,
	class: "pk-notification__progress"
}, st = /* @__PURE__ */ Object.assign({ name: "PkNotification" }, {
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
			s("div", nt, S(i.value), 1),
			s("div", rt, [s("div", it, S(e.title), 1), s("div", at, S(e.message), 1)]),
			s("button", {
				class: "pk-notification__close",
				type: "button",
				onClick: n[0] ||= (e) => t.$emit("close")
			}, "x"),
			c.value ? (g(), o("div", ot, [...n[1] ||= [s("span", { class: "pk-notification__progress-inner" }, null, -1)]])) : a("", !0)
		], 6));
	}
}), ct = /* @__PURE__ */ j({
	PkNotification: () => Q,
	default: () => ft
}), lt = 16, ut = 24, dt = () => {
	let e = ut;
	document.querySelectorAll(".pk-notification").forEach((t) => {
		t.style.top = `${e}px`, e += t.offsetHeight + lt;
	});
}, Q = (e = {}) => {
	let t = document.createElement("div");
	document.body.appendChild(t);
	let n = e.duration ?? 4500, r = null, i = !1, a = () => {
		i || (i = !0, r && clearTimeout(r), v(null, t), t.remove(), dt());
	};
	return v(l(st, {
		title: e.title,
		message: e.message,
		type: e.type || "info",
		duration: n,
		onClose: a
	}), t), dt(), n > 0 && (r = setTimeout(a, n)), { close: a };
}, ft = {
	name: "PkNotification",
	install(e) {
		e.config.globalProperties.$pkNotification = Q, e.provide("PkNotification", Q);
	}
}, pt = /* @__PURE__ */ j({ default: () => yt }), mt = { class: "pk-pagination" }, ht = {
	key: 0,
	class: "pk-pagination__total"
}, gt = ["disabled"], _t = ["onClick"], vt = ["disabled"], yt = /* @__PURE__ */ M(/* @__PURE__ */ Object.assign({ name: "PkPagination" }, {
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
		return (n, r) => (g(), o("div", mt, [
			t.showTotal ? (g(), o("span", ht, "共 " + S(t.total) + " 条", 1)) : a("", !0),
			s("button", {
				class: "pk-pagination__button",
				type: "button",
				disabled: t.currentPage <= 1,
				onClick: r[0] ||= (e) => d(t.currentPage - 1)
			}, [...r[2] ||= [s("i", {
				class: "fa fa-angle-left",
				"aria-hidden": "true"
			}, null, -1)]], 8, gt),
			(g(!0), o(e, null, y(u.value, (e) => (g(), o("button", {
				key: e,
				class: f(["pk-pagination__pager", { "is-active": e === t.currentPage }]),
				type: "button",
				onClick: (t) => d(e)
			}, S(e), 11, _t))), 128)),
			s("button", {
				class: "pk-pagination__button",
				type: "button",
				disabled: t.currentPage >= l.value,
				onClick: r[1] ||= (e) => d(t.currentPage + 1)
			}, [...r[3] ||= [s("i", {
				class: "fa fa-angle-right",
				"aria-hidden": "true"
			}, null, -1)]], 8, vt)
		]));
	}
}), [["__scopeId", "data-v-9c7a4065"]]), bt = /* @__PURE__ */ j({ default: () => St }), xt = { class: "pk-scrollbar" }, St = /* @__PURE__ */ M(/* @__PURE__ */ Object.assign({ name: "PkScrollbar" }, {
	props: { height: {
		type: String,
		default: "100%"
	} },
	setup(e) {
		return C((t) => ({ v4504c016: e.height })), (e, t) => (g(), o("div", xt, [b(e.$slots, "default", {}, void 0, !0)]));
	}
}), [["__scopeId", "data-v-4e39e52d"]]), Ct = /* @__PURE__ */ j({ default: () => Dt }), wt = { name: "PkSearch" }, Tt = { class: "pk-Search" };
function Et(e, t, n, r, i, a) {
	return g(), o("div", Tt, [...t[0] ||= [s("div", null, null, -1)]]);
}
var Dt = /* @__PURE__ */ M(wt, [["render", Et], ["__scopeId", "data-v-5e6375ce"]]), Ot = /* @__PURE__ */ j({ default: () => Lt }), kt = ["disabled"], At = { class: "pk-select__value" }, jt = {
	key: 0,
	class: "pk-select__dropdown"
}, Mt = {
	key: 0,
	class: "pk-select__search"
}, Nt = ["placeholder"], Pt = ["onClick"], Ft = {
	key: 0,
	class: "fa fa-check",
	"aria-hidden": "true"
}, It = {
	key: 1,
	class: "pk-select__empty"
}, Lt = /* @__PURE__ */ M(/* @__PURE__ */ Object.assign({ name: "PkSelect" }, {
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
		let c = t, u = i, v = _(null), b = _(null), x = _(!1), C = _(""), w = r(() => c.options.find((e) => e.value === c.modelValue)), A = r(() => {
			let e = C.value.trim().toLowerCase();
			return !c.filterable || !e ? c.options : c.options.filter((t) => {
				let n = String(t.label ?? "").toLowerCase(), r = String(t.value ?? "").toLowerCase();
				return n.includes(e) || r.includes(e);
			});
		}), j = () => {
			c.disabled || (x.value = !x.value);
		}, M = () => {
			x.value = !1, C.value = "";
		}, N = (e) => {
			e.disabled || (u("update:modelValue", e.value), u("change", e.value), M());
		}, P = (e) => {
			v.value?.contains(e.target) || M();
		};
		return h(() => {
			document.addEventListener("click", P);
		}), m(() => {
			document.removeEventListener("click", P);
		}), E(x, (e) => {
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
		}, [s("span", At, S(w.value?.label || t.placeholder), 1), i[2] ||= s("i", {
			class: "fa fa-angle-down pk-select__arrow",
			"aria-hidden": "true"
		}, null, -1)], 8, kt), l(n, { name: "pk-select-fade" }, {
			default: D(() => [x.value ? (g(), o("div", jt, [
				t.filterable ? (g(), o("div", Mt, [i[3] ||= s("i", {
					class: "fa fa-search",
					"aria-hidden": "true"
				}, null, -1), O(s("input", {
					ref_key: "searchInputRef",
					ref: b,
					"onUpdate:modelValue": i[0] ||= (e) => C.value = e,
					class: "pk-select__search-input",
					type: "text",
					placeholder: t.filterPlaceholder,
					onClick: i[1] ||= k(() => {}, ["stop"])
				}, null, 8, Nt), [[T, C.value]])])) : a("", !0),
				(g(!0), o(e, null, y(A.value, (e) => (g(), o("div", {
					key: e.value,
					class: f(["pk-select__option", {
						"is-selected": e.value === t.modelValue,
						"is-disabled": e.disabled
					}]),
					onClick: (t) => N(e)
				}, [s("span", null, S(e.label), 1), e.value === t.modelValue ? (g(), o("i", Ft)) : a("", !0)], 10, Pt))), 128)),
				A.value.length === 0 ? (g(), o("div", It, "暂无数据")) : a("", !0)
			])) : a("", !0)]),
			_: 1
		})], 6));
	}
}), [["__scopeId", "data-v-2e4c40d9"]]), Rt = /* @__PURE__ */ j({ default: () => Ut }), zt = { class: "pk-slider__track-wrap" }, Bt = { class: "pk-slider__track" }, Vt = [
	"value",
	"min",
	"max",
	"step",
	"disabled"
], Ht = {
	key: 0,
	class: "pk-slider__value"
}, Ut = /* @__PURE__ */ M(/* @__PURE__ */ Object.assign({ name: "PkSlider" }, {
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
		C((e) => ({ v1f4a5a8a: c.value }));
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
		}, [s("div", zt, [s("div", Bt, [s("div", {
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
		}, null, 40, Vt)]), e.showValue ? (g(), o("span", Ht, S(e.modelValue), 1)) : a("", !0)], 4));
	}
}), [["__scopeId", "data-v-ab6c9385"]]), Wt = /* @__PURE__ */ j({ default: () => qt }), Gt = ["disabled", "aria-checked"], Kt = {
	key: 0,
	class: "pk-switch__text"
}, qt = /* @__PURE__ */ M(/* @__PURE__ */ Object.assign({ name: "PkSwitch" }, {
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
		}, [n[0] ||= s("span", { class: "pk-switch__core" }, null, -1), e.activeText || e.inactiveText ? (g(), o("span", Kt, S(c.value ? e.activeText : e.inactiveText), 1)) : a("", !0)], 10, Gt));
	}
}), [["__scopeId", "data-v-4fafd5a6"]]), Jt = /* @__PURE__ */ j({ default: () => $t }), Yt = { class: "pk-table__inner" }, Xt = { key: 0 }, Zt = { key: 1 }, Qt = ["colspan"], $t = /* @__PURE__ */ M(/* @__PURE__ */ Object.assign({ name: "PkTable" }, {
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
		return (n, i) => (g(), o("div", { class: f(["pk-table", { "pk-table--border": t.border }]) }, [s("table", Yt, [s("thead", null, [s("tr", null, [(g(!0), o(e, null, y(t.columns, (e) => (g(), o("th", {
			key: e.prop || e.label,
			style: p({
				width: e.width,
				textAlign: e.align || "left"
			})
		}, S(e.label), 5))), 128))])]), t.data.length ? (g(), o("tbody", Xt, [(g(!0), o(e, null, y(t.data, (i, a) => (g(), o("tr", { key: r(i, a) }, [(g(!0), o(e, null, y(t.columns, (e) => (g(), o("td", {
			key: e.prop || e.label,
			style: p({ textAlign: e.align || "left" })
		}, [b(n.$slots, e.prop, {
			row: i,
			column: e,
			index: a
		}, () => [c(S(i[e.prop]), 1)], !0)], 4))), 128))]))), 128))])) : (g(), o("tbody", Zt, [s("tr", null, [s("td", {
			class: "pk-table__empty",
			colspan: t.columns.length || 1
		}, S(t.emptyText), 9, Qt)])]))])], 2));
	}
}), [["__scopeId", "data-v-562b1b4d"]]), en = /* @__PURE__ */ j({ default: () => tn }), tn = /* @__PURE__ */ M(/* @__PURE__ */ Object.assign({ name: "PkTag" }, {
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
}), [["__scopeId", "data-v-9abea43a"]]), nn = { class: "pk-tree-node" }, rn = {
	key: 1,
	class: "pk-tree-node__placeholder"
}, an = { class: "pk-tree-node__label" }, on = {
	key: 0,
	class: "pk-tree-node__children"
}, sn = /* @__PURE__ */ M(/* @__PURE__ */ Object.assign({ name: "TreeNode" }, {
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
			return g(), o("li", nn, [s("div", {
				class: "pk-tree-node__content",
				style: p({ paddingLeft: `${t.level * t.indent}px` }),
				onClick: h
			}, [d.value ? (g(), o("button", {
				key: 0,
				class: "pk-tree-node__toggle",
				type: "button",
				onClick: k(m, ["stop"])
			}, [s("i", {
				class: f(u.value ? "fa fa-caret-down" : "fa fa-caret-right"),
				"aria-hidden": "true"
			}, null, 2)])) : (g(), o("span", rn)), s("span", an, S(t.node[t.labelKey]), 1)], 4), d.value && u.value ? (g(), o("ul", on, [(g(!0), o(e, null, y(t.node[t.childrenKey], (e) => (g(), i(c, {
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
}), [["__scopeId", "data-v-e0cfe930"]]), cn = /* @__PURE__ */ j({ default: () => $ }), ln = { class: "pk-tree" }, un = {
	key: 0,
	class: "pk-tree__list"
}, dn = {
	key: 1,
	class: "pk-tree__empty"
}, $ = /* @__PURE__ */ M(/* @__PURE__ */ Object.assign({ name: "PkTree" }, {
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
		return (n, r) => (g(), o("div", ln, [t.data.length ? (g(), o("ul", un, [(g(!0), o(e, null, y(t.data, (e) => (g(), i(sn, {
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
		]))), 128))])) : (g(), o("div", dn, S(t.emptyText), 1))]));
	}
}), [["__scopeId", "data-v-28ccfbcc"]]), fn = /* @__PURE__ */ j({ default: () => Dn }), pn = [
	"accept",
	"multiple",
	"disabled"
], mn = {
	key: 1,
	class: "pk-upload__actions"
}, hn = ["disabled"], gn = ["disabled"], _n = {
	key: 2,
	class: "pk-upload__tip"
}, vn = {
	key: 3,
	class: "pk-upload__list"
}, yn = { class: "pk-upload__main" }, bn = { class: "pk-upload__file" }, xn = { class: "pk-upload__name" }, Sn = { class: "pk-upload__size" }, Cn = { class: "pk-upload__progress" }, wn = { class: "pk-upload__progress-track" }, Tn = { class: "pk-upload__percent" }, En = ["disabled", "onClick"], Dn = /* @__PURE__ */ M(/* @__PURE__ */ Object.assign({ name: "PkUpload" }, {
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
		}, C = () => {
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
		}, A = (e) => {
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
			T(n), c.autoUpload && t.forEach(A);
		}, P = () => {
			c.disabled || (d.value = !0);
		}, F = () => {
			d.value = !1;
		}, I = (e) => {
			d.value = !1, !c.disabled && N(Array.from(e.dataTransfer?.files || []));
		}, L = () => {
			b.value.forEach(A);
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
			}, null, 40, pn),
			t.drag ? (g(), o("div", {
				key: 0,
				class: f(["pk-upload__drag", { "is-dragover": d.value }]),
				onClick: C,
				onDragover: k(P, ["prevent"]),
				onDragleave: k(F, ["prevent"]),
				onDrop: k(I, ["prevent"])
			}, [
				r[0] ||= s("i", {
					class: "fa fa-cloud-upload",
					"aria-hidden": "true"
				}, null, -1),
				s("span", null, S(t.dragText), 1),
				s("small", null, S(t.buttonText), 1)
			], 34)) : (g(), o("div", mn, [s("button", {
				class: "pk-upload__trigger",
				type: "button",
				disabled: t.disabled,
				onClick: C
			}, [r[1] ||= s("i", {
				class: "fa fa-cloud-upload",
				"aria-hidden": "true"
			}, null, -1), s("span", null, S(t.buttonText), 1)], 8, hn), t.autoUpload ? a("", !0) : (g(), o("button", {
				key: 0,
				class: "pk-upload__submit",
				type: "button",
				disabled: t.disabled || !b.value.length,
				onClick: L
			}, S(t.uploadText), 9, gn))])),
			t.tip ? (g(), o("div", _n, S(t.tip), 1)) : a("", !0),
			v.value.length ? (g(), o("ul", vn, [(g(!0), o(e, null, y(v.value, (e, n) => (g(), o("li", {
				key: e.uid,
				class: "pk-upload__item"
			}, [s("div", yn, [s("div", bn, [
				r[2] ||= s("i", {
					class: "fa fa-file-o",
					"aria-hidden": "true"
				}, null, -1),
				s("span", xn, S(e.name), 1),
				s("span", Sn, S(z(e.size)), 1),
				s("span", { class: f(["pk-upload__status", `is-${e.status}`]) }, S(x[e.status]), 3)
			]), s("div", Cn, [s("span", wn, [s("span", {
				class: f(["pk-upload__progress-bar", { "is-error": e.status === "error" }]),
				style: p({ width: `${e.percentage || 0}%` })
			}, null, 6)]), s("span", Tn, S(e.percentage || 0) + "%", 1)])]), s("button", {
				class: "pk-upload__remove",
				type: "button",
				disabled: t.disabled,
				onClick: (e) => R(n)
			}, [...r[3] ||= [s("i", {
				class: "fa fa-times",
				"aria-hidden": "true"
			}, null, -1)]], 8, En)]))), 128))])) : a("", !0)
		], 2));
	}
}), [["__scopeId", "data-v-7092c6ac"]]), On = /* @__PURE__ */ Object.assign({
	"./components/PkAside/index.vue": N,
	"./components/PkButton/index.vue": I,
	"./components/PkCheckbox/index.vue": z,
	"./components/PkContainer/index.vue": U,
	"./components/PkDatePicker/index.vue": ee,
	"./components/PkDialog/index.vue": oe,
	"./components/PkDropdown/index.vue": fe,
	"./components/PkFooter/index.vue": ve,
	"./components/PkForm/index.vue": xe,
	"./components/PkFormItem/index.vue": Ce,
	"./components/PkHeader/index.vue": Ee,
	"./components/PkInput/index.vue": Oe,
	"./components/PkMain/index.vue": Fe,
	"./components/PkMessage/index.js": He,
	"./components/PkMessage/index.vue": Re,
	"./components/PkMessageBox/index.js": $e,
	"./components/PkMessageBox/index.vue": Ge,
	"./components/PkNotification/index.js": ct,
	"./components/PkNotification/index.vue": tt,
	"./components/PkPagination/index.vue": pt,
	"./components/PkScrollbar/index.vue": bt,
	"./components/PkSearch/index.vue": Ct,
	"./components/PkSelect/index.vue": Ot,
	"./components/PkSlider/index.vue": Rt,
	"./components/PkSwitch/index.vue": Wt,
	"./components/PkTable/index.vue": Jt,
	"./components/PkTag/index.vue": en,
	"./components/PkTree/index.vue": cn,
	"./components/PkUpload/index.vue": fn
}), kn = [], An = [];
for (let e in On) {
	let t = On[e].default;
	typeof t == "object" && typeof t.install == "function" ? An.push(t) : kn.push(t);
}
var jn = { install: (e) => {
	kn.forEach((t) => {
		if (!t?.name) return;
		let n = t.name.replace(/Pk/g, "pk-").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
		e.component(n, t);
	}), An.forEach((t) => {
		typeof t.install == "function" && t.install(e);
	});
} };
//#endregion
export { F as PkAside, R as PkButton, H as PkCheckbox, W as PkContainer, ae as PkDatePicker, de as PkDialog, _e as PkDropdown, be as PkFooter, Se as PkForm, K as PkFormItem, q as PkHeader, Pe as PkInput, Le as PkMain, We as PkMessage, Z as PkMessageBox, Q as PkNotification, yt as PkPagination, St as PkScrollbar, Dt as PkSearch, Lt as PkSelect, Ut as PkSlider, qt as PkSwitch, $t as PkTable, tn as PkTag, $ as PkTree, Dn as PkUpload, jn as default };
