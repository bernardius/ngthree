angular.module('myApp').directive('diThreeJsViewer', [function () {
    function createThreeJsCanvas(parentElement, object) {
        var width = 400;
        var height = 400;
        var scene,
            camera, fieldOfView, aspectRatio, nearPlane, farPlane, sea = {};

        scene = new THREE.Scene();
        aspectRatio = width / height;
        fieldOfView = 60;
        nearPlane = 1;
        farPlane = 10000;
        camera = new THREE.PerspectiveCamera(
            fieldOfView,
            aspectRatio,
            nearPlane,
            farPlane
        );
        camera.position.x = 0;
        camera.position.z = 200;
        camera.position.y = 100;

        var renderer = new THREE.WebGLRenderer({alpha: false, antialias: true});
        renderer.setSize(width, height);
        renderer.setClearColor(0x000000, 1);

        parentElement.append(renderer.domElement);

        camera.lookAt(new THREE.Vector3(0.000, 0.000, 0.000)); // look at the center 

        var ambientLight, hemisphereLight, shadowLight;

        function createLights() {
            var ambientLight = new THREE.AmbientLight(0x000000);
            scene.add(ambientLight);

            var lights = [];
            lights[0] = new THREE.PointLight(0xffffff, 1, 0);
            lights[1] = new THREE.PointLight(0xffffff, 1, 0);
            lights[2] = new THREE.PointLight(0xffffff, 1, 0);

            lights[0].position.set(0, 200, 0);
            lights[1].position.set(100, 200, 100);
            lights[2].position.set(-100, -200, -100);

            scene.add(lights[0]);
            scene.add(lights[1]);
            scene.add(lights[2]);
        }

        createLights();

        // add object    
        scene.add(object);
        var render = function () {

            requestAnimationFrame(render);

            object.rotation.y += 0.01;

            renderer.render(scene, camera);
        };

        render();
    }

    function link(scope, element, attrs) {

        scope.$watch("threeJsObject", function () {

            if (scope.threeJsObject) {
                createThreeJsCanvas(element, scope.threeJsObject);
            }

        }, false);
    }

    return {
        restrict: 'E',
        scope: {
            threeJsObject: '='
        },
        link: link
    };
}]);