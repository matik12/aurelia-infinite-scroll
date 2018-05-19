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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZmluaXRlLXNjcm9sbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQVNJLHVDQUFvQixPQUFnQjtvQkFUeEMsaUJBdURDO29CQTlDdUIsWUFBTyxHQUFQLE9BQU8sQ0FBUztvQkFSNUIsY0FBUyxHQUFZLEtBQUssQ0FBQztvQkFHekIsaUJBQVksR0FBVyxFQUFFLENBQUM7b0JBQzFCLGFBQVEsR0FBWSxJQUFJLENBQUM7b0JBeUIzQixtQkFBYyxHQUFHO3dCQUNyQixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzRCQUNqQixNQUFNLENBQUMsS0FBSyxDQUFDO3dCQUNqQixDQUFDO3dCQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7NEJBQ2xCLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQztnQ0FDekIsS0FBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7Z0NBQzNCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDOzRCQUMzQixDQUFDLENBQUMsQ0FBQzt3QkFDUCxDQUFDO3dCQUVELEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO29CQUMxQixDQUFDLENBQUE7b0JBakNHLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2dCQUMzQixDQUFDO2dCQUVELGdEQUFRLEdBQVI7b0JBQ0ksTUFBTSxDQUFDLGdCQUFnQixDQUFDLDZCQUE2QixDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQzVGLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDMUIsQ0FBQztnQkFFRCxnREFBUSxHQUFSO29CQUNJLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyw2QkFBNkIsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUNuRyxDQUFDO2dCQUVELHVEQUFlLEdBQWYsVUFBZ0IsV0FBcUI7b0JBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO2dCQUNoQyxDQUFDO2dCQUVELDJEQUFtQixHQUFuQixVQUFvQixNQUFjO29CQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsTUFBTSxDQUFDO2dCQUNoQyxDQUFDO2dCQWlCTywyREFBbUIsR0FBM0I7b0JBQ0ksSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7b0JBQ2hELElBQU0sZ0JBQWdCLEdBQVMsSUFBSSxDQUFDLE9BQVEsQ0FBQyxTQUFTLENBQUM7b0JBQ3ZELElBQU0sb0JBQW9CLEdBQUcsTUFBTSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO29CQUNyRSxJQUFNLDZCQUE2QixHQUFHLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLGdCQUFnQixDQUFDLENBQUM7b0JBRXZILEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksNkJBQTZCLENBQUMsQ0FBQyxDQUFDO3dCQUNqRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ3BCLENBQUM7Z0JBQ0wsQ0FBQztnQkEvQ2EsNkNBQWUsR0FBVyxRQUFRLENBQUM7Z0JBSmpEO29CQUFDLDRCQUFROzsrRUFBQTtnQkFDVDtvQkFBQyw0QkFBUTs7bUZBQUE7Z0JBQ1Q7b0JBQUMsNEJBQVE7OytFQUFBO2dCQU5iO29CQUFDLDhCQUFVLEVBQUU7O2lEQUFBO2dCQXdEYixvQ0FBQztZQUFELENBdkRBLEFBdURDLElBQUE7WUF2REQseUVBdURDLENBQUEiLCJmaWxlIjoiaW5maW5pdGUtc2Nyb2xsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCwgYmluZGFibGUgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBJbmZpbml0ZVNjcm9sbEN1c3RvbUF0dHJpYnV0ZSB7XHJcbiAgICBwcml2YXRlIGlzVGlja2luZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEBiaW5kYWJsZSBjYWxsYmFjazogRnVuY3Rpb247XHJcbiAgICBAYmluZGFibGUgc2Nyb2xsQnVmZmVyOiBudW1iZXIgPSA1MDtcclxuICAgIEBiaW5kYWJsZSBpc0FjdGl2ZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBTY3JvbGxFdmVudE5hbWU6IHN0cmluZyA9ICdzY3JvbGwnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoSW5maW5pdGVTY3JvbGxDdXN0b21BdHRyaWJ1dGUuU2Nyb2xsRXZlbnROYW1lLCB0aGlzLm9uU2Nyb2xsQ2hhbmdlKTtcclxuICAgICAgICB0aGlzLm9uU2Nyb2xsQ2hhbmdlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGV0YWNoZWQoKSB7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoSW5maW5pdGVTY3JvbGxDdXN0b21BdHRyaWJ1dGUuU2Nyb2xsRXZlbnROYW1lLCB0aGlzLm9uU2Nyb2xsQ2hhbmdlKTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxsYmFja0NoYW5nZWQobmV3Q2FsbGJhY2s6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IG5ld0NhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIHNjcm9sbEJ1ZmZlckNoYW5nZWQoYnVmZmVyOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNjcm9sbEJ1ZmZlciA9ICtidWZmZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblNjcm9sbENoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVGlja2luZykge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tTY3JvbGxQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1RpY2tpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmlzVGlja2luZyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja1Njcm9sbFBvc2l0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRIZWlnaHQgPSB0aGlzLmVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRPZmZzZXRUb3AgPSAoPGFueT50aGlzLmVsZW1lbnQpLm9mZnNldFRvcDtcclxuICAgICAgICBjb25zdCB3aW5kb3dTY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5pbm5lckhlaWdodCArIHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgICBjb25zdCBpc1BhZ2VTY3JvbGxlZFRvRWxlbWVudEJvdHRvbSA9ICh3aW5kb3dTY3JvbGxQb3NpdGlvbiArIHRoaXMuc2Nyb2xsQnVmZmVyKSA+PSAoZWxlbWVudEhlaWdodCArIGVsZW1lbnRPZmZzZXRUb3ApO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jYWxsYmFjayAmJiBpc1BhZ2VTY3JvbGxlZFRvRWxlbWVudEJvdHRvbSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
