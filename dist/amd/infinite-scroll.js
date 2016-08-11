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
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZmluaXRlLXNjcm9sbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUdBO1FBU0ksdUNBQW9CLE9BQWdCO1lBVHhDLGlCQTJEQztZQWxEdUIsWUFBTyxHQUFQLE9BQU8sQ0FBUztZQVI1QixjQUFTLEdBQVksS0FBSyxDQUFDO1lBR3pCLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1lBQzFCLGFBQVEsR0FBWSxJQUFJLENBQUM7WUE2QjNCLG1CQUFjLEdBQUc7Z0JBQ3JCLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ2pCLENBQUM7Z0JBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDbEIsTUFBTSxDQUFDLHFCQUFxQixDQUFDO3dCQUN6QixLQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQzt3QkFDM0IsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7b0JBQzNCLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBRUQsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDMUIsQ0FBQyxDQUFBO1lBckNHLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQzNCLENBQUM7UUFFRCxnREFBUSxHQUFSO1lBQ0ksTUFBTSxDQUFDLGdCQUFnQixDQUFDLDZCQUE2QixDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDNUYsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzFCLENBQUM7UUFFRCxnREFBUSxHQUFSO1lBQ0ksTUFBTSxDQUFDLG1CQUFtQixDQUFDLDZCQUE2QixDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDbkcsQ0FBQztRQUVELHVEQUFlLEdBQWYsVUFBZ0IsV0FBcUI7WUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7UUFDaEMsQ0FBQztRQUVELDJEQUFtQixHQUFuQixVQUFvQixNQUFjO1lBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO1FBQy9CLENBQUM7UUFFRCx1REFBZSxHQUFmLFVBQWdCLFFBQWlCO1lBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQzdCLENBQUM7UUFpQk8sMkRBQW1CLEdBQTNCO1lBQ0ksSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7WUFDaEQsSUFBTSxnQkFBZ0IsR0FBUyxJQUFJLENBQUMsT0FBUSxDQUFDLFNBQVMsQ0FBQztZQUN2RCxJQUFNLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztZQUNyRSxJQUFNLDZCQUE2QixHQUFHLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLGdCQUFnQixDQUFDLENBQUM7WUFFdkgsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNwQixDQUFDO1FBQ0wsQ0FBQztRQW5EYSw2Q0FBZSxHQUFXLFFBQVEsQ0FBQztRQUpqRDtZQUFDLDRCQUFROzt1RUFBQTtRQUNUO1lBQUMsNEJBQVE7OzJFQUFBO1FBQ1Q7WUFBQyw0QkFBUTs7dUVBQUE7UUFOYjtZQUFDLDhCQUFVLEVBQUU7O3lDQUFBO1FBNERiLG9DQUFDO0lBQUQsQ0EzREEsQUEyREMsSUFBQTtJQTNEWSxxQ0FBNkIsZ0NBMkR6QyxDQUFBIiwiZmlsZSI6ImluZmluaXRlLXNjcm9sbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dG9pbmplY3QsIGJpbmRhYmxlIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgSW5maW5pdGVTY3JvbGxDdXN0b21BdHRyaWJ1dGUge1xyXG4gICAgcHJpdmF0ZSBpc1RpY2tpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBAYmluZGFibGUgY2FsbGJhY2s6IEZ1bmN0aW9uO1xyXG4gICAgQGJpbmRhYmxlIHNjcm9sbEJ1ZmZlcjogbnVtYmVyID0gNTA7XHJcbiAgICBAYmluZGFibGUgaXNBY3RpdmU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgU2Nyb2xsRXZlbnROYW1lOiBzdHJpbmcgPSAnc2Nyb2xsJztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGF0dGFjaGVkKCkge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKEluZmluaXRlU2Nyb2xsQ3VzdG9tQXR0cmlidXRlLlNjcm9sbEV2ZW50TmFtZSwgdGhpcy5vblNjcm9sbENoYW5nZSk7XHJcbiAgICAgICAgdGhpcy5vblNjcm9sbENoYW5nZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRldGFjaGVkKCkge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKEluZmluaXRlU2Nyb2xsQ3VzdG9tQXR0cmlidXRlLlNjcm9sbEV2ZW50TmFtZSwgdGhpcy5vblNjcm9sbENoYW5nZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsbGJhY2tDaGFuZ2VkKG5ld0NhbGxiYWNrOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBuZXdDYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBzY3JvbGxCdWZmZXJDaGFuZ2VkKGJ1ZmZlcjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxCdWZmZXIgPSBidWZmZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaXNBY3RpdmVDaGFuZ2VkKGlzQWN0aXZlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGlzQWN0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25TY3JvbGxDaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pc1RpY2tpbmcpIHtcclxuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrU2Nyb2xsUG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNUaWNraW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pc1RpY2tpbmcgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tTY3JvbGxQb3NpdGlvbigpIHsgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRIZWlnaHQgPSB0aGlzLmVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRPZmZzZXRUb3AgPSAoPGFueT50aGlzLmVsZW1lbnQpLm9mZnNldFRvcDtcclxuICAgICAgICBjb25zdCB3aW5kb3dTY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5pbm5lckhlaWdodCArIHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgICBjb25zdCBpc1BhZ2VTY3JvbGxlZFRvRWxlbWVudEJvdHRvbSA9ICh3aW5kb3dTY3JvbGxQb3NpdGlvbiArIHRoaXMuc2Nyb2xsQnVmZmVyKSA+PSAoZWxlbWVudEhlaWdodCArIGVsZW1lbnRPZmZzZXRUb3ApO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jYWxsYmFjayAmJiBpc1BhZ2VTY3JvbGxlZFRvRWxlbWVudEJvdHRvbSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
