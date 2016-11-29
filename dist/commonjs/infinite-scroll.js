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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZmluaXRlLXNjcm9sbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsa0NBQXFDLG1CQUFtQixDQUFDLENBQUE7QUFHekQ7SUFTSSx1Q0FBb0IsT0FBZ0I7UUFUeEMsaUJBdURDO1FBOUN1QixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBUjVCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFHekIsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsYUFBUSxHQUFZLElBQUksQ0FBQztRQXlCM0IsbUJBQWMsR0FBRztZQUNyQixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2pCLENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixNQUFNLENBQUMscUJBQXFCLENBQUM7b0JBQ3pCLEtBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO29CQUMzQixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDM0IsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO1lBRUQsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDMUIsQ0FBQyxDQUFBO1FBakNHLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFFRCxnREFBUSxHQUFSO1FBQ0ksTUFBTSxDQUFDLGdCQUFnQixDQUFDLDZCQUE2QixDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUYsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxnREFBUSxHQUFSO1FBQ0ksTUFBTSxDQUFDLG1CQUFtQixDQUFDLDZCQUE2QixDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDbkcsQ0FBQztJQUVELHVEQUFlLEdBQWYsVUFBZ0IsV0FBcUI7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7SUFDaEMsQ0FBQztJQUVELDJEQUFtQixHQUFuQixVQUFvQixNQUFjO1FBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDaEMsQ0FBQztJQWlCTywyREFBbUIsR0FBM0I7UUFDSSxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztRQUNoRCxJQUFNLGdCQUFnQixHQUFTLElBQUksQ0FBQyxPQUFRLENBQUMsU0FBUyxDQUFDO1FBQ3ZELElBQU0sb0JBQW9CLEdBQUcsTUFBTSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3JFLElBQU0sNkJBQTZCLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQztRQUV2SCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLDZCQUE2QixDQUFDLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDcEIsQ0FBQztJQUNMLENBQUM7SUEvQ2EsNkNBQWUsR0FBVyxRQUFRLENBQUM7SUFKakQ7UUFBQyw0QkFBUTs7bUVBQUE7SUFDVDtRQUFDLDRCQUFROzt1RUFBQTtJQUNUO1FBQUMsNEJBQVE7O21FQUFBO0lBTmI7UUFBQyw4QkFBVSxFQUFFOztxQ0FBQTtJQXdEYixvQ0FBQztBQUFELENBdkRBLEFBdURDLElBQUE7QUF2RFkscUNBQTZCLGdDQXVEekMsQ0FBQSIsImZpbGUiOiJpbmZpbml0ZS1zY3JvbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRvaW5qZWN0LCBiaW5kYWJsZSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIEluZmluaXRlU2Nyb2xsQ3VzdG9tQXR0cmlidXRlIHtcclxuICAgIHByaXZhdGUgaXNUaWNraW5nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQGJpbmRhYmxlIGNhbGxiYWNrOiBGdW5jdGlvbjtcclxuICAgIEBiaW5kYWJsZSBzY3JvbGxCdWZmZXI6IG51bWJlciA9IDUwO1xyXG4gICAgQGJpbmRhYmxlIGlzQWN0aXZlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIFNjcm9sbEV2ZW50TmFtZTogc3RyaW5nID0gJ3Njcm9sbCc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2hlZCgpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihJbmZpbml0ZVNjcm9sbEN1c3RvbUF0dHJpYnV0ZS5TY3JvbGxFdmVudE5hbWUsIHRoaXMub25TY3JvbGxDaGFuZ2UpO1xyXG4gICAgICAgIHRoaXMub25TY3JvbGxDaGFuZ2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBkZXRhY2hlZCgpIHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihJbmZpbml0ZVNjcm9sbEN1c3RvbUF0dHJpYnV0ZS5TY3JvbGxFdmVudE5hbWUsIHRoaXMub25TY3JvbGxDaGFuZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGxiYWNrQ2hhbmdlZChuZXdDYWxsYmFjazogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gbmV3Q2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsQnVmZmVyQ2hhbmdlZChidWZmZXI6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsQnVmZmVyID0gK2J1ZmZlcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uU2Nyb2xsQ2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNUaWNraW5nKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja1Njcm9sbFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVGlja2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaXNUaWNraW5nID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrU2Nyb2xsUG9zaXRpb24oKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudEhlaWdodCA9IHRoaXMuZWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudE9mZnNldFRvcCA9ICg8YW55PnRoaXMuZWxlbWVudCkub2Zmc2V0VG9wO1xyXG4gICAgICAgIGNvbnN0IHdpbmRvd1Njcm9sbFBvc2l0aW9uID0gd2luZG93LmlubmVySGVpZ2h0ICsgd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICAgIGNvbnN0IGlzUGFnZVNjcm9sbGVkVG9FbGVtZW50Qm90dG9tID0gKHdpbmRvd1Njcm9sbFBvc2l0aW9uICsgdGhpcy5zY3JvbGxCdWZmZXIpID49IChlbGVtZW50SGVpZ2h0ICsgZWxlbWVudE9mZnNldFRvcCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNhbGxiYWNrICYmIGlzUGFnZVNjcm9sbGVkVG9FbGVtZW50Qm90dG9tKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
