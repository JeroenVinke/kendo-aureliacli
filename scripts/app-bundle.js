define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function App() {
    _classCallCheck(this, App);

    this.datasource = {
      type: 'odata',
      transport: {
        read: '//demos.telerik.com/kendo-ui/service/Northwind.svc/Orders'
      },
      schema: {
        model: {
          fields: {
            OrderID: { type: 'number' },
            Freight: { type: 'number' },
            ShipName: { type: 'string' },
            OrderDate: { type: 'date' },
            ShipCity: { type: 'string' }
          }
        }
      },
      pageSize: 9,
      serverPaging: true,
      serverFiltering: true,
      serverSorting: true
    };
  };

  var UpperValueConverter = exports.UpperValueConverter = function () {
    function UpperValueConverter() {
      _classCallCheck(this, UpperValueConverter);
    }

    UpperValueConverter.prototype.toView = function toView(value) {
      return value && value.toUpperCase();
    };

    return UpperValueConverter;
  }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources').plugin('aurelia-kendoui-bridge');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"aurelia-kendoui-bridge/grid/grid\"></require>\n  <require from=\"aurelia-kendoui-bridge/grid/col\"></require>\n\n  <ak-grid k-data-source.bind=\"datasource\"\n           k-pageable.bind=\"true\"\n           k-filterable.bind=\"true\"\n           k-sortable.bind=\"true\">\n    <ak-col k-title=\"OrderId\" k-field=\"OrderID\"></ak-col>\n    <ak-col k-field=\"Freight\"></ak-col>\n  </ak-grid>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map