'use strict';

angular.module('myApp.view', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view', {
            templateUrl: 'view/view.html',
            controller: 'ViewCtrl'
        });
    }])

    .controller('ViewCtrl', ['$scope', function ($scope) {
        $scope.cylinder = new THREE.Object3D();
        $scope.cylinder.add(new THREE.Mesh(
            new THREE.CylinderGeometry(40, 40, 100, 12, 3, false, 0, Math.PI * 2),
            new THREE.MeshPhongMaterial({
                color: 0x156289,
                emissive: 0x072534,
                side: THREE.DoubleSide,
                shading: THREE.FlatShading
            })
        ));
        $scope.cylinder.add(new THREE.LineSegments(
            new THREE.WireframeGeometry(new THREE.CylinderGeometry(40, 40, 100, 12, 3)),
            new THREE.LineBasicMaterial({
                color: 0xffffff,
                transparent: true,
                opacity: 0.5
            })
        ));


        $scope.sphere = new THREE.Object3D();
        $scope.sphere.add(new THREE.Mesh(
            new THREE.SphereGeometry(60, 12, 12),
            new THREE.MeshPhongMaterial({
                color: 0xfb0000,
                emissive: 0x072534,
                side: THREE.DoubleSide,
                shading: THREE.FlatShading
            })
        ));
        $scope.sphere.add(new THREE.LineSegments(
            new THREE.WireframeGeometry(new THREE.SphereGeometry(60, 12, 12)),
            new THREE.LineBasicMaterial({
                color: 0xffffff,
                transparent: true,
                opacity: 0.5
            })
        ));

        $scope.cube = new THREE.Object3D();
        $scope.cube.add(new THREE.Mesh(
            new THREE.BoxGeometry( 80, 80, 80, 4, 4, 4 ),
            new THREE.MeshPhongMaterial({
                color: 0x00FB37,
                emissive: 0x072534,
                side: THREE.DoubleSide,
                shading: THREE.FlatShading
            })
        ));
        $scope.cube.add(new THREE.LineSegments(
            new THREE.WireframeGeometry(new THREE.BoxGeometry(80, 80, 80, 4, 4, 4)),
            new THREE.LineBasicMaterial({
                color: 0xffffff,
                transparent: true,
                opacity: 0.5
            })
        ));

        $scope.torus = new THREE.Object3D();
        $scope.torus.add(new THREE.Mesh(
            new THREE.TorusGeometry( 55, 15, 16, 100 ),
            new THREE.MeshPhongMaterial({
                color: 0xECFB00,
                emissive: 0x072534,
                side: THREE.DoubleSide,
                shading: THREE.FlatShading
            })
        ));
        $scope.torus.add(new THREE.LineSegments(
            new THREE.WireframeGeometry(new THREE.TorusGeometry( 55, 15, 16, 50 )),
            new THREE.LineBasicMaterial({
                color: 0xffffff,
                transparent: true,
                opacity: 0.5
            })
        ));


    }]);