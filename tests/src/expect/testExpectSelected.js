var Nocks = require('../../nocks.js');

module.exports = {
  setUp: function (callback) {
    this.client = require('../../nightwatch.js').init();
    callback();
  },

  'to be selected [PASSED]' : function(test) {
    Nocks.elementFound().selected();
    var expect = this.client.api.expect.element('#weblogin').to.be.selected;
    this.client.on('nightwatch:finished', function(results, errors) {
      test.equals(expect.assertion.selector, '#weblogin');
      test.equals(expect.assertion.negate, false);
      test.equals(expect.assertion.waitForMs, null);
      test.equals(expect.assertion.passed, true);
      test.equals(expect.assertion.resultValue, true);
      test.equals(expect.assertion.message, 'Expected element <#weblogin> to be selected');
      test.deepEqual(expect.assertion.elementResult, { ELEMENT: '0' });
      test.deepEqual(expect.assertion.messageParts, []);
      test.equals(results.passed, 1);
      test.equals(results.failed, 0);
      test.equals(results.tests[0].message, 'Expected element <#weblogin> to be selected');
      test.done();
    })
  },

  'to be selected with waitFor [PASSED]' : function(test) {
    Nocks.elementFound().selected();

    var expect = this.client.api.expect.element('#weblogin').to.be.selected.before(100);
    this.client.on('nightwatch:finished', function(results, errors) {
      test.equals(expect.assertion.waitForMs, 100);
      test.equals(expect.assertion.passed, true);
      test.equals(expect.assertion.message, 'Expected element <#weblogin> to be selected in 100ms - condition was met in '+ expect.assertion.elapsedTime +'ms');
      test.done();
    })
  },

  'to be selected with waitFor [FAILED]' : function(test) {
    this.client.api.globals.waitForConditionPollInterval = 50;

    Nocks.elementFound().notSelected(3);

    var expect = this.client.api.expect.element('#weblogin').to.be.selected.before(60);
    this.client.on('nightwatch:finished', function(results, errors) {
      test.equal(expect.assertion.waitForMs, 60);
      test.equals(expect.assertion.passed, false);
      test.equals(expect.assertion.message, 'Expected element <#weblogin> to be selected in 60ms');
      test.done();
    })
  },

  'to be selected [FAILED]' : function(test) {
    Nocks.elementFound().notSelected();

    var expect = this.client.api.expect.element('#weblogin').to.be.selected;
    this.client.on('nightwatch:finished', function(results, errors) {
      test.equals(expect.assertion.selector, '#weblogin');
      test.equals(expect.assertion.negate, false);
      test.equals(expect.assertion.waitForMs, null);
      test.equals(expect.assertion.passed, false);
      test.equals(expect.assertion.expected, 'selected');
      test.equals(expect.assertion.actual, 'not selected');
      test.equals(expect.assertion.resultValue, false);
      test.equals(expect.assertion.message, 'Expected element <#weblogin> to be selected');
      test.deepEqual(expect.assertion.elementResult, { ELEMENT: '0' });
      test.deepEqual(expect.assertion.messageParts, []);
      test.equals(results.passed, 0);
      test.equals(results.failed, 1);
      test.equals(results.tests[0].message, 'Expected element <#weblogin> to be selected');
      test.done();
    })
  },

  'to not be selected [PASSED]' : function(test) {
    Nocks.elementFound().notSelected();

    var expect = this.client.api.expect.element('#weblogin').to.not.be.selected;
    this.client.on('nightwatch:finished', function(results, errors) {
      test.equals(expect.assertion.selector, '#weblogin');
      test.equals(expect.assertion.negate, true);
      test.equals(expect.assertion.passed, true);
      test.equals(expect.assertion.expected, 'not selected');
      test.equals(expect.assertion.actual, 'not selected');
      test.equals(expect.assertion.resultValue, false);
      test.equals(expect.assertion.message, 'Expected element <#weblogin> to not be selected');
      test.deepEqual(expect.assertion.elementResult, { ELEMENT: '0' });
      test.deepEqual(expect.assertion.messageParts, []);
      test.equals(results.passed, 1);
      test.equals(results.failed, 0);
      test.equals(results.tests[0].message, 'Expected element <#weblogin> to not be selected');
      test.done();
    })
  },

  'to not be selected [FAILED]' : function(test) {
    Nocks.elementFound().selected();

    var expect = this.client.api.expect.element('#weblogin').to.not.be.selected;
    this.client.on('nightwatch:finished', function(results, errors) {
      test.equals(expect.assertion.selector, '#weblogin');
      test.equals(expect.assertion.negate, true);
      test.equals(expect.assertion.passed, false);
      test.equals(expect.assertion.expected, 'not selected');
      test.equals(expect.assertion.actual, 'selected');
      test.equals(expect.assertion.resultValue, true);
      test.equals(expect.assertion.message, 'Expected element <#weblogin> to not be selected');
      test.deepEqual(expect.assertion.elementResult, { ELEMENT: '0' });
      test.deepEqual(expect.assertion.messageParts, []);
      test.equals(results.passed, 0);
      test.equals(results.failed, 1);
      test.equals(results.tests[0].message, 'Expected element <#weblogin> to not be selected');
      test.done();
    })
  },

  'to be selected - element not found' : function(test) {
    Nocks.elementNotFound();

    var expect = this.client.api.expect.element('#weblogin').to.be.selected;
    this.client.on('nightwatch:finished', function(results, errors) {
      test.equals(expect.assertion.selector, '#weblogin');
      test.equals(expect.assertion.negate, false);
      test.equals(expect.assertion.waitForMs, null);
      test.equals(expect.assertion.passed, false);
      test.equals(expect.assertion.expected, 'selected');
      test.equals(expect.assertion.actual, 'not found');
      test.equals(expect.assertion.resultValue, null);
      test.equals(expect.assertion.message, 'Expected element <#weblogin> to be selected - element was not found');
      test.deepEqual(expect.assertion.messageParts, [' - element was not found']);
      test.equals(results.passed, 0);
      test.equals(results.failed, 1);
      test.equals(results.tests[0].message, 'Expected element <#weblogin> to be selected - element was not found');
      test.done();
    })
  },

  'to not be selected with waitFor [FAILED]' : function(test) {
    this.client.api.globals.waitForConditionPollInterval = 50;

    Nocks.elementFound().selected(3);

    var expect = this.client.api.expect.element('#weblogin').to.not.be.selected.before(120);
    this.client.on('nightwatch:finished', function(results, errors) {
      test.equal(expect.assertion.waitForMs, 120);
      test.equals(expect.assertion.passed, false);
      test.equals(expect.assertion.message, 'Expected element <#weblogin> to not be selected in 120ms');
      test.done();
    })
  },

  'to be selected with waitFor - element not found' : function(test) {
    this.client.api.globals.waitForConditionPollInterval = 50;

    Nocks.elementNotFound();

    var expect = this.client.api.expect.element('#weblogin').to.be.selected.before(60);
    this.client.on('nightwatch:finished', function(results, errors) {
      test.equal(expect.assertion.waitForMs, 60);
      test.equals(expect.assertion.passed, false);
      test.equals(expect.assertion.message, 'Expected element <#weblogin> to be selected in 60ms - element was not found');
      test.done();
    })
  },

  tearDown : function(callback) {
    this.client = null;
    Nocks.cleanAll();
    // clean up
    callback();
  }
};