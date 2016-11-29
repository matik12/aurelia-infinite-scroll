var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework'], function (require, exports, aurelia_framework_1) {
    "use strict";
    var InfiniteScrollCustomAttribute = (function () {
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
    exports.InfiniteScrollCustomAttribute = InfiniteScrollCustomAttribute;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZmluaXRlLXNjcm9sbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUdBO1FBU0ksdUNBQW9CLE9BQWdCO1lBVHhDLGlCQXVEQztZQTlDdUIsWUFBTyxHQUFQLE9BQU8sQ0FBUztZQVI1QixjQUFTLEdBQVksS0FBSyxDQUFDO1lBR3pCLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1lBQzFCLGFBQVEsR0FBWSxJQUFJLENBQUM7WUF5QjNCLG1CQUFjLEdBQUc7Z0JBQ3JCLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ2pCLENBQUM7Z0JBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDbEIsTUFBTSxDQUFDLHFCQUFxQixDQUFDO3dCQUN6QixLQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQzt3QkFDM0IsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7b0JBQzNCLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBRUQsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDMUIsQ0FBQyxDQUFBO1lBakNHLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQzNCLENBQUM7UUFFRCxnREFBUSxHQUFSO1lBQ0ksTUFBTSxDQUFDLGdCQUFnQixDQUFDLDZCQUE2QixDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDNUYsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzFCLENBQUM7UUFFRCxnREFBUSxHQUFSO1lBQ0ksTUFBTSxDQUFDLG1CQUFtQixDQUFDLDZCQUE2QixDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDbkcsQ0FBQztRQUVELHVEQUFlLEdBQWYsVUFBZ0IsV0FBcUI7WUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7UUFDaEMsQ0FBQztRQUVELDJEQUFtQixHQUFuQixVQUFvQixNQUFjO1lBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDaEMsQ0FBQztRQWlCTywyREFBbUIsR0FBM0I7WUFDSSxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztZQUNoRCxJQUFNLGdCQUFnQixHQUFTLElBQUksQ0FBQyxPQUFRLENBQUMsU0FBUyxDQUFDO1lBQ3ZELElBQU0sb0JBQW9CLEdBQUcsTUFBTSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1lBQ3JFLElBQU0sNkJBQTZCLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQztZQUV2SCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLDZCQUE2QixDQUFDLENBQUMsQ0FBQztnQkFDakQsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3BCLENBQUM7UUFDTCxDQUFDO1FBL0NhLDZDQUFlLEdBQVcsUUFBUSxDQUFDO1FBSmpEO1lBQUMsNEJBQVE7O3VFQUFBO1FBQ1Q7WUFBQyw0QkFBUTs7MkVBQUE7UUFDVDtZQUFDLDRCQUFROzt1RUFBQTtRQU5iO1lBQUMsOEJBQVUsRUFBRTs7eUNBQUE7UUF3RGIsb0NBQUM7SUFBRCxDQXZEQSxBQXVEQyxJQUFBO0lBdkRZLHFDQUE2QixnQ0F1RHpDLENBQUEiLCJmaWxlIjoiaW5maW5pdGUtc2Nyb2xsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCwgYmluZGFibGUgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBJbmZpbml0ZVNjcm9sbEN1c3RvbUF0dHJpYnV0ZSB7XHJcbiAgICBwcml2YXRlIGlzVGlja2luZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEBiaW5kYWJsZSBjYWxsYmFjazogRnVuY3Rpb247XHJcbiAgICBAYmluZGFibGUgc2Nyb2xsQnVmZmVyOiBudW1iZXIgPSA1MDtcclxuICAgIEBiaW5kYWJsZSBpc0FjdGl2ZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBTY3JvbGxFdmVudE5hbWU6IHN0cmluZyA9ICdzY3JvbGwnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoSW5maW5pdGVTY3JvbGxDdXN0b21BdHRyaWJ1dGUuU2Nyb2xsRXZlbnROYW1lLCB0aGlzLm9uU2Nyb2xsQ2hhbmdlKTtcclxuICAgICAgICB0aGlzLm9uU2Nyb2xsQ2hhbmdlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGV0YWNoZWQoKSB7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoSW5maW5pdGVTY3JvbGxDdXN0b21BdHRyaWJ1dGUuU2Nyb2xsRXZlbnROYW1lLCB0aGlzLm9uU2Nyb2xsQ2hhbmdlKTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxsYmFja0NoYW5nZWQobmV3Q2FsbGJhY2s6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IG5ld0NhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIHNjcm9sbEJ1ZmZlckNoYW5nZWQoYnVmZmVyOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNjcm9sbEJ1ZmZlciA9ICtidWZmZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblNjcm9sbENoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVGlja2luZykge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tTY3JvbGxQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1RpY2tpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmlzVGlja2luZyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja1Njcm9sbFBvc2l0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRIZWlnaHQgPSB0aGlzLmVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRPZmZzZXRUb3AgPSAoPGFueT50aGlzLmVsZW1lbnQpLm9mZnNldFRvcDtcclxuICAgICAgICBjb25zdCB3aW5kb3dTY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5pbm5lckhlaWdodCArIHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgICBjb25zdCBpc1BhZ2VTY3JvbGxlZFRvRWxlbWVudEJvdHRvbSA9ICh3aW5kb3dTY3JvbGxQb3NpdGlvbiArIHRoaXMuc2Nyb2xsQnVmZmVyKSA+PSAoZWxlbWVudEhlaWdodCArIGVsZW1lbnRPZmZzZXRUb3ApO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jYWxsYmFjayAmJiBpc1BhZ2VTY3JvbGxlZFRvRWxlbWVudEJvdHRvbSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
