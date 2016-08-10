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
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZmluaXRlLXNjcm9sbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUdBO1FBT0ksdUNBQW9CLE9BQWdCO1lBUHhDLGlCQThDQztZQXZDdUIsWUFBTyxHQUFQLE9BQU8sQ0FBUztZQUw1QixjQUFTLEdBQVksS0FBSyxDQUFDO1lBc0IzQixtQkFBYyxHQUFHO2dCQUNyQixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUNsQixNQUFNLENBQUMscUJBQXFCLENBQUM7d0JBQ3pCLEtBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO3dCQUMzQixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztvQkFDM0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFFRCxLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUMxQixDQUFDLENBQUE7WUF6QkcsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDM0IsQ0FBQztRQUVELGdEQUFRLEdBQVI7WUFDSSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsNkJBQTZCLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUM1RixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDMUIsQ0FBQztRQUVELGdEQUFRLEdBQVI7WUFDSSxNQUFNLENBQUMsbUJBQW1CLENBQUMsNkJBQTZCLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNuRyxDQUFDO1FBRUQsb0RBQVksR0FBWixVQUFhLFdBQXFCO1lBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO1FBQ2hDLENBQUM7UUFhTywyREFBbUIsR0FBM0I7WUFDSSxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztZQUNoRCxJQUFNLGdCQUFnQixHQUFTLElBQUksQ0FBQyxPQUFRLENBQUMsU0FBUyxDQUFDO1lBQ3ZELElBQU0sb0JBQW9CLEdBQUcsTUFBTSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1lBQ3JFLElBQU0sNkJBQTZCLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyw2QkFBNkIsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDNUcsQ0FBQyxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQztZQUV2QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLDZCQUE2QixDQUFDLENBQUMsQ0FBQztnQkFDakQsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3BCLENBQUM7UUFDTCxDQUFDO1FBekNhLDZDQUFlLEdBQVcsUUFBUSxDQUFDO1FBQ25DLGlEQUFtQixHQUFXLEVBQUUsQ0FBQztRQU5uRDtZQUFDLDhCQUFVLEVBQUU7O3lDQUFBO1FBK0NiLG9DQUFDO0lBQUQsQ0E5Q0EsQUE4Q0MsSUFBQTtJQTlDWSxxQ0FBNkIsZ0NBOEN6QyxDQUFBIiwiZmlsZSI6ImluZmluaXRlLXNjcm9sbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBJbmZpbml0ZVNjcm9sbEN1c3RvbUF0dHJpYnV0ZSB7XHJcbiAgICBwcml2YXRlIGNhbGxiYWNrOiBGdW5jdGlvbjtcclxuICAgIHByaXZhdGUgaXNUaWNraW5nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBTY3JvbGxFdmVudE5hbWU6IHN0cmluZyA9ICdzY3JvbGwnO1xyXG4gICAgcHVibGljIHN0YXRpYyBNaW5pbXVtU2Nyb2xsQnVmZmVyOiBudW1iZXIgPSA1MDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGF0dGFjaGVkKCkge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKEluZmluaXRlU2Nyb2xsQ3VzdG9tQXR0cmlidXRlLlNjcm9sbEV2ZW50TmFtZSwgdGhpcy5vblNjcm9sbENoYW5nZSk7XHJcbiAgICAgICAgdGhpcy5vblNjcm9sbENoYW5nZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRldGFjaGVkKCkge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKEluZmluaXRlU2Nyb2xsQ3VzdG9tQXR0cmlidXRlLlNjcm9sbEV2ZW50TmFtZSwgdGhpcy5vblNjcm9sbENoYW5nZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsdWVDaGFuZ2VkKG5ld0NhbGxiYWNrOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBuZXdDYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uU2Nyb2xsQ2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1RpY2tpbmcpIHtcclxuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrU2Nyb2xsUG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNUaWNraW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pc1RpY2tpbmcgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tTY3JvbGxQb3NpdGlvbigpIHsgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRIZWlnaHQgPSB0aGlzLmVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRPZmZzZXRUb3AgPSAoPGFueT50aGlzLmVsZW1lbnQpLm9mZnNldFRvcDtcclxuICAgICAgICBjb25zdCB3aW5kb3dTY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5pbm5lckhlaWdodCArIHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgICBjb25zdCBpc1BhZ2VTY3JvbGxlZFRvRWxlbWVudEJvdHRvbSA9ICh3aW5kb3dTY3JvbGxQb3NpdGlvbiArIEluZmluaXRlU2Nyb2xsQ3VzdG9tQXR0cmlidXRlLk1pbmltdW1TY3JvbGxCdWZmZXIpID49IFxyXG4gICAgICAgICAgICAoZWxlbWVudEhlaWdodCArIGVsZW1lbnRPZmZzZXRUb3ApO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jYWxsYmFjayAmJiBpc1BhZ2VTY3JvbGxlZFRvRWxlbWVudEJvdHRvbSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
