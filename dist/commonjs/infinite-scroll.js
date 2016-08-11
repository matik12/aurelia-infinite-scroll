"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var aurelia_framework_1 = require('aurelia-framework');
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
        this.scrollBuffer = buffer;
    };
    InfiniteScrollCustomAttribute.prototype.isActiveChanged = function (isActive) {
        this.isActive = isActive;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZmluaXRlLXNjcm9sbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsa0NBQXFDLG1CQUFtQixDQUFDLENBQUE7QUFHekQ7SUFTSSx1Q0FBb0IsT0FBZ0I7UUFUeEMsaUJBMkRDO1FBbER1QixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBUjVCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFHekIsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsYUFBUSxHQUFZLElBQUksQ0FBQztRQTZCM0IsbUJBQWMsR0FBRztZQUNyQixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2pCLENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixNQUFNLENBQUMscUJBQXFCLENBQUM7b0JBQ3pCLEtBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO29CQUMzQixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDM0IsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO1lBRUQsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDMUIsQ0FBQyxDQUFBO1FBckNHLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFFRCxnREFBUSxHQUFSO1FBQ0ksTUFBTSxDQUFDLGdCQUFnQixDQUFDLDZCQUE2QixDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUYsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxnREFBUSxHQUFSO1FBQ0ksTUFBTSxDQUFDLG1CQUFtQixDQUFDLDZCQUE2QixDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDbkcsQ0FBQztJQUVELHVEQUFlLEdBQWYsVUFBZ0IsV0FBcUI7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7SUFDaEMsQ0FBQztJQUVELDJEQUFtQixHQUFuQixVQUFvQixNQUFjO1FBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO0lBQy9CLENBQUM7SUFFRCx1REFBZSxHQUFmLFVBQWdCLFFBQWlCO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFpQk8sMkRBQW1CLEdBQTNCO1FBQ0ksSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7UUFDaEQsSUFBTSxnQkFBZ0IsR0FBUyxJQUFJLENBQUMsT0FBUSxDQUFDLFNBQVMsQ0FBQztRQUN2RCxJQUFNLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUNyRSxJQUFNLDZCQUE2QixHQUFHLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLGdCQUFnQixDQUFDLENBQUM7UUFFdkgsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BCLENBQUM7SUFDTCxDQUFDO0lBbkRhLDZDQUFlLEdBQVcsUUFBUSxDQUFDO0lBSmpEO1FBQUMsNEJBQVE7O21FQUFBO0lBQ1Q7UUFBQyw0QkFBUTs7dUVBQUE7SUFDVDtRQUFDLDRCQUFROzttRUFBQTtJQU5iO1FBQUMsOEJBQVUsRUFBRTs7cUNBQUE7SUE0RGIsb0NBQUM7QUFBRCxDQTNEQSxBQTJEQyxJQUFBO0FBM0RZLHFDQUE2QixnQ0EyRHpDLENBQUEiLCJmaWxlIjoiaW5maW5pdGUtc2Nyb2xsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCwgYmluZGFibGUgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBJbmZpbml0ZVNjcm9sbEN1c3RvbUF0dHJpYnV0ZSB7XHJcbiAgICBwcml2YXRlIGlzVGlja2luZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEBiaW5kYWJsZSBjYWxsYmFjazogRnVuY3Rpb247XHJcbiAgICBAYmluZGFibGUgc2Nyb2xsQnVmZmVyOiBudW1iZXIgPSA1MDtcclxuICAgIEBiaW5kYWJsZSBpc0FjdGl2ZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBTY3JvbGxFdmVudE5hbWU6IHN0cmluZyA9ICdzY3JvbGwnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoSW5maW5pdGVTY3JvbGxDdXN0b21BdHRyaWJ1dGUuU2Nyb2xsRXZlbnROYW1lLCB0aGlzLm9uU2Nyb2xsQ2hhbmdlKTtcclxuICAgICAgICB0aGlzLm9uU2Nyb2xsQ2hhbmdlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGV0YWNoZWQoKSB7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoSW5maW5pdGVTY3JvbGxDdXN0b21BdHRyaWJ1dGUuU2Nyb2xsRXZlbnROYW1lLCB0aGlzLm9uU2Nyb2xsQ2hhbmdlKTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxsYmFja0NoYW5nZWQobmV3Q2FsbGJhY2s6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IG5ld0NhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIHNjcm9sbEJ1ZmZlckNoYW5nZWQoYnVmZmVyOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNjcm9sbEJ1ZmZlciA9IGJ1ZmZlcjtcclxuICAgIH1cclxuXHJcbiAgICBpc0FjdGl2ZUNoYW5nZWQoaXNBY3RpdmU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gaXNBY3RpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblNjcm9sbENoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVGlja2luZykge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tTY3JvbGxQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1RpY2tpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmlzVGlja2luZyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja1Njcm9sbFBvc2l0aW9uKCkgeyAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZWxlbWVudEhlaWdodCA9IHRoaXMuZWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudE9mZnNldFRvcCA9ICg8YW55PnRoaXMuZWxlbWVudCkub2Zmc2V0VG9wO1xyXG4gICAgICAgIGNvbnN0IHdpbmRvd1Njcm9sbFBvc2l0aW9uID0gd2luZG93LmlubmVySGVpZ2h0ICsgd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICAgIGNvbnN0IGlzUGFnZVNjcm9sbGVkVG9FbGVtZW50Qm90dG9tID0gKHdpbmRvd1Njcm9sbFBvc2l0aW9uICsgdGhpcy5zY3JvbGxCdWZmZXIpID49IChlbGVtZW50SGVpZ2h0ICsgZWxlbWVudE9mZnNldFRvcCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNhbGxiYWNrICYmIGlzUGFnZVNjcm9sbGVkVG9FbGVtZW50Qm90dG9tKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
