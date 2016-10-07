/* */ 
define(['exports', './accordion/aubs-accordion', './accordion/aubs-accordion-group', './buttons/aubs-btn-checkbox', './buttons/aubs-btn-disabled', './buttons/aubs-btn-loading', './buttons/aubs-btn-radio', './dropdown/aubs-dropdown', './dropdown/aubs-dropdown-toggle', './popover/aubs-popover', './popover/aubs-custom-popover', './tabs/aubs-tab', './tabs/aubs-tabset', './tooltip/aubs-tooltip'], function (exports, _aubsAccordion, _aubsAccordionGroup, _aubsBtnCheckbox, _aubsBtnDisabled, _aubsBtnLoading, _aubsBtnRadio, _aubsDropdown, _aubsDropdownToggle, _aubsPopover, _aubsCustomPopover, _aubsTab, _aubsTabset, _aubsTooltip) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.AubsTooltipCustomAttribute = exports.AubsTabsetCustomElement = exports.AubsTabCustomElement = exports.AubsCustomPopoverCustomElement = exports.AubsPopoverCustomAttribute = exports.AubsDropdownToggleCustomAttribute = exports.AubsDropdownCustomAttribute = exports.AubsBtnRadioCustomAttribute = exports.AubsBtnLoadingCustomAttribute = exports.AubsBtnDisabledCustomAttribute = exports.AubsBtnCheckboxCustomAttribute = exports.AubsAccordionGroupCustomElement = exports.AubsAccordionCustomElement = undefined;
    exports.configure = configure;
    function configure(config) {
        config.globalResources('./accordion/aubs-accordion');
        config.globalResources('./accordion/aubs-accordion-group');
        config.globalResources('./buttons/aubs-btn-checkbox');
        config.globalResources('./buttons/aubs-btn-disabled');
        config.globalResources('./buttons/aubs-btn-loading');
        config.globalResources('./buttons/aubs-btn-radio');
        config.globalResources('./dropdown/aubs-dropdown');
        config.globalResources('./dropdown/aubs-dropdown-toggle');
        config.globalResources('./popover/aubs-popover');
        config.globalResources('./popover/aubs-custom-popover');
        config.globalResources('./tabs/aubs-tab');
        config.globalResources('./tabs/aubs-tabset');
        config.globalResources('./tooltip/aubs-tooltip');
    }

    exports.AubsAccordionCustomElement = _aubsAccordion.AubsAccordionCustomElement;
    exports.AubsAccordionGroupCustomElement = _aubsAccordionGroup.AubsAccordionGroupCustomElement;
    exports.AubsBtnCheckboxCustomAttribute = _aubsBtnCheckbox.AubsBtnCheckboxCustomAttribute;
    exports.AubsBtnDisabledCustomAttribute = _aubsBtnDisabled.AubsBtnDisabledCustomAttribute;
    exports.AubsBtnLoadingCustomAttribute = _aubsBtnLoading.AubsBtnLoadingCustomAttribute;
    exports.AubsBtnRadioCustomAttribute = _aubsBtnRadio.AubsBtnRadioCustomAttribute;
    exports.AubsDropdownCustomAttribute = _aubsDropdown.AubsDropdownCustomAttribute;
    exports.AubsDropdownToggleCustomAttribute = _aubsDropdownToggle.AubsDropdownToggleCustomAttribute;
    exports.AubsPopoverCustomAttribute = _aubsPopover.AubsPopoverCustomAttribute;
    exports.AubsCustomPopoverCustomElement = _aubsCustomPopover.AubsCustomPopoverCustomElement;
    exports.AubsTabCustomElement = _aubsTab.AubsTabCustomElement;
    exports.AubsTabsetCustomElement = _aubsTabset.AubsTabsetCustomElement;
    exports.AubsTooltipCustomAttribute = _aubsTooltip.AubsTooltipCustomAttribute;
});