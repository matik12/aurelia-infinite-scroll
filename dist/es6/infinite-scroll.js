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
            exports_1("InfiniteScrollCustomAttribute", InfiniteScrollCustomAttribute);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZmluaXRlLXNjcm9sbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQVNJLHVDQUFvQixPQUFnQjtvQkFUeEMsaUJBMkRDO29CQWxEdUIsWUFBTyxHQUFQLE9BQU8sQ0FBUztvQkFSNUIsY0FBUyxHQUFZLEtBQUssQ0FBQztvQkFHekIsaUJBQVksR0FBVyxFQUFFLENBQUM7b0JBQzFCLGFBQVEsR0FBWSxJQUFJLENBQUM7b0JBNkIzQixtQkFBYyxHQUFHO3dCQUNyQixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzRCQUNqQixNQUFNLENBQUMsS0FBSyxDQUFDO3dCQUNqQixDQUFDO3dCQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7NEJBQ2xCLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQztnQ0FDekIsS0FBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7Z0NBQzNCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDOzRCQUMzQixDQUFDLENBQUMsQ0FBQzt3QkFDUCxDQUFDO3dCQUVELEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO29CQUMxQixDQUFDLENBQUE7b0JBckNHLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2dCQUMzQixDQUFDO2dCQUVELGdEQUFRLEdBQVI7b0JBQ0ksTUFBTSxDQUFDLGdCQUFnQixDQUFDLDZCQUE2QixDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQzVGLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDMUIsQ0FBQztnQkFFRCxnREFBUSxHQUFSO29CQUNJLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyw2QkFBNkIsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUNuRyxDQUFDO2dCQUVELHVEQUFlLEdBQWYsVUFBZ0IsV0FBcUI7b0JBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO2dCQUNoQyxDQUFDO2dCQUVELDJEQUFtQixHQUFuQixVQUFvQixNQUFjO29CQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztnQkFDL0IsQ0FBQztnQkFFRCx1REFBZSxHQUFmLFVBQWdCLFFBQWlCO29CQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztnQkFDN0IsQ0FBQztnQkFpQk8sMkRBQW1CLEdBQTNCO29CQUNJLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO29CQUNoRCxJQUFNLGdCQUFnQixHQUFTLElBQUksQ0FBQyxPQUFRLENBQUMsU0FBUyxDQUFDO29CQUN2RCxJQUFNLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztvQkFDckUsSUFBTSw2QkFBNkIsR0FBRyxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUV2SCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLDZCQUE2QixDQUFDLENBQUMsQ0FBQzt3QkFDakQsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUNwQixDQUFDO2dCQUNMLENBQUM7Z0JBbkRhLDZDQUFlLEdBQVcsUUFBUSxDQUFDO2dCQUpqRDtvQkFBQyw0QkFBUTs7K0VBQUE7Z0JBQ1Q7b0JBQUMsNEJBQVE7O21GQUFBO2dCQUNUO29CQUFDLDRCQUFROzsrRUFBQTtnQkFOYjtvQkFBQyw4QkFBVSxFQUFFOztpREFBQTtnQkE0RGIsb0NBQUM7WUFBRCxDQTNEQSxBQTJEQyxJQUFBO1lBM0RELHlFQTJEQyxDQUFBIiwiZmlsZSI6ImluZmluaXRlLXNjcm9sbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dG9pbmplY3QsIGJpbmRhYmxlIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgSW5maW5pdGVTY3JvbGxDdXN0b21BdHRyaWJ1dGUge1xyXG4gICAgcHJpdmF0ZSBpc1RpY2tpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBAYmluZGFibGUgY2FsbGJhY2s6IEZ1bmN0aW9uO1xyXG4gICAgQGJpbmRhYmxlIHNjcm9sbEJ1ZmZlcjogbnVtYmVyID0gNTA7XHJcbiAgICBAYmluZGFibGUgaXNBY3RpdmU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgU2Nyb2xsRXZlbnROYW1lOiBzdHJpbmcgPSAnc2Nyb2xsJztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGF0dGFjaGVkKCkge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKEluZmluaXRlU2Nyb2xsQ3VzdG9tQXR0cmlidXRlLlNjcm9sbEV2ZW50TmFtZSwgdGhpcy5vblNjcm9sbENoYW5nZSk7XHJcbiAgICAgICAgdGhpcy5vblNjcm9sbENoYW5nZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRldGFjaGVkKCkge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKEluZmluaXRlU2Nyb2xsQ3VzdG9tQXR0cmlidXRlLlNjcm9sbEV2ZW50TmFtZSwgdGhpcy5vblNjcm9sbENoYW5nZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsbGJhY2tDaGFuZ2VkKG5ld0NhbGxiYWNrOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBuZXdDYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBzY3JvbGxCdWZmZXJDaGFuZ2VkKGJ1ZmZlcjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxCdWZmZXIgPSBidWZmZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaXNBY3RpdmVDaGFuZ2VkKGlzQWN0aXZlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGlzQWN0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25TY3JvbGxDaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pc1RpY2tpbmcpIHtcclxuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrU2Nyb2xsUG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNUaWNraW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pc1RpY2tpbmcgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tTY3JvbGxQb3NpdGlvbigpIHsgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRIZWlnaHQgPSB0aGlzLmVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRPZmZzZXRUb3AgPSAoPGFueT50aGlzLmVsZW1lbnQpLm9mZnNldFRvcDtcclxuICAgICAgICBjb25zdCB3aW5kb3dTY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5pbm5lckhlaWdodCArIHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgICBjb25zdCBpc1BhZ2VTY3JvbGxlZFRvRWxlbWVudEJvdHRvbSA9ICh3aW5kb3dTY3JvbGxQb3NpdGlvbiArIHRoaXMuc2Nyb2xsQnVmZmVyKSA+PSAoZWxlbWVudEhlaWdodCArIGVsZW1lbnRPZmZzZXRUb3ApO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jYWxsYmFjayAmJiBpc1BhZ2VTY3JvbGxlZFRvRWxlbWVudEJvdHRvbSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
