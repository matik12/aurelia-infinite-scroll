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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZmluaXRlLXNjcm9sbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsa0NBQXFDLG1CQUFtQixDQUFDLENBQUE7QUFHekQ7SUFTSSx1Q0FBb0IsT0FBZ0I7UUFUeEMsaUJBMkRDO1FBbER1QixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBUjVCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFHekIsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsYUFBUSxHQUFZLElBQUksQ0FBQztRQTZCM0IsbUJBQWMsR0FBRztZQUNyQixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2pCLENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixNQUFNLENBQUMscUJBQXFCLENBQUM7b0JBQ3pCLEtBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO29CQUMzQixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDM0IsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO1lBRUQsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDMUIsQ0FBQyxDQUFBO1FBckNHLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFFRCxnREFBUSxHQUFSO1FBQ0ksTUFBTSxDQUFDLGdCQUFnQixDQUFDLDZCQUE2QixDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUYsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxnREFBUSxHQUFSO1FBQ0ksTUFBTSxDQUFDLG1CQUFtQixDQUFDLDZCQUE2QixDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDbkcsQ0FBQztJQUVELHVEQUFlLEdBQWYsVUFBZ0IsV0FBcUI7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7SUFDaEMsQ0FBQztJQUVELDJEQUFtQixHQUFuQixVQUFvQixNQUFjO1FBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDaEMsQ0FBQztJQUVELHVEQUFlLEdBQWYsVUFBZ0IsUUFBZ0I7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLFFBQVEsS0FBSyxNQUFNLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBaUJPLDJEQUFtQixHQUEzQjtRQUNJLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1FBQ2hELElBQU0sZ0JBQWdCLEdBQVMsSUFBSSxDQUFDLE9BQVEsQ0FBQyxTQUFTLENBQUM7UUFDdkQsSUFBTSxvQkFBb0IsR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDckUsSUFBTSw2QkFBNkIsR0FBRyxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRXZILEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksNkJBQTZCLENBQUMsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNwQixDQUFDO0lBQ0wsQ0FBQztJQW5EYSw2Q0FBZSxHQUFXLFFBQVEsQ0FBQztJQUpqRDtRQUFDLDRCQUFROzttRUFBQTtJQUNUO1FBQUMsNEJBQVE7O3VFQUFBO0lBQ1Q7UUFBQyw0QkFBUTs7bUVBQUE7SUFOYjtRQUFDLDhCQUFVLEVBQUU7O3FDQUFBO0lBNERiLG9DQUFDO0FBQUQsQ0EzREEsQUEyREMsSUFBQTtBQTNEWSxxQ0FBNkIsZ0NBMkR6QyxDQUFBIiwiZmlsZSI6ImluZmluaXRlLXNjcm9sbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dG9pbmplY3QsIGJpbmRhYmxlIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgSW5maW5pdGVTY3JvbGxDdXN0b21BdHRyaWJ1dGUge1xyXG4gICAgcHJpdmF0ZSBpc1RpY2tpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBAYmluZGFibGUgY2FsbGJhY2s6IEZ1bmN0aW9uO1xyXG4gICAgQGJpbmRhYmxlIHNjcm9sbEJ1ZmZlcjogbnVtYmVyID0gNTA7XHJcbiAgICBAYmluZGFibGUgaXNBY3RpdmU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgU2Nyb2xsRXZlbnROYW1lOiBzdHJpbmcgPSAnc2Nyb2xsJztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGF0dGFjaGVkKCkge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKEluZmluaXRlU2Nyb2xsQ3VzdG9tQXR0cmlidXRlLlNjcm9sbEV2ZW50TmFtZSwgdGhpcy5vblNjcm9sbENoYW5nZSk7XHJcbiAgICAgICAgdGhpcy5vblNjcm9sbENoYW5nZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRldGFjaGVkKCkge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKEluZmluaXRlU2Nyb2xsQ3VzdG9tQXR0cmlidXRlLlNjcm9sbEV2ZW50TmFtZSwgdGhpcy5vblNjcm9sbENoYW5nZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsbGJhY2tDaGFuZ2VkKG5ld0NhbGxiYWNrOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBuZXdDYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBzY3JvbGxCdWZmZXJDaGFuZ2VkKGJ1ZmZlcjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxCdWZmZXIgPSArYnVmZmVyO1xyXG4gICAgfVxyXG5cclxuICAgIGlzQWN0aXZlQ2hhbmdlZChpc0FjdGl2ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IChpc0FjdGl2ZSA9PT0gJ3RydWUnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uU2Nyb2xsQ2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNUaWNraW5nKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja1Njcm9sbFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVGlja2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaXNUaWNraW5nID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrU2Nyb2xsUG9zaXRpb24oKSB7ICAgICAgICBcclxuICAgICAgICBjb25zdCBlbGVtZW50SGVpZ2h0ID0gdGhpcy5lbGVtZW50LnNjcm9sbEhlaWdodDtcclxuICAgICAgICBjb25zdCBlbGVtZW50T2Zmc2V0VG9wID0gKDxhbnk+dGhpcy5lbGVtZW50KS5vZmZzZXRUb3A7XHJcbiAgICAgICAgY29uc3Qgd2luZG93U2Nyb2xsUG9zaXRpb24gPSB3aW5kb3cuaW5uZXJIZWlnaHQgKyB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICAgICAgY29uc3QgaXNQYWdlU2Nyb2xsZWRUb0VsZW1lbnRCb3R0b20gPSAod2luZG93U2Nyb2xsUG9zaXRpb24gKyB0aGlzLnNjcm9sbEJ1ZmZlcikgPj0gKGVsZW1lbnRIZWlnaHQgKyBlbGVtZW50T2Zmc2V0VG9wKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY2FsbGJhY2sgJiYgaXNQYWdlU2Nyb2xsZWRUb0VsZW1lbnRCb3R0b20pIHtcclxuICAgICAgICAgICAgdGhpcy5jYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
