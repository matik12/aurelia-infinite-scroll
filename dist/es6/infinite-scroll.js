System.register(['aurelia-framework'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var aurelia_framework_1;
    var InfiniteScrollCustomAttribute;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }],
        execute: function() {
            InfiniteScrollCustomAttribute = (function () {
                function InfiniteScrollCustomAttribute(element) {
                    var _this = this;
                    this.element = element;
                    this.isTicking = false;
                    this.scrollBuffer = 50;
                    this.isActive = true;
                    this.onScrollChange = function () {
                        if (!_this.isActive) {
                            return false;
                        }
                        if (!_this.isTicking) {
                            window.requestAnimationFrame(function () {
                                _this.checkScrollPosition();
                                _this.isTicking = false;
                            });
                        }
                        _this.isTicking = true;
                    };
                    this.element = element;
                }
                InfiniteScrollCustomAttribute.prototype.attached = function () {
                    window.addEventListener(InfiniteScrollCustomAttribute.ScrollEventName, this.onScrollChange);
                    this.onScrollChange();
                };
                InfiniteScrollCustomAttribute.prototype.detached = function () {
                    window.removeEventListener(InfiniteScrollCustomAttribute.ScrollEventName, this.onScrollChange);
                };
                InfiniteScrollCustomAttribute.prototype.callbackChanged = function (newCallback) {
                    this.callback = newCallback;
                };
                InfiniteScrollCustomAttribute.prototype.scrollBufferChanged = function (buffer) {
                    this.scrollBuffer = +buffer;
                };
                InfiniteScrollCustomAttribute.prototype.isActiveChanged = function (isActive) {
                    this.isActive = (isActive === 'true');
                };
                InfiniteScrollCustomAttribute.prototype.checkScrollPosition = function () {
                    var elementHeight = this.element.scrollHeight;
                    var elementOffsetTop = this.element.offsetTop;
                    var windowScrollPosition = window.innerHeight + window.pageYOffset;
                    var isPageScrolledToElementBottom = (windowScrollPosition + this.scrollBuffer) >= (elementHeight + elementOffsetTop);
                    if (this.callback && isPageScrolledToElementBottom) {
                        this.callback();
                    }
                };
                InfiniteScrollCustomAttribute.ScrollEventName = 'scroll';
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', Function)
                ], InfiniteScrollCustomAttribute.prototype, "callback", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', Number)
                ], InfiniteScrollCustomAttribute.prototype, "scrollBuffer", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', Boolean)
                ], InfiniteScrollCustomAttribute.prototype, "isActive", void 0);
                InfiniteScrollCustomAttribute = __decorate([
                    aurelia_framework_1.autoinject(), 
                    __metadata('design:paramtypes', [Element])
                ], InfiniteScrollCustomAttribute);
                return InfiniteScrollCustomAttribute;
            }());
            exports_1("InfiniteScrollCustomAttribute", InfiniteScrollCustomAttribute);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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ZWN0LCBiaW5kYWJsZSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIEluZmluaXRlU2Nyb2xsQ3VzdG9tQXR0cmlidXRlIHtcclxuICAgIHByaXZhdGUgaXNUaWNraW5nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQGJpbmRhYmxlIGNhbGxiYWNrOiBGdW5jdGlvbjtcclxuICAgIEBiaW5kYWJsZSBzY3JvbGxCdWZmZXI6IG51bWJlciA9IDUwO1xyXG4gICAgQGJpbmRhYmxlIGlzQWN0aXZlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIFNjcm9sbEV2ZW50TmFtZTogc3RyaW5nID0gJ3Njcm9sbCc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2hlZCgpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihJbmZpbml0ZVNjcm9sbEN1c3RvbUF0dHJpYnV0ZS5TY3JvbGxFdmVudE5hbWUsIHRoaXMub25TY3JvbGxDaGFuZ2UpO1xyXG4gICAgICAgIHRoaXMub25TY3JvbGxDaGFuZ2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBkZXRhY2hlZCgpIHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihJbmZpbml0ZVNjcm9sbEN1c3RvbUF0dHJpYnV0ZS5TY3JvbGxFdmVudE5hbWUsIHRoaXMub25TY3JvbGxDaGFuZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGxiYWNrQ2hhbmdlZChuZXdDYWxsYmFjazogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gbmV3Q2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsQnVmZmVyQ2hhbmdlZChidWZmZXI6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsQnVmZmVyID0gK2J1ZmZlcjtcclxuICAgIH1cclxuXHJcbiAgICBpc0FjdGl2ZUNoYW5nZWQoaXNBY3RpdmU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSAoaXNBY3RpdmUgPT09ICd0cnVlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblNjcm9sbENoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVGlja2luZykge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tTY3JvbGxQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1RpY2tpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmlzVGlja2luZyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja1Njcm9sbFBvc2l0aW9uKCkgeyAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZWxlbWVudEhlaWdodCA9IHRoaXMuZWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudE9mZnNldFRvcCA9ICg8YW55PnRoaXMuZWxlbWVudCkub2Zmc2V0VG9wO1xyXG4gICAgICAgIGNvbnN0IHdpbmRvd1Njcm9sbFBvc2l0aW9uID0gd2luZG93LmlubmVySGVpZ2h0ICsgd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICAgIGNvbnN0IGlzUGFnZVNjcm9sbGVkVG9FbGVtZW50Qm90dG9tID0gKHdpbmRvd1Njcm9sbFBvc2l0aW9uICsgdGhpcy5zY3JvbGxCdWZmZXIpID49IChlbGVtZW50SGVpZ2h0ICsgZWxlbWVudE9mZnNldFRvcCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNhbGxiYWNrICYmIGlzUGFnZVNjcm9sbGVkVG9FbGVtZW50Qm90dG9tKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
