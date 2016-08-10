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
exports.InfiniteScrollCustomAttribute = InfiniteScrollCustomAttribute;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZmluaXRlLXNjcm9sbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsa0NBQTJCLG1CQUFtQixDQUFDLENBQUE7QUFHL0M7SUFPSSx1Q0FBb0IsT0FBZ0I7UUFQeEMsaUJBOENDO1FBdkN1QixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBTDVCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFzQjNCLG1CQUFjLEdBQUc7WUFDckIsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDbEIsTUFBTSxDQUFDLHFCQUFxQixDQUFDO29CQUN6QixLQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztvQkFDM0IsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQzNCLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztZQUVELEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQzFCLENBQUMsQ0FBQTtRQXpCRyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUMzQixDQUFDO0lBRUQsZ0RBQVEsR0FBUjtRQUNJLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyw2QkFBNkIsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVGLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsZ0RBQVEsR0FBUjtRQUNJLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyw2QkFBNkIsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ25HLENBQUM7SUFFRCxvREFBWSxHQUFaLFVBQWEsV0FBcUI7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7SUFDaEMsQ0FBQztJQWFPLDJEQUFtQixHQUEzQjtRQUNJLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1FBQ2hELElBQU0sZ0JBQWdCLEdBQVMsSUFBSSxDQUFDLE9BQVEsQ0FBQyxTQUFTLENBQUM7UUFDdkQsSUFBTSxvQkFBb0IsR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDckUsSUFBTSw2QkFBNkIsR0FBRyxDQUFDLG9CQUFvQixHQUFHLDZCQUE2QixDQUFDLG1CQUFtQixDQUFDO1lBQzVHLENBQUMsYUFBYSxHQUFHLGdCQUFnQixDQUFDLENBQUM7UUFFdkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BCLENBQUM7SUFDTCxDQUFDO0lBekNhLDZDQUFlLEdBQVcsUUFBUSxDQUFDO0lBQ25DLGlEQUFtQixHQUFXLEVBQUUsQ0FBQztJQU5uRDtRQUFDLDhCQUFVLEVBQUU7O3FDQUFBO0lBK0NiLG9DQUFDO0FBQUQsQ0E5Q0EsQUE4Q0MsSUFBQTtBQTlDWSxxQ0FBNkIsZ0NBOEN6QyxDQUFBIiwiZmlsZSI6ImluZmluaXRlLXNjcm9sbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBJbmZpbml0ZVNjcm9sbEN1c3RvbUF0dHJpYnV0ZSB7XHJcbiAgICBwcml2YXRlIGNhbGxiYWNrOiBGdW5jdGlvbjtcclxuICAgIHByaXZhdGUgaXNUaWNraW5nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBTY3JvbGxFdmVudE5hbWU6IHN0cmluZyA9ICdzY3JvbGwnO1xyXG4gICAgcHVibGljIHN0YXRpYyBNaW5pbXVtU2Nyb2xsQnVmZmVyOiBudW1iZXIgPSA1MDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGF0dGFjaGVkKCkge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKEluZmluaXRlU2Nyb2xsQ3VzdG9tQXR0cmlidXRlLlNjcm9sbEV2ZW50TmFtZSwgdGhpcy5vblNjcm9sbENoYW5nZSk7XHJcbiAgICAgICAgdGhpcy5vblNjcm9sbENoYW5nZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRldGFjaGVkKCkge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKEluZmluaXRlU2Nyb2xsQ3VzdG9tQXR0cmlidXRlLlNjcm9sbEV2ZW50TmFtZSwgdGhpcy5vblNjcm9sbENoYW5nZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsdWVDaGFuZ2VkKG5ld0NhbGxiYWNrOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBuZXdDYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uU2Nyb2xsQ2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1RpY2tpbmcpIHtcclxuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrU2Nyb2xsUG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNUaWNraW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pc1RpY2tpbmcgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tTY3JvbGxQb3NpdGlvbigpIHsgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRIZWlnaHQgPSB0aGlzLmVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRPZmZzZXRUb3AgPSAoPGFueT50aGlzLmVsZW1lbnQpLm9mZnNldFRvcDtcclxuICAgICAgICBjb25zdCB3aW5kb3dTY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5pbm5lckhlaWdodCArIHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgICBjb25zdCBpc1BhZ2VTY3JvbGxlZFRvRWxlbWVudEJvdHRvbSA9ICh3aW5kb3dTY3JvbGxQb3NpdGlvbiArIEluZmluaXRlU2Nyb2xsQ3VzdG9tQXR0cmlidXRlLk1pbmltdW1TY3JvbGxCdWZmZXIpID49IFxyXG4gICAgICAgICAgICAoZWxlbWVudEhlaWdodCArIGVsZW1lbnRPZmZzZXRUb3ApO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jYWxsYmFjayAmJiBpc1BhZ2VTY3JvbGxlZFRvRWxlbWVudEJvdHRvbSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
