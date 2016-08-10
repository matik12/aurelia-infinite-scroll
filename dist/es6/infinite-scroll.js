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
                    this.onScrollChange = function () {
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
                InfiniteScrollCustomAttribute.prototype.valueChanged = function (newCallback) {
                    this.callback = newCallback;
                };
                InfiniteScrollCustomAttribute.prototype.checkScrollPosition = function () {
                    var elementHeight = this.element.scrollHeight;
                    var elementOffsetTop = this.element.offsetTop;
                    var windowScrollPosition = window.innerHeight + window.pageYOffset;
                    var isPageScrolledToElementBottom = (windowScrollPosition + InfiniteScrollCustomAttribute.MinimumScrollBuffer) >=
                        (elementHeight + elementOffsetTop);
                    if (this.callback && isPageScrolledToElementBottom) {
                        this.callback();
                    }
                };
                InfiniteScrollCustomAttribute.ScrollEventName = 'scroll';
                InfiniteScrollCustomAttribute.MinimumScrollBuffer = 50;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZmluaXRlLXNjcm9sbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQU9JLHVDQUFvQixPQUFnQjtvQkFQeEMsaUJBOENDO29CQXZDdUIsWUFBTyxHQUFQLE9BQU8sQ0FBUztvQkFMNUIsY0FBUyxHQUFZLEtBQUssQ0FBQztvQkFzQjNCLG1CQUFjLEdBQUc7d0JBQ3JCLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7NEJBQ2xCLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQztnQ0FDekIsS0FBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7Z0NBQzNCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDOzRCQUMzQixDQUFDLENBQUMsQ0FBQzt3QkFDUCxDQUFDO3dCQUVELEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO29CQUMxQixDQUFDLENBQUE7b0JBekJHLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2dCQUMzQixDQUFDO2dCQUVELGdEQUFRLEdBQVI7b0JBQ0ksTUFBTSxDQUFDLGdCQUFnQixDQUFDLDZCQUE2QixDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQzVGLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDMUIsQ0FBQztnQkFFRCxnREFBUSxHQUFSO29CQUNJLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyw2QkFBNkIsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUNuRyxDQUFDO2dCQUVELG9EQUFZLEdBQVosVUFBYSxXQUFxQjtvQkFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7Z0JBQ2hDLENBQUM7Z0JBYU8sMkRBQW1CLEdBQTNCO29CQUNJLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO29CQUNoRCxJQUFNLGdCQUFnQixHQUFTLElBQUksQ0FBQyxPQUFRLENBQUMsU0FBUyxDQUFDO29CQUN2RCxJQUFNLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztvQkFDckUsSUFBTSw2QkFBNkIsR0FBRyxDQUFDLG9CQUFvQixHQUFHLDZCQUE2QixDQUFDLG1CQUFtQixDQUFDO3dCQUM1RyxDQUFDLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUV2QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLDZCQUE2QixDQUFDLENBQUMsQ0FBQzt3QkFDakQsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUNwQixDQUFDO2dCQUNMLENBQUM7Z0JBekNhLDZDQUFlLEdBQVcsUUFBUSxDQUFDO2dCQUNuQyxpREFBbUIsR0FBVyxFQUFFLENBQUM7Z0JBTm5EO29CQUFDLDhCQUFVLEVBQUU7O2lEQUFBO2dCQStDYixvQ0FBQztZQUFELENBOUNBLEFBOENDLElBQUE7WUE5Q0QseUVBOENDLENBQUEiLCJmaWxlIjoiaW5maW5pdGUtc2Nyb2xsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIEluZmluaXRlU2Nyb2xsQ3VzdG9tQXR0cmlidXRlIHtcclxuICAgIHByaXZhdGUgY2FsbGJhY2s6IEZ1bmN0aW9uO1xyXG4gICAgcHJpdmF0ZSBpc1RpY2tpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIFNjcm9sbEV2ZW50TmFtZTogc3RyaW5nID0gJ3Njcm9sbCc7XHJcbiAgICBwdWJsaWMgc3RhdGljIE1pbmltdW1TY3JvbGxCdWZmZXI6IG51bWJlciA9IDUwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoSW5maW5pdGVTY3JvbGxDdXN0b21BdHRyaWJ1dGUuU2Nyb2xsRXZlbnROYW1lLCB0aGlzLm9uU2Nyb2xsQ2hhbmdlKTtcclxuICAgICAgICB0aGlzLm9uU2Nyb2xsQ2hhbmdlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGV0YWNoZWQoKSB7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoSW5maW5pdGVTY3JvbGxDdXN0b21BdHRyaWJ1dGUuU2Nyb2xsRXZlbnROYW1lLCB0aGlzLm9uU2Nyb2xsQ2hhbmdlKTtcclxuICAgIH1cclxuXHJcbiAgICB2YWx1ZUNoYW5nZWQobmV3Q2FsbGJhY2s6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IG5ld0NhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25TY3JvbGxDaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVGlja2luZykge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tTY3JvbGxQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1RpY2tpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmlzVGlja2luZyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja1Njcm9sbFBvc2l0aW9uKCkgeyAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZWxlbWVudEhlaWdodCA9IHRoaXMuZWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudE9mZnNldFRvcCA9ICg8YW55PnRoaXMuZWxlbWVudCkub2Zmc2V0VG9wO1xyXG4gICAgICAgIGNvbnN0IHdpbmRvd1Njcm9sbFBvc2l0aW9uID0gd2luZG93LmlubmVySGVpZ2h0ICsgd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICAgIGNvbnN0IGlzUGFnZVNjcm9sbGVkVG9FbGVtZW50Qm90dG9tID0gKHdpbmRvd1Njcm9sbFBvc2l0aW9uICsgSW5maW5pdGVTY3JvbGxDdXN0b21BdHRyaWJ1dGUuTWluaW11bVNjcm9sbEJ1ZmZlcikgPj0gXHJcbiAgICAgICAgICAgIChlbGVtZW50SGVpZ2h0ICsgZWxlbWVudE9mZnNldFRvcCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNhbGxiYWNrICYmIGlzUGFnZVNjcm9sbGVkVG9FbGVtZW50Qm90dG9tKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
