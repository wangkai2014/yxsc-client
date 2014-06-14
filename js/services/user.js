/**
 * UserService - UserService.*
 *
 * @author WildCat <wildcat.name@gmail.com>
 * @date 2014-06-13
 */

(function () {
    angular.module('app.services.User', ['app.services.base']).service('UserService', ['BaseHttpService', function (BaseHttpService) {
        var UserService = {
            currentUser: null // 保存当前用户数据
        };

        UserService.getCsrf = function () {
            BaseHttpService.getCsrf();
        };

        /**
         * 用户注册
         * @param newUser {Object}
         * @param successCallback {Function}
         */
        UserService.reg = function (newUser, successCallback) {
            BaseHttpService.postWithUi('/user/reg', newUser, function (data) {
                UserService.currentUser = data;
                successCallback(data);
            });
        };

        return UserService;
    }]);

})();