"use strict";

exports.__esModule = true;
exports.default = void 0;

var _svgo = _interopRequireDefault(require("svgo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

var _default =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(function* (code, opts) {
    const svgo = new _svgo.default(opts);

    const _ref2 = yield svgo.optimize(code),
          data = _ref2.data;

    return data;
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;