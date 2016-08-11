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
    exports.InfiniteScrollCustomAttribute = InfiniteScrollCustomAttribute;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZmluaXRlLXNjcm9sbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUdBO1FBU0ksdUNBQW9CLE9BQWdCO1lBVHhDLGlCQTJEQztZQWxEdUIsWUFBTyxHQUFQLE9BQU8sQ0FBUztZQVI1QixjQUFTLEdBQVksS0FBSyxDQUFDO1lBR3pCLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1lBQzFCLGFBQVEsR0FBWSxJQUFJLENBQUM7WUE2QjNCLG1CQUFjLEdBQUc7Z0JBQ3JCLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ2pCLENBQUM7Z0JBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDbEIsTUFBTSxDQUFDLHFCQUFxQixDQUFDO3dCQUN6QixLQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQzt3QkFDM0IsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7b0JBQzNCLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBRUQsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDMUIsQ0FBQyxDQUFBO1lBckNHLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQzNCLENBQUM7UUFFRCxnREFBUSxHQUFSO1lBQ0ksTUFBTSxDQUFDLGdCQUFnQixDQUFDLDZCQUE2QixDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDNUYsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzFCLENBQUM7UUFFRCxnREFBUSxHQUFSO1lBQ0ksTUFBTSxDQUFDLG1CQUFtQixDQUFDLDZCQUE2QixDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDbkcsQ0FBQztRQUVELHVEQUFlLEdBQWYsVUFBZ0IsV0FBcUI7WUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7UUFDaEMsQ0FBQztRQUVELDJEQUFtQixHQUFuQixVQUFvQixNQUFjO1lBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDaEMsQ0FBQztRQUVELHVEQUFlLEdBQWYsVUFBZ0IsUUFBZ0I7WUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLFFBQVEsS0FBSyxNQUFNLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBaUJPLDJEQUFtQixHQUEzQjtZQUNJLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1lBQ2hELElBQU0sZ0JBQWdCLEdBQVMsSUFBSSxDQUFDLE9BQVEsQ0FBQyxTQUFTLENBQUM7WUFDdkQsSUFBTSxvQkFBb0IsR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7WUFDckUsSUFBTSw2QkFBNkIsR0FBRyxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDO1lBRXZILEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksNkJBQTZCLENBQUMsQ0FBQyxDQUFDO2dCQUNqRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDcEIsQ0FBQztRQUNMLENBQUM7UUFuRGEsNkNBQWUsR0FBVyxRQUFRLENBQUM7UUFKakQ7WUFBQyw0QkFBUTs7dUVBQUE7UUFDVDtZQUFDLDRCQUFROzsyRUFBQTtRQUNUO1lBQUMsNEJBQVE7O3VFQUFBO1FBTmI7WUFBQyw4QkFBVSxFQUFFOzt5Q0FBQTtRQTREYixvQ0FBQztJQUFELENBM0RBLEFBMkRDLElBQUE7SUEzRFkscUNBQTZCLGdDQTJEekMsQ0FBQSIsImZpbGUiOiJpbmZpbml0ZS1zY3JvbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRvaW5qZWN0LCBiaW5kYWJsZSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIEluZmluaXRlU2Nyb2xsQ3VzdG9tQXR0cmlidXRlIHtcclxuICAgIHByaXZhdGUgaXNUaWNraW5nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQGJpbmRhYmxlIGNhbGxiYWNrOiBGdW5jdGlvbjtcclxuICAgIEBiaW5kYWJsZSBzY3JvbGxCdWZmZXI6IG51bWJlciA9IDUwO1xyXG4gICAgQGJpbmRhYmxlIGlzQWN0aXZlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIFNjcm9sbEV2ZW50TmFtZTogc3RyaW5nID0gJ3Njcm9sbCc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2hlZCgpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihJbmZpbml0ZVNjcm9sbEN1c3RvbUF0dHJpYnV0ZS5TY3JvbGxFdmVudE5hbWUsIHRoaXMub25TY3JvbGxDaGFuZ2UpO1xyXG4gICAgICAgIHRoaXMub25TY3JvbGxDaGFuZ2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBkZXRhY2hlZCgpIHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihJbmZpbml0ZVNjcm9sbEN1c3RvbUF0dHJpYnV0ZS5TY3JvbGxFdmVudE5hbWUsIHRoaXMub25TY3JvbGxDaGFuZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGxiYWNrQ2hhbmdlZChuZXdDYWxsYmFjazogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gbmV3Q2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsQnVmZmVyQ2hhbmdlZChidWZmZXI6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsQnVmZmVyID0gK2J1ZmZlcjtcclxuICAgIH1cclxuXHJcbiAgICBpc0FjdGl2ZUNoYW5nZWQoaXNBY3RpdmU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSAoaXNBY3RpdmUgPT09ICd0cnVlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblNjcm9sbENoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVGlja2luZykge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tTY3JvbGxQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1RpY2tpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmlzVGlja2luZyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja1Njcm9sbFBvc2l0aW9uKCkgeyAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZWxlbWVudEhlaWdodCA9IHRoaXMuZWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudE9mZnNldFRvcCA9ICg8YW55PnRoaXMuZWxlbWVudCkub2Zmc2V0VG9wO1xyXG4gICAgICAgIGNvbnN0IHdpbmRvd1Njcm9sbFBvc2l0aW9uID0gd2luZG93LmlubmVySGVpZ2h0ICsgd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICAgIGNvbnN0IGlzUGFnZVNjcm9sbGVkVG9FbGVtZW50Qm90dG9tID0gKHdpbmRvd1Njcm9sbFBvc2l0aW9uICsgdGhpcy5zY3JvbGxCdWZmZXIpID49IChlbGVtZW50SGVpZ2h0ICsgZWxlbWVudE9mZnNldFRvcCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNhbGxiYWNrICYmIGlzUGFnZVNjcm9sbGVkVG9FbGVtZW50Qm90dG9tKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
